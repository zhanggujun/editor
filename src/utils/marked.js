import marked from 'marked'
import xss from 'xss'
import Hljs from './highlight'
import { EOL } from '../utils/editor'
import isPlainObject from 'lodash/isPlainObject'
const languages = ['cpp', 'xml', 'bash', 'coffeescript', 'css', 'markdown', 'http', 'java', 'javascript', 'json', 'less', 'makefile', 'nginx', 'php', 'python', 'scss', 'sql', 'stylus','js','https']
const renderer = new marked.Renderer()

marked.setOptions({
  renderer,
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight(code,lang){
    if (!~languages.indexOf(lang)) {
      return Hljs.highlightAuto(code).value
    }
    return Hljs.highlight(lang, code).value
  }
})

// 段落解析
const paragraphParse = text => {
  if(!text)
    return ''
  return `<p class="marked-paragraph">${text}</p>`
}

// 对图片进行弹窗处理, 及懒加载处理
const imageParse = (src, title, alt) => {
  if(!src)
    return ''
  const { lazy = false } = renderer
  const _src = lazy ? 'https://static.vvxiayutian.com/static/placeholder.jpg' : src
  let string = `<div class="marked-image"><img src="${_src}"`
  string += `class="marked-src" title="${title || alt || ''}"`
  string += `data-echo="${src}" class="img-pop" />`
  if(title || alt)
    string += `<div class="marked-caption"><div class="marked-caption-text">${title || alt}</div></div>`
  string += '</div>'
  return string
}

// 外链
const linkParse = (href, title, text) => {
  if(!href)
    return '';
  const target = href.substr(0, 1) === '#' ? '_self' : '_blank'
  const cName = href.substr(0, 1) === '#' ? '' : 'marked-link'
  let string = `<a href="${href}" target="${target}" class="${cName}">${text}</a>`
  string = string.replace(/\s+/g, ' ').replace('\n', '')
  return string
}

const headingParse = (text,level,raw) => {
  if(!text)
    return ''
  return `<div class="marked-head"><h${level} class="marked-h${level}">${text}</h${level}></div>`
}

const blockquoteParse = string => {
  if(!string)
    return ''
  return `<div class="marked-blockquote"><blockquote>${string}</blockquote></div>`
}

const HTML_DECODE = str => {
  if (str.length === 0)
    return ''
  str = str.replace(/&amp;/g, '&')
  str = str.replace(/&lt;/g, '<')
  str = str.replace(/&gt;/g, '>')
  return str
}

const getLines = code => {
  try{
    const lines = code.split(EOL)
    let str = `<div class="marked-line">`
    str += '<div class="marked-line-box">'
    for(let i=1;i<=lines.length;i++){
      str += `<div class="marked-number">${i}</div>`
    }
    str += `</div></div>`
    return str
  }catch(ex){
    return ''
  }
}

const headingCode = (code,lang) => {
  if(!code)
    return ''
  code = HTML_DECODE(code)
  if (!~languages.indexOf(lang)) {
    code = Hljs.highlightAuto(code).value
  }else{
    code = Hljs.highlight(lang, code).value
  }
  return `<div class="marked-code"><pre class="marked-scroll"><code class="language-${lang}">${code}</code></pre></div>`
}

const htmlParse = html => {
  const { xssOptions = {} } = renderer || {}
  let content = html
  if(xssOptions){
    const myxss = new xss.FilterXSS(xssOptions)
    content = myxss.process(html)
  }
  return `<div class="marked-html">${content}</div>`
}

renderer.link = linkParse
renderer.paragraph = paragraphParse
renderer.image = imageParse
renderer.heading = headingParse
renderer.code = headingCode
renderer.html = htmlParse
renderer.blockquote = blockquoteParse

const xssDefault = _ => {
  return {
    whiteList:{
      iframe:[
        'src',
        'scrolling',
        'border',
        'marginwidth',
        'marginheight',
        'width',
        'height',
        'frameborder',
        'framespacing',
        'allowfullscreen',
        'style',
        'class'
      ]
    }
  }
}
const htmlStr = (content,options = {}) => {
  if (typeof content !== 'string')
    return ''
  const xss = xssDefault()
  const { xssOptions = false,lazy = false } = options
  renderer.xssOptions = xssOptions ? (isPlainObject(xssOptions) ? { ...xss,...xssOptions } : { ...xss }) : false
  renderer.lazy = lazy
  let html = marked(content, { renderer })
  // 返回解析内容
  html = `<div class="marked-body markdown-body">${html}</div>`
  return { html }
}
export default (content,xssOptions = false) => {
  let { html } = htmlStr(content,xssOptions)
  return { html }
}
