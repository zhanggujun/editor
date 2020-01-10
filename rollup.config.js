import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import { scss, postcss } from 'svelte-preprocess'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano' // 优化css
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import filesize from 'rollup-plugin-filesize'
import copy from 'rollup-plugin-copy'
import nodent from 'rollup-plugin-nodent' // 转async/await
import json from 'rollup-plugin-json'

import css from 'rollup-plugin-css-only'

const production = !process.env.ROLLUP_WATCH

const _autoprefixer = _ => {
  return autoprefixer({
    'overrideBrowserslist': [
			'last 20 versions'
    ]
  })
}

// "sirv-cli": "^0.4.4",
export default {
	input: 'src/index.js',
	output: {
		sourcemap: false,
		format: 'umd',
		name: 'MdEditor',
		file: !production ? 'public/dist/editor.js' : 'dist/editor.min.js',
	},
	plugins: [
		json(),
		svelte({
			dev: !production,
			css: css => {
				css.write(!production ? 'public/dist/editor.css' : 'dist/editor.css',false)
			},
			preprocess:[
				scss(),
				postcss({
					plugins: [
						_autoprefixer(),
						cssnano()
					]
				})
			]
		}),
		css({ output:!production ? 'public/dist/reset.css' : 'dist/reset.css' }),
		nodent({
			promises: true,
			noRuntime: true
		}),
		resolve({
			browser: true,
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
		}),
		commonjs(),
		babel({
			extensions: ['.js','.mjs','.html','.svelte'],
			// exclude: ['node_modules/**'],
			runtimeHelpers: true
		}),
		!production && livereload(),
		production && filesize(),
		production && terser(),
		production && uglify(),
		copy({
      targets: [
        { src:[
					'src/icon/iconfont.eot',
					'src/icon/iconfont.svg',
					'src/icon/iconfont.ttf',
					'src/icon/iconfont.woff',
					'src/icon/iconfont.woff2'
				],dest:!production ? 'public/dist/icon' : 'dist/icon'},
      ]
    }),
		!production && serve({
			open: true,
			contentBase: 'public',
			historyApiFallback: true,
			host: 'localhost',
			port: 9988
		})
	],
	watch: {
		clearScreen: false
	}
}

// function serve() {
// 	let started = false
// 	return {
// 		writeBundle() {
// 			if (!started) {
// 				started = true
// 				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
// 					stdio: ['ignore', 'inherit', 'inherit'],
// 					shell: true
// 				})
// 			}
// 		}
// 	}
// }
