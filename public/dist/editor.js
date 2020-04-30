
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.MdEditor = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function () {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function noop() {}

  function add_location(element, file, line, column, _char) {
    element.__svelte_meta = {
      loc: {
        file: file,
        line: line,
        column: column,
        "char": _char
      }
    };
  }

  function run(fn) {
    return fn();
  }

  function blank_object() {
    return Object.create(null);
  }

  function run_all(fns) {
    fns.forEach(run);
  }

  function is_function(thing) {
    return typeof thing === 'function';
  }

  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a && _typeof(a) === 'object' || typeof a === 'function';
  }

  function append(target, node) {
    target.appendChild(node);
  }

  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }

  function detach(node) {
    node.parentNode.removeChild(node);
  }

  function destroy_each(iterations, detaching) {
    for (var i = 0; i < iterations.length; i += 1) {
      if (iterations[i]) iterations[i].d(detaching);
    }
  }

  function element(name) {
    return document.createElement(name);
  }

  function text(data) {
    return document.createTextNode(data);
  }

  function space() {
    return text(' ');
  }

  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return function () {
      return node.removeEventListener(event, handler, options);
    };
  }

  function attr(node, attribute, value) {
    if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
  }

  function children(element) {
    return Array.from(element.childNodes);
  }

  function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
  }

  function custom_event(type, detail) {
    var e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
  }

  var current_component;

  function set_current_component(component) {
    current_component = component;
  }

  function get_current_component() {
    if (!current_component) throw new Error("Function called outside component initialization");
    return current_component;
  }

  function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
  }

  function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
  }

  function createEventDispatcher() {
    var component = get_current_component();
    return function (type, detail) {
      var callbacks = component.$$.callbacks[type];

      if (callbacks) {
        var event = custom_event(type, detail);
        callbacks.slice().forEach(function (fn) {
          fn.call(component, event);
        });
      }
    };
  }

  function getContext(key) {
    return get_current_component().$$.context.get(key);
  }

  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = Promise.resolve();
  var update_scheduled = false;

  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }

  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }

  var flushing = false;
  var seen_callbacks = new Set();

  function flush() {
    if (flushing) return;
    flushing = true;

    do {
      for (var i = 0; i < dirty_components.length; i += 1) {
        var component = dirty_components[i];
        set_current_component(component);
        update(component.$$);
      }

      dirty_components.length = 0;

      while (binding_callbacks.length) {
        binding_callbacks.pop()();
      }

      for (var _i = 0; _i < render_callbacks.length; _i += 1) {
        var callback = render_callbacks[_i];

        if (!seen_callbacks.has(callback)) {
          seen_callbacks.add(callback);
          callback();
        }
      }

      render_callbacks.length = 0;
    } while (dirty_components.length);

    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }

    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
  }

  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      var dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }

  var outroing = new Set();
  var outros;

  function transition_in(block, local) {
    if (block && block.i) {
      outroing["delete"](block);
      block.i(local);
    }
  }

  function transition_out(block, local, detach, callback) {
    if (block && block.o) {
      if (outroing.has(block)) return;
      outroing.add(block);
      outros.c.push(function () {
        outroing["delete"](block);

        if (callback) {
          if (detach) block.d(1);
          callback();
        }
      });
      block.o(local);
    }
  }

  function create_component(block) {
    block && block.c();
  }

  function mount_component(component, target, anchor) {
    var _component$$$ = component.$$,
        fragment = _component$$$.fragment,
        on_mount = _component$$$.on_mount,
        on_destroy = _component$$$.on_destroy,
        after_update = _component$$$.after_update;
    fragment && fragment.m(target, anchor);
    add_render_callback(function () {
      var new_on_destroy = on_mount.map(run).filter(is_function);

      if (on_destroy) {
        on_destroy.push.apply(on_destroy, _toConsumableArray(new_on_destroy));
      } else {
        run_all(new_on_destroy);
      }

      component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
  }

  function destroy_component(component, detaching) {
    var $$ = component.$$;

    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching);
      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }

  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }

    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }

  function init(component, options, instance, create_fragment, not_equal, props) {
    var dirty = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [-1];
    var parent_component = current_component;
    set_current_component(component);
    var prop_values = options.props || {};
    var $$ = component.$$ = {
      fragment: null,
      ctx: null,
      props: props,
      update: noop,
      not_equal: not_equal,
      bound: blank_object(),
      on_mount: [],
      on_destroy: [],
      before_update: [],
      after_update: [],
      context: new Map(parent_component ? parent_component.$$.context : []),
      callbacks: blank_object(),
      dirty: dirty
    };
    var ready = false;
    $$.ctx = instance ? instance(component, prop_values, function (i, ret) {
      var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if ($$.bound[i]) $$.bound[i](value);
        if (ready) make_dirty(component, i);
      }

      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

    if (options.target) {
      if (options.hydrate) {
        var nodes = children(options.target);
        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        $$.fragment && $$.fragment.c();
      }

      if (options.intro) transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor);
      flush();
    }

    set_current_component(parent_component);
  }

  var SvelteComponent = /*#__PURE__*/function () {
    function SvelteComponent() {
      _classCallCheck(this, SvelteComponent);
    }

    _createClass(SvelteComponent, [{
      key: "$destroy",
      value: function $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
    }, {
      key: "$on",
      value: function $on(type, callback) {
        var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return function () {
          var index = callbacks.indexOf(callback);
          if (index !== -1) callbacks.splice(index, 1);
        };
      }
    }, {
      key: "$set",
      value: function $set() {}
    }]);

    return SvelteComponent;
  }();

  function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({
      version: '3.21.0'
    }, detail)));
  }

  function append_dev(target, node) {
    dispatch_dev("SvelteDOMInsert", {
      target: target,
      node: node
    });
    append(target, node);
  }

  function insert_dev(target, node, anchor) {
    dispatch_dev("SvelteDOMInsert", {
      target: target,
      node: node,
      anchor: anchor
    });
    insert(target, node, anchor);
  }

  function detach_dev(node) {
    dispatch_dev("SvelteDOMRemove", {
      node: node
    });
    detach(node);
  }

  function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
    var modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
    if (has_prevent_default) modifiers.push('preventDefault');
    if (has_stop_propagation) modifiers.push('stopPropagation');
    dispatch_dev("SvelteDOMAddEventListener", {
      node: node,
      event: event,
      handler: handler,
      modifiers: modifiers
    });
    var dispose = listen(node, event, handler, options);
    return function () {
      dispatch_dev("SvelteDOMRemoveEventListener", {
        node: node,
        event: event,
        handler: handler,
        modifiers: modifiers
      });
      dispose();
    };
  }

  function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null) dispatch_dev("SvelteDOMRemoveAttribute", {
      node: node,
      attribute: attribute
    });else dispatch_dev("SvelteDOMSetAttribute", {
      node: node,
      attribute: attribute,
      value: value
    });
  }

  function prop_dev(node, property, value) {
    node[property] = value;
    dispatch_dev("SvelteDOMSetProperty", {
      node: node,
      property: property,
      value: value
    });
  }

  function validate_each_argument(arg) {
    if (typeof arg !== 'string' && !(arg && _typeof(arg) === 'object' && 'length' in arg)) {
      var msg = '{#each} only iterates over array-like objects.';

      if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
        msg += ' You can use a spread to convert this iterable into an array.';
      }

      throw new Error(msg);
    }
  }

  function validate_slots(name, slot, keys) {
    for (var _i2 = 0, _Object$keys = Object.keys(slot); _i2 < _Object$keys.length; _i2++) {
      var slot_key = _Object$keys[_i2];

      if (!~keys.indexOf(slot_key)) {
        console.warn("<".concat(name, "> received an unexpected slot \"").concat(slot_key, "\"."));
      }
    }
  }

  var SvelteComponentDev = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(SvelteComponentDev, _SvelteComponent);

    var _super2 = _createSuper(SvelteComponentDev);

    function SvelteComponentDev(options) {
      _classCallCheck(this, SvelteComponentDev);

      if (!options || !options.target && !options.$$inline) {
        throw new Error("'target' is a required option");
      }

      return _super2.call(this);
    }

    _createClass(SvelteComponentDev, [{
      key: "$destroy",
      value: function $destroy() {
        _get(_getPrototypeOf(SvelteComponentDev.prototype), "$destroy", this).call(this);

        this.$destroy = function () {
          console.warn("Component was already destroyed");
        };
      }
    }, {
      key: "$capture_state",
      value: function $capture_state() {}
    }, {
      key: "$inject_state",
      value: function $inject_state() {}
    }]);

    return SvelteComponentDev;
  }(SvelteComponent);

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _shortcutKey_1_0_0_shortcutKey = createCommonjsModule(function (module) {
    (function (global) {
      var k,
          _handlers = {},
          _mods = {
        16: false,
        18: false,
        17: false,
        91: false
      },
          _scope = 'all',
          _MODIFIERS = {
        '⇧': 16,
        shift: 16,
        '⌥': 18,
        alt: 18,
        option: 18,
        '⌃': 17,
        ctrl: 17,
        control: 17,
        '⌘': 91,
        command: 91
      },
          _MAP = {
        backspace: 8,
        tab: 9,
        clear: 12,
        enter: 13,
        'return': 13,
        esc: 27,
        escape: 27,
        space: 32,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        del: 46,
        'delete': 46,
        home: 36,
        end: 35,
        pageup: 33,
        pagedown: 34,
        ',': 188,
        '.': 190,
        '/': 191,
        '`': 192,
        '-': 189,
        '=': 187,
        ';': 186,
        '\'': 222,
        '[': 219,
        ']': 221,
        '\\': 220
      },
          code = function code(x) {
        return _MAP[x] || x.toUpperCase().charCodeAt(0);
      },
          _downKeys = [];

      for (k = 1; k < 20; k++) {
        _MAP['f' + k] = 111 + k;
      }

      function index(array, item) {
        var i = array.length;

        while (i--) {
          if (array[i] === item) return i;
        }

        return -1;
      }

      function compareArray(a1, a2) {
        if (a1.length != a2.length) return false;

        for (var i = 0; i < a1.length; i++) {
          if (a1[i] !== a2[i]) return false;
        }

        return true;
      }

      var modifierMap = {
        16: 'shiftKey',
        18: 'altKey',
        17: 'ctrlKey',
        91: 'metaKey'
      };

      function updateModifierKey(event) {
        for (k in _mods) {
          _mods[k] = event[modifierMap[k]];
        }
      }

      function dispatch(event) {
        var key, handler, k, i, modifiersMatch, scope;
        key = event.keyCode;

        if (index(_downKeys, key) == -1) {
          _downKeys.push(key);
        }

        if (key == 93 || key == 224) key = 91;

        if (key in _mods) {
          _mods[key] = true;

          for (k in _MODIFIERS) {
            if (_MODIFIERS[k] == key) assignKey[k] = true;
          }

          return;
        }

        updateModifierKey(event);
        if (!assignKey.filter.call(this, event)) return;
        if (!(key in _handlers)) return;
        scope = getScope();

        for (i = 0; i < _handlers[key].length; i++) {
          handler = _handlers[key][i];

          if (handler.scope == scope || handler.scope == 'all') {
            modifiersMatch = handler.mods.length > 0;

            for (k in _mods) {
              if (!_mods[k] && index(handler.mods, +k) > -1 || _mods[k] && index(handler.mods, +k) == -1) modifiersMatch = false;
            }

            if (handler.mods.length == 0 && !_mods[16] && !_mods[18] && !_mods[17] && !_mods[91] || modifiersMatch) {
              if (handler.method(event, handler) === false) {
                if (event.preventDefault) event.preventDefault();else event.returnValue = false;
                if (event.stopPropagation) event.stopPropagation();
                if (event.cancelBubble) event.cancelBubble = true;
              }
            }
          }
        }
      }

      function clearModifier(event) {
        var key = event.keyCode,
            k,
            i = index(_downKeys, key);

        if (i >= 0) {
          _downKeys.splice(i, 1);
        }

        if (key == 93 || key == 224) key = 91;

        if (key in _mods) {
          _mods[key] = false;

          for (k in _MODIFIERS) {
            if (_MODIFIERS[k] == key) assignKey[k] = false;
          }
        }
      }

      function resetModifiers() {
        for (k in _mods) {
          _mods[k] = false;
        }

        for (k in _MODIFIERS) {
          assignKey[k] = false;
        }
      }

      function assignKey(key, scope, method) {
        var keys, mods;
        keys = getKeys(key);

        if (method === undefined) {
          method = scope;
          scope = 'all';
        }

        for (var i = 0; i < keys.length; i++) {
          mods = [];
          key = keys[i].split('+');

          if (key.length > 1) {
            mods = getMods(key);
            key = [key[key.length - 1]];
          }

          key = key[0];
          key = code(key);
          if (!(key in _handlers)) _handlers[key] = [];

          _handlers[key].push({
            shortcut: keys[i],
            scope: scope,
            method: method,
            key: keys[i],
            mods: mods
          });
        }
      }

      function unbindKey(key, scope) {
        var multipleKeys,
            keys,
            mods = [],
            i,
            j,
            obj;
        multipleKeys = getKeys(key);

        for (j = 0; j < multipleKeys.length; j++) {
          keys = multipleKeys[j].split('+');

          if (keys.length > 1) {
            mods = getMods(keys);
            key = keys[keys.length - 1];
          }

          key = code(key);

          if (scope === undefined) {
            scope = getScope();
          }

          if (!_handlers[key]) {
            return;
          }

          for (i in _handlers[key]) {
            obj = _handlers[key][i];

            if (obj.scope === scope && compareArray(obj.mods, mods)) {
              _handlers[key][i] = {};
            }
          }
        }
      }

      function isPressed(keyCode) {
        if (typeof keyCode == 'string') {
          keyCode = code(keyCode);
        }

        return index(_downKeys, keyCode) != -1;
      }

      function getPressedKeyCodes() {
        return _downKeys.slice(0);
      }

      function filter(event) {
        var tagName = (event.target || event.srcElement).tagName;
        return !(tagName == 'INPUT' || tagName == 'SELECT' || tagName == 'TEXTAREA');
      }

      for (k in _MODIFIERS) {
        assignKey[k] = false;
      }

      function setScope(scope) {
        _scope = scope || 'all';
      }

      function getScope() {
        return _scope || 'all';
      }

      function deleteScope(scope) {
        var key, handlers, i;

        for (key in _handlers) {
          handlers = _handlers[key];

          for (i = 0; i < handlers.length;) {
            if (handlers[i].scope === scope) handlers.splice(i, 1);else i++;
          }
        }
      }

      function getKeys(key) {
        var keys;
        key = key.replace(/\s/g, '');
        keys = key.split(',');

        if (keys[keys.length - 1] == '') {
          keys[keys.length - 2] += ',';
        }

        return keys;
      }

      function getMods(key) {
        var mods = key.slice(0, key.length - 1);

        for (var mi = 0; mi < mods.length; mi++) {
          mods[mi] = _MODIFIERS[mods[mi]];
        }

        return mods;
      }

      function addEvent(object, event, method) {
        if (object.addEventListener) object.addEventListener(event, method, false);else if (object.attachEvent) object.attachEvent('on' + event, function () {
          method(window.event);
        });
      }
      addEvent(document, 'keydown', function (event) {
        dispatch(event);
      });
      addEvent(document, 'keyup', clearModifier);
      addEvent(window, 'focus', resetModifiers);
      var previousKey = global.key;

      function noConflict() {
        var k = global.key;
        global.key = previousKey;
        return k;
      }

      global.key = assignKey;
      global.key.setScope = setScope;
      global.key.getScope = getScope;
      global.key.deleteScope = deleteScope;
      global.key.filter = filter;
      global.key.isPressed = isPressed;
      global.key.getPressedKeyCodes = getPressedKeyCodes;
      global.key.noConflict = noConflict;
      global.key.unbind = unbindKey;
      module.exports = key;
    })(window);
  });

  function isObjectLike(value) {
    return value != null && _typeof(value) == 'object';
  }

  var isObjectLike_1 = isObjectLike;

  var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var _freeGlobal = freeGlobal;

  var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
  var root = _freeGlobal || freeSelf || Function('return this')();
  var _root = root;

  var _Symbol2 = _root.Symbol;
  var _Symbol = _Symbol2;

  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);

    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }

    return result;
  }

  var _getRawTag = getRawTag;

  var objectProto$1 = Object.prototype;
  var nativeObjectToString$1 = objectProto$1.toString;

  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }

  var _objectToString = objectToString;

  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';
  var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }

    return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
  }

  var _baseGetTag = baseGetTag;

  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }

  var _overArg = overArg;

  var getPrototype = _overArg(Object.getPrototypeOf, Object);
  var _getPrototype = getPrototype;

  var objectTag = '[object Object]';
  var funcProto = Function.prototype,
      objectProto$2 = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
  var objectCtorString = funcToString.call(Object);

  function isPlainObject(value) {
    if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
      return false;
    }

    var proto = _getPrototype(value);

    if (proto === null) {
      return true;
    }

    var Ctor = hasOwnProperty$1.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }

  var isPlainObject_1 = isPlainObject;

  function isElement(value) {
    return isObjectLike_1(value) && value.nodeType === 1 && !isPlainObject_1(value);
  }

  var isElement_1 = isElement;

  var jq = {
    $: function $(selector) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
      var isAll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      context = jq._$(context);
      return isAll ? context.querySelectorAll(selector) : context.querySelector(selector);
    },
    _$: function _$(context) {
      var _content = document;

      if (isElement_1(context)) {
        _content = context;
      } else if (typeof context === 'string') {
        _content = document.querySelector(context);
      } else {
        _content = document;
      }

      return _content;
    },
    on: function on(element, events, handler) {
      if (!(events instanceof Array)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        element.addEventListener(events[i], handler, false);
      }
    },
    off: function off(element, events, handler) {
      if (!(events instanceof Array)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        element.removeEventListener(events[i], handler, false);
      }
    },
    hasClass: function hasClass(el, className) {
      var reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
      return reg.test(el.className);
    },
    addClass: function addClass(el, className) {
      if (jq.hasClass(el, className)) {
        return;
      }

      var newClass = el.className.split(' ');
      newClass.push(className);
      el.className = newClass.join(' ');
    },
    removeClass: function removeClass(el, className) {
      if (jq.hasClass(el, className)) {
        var newClass = ' ' + el.className.replace(/[\t\r\n]/g, '') + ' ';

        while (newClass.indexOf(' ' + className + ' ') >= 0) {
          newClass = newClass.replace(' ' + className + ' ', ' ');
        }

        el.className = newClass.replace(/^\s+|\s+$/g, '');
      }
    }
  };

  var Keyboard = /*#__PURE__*/function () {
    function Keyboard() {
      _classCallCheck(this, Keyboard);
    }

    _createClass(Keyboard, [{
      key: "isTarget",
      value: function isTarget(event, oBox) {
        var element = jq.$('.md-text', oBox);
        return event.target == element;
      }
    }, {
      key: "bind",
      value: function bind(key, fn, isDefault, el) {
        var _this = this;

        _shortcutKey_1_0_0_shortcutKey.filter = function (_) {
          return true;
        };

        _shortcutKey_1_0_0_shortcutKey(key, function (event, handler) {
          var target = isElement_1(el) ? _this.isTarget(event, el) : document;
          if (!target) return false;
          if (isDefault) event.preventDefault(), event.cancelBubble = true;
          typeof fn === 'function' && fn(event, handler);
        });
      }
    }, {
      key: "unbind",
      value: function unbind(key) {
        _shortcutKey_1_0_0_shortcutKey.unbind(key);
      }
    }, {
      key: "isPressed",
      value: function isPressed(key) {
        return _shortcutKey_1_0_0_shortcutKey.isPressed(key);
      }
    }]);

    return Keyboard;
  }();

  var keyboard = new Keyboard();

  function isObject(value) {
    var type = _typeof(value);

    return value != null && (type == 'object' || type == 'function');
  }

  var isObject_1 = isObject;

  var now = function now() {
    return _root.Date.now();
  };

  var now_1 = now;

  var symbolTag = '[object Symbol]';

  function isSymbol(value) {
    return _typeof(value) == 'symbol' || isObjectLike_1(value) && _baseGetTag(value) == symbolTag;
  }

  var isSymbol_1 = isSymbol;

  var NAN = 0 / 0;
  var reTrim = /^\s+|\s+$/g;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;

  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }

    if (isSymbol_1(value)) {
      return NAN;
    }

    if (isObject_1(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject_1(other) ? other + '' : other;
    }

    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }

    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }

  var toNumber_1 = toNumber;

  var FUNC_ERROR_TEXT = 'Expected a function';
  var nativeMax = Math.max,
      nativeMin = Math.min;

  function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }

    wait = toNumber_1(wait) || 0;

    if (isObject_1(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;
      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }

    function timerExpired() {
      var time = now_1();

      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }

      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      if (trailing && lastArgs) {
        return invokeFunc(time);
      }

      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }

      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now_1());
    }

    function debounced() {
      var time = now_1(),
          isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }

        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }

      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }

      return result;
    }

    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  var debounce_1 = debounce;

  var innerBool = false;
  var textBool = false;
  var PLATFORM = navigator.platform.toLowerCase();
  var EOL = PLATFORM == 'win32' ? '\r\n' : '\n';
  var CMD = PLATFORM.indexOf('mac') > -1 ? 'command' : 'ctrl';
  var INDENT = '  ';
  var syncScroll = function syncScroll(oBox, target) {
    debounce_1(function () {
      if (!oBox) return false;
      var oText = jq.$('.md-text', oBox);
      var oInner = jq.$('.md-inner', oBox);
      var oSection = jq.$('.md-section', oBox);
      var oTextHeight = oText.scrollHeight;
      var oTextClienHeight = oText.clientHeight;
      var oSectionHeight = oSection.scrollHeight;
      var oInnerClientHeight = oInner.clientHeight;
      var diffText = oTextHeight - oTextClienHeight;
      var diffSection = oSectionHeight - oInnerClientHeight;

      if (target == 'text') {
        textBool = true;

        if (innerBool) {
          innerBool = false;
          textBool = false;
          return false;
        }

        var oTextScrollTop = oText.scrollTop;
        oInner.scrollTop = oTextScrollTop * (diffSection / diffText);
        return false;
      }

      if (target == 'inner') {
        innerBool = true;

        if (textBool) {
          innerBool = false;
          textBool = false;
          return false;
        }

        var oInnerScrollTop = oInner.scrollTop;
        oText.scrollTop = oInnerScrollTop * (diffText / diffSection);
        return false;
      }
    }, 30)();
  };
  var ToolCode = {
    code: EOL + '```js' + EOL + EOL + '```',
    table: function table() {
      var buffer = ['column1 | column2 | column3  ', '------- | ------- | -------  ', 'column1 | column2 | column3  ', 'column1 | column2 | column3  ', 'column1 | column2 | column3  '];
      return EOL + buffer.join(EOL) + EOL;
    }
  };
  var ToolLeft = [{
    icon: 'icon-redo',
    title: '撤销',
    name: 'undo',
    key: CMD + '+z'
  }, {
    icon: 'icon-chongzuo',
    title: '重做',
    name: 'redo',
    key: CMD + '+shift+z'
  }, {
    icon: 'icon-cuti',
    title: '粗体',
    code: '****',
    range: -2,
    name: 'bold',
    key: 'shift+alt+b'
  }, {
    icon: 'icon-xieti',
    title: '斜体',
    code: '**',
    range: -1,
    name: 'italic',
    key: 'shift+alt+i'
  }, {
    icon: 'icon-xiahuaxian',
    title: '下划线',
    code: '<u></u>',
    range: -4,
    name: 'underline',
    key: 'shift+alt+e'
  }, {
    icon: 'icon-shanchuxian',
    title: '删除线',
    code: '~~~~',
    range: -2,
    name: 'strikethrough',
    key: 'shift+alt+d'
  }, {
    icon: 'icon-h',
    title: 'H1',
    code: '# ',
    name: 'h1',
    key: 'shift+alt+1'
  }, {
    icon: 'icon-h1',
    title: 'H2',
    code: '## ',
    name: 'h2',
    key: 'shift+alt+2'
  }, {
    icon: 'icon-h3',
    title: 'H3',
    code: '### ',
    name: 'h3',
    key: 'shift+alt+3'
  }, {
    icon: 'icon-h5',
    title: 'H4',
    code: '#### ',
    name: 'h4',
    key: 'shift+alt+4'
  }, {
    icon: 'icon-h2',
    title: 'H5',
    code: '##### ',
    name: 'h5',
    key: 'shift+alt+5'
  }, {
    icon: 'icon-h4',
    title: 'H6',
    code: '###### ',
    name: 'h6',
    key: 'shift+alt+6'
  }, {
    icon: 'icon-yinyong',
    title: '引用',
    code: '> ',
    name: 'quote',
    key: 'shift+alt+q'
  }, {
    icon: 'icon-code',
    title: '代码',
    code: ToolCode.code,
    range: -4,
    name: 'code',
    key: 'shift+alt+c'
  }, {
    icon: 'icon-youxuliebiao',
    title: '有序列表',
    code: '1. ',
    name: 'orderedlist',
    key: 'shift+alt+o'
  }, {
    icon: 'icon-wuxuliebiao',
    title: '无序列表',
    code: '- ',
    name: 'unorderedlist',
    key: 'shift+alt+u'
  }, {
    icon: 'icon-lianjie',
    title: '链接',
    name: 'link',
    range: -3,
    code: '[]()',
    key: 'shift+alt+l'
  }, {
    icon: 'icon-dashujukeshihuaico-',
    title: '表格',
    name: 'table',
    code: ToolCode.table(),
    key: 'shift+alt+t'
  }, {
    icon: 'icon-fengexian',
    title: '分割线',
    name: 'line',
    code: '----' + EOL,
    key: 'shift+alt+h'
  }, {
    icon: 'icon-tupian',
    title: '图片',
    range: -3,
    code: '![]()',
    name: 'image',
    key: 'shift+alt+p'
  }];
  var ToolRight = [{
    icon: 'icon-fenlan',
    title: '分屏',
    name: 'splitscreen',
    key: 'shift+alt+s'
  }, {
    icon: 'icon-xianshiqi',
    title: '预览',
    name: 'preview',
    key: 'shift+alt+v'
  }, {
    icon: 'icon-quanping',
    title: '全屏',
    name: 'fullscreen',
    key: 'shift+alt+f'
  }];

  var file = "src/components/tool/index.svelte";

  function get_each_context(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[11] = list[i];
    return child_ctx;
  }

  function get_each_context_1(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[11] = list[i];
    return child_ctx;
  }

  function create_each_block_1(ctx) {
    var i;
    var i_data_name_value;
    var i_class_value;
    var i_title_value;
    var dispose;

    function click_handler() {
      var _ctx;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_ctx = ctx)[9].apply(_ctx, [ctx[11]].concat(args));
    }

    var block = {
      c: function create() {
        i = element("i");
        attr_dev(i, "data-name", i_data_name_value = ctx[11].name || ctx[11].icon || "");
        attr_dev(i, "class", i_class_value = "md-icon iconfont " + (ctx[11].icon || ctx[11].name) + " svelte-iusbe8");
        attr_dev(i, "title", i_title_value = "".concat(ctx[11].title || "", " ").concat(ctx[11].key || ""));
        add_location(i, file, 4, 6, 159);
      },
      m: function mount(target, anchor, remount) {
        insert_dev(target, i, anchor);
        if (remount) dispose();
        dispose = listen_dev(i, "click", click_handler, false, false, false);
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;

        if (dirty & 8 && i_data_name_value !== (i_data_name_value = ctx[11].name || ctx[11].icon || "")) {
          attr_dev(i, "data-name", i_data_name_value);
        }

        if (dirty & 8 && i_class_value !== (i_class_value = "md-icon iconfont " + (ctx[11].icon || ctx[11].name) + " svelte-iusbe8")) {
          attr_dev(i, "class", i_class_value);
        }

        if (dirty & 8 && i_title_value !== (i_title_value = "".concat(ctx[11].title || "", " ").concat(ctx[11].key || ""))) {
          attr_dev(i, "title", i_title_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(i);
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block_1.name,
      type: "each",
      source: "(4:4) {#each toollist as item}",
      ctx: ctx
    });
    return block;
  }

  function create_each_block(ctx) {
    var i;
    var i_class_value;
    var i_title_value;
    var dispose;

    function click_handler_1() {
      var _ctx2;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return (_ctx2 = ctx)[10].apply(_ctx2, [ctx[11]].concat(args));
    }

    var block = {
      c: function create() {
        i = element("i");
        attr_dev(i, "class", i_class_value = "md-icon iconfont " + (ctx[11].icon || ctx[11].name) + " svelte-iusbe8");
        attr_dev(i, "title", i_title_value = "".concat(ctx[11].title, " ").concat(ctx[11].key || ""));
        toggle_class(i, "md-active", ctx[11].name == "splitscreen" && ctx[1] || ctx[11].name == "preview" && ctx[2] || ctx[11].name == "fullscreen" && ctx[0]);
        add_location(i, file, 14, 6, 497);
      },
      m: function mount(target, anchor, remount) {
        insert_dev(target, i, anchor);
        if (remount) dispose();
        dispose = listen_dev(i, "click", click_handler_1, false, false, false);
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;

        if (dirty & 7) {
          toggle_class(i, "md-active", ctx[11].name == "splitscreen" && ctx[1] || ctx[11].name == "preview" && ctx[2] || ctx[11].name == "fullscreen" && ctx[0]);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(i);
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block.name,
      type: "each",
      source: "(14:4) {#each ToolRight as item}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment(ctx) {
    var div2;
    var div0;
    var div0_class_value;
    var t0;
    var div1;
    var i;
    var t1;
    var each_value_1 = ctx[3];
    validate_each_argument(each_value_1);
    var each_blocks_1 = [];

    for (var _i = 0; _i < each_value_1.length; _i += 1) {
      each_blocks_1[_i] = create_each_block_1(get_each_context_1(ctx, each_value_1, _i));
    }

    var each_value = ToolRight;
    validate_each_argument(each_value);
    var each_blocks = [];

    for (var _i2 = 0; _i2 < each_value.length; _i2 += 1) {
      each_blocks[_i2] = create_each_block(get_each_context(ctx, each_value, _i2));
    }

    var block = {
      c: function create() {
        div2 = element("div");
        div0 = element("div");

        for (var _i3 = 0; _i3 < each_blocks_1.length; _i3 += 1) {
          each_blocks_1[_i3].c();
        }

        t0 = space();
        div1 = element("div");
        i = element("i");
        t1 = space();

        for (var _i4 = 0; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].c();
        }

        attr_dev(div0, "class", div0_class_value = "md-icon-box md-tool-l " + (ctx[2] && "md-tool-hide") + " svelte-iusbe8");
        add_location(div0, file, 2, 2, 60);
        attr_dev(i, "class", "md-line");
        add_location(i, file, 12, 4, 437);
        attr_dev(div1, "class", "md-icon-box md-tool-r svelte-iusbe8");
        add_location(div1, file, 11, 2, 397);
        attr_dev(div2, "class", "md-tool svelte-iusbe8");
        add_location(div2, file, 1, 0, 36);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div2, anchor);
        append_dev(div2, div0);

        for (var _i5 = 0; _i5 < each_blocks_1.length; _i5 += 1) {
          each_blocks_1[_i5].m(div0, null);
        }

        append_dev(div2, t0);
        append_dev(div2, div1);
        append_dev(div1, i);
        append_dev(div1, t1);

        for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
          each_blocks[_i6].m(div1, null);
        }
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty & 24) {
          each_value_1 = ctx[3];
          validate_each_argument(each_value_1);

          var _i7;

          for (_i7 = 0; _i7 < each_value_1.length; _i7 += 1) {
            var child_ctx = get_each_context_1(ctx, each_value_1, _i7);

            if (each_blocks_1[_i7]) {
              each_blocks_1[_i7].p(child_ctx, dirty);
            } else {
              each_blocks_1[_i7] = create_each_block_1(child_ctx);

              each_blocks_1[_i7].c();

              each_blocks_1[_i7].m(div0, null);
            }
          }

          for (; _i7 < each_blocks_1.length; _i7 += 1) {
            each_blocks_1[_i7].d(1);
          }

          each_blocks_1.length = each_value_1.length;
        }

        if (dirty & 4 && div0_class_value !== (div0_class_value = "md-icon-box md-tool-l " + (ctx[2] && "md-tool-hide") + " svelte-iusbe8")) {
          attr_dev(div0, "class", div0_class_value);
        }

        if (dirty & 39) {
          each_value = ToolRight;
          validate_each_argument(each_value);

          var _i8;

          for (_i8 = 0; _i8 < each_value.length; _i8 += 1) {
            var _child_ctx = get_each_context(ctx, each_value, _i8);

            if (each_blocks[_i8]) {
              each_blocks[_i8].p(_child_ctx, dirty);
            } else {
              each_blocks[_i8] = create_each_block(_child_ctx);

              each_blocks[_i8].c();

              each_blocks[_i8].m(div1, null);
            }
          }

          for (; _i8 < each_blocks.length; _i8 += 1) {
            each_blocks[_i8].d(1);
          }

          each_blocks.length = each_value.length;
        }
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div2);
        destroy_each(each_blocks_1, detaching);
        destroy_each(each_blocks, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance($$self, $$props, $$invalidate) {
    var fullscreen = $$props.fullscreen;
    var splitscreen = $$props.splitscreen;
    var preview = $$props.preview;
    var toollist = $$props.toollist;
    var dispatch = createEventDispatcher();

    var HanderTool = function HanderTool(item) {
      return dispatch("insertHandler", {
        item: item
      });
    };

    var HanderControl = function HanderControl(item) {
      return dispatch("controlHandler", {
        item: item
      });
    };

    var toolLeftKeyBoard = function toolLeftKeyBoard(_) {
      return dispatch("toolLeftKeyBoard");
    };

    var toolRightKeyBoard = function toolRightKeyBoard(_) {
      return dispatch("toolRightKeyBoard");
    };

    onMount(function () {
      toolLeftKeyBoard();
      toolRightKeyBoard();
    });
    var writable_props = ["fullscreen", "splitscreen", "preview", "toollist"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Tool> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Tool", $$slots, []);

    var click_handler = function click_handler(item) {
      return HanderTool(item);
    };

    var click_handler_1 = function click_handler_1(item) {
      return HanderControl(item);
    };

    $$self.$set = function ($$props) {
      if ("fullscreen" in $$props) $$invalidate(0, fullscreen = $$props.fullscreen);
      if ("splitscreen" in $$props) $$invalidate(1, splitscreen = $$props.splitscreen);
      if ("preview" in $$props) $$invalidate(2, preview = $$props.preview);
      if ("toollist" in $$props) $$invalidate(3, toollist = $$props.toollist);
    };

    $$self.$capture_state = function () {
      return {
        onMount: onMount,
        createEventDispatcher: createEventDispatcher,
        ToolRight: ToolRight,
        keyboard: keyboard,
        fullscreen: fullscreen,
        splitscreen: splitscreen,
        preview: preview,
        toollist: toollist,
        dispatch: dispatch,
        HanderTool: HanderTool,
        HanderControl: HanderControl,
        toolLeftKeyBoard: toolLeftKeyBoard,
        toolRightKeyBoard: toolRightKeyBoard
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("fullscreen" in $$props) $$invalidate(0, fullscreen = $$props.fullscreen);
      if ("splitscreen" in $$props) $$invalidate(1, splitscreen = $$props.splitscreen);
      if ("preview" in $$props) $$invalidate(2, preview = $$props.preview);
      if ("toollist" in $$props) $$invalidate(3, toollist = $$props.toollist);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [fullscreen, splitscreen, preview, toollist, HanderTool, HanderControl, dispatch, toolLeftKeyBoard, toolRightKeyBoard, click_handler, click_handler_1];
  }

  var Tool = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Tool, _SvelteComponentDev);

    var _super = _createSuper(Tool);

    function Tool(options) {
      var _this;

      _classCallCheck(this, Tool);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
        fullscreen: 0,
        splitscreen: 1,
        preview: 2,
        toollist: 3
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Tool",
        options: options,
        id: create_fragment.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (ctx[0] === undefined && !("fullscreen" in props)) {
        console.warn("<Tool> was created without expected prop 'fullscreen'");
      }

      if (ctx[1] === undefined && !("splitscreen" in props)) {
        console.warn("<Tool> was created without expected prop 'splitscreen'");
      }

      if (ctx[2] === undefined && !("preview" in props)) {
        console.warn("<Tool> was created without expected prop 'preview'");
      }

      if (ctx[3] === undefined && !("toollist" in props)) {
        console.warn("<Tool> was created without expected prop 'toollist'");
      }

      return _this;
    }

    _createClass(Tool, [{
      key: "fullscreen",
      get: function get() {
        return this.$$.ctx[0];
      },
      set: function set(fullscreen) {
        this.$set({
          fullscreen: fullscreen
        });
        flush();
      }
    }, {
      key: "splitscreen",
      get: function get() {
        return this.$$.ctx[1];
      },
      set: function set(splitscreen) {
        this.$set({
          splitscreen: splitscreen
        });
        flush();
      }
    }, {
      key: "preview",
      get: function get() {
        return this.$$.ctx[2];
      },
      set: function set(preview) {
        this.$set({
          preview: preview
        });
        flush();
      }
    }, {
      key: "toollist",
      get: function get() {
        return this.$$.ctx[3];
      },
      set: function set(toollist) {
        this.$set({
          toollist: toollist
        });
        flush();
      }
    }]);

    return Tool;
  }(SvelteComponentDev);

  var file$1 = "src/components/text/index.svelte";

  function create_fragment$1(ctx) {
    var div;
    var textarea;
    var dispose;
    var block = {
      c: function create() {
        div = element("div");
        textarea = element("textarea");
        attr_dev(textarea, "class", "md-text md-scroll svelte-f61ras");
        attr_dev(textarea, "placeholder", ctx[0]);
        textarea.readOnly = ctx[2];
        textarea.value = ctx[1];
        add_location(textarea, file$1, 2, 2, 61);
        attr_dev(div, "class", "md-input svelte-f61ras");
        add_location(div, file$1, 1, 0, 36);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor, remount) {
        insert_dev(target, div, anchor);
        append_dev(div, textarea);
        ctx[11](textarea);
        if (remount) run_all(dispose);
        dispose = [listen_dev(textarea, "input", ctx[7], false, false, false), listen_dev(textarea, "scroll", ctx[4], false, false, false), listen_dev(textarea, "compositionstart", ctx[5], false, false, false), listen_dev(textarea, "compositionend", ctx[6], false, false, false)];
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty & 1) {
          attr_dev(textarea, "placeholder", ctx[0]);
        }

        if (dirty & 4) {
          prop_dev(textarea, "readOnly", ctx[2]);
        }

        if (dirty & 2) {
          prop_dev(textarea, "value", ctx[1]);
        }
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        ctx[11](null);
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$1.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$1($$self, $$props, $$invalidate) {
    var MdLockInput = false;
    var element;
    var placeholder = $$props.placeholder;
    var value = $$props.value;
    var preview = $$props.preview;
    var EditorBox = $$props.EditorBox;
    var dispatch = createEventDispatcher();

    var scrollText = function scrollText(event) {
      return syncScroll(EditorBox, "text");
    };

    var onCompositionStart = function onCompositionStart(event) {
      return MdLockInput = true;
    };

    var compositionEnd = function compositionEnd(event) {
      return MdLockInput = false;
    };

    var changeInput = function changeInput(event) {
      return debounce_1(function () {
        if (MdLockInput) return false;
        dispatch("changed", event.target.value);
      }, 50)();
    };

    onMount(function () {
      dispatch("mountKeyBoard");
    });
    onDestroy(function () {
      dispatch("destroyKeyBoard");
    });
    var writable_props = ["placeholder", "value", "preview", "EditorBox"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Text> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Text", $$slots, []);

    function textarea_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        $$invalidate(3, element = $$value);
      });
    }

    $$self.$set = function ($$props) {
      if ("placeholder" in $$props) $$invalidate(0, placeholder = $$props.placeholder);
      if ("value" in $$props) $$invalidate(1, value = $$props.value);
      if ("preview" in $$props) $$invalidate(2, preview = $$props.preview);
      if ("EditorBox" in $$props) $$invalidate(8, EditorBox = $$props.EditorBox);
    };

    $$self.$capture_state = function () {
      return {
        onMount: onMount,
        onDestroy: onDestroy,
        debounce: debounce_1,
        createEventDispatcher: createEventDispatcher,
        syncScroll: syncScroll,
        MdLockInput: MdLockInput,
        element: element,
        placeholder: placeholder,
        value: value,
        preview: preview,
        EditorBox: EditorBox,
        dispatch: dispatch,
        scrollText: scrollText,
        onCompositionStart: onCompositionStart,
        compositionEnd: compositionEnd,
        changeInput: changeInput
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("MdLockInput" in $$props) MdLockInput = $$props.MdLockInput;
      if ("element" in $$props) $$invalidate(3, element = $$props.element);
      if ("placeholder" in $$props) $$invalidate(0, placeholder = $$props.placeholder);
      if ("value" in $$props) $$invalidate(1, value = $$props.value);
      if ("preview" in $$props) $$invalidate(2, preview = $$props.preview);
      if ("EditorBox" in $$props) $$invalidate(8, EditorBox = $$props.EditorBox);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [placeholder, value, preview, element, scrollText, onCompositionStart, compositionEnd, changeInput, EditorBox, MdLockInput, dispatch, textarea_binding];
  }

  var Text = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Text, _SvelteComponentDev);

    var _super = _createSuper(Text);

    function Text(options) {
      var _this;

      _classCallCheck(this, Text);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
        placeholder: 0,
        value: 1,
        preview: 2,
        EditorBox: 8
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Text",
        options: options,
        id: create_fragment$1.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (ctx[0] === undefined && !("placeholder" in props)) {
        console.warn("<Text> was created without expected prop 'placeholder'");
      }

      if (ctx[1] === undefined && !("value" in props)) {
        console.warn("<Text> was created without expected prop 'value'");
      }

      if (ctx[2] === undefined && !("preview" in props)) {
        console.warn("<Text> was created without expected prop 'preview'");
      }

      if (ctx[8] === undefined && !("EditorBox" in props)) {
        console.warn("<Text> was created without expected prop 'EditorBox'");
      }

      return _this;
    }

    _createClass(Text, [{
      key: "placeholder",
      get: function get() {
        return this.$$.ctx[0];
      },
      set: function set(placeholder) {
        this.$set({
          placeholder: placeholder
        });
        flush();
      }
    }, {
      key: "value",
      get: function get() {
        return this.$$.ctx[1];
      },
      set: function set(value) {
        this.$set({
          value: value
        });
        flush();
      }
    }, {
      key: "preview",
      get: function get() {
        return this.$$.ctx[2];
      },
      set: function set(preview) {
        this.$set({
          preview: preview
        });
        flush();
      }
    }, {
      key: "EditorBox",
      get: function get() {
        return this.$$.ctx[8];
      },
      set: function set(EditorBox) {
        this.$set({
          EditorBox: EditorBox
        });
        flush();
      }
    }]);

    return Text;
  }(SvelteComponentDev);

  var defaults = createCommonjsModule(function (module) {
    function getDefaults() {
      return {
        baseUrl: null,
        breaks: false,
        gfm: true,
        headerIds: true,
        headerPrefix: '',
        highlight: null,
        langPrefix: 'language-',
        mangle: true,
        pedantic: false,
        renderer: null,
        sanitize: false,
        sanitizer: null,
        silent: false,
        smartLists: false,
        smartypants: false,
        xhtml: false
      };
    }

    function changeDefaults(newDefaults) {
      module.exports.defaults = newDefaults;
    }

    module.exports = {
      defaults: getDefaults(),
      getDefaults: getDefaults,
      changeDefaults: changeDefaults
    };
  });
  var defaults_1 = defaults.defaults;
  var defaults_2 = defaults.getDefaults;
  var defaults_3 = defaults.changeDefaults;

  var escapeTest = /[&<>"']/;
  var escapeReplace = /[&<>"']/g;
  var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
  var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
  var escapeReplacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  var getEscapeReplacement = function getEscapeReplacement(ch) {
    return escapeReplacements[ch];
  };

  function escape(html, encode) {
    if (encode) {
      if (escapeTest.test(html)) {
        return html.replace(escapeReplace, getEscapeReplacement);
      }
    } else {
      if (escapeTestNoEncode.test(html)) {
        return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
      }
    }

    return html;
  }

  var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

  function unescape(html) {
    return html.replace(unescapeTest, function (_, n) {
      n = n.toLowerCase();
      if (n === 'colon') return ':';

      if (n.charAt(0) === '#') {
        return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
      }

      return '';
    });
  }

  var caret = /(^|[^\[])\^/g;

  function edit(regex, opt) {
    regex = regex.source || regex;
    opt = opt || '';
    var obj = {
      replace: function replace(name, val) {
        val = val.source || val;
        val = val.replace(caret, '$1');
        regex = regex.replace(name, val);
        return obj;
      },
      getRegex: function getRegex() {
        return new RegExp(regex, opt);
      }
    };
    return obj;
  }

  var nonWordAndColonTest = /[^\w:]/g;
  var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

  function cleanUrl(sanitize, base, href) {
    if (sanitize) {
      var prot;

      try {
        prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, '').toLowerCase();
      } catch (e) {
        return null;
      }

      if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
        return null;
      }
    }

    if (base && !originIndependentUrl.test(href)) {
      href = resolveUrl(base, href);
    }

    try {
      href = encodeURI(href).replace(/%25/g, '%');
    } catch (e) {
      return null;
    }

    return href;
  }

  var baseUrls = {};
  var justDomain = /^[^:]+:\/*[^/]*$/;
  var protocol = /^([^:]+:)[\s\S]*$/;
  var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

  function resolveUrl(base, href) {
    if (!baseUrls[' ' + base]) {
      if (justDomain.test(base)) {
        baseUrls[' ' + base] = base + '/';
      } else {
        baseUrls[' ' + base] = rtrim(base, '/', true);
      }
    }

    base = baseUrls[' ' + base];
    var relativeBase = base.indexOf(':') === -1;

    if (href.substring(0, 2) === '//') {
      if (relativeBase) {
        return href;
      }

      return base.replace(protocol, '$1') + href;
    } else if (href.charAt(0) === '/') {
      if (relativeBase) {
        return href;
      }

      return base.replace(domain, '$1') + href;
    } else {
      return base + href;
    }
  }

  var noopTest = {
    exec: function noopTest() {}
  };

  function merge(obj) {
    var i = 1,
        target,
        key;

    for (; i < arguments.length; i++) {
      target = arguments[i];

      for (key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          obj[key] = target[key];
        }
      }
    }

    return obj;
  }

  function splitCells(tableRow, count) {
    var row = tableRow.replace(/\|/g, function (match, offset, str) {
      var escaped = false,
          curr = offset;

      while (--curr >= 0 && str[curr] === '\\') {
        escaped = !escaped;
      }

      if (escaped) {
        return '|';
      } else {
        return ' |';
      }
    }),
        cells = row.split(/ \|/);
    var i = 0;

    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) {
        cells.push('');
      }
    }

    for (; i < cells.length; i++) {
      cells[i] = cells[i].trim().replace(/\\\|/g, '|');
    }

    return cells;
  }

  function rtrim(str, c, invert) {
    var l = str.length;

    if (l === 0) {
      return '';
    }

    var suffLen = 0;

    while (suffLen < l) {
      var currChar = str.charAt(l - suffLen - 1);

      if (currChar === c && !invert) {
        suffLen++;
      } else if (currChar !== c && invert) {
        suffLen++;
      } else {
        break;
      }
    }

    return str.substr(0, l - suffLen);
  }

  function findClosingBracket(str, b) {
    if (str.indexOf(b[1]) === -1) {
      return -1;
    }

    var l = str.length;
    var level = 0,
        i = 0;

    for (; i < l; i++) {
      if (str[i] === '\\') {
        i++;
      } else if (str[i] === b[0]) {
        level++;
      } else if (str[i] === b[1]) {
        level--;

        if (level < 0) {
          return i;
        }
      }
    }

    return -1;
  }

  function checkSanitizeDeprecation(opt) {
    if (opt && opt.sanitize && !opt.silent) {
      console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
    }
  }

  var helpers = {
    escape: escape,
    unescape: unescape,
    edit: edit,
    cleanUrl: cleanUrl,
    resolveUrl: resolveUrl,
    noopTest: noopTest,
    merge: merge,
    splitCells: splitCells,
    rtrim: rtrim,
    findClosingBracket: findClosingBracket,
    checkSanitizeDeprecation: checkSanitizeDeprecation
  };

  var noopTest$1 = helpers.noopTest,
      edit$1 = helpers.edit,
      merge$1 = helpers.merge;
  var block = {
    newline: /^\n+/,
    code: /^( {4}[^\n]+\n*)+/,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
    html: '^ {0,3}(?:' + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' + '|comment[^\\n]*(\\n+|$)' + '|<\\?[\\s\\S]*?\\?>\\n*' + '|<![A-Z][\\s\\S]*?>\\n*' + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' + ')',
    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
    nptable: noopTest$1,
    table: noopTest$1,
    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
    text: /^[^\n]+/
  };
  block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
  block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
  block.def = edit$1(block.def).replace('label', block._label).replace('title', block._title).getRegex();
  block.bullet = /(?:[*+-]|\d{1,9}\.)/;
  block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
  block.item = edit$1(block.item, 'gm').replace(/bull/g, block.bullet).getRegex();
  block.list = edit$1(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
  block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
  block._comment = /<!--(?!-?>)[\s\S]*?-->/;
  block.html = edit$1(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
  block.paragraph = edit$1(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '').replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ').replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag).getRegex();
  block.blockquote = edit$1(block.blockquote).replace('paragraph', block.paragraph).getRegex();
  block.normal = merge$1({}, block);
  block.gfm = merge$1({}, block.normal, {
    nptable: '^ *([^|\\n ].*\\|.*)\\n' + ' *([-:]+ *\\|[-| :]*)' + '(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
    table: '^ *\\|(.+)\\n' + ' *\\|?( *[-:]+[-| :]*)' + '(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)'
  });
  block.gfm.nptable = edit$1(block.gfm.nptable).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ').replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag).getRegex();
  block.gfm.table = edit$1(block.gfm.table).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ').replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag).getRegex();
  block.pedantic = merge$1({}, block.normal, {
    html: edit$1('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
    fences: noopTest$1,
    paragraph: edit$1(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
  });
  var inline = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: noopTest$1,
    tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' + '|^<\\?[\\s\\S]*?\\?>' + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
    strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
    em: /^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: noopTest$1,
    text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
  };
  inline._punctuation = '!"#$%&\'()*+,\\-./:;<=>?@\\[^_{|}~';
  inline.em = edit$1(inline.em).replace(/punctuation/g, inline._punctuation).getRegex();
  inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
  inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
  inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
  inline.autolink = edit$1(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
  inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
  inline.tag = edit$1(inline.tag).replace('comment', block._comment).replace('attribute', inline._attribute).getRegex();
  inline._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
  inline._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/;
  inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
  inline.link = edit$1(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
  inline.reflink = edit$1(inline.reflink).replace('label', inline._label).getRegex();
  inline.normal = merge$1({}, inline);
  inline.pedantic = merge$1({}, inline.normal, {
    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
    link: edit$1(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
    reflink: edit$1(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
  });
  inline.gfm = merge$1({}, inline.normal, {
    escape: edit$1(inline.escape).replace('])', '~|])').getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^~+(?=\S)([\s\S]*?\S)~+/,
    text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
  });
  inline.gfm.url = edit$1(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
  inline.breaks = merge$1({}, inline.gfm, {
    br: edit$1(inline.br).replace('{2,}', '*').getRegex(),
    text: edit$1(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
  });
  var rules = {
    block: block,
    inline: inline
  };

  var defaults$1 = defaults.defaults;
  var block$1 = rules.block;
  var rtrim$1 = helpers.rtrim,
      splitCells$1 = helpers.splitCells,
      escape$1 = helpers.escape;

  var Lexer_1 = /*#__PURE__*/function () {
    function Lexer(options) {
      _classCallCheck(this, Lexer);

      this.tokens = [];
      this.tokens.links = Object.create(null);
      this.options = options || defaults$1;
      this.rules = block$1.normal;

      if (this.options.pedantic) {
        this.rules = block$1.pedantic;
      } else if (this.options.gfm) {
        this.rules = block$1.gfm;
      }
    }

    _createClass(Lexer, [{
      key: "lex",
      value: function lex(src) {
        src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ');
        return this.token(src, true);
      }
    }, {
      key: "token",
      value: function token(src, top) {
        src = src.replace(/^ +$/gm, '');
        var next, loose, cap, bull, b, item, listStart, listItems, t, space, i, tag, l, isordered, istask, ischecked;

        while (src) {
          if (cap = this.rules.newline.exec(src)) {
            src = src.substring(cap[0].length);

            if (cap[0].length > 1) {
              this.tokens.push({
                type: 'space'
              });
            }
          }

          if (cap = this.rules.code.exec(src)) {
            var lastToken = this.tokens[this.tokens.length - 1];
            src = src.substring(cap[0].length);

            if (lastToken && lastToken.type === 'paragraph') {
              lastToken.text += '\n' + cap[0].trimRight();
            } else {
              cap = cap[0].replace(/^ {4}/gm, '');
              this.tokens.push({
                type: 'code',
                codeBlockStyle: 'indented',
                text: !this.options.pedantic ? rtrim$1(cap, '\n') : cap
              });
            }

            continue;
          }

          if (cap = this.rules.fences.exec(src)) {
            src = src.substring(cap[0].length);
            this.tokens.push({
              type: 'code',
              lang: cap[2] ? cap[2].trim() : cap[2],
              text: cap[3] || ''
            });
            continue;
          }

          if (cap = this.rules.heading.exec(src)) {
            src = src.substring(cap[0].length);
            this.tokens.push({
              type: 'heading',
              depth: cap[1].length,
              text: cap[2]
            });
            continue;
          }

          if (cap = this.rules.nptable.exec(src)) {
            item = {
              type: 'table',
              header: splitCells$1(cap[1].replace(/^ *| *\| *$/g, '')),
              align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
              cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
            };

            if (item.header.length === item.align.length) {
              src = src.substring(cap[0].length);

              for (i = 0; i < item.align.length; i++) {
                if (/^ *-+: *$/.test(item.align[i])) {
                  item.align[i] = 'right';
                } else if (/^ *:-+: *$/.test(item.align[i])) {
                  item.align[i] = 'center';
                } else if (/^ *:-+ *$/.test(item.align[i])) {
                  item.align[i] = 'left';
                } else {
                  item.align[i] = null;
                }
              }

              for (i = 0; i < item.cells.length; i++) {
                item.cells[i] = splitCells$1(item.cells[i], item.header.length);
              }

              this.tokens.push(item);
              continue;
            }
          }

          if (cap = this.rules.hr.exec(src)) {
            src = src.substring(cap[0].length);
            this.tokens.push({
              type: 'hr'
            });
            continue;
          }

          if (cap = this.rules.blockquote.exec(src)) {
            src = src.substring(cap[0].length);
            this.tokens.push({
              type: 'blockquote_start'
            });
            cap = cap[0].replace(/^ *> ?/gm, '');
            this.token(cap, top);
            this.tokens.push({
              type: 'blockquote_end'
            });
            continue;
          }

          if (cap = this.rules.list.exec(src)) {
            src = src.substring(cap[0].length);
            bull = cap[2];
            isordered = bull.length > 1;
            listStart = {
              type: 'list_start',
              ordered: isordered,
              start: isordered ? +bull : '',
              loose: false
            };
            this.tokens.push(listStart);
            cap = cap[0].match(this.rules.item);
            listItems = [];
            next = false;
            l = cap.length;
            i = 0;

            for (; i < l; i++) {
              item = cap[i];
              space = item.length;
              item = item.replace(/^ *([*+-]|\d+\.) */, '');

              if (~item.indexOf('\n ')) {
                space -= item.length;
                item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
              }

              if (i !== l - 1) {
                b = block$1.bullet.exec(cap[i + 1])[0];

                if (bull.length > 1 ? b.length === 1 : b.length > 1 || this.options.smartLists && b !== bull) {
                  src = cap.slice(i + 1).join('\n') + src;
                  i = l - 1;
                }
              }

              loose = next || /\n\n(?!\s*$)/.test(item);

              if (i !== l - 1) {
                next = item.charAt(item.length - 1) === '\n';
                if (!loose) loose = next;
              }

              if (loose) {
                listStart.loose = true;
              }

              istask = /^\[[ xX]\] /.test(item);
              ischecked = undefined;

              if (istask) {
                ischecked = item[1] !== ' ';
                item = item.replace(/^\[[ xX]\] +/, '');
              }

              t = {
                type: 'list_item_start',
                task: istask,
                checked: ischecked,
                loose: loose
              };
              listItems.push(t);
              this.tokens.push(t);
              this.token(item, false);
              this.tokens.push({
                type: 'list_item_end'
              });
            }

            if (listStart.loose) {
              l = listItems.length;
              i = 0;

              for (; i < l; i++) {
                listItems[i].loose = true;
              }
            }

            this.tokens.push({
              type: 'list_end'
            });
            continue;
          }

          if (cap = this.rules.html.exec(src)) {
            src = src.substring(cap[0].length);
            this.tokens.push({
              type: this.options.sanitize ? 'paragraph' : 'html',
              pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
              text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$1(cap[0]) : cap[0]
            });
            continue;
          }

          if (top && (cap = this.rules.def.exec(src))) {
            src = src.substring(cap[0].length);
            if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
            tag = cap[1].toLowerCase().replace(/\s+/g, ' ');

            if (!this.tokens.links[tag]) {
              this.tokens.links[tag] = {
                href: cap[2],
                title: cap[3]
              };
            }

            continue;
          }

          if (cap = this.rules.table.exec(src)) {
            item = {
              type: 'table',
              header: splitCells$1(cap[1].replace(/^ *| *\| *$/g, '')),
              align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
              cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
            };

            if (item.header.length === item.align.length) {
              src = src.substring(cap[0].length);

              for (i = 0; i < item.align.length; i++) {
                if (/^ *-+: *$/.test(item.align[i])) {
                  item.align[i] = 'right';
                } else if (/^ *:-+: *$/.test(item.align[i])) {
                  item.align[i] = 'center';
                } else if (/^ *:-+ *$/.test(item.align[i])) {
                  item.align[i] = 'left';
                } else {
                  item.align[i] = null;
                }
              }

              for (i = 0; i < item.cells.length; i++) {
                item.cells[i] = splitCells$1(item.cells[i].replace(/^ *\| *| *\| *$/g, ''), item.header.length);
              }

              this.tokens.push(item);
              continue;
            }
          }

          if (cap = this.rules.lheading.exec(src)) {
            src = src.substring(cap[0].length);
            this.tokens.push({
              type: 'heading',
              depth: cap[2].charAt(0) === '=' ? 1 : 2,
              text: cap[1]
            });
            continue;
          }

          if (top && (cap = this.rules.paragraph.exec(src))) {
            src = src.substring(cap[0].length);
            this.tokens.push({
              type: 'paragraph',
              text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
            });
            continue;
          }

          if (cap = this.rules.text.exec(src)) {
            src = src.substring(cap[0].length);
            this.tokens.push({
              type: 'text',
              text: cap[0]
            });
            continue;
          }

          if (src) {
            throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
          }
        }

        return this.tokens;
      }
    }], [{
      key: "lex",
      value: function lex(src, options) {
        var lexer = new Lexer(options);
        return lexer.lex(src);
      }
    }, {
      key: "rules",
      get: function get() {
        return block$1;
      }
    }]);

    return Lexer;
  }();

  var defaults$2 = defaults.defaults;
  var cleanUrl$1 = helpers.cleanUrl,
      escape$2 = helpers.escape;

  var Renderer_1 = /*#__PURE__*/function () {
    function Renderer(options) {
      _classCallCheck(this, Renderer);

      this.options = options || defaults$2;
    }

    _createClass(Renderer, [{
      key: "code",
      value: function code(_code, infostring, escaped) {
        var lang = (infostring || '').match(/\S*/)[0];

        if (this.options.highlight) {
          var out = this.options.highlight(_code, lang);

          if (out != null && out !== _code) {
            escaped = true;
            _code = out;
          }
        }

        if (!lang) {
          return '<pre><code>' + (escaped ? _code : escape$2(_code, true)) + '</code></pre>';
        }

        return '<pre><code class="' + this.options.langPrefix + escape$2(lang, true) + '">' + (escaped ? _code : escape$2(_code, true)) + '</code></pre>\n';
      }
    }, {
      key: "blockquote",
      value: function blockquote(quote) {
        return '<blockquote>\n' + quote + '</blockquote>\n';
      }
    }, {
      key: "html",
      value: function html(_html) {
        return _html;
      }
    }, {
      key: "heading",
      value: function heading(text, level, raw, slugger) {
        if (this.options.headerIds) {
          return '<h' + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + '</h' + level + '>\n';
        }

        return '<h' + level + '>' + text + '</h' + level + '>\n';
      }
    }, {
      key: "hr",
      value: function hr() {
        return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
      }
    }, {
      key: "list",
      value: function list(body, ordered, start) {
        var type = ordered ? 'ol' : 'ul',
            startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
        return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
      }
    }, {
      key: "listitem",
      value: function listitem(text) {
        return '<li>' + text + '</li>\n';
      }
    }, {
      key: "checkbox",
      value: function checkbox(checked) {
        return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
      }
    }, {
      key: "paragraph",
      value: function paragraph(text) {
        return '<p>' + text + '</p>\n';
      }
    }, {
      key: "table",
      value: function table(header, body) {
        if (body) body = '<tbody>' + body + '</tbody>';
        return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
      }
    }, {
      key: "tablerow",
      value: function tablerow(content) {
        return '<tr>\n' + content + '</tr>\n';
      }
    }, {
      key: "tablecell",
      value: function tablecell(content, flags) {
        var type = flags.header ? 'th' : 'td';
        var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
        return tag + content + '</' + type + '>\n';
      }
    }, {
      key: "strong",
      value: function strong(text) {
        return '<strong>' + text + '</strong>';
      }
    }, {
      key: "em",
      value: function em(text) {
        return '<em>' + text + '</em>';
      }
    }, {
      key: "codespan",
      value: function codespan(text) {
        return '<code>' + text + '</code>';
      }
    }, {
      key: "br",
      value: function br() {
        return this.options.xhtml ? '<br/>' : '<br>';
      }
    }, {
      key: "del",
      value: function del(text) {
        return '<del>' + text + '</del>';
      }
    }, {
      key: "link",
      value: function link(href, title, text) {
        href = cleanUrl$1(this.options.sanitize, this.options.baseUrl, href);

        if (href === null) {
          return text;
        }

        var out = '<a href="' + escape$2(href) + '"';

        if (title) {
          out += ' title="' + title + '"';
        }

        out += '>' + text + '</a>';
        return out;
      }
    }, {
      key: "image",
      value: function image(href, title, text) {
        href = cleanUrl$1(this.options.sanitize, this.options.baseUrl, href);

        if (href === null) {
          return text;
        }

        var out = '<img src="' + href + '" alt="' + text + '"';

        if (title) {
          out += ' title="' + title + '"';
        }

        out += this.options.xhtml ? '/>' : '>';
        return out;
      }
    }, {
      key: "text",
      value: function text(_text) {
        return _text;
      }
    }]);

    return Renderer;
  }();

  var Slugger_1 = /*#__PURE__*/function () {
    function Slugger() {
      _classCallCheck(this, Slugger);

      this.seen = {};
    }

    _createClass(Slugger, [{
      key: "slug",
      value: function slug(value) {
        var slug = value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, '').replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');

        if (this.seen.hasOwnProperty(slug)) {
          var originalSlug = slug;

          do {
            this.seen[originalSlug]++;
            slug = originalSlug + '-' + this.seen[originalSlug];
          } while (this.seen.hasOwnProperty(slug));
        }

        this.seen[slug] = 0;
        return slug;
      }
    }]);

    return Slugger;
  }();

  var defaults$3 = defaults.defaults;
  var inline$1 = rules.inline;
  var findClosingBracket$1 = helpers.findClosingBracket,
      escape$3 = helpers.escape;

  var InlineLexer_1 = /*#__PURE__*/function () {
    function InlineLexer(links, options) {
      _classCallCheck(this, InlineLexer);

      this.options = options || defaults$3;
      this.links = links;
      this.rules = inline$1.normal;
      this.options.renderer = this.options.renderer || new Renderer_1();
      this.renderer = this.options.renderer;
      this.renderer.options = this.options;

      if (!this.links) {
        throw new Error('Tokens array requires a `links` property.');
      }

      if (this.options.pedantic) {
        this.rules = inline$1.pedantic;
      } else if (this.options.gfm) {
        if (this.options.breaks) {
          this.rules = inline$1.breaks;
        } else {
          this.rules = inline$1.gfm;
        }
      }
    }

    _createClass(InlineLexer, [{
      key: "output",
      value: function output(src) {
        var out = '',
            link,
            text,
            href,
            title,
            cap,
            prevCapZero;

        while (src) {
          if (cap = this.rules.escape.exec(src)) {
            src = src.substring(cap[0].length);
            out += escape$3(cap[1]);
            continue;
          }

          if (cap = this.rules.tag.exec(src)) {
            if (!this.inLink && /^<a /i.test(cap[0])) {
              this.inLink = true;
            } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
              this.inLink = false;
            }

            if (!this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
              this.inRawBlock = true;
            } else if (this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
              this.inRawBlock = false;
            }

            src = src.substring(cap[0].length);
            out += this.renderer.html(this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$3(cap[0]) : cap[0]);
            continue;
          }

          if (cap = this.rules.link.exec(src)) {
            var lastParenIndex = findClosingBracket$1(cap[2], '()');

            if (lastParenIndex > -1) {
              var start = cap[0].indexOf('!') === 0 ? 5 : 4;
              var linkLen = start + cap[1].length + lastParenIndex;
              cap[2] = cap[2].substring(0, lastParenIndex);
              cap[0] = cap[0].substring(0, linkLen).trim();
              cap[3] = '';
            }

            src = src.substring(cap[0].length);
            this.inLink = true;
            href = cap[2];

            if (this.options.pedantic) {
              link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

              if (link) {
                href = link[1];
                title = link[3];
              } else {
                title = '';
              }
            } else {
              title = cap[3] ? cap[3].slice(1, -1) : '';
            }

            href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
            out += this.outputLink(cap, {
              href: InlineLexer.escapes(href),
              title: InlineLexer.escapes(title)
            });
            this.inLink = false;
            continue;
          }

          if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
            src = src.substring(cap[0].length);
            link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
            link = this.links[link.toLowerCase()];

            if (!link || !link.href) {
              out += cap[0].charAt(0);
              src = cap[0].substring(1) + src;
              continue;
            }

            this.inLink = true;
            out += this.outputLink(cap, link);
            this.inLink = false;
            continue;
          }

          if (cap = this.rules.strong.exec(src)) {
            src = src.substring(cap[0].length);
            out += this.renderer.strong(this.output(cap[4] || cap[3] || cap[2] || cap[1]));
            continue;
          }

          if (cap = this.rules.em.exec(src)) {
            src = src.substring(cap[0].length);
            out += this.renderer.em(this.output(cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]));
            continue;
          }

          if (cap = this.rules.code.exec(src)) {
            src = src.substring(cap[0].length);
            out += this.renderer.codespan(escape$3(cap[2].trim(), true));
            continue;
          }

          if (cap = this.rules.br.exec(src)) {
            src = src.substring(cap[0].length);
            out += this.renderer.br();
            continue;
          }

          if (cap = this.rules.del.exec(src)) {
            src = src.substring(cap[0].length);
            out += this.renderer.del(this.output(cap[1]));
            continue;
          }

          if (cap = this.rules.autolink.exec(src)) {
            src = src.substring(cap[0].length);

            if (cap[2] === '@') {
              text = escape$3(this.mangle(cap[1]));
              href = 'mailto:' + text;
            } else {
              text = escape$3(cap[1]);
              href = text;
            }

            out += this.renderer.link(href, null, text);
            continue;
          }

          if (!this.inLink && (cap = this.rules.url.exec(src))) {
            if (cap[2] === '@') {
              text = escape$3(cap[0]);
              href = 'mailto:' + text;
            } else {
              do {
                prevCapZero = cap[0];
                cap[0] = this.rules._backpedal.exec(cap[0])[0];
              } while (prevCapZero !== cap[0]);

              text = escape$3(cap[0]);

              if (cap[1] === 'www.') {
                href = 'http://' + text;
              } else {
                href = text;
              }
            }

            src = src.substring(cap[0].length);
            out += this.renderer.link(href, null, text);
            continue;
          }

          if (cap = this.rules.text.exec(src)) {
            src = src.substring(cap[0].length);

            if (this.inRawBlock) {
              out += this.renderer.text(this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$3(cap[0]) : cap[0]);
            } else {
              out += this.renderer.text(escape$3(this.smartypants(cap[0])));
            }

            continue;
          }

          if (src) {
            throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
          }
        }

        return out;
      }
    }, {
      key: "outputLink",
      value: function outputLink(cap, link) {
        var href = link.href,
            title = link.title ? escape$3(link.title) : null;
        return cap[0].charAt(0) !== '!' ? this.renderer.link(href, title, this.output(cap[1])) : this.renderer.image(href, title, escape$3(cap[1]));
      }
    }, {
      key: "smartypants",
      value: function smartypants(text) {
        if (!this.options.smartypants) return text;
        return text.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
      }
    }, {
      key: "mangle",
      value: function mangle(text) {
        if (!this.options.mangle) return text;
        var l = text.length;
        var out = '',
            i = 0,
            ch;

        for (; i < l; i++) {
          ch = text.charCodeAt(i);

          if (Math.random() > 0.5) {
            ch = 'x' + ch.toString(16);
          }

          out += '&#' + ch + ';';
        }

        return out;
      }
    }], [{
      key: "output",
      value: function output(src, links, options) {
        var inline = new InlineLexer(links, options);
        return inline.output(src);
      }
    }, {
      key: "escapes",
      value: function escapes(text) {
        return text ? text.replace(InlineLexer.rules._escapes, '$1') : text;
      }
    }, {
      key: "rules",
      get: function get() {
        return inline$1;
      }
    }]);

    return InlineLexer;
  }();

  var TextRenderer_1 = /*#__PURE__*/function () {
    function TextRenderer() {
      _classCallCheck(this, TextRenderer);
    }

    _createClass(TextRenderer, [{
      key: "strong",
      value: function strong(text) {
        return text;
      }
    }, {
      key: "em",
      value: function em(text) {
        return text;
      }
    }, {
      key: "codespan",
      value: function codespan(text) {
        return text;
      }
    }, {
      key: "del",
      value: function del(text) {
        return text;
      }
    }, {
      key: "html",
      value: function html(text) {
        return text;
      }
    }, {
      key: "text",
      value: function text(_text) {
        return _text;
      }
    }, {
      key: "link",
      value: function link(href, title, text) {
        return '' + text;
      }
    }, {
      key: "image",
      value: function image(href, title, text) {
        return '' + text;
      }
    }, {
      key: "br",
      value: function br() {
        return '';
      }
    }]);

    return TextRenderer;
  }();

  var defaults$4 = defaults.defaults;
  var merge$2 = helpers.merge,
      unescape$1 = helpers.unescape;

  var Parser_1 = /*#__PURE__*/function () {
    function Parser(options) {
      _classCallCheck(this, Parser);

      this.tokens = [];
      this.token = null;
      this.options = options || defaults$4;
      this.options.renderer = this.options.renderer || new Renderer_1();
      this.renderer = this.options.renderer;
      this.renderer.options = this.options;
      this.slugger = new Slugger_1();
    }

    _createClass(Parser, [{
      key: "parse",
      value: function parse(tokens) {
        this.inline = new InlineLexer_1(tokens.links, this.options);
        this.inlineText = new InlineLexer_1(tokens.links, merge$2({}, this.options, {
          renderer: new TextRenderer_1()
        }));
        this.tokens = tokens.reverse();
        var out = '';

        while (this.next()) {
          out += this.tok();
        }

        return out;
      }
    }, {
      key: "next",
      value: function next() {
        this.token = this.tokens.pop();
        return this.token;
      }
    }, {
      key: "peek",
      value: function peek() {
        return this.tokens[this.tokens.length - 1] || 0;
      }
    }, {
      key: "parseText",
      value: function parseText() {
        var body = this.token.text;

        while (this.peek().type === 'text') {
          body += '\n' + this.next().text;
        }

        return this.inline.output(body);
      }
    }, {
      key: "tok",
      value: function tok() {
        var body = '';

        switch (this.token.type) {
          case 'space':
            return '';

          case 'hr':
            return this.renderer.hr();

          case 'heading':
            return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, unescape$1(this.inlineText.output(this.token.text)), this.slugger);

          case 'code':
            return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);

          case 'table':
            {
              var header = '',
                  i,
                  row,
                  cell,
                  j;
              cell = '';

              for (i = 0; i < this.token.header.length; i++) {
                cell += this.renderer.tablecell(this.inline.output(this.token.header[i]), {
                  header: true,
                  align: this.token.align[i]
                });
              }

              header += this.renderer.tablerow(cell);

              for (i = 0; i < this.token.cells.length; i++) {
                row = this.token.cells[i];
                cell = '';

                for (j = 0; j < row.length; j++) {
                  cell += this.renderer.tablecell(this.inline.output(row[j]), {
                    header: false,
                    align: this.token.align[j]
                  });
                }

                body += this.renderer.tablerow(cell);
              }

              return this.renderer.table(header, body);
            }

          case 'blockquote_start':
            body = '';

            while (this.next().type !== 'blockquote_end') {
              body += this.tok();
            }

            return this.renderer.blockquote(body);

          case 'list_start':
            {
              body = '';
              var ordered = this.token.ordered,
                  start = this.token.start;

              while (this.next().type !== 'list_end') {
                body += this.tok();
              }

              return this.renderer.list(body, ordered, start);
            }

          case 'list_item_start':
            {
              body = '';
              var loose = this.token.loose;
              var checked = this.token.checked;
              var task = this.token.task;

              if (this.token.task) {
                if (loose) {
                  if (this.peek().type === 'text') {
                    var nextToken = this.peek();
                    nextToken.text = this.renderer.checkbox(checked) + ' ' + nextToken.text;
                  } else {
                    this.tokens.push({
                      type: 'text',
                      text: this.renderer.checkbox(checked)
                    });
                  }
                } else {
                  body += this.renderer.checkbox(checked);
                }
              }

              while (this.next().type !== 'list_item_end') {
                body += !loose && this.token.type === 'text' ? this.parseText() : this.tok();
              }

              return this.renderer.listitem(body, task, checked);
            }

          case 'html':
            return this.renderer.html(this.token.text);

          case 'paragraph':
            return this.renderer.paragraph(this.inline.output(this.token.text));

          case 'text':
            return this.renderer.paragraph(this.parseText());

          default:
            {
              var errMsg = 'Token with "' + this.token.type + '" type was not found.';

              if (this.options.silent) {
                console.log(errMsg);
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }
    }], [{
      key: "parse",
      value: function parse(tokens, options) {
        var parser = new Parser(options);
        return parser.parse(tokens);
      }
    }]);

    return Parser;
  }();

  var merge$3 = helpers.merge,
      checkSanitizeDeprecation$1 = helpers.checkSanitizeDeprecation,
      escape$4 = helpers.escape;
  var getDefaults = defaults.getDefaults,
      changeDefaults = defaults.changeDefaults,
      defaults$5 = defaults.defaults;

  function marked(src, opt, callback) {
    if (typeof src === 'undefined' || src === null) {
      throw new Error('marked(): input parameter is undefined or null');
    }

    if (typeof src !== 'string') {
      throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
    }

    if (callback || typeof opt === 'function') {
      var _ret = function () {
        if (!callback) {
          callback = opt;
          opt = null;
        }

        opt = merge$3({}, marked.defaults, opt || {});
        checkSanitizeDeprecation$1(opt);
        var highlight = opt.highlight;
        var tokens,
            pending,
            i = 0;

        try {
          tokens = Lexer_1.lex(src, opt);
        } catch (e) {
          return {
            v: callback(e)
          };
        }

        pending = tokens.length;

        var done = function done(err) {
          if (err) {
            opt.highlight = highlight;
            return callback(err);
          }

          var out;

          try {
            out = Parser_1.parse(tokens, opt);
          } catch (e) {
            err = e;
          }

          opt.highlight = highlight;
          return err ? callback(err) : callback(null, out);
        };

        if (!highlight || highlight.length < 3) {
          return {
            v: done()
          };
        }

        delete opt.highlight;
        if (!pending) return {
          v: done()
        };

        for (; i < tokens.length; i++) {
          (function (token) {
            if (token.type !== 'code') {
              return --pending || done();
            }

            return highlight(token.text, token.lang, function (err, code) {
              if (err) return done(err);

              if (code == null || code === token.text) {
                return --pending || done();
              }

              token.text = code;
              token.escaped = true;
              --pending || done();
            });
          })(tokens[i]);
        }

        return {
          v: void 0
        };
      }();

      if (_typeof(_ret) === "object") return _ret.v;
    }

    try {
      opt = merge$3({}, marked.defaults, opt || {});
      checkSanitizeDeprecation$1(opt);
      return Parser_1.parse(Lexer_1.lex(src, opt), opt);
    } catch (e) {
      e.message += '\nPlease report this to https://github.com/markedjs/marked.';

      if ((opt || marked.defaults).silent) {
        return '<p>An error occurred:</p><pre>' + escape$4(e.message + '', true) + '</pre>';
      }

      throw e;
    }
  }

  marked.options = marked.setOptions = function (opt) {
    merge$3(marked.defaults, opt);
    changeDefaults(marked.defaults);
    return marked;
  };

  marked.getDefaults = getDefaults;
  marked.defaults = defaults$5;
  marked.Parser = Parser_1;
  marked.parser = Parser_1.parse;
  marked.Renderer = Renderer_1;
  marked.TextRenderer = TextRenderer_1;
  marked.Lexer = Lexer_1;
  marked.lexer = Lexer_1.lex;
  marked.InlineLexer = InlineLexer_1;
  marked.inlineLexer = InlineLexer_1.output;
  marked.Slugger = Slugger_1;
  marked.parse = marked;
  var marked_1 = marked;

  function getDefaultWhiteList() {
    var whiteList = {};
    whiteList['align-content'] = false;
    whiteList['align-items'] = false;
    whiteList['align-self'] = false;
    whiteList['alignment-adjust'] = false;
    whiteList['alignment-baseline'] = false;
    whiteList['all'] = false;
    whiteList['anchor-point'] = false;
    whiteList['animation'] = false;
    whiteList['animation-delay'] = false;
    whiteList['animation-direction'] = false;
    whiteList['animation-duration'] = false;
    whiteList['animation-fill-mode'] = false;
    whiteList['animation-iteration-count'] = false;
    whiteList['animation-name'] = false;
    whiteList['animation-play-state'] = false;
    whiteList['animation-timing-function'] = false;
    whiteList['azimuth'] = false;
    whiteList['backface-visibility'] = false;
    whiteList['background'] = true;
    whiteList['background-attachment'] = true;
    whiteList['background-clip'] = true;
    whiteList['background-color'] = true;
    whiteList['background-image'] = true;
    whiteList['background-origin'] = true;
    whiteList['background-position'] = true;
    whiteList['background-repeat'] = true;
    whiteList['background-size'] = true;
    whiteList['baseline-shift'] = false;
    whiteList['binding'] = false;
    whiteList['bleed'] = false;
    whiteList['bookmark-label'] = false;
    whiteList['bookmark-level'] = false;
    whiteList['bookmark-state'] = false;
    whiteList['border'] = true;
    whiteList['border-bottom'] = true;
    whiteList['border-bottom-color'] = true;
    whiteList['border-bottom-left-radius'] = true;
    whiteList['border-bottom-right-radius'] = true;
    whiteList['border-bottom-style'] = true;
    whiteList['border-bottom-width'] = true;
    whiteList['border-collapse'] = true;
    whiteList['border-color'] = true;
    whiteList['border-image'] = true;
    whiteList['border-image-outset'] = true;
    whiteList['border-image-repeat'] = true;
    whiteList['border-image-slice'] = true;
    whiteList['border-image-source'] = true;
    whiteList['border-image-width'] = true;
    whiteList['border-left'] = true;
    whiteList['border-left-color'] = true;
    whiteList['border-left-style'] = true;
    whiteList['border-left-width'] = true;
    whiteList['border-radius'] = true;
    whiteList['border-right'] = true;
    whiteList['border-right-color'] = true;
    whiteList['border-right-style'] = true;
    whiteList['border-right-width'] = true;
    whiteList['border-spacing'] = true;
    whiteList['border-style'] = true;
    whiteList['border-top'] = true;
    whiteList['border-top-color'] = true;
    whiteList['border-top-left-radius'] = true;
    whiteList['border-top-right-radius'] = true;
    whiteList['border-top-style'] = true;
    whiteList['border-top-width'] = true;
    whiteList['border-width'] = true;
    whiteList['bottom'] = false;
    whiteList['box-decoration-break'] = true;
    whiteList['box-shadow'] = true;
    whiteList['box-sizing'] = true;
    whiteList['box-snap'] = true;
    whiteList['box-suppress'] = true;
    whiteList['break-after'] = true;
    whiteList['break-before'] = true;
    whiteList['break-inside'] = true;
    whiteList['caption-side'] = false;
    whiteList['chains'] = false;
    whiteList['clear'] = true;
    whiteList['clip'] = false;
    whiteList['clip-path'] = false;
    whiteList['clip-rule'] = false;
    whiteList['color'] = true;
    whiteList['color-interpolation-filters'] = true;
    whiteList['column-count'] = false;
    whiteList['column-fill'] = false;
    whiteList['column-gap'] = false;
    whiteList['column-rule'] = false;
    whiteList['column-rule-color'] = false;
    whiteList['column-rule-style'] = false;
    whiteList['column-rule-width'] = false;
    whiteList['column-span'] = false;
    whiteList['column-width'] = false;
    whiteList['columns'] = false;
    whiteList['contain'] = false;
    whiteList['content'] = false;
    whiteList['counter-increment'] = false;
    whiteList['counter-reset'] = false;
    whiteList['counter-set'] = false;
    whiteList['crop'] = false;
    whiteList['cue'] = false;
    whiteList['cue-after'] = false;
    whiteList['cue-before'] = false;
    whiteList['cursor'] = false;
    whiteList['direction'] = false;
    whiteList['display'] = true;
    whiteList['display-inside'] = true;
    whiteList['display-list'] = true;
    whiteList['display-outside'] = true;
    whiteList['dominant-baseline'] = false;
    whiteList['elevation'] = false;
    whiteList['empty-cells'] = false;
    whiteList['filter'] = false;
    whiteList['flex'] = false;
    whiteList['flex-basis'] = false;
    whiteList['flex-direction'] = false;
    whiteList['flex-flow'] = false;
    whiteList['flex-grow'] = false;
    whiteList['flex-shrink'] = false;
    whiteList['flex-wrap'] = false;
    whiteList['float'] = false;
    whiteList['float-offset'] = false;
    whiteList['flood-color'] = false;
    whiteList['flood-opacity'] = false;
    whiteList['flow-from'] = false;
    whiteList['flow-into'] = false;
    whiteList['font'] = true;
    whiteList['font-family'] = true;
    whiteList['font-feature-settings'] = true;
    whiteList['font-kerning'] = true;
    whiteList['font-language-override'] = true;
    whiteList['font-size'] = true;
    whiteList['font-size-adjust'] = true;
    whiteList['font-stretch'] = true;
    whiteList['font-style'] = true;
    whiteList['font-synthesis'] = true;
    whiteList['font-variant'] = true;
    whiteList['font-variant-alternates'] = true;
    whiteList['font-variant-caps'] = true;
    whiteList['font-variant-east-asian'] = true;
    whiteList['font-variant-ligatures'] = true;
    whiteList['font-variant-numeric'] = true;
    whiteList['font-variant-position'] = true;
    whiteList['font-weight'] = true;
    whiteList['grid'] = false;
    whiteList['grid-area'] = false;
    whiteList['grid-auto-columns'] = false;
    whiteList['grid-auto-flow'] = false;
    whiteList['grid-auto-rows'] = false;
    whiteList['grid-column'] = false;
    whiteList['grid-column-end'] = false;
    whiteList['grid-column-start'] = false;
    whiteList['grid-row'] = false;
    whiteList['grid-row-end'] = false;
    whiteList['grid-row-start'] = false;
    whiteList['grid-template'] = false;
    whiteList['grid-template-areas'] = false;
    whiteList['grid-template-columns'] = false;
    whiteList['grid-template-rows'] = false;
    whiteList['hanging-punctuation'] = false;
    whiteList['height'] = true;
    whiteList['hyphens'] = false;
    whiteList['icon'] = false;
    whiteList['image-orientation'] = false;
    whiteList['image-resolution'] = false;
    whiteList['ime-mode'] = false;
    whiteList['initial-letters'] = false;
    whiteList['inline-box-align'] = false;
    whiteList['justify-content'] = false;
    whiteList['justify-items'] = false;
    whiteList['justify-self'] = false;
    whiteList['left'] = false;
    whiteList['letter-spacing'] = true;
    whiteList['lighting-color'] = true;
    whiteList['line-box-contain'] = false;
    whiteList['line-break'] = false;
    whiteList['line-grid'] = false;
    whiteList['line-height'] = false;
    whiteList['line-snap'] = false;
    whiteList['line-stacking'] = false;
    whiteList['line-stacking-ruby'] = false;
    whiteList['line-stacking-shift'] = false;
    whiteList['line-stacking-strategy'] = false;
    whiteList['list-style'] = true;
    whiteList['list-style-image'] = true;
    whiteList['list-style-position'] = true;
    whiteList['list-style-type'] = true;
    whiteList['margin'] = true;
    whiteList['margin-bottom'] = true;
    whiteList['margin-left'] = true;
    whiteList['margin-right'] = true;
    whiteList['margin-top'] = true;
    whiteList['marker-offset'] = false;
    whiteList['marker-side'] = false;
    whiteList['marks'] = false;
    whiteList['mask'] = false;
    whiteList['mask-box'] = false;
    whiteList['mask-box-outset'] = false;
    whiteList['mask-box-repeat'] = false;
    whiteList['mask-box-slice'] = false;
    whiteList['mask-box-source'] = false;
    whiteList['mask-box-width'] = false;
    whiteList['mask-clip'] = false;
    whiteList['mask-image'] = false;
    whiteList['mask-origin'] = false;
    whiteList['mask-position'] = false;
    whiteList['mask-repeat'] = false;
    whiteList['mask-size'] = false;
    whiteList['mask-source-type'] = false;
    whiteList['mask-type'] = false;
    whiteList['max-height'] = true;
    whiteList['max-lines'] = false;
    whiteList['max-width'] = true;
    whiteList['min-height'] = true;
    whiteList['min-width'] = true;
    whiteList['move-to'] = false;
    whiteList['nav-down'] = false;
    whiteList['nav-index'] = false;
    whiteList['nav-left'] = false;
    whiteList['nav-right'] = false;
    whiteList['nav-up'] = false;
    whiteList['object-fit'] = false;
    whiteList['object-position'] = false;
    whiteList['opacity'] = false;
    whiteList['order'] = false;
    whiteList['orphans'] = false;
    whiteList['outline'] = false;
    whiteList['outline-color'] = false;
    whiteList['outline-offset'] = false;
    whiteList['outline-style'] = false;
    whiteList['outline-width'] = false;
    whiteList['overflow'] = false;
    whiteList['overflow-wrap'] = false;
    whiteList['overflow-x'] = false;
    whiteList['overflow-y'] = false;
    whiteList['padding'] = true;
    whiteList['padding-bottom'] = true;
    whiteList['padding-left'] = true;
    whiteList['padding-right'] = true;
    whiteList['padding-top'] = true;
    whiteList['page'] = false;
    whiteList['page-break-after'] = false;
    whiteList['page-break-before'] = false;
    whiteList['page-break-inside'] = false;
    whiteList['page-policy'] = false;
    whiteList['pause'] = false;
    whiteList['pause-after'] = false;
    whiteList['pause-before'] = false;
    whiteList['perspective'] = false;
    whiteList['perspective-origin'] = false;
    whiteList['pitch'] = false;
    whiteList['pitch-range'] = false;
    whiteList['play-during'] = false;
    whiteList['position'] = false;
    whiteList['presentation-level'] = false;
    whiteList['quotes'] = false;
    whiteList['region-fragment'] = false;
    whiteList['resize'] = false;
    whiteList['rest'] = false;
    whiteList['rest-after'] = false;
    whiteList['rest-before'] = false;
    whiteList['richness'] = false;
    whiteList['right'] = false;
    whiteList['rotation'] = false;
    whiteList['rotation-point'] = false;
    whiteList['ruby-align'] = false;
    whiteList['ruby-merge'] = false;
    whiteList['ruby-position'] = false;
    whiteList['shape-image-threshold'] = false;
    whiteList['shape-outside'] = false;
    whiteList['shape-margin'] = false;
    whiteList['size'] = false;
    whiteList['speak'] = false;
    whiteList['speak-as'] = false;
    whiteList['speak-header'] = false;
    whiteList['speak-numeral'] = false;
    whiteList['speak-punctuation'] = false;
    whiteList['speech-rate'] = false;
    whiteList['stress'] = false;
    whiteList['string-set'] = false;
    whiteList['tab-size'] = false;
    whiteList['table-layout'] = false;
    whiteList['text-align'] = true;
    whiteList['text-align-last'] = true;
    whiteList['text-combine-upright'] = true;
    whiteList['text-decoration'] = true;
    whiteList['text-decoration-color'] = true;
    whiteList['text-decoration-line'] = true;
    whiteList['text-decoration-skip'] = true;
    whiteList['text-decoration-style'] = true;
    whiteList['text-emphasis'] = true;
    whiteList['text-emphasis-color'] = true;
    whiteList['text-emphasis-position'] = true;
    whiteList['text-emphasis-style'] = true;
    whiteList['text-height'] = true;
    whiteList['text-indent'] = true;
    whiteList['text-justify'] = true;
    whiteList['text-orientation'] = true;
    whiteList['text-overflow'] = true;
    whiteList['text-shadow'] = true;
    whiteList['text-space-collapse'] = true;
    whiteList['text-transform'] = true;
    whiteList['text-underline-position'] = true;
    whiteList['text-wrap'] = true;
    whiteList['top'] = false;
    whiteList['transform'] = false;
    whiteList['transform-origin'] = false;
    whiteList['transform-style'] = false;
    whiteList['transition'] = false;
    whiteList['transition-delay'] = false;
    whiteList['transition-duration'] = false;
    whiteList['transition-property'] = false;
    whiteList['transition-timing-function'] = false;
    whiteList['unicode-bidi'] = false;
    whiteList['vertical-align'] = false;
    whiteList['visibility'] = false;
    whiteList['voice-balance'] = false;
    whiteList['voice-duration'] = false;
    whiteList['voice-family'] = false;
    whiteList['voice-pitch'] = false;
    whiteList['voice-range'] = false;
    whiteList['voice-rate'] = false;
    whiteList['voice-stress'] = false;
    whiteList['voice-volume'] = false;
    whiteList['volume'] = false;
    whiteList['white-space'] = false;
    whiteList['widows'] = false;
    whiteList['width'] = true;
    whiteList['will-change'] = false;
    whiteList['word-break'] = true;
    whiteList['word-spacing'] = true;
    whiteList['word-wrap'] = true;
    whiteList['wrap-flow'] = false;
    whiteList['wrap-through'] = false;
    whiteList['writing-mode'] = false;
    whiteList['z-index'] = false;
    return whiteList;
  }

  function onAttr(name, value, options) {}

  function onIgnoreAttr(name, value, options) {}

  var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;

  function safeAttrValue(name, value) {
    if (REGEXP_URL_JAVASCRIPT.test(value)) return '';
    return value;
  }

  var whiteList = getDefaultWhiteList();
  var getDefaultWhiteList_1 = getDefaultWhiteList;
  var onAttr_1 = onAttr;
  var onIgnoreAttr_1 = onIgnoreAttr;
  var safeAttrValue_1 = safeAttrValue;
  var _default = {
    whiteList: whiteList,
    getDefaultWhiteList: getDefaultWhiteList_1,
    onAttr: onAttr_1,
    onIgnoreAttr: onIgnoreAttr_1,
    safeAttrValue: safeAttrValue_1
  };

  var util = {
    indexOf: function indexOf(arr, item) {
      var i, j;

      if (Array.prototype.indexOf) {
        return arr.indexOf(item);
      }

      for (i = 0, j = arr.length; i < j; i++) {
        if (arr[i] === item) {
          return i;
        }
      }

      return -1;
    },
    forEach: function forEach(arr, fn, scope) {
      var i, j;

      if (Array.prototype.forEach) {
        return arr.forEach(fn, scope);
      }

      for (i = 0, j = arr.length; i < j; i++) {
        fn.call(scope, arr[i], i, arr);
      }
    },
    trim: function trim(str) {
      if (String.prototype.trim) {
        return str.trim();
      }

      return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    trimRight: function trimRight(str) {
      if (String.prototype.trimRight) {
        return str.trimRight();
      }

      return str.replace(/(\s*$)/g, '');
    }
  };

  function parseStyle(css, onAttr) {
    css = util.trimRight(css);
    if (css[css.length - 1] !== ';') css += ';';
    var cssLength = css.length;
    var isParenthesisOpen = false;
    var lastPos = 0;
    var i = 0;
    var retCSS = '';

    function addNewAttr() {
      if (!isParenthesisOpen) {
        var source = util.trim(css.slice(lastPos, i));

        var j = source.indexOf(':');

        if (j !== -1) {
          var name = util.trim(source.slice(0, j));

          var value = util.trim(source.slice(j + 1));

          if (name) {
            var ret = onAttr(lastPos, retCSS.length, name, value, source);
            if (ret) retCSS += ret + '; ';
          }
        }
      }

      lastPos = i + 1;
    }

    for (; i < cssLength; i++) {
      var c = css[i];

      if (c === '/' && css[i + 1] === '*') {
        var j = css.indexOf('*/', i + 2);
        if (j === -1) break;
        i = j + 1;
        lastPos = i + 1;
        isParenthesisOpen = false;
      } else if (c === '(') {
        isParenthesisOpen = true;
      } else if (c === ')') {
        isParenthesisOpen = false;
      } else if (c === ';') {
        if (isParenthesisOpen) ; else {
          addNewAttr();
        }
      } else if (c === '\n') {
        addNewAttr();
      }
    }

    return util.trim(retCSS);
  }

  var parser = parseStyle;

  function isNull(obj) {
    return obj === undefined || obj === null;
  }

  function shallowCopyObject(obj) {
    var ret = {};

    for (var i in obj) {
      ret[i] = obj[i];
    }

    return ret;
  }

  function FilterCSS(options) {
    options = shallowCopyObject(options || {});
    options.whiteList = options.whiteList || _default.whiteList;
    options.onAttr = options.onAttr || _default.onAttr;
    options.onIgnoreAttr = options.onIgnoreAttr || _default.onIgnoreAttr;
    options.safeAttrValue = options.safeAttrValue || _default.safeAttrValue;
    this.options = options;
  }

  FilterCSS.prototype.process = function (css) {
    css = css || '';
    css = css.toString();
    if (!css) return '';
    var me = this;
    var options = me.options;
    var whiteList = options.whiteList;
    var onAttr = options.onAttr;
    var onIgnoreAttr = options.onIgnoreAttr;
    var safeAttrValue = options.safeAttrValue;
    var retCSS = parser(css, function (sourcePosition, position, name, value, source) {
      var check = whiteList[name];
      var isWhite = false;
      if (check === true) isWhite = check;else if (typeof check === 'function') isWhite = check(value);else if (check instanceof RegExp) isWhite = check.test(value);
      if (isWhite !== true) isWhite = false;
      value = safeAttrValue(name, value);
      if (!value) return;
      var opts = {
        position: position,
        sourcePosition: sourcePosition,
        source: source,
        isWhite: isWhite
      };

      if (isWhite) {
        var ret = onAttr(name, value, opts);

        if (isNull(ret)) {
          return name + ':' + value;
        } else {
          return ret;
        }
      } else {
        var ret = onIgnoreAttr(name, value, opts);

        if (!isNull(ret)) {
          return ret;
        }
      }
    });
    return retCSS;
  };

  var css = FilterCSS;

  var lib = createCommonjsModule(function (module, exports) {
    function filterCSS(html, options) {
      var xss = new css(options);
      return xss.process(html);
    }

    exports = module.exports = filterCSS;
    exports.FilterCSS = css;

    for (var i in _default) {
      exports[i] = _default[i];
    }

    if (typeof window !== 'undefined') {
      window.filterCSS = module.exports;
    }
  });
  var lib_1 = lib.FilterCSS;

  var util$1 = {
    indexOf: function indexOf(arr, item) {
      var i, j;

      if (Array.prototype.indexOf) {
        return arr.indexOf(item);
      }

      for (i = 0, j = arr.length; i < j; i++) {
        if (arr[i] === item) {
          return i;
        }
      }

      return -1;
    },
    forEach: function forEach(arr, fn, scope) {
      var i, j;

      if (Array.prototype.forEach) {
        return arr.forEach(fn, scope);
      }

      for (i = 0, j = arr.length; i < j; i++) {
        fn.call(scope, arr[i], i, arr);
      }
    },
    trim: function trim(str) {
      if (String.prototype.trim) {
        return str.trim();
      }

      return str.replace(/(^\s*)|(\s*$)/g, "");
    },
    spaceIndex: function spaceIndex(str) {
      var reg = /\s|\n|\t/;
      var match = reg.exec(str);
      return match ? match.index : -1;
    }
  };

  var FilterCSS$1 = lib.FilterCSS;
  var getDefaultCSSWhiteList = lib.getDefaultWhiteList;

  function getDefaultWhiteList$1() {
    return {
      a: ["target", "href", "title"],
      abbr: ["title"],
      address: [],
      area: ["shape", "coords", "href", "alt"],
      article: [],
      aside: [],
      audio: ["autoplay", "controls", "loop", "preload", "src"],
      b: [],
      bdi: ["dir"],
      bdo: ["dir"],
      big: [],
      blockquote: ["cite"],
      br: [],
      caption: [],
      center: [],
      cite: [],
      code: [],
      col: ["align", "valign", "span", "width"],
      colgroup: ["align", "valign", "span", "width"],
      dd: [],
      del: ["datetime"],
      details: ["open"],
      div: [],
      dl: [],
      dt: [],
      em: [],
      font: ["color", "size", "face"],
      footer: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      header: [],
      hr: [],
      i: [],
      img: ["src", "alt", "title", "width", "height"],
      ins: ["datetime"],
      li: [],
      mark: [],
      nav: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      section: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      table: ["width", "border", "align", "valign"],
      tbody: ["align", "valign"],
      td: ["width", "rowspan", "colspan", "align", "valign"],
      tfoot: ["align", "valign"],
      th: ["width", "rowspan", "colspan", "align", "valign"],
      thead: ["align", "valign"],
      tr: ["rowspan", "align", "valign"],
      tt: [],
      u: [],
      ul: [],
      video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
    };
  }

  var defaultCSSFilter = new FilterCSS$1();

  function onTag(tag, html, options) {}

  function onIgnoreTag(tag, html, options) {}

  function onTagAttr(tag, name, value) {}

  function onIgnoreTagAttr(tag, name, value) {}

  function escapeHtml(html) {
    return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
  }

  function safeAttrValue$1(tag, name, value, cssFilter) {
    value = friendlyAttrValue(value);

    if (name === "href" || name === "src") {
      value = util$1.trim(value);
      if (value === "#") return "#";

      if (!(value.substr(0, 7) === "http://" || value.substr(0, 8) === "https://" || value.substr(0, 7) === "mailto:" || value.substr(0, 4) === "tel:" || value[0] === "#" || value[0] === "/")) {
        return "";
      }
    } else if (name === "background") {
      REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;

      if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
        return "";
      }
    } else if (name === "style") {
      REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;

      if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
        return "";
      }

      REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;

      if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
        REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;

        if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
          return "";
        }
      }

      if (cssFilter !== false) {
        cssFilter = cssFilter || defaultCSSFilter;
        value = cssFilter.process(value);
      }
    }

    value = escapeAttrValue(value);
    return value;
  }

  var REGEXP_LT = /</g;
  var REGEXP_GT = />/g;
  var REGEXP_QUOTE = /"/g;
  var REGEXP_QUOTE_2 = /&quot;/g;
  var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
  var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
  var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
  var REGEXP_DEFAULT_ON_TAG_ATTR_4 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi;
  var REGEXP_DEFAULT_ON_TAG_ATTR_7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
  var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;

  function escapeQuote(str) {
    return str.replace(REGEXP_QUOTE, "&quot;");
  }

  function unescapeQuote(str) {
    return str.replace(REGEXP_QUOTE_2, '"');
  }

  function escapeHtmlEntities(str) {
    return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str, code) {
      return code[0] === "x" || code[0] === "X" ? String.fromCharCode(parseInt(code.substr(1), 16)) : String.fromCharCode(parseInt(code, 10));
    });
  }

  function escapeDangerHtml5Entities(str) {
    return str.replace(REGEXP_ATTR_VALUE_COLON, ":").replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
  }

  function clearNonPrintableCharacter(str) {
    var str2 = "";

    for (var i = 0, len = str.length; i < len; i++) {
      str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
    }

    return util$1.trim(str2);
  }

  function friendlyAttrValue(str) {
    str = unescapeQuote(str);
    str = escapeHtmlEntities(str);
    str = escapeDangerHtml5Entities(str);
    str = clearNonPrintableCharacter(str);
    return str;
  }

  function escapeAttrValue(str) {
    str = escapeQuote(str);
    str = escapeHtml(str);
    return str;
  }

  function onIgnoreTagStripAll() {
    return "";
  }

  function StripTagBody(tags, next) {
    if (typeof next !== "function") {
      next = function next() {};
    }

    var isRemoveAllTag = !Array.isArray(tags);

    function isRemoveTag(tag) {
      if (isRemoveAllTag) return true;
      return util$1.indexOf(tags, tag) !== -1;
    }

    var removeList = [];
    var posStart = false;
    return {
      onIgnoreTag: function onIgnoreTag(tag, html, options) {
        if (isRemoveTag(tag)) {
          if (options.isClosing) {
            var ret = "[/removed]";
            var end = options.position + ret.length;
            removeList.push([posStart !== false ? posStart : options.position, end]);
            posStart = false;
            return ret;
          } else {
            if (!posStart) {
              posStart = options.position;
            }

            return "[removed]";
          }
        } else {
          return next(tag, html, options);
        }
      },
      remove: function remove(html) {
        var rethtml = "";
        var lastPos = 0;

        util$1.forEach(removeList, function (pos) {
          rethtml += html.slice(lastPos, pos[0]);
          lastPos = pos[1];
        });

        rethtml += html.slice(lastPos);
        return rethtml;
      }
    };
  }

  function stripCommentTag(html) {
    return html.replace(STRIP_COMMENT_TAG_REGEXP, "");
  }

  var STRIP_COMMENT_TAG_REGEXP = /<!--[\s\S]*?-->/g;

  function stripBlankChar(html) {
    var chars = html.split("");
    chars = chars.filter(function (_char) {
      var c = _char.charCodeAt(0);

      if (c === 127) return false;

      if (c <= 31) {
        if (c === 10 || c === 13) return true;
        return false;
      }

      return true;
    });
    return chars.join("");
  }

  var whiteList$1 = getDefaultWhiteList$1();
  var getDefaultWhiteList_1$1 = getDefaultWhiteList$1;
  var onTag_1 = onTag;
  var onIgnoreTag_1 = onIgnoreTag;
  var onTagAttr_1 = onTagAttr;
  var onIgnoreTagAttr_1 = onIgnoreTagAttr;
  var safeAttrValue_1$1 = safeAttrValue$1;
  var escapeHtml_1 = escapeHtml;
  var escapeQuote_1 = escapeQuote;
  var unescapeQuote_1 = unescapeQuote;
  var escapeHtmlEntities_1 = escapeHtmlEntities;
  var escapeDangerHtml5Entities_1 = escapeDangerHtml5Entities;
  var clearNonPrintableCharacter_1 = clearNonPrintableCharacter;
  var friendlyAttrValue_1 = friendlyAttrValue;
  var escapeAttrValue_1 = escapeAttrValue;
  var onIgnoreTagStripAll_1 = onIgnoreTagStripAll;
  var StripTagBody_1 = StripTagBody;
  var stripCommentTag_1 = stripCommentTag;
  var stripBlankChar_1 = stripBlankChar;
  var cssFilter = defaultCSSFilter;
  var getDefaultCSSWhiteList_1 = getDefaultCSSWhiteList;
  var _default$1 = {
    whiteList: whiteList$1,
    getDefaultWhiteList: getDefaultWhiteList_1$1,
    onTag: onTag_1,
    onIgnoreTag: onIgnoreTag_1,
    onTagAttr: onTagAttr_1,
    onIgnoreTagAttr: onIgnoreTagAttr_1,
    safeAttrValue: safeAttrValue_1$1,
    escapeHtml: escapeHtml_1,
    escapeQuote: escapeQuote_1,
    unescapeQuote: unescapeQuote_1,
    escapeHtmlEntities: escapeHtmlEntities_1,
    escapeDangerHtml5Entities: escapeDangerHtml5Entities_1,
    clearNonPrintableCharacter: clearNonPrintableCharacter_1,
    friendlyAttrValue: friendlyAttrValue_1,
    escapeAttrValue: escapeAttrValue_1,
    onIgnoreTagStripAll: onIgnoreTagStripAll_1,
    StripTagBody: StripTagBody_1,
    stripCommentTag: stripCommentTag_1,
    stripBlankChar: stripBlankChar_1,
    cssFilter: cssFilter,
    getDefaultCSSWhiteList: getDefaultCSSWhiteList_1
  };

  function getTagName(html) {
    var i = util$1.spaceIndex(html);

    if (i === -1) {
      var tagName = html.slice(1, -1);
    } else {
      var tagName = html.slice(1, i + 1);
    }

    tagName = util$1.trim(tagName).toLowerCase();
    if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
    if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
    return tagName;
  }

  function isClosing(html) {
    return html.slice(0, 2) === "</";
  }

  function parseTag(html, onTag, escapeHtml) {
    "user strict";

    var rethtml = "";
    var lastPos = 0;
    var tagStart = false;
    var quoteStart = false;
    var currentPos = 0;
    var len = html.length;
    var currentTagName = "";
    var currentHtml = "";

    for (currentPos = 0; currentPos < len; currentPos++) {
      var c = html.charAt(currentPos);

      if (tagStart === false) {
        if (c === "<") {
          tagStart = currentPos;
          continue;
        }
      } else {
        if (quoteStart === false) {
          if (c === "<") {
            rethtml += escapeHtml(html.slice(lastPos, currentPos));
            tagStart = currentPos;
            lastPos = currentPos;
            continue;
          }

          if (c === ">") {
            rethtml += escapeHtml(html.slice(lastPos, tagStart));
            currentHtml = html.slice(tagStart, currentPos + 1);
            currentTagName = getTagName(currentHtml);
            rethtml += onTag(tagStart, rethtml.length, currentTagName, currentHtml, isClosing(currentHtml));
            lastPos = currentPos + 1;
            tagStart = false;
            continue;
          }

          if ((c === '"' || c === "'") && html.charAt(currentPos - 1) === "=") {
            quoteStart = c;
            continue;
          }
        } else {
          if (c === quoteStart) {
            quoteStart = false;
            continue;
          }
        }
      }
    }

    if (lastPos < html.length) {
      rethtml += escapeHtml(html.substr(lastPos));
    }

    return rethtml;
  }

  var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9_:\.\-]/gim;

  function parseAttr(html, onAttr) {
    "user strict";

    var lastPos = 0;
    var retAttrs = [];
    var tmpName = false;
    var len = html.length;

    function addAttr(name, value) {
      name = util$1.trim(name);
      name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
      if (name.length < 1) return;
      var ret = onAttr(name, value || "");
      if (ret) retAttrs.push(ret);
    }

    for (var i = 0; i < len; i++) {
      var c = html.charAt(i);
      var v, j;

      if (tmpName === false && c === "=") {
        tmpName = html.slice(lastPos, i);
        lastPos = i + 1;
        continue;
      }

      if (tmpName !== false) {
        if (i === lastPos && (c === '"' || c === "'") && html.charAt(i - 1) === "=") {
          j = html.indexOf(c, i + 1);

          if (j === -1) {
            break;
          } else {
            v = util$1.trim(html.slice(lastPos + 1, j));
            addAttr(tmpName, v);
            tmpName = false;
            i = j;
            lastPos = i + 1;
            continue;
          }
        }
      }

      if (/\s|\n|\t/.test(c)) {
        html = html.replace(/\s|\n|\t/g, " ");

        if (tmpName === false) {
          j = findNextEqual(html, i);

          if (j === -1) {
            v = util$1.trim(html.slice(lastPos, i));
            addAttr(v);
            tmpName = false;
            lastPos = i + 1;
            continue;
          } else {
            i = j - 1;
            continue;
          }
        } else {
          j = findBeforeEqual(html, i - 1);

          if (j === -1) {
            v = util$1.trim(html.slice(lastPos, i));
            v = stripQuoteWrap(v);
            addAttr(tmpName, v);
            tmpName = false;
            lastPos = i + 1;
            continue;
          } else {
            continue;
          }
        }
      }
    }

    if (lastPos < html.length) {
      if (tmpName === false) {
        addAttr(html.slice(lastPos));
      } else {
        addAttr(tmpName, stripQuoteWrap(util$1.trim(html.slice(lastPos))));
      }
    }

    return util$1.trim(retAttrs.join(" "));
  }

  function findNextEqual(str, i) {
    for (; i < str.length; i++) {
      var c = str[i];
      if (c === " ") continue;
      if (c === "=") return i;
      return -1;
    }
  }

  function findBeforeEqual(str, i) {
    for (; i > 0; i--) {
      var c = str[i];
      if (c === " ") continue;
      if (c === "=") return i;
      return -1;
    }
  }

  function isQuoteWrapString(text) {
    if (text[0] === '"' && text[text.length - 1] === '"' || text[0] === "'" && text[text.length - 1] === "'") {
      return true;
    } else {
      return false;
    }
  }

  function stripQuoteWrap(text) {
    if (isQuoteWrapString(text)) {
      return text.substr(1, text.length - 2);
    } else {
      return text;
    }
  }

  var parseTag_1 = parseTag;
  var parseAttr_1 = parseAttr;
  var parser$1 = {
    parseTag: parseTag_1,
    parseAttr: parseAttr_1
  };

  var FilterCSS$2 = lib.FilterCSS;
  var parseTag$1 = parser$1.parseTag;
  var parseAttr$1 = parser$1.parseAttr;

  function isNull$1(obj) {
    return obj === undefined || obj === null;
  }

  function getAttrs(html) {
    var i = util$1.spaceIndex(html);

    if (i === -1) {
      return {
        html: "",
        closing: html[html.length - 2] === "/"
      };
    }

    html = util$1.trim(html.slice(i + 1, -1));
    var isClosing = html[html.length - 1] === "/";
    if (isClosing) html = util$1.trim(html.slice(0, -1));
    return {
      html: html,
      closing: isClosing
    };
  }

  function shallowCopyObject$1(obj) {
    var ret = {};

    for (var i in obj) {
      ret[i] = obj[i];
    }

    return ret;
  }

  function FilterXSS(options) {
    options = shallowCopyObject$1(options || {});

    if (options.stripIgnoreTag) {
      if (options.onIgnoreTag) {
        console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time');
      }

      options.onIgnoreTag = _default$1.onIgnoreTagStripAll;
    }

    options.whiteList = options.whiteList || _default$1.whiteList;
    options.onTag = options.onTag || _default$1.onTag;
    options.onTagAttr = options.onTagAttr || _default$1.onTagAttr;
    options.onIgnoreTag = options.onIgnoreTag || _default$1.onIgnoreTag;
    options.onIgnoreTagAttr = options.onIgnoreTagAttr || _default$1.onIgnoreTagAttr;
    options.safeAttrValue = options.safeAttrValue || _default$1.safeAttrValue;
    options.escapeHtml = options.escapeHtml || _default$1.escapeHtml;
    this.options = options;

    if (options.css === false) {
      this.cssFilter = false;
    } else {
      options.css = options.css || {};
      this.cssFilter = new FilterCSS$2(options.css);
    }
  }

  FilterXSS.prototype.process = function (html) {
    html = html || "";
    html = html.toString();
    if (!html) return "";
    var me = this;
    var options = me.options;
    var whiteList = options.whiteList;
    var onTag = options.onTag;
    var onIgnoreTag = options.onIgnoreTag;
    var onTagAttr = options.onTagAttr;
    var onIgnoreTagAttr = options.onIgnoreTagAttr;
    var safeAttrValue = options.safeAttrValue;
    var escapeHtml = options.escapeHtml;
    var cssFilter = me.cssFilter;

    if (options.stripBlankChar) {
      html = _default$1.stripBlankChar(html);
    }

    if (!options.allowCommentTag) {
      html = _default$1.stripCommentTag(html);
    }

    var stripIgnoreTagBody = false;

    if (options.stripIgnoreTagBody) {
      var stripIgnoreTagBody = _default$1.StripTagBody(options.stripIgnoreTagBody, onIgnoreTag);
      onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
    }

    var retHtml = parseTag$1(html, function (sourcePosition, position, tag, html, isClosing) {
      var info = {
        sourcePosition: sourcePosition,
        position: position,
        isClosing: isClosing,
        isWhite: whiteList.hasOwnProperty(tag)
      };
      var ret = onTag(tag, html, info);
      if (!isNull$1(ret)) return ret;

      if (info.isWhite) {
        if (info.isClosing) {
          return "</" + tag + ">";
        }

        var attrs = getAttrs(html);
        var whiteAttrList = whiteList[tag];
        var attrsHtml = parseAttr$1(attrs.html, function (name, value) {
          var isWhiteAttr = util$1.indexOf(whiteAttrList, name) !== -1;
          var ret = onTagAttr(tag, name, value, isWhiteAttr);
          if (!isNull$1(ret)) return ret;

          if (isWhiteAttr) {
            value = safeAttrValue(tag, name, value, cssFilter);

            if (value) {
              return name + '="' + value + '"';
            } else {
              return name;
            }
          } else {
            var ret = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
            if (!isNull$1(ret)) return ret;
            return;
          }
        });
        var html = "<" + tag;
        if (attrsHtml) html += " " + attrsHtml;
        if (attrs.closing) html += " /";
        html += ">";
        return html;
      } else {
        var ret = onIgnoreTag(tag, html, info);
        if (!isNull$1(ret)) return ret;
        return escapeHtml(html);
      }
    }, escapeHtml);

    if (stripIgnoreTagBody) {
      retHtml = stripIgnoreTagBody.remove(retHtml);
    }

    return retHtml;
  };

  var xss = FilterXSS;

  var lib$1 = createCommonjsModule(function (module, exports) {
    function filterXSS(html, options) {
      var xss$1 = new xss(options);
      return xss$1.process(html);
    }

    exports = module.exports = filterXSS;
    exports.filterXSS = filterXSS;
    exports.FilterXSS = xss;

    for (var i in _default$1) {
      exports[i] = _default$1[i];
    }

    for (var i in parser$1) {
      exports[i] = parser$1[i];
    }

    if (typeof window !== "undefined") {
      window.filterXSS = module.exports;
    }

    function isWorkerEnv() {
      return typeof self !== 'undefined' && typeof DedicatedWorkerGlobalScope !== 'undefined' && self instanceof DedicatedWorkerGlobalScope;
    }

    if (isWorkerEnv()) {
      self.filterXSS = module.exports;
    }
  });
  var lib_1$1 = lib$1.filterXSS;
  var lib_2 = lib$1.FilterXSS;

  var highlight = createCommonjsModule(function (module, exports) {
    (function (factory) {
      var globalObject = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window || (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object' && self;

      if ( !exports.nodeType) {
        factory(exports);
      } else if (globalObject) {
        globalObject.hljs = factory({});
      }
    })(function (hljs) {
      var ArrayProto = [],
          objectKeys = Object.keys;
      var languages = {},
          aliases = {};
      var SAFE_MODE = true;
      var noHighlightRe = /^(no-?highlight|plain|text)$/i,
          languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
          fixMarkupRe = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;
      var spanEndTag = '</span>';
      var LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
      var options = {
        classPrefix: 'hljs-',
        tabReplace: null,
        useBR: false,
        languages: undefined
      };
      var COMMON_KEYWORDS = 'of and for in not or if then'.split(' ');

      function escape(value) {
        return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }

      function tag(node) {
        return node.nodeName.toLowerCase();
      }

      function testRe(re, lexeme) {
        var match = re && re.exec(lexeme);
        return match && match.index === 0;
      }

      function isNotHighlighted(language) {
        return noHighlightRe.test(language);
      }

      function blockLanguage(block) {
        var i, match, length, _class;

        var classes = block.className + ' ';
        classes += block.parentNode ? block.parentNode.className : '';
        match = languagePrefixRe.exec(classes);

        if (match) {
          var language = getLanguage(match[1]);

          if (!language) {
            console.warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
            console.warn("Falling back to no-highlight mode for this block.", block);
          }

          return language ? match[1] : 'no-highlight';
        }

        classes = classes.split(/\s+/);

        for (i = 0, length = classes.length; i < length; i++) {
          _class = classes[i];

          if (isNotHighlighted(_class) || getLanguage(_class)) {
            return _class;
          }
        }
      }

      function inherit(parent) {
        var key;
        var result = {};
        var objects = Array.prototype.slice.call(arguments, 1);

        for (key in parent) {
          result[key] = parent[key];
        }

        objects.forEach(function (obj) {
          for (key in obj) {
            result[key] = obj[key];
          }
        });
        return result;
      }

      function nodeStream(node) {
        var result = [];

        (function _nodeStream(node, offset) {
          for (var child = node.firstChild; child; child = child.nextSibling) {
            if (child.nodeType === 3) offset += child.nodeValue.length;else if (child.nodeType === 1) {
              result.push({
                event: 'start',
                offset: offset,
                node: child
              });
              offset = _nodeStream(child, offset);

              if (!tag(child).match(/br|hr|img|input/)) {
                result.push({
                  event: 'stop',
                  offset: offset,
                  node: child
                });
              }
            }
          }

          return offset;
        })(node, 0);

        return result;
      }

      function mergeStreams(original, highlighted, value) {
        var processed = 0;
        var result = '';
        var nodeStack = [];

        function selectStream() {
          if (!original.length || !highlighted.length) {
            return original.length ? original : highlighted;
          }

          if (original[0].offset !== highlighted[0].offset) {
            return original[0].offset < highlighted[0].offset ? original : highlighted;
          }

          return highlighted[0].event === 'start' ? original : highlighted;
        }

        function open(node) {
          function attr_str(a) {
            return ' ' + a.nodeName + '="' + escape(a.value).replace(/"/g, '&quot;') + '"';
          }

          result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
        }

        function close(node) {
          result += '</' + tag(node) + '>';
        }

        function render(event) {
          (event.event === 'start' ? open : close)(event.node);
        }

        while (original.length || highlighted.length) {
          var stream = selectStream();
          result += escape(value.substring(processed, stream[0].offset));
          processed = stream[0].offset;

          if (stream === original) {
            nodeStack.reverse().forEach(close);

            do {
              render(stream.splice(0, 1)[0]);
              stream = selectStream();
            } while (stream === original && stream.length && stream[0].offset === processed);

            nodeStack.reverse().forEach(open);
          } else {
            if (stream[0].event === 'start') {
              nodeStack.push(stream[0].node);
            } else {
              nodeStack.pop();
            }

            render(stream.splice(0, 1)[0]);
          }
        }

        return result + escape(value.substr(processed));
      }

      function dependencyOnParent(mode) {
        if (!mode) return false;
        return mode.endsWithParent || dependencyOnParent(mode.starts);
      }

      function expand_or_clone_mode(mode) {
        if (mode.variants && !mode.cached_variants) {
          mode.cached_variants = mode.variants.map(function (variant) {
            return inherit(mode, {
              variants: null
            }, variant);
          });
        }

        if (mode.cached_variants) return mode.cached_variants;
        if (dependencyOnParent(mode)) return [inherit(mode, {
          starts: mode.starts ? inherit(mode.starts) : null
        })];
        if (Object.isFrozen(mode)) return [inherit(mode)];
        return [mode];
      }

      function compileKeywords(rawKeywords, case_insensitive) {
        var compiled_keywords = {};

        if (typeof rawKeywords === 'string') {
          splitAndCompile('keyword', rawKeywords);
        } else {
          objectKeys(rawKeywords).forEach(function (className) {
            splitAndCompile(className, rawKeywords[className]);
          });
        }

        return compiled_keywords;

        function splitAndCompile(className, str) {
          if (case_insensitive) {
            str = str.toLowerCase();
          }

          str.split(' ').forEach(function (keyword) {
            var pair = keyword.split('|');
            compiled_keywords[pair[0]] = [className, scoreForKeyword(pair[0], pair[1])];
          });
        }
      }

      function scoreForKeyword(keyword, providedScore) {
        if (providedScore) return Number(providedScore);
        return commonKeyword(keyword) ? 0 : 1;
      }

      function commonKeyword(word) {
        return COMMON_KEYWORDS.indexOf(word.toLowerCase()) != -1;
      }

      function compileLanguage(language) {
        function reStr(re) {
          return re && re.source || re;
        }

        function langRe(value, global) {
          return new RegExp(reStr(value), 'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : ''));
        }

        function reCountMatchGroups(re) {
          return new RegExp(re.toString() + '|').exec('').length - 1;
        }

        function joinRe(regexps, separator) {
          var backreferenceRe = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
          var numCaptures = 0;
          var ret = '';

          for (var i = 0; i < regexps.length; i++) {
            numCaptures += 1;
            var offset = numCaptures;
            var re = reStr(regexps[i]);

            if (i > 0) {
              ret += separator;
            }

            ret += "(";

            while (re.length > 0) {
              var match = backreferenceRe.exec(re);

              if (match == null) {
                ret += re;
                break;
              }

              ret += re.substring(0, match.index);
              re = re.substring(match.index + match[0].length);

              if (match[0][0] == '\\' && match[1]) {
                ret += '\\' + String(Number(match[1]) + offset);
              } else {
                ret += match[0];

                if (match[0] == '(') {
                  numCaptures++;
                }
              }
            }

            ret += ")";
          }

          return ret;
        }

        function buildModeRegex(mode) {
          var matchIndexes = {};
          var matcherRe;
          var regexes = [];
          var matcher = {};
          var matchAt = 1;

          function addRule(rule, regex) {
            matchIndexes[matchAt] = rule;
            regexes.push([rule, regex]);
            matchAt += reCountMatchGroups(regex) + 1;
          }

          var term;

          for (var i = 0; i < mode.contains.length; i++) {
            var re;
            term = mode.contains[i];

            if (term.beginKeywords) {
              re = '\\.?(?:' + term.begin + ')\\.?';
            } else {
              re = term.begin;
            }

            addRule(term, re);
          }

          if (mode.terminator_end) addRule("end", mode.terminator_end);
          if (mode.illegal) addRule("illegal", mode.illegal);
          var terminators = regexes.map(function (el) {
            return el[1];
          });
          matcherRe = langRe(joinRe(terminators, '|'), true);
          matcher.lastIndex = 0;

          matcher.exec = function (s) {
            var rule;
            if (regexes.length === 0) return null;
            matcherRe.lastIndex = matcher.lastIndex;
            var match = matcherRe.exec(s);

            if (!match) {
              return null;
            }

            for (var i = 0; i < match.length; i++) {
              if (match[i] != undefined && matchIndexes["" + i] != undefined) {
                rule = matchIndexes["" + i];
                break;
              }
            }

            if (typeof rule === "string") {
              match.type = rule;
              match.extra = [mode.illegal, mode.terminator_end];
            } else {
              match.type = "begin";
              match.rule = rule;
            }

            return match;
          };

          return matcher;
        }

        function compileMode(mode, parent) {
          if (mode.compiled) return;
          mode.compiled = true;
          mode.keywords = mode.keywords || mode.beginKeywords;
          if (mode.keywords) mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
          mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

          if (parent) {
            if (mode.beginKeywords) {
              mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
            }

            if (!mode.begin) mode.begin = /\B|\b/;
            mode.beginRe = langRe(mode.begin);
            if (mode.endSameAsBegin) mode.end = mode.begin;
            if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
            if (mode.end) mode.endRe = langRe(mode.end);
            mode.terminator_end = reStr(mode.end) || '';
            if (mode.endsWithParent && parent.terminator_end) mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
          }

          if (mode.illegal) mode.illegalRe = langRe(mode.illegal);
          if (mode.relevance == null) mode.relevance = 1;

          if (!mode.contains) {
            mode.contains = [];
          }

          mode.contains = Array.prototype.concat.apply([], mode.contains.map(function (c) {
            return expand_or_clone_mode(c === 'self' ? mode : c);
          }));
          mode.contains.forEach(function (c) {
            compileMode(c, mode);
          });

          if (mode.starts) {
            compileMode(mode.starts, parent);
          }

          mode.terminators = buildModeRegex(mode);
        }

        if (language.contains && language.contains.indexOf('self') != -1) {
          if (!SAFE_MODE) {
            throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
          } else {
            language.contains = language.contains.filter(function (mode) {
              return mode != 'self';
            });
          }
        }

        compileMode(language);
      }

      function highlight(languageName, code, ignore_illegals, continuation) {
        var codeToHighlight = code;

        function escapeRe(value) {
          return new RegExp(value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
        }

        function endOfMode(mode, lexeme) {
          if (testRe(mode.endRe, lexeme)) {
            while (mode.endsParent && mode.parent) {
              mode = mode.parent;
            }

            return mode;
          }

          if (mode.endsWithParent) {
            return endOfMode(mode.parent, lexeme);
          }
        }

        function keywordMatch(mode, match) {
          var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
          return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
        }

        function buildSpan(className, insideSpan, leaveOpen, noPrefix) {
          if (!leaveOpen && insideSpan === '') return '';
          if (!className) return insideSpan;
          var classPrefix = noPrefix ? '' : options.classPrefix,
              openSpan = '<span class="' + classPrefix,
              closeSpan = leaveOpen ? '' : spanEndTag;
          openSpan += className + '">';
          return openSpan + insideSpan + closeSpan;
        }

        function processKeywords() {
          var keyword_match, last_index, match, result;
          if (!top.keywords) return escape(mode_buffer);
          result = '';
          last_index = 0;
          top.lexemesRe.lastIndex = 0;
          match = top.lexemesRe.exec(mode_buffer);

          while (match) {
            result += escape(mode_buffer.substring(last_index, match.index));
            keyword_match = keywordMatch(top, match);

            if (keyword_match) {
              relevance += keyword_match[1];
              result += buildSpan(keyword_match[0], escape(match[0]));
            } else {
              result += escape(match[0]);
            }

            last_index = top.lexemesRe.lastIndex;
            match = top.lexemesRe.exec(mode_buffer);
          }

          return result + escape(mode_buffer.substr(last_index));
        }

        function processSubLanguage() {
          var explicit = typeof top.subLanguage === 'string';

          if (explicit && !languages[top.subLanguage]) {
            return escape(mode_buffer);
          }

          var result = explicit ? highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) : highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

          if (top.relevance > 0) {
            relevance += result.relevance;
          }

          if (explicit) {
            continuations[top.subLanguage] = result.top;
          }

          return buildSpan(result.language, result.value, false, true);
        }

        function processBuffer() {
          result += top.subLanguage != null ? processSubLanguage() : processKeywords();
          mode_buffer = '';
        }

        function startNewMode(mode) {
          result += mode.className ? buildSpan(mode.className, '', true) : '';
          top = Object.create(mode, {
            parent: {
              value: top
            }
          });
        }

        function doBeginMatch(match) {
          var lexeme = match[0];
          var new_mode = match.rule;

          if (new_mode && new_mode.endSameAsBegin) {
            new_mode.endRe = escapeRe(lexeme);
          }

          if (new_mode.skip) {
            mode_buffer += lexeme;
          } else {
            if (new_mode.excludeBegin) {
              mode_buffer += lexeme;
            }

            processBuffer();

            if (!new_mode.returnBegin && !new_mode.excludeBegin) {
              mode_buffer = lexeme;
            }
          }

          startNewMode(new_mode);
          return new_mode.returnBegin ? 0 : lexeme.length;
        }

        function doEndMatch(match) {
          var lexeme = match[0];
          var matchPlusRemainder = codeToHighlight.substr(match.index);
          var end_mode = endOfMode(top, matchPlusRemainder);

          if (!end_mode) {
            return;
          }

          var origin = top;

          if (origin.skip) {
            mode_buffer += lexeme;
          } else {
            if (!(origin.returnEnd || origin.excludeEnd)) {
              mode_buffer += lexeme;
            }

            processBuffer();

            if (origin.excludeEnd) {
              mode_buffer = lexeme;
            }
          }

          do {
            if (top.className) {
              result += spanEndTag;
            }

            if (!top.skip && !top.subLanguage) {
              relevance += top.relevance;
            }

            top = top.parent;
          } while (top !== end_mode.parent);

          if (end_mode.starts) {
            if (end_mode.endSameAsBegin) {
              end_mode.starts.endRe = end_mode.endRe;
            }

            startNewMode(end_mode.starts);
          }

          return origin.returnEnd ? 0 : lexeme.length;
        }

        var lastMatch = {};

        function processLexeme(text_before_match, match) {
          var lexeme = match && match[0];
          mode_buffer += text_before_match;

          if (lexeme == null) {
            processBuffer();
            return 0;
          }

          if (lastMatch.type == "begin" && match.type == "end" && lastMatch.index == match.index && lexeme === "") {
            mode_buffer += codeToHighlight.slice(match.index, match.index + 1);
            return 1;
          }

          lastMatch = match;

          if (match.type === "begin") {
            return doBeginMatch(match);
          } else if (match.type === "illegal" && !ignore_illegals) {
            throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');
          } else if (match.type === "end") {
            var processed = doEndMatch(match);
            if (processed != undefined) return processed;
          }

          mode_buffer += lexeme;
          return lexeme.length;
        }

        var language = getLanguage(languageName);

        if (!language) {
          console.error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
          throw new Error('Unknown language: "' + languageName + '"');
        }

        compileLanguage(language);
        var top = continuation || language;
        var continuations = {};
        var result = '',
            current;

        for (current = top; current !== language; current = current.parent) {
          if (current.className) {
            result = buildSpan(current.className, '', true) + result;
          }
        }

        var mode_buffer = '';
        var relevance = 0;

        try {
          var match,
              count,
              index = 0;

          while (true) {
            top.terminators.lastIndex = index;
            match = top.terminators.exec(codeToHighlight);
            if (!match) break;
            count = processLexeme(codeToHighlight.substring(index, match.index), match);
            index = match.index + count;
          }

          processLexeme(codeToHighlight.substr(index));

          for (current = top; current.parent; current = current.parent) {
            if (current.className) {
              result += spanEndTag;
            }
          }

          return {
            relevance: relevance,
            value: result,
            illegal: false,
            language: languageName,
            top: top
          };
        } catch (err) {
          if (err.message && err.message.indexOf('Illegal') !== -1) {
            return {
              illegal: true,
              relevance: 0,
              value: escape(codeToHighlight)
            };
          } else if (SAFE_MODE) {
            return {
              relevance: 0,
              value: escape(codeToHighlight),
              language: languageName,
              top: top,
              errorRaised: err
            };
          } else {
            throw err;
          }
        }
      }

      function highlightAuto(code, languageSubset) {
        languageSubset = languageSubset || options.languages || objectKeys(languages);
        var result = {
          relevance: 0,
          value: escape(code)
        };
        var second_best = result;
        languageSubset.filter(getLanguage).filter(autoDetection).forEach(function (name) {
          var current = highlight(name, code, false);
          current.language = name;

          if (current.relevance > second_best.relevance) {
            second_best = current;
          }

          if (current.relevance > result.relevance) {
            second_best = result;
            result = current;
          }
        });

        if (second_best.language) {
          result.second_best = second_best;
        }

        return result;
      }

      function fixMarkup(value) {
        if (!(options.tabReplace || options.useBR)) {
          return value;
        }

        return value.replace(fixMarkupRe, function (match, p1) {
          if (options.useBR && match === '\n') {
            return '<br>';
          } else if (options.tabReplace) {
            return p1.replace(/\t/g, options.tabReplace);
          }

          return '';
        });
      }

      function buildClassName(prevClassName, currentLang, resultLang) {
        var language = currentLang ? aliases[currentLang] : resultLang,
            result = [prevClassName.trim()];

        if (!prevClassName.match(/\bhljs\b/)) {
          result.push('hljs');
        }

        if (prevClassName.indexOf(language) === -1) {
          result.push(language);
        }

        return result.join(' ').trim();
      }

      function highlightBlock(block) {
        var node, originalStream, result, resultNode, text;
        var language = blockLanguage(block);
        if (isNotHighlighted(language)) return;

        if (options.useBR) {
          node = document.createElement('div');
          node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
        } else {
          node = block;
        }

        text = node.textContent;
        result = language ? highlight(language, text, true) : highlightAuto(text);
        originalStream = nodeStream(node);

        if (originalStream.length) {
          resultNode = document.createElement('div');
          resultNode.innerHTML = result.value;
          result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
        }

        result.value = fixMarkup(result.value);
        block.innerHTML = result.value;
        block.className = buildClassName(block.className, language, result.language);
        block.result = {
          language: result.language,
          re: result.relevance
        };

        if (result.second_best) {
          block.second_best = {
            language: result.second_best.language,
            re: result.second_best.relevance
          };
        }
      }

      function configure(user_options) {
        options = inherit(options, user_options);
      }

      function initHighlighting() {
        if (initHighlighting.called) return;
        initHighlighting.called = true;
        var blocks = document.querySelectorAll('pre code');
        ArrayProto.forEach.call(blocks, highlightBlock);
      }

      function initHighlightingOnLoad() {
        window.addEventListener('DOMContentLoaded', initHighlighting, false);
        window.addEventListener('load', initHighlighting, false);
      }

      var PLAINTEXT_LANGUAGE = {
        disableAutodetect: true
      };

      function registerLanguage(name, language) {
        var lang;

        try {
          lang = language(hljs);
        } catch (error) {
          console.error("Language definition for '{}' could not be registered.".replace("{}", name));

          if (!SAFE_MODE) {
            throw error;
          } else {
            console.error(error);
          }

          lang = PLAINTEXT_LANGUAGE;
        }

        languages[name] = lang;
        lang.rawDefinition = language.bind(null, hljs);

        if (lang.aliases) {
          lang.aliases.forEach(function (alias) {
            aliases[alias] = name;
          });
        }
      }

      function listLanguages() {
        return objectKeys(languages);
      }

      function requireLanguage(name) {
        var lang = getLanguage(name);

        if (lang) {
          return lang;
        }

        var err = new Error('The \'{}\' language is required, but not loaded.'.replace('{}', name));
        throw err;
      }

      function getLanguage(name) {
        name = (name || '').toLowerCase();
        return languages[name] || languages[aliases[name]];
      }

      function autoDetection(name) {
        var lang = getLanguage(name);
        return lang && !lang.disableAutodetect;
      }

      hljs.highlight = highlight;
      hljs.highlightAuto = highlightAuto;
      hljs.fixMarkup = fixMarkup;
      hljs.highlightBlock = highlightBlock;
      hljs.configure = configure;
      hljs.initHighlighting = initHighlighting;
      hljs.initHighlightingOnLoad = initHighlightingOnLoad;
      hljs.registerLanguage = registerLanguage;
      hljs.listLanguages = listLanguages;
      hljs.getLanguage = getLanguage;
      hljs.requireLanguage = requireLanguage;
      hljs.autoDetection = autoDetection;
      hljs.inherit = inherit;

      hljs.debugMode = function () {
        SAFE_MODE = false;
      };

      hljs.IDENT_RE = '[a-zA-Z]\\w*';
      hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
      hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
      hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)';
      hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)';
      hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';
      hljs.BACKSLASH_ESCAPE = {
        begin: '\\\\[\\s\\S]',
        relevance: 0
      };
      hljs.APOS_STRING_MODE = {
        className: 'string',
        begin: '\'',
        end: '\'',
        illegal: '\\n',
        contains: [hljs.BACKSLASH_ESCAPE]
      };
      hljs.QUOTE_STRING_MODE = {
        className: 'string',
        begin: '"',
        end: '"',
        illegal: '\\n',
        contains: [hljs.BACKSLASH_ESCAPE]
      };
      hljs.PHRASAL_WORDS_MODE = {
        begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      };

      hljs.COMMENT = function (begin, end, inherits) {
        var mode = hljs.inherit({
          className: 'comment',
          begin: begin,
          end: end,
          contains: []
        }, inherits || {});
        mode.contains.push(hljs.PHRASAL_WORDS_MODE);
        mode.contains.push({
          className: 'doctag',
          begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
          relevance: 0
        });
        return mode;
      };

      hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
      hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
      hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
      hljs.NUMBER_MODE = {
        className: 'number',
        begin: hljs.NUMBER_RE,
        relevance: 0
      };
      hljs.C_NUMBER_MODE = {
        className: 'number',
        begin: hljs.C_NUMBER_RE,
        relevance: 0
      };
      hljs.BINARY_NUMBER_MODE = {
        className: 'number',
        begin: hljs.BINARY_NUMBER_RE,
        relevance: 0
      };
      hljs.CSS_NUMBER_MODE = {
        className: 'number',
        begin: hljs.NUMBER_RE + '(' + '%|em|ex|ch|rem' + '|vw|vh|vmin|vmax' + '|cm|mm|in|pt|pc|px' + '|deg|grad|rad|turn' + '|s|ms' + '|Hz|kHz' + '|dpi|dpcm|dppx' + ')?',
        relevance: 0
      };
      hljs.REGEXP_MODE = {
        className: 'regexp',
        begin: /\//,
        end: /\/[gimuy]*/,
        illegal: /\n/,
        contains: [hljs.BACKSLASH_ESCAPE, {
          begin: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [hljs.BACKSLASH_ESCAPE]
        }]
      };
      hljs.TITLE_MODE = {
        className: 'title',
        begin: hljs.IDENT_RE,
        relevance: 0
      };
      hljs.UNDERSCORE_TITLE_MODE = {
        className: 'title',
        begin: hljs.UNDERSCORE_IDENT_RE,
        relevance: 0
      };
      hljs.METHOD_GUARD = {
        begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
        relevance: 0
      };
      var constants = [hljs.BACKSLASH_ESCAPE, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.PHRASAL_WORDS_MODE, hljs.COMMENT, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.HASH_COMMENT_MODE, hljs.NUMBER_MODE, hljs.C_NUMBER_MODE, hljs.BINARY_NUMBER_MODE, hljs.CSS_NUMBER_MODE, hljs.REGEXP_MODE, hljs.TITLE_MODE, hljs.UNDERSCORE_TITLE_MODE, hljs.METHOD_GUARD];
      constants.forEach(function (obj) {
        deepFreeze(obj);
      });

      function deepFreeze(o) {
        Object.freeze(o);
        var objIsFunction = typeof o === 'function';
        Object.getOwnPropertyNames(o).forEach(function (prop) {
          if (o.hasOwnProperty(prop) && o[prop] !== null && (_typeof(o[prop]) === "object" || typeof o[prop] === "function") && (objIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true) && !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
          }
        });
        return o;
      }
      return hljs;
    });
  });

  var cpp = function cpp(hljs) {
    function optional(s) {
      return '(?:' + s + ')?';
    }

    var DECLTYPE_AUTO_RE = 'decltype\\(auto\\)';
    var NAMESPACE_RE = '[a-zA-Z_]\\w*::';
    var TEMPLATE_ARGUMENT_RE = '<.*?>';
    var FUNCTION_TYPE_RE = '(' + DECLTYPE_AUTO_RE + '|' + optional(NAMESPACE_RE) + '[a-zA-Z_]\\w*' + optional(TEMPLATE_ARGUMENT_RE) + ')';
    var CPP_PRIMITIVE_TYPES = {
      className: 'keyword',
      begin: '\\b[a-z\\d_]*_t\\b'
    };
    var CHARACTER_ESCAPES = '\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)';
    var STRINGS = {
      className: 'string',
      variants: [{
        begin: '(u8?|U|L)?"',
        end: '"',
        illegal: '\\n',
        contains: [hljs.BACKSLASH_ESCAPE]
      }, {
        begin: '(u8?|U|L)?\'(' + CHARACTER_ESCAPES + "|.)",
        end: '\'',
        illegal: '.'
      }, {
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\((?:.|\n)*?\)\1"/
      }]
    };
    var NUMBERS = {
      className: 'number',
      variants: [{
        begin: '\\b(0b[01\']+)'
      }, {
        begin: '(-?)\\b([\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)(u|U|l|L|ul|UL|f|F|b|B)'
      }, {
        begin: '(-?)(\\b0[xX][a-fA-F0-9\']+|(\\b[\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)([eE][-+]?[\\d\']+)?)'
      }],
      relevance: 0
    };
    var PREPROCESSOR = {
      className: 'meta',
      begin: /#\s*[a-z]+\b/,
      end: /$/,
      keywords: {
        'meta-keyword': 'if else elif endif define undef warning error line ' + 'pragma _Pragma ifdef ifndef include'
      },
      contains: [{
        begin: /\\\n/,
        relevance: 0
      }, hljs.inherit(STRINGS, {
        className: 'meta-string'
      }), {
        className: 'meta-string',
        begin: /<.*?>/,
        end: /$/,
        illegal: '\\n'
      }, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
    };
    var TITLE_MODE = {
      className: 'title',
      begin: optional(NAMESPACE_RE) + hljs.IDENT_RE,
      relevance: 0
    };
    var FUNCTION_TITLE = optional(NAMESPACE_RE) + hljs.IDENT_RE + '\\s*\\(';
    var CPP_KEYWORDS = {
      keyword: 'int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof ' + 'dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace ' + 'unsigned long volatile static protected bool template mutable if public friend ' + 'do goto auto void enum else break extern using asm case typeid wchar_t' + 'short reinterpret_cast|10 default double register explicit signed typename try this ' + 'switch continue inline delete alignas alignof constexpr consteval constinit decltype ' + 'concept co_await co_return co_yield requires ' + 'noexcept static_assert thread_local restrict final override ' + 'atomic_bool atomic_char atomic_schar ' + 'atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong ' + 'atomic_ullong new throw return ' + 'and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq',
      built_in: 'std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream ' + 'auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set ' + 'unordered_map unordered_multiset unordered_multimap array shared_ptr abort terminate abs acos ' + 'asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp ' + 'fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper ' + 'isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow ' + 'printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp ' + 'strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan ' + 'vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary',
      literal: 'true false nullptr NULL'
    };
    var EXPRESSION_CONTAINS = [CPP_PRIMITIVE_TYPES, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, NUMBERS, STRINGS];
    var EXPRESSION_CONTEXT = {
      variants: [{
        begin: /=/,
        end: /;/
      }, {
        begin: /\(/,
        end: /\)/
      }, {
        beginKeywords: 'new throw return else',
        end: /;/
      }],
      keywords: CPP_KEYWORDS,
      contains: EXPRESSION_CONTAINS.concat([{
        begin: /\(/,
        end: /\)/,
        keywords: CPP_KEYWORDS,
        contains: EXPRESSION_CONTAINS.concat(['self']),
        relevance: 0
      }]),
      relevance: 0
    };
    var FUNCTION_DECLARATION = {
      className: 'function',
      begin: '(' + FUNCTION_TYPE_RE + '[\\*&\\s]+)+' + FUNCTION_TITLE,
      returnBegin: true,
      end: /[{;=]/,
      excludeEnd: true,
      keywords: CPP_KEYWORDS,
      illegal: /[^\w\s\*&:<>]/,
      contains: [{
        begin: DECLTYPE_AUTO_RE,
        keywords: CPP_KEYWORDS,
        relevance: 0
      }, {
        begin: FUNCTION_TITLE,
        returnBegin: true,
        contains: [TITLE_MODE],
        relevance: 0
      }, {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        keywords: CPP_KEYWORDS,
        relevance: 0,
        contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, STRINGS, NUMBERS, CPP_PRIMITIVE_TYPES, {
          begin: /\(/,
          end: /\)/,
          keywords: CPP_KEYWORDS,
          relevance: 0,
          contains: ['self', hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, STRINGS, NUMBERS, CPP_PRIMITIVE_TYPES]
        }]
      }, CPP_PRIMITIVE_TYPES, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, PREPROCESSOR]
    };
    return {
      aliases: ['c', 'cc', 'h', 'c++', 'h++', 'hpp', 'hh', 'hxx', 'cxx'],
      keywords: CPP_KEYWORDS,
      illegal: '</',
      contains: [].concat(EXPRESSION_CONTEXT, FUNCTION_DECLARATION, EXPRESSION_CONTAINS, [PREPROCESSOR, {
        begin: '\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<',
        end: '>',
        keywords: CPP_KEYWORDS,
        contains: ['self', CPP_PRIMITIVE_TYPES]
      }, {
        begin: hljs.IDENT_RE + '::',
        keywords: CPP_KEYWORDS
      }, {
        className: 'class',
        beginKeywords: 'class struct',
        end: /[{;:]/,
        contains: [{
          begin: /</,
          end: />/,
          contains: ['self']
        }, hljs.TITLE_MODE]
      }]),
      exports: {
        preprocessor: PREPROCESSOR,
        strings: STRINGS,
        keywords: CPP_KEYWORDS
      }
    };
  };

  var xml = function xml(hljs) {
    var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
    var XML_ENTITIES = {
      className: 'symbol',
      begin: '&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;'
    };
    var XML_META_KEYWORDS = {
      begin: '\\s',
      contains: [{
        className: 'meta-keyword',
        begin: '#?[a-z_][a-z1-9_-]+',
        illegal: '\\n'
      }]
    };
    var XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
      begin: '\\(',
      end: '\\)'
    });
    var APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, {
      className: 'meta-string'
    });
    var QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {
      className: 'meta-string'
    });
    var TAG_INTERNALS = {
      endsWithParent: true,
      illegal: /</,
      relevance: 0,
      contains: [{
        className: 'attr',
        begin: XML_IDENT_RE,
        relevance: 0
      }, {
        begin: /=\s*/,
        relevance: 0,
        contains: [{
          className: 'string',
          endsParent: true,
          variants: [{
            begin: /"/,
            end: /"/,
            contains: [XML_ENTITIES]
          }, {
            begin: /'/,
            end: /'/,
            contains: [XML_ENTITIES]
          }, {
            begin: /[^\s"'=<>`]+/
          }]
        }]
      }]
    };
    return {
      aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'wsf', 'svg'],
      case_insensitive: true,
      contains: [{
        className: 'meta',
        begin: '<![a-z]',
        end: '>',
        relevance: 10,
        contains: [XML_META_KEYWORDS, QUOTE_META_STRING_MODE, APOS_META_STRING_MODE, XML_META_PAR_KEYWORDS, {
          begin: '\\[',
          end: '\\]',
          contains: [{
            className: 'meta',
            begin: '<![a-z]',
            end: '>',
            contains: [XML_META_KEYWORDS, XML_META_PAR_KEYWORDS, QUOTE_META_STRING_MODE, APOS_META_STRING_MODE]
          }]
        }]
      }, hljs.COMMENT('<!--', '-->', {
        relevance: 10
      }), {
        begin: '<\\!\\[CDATA\\[',
        end: '\\]\\]>',
        relevance: 10
      }, XML_ENTITIES, {
        className: 'meta',
        begin: /<\?xml/,
        end: /\?>/,
        relevance: 10
      }, {
        begin: /<\?(php)?/,
        end: /\?>/,
        subLanguage: 'php',
        contains: [{
          begin: '/\\*',
          end: '\\*/',
          skip: true
        }, {
          begin: 'b"',
          end: '"',
          skip: true
        }, {
          begin: 'b\'',
          end: '\'',
          skip: true
        }, hljs.inherit(hljs.APOS_STRING_MODE, {
          illegal: null,
          className: null,
          contains: null,
          skip: true
        }), hljs.inherit(hljs.QUOTE_STRING_MODE, {
          illegal: null,
          className: null,
          contains: null,
          skip: true
        })]
      }, {
        className: 'tag',
        begin: '<style(?=\\s|>)',
        end: '>',
        keywords: {
          name: 'style'
        },
        contains: [TAG_INTERNALS],
        starts: {
          end: '</style>',
          returnEnd: true,
          subLanguage: ['css', 'xml']
        }
      }, {
        className: 'tag',
        begin: '<script(?=\\s|>)',
        end: '>',
        keywords: {
          name: 'script'
        },
        contains: [TAG_INTERNALS],
        starts: {
          end: '\<\/script\>',
          returnEnd: true,
          subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml']
        }
      }, {
        className: 'tag',
        begin: '</?',
        end: '/?>',
        contains: [{
          className: 'name',
          begin: /[^\/><\s]+/,
          relevance: 0
        }, TAG_INTERNALS]
      }]
    };
  };

  var bash = function bash(hljs) {
    var VAR = {
      className: 'variable',
      variants: [{
        begin: /\$[\w\d#@][\w\d_]*/
      }, {
        begin: /\$\{(.*?)}/
      }]
    };
    var QUOTE_STRING = {
      className: 'string',
      begin: /"/,
      end: /"/,
      contains: [hljs.BACKSLASH_ESCAPE, VAR, {
        className: 'variable',
        begin: /\$\(/,
        end: /\)/,
        contains: [hljs.BACKSLASH_ESCAPE]
      }]
    };
    var ESCAPED_QUOTE = {
      className: '',
      begin: /\\"/
    };
    var APOS_STRING = {
      className: 'string',
      begin: /'/,
      end: /'/
    };
    return {
      aliases: ['sh', 'zsh'],
      lexemes: /\b-?[a-z\._]+\b/,
      keywords: {
        keyword: 'if then else elif fi for while in do done case esac function',
        literal: 'true false',
        built_in: 'break cd continue eval exec exit export getopts hash pwd readonly return shift test times ' + 'trap umask unset ' + 'alias bind builtin caller command declare echo enable help let local logout mapfile printf ' + 'read readarray source type typeset ulimit unalias ' + 'set shopt ' + 'autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles ' + 'compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate ' + 'fc fg float functions getcap getln history integer jobs kill limit log noglob popd print ' + 'pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit ' + 'unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof ' + 'zpty zregexparse zsocket zstyle ztcp',
        _: '-ne -eq -lt -gt -f -d -e -s -l -a'
      },
      contains: [{
        className: 'meta',
        begin: /^#![^\n]+sh\s*$/,
        relevance: 10
      }, {
        className: 'function',
        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        returnBegin: true,
        contains: [hljs.inherit(hljs.TITLE_MODE, {
          begin: /\w[\w\d_]*/
        })],
        relevance: 0
      }, hljs.HASH_COMMENT_MODE, QUOTE_STRING, ESCAPED_QUOTE, APOS_STRING, VAR]
    };
  };

  var coffeescript = function coffeescript(hljs) {
    var KEYWORDS = {
      keyword: 'in if for while finally new do return else break catch instanceof throw try this ' + 'switch continue typeof delete debugger super yield import export from as default await ' + 'then unless until loop of by when and or is isnt not',
      literal: 'true false null undefined ' + 'yes no on off',
      built_in: 'npm require console print module global window document'
    };
    var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
    var SUBST = {
      className: 'subst',
      begin: /#\{/,
      end: /}/,
      keywords: KEYWORDS
    };
    var EXPRESSIONS = [hljs.BINARY_NUMBER_MODE, hljs.inherit(hljs.C_NUMBER_MODE, {
      starts: {
        end: '(\\s*/)?',
        relevance: 0
      }
    }), {
      className: 'string',
      variants: [{
        begin: /'''/,
        end: /'''/,
        contains: [hljs.BACKSLASH_ESCAPE]
      }, {
        begin: /'/,
        end: /'/,
        contains: [hljs.BACKSLASH_ESCAPE]
      }, {
        begin: /"""/,
        end: /"""/,
        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
      }, {
        begin: /"/,
        end: /"/,
        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
      }]
    }, {
      className: 'regexp',
      variants: [{
        begin: '///',
        end: '///',
        contains: [SUBST, hljs.HASH_COMMENT_MODE]
      }, {
        begin: '//[gim]{0,3}(?=\\W)',
        relevance: 0
      }, {
        begin: /\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/
      }]
    }, {
      begin: '@' + JS_IDENT_RE
    }, {
      subLanguage: 'javascript',
      excludeBegin: true,
      excludeEnd: true,
      variants: [{
        begin: '```',
        end: '```'
      }, {
        begin: '`',
        end: '`'
      }]
    }];
    SUBST.contains = EXPRESSIONS;
    var TITLE = hljs.inherit(hljs.TITLE_MODE, {
      begin: JS_IDENT_RE
    });
    var PARAMS_RE = '(\\(.*\\))?\\s*\\B[-=]>';
    var PARAMS = {
      className: 'params',
      begin: '\\([^\\(]',
      returnBegin: true,
      contains: [{
        begin: /\(/,
        end: /\)/,
        keywords: KEYWORDS,
        contains: ['self'].concat(EXPRESSIONS)
      }]
    };
    return {
      aliases: ['coffee', 'cson', 'iced'],
      keywords: KEYWORDS,
      illegal: /\/\*/,
      contains: EXPRESSIONS.concat([hljs.COMMENT('###', '###'), hljs.HASH_COMMENT_MODE, {
        className: 'function',
        begin: '^\\s*' + JS_IDENT_RE + '\\s*=\\s*' + PARAMS_RE,
        end: '[-=]>',
        returnBegin: true,
        contains: [TITLE, PARAMS]
      }, {
        begin: /[:\(,=]\s*/,
        relevance: 0,
        contains: [{
          className: 'function',
          begin: PARAMS_RE,
          end: '[-=]>',
          returnBegin: true,
          contains: [PARAMS]
        }]
      }, {
        className: 'class',
        beginKeywords: 'class',
        end: '$',
        illegal: /[:="\[\]]/,
        contains: [{
          beginKeywords: 'extends',
          endsWithParent: true,
          illegal: /[:="\[\]]/,
          contains: [TITLE]
        }, TITLE]
      }, {
        begin: JS_IDENT_RE + ':',
        end: ':',
        returnBegin: true,
        returnEnd: true,
        relevance: 0
      }])
    };
  };

  var css$1 = function css(hljs) {
    var FUNCTION_LIKE = {
      begin: /[\w-]+\(/,
      returnBegin: true,
      contains: [{
        className: 'built_in',
        begin: /[\w-]+/
      }, {
        begin: /\(/,
        end: /\)/,
        contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.CSS_NUMBER_MODE]
      }]
    };
    var ATTRIBUTE = {
      className: 'attribute',
      begin: /\S/,
      end: ':',
      excludeEnd: true,
      starts: {
        endsWithParent: true,
        excludeEnd: true,
        contains: [FUNCTION_LIKE, hljs.CSS_NUMBER_MODE, hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, hljs.C_BLOCK_COMMENT_MODE, {
          className: 'number',
          begin: '#[0-9A-Fa-f]+'
        }, {
          className: 'meta',
          begin: '!important'
        }]
      }
    };
    var AT_IDENTIFIER = '@[a-z-]+';
    var AT_MODIFIERS = "and or not only";
    var AT_PROPERTY_RE = /@\-?\w[\w]*(\-\w+)*/;
    var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
    var RULE = {
      begin: /(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,
      returnBegin: true,
      end: ';',
      endsWithParent: true,
      contains: [ATTRIBUTE]
    };
    return {
      case_insensitive: true,
      illegal: /[=\/|'\$]/,
      contains: [hljs.C_BLOCK_COMMENT_MODE, {
        className: 'selector-id',
        begin: /#[A-Za-z0-9_-]+/
      }, {
        className: 'selector-class',
        begin: /\.[A-Za-z0-9_-]+/
      }, {
        className: 'selector-attr',
        begin: /\[/,
        end: /\]/,
        illegal: '$',
        contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]
      }, {
        className: 'selector-pseudo',
        begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
      }, {
        begin: '@(page|font-face)',
        lexemes: AT_IDENTIFIER,
        keywords: '@page @font-face'
      }, {
        begin: '@',
        end: '[{;]',
        illegal: /:/,
        returnBegin: true,
        contains: [{
          className: 'keyword',
          begin: AT_PROPERTY_RE
        }, {
          begin: /\s/,
          endsWithParent: true,
          excludeEnd: true,
          relevance: 0,
          keywords: AT_MODIFIERS,
          contains: [{
            begin: /[a-z-]+:/,
            className: "attribute"
          }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.CSS_NUMBER_MODE]
        }]
      }, {
        className: 'selector-tag',
        begin: IDENT_RE,
        relevance: 0
      }, {
        begin: '{',
        end: '}',
        illegal: /\S/,
        contains: [hljs.C_BLOCK_COMMENT_MODE, RULE]
      }]
    };
  };

  var markdown = function markdown(hljs) {
    return {
      aliases: ['md', 'mkdown', 'mkd'],
      contains: [{
        className: 'section',
        variants: [{
          begin: '^#{1,6}',
          end: '$'
        }, {
          begin: '^.+?\\n[=-]{2,}$'
        }]
      }, {
        begin: '<',
        end: '>',
        subLanguage: 'xml',
        relevance: 0
      }, {
        className: 'bullet',
        begin: '^\\s*([*+-]|(\\d+\\.))\\s+'
      }, {
        className: 'strong',
        begin: '[*_]{2}.+?[*_]{2}'
      }, {
        className: 'emphasis',
        variants: [{
          begin: '\\*.+?\\*'
        }, {
          begin: '_.+?_',
          relevance: 0
        }]
      }, {
        className: 'quote',
        begin: '^>\\s+',
        end: '$'
      }, {
        className: 'code',
        variants: [{
          begin: '^```\\w*\\s*$',
          end: '^```[ ]*$'
        }, {
          begin: '`.+?`'
        }, {
          begin: '^( {4}|\\t)',
          end: '$',
          relevance: 0
        }]
      }, {
        begin: '^[-\\*]{3,}',
        end: '$'
      }, {
        begin: '\\[.+?\\][\\(\\[].*?[\\)\\]]',
        returnBegin: true,
        contains: [{
          className: 'string',
          begin: '\\[',
          end: '\\]',
          excludeBegin: true,
          returnEnd: true,
          relevance: 0
        }, {
          className: 'link',
          begin: '\\]\\(',
          end: '\\)',
          excludeBegin: true,
          excludeEnd: true
        }, {
          className: 'symbol',
          begin: '\\]\\[',
          end: '\\]',
          excludeBegin: true,
          excludeEnd: true
        }],
        relevance: 10
      }, {
        begin: /^\[[^\n]+\]:/,
        returnBegin: true,
        contains: [{
          className: 'symbol',
          begin: /\[/,
          end: /\]/,
          excludeBegin: true,
          excludeEnd: true
        }, {
          className: 'link',
          begin: /:\s*/,
          end: /$/,
          excludeBegin: true
        }]
      }]
    };
  };

  var http = function http(hljs) {
    var VERSION = 'HTTP/[0-9\\.]+';
    return {
      aliases: ['https'],
      illegal: '\\S',
      contains: [{
        begin: '^' + VERSION,
        end: '$',
        contains: [{
          className: 'number',
          begin: '\\b\\d{3}\\b'
        }]
      }, {
        begin: '^[A-Z]+ (.*?) ' + VERSION + '$',
        returnBegin: true,
        end: '$',
        contains: [{
          className: 'string',
          begin: ' ',
          end: ' ',
          excludeBegin: true,
          excludeEnd: true
        }, {
          begin: VERSION
        }, {
          className: 'keyword',
          begin: '[A-Z]+'
        }]
      }, {
        className: 'attribute',
        begin: '^\\w',
        end: ': ',
        excludeEnd: true,
        illegal: '\\n|\\s|=',
        starts: {
          end: '$',
          relevance: 0
        }
      }, {
        begin: '\\n\\n',
        starts: {
          subLanguage: [],
          endsWithParent: true
        }
      }]
    };
  };

  var java = function java(hljs) {
    var JAVA_IDENT_RE = "[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*";
    var GENERIC_IDENT_RE = JAVA_IDENT_RE + '(<' + JAVA_IDENT_RE + '(\\s*,\\s*' + JAVA_IDENT_RE + ')*>)?';
    var KEYWORDS = 'false synchronized int abstract float private char boolean var static null if const ' + 'for true while long strictfp finally protected import native final void ' + 'enum else break transient catch instanceof byte super volatile case assert short ' + 'package default double public try this switch continue throws protected public private ' + 'module requires exports do';
    var JAVA_NUMBER_RE = '\\b' + '(' + '0[bB]([01]+[01_]+[01]+|[01]+)' + '|' + '0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)' + '|' + '(' + '([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?' + '|' + '\\.([\\d]+[\\d_]+[\\d]+|[\\d]+)' + ')' + '([eE][-+]?\\d+)?' + ')' + '[lLfF]?';
    var JAVA_NUMBER_MODE = {
      className: 'number',
      begin: JAVA_NUMBER_RE,
      relevance: 0
    };
    return {
      aliases: ['jsp'],
      keywords: KEYWORDS,
      illegal: /<\/|#/,
      contains: [hljs.COMMENT('/\\*\\*', '\\*/', {
        relevance: 0,
        contains: [{
          begin: /\w+@/,
          relevance: 0
        }, {
          className: 'doctag',
          begin: '@[A-Za-z]+'
        }]
      }), hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, {
        className: 'class',
        beginKeywords: 'class interface',
        end: /[{;=]/,
        excludeEnd: true,
        keywords: 'class interface',
        illegal: /[:"\[\]]/,
        contains: [{
          beginKeywords: 'extends implements'
        }, hljs.UNDERSCORE_TITLE_MODE]
      }, {
        beginKeywords: 'new throw return else',
        relevance: 0
      }, {
        className: 'function',
        begin: '(' + GENERIC_IDENT_RE + '\\s+)+' + hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
        returnBegin: true,
        end: /[{;=]/,
        excludeEnd: true,
        keywords: KEYWORDS,
        contains: [{
          begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
          returnBegin: true,
          relevance: 0,
          contains: [hljs.UNDERSCORE_TITLE_MODE]
        }, {
          className: 'params',
          begin: /\(/,
          end: /\)/,
          keywords: KEYWORDS,
          relevance: 0,
          contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE, hljs.C_BLOCK_COMMENT_MODE]
        }, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
      }, JAVA_NUMBER_MODE, {
        className: 'meta',
        begin: '@[A-Za-z]+'
      }]
    };
  };

  var javascript = function javascript(hljs) {
    var FRAGMENT = {
      begin: '<>',
      end: '</>'
    };
    var XML_TAG = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/
    };
    var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
    var KEYWORDS = {
      keyword: 'in of if for while finally var new function do return void else break catch ' + 'instanceof with throw case default try this switch continue typeof delete ' + 'let yield const export super debugger as async await static ' + 'import from as',
      literal: 'true false null undefined NaN Infinity',
      built_in: 'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' + 'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' + 'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' + 'TypeError URIError Number Math Date String RegExp Array Float32Array ' + 'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' + 'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' + 'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' + 'Promise'
    };
    var NUMBER = {
      className: 'number',
      variants: [{
        begin: '\\b(0[bB][01]+)n?'
      }, {
        begin: '\\b(0[oO][0-7]+)n?'
      }, {
        begin: hljs.C_NUMBER_RE + 'n?'
      }],
      relevance: 0
    };
    var SUBST = {
      className: 'subst',
      begin: '\\$\\{',
      end: '\\}',
      keywords: KEYWORDS,
      contains: []
    };
    var HTML_TEMPLATE = {
      begin: 'html`',
      end: '',
      starts: {
        end: '`',
        returnEnd: false,
        contains: [hljs.BACKSLASH_ESCAPE, SUBST],
        subLanguage: 'xml'
      }
    };
    var CSS_TEMPLATE = {
      begin: 'css`',
      end: '',
      starts: {
        end: '`',
        returnEnd: false,
        contains: [hljs.BACKSLASH_ESCAPE, SUBST],
        subLanguage: 'css'
      }
    };
    var TEMPLATE_STRING = {
      className: 'string',
      begin: '`',
      end: '`',
      contains: [hljs.BACKSLASH_ESCAPE, SUBST]
    };
    SUBST.contains = [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, HTML_TEMPLATE, CSS_TEMPLATE, TEMPLATE_STRING, NUMBER, hljs.REGEXP_MODE];
    var PARAMS_CONTAINS = SUBST.contains.concat([hljs.C_BLOCK_COMMENT_MODE, hljs.C_LINE_COMMENT_MODE]);
    return {
      aliases: ['js', 'jsx', 'mjs', 'cjs'],
      keywords: KEYWORDS,
      contains: [{
        className: 'meta',
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      }, {
        className: 'meta',
        begin: /^#!/,
        end: /$/
      }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, HTML_TEMPLATE, CSS_TEMPLATE, TEMPLATE_STRING, hljs.C_LINE_COMMENT_MODE, hljs.COMMENT('/\\*\\*', '\\*/', {
        relevance: 0,
        contains: [{
          className: 'doctag',
          begin: '@[A-Za-z]+',
          contains: [{
            className: 'type',
            begin: '\\{',
            end: '\\}',
            relevance: 0
          }, {
            className: 'variable',
            begin: IDENT_RE + '(?=\\s*(-)|$)',
            endsParent: true,
            relevance: 0
          }, {
            begin: /(?=[^\n])\s/,
            relevance: 0
          }]
        }]
      }), hljs.C_BLOCK_COMMENT_MODE, NUMBER, {
        begin: /[{,\n]\s*/,
        relevance: 0,
        contains: [{
          begin: IDENT_RE + '\\s*:',
          returnBegin: true,
          relevance: 0,
          contains: [{
            className: 'attr',
            begin: IDENT_RE,
            relevance: 0
          }]
        }]
      }, {
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.REGEXP_MODE, {
          className: 'function',
          begin: '(\\(.*?\\)|' + IDENT_RE + ')\\s*=>',
          returnBegin: true,
          end: '\\s*=>',
          contains: [{
            className: 'params',
            variants: [{
              begin: IDENT_RE
            }, {
              begin: /\(\s*\)/
            }, {
              begin: /\(/,
              end: /\)/,
              excludeBegin: true,
              excludeEnd: true,
              keywords: KEYWORDS,
              contains: PARAMS_CONTAINS
            }]
          }]
        }, {
          className: '',
          begin: /\s/,
          end: /\s*/,
          skip: true
        }, {
          variants: [{
            begin: FRAGMENT.begin,
            end: FRAGMENT.end
          }, {
            begin: XML_TAG.begin,
            end: XML_TAG.end
          }],
          subLanguage: 'xml',
          contains: [{
            begin: XML_TAG.begin,
            end: XML_TAG.end,
            skip: true,
            contains: ['self']
          }]
        }],
        relevance: 0
      }, {
        className: 'function',
        beginKeywords: 'function',
        end: /\{/,
        excludeEnd: true,
        contains: [hljs.inherit(hljs.TITLE_MODE, {
          begin: IDENT_RE
        }), {
          className: 'params',
          begin: /\(/,
          end: /\)/,
          excludeBegin: true,
          excludeEnd: true,
          contains: PARAMS_CONTAINS
        }],
        illegal: /\[|%/
      }, {
        begin: /\$[(.]/
      }, hljs.METHOD_GUARD, {
        className: 'class',
        beginKeywords: 'class',
        end: /[{;=]/,
        excludeEnd: true,
        illegal: /[:"\[\]]/,
        contains: [{
          beginKeywords: 'extends'
        }, hljs.UNDERSCORE_TITLE_MODE]
      }, {
        beginKeywords: 'constructor get set',
        end: /\{/,
        excludeEnd: true
      }],
      illegal: /#(?!!)/
    };
  };

  var json = function json(hljs) {
    var LITERALS = {
      literal: 'true false null'
    };
    var ALLOWED_COMMENTS = [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE];
    var TYPES = [hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE];
    var VALUE_CONTAINER = {
      end: ',',
      endsWithParent: true,
      excludeEnd: true,
      contains: TYPES,
      keywords: LITERALS
    };
    var OBJECT = {
      begin: '{',
      end: '}',
      contains: [{
        className: 'attr',
        begin: /"/,
        end: /"/,
        contains: [hljs.BACKSLASH_ESCAPE],
        illegal: '\\n'
      }, hljs.inherit(VALUE_CONTAINER, {
        begin: /:/
      })].concat(ALLOWED_COMMENTS),
      illegal: '\\S'
    };
    var ARRAY = {
      begin: '\\[',
      end: '\\]',
      contains: [hljs.inherit(VALUE_CONTAINER)],
      illegal: '\\S'
    };
    TYPES.push(OBJECT, ARRAY);
    ALLOWED_COMMENTS.forEach(function (rule) {
      TYPES.push(rule);
    });
    return {
      contains: TYPES,
      keywords: LITERALS,
      illegal: '\\S'
    };
  };

  var less = function less(hljs) {
    var IDENT_RE = '[\\w-]+';
    var INTERP_IDENT_RE = '(' + IDENT_RE + '|@{' + IDENT_RE + '})';
    var RULES = [],
        VALUE = [];

    var STRING_MODE = function STRING_MODE(c) {
      return {
        className: 'string',
        begin: '~?' + c + '.*?' + c
      };
    };

    var IDENT_MODE = function IDENT_MODE(name, begin, relevance) {
      return {
        className: name,
        begin: begin,
        relevance: relevance
      };
    };

    var PARENS_MODE = {
      begin: '\\(',
      end: '\\)',
      contains: VALUE,
      relevance: 0
    };
    VALUE.push(hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, STRING_MODE("'"), STRING_MODE('"'), hljs.CSS_NUMBER_MODE, {
      begin: '(url|data-uri)\\(',
      starts: {
        className: 'string',
        end: '[\\)\\n]',
        excludeEnd: true
      }
    }, IDENT_MODE('number', '#[0-9A-Fa-f]+\\b'), PARENS_MODE, IDENT_MODE('variable', '@@?' + IDENT_RE, 10), IDENT_MODE('variable', '@{' + IDENT_RE + '}'), IDENT_MODE('built_in', '~?`[^`]*?`'), {
      className: 'attribute',
      begin: IDENT_RE + '\\s*:',
      end: ':',
      returnBegin: true,
      excludeEnd: true
    }, {
      className: 'meta',
      begin: '!important'
    });
    var VALUE_WITH_RULESETS = VALUE.concat({
      begin: '{',
      end: '}',
      contains: RULES
    });
    var MIXIN_GUARD_MODE = {
      beginKeywords: 'when',
      endsWithParent: true,
      contains: [{
        beginKeywords: 'and not'
      }].concat(VALUE)
    };
    var RULE_MODE = {
      begin: INTERP_IDENT_RE + '\\s*:',
      returnBegin: true,
      end: '[;}]',
      relevance: 0,
      contains: [{
        className: 'attribute',
        begin: INTERP_IDENT_RE,
        end: ':',
        excludeEnd: true,
        starts: {
          endsWithParent: true,
          illegal: '[<=$]',
          relevance: 0,
          contains: VALUE
        }
      }]
    };
    var AT_RULE_MODE = {
      className: 'keyword',
      begin: '@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b',
      starts: {
        end: '[;{}]',
        returnEnd: true,
        contains: VALUE,
        relevance: 0
      }
    };
    var VAR_RULE_MODE = {
      className: 'variable',
      variants: [{
        begin: '@' + IDENT_RE + '\\s*:',
        relevance: 15
      }, {
        begin: '@' + IDENT_RE
      }],
      starts: {
        end: '[;}]',
        returnEnd: true,
        contains: VALUE_WITH_RULESETS
      }
    };
    var SELECTOR_MODE = {
      variants: [{
        begin: '[\\.#:&\\[>]',
        end: '[;{}]'
      }, {
        begin: INTERP_IDENT_RE,
        end: '{'
      }],
      returnBegin: true,
      returnEnd: true,
      illegal: '[<=\'$"]',
      relevance: 0,
      contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, MIXIN_GUARD_MODE, IDENT_MODE('keyword', 'all\\b'), IDENT_MODE('variable', '@{' + IDENT_RE + '}'), IDENT_MODE('selector-tag', INTERP_IDENT_RE + '%?', 0), IDENT_MODE('selector-id', '#' + INTERP_IDENT_RE), IDENT_MODE('selector-class', '\\.' + INTERP_IDENT_RE, 0), IDENT_MODE('selector-tag', '&', 0), {
        className: 'selector-attr',
        begin: '\\[',
        end: '\\]'
      }, {
        className: 'selector-pseudo',
        begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
      }, {
        begin: '\\(',
        end: '\\)',
        contains: VALUE_WITH_RULESETS
      }, {
        begin: '!important'
      }]
    };
    RULES.push(hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, AT_RULE_MODE, VAR_RULE_MODE, RULE_MODE, SELECTOR_MODE);
    return {
      case_insensitive: true,
      illegal: '[=>\'/<($"]',
      contains: RULES
    };
  };

  var makefile = function makefile(hljs) {
    var VARIABLE = {
      className: 'variable',
      variants: [{
        begin: '\\$\\(' + hljs.UNDERSCORE_IDENT_RE + '\\)',
        contains: [hljs.BACKSLASH_ESCAPE]
      }, {
        begin: /\$[@%<?\^\+\*]/
      }]
    };
    var QUOTE_STRING = {
      className: 'string',
      begin: /"/,
      end: /"/,
      contains: [hljs.BACKSLASH_ESCAPE, VARIABLE]
    };
    var FUNC = {
      className: 'variable',
      begin: /\$\([\w-]+\s/,
      end: /\)/,
      keywords: {
        built_in: 'subst patsubst strip findstring filter filter-out sort ' + 'word wordlist firstword lastword dir notdir suffix basename ' + 'addsuffix addprefix join wildcard realpath abspath error warning ' + 'shell origin flavor foreach if or and call eval file value'
      },
      contains: [VARIABLE]
    };
    var ASSIGNMENT = {
      begin: '^' + hljs.UNDERSCORE_IDENT_RE + '\\s*(?=[:+?]?=)'
    };
    var META = {
      className: 'meta',
      begin: /^\.PHONY:/,
      end: /$/,
      keywords: {
        'meta-keyword': '.PHONY'
      },
      lexemes: /[\.\w]+/
    };
    var TARGET = {
      className: 'section',
      begin: /^[^\s]+:/,
      end: /$/,
      contains: [VARIABLE]
    };
    return {
      aliases: ['mk', 'mak'],
      keywords: 'define endef undefine ifdef ifndef ifeq ifneq else endif ' + 'include -include sinclude override export unexport private vpath',
      lexemes: /[\w-]+/,
      contains: [hljs.HASH_COMMENT_MODE, VARIABLE, QUOTE_STRING, FUNC, ASSIGNMENT, META, TARGET]
    };
  };

  var nginx = function nginx(hljs) {
    var VAR = {
      className: 'variable',
      variants: [{
        begin: /\$\d+/
      }, {
        begin: /\$\{/,
        end: /}/
      }, {
        begin: '[\\$\\@]' + hljs.UNDERSCORE_IDENT_RE
      }]
    };
    var DEFAULT = {
      endsWithParent: true,
      lexemes: '[a-z/_]+',
      keywords: {
        literal: 'on off yes no true false none blocked debug info notice warn error crit ' + 'select break last permanent redirect kqueue rtsig epoll poll /dev/poll'
      },
      relevance: 0,
      illegal: '=>',
      contains: [hljs.HASH_COMMENT_MODE, {
        className: 'string',
        contains: [hljs.BACKSLASH_ESCAPE, VAR],
        variants: [{
          begin: /"/,
          end: /"/
        }, {
          begin: /'/,
          end: /'/
        }]
      }, {
        begin: '([a-z]+):/',
        end: '\\s',
        endsWithParent: true,
        excludeEnd: true,
        contains: [VAR]
      }, {
        className: 'regexp',
        contains: [hljs.BACKSLASH_ESCAPE, VAR],
        variants: [{
          begin: "\\s\\^",
          end: "\\s|{|;",
          returnEnd: true
        }, {
          begin: "~\\*?\\s+",
          end: "\\s|{|;",
          returnEnd: true
        }, {
          begin: "\\*(\\.[a-z\\-]+)+"
        }, {
          begin: "([a-z\\-]+\\.)+\\*"
        }]
      }, {
        className: 'number',
        begin: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b'
      }, {
        className: 'number',
        begin: '\\b\\d+[kKmMgGdshdwy]*\\b',
        relevance: 0
      }, VAR]
    };
    return {
      aliases: ['nginxconf'],
      contains: [hljs.HASH_COMMENT_MODE, {
        begin: hljs.UNDERSCORE_IDENT_RE + '\\s+{',
        returnBegin: true,
        end: '{',
        contains: [{
          className: 'section',
          begin: hljs.UNDERSCORE_IDENT_RE
        }],
        relevance: 0
      }, {
        begin: hljs.UNDERSCORE_IDENT_RE + '\\s',
        end: ';|{',
        returnBegin: true,
        contains: [{
          className: 'attribute',
          begin: hljs.UNDERSCORE_IDENT_RE,
          starts: DEFAULT
        }],
        relevance: 0
      }],
      illegal: '[^\\s\\}]'
    };
  };

  var php = function php(hljs) {
    var VARIABLE = {
      begin: '\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*'
    };
    var PREPROCESSOR = {
      className: 'meta',
      begin: /<\?(php)?|\?>/
    };
    var STRING = {
      className: 'string',
      contains: [hljs.BACKSLASH_ESCAPE, PREPROCESSOR],
      variants: [{
        begin: 'b"',
        end: '"'
      }, {
        begin: 'b\'',
        end: '\''
      }, hljs.inherit(hljs.APOS_STRING_MODE, {
        illegal: null
      }), hljs.inherit(hljs.QUOTE_STRING_MODE, {
        illegal: null
      })]
    };
    var NUMBER = {
      variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]
    };
    return {
      aliases: ['php', 'php3', 'php4', 'php5', 'php6', 'php7'],
      case_insensitive: true,
      keywords: 'and include_once list abstract global private echo interface as static endswitch ' + 'array null if endwhile or const for endforeach self var while isset public ' + 'protected exit foreach throw elseif include __FILE__ empty require_once do xor ' + 'return parent clone use __CLASS__ __LINE__ else break print eval new ' + 'catch __METHOD__ case exception default die require __FUNCTION__ ' + 'enddeclare final try switch continue endfor endif declare unset true false ' + 'trait goto instanceof insteadof __DIR__ __NAMESPACE__ ' + 'yield finally',
      contains: [hljs.HASH_COMMENT_MODE, hljs.COMMENT('//', '$', {
        contains: [PREPROCESSOR]
      }), hljs.COMMENT('/\\*', '\\*/', {
        contains: [{
          className: 'doctag',
          begin: '@[A-Za-z]+'
        }]
      }), hljs.COMMENT('__halt_compiler.+?;', false, {
        endsWithParent: true,
        keywords: '__halt_compiler',
        lexemes: hljs.UNDERSCORE_IDENT_RE
      }), {
        className: 'string',
        begin: /<<<['"]?\w+['"]?$/,
        end: /^\w+;?$/,
        contains: [hljs.BACKSLASH_ESCAPE, {
          className: 'subst',
          variants: [{
            begin: /\$\w+/
          }, {
            begin: /\{\$/,
            end: /\}/
          }]
        }]
      }, PREPROCESSOR, {
        className: 'keyword',
        begin: /\$this\b/
      }, VARIABLE, {
        begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
      }, {
        className: 'function',
        beginKeywords: 'function',
        end: /[;{]/,
        excludeEnd: true,
        illegal: '\\$|\\[|%',
        contains: [hljs.UNDERSCORE_TITLE_MODE, {
          className: 'params',
          begin: '\\(',
          end: '\\)',
          contains: ['self', VARIABLE, hljs.C_BLOCK_COMMENT_MODE, STRING, NUMBER]
        }]
      }, {
        className: 'class',
        beginKeywords: 'class interface',
        end: '{',
        excludeEnd: true,
        illegal: /[:\(\$"]/,
        contains: [{
          beginKeywords: 'extends implements'
        }, hljs.UNDERSCORE_TITLE_MODE]
      }, {
        beginKeywords: 'namespace',
        end: ';',
        illegal: /[\.']/,
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      }, {
        beginKeywords: 'use',
        end: ';',
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      }, {
        begin: '=>'
      }, STRING, NUMBER]
    };
  };

  var python = function python(hljs) {
    var KEYWORDS = {
      keyword: 'and elif is global as in if from raise for except finally print import pass return ' + 'exec else break not with class assert yield try while continue del or def lambda ' + 'async await nonlocal|10',
      built_in: 'Ellipsis NotImplemented',
      literal: 'False None True'
    };
    var PROMPT = {
      className: 'meta',
      begin: /^(>>>|\.\.\.) /
    };
    var SUBST = {
      className: 'subst',
      begin: /\{/,
      end: /\}/,
      keywords: KEYWORDS,
      illegal: /#/
    };
    var LITERAL_BRACKET = {
      begin: /\{\{/,
      relevance: 0
    };
    var STRING = {
      className: 'string',
      contains: [hljs.BACKSLASH_ESCAPE],
      variants: [{
        begin: /(u|b)?r?'''/,
        end: /'''/,
        contains: [hljs.BACKSLASH_ESCAPE, PROMPT],
        relevance: 10
      }, {
        begin: /(u|b)?r?"""/,
        end: /"""/,
        contains: [hljs.BACKSLASH_ESCAPE, PROMPT],
        relevance: 10
      }, {
        begin: /(fr|rf|f)'''/,
        end: /'''/,
        contains: [hljs.BACKSLASH_ESCAPE, PROMPT, LITERAL_BRACKET, SUBST]
      }, {
        begin: /(fr|rf|f)"""/,
        end: /"""/,
        contains: [hljs.BACKSLASH_ESCAPE, PROMPT, LITERAL_BRACKET, SUBST]
      }, {
        begin: /(u|r|ur)'/,
        end: /'/,
        relevance: 10
      }, {
        begin: /(u|r|ur)"/,
        end: /"/,
        relevance: 10
      }, {
        begin: /(b|br)'/,
        end: /'/
      }, {
        begin: /(b|br)"/,
        end: /"/
      }, {
        begin: /(fr|rf|f)'/,
        end: /'/,
        contains: [hljs.BACKSLASH_ESCAPE, LITERAL_BRACKET, SUBST]
      }, {
        begin: /(fr|rf|f)"/,
        end: /"/,
        contains: [hljs.BACKSLASH_ESCAPE, LITERAL_BRACKET, SUBST]
      }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]
    };
    var NUMBER = {
      className: 'number',
      relevance: 0,
      variants: [{
        begin: hljs.BINARY_NUMBER_RE + '[lLjJ]?'
      }, {
        begin: '\\b(0o[0-7]+)[lLjJ]?'
      }, {
        begin: hljs.C_NUMBER_RE + '[lLjJ]?'
      }]
    };
    var PARAMS = {
      className: 'params',
      begin: /\(/,
      end: /\)/,
      contains: ['self', PROMPT, NUMBER, STRING, hljs.HASH_COMMENT_MODE]
    };
    SUBST.contains = [STRING, NUMBER, PROMPT];
    return {
      aliases: ['py', 'gyp', 'ipython'],
      keywords: KEYWORDS,
      illegal: /(<\/|->|\?)|=>/,
      contains: [PROMPT, NUMBER, {
        beginKeywords: "if",
        relevance: 0
      }, STRING, hljs.HASH_COMMENT_MODE, {
        variants: [{
          className: 'function',
          beginKeywords: 'def'
        }, {
          className: 'class',
          beginKeywords: 'class'
        }],
        end: /:/,
        illegal: /[${=;\n,]/,
        contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS, {
          begin: /->/,
          endsWithParent: true,
          keywords: 'None'
        }]
      }, {
        className: 'meta',
        begin: /^[\t ]*@/,
        end: /$/
      }, {
        begin: /\b(print|exec)\(/
      }]
    };
  };

  var scss = function scss(hljs) {
    var AT_IDENTIFIER = '@[a-z-]+';
    var AT_MODIFIERS = "and or not only";
    var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
    var VARIABLE = {
      className: 'variable',
      begin: '(\\$' + IDENT_RE + ')\\b'
    };
    var HEXCOLOR = {
      className: 'number',
      begin: '#[0-9A-Fa-f]+'
    };
    var DEF_INTERNALS = {
      className: 'attribute',
      begin: '[A-Z\\_\\.\\-]+',
      end: ':',
      excludeEnd: true,
      illegal: '[^\\s]',
      starts: {
        endsWithParent: true,
        excludeEnd: true,
        contains: [HEXCOLOR, hljs.CSS_NUMBER_MODE, hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, hljs.C_BLOCK_COMMENT_MODE, {
          className: 'meta',
          begin: '!important'
        }]
      }
    };
    return {
      case_insensitive: true,
      illegal: '[=/|\']',
      contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, {
        className: 'selector-id',
        begin: '\\#[A-Za-z0-9_-]+',
        relevance: 0
      }, {
        className: 'selector-class',
        begin: '\\.[A-Za-z0-9_-]+',
        relevance: 0
      }, {
        className: 'selector-attr',
        begin: '\\[',
        end: '\\]',
        illegal: '$'
      }, {
        className: 'selector-tag',
        begin: '\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b',
        relevance: 0
      }, {
        className: 'selector-pseudo',
        begin: ':(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)'
      }, {
        className: 'selector-pseudo',
        begin: '::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)'
      }, VARIABLE, {
        className: 'attribute',
        begin: '\\b(src|z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b',
        illegal: '[^\\s]'
      }, {
        begin: '\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b'
      }, {
        begin: ':',
        end: ';',
        contains: [VARIABLE, HEXCOLOR, hljs.CSS_NUMBER_MODE, hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, {
          className: 'meta',
          begin: '!important'
        }]
      }, {
        begin: '@(page|font-face)',
        lexemes: AT_IDENTIFIER,
        keywords: '@page @font-face'
      }, {
        begin: '@',
        end: '[{;]',
        returnBegin: true,
        keywords: AT_MODIFIERS,
        contains: [{
          begin: AT_IDENTIFIER,
          className: "keyword"
        }, VARIABLE, hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, HEXCOLOR, hljs.CSS_NUMBER_MODE]
      }]
    };
  };

  var sql = function sql(hljs) {
    var COMMENT_MODE = hljs.COMMENT('--', '$');
    return {
      case_insensitive: true,
      illegal: /[<>{}*]/,
      contains: [{
        beginKeywords: 'begin end start commit rollback savepoint lock alter create drop rename call ' + 'delete do handler insert load replace select truncate update set show pragma grant ' + 'merge describe use explain help declare prepare execute deallocate release ' + 'unlock purge reset change stop analyze cache flush optimize repair kill ' + 'install uninstall checksum restore check backup revoke comment values with',
        end: /;/,
        endsWithParent: true,
        lexemes: /[\w\.]+/,
        keywords: {
          keyword: 'as abort abs absolute acc acce accep accept access accessed accessible account acos action activate add ' + 'addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias ' + 'all allocate allow alter always analyze ancillary and anti any anydata anydataset anyschema anytype apply ' + 'archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan ' + 'atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid ' + 'authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile ' + 'before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float ' + 'binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound ' + 'bucket buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel ' + 'capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base ' + 'char_length character_length characters characterset charindex charset charsetform charsetid check ' + 'checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close ' + 'cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation ' + 'collect colu colum column column_value columns columns_updated comment commit compact compatibility ' + 'compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn ' + 'connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection ' + 'consider consistent constant constraint constraints constructor container content contents context ' + 'contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost ' + 'count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation ' + 'critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user ' + 'cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add ' + 'date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts ' + 'day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate ' + 'declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults ' + 'deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank ' + 'depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor ' + 'deterministic diagnostics difference dimension direct_load directory disable disable_all ' + 'disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div ' + 'do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable ' + 'editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt ' + 'end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors ' + 'escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding ' + 'execu execut execute exempt exists exit exp expire explain explode export export_set extended extent external ' + 'external_1 external_2 externally extract failed failed_login_attempts failover failure far fast ' + 'feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final ' + 'finish first first_value fixed flash_cache flashback floor flush following follows for forall force foreign ' + 'form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ' + 'ftp full function general generated get get_format get_lock getdate getutcdate global global_name ' + 'globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups ' + 'gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex ' + 'hierarchy high high_priority hosts hour hours http id ident_current ident_incr ident_seed identified ' + 'identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment ' + 'index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile ' + 'initial initialized initially initrans inmemory inner innodb input insert install instance instantiable ' + 'instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat ' + 'is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists ' + 'keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lateral lax lcase ' + 'lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit ' + 'lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate ' + 'locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call ' + 'logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime ' + 'managed management manual map mapping mask master master_pos_wait match matched materialized max ' + 'maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans ' + 'md5 measures median medium member memcompress memory merge microsecond mid migration min minextents ' + 'minimum mining minus minute minutes minvalue missing mod mode model modification modify module monitoring month ' + 'months mount move movement multiset mutex name name_const names nan national native natural nav nchar ' + 'nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile ' + 'nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile ' + 'nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder ' + 'nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck ' + 'noswitch not nothing notice notnull notrim novalidate now nowait nth_value nullif nulls num numb numbe ' + 'nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ' + 'ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old ' + 'on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date ' + 'oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary ' + 'out outer outfile outline output over overflow overriding package pad parallel parallel_enable ' + 'parameters parent parse partial partition partitions pascal passing password password_grace_time ' + 'password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex ' + 'pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc ' + 'performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin ' + 'policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction ' + 'prediction_cost prediction_details prediction_probability prediction_set prepare present preserve ' + 'prior priority private private_sga privileges procedural procedure procedure_analyze processlist ' + 'profiles project prompt protection public publishingservername purge quarter query quick quiesce quota ' + 'quotename radians raise rand range rank raw read reads readsize rebuild record records ' + 'recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh ' + 'regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy ' + 'reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename ' + 'repair repeat replace replicate replication required reset resetlogs resize resource respect restore ' + 'restricted result result_cache resumable resume retention return returning returns reuse reverse revoke ' + 'right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows ' + 'rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll ' + 'sdo_georaster sdo_topo_geometry search sec_to_time second seconds section securefile security seed segment select ' + 'self semi sequence sequential serializable server servererror session session_user sessions_per_user set ' + 'sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor ' + 'si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin ' + 'size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex ' + 'source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows ' + 'sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone ' + 'standby start starting startup statement static statistics stats_binomial_test stats_crosstab ' + 'stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep ' + 'stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev ' + 'stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate ' + 'subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum ' + 'suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate ' + 'sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tablesample tan tdo ' + 'template temporary terminated tertiary_weights test than then thread through tier ties time time_format ' + 'time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr ' + 'timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking ' + 'transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate ' + 'try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress ' + 'under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unnest unpivot ' + 'unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert ' + 'url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date ' + 'utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var ' + 'var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray ' + 'verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear ' + 'wellformed when whene whenev wheneve whenever where while whitespace window with within without work wrapped ' + 'xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces ' + 'xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek',
          literal: 'true false null unknown',
          built_in: 'array bigint binary bit blob bool boolean char character date dec decimal float int int8 integer interval number ' + 'numeric real record serial serial8 smallint text time timestamp tinyint varchar varchar2 varying void'
        },
        contains: [{
          className: 'string',
          begin: '\'',
          end: '\'',
          contains: [{
            begin: '\'\''
          }]
        }, {
          className: 'string',
          begin: '"',
          end: '"',
          contains: [{
            begin: '""'
          }]
        }, {
          className: 'string',
          begin: '`',
          end: '`'
        }, hljs.C_NUMBER_MODE, hljs.C_BLOCK_COMMENT_MODE, COMMENT_MODE, hljs.HASH_COMMENT_MODE]
      }, hljs.C_BLOCK_COMMENT_MODE, COMMENT_MODE, hljs.HASH_COMMENT_MODE]
    };
  };

  var stylus = function stylus(hljs) {
    var VARIABLE = {
      className: 'variable',
      begin: '\\$' + hljs.IDENT_RE
    };
    var HEX_COLOR = {
      className: 'number',
      begin: '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})'
    };
    var AT_KEYWORDS = ['charset', 'css', 'debug', 'extend', 'font-face', 'for', 'import', 'include', 'media', 'mixin', 'page', 'warn', 'while'];
    var PSEUDO_SELECTORS = ['after', 'before', 'first-letter', 'first-line', 'active', 'first-child', 'focus', 'hover', 'lang', 'link', 'visited'];
    var TAGS = ['a', 'abbr', 'address', 'article', 'aside', 'audio', 'b', 'blockquote', 'body', 'button', 'canvas', 'caption', 'cite', 'code', 'dd', 'del', 'details', 'dfn', 'div', 'dl', 'dt', 'em', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'mark', 'menu', 'nav', 'object', 'ol', 'p', 'q', 'quote', 'samp', 'section', 'span', 'strong', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'ul', 'var', 'video'];
    var LOOKAHEAD_TAG_END = '(?=[\\.\\s\\n\\[\\:,])';
    var ATTRIBUTES = ['align-content', 'align-items', 'align-self', 'animation', 'animation-delay', 'animation-direction', 'animation-duration', 'animation-fill-mode', 'animation-iteration-count', 'animation-name', 'animation-play-state', 'animation-timing-function', 'auto', 'backface-visibility', 'background', 'background-attachment', 'background-clip', 'background-color', 'background-image', 'background-origin', 'background-position', 'background-repeat', 'background-size', 'border', 'border-bottom', 'border-bottom-color', 'border-bottom-left-radius', 'border-bottom-right-radius', 'border-bottom-style', 'border-bottom-width', 'border-collapse', 'border-color', 'border-image', 'border-image-outset', 'border-image-repeat', 'border-image-slice', 'border-image-source', 'border-image-width', 'border-left', 'border-left-color', 'border-left-style', 'border-left-width', 'border-radius', 'border-right', 'border-right-color', 'border-right-style', 'border-right-width', 'border-spacing', 'border-style', 'border-top', 'border-top-color', 'border-top-left-radius', 'border-top-right-radius', 'border-top-style', 'border-top-width', 'border-width', 'bottom', 'box-decoration-break', 'box-shadow', 'box-sizing', 'break-after', 'break-before', 'break-inside', 'caption-side', 'clear', 'clip', 'clip-path', 'color', 'column-count', 'column-fill', 'column-gap', 'column-rule', 'column-rule-color', 'column-rule-style', 'column-rule-width', 'column-span', 'column-width', 'columns', 'content', 'counter-increment', 'counter-reset', 'cursor', 'direction', 'display', 'empty-cells', 'filter', 'flex', 'flex-basis', 'flex-direction', 'flex-flow', 'flex-grow', 'flex-shrink', 'flex-wrap', 'float', 'font', 'font-family', 'font-feature-settings', 'font-kerning', 'font-language-override', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-variant-ligatures', 'font-weight', 'height', 'hyphens', 'icon', 'image-orientation', 'image-rendering', 'image-resolution', 'ime-mode', 'inherit', 'initial', 'justify-content', 'left', 'letter-spacing', 'line-height', 'list-style', 'list-style-image', 'list-style-position', 'list-style-type', 'margin', 'margin-bottom', 'margin-left', 'margin-right', 'margin-top', 'marks', 'mask', 'max-height', 'max-width', 'min-height', 'min-width', 'nav-down', 'nav-index', 'nav-left', 'nav-right', 'nav-up', 'none', 'normal', 'object-fit', 'object-position', 'opacity', 'order', 'orphans', 'outline', 'outline-color', 'outline-offset', 'outline-style', 'outline-width', 'overflow', 'overflow-wrap', 'overflow-x', 'overflow-y', 'padding', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top', 'page-break-after', 'page-break-before', 'page-break-inside', 'perspective', 'perspective-origin', 'pointer-events', 'position', 'quotes', 'resize', 'right', 'tab-size', 'table-layout', 'text-align', 'text-align-last', 'text-decoration', 'text-decoration-color', 'text-decoration-line', 'text-decoration-style', 'text-indent', 'text-overflow', 'text-rendering', 'text-shadow', 'text-transform', 'text-underline-position', 'top', 'transform', 'transform-origin', 'transform-style', 'transition', 'transition-delay', 'transition-duration', 'transition-property', 'transition-timing-function', 'unicode-bidi', 'vertical-align', 'visibility', 'white-space', 'widows', 'width', 'word-break', 'word-spacing', 'word-wrap', 'z-index'];
    var ILLEGAL = ['\\?', '(\\bReturn\\b)', '(\\bEnd\\b)', '(\\bend\\b)', '(\\bdef\\b)', ';', '#\\s', '\\*\\s', '===\\s', '\\|', '%'];
    return {
      aliases: ['styl'],
      case_insensitive: false,
      keywords: 'if else for in',
      illegal: '(' + ILLEGAL.join('|') + ')',
      contains: [hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, HEX_COLOR, {
        begin: '\\.[a-zA-Z][a-zA-Z0-9_-]*' + LOOKAHEAD_TAG_END,
        className: 'selector-class'
      }, {
        begin: '\\#[a-zA-Z][a-zA-Z0-9_-]*' + LOOKAHEAD_TAG_END,
        className: 'selector-id'
      }, {
        begin: '\\b(' + TAGS.join('|') + ')' + LOOKAHEAD_TAG_END,
        className: 'selector-tag'
      }, {
        begin: '&?:?:\\b(' + PSEUDO_SELECTORS.join('|') + ')' + LOOKAHEAD_TAG_END
      }, {
        begin: '\@(' + AT_KEYWORDS.join('|') + ')\\b'
      }, VARIABLE, hljs.CSS_NUMBER_MODE, hljs.NUMBER_MODE, {
        className: 'function',
        begin: '^[a-zA-Z][a-zA-Z0-9_\-]*\\(.*\\)',
        illegal: '[\\n]',
        returnBegin: true,
        contains: [{
          className: 'title',
          begin: '\\b[a-zA-Z][a-zA-Z0-9_\-]*'
        }, {
          className: 'params',
          begin: /\(/,
          end: /\)/,
          contains: [HEX_COLOR, VARIABLE, hljs.APOS_STRING_MODE, hljs.CSS_NUMBER_MODE, hljs.NUMBER_MODE, hljs.QUOTE_STRING_MODE]
        }]
      }, {
        className: 'attribute',
        begin: '\\b(' + ATTRIBUTES.reverse().join('|') + ')\\b',
        starts: {
          end: /;|$/,
          contains: [HEX_COLOR, VARIABLE, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.CSS_NUMBER_MODE, hljs.NUMBER_MODE, hljs.C_BLOCK_COMMENT_MODE],
          illegal: /\./,
          relevance: 0
        }
      }]
    };
  };

  highlight.registerLanguage('cpp', cpp);
  highlight.registerLanguage('xml', xml);
  highlight.registerLanguage('bash', bash);
  highlight.registerLanguage('coffeescript', coffeescript);
  highlight.registerLanguage('css', css$1);
  highlight.registerLanguage('markdown', markdown);
  highlight.registerLanguage('http', http);
  highlight.registerLanguage('java', java);
  highlight.registerLanguage('javascript', javascript);
  highlight.registerLanguage('json', json);
  highlight.registerLanguage('less', less);
  highlight.registerLanguage('makefile', makefile);
  highlight.registerLanguage('nginx', nginx);
  highlight.registerLanguage('php', php);
  highlight.registerLanguage('python', python);
  highlight.registerLanguage('scss', scss);
  highlight.registerLanguage('sql', sql);
  highlight.registerLanguage('stylus', stylus);
  highlight.registerLanguage('js', javascript);
  highlight.configure({
    classPrefix: 'hljs-'
  });
  var highlight$1 = highlight;

  var languages = ['cpp', 'xml', 'bash', 'coffeescript', 'css', 'markdown', 'http', 'java', 'javascript', 'json', 'less', 'makefile', 'nginx', 'php', 'python', 'scss', 'sql', 'stylus', 'js', 'https'];
  var renderer = new marked_1.Renderer();
  marked_1.setOptions({
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: function highlight(code, lang) {
      if (!~languages.indexOf(lang)) {
        return highlight$1.highlightAuto(code).value;
      }

      return highlight$1.highlight(lang, code).value;
    }
  });

  var paragraphParse = function paragraphParse(text) {
    if (!text) return '';
    return "<p class=\"marked-paragraph\">".concat(text, "</p>");
  };

  var imageParse = function imageParse(src, title, alt) {
    if (!src) return '';
    var _renderer$lazy = renderer.lazy,
        lazy = _renderer$lazy === void 0 ? false : _renderer$lazy;

    var _src = lazy ? 'https://static.vvxiayutian.com/static/placeholder.jpg' : src;

    var string = "<div class=\"marked-image\"><img src=\"".concat(_src, "\"");
    string += "class=\"marked-src\" title=\"".concat(title || alt || '', "\"");
    string += "data-echo=\"".concat(src, "\" class=\"img-pop\" />");
    if (title || alt) string += "<div class=\"marked-caption\"><div class=\"marked-caption-text\">".concat(title || alt, "</div></div>");
    string += '</div>';
    return string;
  };

  var linkParse = function linkParse(href, title, text) {
    if (!href) return '';
    var target = href.substr(0, 1) === '#' ? '_self' : '_blank';
    var cName = href.substr(0, 1) === '#' ? '' : 'marked-link';
    var string = "<a href=\"".concat(href, "\" target=\"").concat(target, "\" class=\"").concat(cName, "\">").concat(text, "</a>");
    string = string.replace(/\s+/g, ' ').replace('\n', '');
    return string;
  };

  var headingParse = function headingParse(text, level, raw) {
    if (!text) return '';
    return "<div class=\"marked-head\"><h".concat(level, " class=\"marked-h").concat(level, "\">").concat(text, "</h").concat(level, "></div>");
  };

  var blockquoteParse = function blockquoteParse(string) {
    if (!string) return '';
    return "<div class=\"marked-blockquote\"><blockquote>".concat(string, "</blockquote></div>");
  };

  var HTML_DECODE = function HTML_DECODE(str) {
    if (str.length === 0) return '';
    str = str.replace(/&amp;/g, '&');
    str = str.replace(/&lt;/g, '<');
    str = str.replace(/&gt;/g, '>');
    return str;
  };

  var headingCode = function headingCode(code, lang) {
    if (!code) return '';
    code = HTML_DECODE(code);

    if (!~languages.indexOf(lang)) {
      code = highlight$1.highlightAuto(code).value;
    } else {
      code = highlight$1.highlight(lang, code).value;
    }

    return "<div class=\"marked-code\"><pre class=\"marked-scroll\"><code class=\"language-".concat(lang, "\">").concat(code, "</code></pre></div>");
  };

  var htmlParse = function htmlParse(html) {
    var _ref = renderer || {},
        _ref$xssOptions = _ref.xssOptions,
        xssOptions = _ref$xssOptions === void 0 ? {} : _ref$xssOptions;

    var content = html;

    if (xssOptions) {
      var myxss = new lib$1.FilterXSS(xssOptions);
      content = myxss.process(html);
    }

    return "<div class=\"marked-html\">".concat(content, "</div>");
  };

  renderer.link = linkParse;
  renderer.paragraph = paragraphParse;
  renderer.image = imageParse;
  renderer.heading = headingParse;
  renderer.code = headingCode;
  renderer.html = htmlParse;
  renderer.blockquote = blockquoteParse;

  var xssDefault = function xssDefault(_) {
    return {
      whiteList: {
        iframe: ['src', 'scrolling', 'border', 'marginwidth', 'marginheight', 'width', 'height', 'frameborder', 'framespacing', 'allowfullscreen', 'style', 'class']
      }
    };
  };

  var htmlStr = function htmlStr(content) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (typeof content !== 'string') return '';
    var xss = xssDefault();
    var _options$xssOptions = options.xssOptions,
        xssOptions = _options$xssOptions === void 0 ? false : _options$xssOptions,
        _options$lazy = options.lazy,
        lazy = _options$lazy === void 0 ? false : _options$lazy;
    renderer.xssOptions = xssOptions ? isPlainObject_1(xssOptions) ? _objectSpread2(_objectSpread2({}, xss), xssOptions) : _objectSpread2({}, xss) : false;
    renderer.lazy = lazy;
    var html = marked_1(content, {
      renderer: renderer
    });
    html = "<div class=\"marked-body markdown-body\">".concat(html, "</div>");
    return {
      html: html
    };
  };

  var marked$1 = (function (content) {
    var xssOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var _htmlStr = htmlStr(content, xssOptions),
        html = _htmlStr.html;

    return {
      html: html
    };
  });

  var file$2 = "src/components/inner/index.svelte";

  function create_if_block(ctx) {
    var div;
    var span;
    var block = {
      c: function create() {
        div = element("div");
        span = element("span");
        span.textContent = "预览区域";
        attr_dev(span, "class", "md-alert-text svelte-k2vzin");
        add_location(span, file$2, 4, 26, 190);
        attr_dev(div, "class", "md-alert svelte-k2vzin");
        add_location(div, file$2, 4, 4, 168);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, span);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block.name,
      type: "if",
      source: "(4:2) {#if !value.trim()}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$2(ctx) {
    var div1;
    var div0;
    var t;
    var show_if = !ctx[0].trim();
    var dispose;
    var if_block = show_if && create_if_block(ctx);
    var block = {
      c: function create() {
        div1 = element("div");
        div0 = element("div");
        t = space();
        if (if_block) if_block.c();
        attr_dev(div0, "class", "md-section svelte-k2vzin");
        add_location(div0, file$2, 2, 2, 95);
        attr_dev(div1, "class", "md-inner md-scroll svelte-k2vzin");
        add_location(div1, file$2, 1, 0, 36);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor, remount) {
        insert_dev(target, div1, anchor);
        append_dev(div1, div0);
        div0.innerHTML = ctx[1];
        append_dev(div1, t);
        if (if_block) if_block.m(div1, null);
        if (remount) dispose();
        dispose = listen_dev(div1, "scroll", ctx[2], false, false, false);
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty & 2) div0.innerHTML = ctx[1];
        if (dirty & 1) show_if = !ctx[0].trim();

        if (show_if) {
          if (if_block) ; else {
            if_block = create_if_block(ctx);
            if_block.c();
            if_block.m(div1, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div1);
        if (if_block) if_block.d();
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$2.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$2($$self, $$props, $$invalidate) {
    var scroll = $$props.scroll;
    var value = $$props.value;
    var xss = $$props.xss;
    var EditorBox = $$props.EditorBox;
    var htmlText = "";

    var getHtml = function getHtml(_) {
      var _marked = marked$1(value, {
        xssOptions: xss
      }),
          html = _marked.html;

      $$invalidate(1, htmlText = html);
    };

    var scrollInner = function scrollInner(event) {
      return scroll && syncScroll(EditorBox, "inner");
    };

    var writable_props = ["scroll", "value", "xss", "EditorBox"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Inner> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Inner", $$slots, []);

    $$self.$set = function ($$props) {
      if ("scroll" in $$props) $$invalidate(3, scroll = $$props.scroll);
      if ("value" in $$props) $$invalidate(0, value = $$props.value);
      if ("xss" in $$props) $$invalidate(4, xss = $$props.xss);
      if ("EditorBox" in $$props) $$invalidate(5, EditorBox = $$props.EditorBox);
    };

    $$self.$capture_state = function () {
      return {
        getContext: getContext,
        syncScroll: syncScroll,
        marked: marked$1,
        scroll: scroll,
        value: value,
        xss: xss,
        EditorBox: EditorBox,
        htmlText: htmlText,
        getHtml: getHtml,
        scrollInner: scrollInner
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("scroll" in $$props) $$invalidate(3, scroll = $$props.scroll);
      if ("value" in $$props) $$invalidate(0, value = $$props.value);
      if ("xss" in $$props) $$invalidate(4, xss = $$props.xss);
      if ("EditorBox" in $$props) $$invalidate(5, EditorBox = $$props.EditorBox);
      if ("htmlText" in $$props) $$invalidate(1, htmlText = $$props.htmlText);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    $$self.$$.update = function () {
      if ($$self.$$.dirty & 1) {
         getHtml();
      }
    };

    return [value, htmlText, scrollInner, scroll, xss, EditorBox];
  }

  var Inner = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Inner, _SvelteComponentDev);

    var _super = _createSuper(Inner);

    function Inner(options) {
      var _this;

      _classCallCheck(this, Inner);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
        scroll: 3,
        value: 0,
        xss: 4,
        EditorBox: 5
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Inner",
        options: options,
        id: create_fragment$2.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (ctx[3] === undefined && !("scroll" in props)) {
        console.warn("<Inner> was created without expected prop 'scroll'");
      }

      if (ctx[0] === undefined && !("value" in props)) {
        console.warn("<Inner> was created without expected prop 'value'");
      }

      if (ctx[4] === undefined && !("xss" in props)) {
        console.warn("<Inner> was created without expected prop 'xss'");
      }

      if (ctx[5] === undefined && !("EditorBox" in props)) {
        console.warn("<Inner> was created without expected prop 'EditorBox'");
      }

      return _this;
    }

    _createClass(Inner, [{
      key: "scroll",
      get: function get() {
        return this.$$.ctx[3];
      },
      set: function set(scroll) {
        this.$set({
          scroll: scroll
        });
        flush();
      }
    }, {
      key: "value",
      get: function get() {
        return this.$$.ctx[0];
      },
      set: function set(value) {
        this.$set({
          value: value
        });
        flush();
      }
    }, {
      key: "xss",
      get: function get() {
        return this.$$.ctx[4];
      },
      set: function set(xss) {
        this.$set({
          xss: xss
        });
        flush();
      }
    }, {
      key: "EditorBox",
      get: function get() {
        return this.$$.ctx[5];
      },
      set: function set(EditorBox) {
        this.$set({
          EditorBox: EditorBox
        });
        flush();
      }
    }]);

    return Inner;
  }(SvelteComponentDev);

  var file$3 = "src/components/body/index.svelte";

  function create_fragment$3(ctx) {
    var div;
    var t;
    var current;
    var mdeditortext = new Text({
      props: {
        placeholder: ctx[1],
        value: ctx[2],
        EditorBox: ctx[5],
        preview: ctx[4]
      },
      $$inline: true
    });
    mdeditortext.$on("changed", ctx[6]);
    mdeditortext.$on("mountKeyBoard", ctx[7]);
    mdeditortext.$on("destroyKeyBoard", ctx[8]);
    var mdeditorinner = new Inner({
      props: {
        scroll: ctx[0],
        value: ctx[2],
        xss: ctx[3],
        EditorBox: ctx[5]
      },
      $$inline: true
    });
    var block = {
      c: function create() {
        div = element("div");
        create_component(mdeditortext.$$.fragment);
        t = space();
        create_component(mdeditorinner.$$.fragment);
        attr_dev(div, "class", "md-body md-clear svelte-1n6502d");
        add_location(div, file$3, 1, 0, 36);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        mount_component(mdeditortext, div, null);
        append_dev(div, t);
        mount_component(mdeditorinner, div, null);
        current = true;
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        var mdeditortext_changes = {};
        if (dirty & 2) mdeditortext_changes.placeholder = ctx[1];
        if (dirty & 4) mdeditortext_changes.value = ctx[2];
        if (dirty & 32) mdeditortext_changes.EditorBox = ctx[5];
        if (dirty & 16) mdeditortext_changes.preview = ctx[4];
        mdeditortext.$set(mdeditortext_changes);
        var mdeditorinner_changes = {};
        if (dirty & 1) mdeditorinner_changes.scroll = ctx[0];
        if (dirty & 4) mdeditorinner_changes.value = ctx[2];
        if (dirty & 8) mdeditorinner_changes.xss = ctx[3];
        if (dirty & 32) mdeditorinner_changes.EditorBox = ctx[5];
        mdeditorinner.$set(mdeditorinner_changes);
      },
      i: function intro(local) {
        if (current) return;
        transition_in(mdeditortext.$$.fragment, local);
        transition_in(mdeditorinner.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(mdeditortext.$$.fragment, local);
        transition_out(mdeditorinner.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        destroy_component(mdeditortext);
        destroy_component(mdeditorinner);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$3.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$3($$self, $$props, $$invalidate) {
    var dispatch = createEventDispatcher();
    var scroll = $$props.scroll;
    var placeholder = $$props.placeholder;
    var value = $$props.value;
    var xss = $$props.xss;
    var preview = $$props.preview;
    var EditorBox = $$props.EditorBox;

    var changed = function changed(_ref3) {
      var detail = _ref3.detail;
      return dispatch("changed", detail);
    };

    var mountKeyBoard = function mountKeyBoard(_) {
      return dispatch("mountKeyBoard");
    };

    var destroyKeyBoard = function destroyKeyBoard(_) {
      return dispatch("destroyKeyBoard");
    };

    var writable_props = ["scroll", "placeholder", "value", "xss", "preview", "EditorBox"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Body> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Body", $$slots, []);

    $$self.$set = function ($$props) {
      if ("scroll" in $$props) $$invalidate(0, scroll = $$props.scroll);
      if ("placeholder" in $$props) $$invalidate(1, placeholder = $$props.placeholder);
      if ("value" in $$props) $$invalidate(2, value = $$props.value);
      if ("xss" in $$props) $$invalidate(3, xss = $$props.xss);
      if ("preview" in $$props) $$invalidate(4, preview = $$props.preview);
      if ("EditorBox" in $$props) $$invalidate(5, EditorBox = $$props.EditorBox);
    };

    $$self.$capture_state = function () {
      return {
        MdEditorText: Text,
        MdEditorInner: Inner,
        onMount: onMount,
        createEventDispatcher: createEventDispatcher,
        dispatch: dispatch,
        scroll: scroll,
        placeholder: placeholder,
        value: value,
        xss: xss,
        preview: preview,
        EditorBox: EditorBox,
        changed: changed,
        mountKeyBoard: mountKeyBoard,
        destroyKeyBoard: destroyKeyBoard
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("scroll" in $$props) $$invalidate(0, scroll = $$props.scroll);
      if ("placeholder" in $$props) $$invalidate(1, placeholder = $$props.placeholder);
      if ("value" in $$props) $$invalidate(2, value = $$props.value);
      if ("xss" in $$props) $$invalidate(3, xss = $$props.xss);
      if ("preview" in $$props) $$invalidate(4, preview = $$props.preview);
      if ("EditorBox" in $$props) $$invalidate(5, EditorBox = $$props.EditorBox);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [scroll, placeholder, value, xss, preview, EditorBox, changed, mountKeyBoard, destroyKeyBoard];
  }

  var Body = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Body, _SvelteComponentDev);

    var _super = _createSuper(Body);

    function Body(options) {
      var _this;

      _classCallCheck(this, Body);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
        scroll: 0,
        placeholder: 1,
        value: 2,
        xss: 3,
        preview: 4,
        EditorBox: 5
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Body",
        options: options,
        id: create_fragment$3.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (ctx[0] === undefined && !("scroll" in props)) {
        console.warn("<Body> was created without expected prop 'scroll'");
      }

      if (ctx[1] === undefined && !("placeholder" in props)) {
        console.warn("<Body> was created without expected prop 'placeholder'");
      }

      if (ctx[2] === undefined && !("value" in props)) {
        console.warn("<Body> was created without expected prop 'value'");
      }

      if (ctx[3] === undefined && !("xss" in props)) {
        console.warn("<Body> was created without expected prop 'xss'");
      }

      if (ctx[4] === undefined && !("preview" in props)) {
        console.warn("<Body> was created without expected prop 'preview'");
      }

      if (ctx[5] === undefined && !("EditorBox" in props)) {
        console.warn("<Body> was created without expected prop 'EditorBox'");
      }

      return _this;
    }

    _createClass(Body, [{
      key: "scroll",
      get: function get() {
        return this.$$.ctx[0];
      },
      set: function set(scroll) {
        this.$set({
          scroll: scroll
        });
        flush();
      }
    }, {
      key: "placeholder",
      get: function get() {
        return this.$$.ctx[1];
      },
      set: function set(placeholder) {
        this.$set({
          placeholder: placeholder
        });
        flush();
      }
    }, {
      key: "value",
      get: function get() {
        return this.$$.ctx[2];
      },
      set: function set(value) {
        this.$set({
          value: value
        });
        flush();
      }
    }, {
      key: "xss",
      get: function get() {
        return this.$$.ctx[3];
      },
      set: function set(xss) {
        this.$set({
          xss: xss
        });
        flush();
      }
    }, {
      key: "preview",
      get: function get() {
        return this.$$.ctx[4];
      },
      set: function set(preview) {
        this.$set({
          preview: preview
        });
        flush();
      }
    }, {
      key: "EditorBox",
      get: function get() {
        return this.$$.ctx[5];
      },
      set: function set(EditorBox) {
        this.$set({
          EditorBox: EditorBox
        });
        flush();
      }
    }]);

    return Body;
  }(SvelteComponentDev);

  var getTextEl = function getTextEl(oBox) {
    var oEle = jq.$('.md-text', oBox);
    return oEle || null;
  };
  var getSelection = function getSelection(oBox) {
    var box = getTextEl(oBox);
    return {
      start: box.selectionStart,
      end: box.selectionEnd
    };
  };
  var setSelection = function setSelection(oBox, start, end) {
    var box = getTextEl(oBox);
    box.setSelectionRange(start, end);
  };
  var getSelectText = function getSelectText(oBox, start, end) {
    var box = getTextEl(oBox);
    return box.value.substring(start, end);
  };
  var insertAfterText = function insertAfterText(oBox, value, fn) {
    var box = getTextEl(oBox);
    setRangeText(oBox, value);
    var _value = box.value;
    typeof fn === 'function' && fn(_value);
    box.focus();
  };
  var setRangeText = function setRangeText(oBox, text) {
    var box = getTextEl(oBox);
    box.setRangeText(text);
  };
  var insertBeforeText = function insertBeforeText(oBox, value) {
    var revise = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var fn = arguments.length > 3 ? arguments[3] : undefined;
    var bool = arguments.length > 4 ? arguments[4] : undefined;
    var box = getTextEl(oBox);
    var range = getSelection(oBox);
    setRangeText(oBox, value);
    var _value = box.value;
    typeof fn === 'function' && fn(_value);
    if (!bool) setSelection(oBox, range.start + value.length, range.end + value.length + revise);
    var scrollTop = box.scrollTop;
    box.scrollTop = scrollTop;
    box.focus();
  };

  var defaultKeyboard = ToolLeft.map(function (item) {
    return {
      name: item.name ? item.name : '',
      code: item.code ? item.code : '',
      range: item.range ? item.range : 0,
      key: item.key
    };
  });

  var Stack = /*#__PURE__*/function () {
    function Stack(item) {
      _classCallCheck(this, Stack);

      this.init(item);
    }

    _createClass(Stack, [{
      key: "init",
      value: function init(item) {
        this.undoList = [item || {
          value: null
        }];
        this.redoList = [];
      }
    }, {
      key: "push",
      value: function push(item) {
        var last = this.last();
        if (!isPlainObject_1(last) || !isPlainObject_1(item) || last.value == item.value) return false;
        this.undoList.push(item);
      }
    }, {
      key: "last",
      value: function last() {
        return this.undoList[this.undoList.length - 1];
      }
    }, {
      key: "undo",
      value: function undo() {
        if (this.undoList.length > 1) {
          var item = this.undoList.pop();
          if (!isPlainObject_1(item) || !item.value) return false;
          this.redoList.push(item);
        }

        return this.last();
      }
    }, {
      key: "redo",
      value: function redo() {
        var item = this.redoList.pop();
        if (!isPlainObject_1(item) || !item.value) return false;
        this.undoList.push(item);
        return item;
      }
    }]);

    return Stack;
  }();

  var isArray = Array.isArray;
  var isArray_1 = isArray;

  var FUNC_ERROR_TEXT$1 = 'Expected a function';

  function throttle(func, wait, options) {
    var leading = true,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT$1);
    }

    if (isObject_1(options)) {
      leading = 'leading' in options ? !!options.leading : leading;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    return debounce_1(func, wait, {
      'leading': leading,
      'maxWait': wait,
      'trailing': trailing
    });
  }

  var throttle_1 = throttle;

  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  var _listCacheClear = listCacheClear;

  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }

  var eq_1 = eq;

  function assocIndexOf(array, key) {
    var length = array.length;

    while (length--) {
      if (eq_1(array[length][0], key)) {
        return length;
      }
    }

    return -1;
  }

  var _assocIndexOf = assocIndexOf;

  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;

  function listCacheDelete(key) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }

    var lastIndex = data.length - 1;

    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }

    --this.size;
    return true;
  }

  var _listCacheDelete = listCacheDelete;

  function listCacheGet(key) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
  }

  var _listCacheGet = listCacheGet;

  function listCacheHas(key) {
    return _assocIndexOf(this.__data__, key) > -1;
  }

  var _listCacheHas = listCacheHas;

  function listCacheSet(key, value) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }

    return this;
  }

  var _listCacheSet = listCacheSet;

  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  ListCache.prototype.clear = _listCacheClear;
  ListCache.prototype['delete'] = _listCacheDelete;
  ListCache.prototype.get = _listCacheGet;
  ListCache.prototype.has = _listCacheHas;
  ListCache.prototype.set = _listCacheSet;
  var _ListCache = ListCache;

  function stackClear() {
    this.__data__ = new _ListCache();
    this.size = 0;
  }

  var _stackClear = stackClear;

  function stackDelete(key) {
    var data = this.__data__,
        result = data['delete'](key);
    this.size = data.size;
    return result;
  }

  var _stackDelete = stackDelete;

  function stackGet(key) {
    return this.__data__.get(key);
  }

  var _stackGet = stackGet;

  function stackHas(key) {
    return this.__data__.has(key);
  }

  var _stackHas = stackHas;

  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  function isFunction(value) {
    if (!isObject_1(value)) {
      return false;
    }

    var tag = _baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  var isFunction_1 = isFunction;

  var coreJsData = _root['__core-js_shared__'];
  var _coreJsData = coreJsData;

  var maskSrcKey = function () {
    var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  }();

  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  var _isMasked = isMasked;

  var funcProto$1 = Function.prototype;
  var funcToString$1 = funcProto$1.toString;

  function toSource(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {}

      try {
        return func + '';
      } catch (e) {}
    }

    return '';
  }

  var _toSource = toSource;

  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto$2 = Function.prototype,
      objectProto$3 = Object.prototype;
  var funcToString$2 = funcProto$2.toString;
  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
  var reIsNative = RegExp('^' + funcToString$2.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

  function baseIsNative(value) {
    if (!isObject_1(value) || _isMasked(value)) {
      return false;
    }

    var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
    return pattern.test(_toSource(value));
  }

  var _baseIsNative = baseIsNative;

  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  var _getValue = getValue;

  function getNative(object, key) {
    var value = _getValue(object, key);
    return _baseIsNative(value) ? value : undefined;
  }

  var _getNative = getNative;

  var Map$1 = _getNative(_root, 'Map');
  var _Map = Map$1;

  var nativeCreate = _getNative(Object, 'create');
  var _nativeCreate = nativeCreate;

  function hashClear() {
    this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
    this.size = 0;
  }

  var _hashClear = hashClear;

  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  var _hashDelete = hashDelete;

  var HASH_UNDEFINED = '__lodash_hash_undefined__';
  var objectProto$4 = Object.prototype;
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

  function hashGet(key) {
    var data = this.__data__;

    if (_nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }

    return hasOwnProperty$3.call(data, key) ? data[key] : undefined;
  }

  var _hashGet = hashGet;

  var objectProto$5 = Object.prototype;
  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

  function hashHas(key) {
    var data = this.__data__;
    return _nativeCreate ? data[key] !== undefined : hasOwnProperty$4.call(data, key);
  }

  var _hashHas = hashHas;

  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = _nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
    return this;
  }

  var _hashSet = hashSet;

  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  Hash.prototype.clear = _hashClear;
  Hash.prototype['delete'] = _hashDelete;
  Hash.prototype.get = _hashGet;
  Hash.prototype.has = _hashHas;
  Hash.prototype.set = _hashSet;
  var _Hash = Hash;

  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new _Hash(),
      'map': new (_Map || _ListCache)(),
      'string': new _Hash()
    };
  }

  var _mapCacheClear = mapCacheClear;

  function isKeyable(value) {
    var type = _typeof(value);

    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
  }

  var _isKeyable = isKeyable;

  function getMapData(map, key) {
    var data = map.__data__;
    return _isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
  }

  var _getMapData = getMapData;

  function mapCacheDelete(key) {
    var result = _getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  var _mapCacheDelete = mapCacheDelete;

  function mapCacheGet(key) {
    return _getMapData(this, key).get(key);
  }

  var _mapCacheGet = mapCacheGet;

  function mapCacheHas(key) {
    return _getMapData(this, key).has(key);
  }

  var _mapCacheHas = mapCacheHas;

  function mapCacheSet(key, value) {
    var data = _getMapData(this, key),
        size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  var _mapCacheSet = mapCacheSet;

  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  MapCache.prototype.clear = _mapCacheClear;
  MapCache.prototype['delete'] = _mapCacheDelete;
  MapCache.prototype.get = _mapCacheGet;
  MapCache.prototype.has = _mapCacheHas;
  MapCache.prototype.set = _mapCacheSet;
  var _MapCache = MapCache;

  var LARGE_ARRAY_SIZE = 200;

  function stackSet(key, value) {
    var data = this.__data__;

    if (data instanceof _ListCache) {
      var pairs = data.__data__;

      if (!_Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }

      data = this.__data__ = new _MapCache(pairs);
    }

    data.set(key, value);
    this.size = data.size;
    return this;
  }

  var _stackSet = stackSet;

  function Stack$1(entries) {
    var data = this.__data__ = new _ListCache(entries);
    this.size = data.size;
  }

  Stack$1.prototype.clear = _stackClear;
  Stack$1.prototype['delete'] = _stackDelete;
  Stack$1.prototype.get = _stackGet;
  Stack$1.prototype.has = _stackHas;
  Stack$1.prototype.set = _stackSet;
  var _Stack = Stack$1;

  var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED$2);

    return this;
  }

  var _setCacheAdd = setCacheAdd;

  function setCacheHas(value) {
    return this.__data__.has(value);
  }

  var _setCacheHas = setCacheHas;

  function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;
    this.__data__ = new _MapCache();

    while (++index < length) {
      this.add(values[index]);
    }
  }

  SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
  SetCache.prototype.has = _setCacheHas;
  var _SetCache = SetCache;

  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }

    return false;
  }

  var _arraySome = arraySome;

  function cacheHas(cache, key) {
    return cache.has(key);
  }

  var _cacheHas = cacheHas;

  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
        arrLength = array.length,
        othLength = other.length;

    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }

    var stacked = stack.get(array);

    if (stacked && stack.get(other)) {
      return stacked == other;
    }

    var index = -1,
        result = true,
        seen = bitmask & COMPARE_UNORDERED_FLAG ? new _SetCache() : undefined;
    stack.set(array, other);
    stack.set(other, array);

    while (++index < arrLength) {
      var arrValue = array[index],
          othValue = other[index];

      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
      }

      if (compared !== undefined) {
        if (compared) {
          continue;
        }

        result = false;
        break;
      }

      if (seen) {
        if (!_arraySome(other, function (othValue, othIndex) {
          if (!_cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }

    stack['delete'](array);
    stack['delete'](other);
    return result;
  }

  var _equalArrays = equalArrays;

  var Uint8Array = _root.Uint8Array;
  var _Uint8Array = Uint8Array;

  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);
    map.forEach(function (value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  var _mapToArray = mapToArray;

  function setToArray(set) {
    var index = -1,
        result = Array(set.size);
    set.forEach(function (value) {
      result[++index] = value;
    });
    return result;
  }

  var _setToArray = setToArray;

  var COMPARE_PARTIAL_FLAG$1 = 1,
      COMPARE_UNORDERED_FLAG$1 = 2;
  var boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag$1 = '[object Symbol]';
  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]';
  var symbolProto = _Symbol ? _Symbol.prototype : undefined,
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }

        object = object.buffer;
        other = other.buffer;

      case arrayBufferTag:
        if (object.byteLength != other.byteLength || !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
          return false;
        }

        return true;

      case boolTag:
      case dateTag:
      case numberTag:
        return eq_1(+object, +other);

      case errorTag:
        return object.name == other.name && object.message == other.message;

      case regexpTag:
      case stringTag:
        return object == other + '';

      case mapTag:
        var convert = _mapToArray;

      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
        convert || (convert = _setToArray);

        if (object.size != other.size && !isPartial) {
          return false;
        }

        var stacked = stack.get(object);

        if (stacked) {
          return stacked == other;
        }

        bitmask |= COMPARE_UNORDERED_FLAG$1;
        stack.set(object, other);
        var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack['delete'](object);
        return result;

      case symbolTag$1:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }

    }

    return false;
  }

  var _equalByTag = equalByTag;

  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }

    return array;
  }

  var _arrayPush = arrayPush;

  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
  }

  var _baseGetAllKeys = baseGetAllKeys;

  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];

      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }

    return result;
  }

  var _arrayFilter = arrayFilter;

  function stubArray() {
    return [];
  }

  var stubArray_1 = stubArray;

  var objectProto$6 = Object.prototype;
  var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbols = !nativeGetSymbols ? stubArray_1 : function (object) {
    if (object == null) {
      return [];
    }

    object = Object(object);
    return _arrayFilter(nativeGetSymbols(object), function (symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  var _getSymbols = getSymbols;

  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }

    return result;
  }

  var _baseTimes = baseTimes;

  var argsTag = '[object Arguments]';

  function baseIsArguments(value) {
    return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
  }

  var _baseIsArguments = baseIsArguments;

  var objectProto$7 = Object.prototype;
  var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
  var propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable;
  var isArguments = _baseIsArguments(function () {
    return arguments;
  }()) ? _baseIsArguments : function (value) {
    return isObjectLike_1(value) && hasOwnProperty$5.call(value, 'callee') && !propertyIsEnumerable$1.call(value, 'callee');
  };
  var isArguments_1 = isArguments;

  function stubFalse() {
    return false;
  }

  var stubFalse_1 = stubFalse;

  var isBuffer_1 = createCommonjsModule(function (module, exports) {
    var freeExports =  exports && !exports.nodeType && exports;
    var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? _root.Buffer : undefined;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
    var isBuffer = nativeIsBuffer || stubFalse_1;
    module.exports = isBuffer;
  });

  var MAX_SAFE_INTEGER = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  function isIndex(value, length) {
    var type = _typeof(value);

    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }

  var _isIndex = isIndex;

  var MAX_SAFE_INTEGER$1 = 9007199254740991;

  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
  }

  var isLength_1 = isLength;

  var argsTag$1 = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag$1 = '[object Boolean]',
      dateTag$1 = '[object Date]',
      errorTag$1 = '[object Error]',
      funcTag$1 = '[object Function]',
      mapTag$1 = '[object Map]',
      numberTag$1 = '[object Number]',
      objectTag$1 = '[object Object]',
      regexpTag$1 = '[object RegExp]',
      setTag$1 = '[object Set]',
      stringTag$1 = '[object String]',
      weakMapTag = '[object WeakMap]';
  var arrayBufferTag$1 = '[object ArrayBuffer]',
      dataViewTag$1 = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$1] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$1] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag] = false;

  function baseIsTypedArray(value) {
    return isObjectLike_1(value) && isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
  }

  var _baseIsTypedArray = baseIsTypedArray;

  function baseUnary(func) {
    return function (value) {
      return func(value);
    };
  }

  var _baseUnary = baseUnary;

  var _nodeUtil = createCommonjsModule(function (module, exports) {
    var freeExports =  exports && !exports.nodeType && exports;
    var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && _freeGlobal.process;

    var nodeUtil = function () {
      try {
        var types = freeModule && freeModule.require && freeModule.require('util').types;

        if (types) {
          return types;
        }

        return freeProcess && freeProcess.binding && freeProcess.binding('util');
      } catch (e) {}
    }();

    module.exports = nodeUtil;
  });

  var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
  var isTypedArray_1 = isTypedArray;

  var objectProto$8 = Object.prototype;
  var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_1(value),
        isArg = !isArr && isArguments_1(value),
        isBuff = !isArr && !isArg && isBuffer_1(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? _baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$6.call(value, key)) && !(skipIndexes && (key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || _isIndex(key, length)))) {
        result.push(key);
      }
    }

    return result;
  }

  var _arrayLikeKeys = arrayLikeKeys;

  var objectProto$9 = Object.prototype;

  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$9;
    return value === proto;
  }

  var _isPrototype = isPrototype;

  var nativeKeys = _overArg(Object.keys, Object);
  var _nativeKeys = nativeKeys;

  var objectProto$a = Object.prototype;
  var hasOwnProperty$7 = objectProto$a.hasOwnProperty;

  function baseKeys(object) {
    if (!_isPrototype(object)) {
      return _nativeKeys(object);
    }

    var result = [];

    for (var key in Object(object)) {
      if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }

    return result;
  }

  var _baseKeys = baseKeys;

  function isArrayLike(value) {
    return value != null && isLength_1(value.length) && !isFunction_1(value);
  }

  var isArrayLike_1 = isArrayLike;

  function keys(object) {
    return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
  }

  var keys_1 = keys;

  function getAllKeys(object) {
    return _baseGetAllKeys(object, keys_1, _getSymbols);
  }

  var _getAllKeys = getAllKeys;

  var COMPARE_PARTIAL_FLAG$2 = 1;
  var objectProto$b = Object.prototype;
  var hasOwnProperty$8 = objectProto$b.hasOwnProperty;

  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
        objProps = _getAllKeys(object),
        objLength = objProps.length,
        othProps = _getAllKeys(other),
        othLength = othProps.length;

    if (objLength != othLength && !isPartial) {
      return false;
    }

    var index = objLength;

    while (index--) {
      var key = objProps[index];

      if (!(isPartial ? key in other : hasOwnProperty$8.call(other, key))) {
        return false;
      }
    }

    var stacked = stack.get(object);

    if (stacked && stack.get(other)) {
      return stacked == other;
    }

    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;

    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
          othValue = other[key];

      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }

      if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }

      skipCtor || (skipCtor = key == 'constructor');
    }

    if (result && !skipCtor) {
      var objCtor = object.constructor,
          othCtor = other.constructor;

      if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
        result = false;
      }
    }

    stack['delete'](object);
    stack['delete'](other);
    return result;
  }

  var _equalObjects = equalObjects;

  var DataView = _getNative(_root, 'DataView');
  var _DataView = DataView;

  var Promise$1 = _getNative(_root, 'Promise');
  var _Promise = Promise$1;

  var Set$1 = _getNative(_root, 'Set');
  var _Set = Set$1;

  var WeakMap = _getNative(_root, 'WeakMap');
  var _WeakMap = WeakMap;

  var mapTag$2 = '[object Map]',
      objectTag$2 = '[object Object]',
      promiseTag = '[object Promise]',
      setTag$2 = '[object Set]',
      weakMapTag$1 = '[object WeakMap]';
  var dataViewTag$2 = '[object DataView]';
  var dataViewCtorString = _toSource(_DataView),
      mapCtorString = _toSource(_Map),
      promiseCtorString = _toSource(_Promise),
      setCtorString = _toSource(_Set),
      weakMapCtorString = _toSource(_WeakMap);
  var getTag = _baseGetTag;

  if (_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2 || _Map && getTag(new _Map()) != mapTag$2 || _Promise && getTag(_Promise.resolve()) != promiseTag || _Set && getTag(new _Set()) != setTag$2 || _WeakMap && getTag(new _WeakMap()) != weakMapTag$1) {
    getTag = function getTag(value) {
      var result = _baseGetTag(value),
          Ctor = result == objectTag$2 ? value.constructor : undefined,
          ctorString = Ctor ? _toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag$2;

          case mapCtorString:
            return mapTag$2;

          case promiseCtorString:
            return promiseTag;

          case setCtorString:
            return setTag$2;

          case weakMapCtorString:
            return weakMapTag$1;
        }
      }

      return result;
    };
  }

  var _getTag = getTag;

  var COMPARE_PARTIAL_FLAG$3 = 1;
  var argsTag$2 = '[object Arguments]',
      arrayTag$1 = '[object Array]',
      objectTag$3 = '[object Object]';
  var objectProto$c = Object.prototype;
  var hasOwnProperty$9 = objectProto$c.hasOwnProperty;

  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray_1(object),
        othIsArr = isArray_1(other),
        objTag = objIsArr ? arrayTag$1 : _getTag(object),
        othTag = othIsArr ? arrayTag$1 : _getTag(other);
    objTag = objTag == argsTag$2 ? objectTag$3 : objTag;
    othTag = othTag == argsTag$2 ? objectTag$3 : othTag;
    var objIsObj = objTag == objectTag$3,
        othIsObj = othTag == objectTag$3,
        isSameTag = objTag == othTag;

    if (isSameTag && isBuffer_1(object)) {
      if (!isBuffer_1(other)) {
        return false;
      }

      objIsArr = true;
      objIsObj = false;
    }

    if (isSameTag && !objIsObj) {
      stack || (stack = new _Stack());
      return objIsArr || isTypedArray_1(object) ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack) : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }

    if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
      var objIsWrapped = objIsObj && hasOwnProperty$9.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty$9.call(other, '__wrapped__');

      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
            othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new _Stack());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }

    if (!isSameTag) {
      return false;
    }

    stack || (stack = new _Stack());
    return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }

  var _baseIsEqualDeep = baseIsEqualDeep;

  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }

    if (value == null || other == null || !isObjectLike_1(value) && !isObjectLike_1(other)) {
      return value !== value && other !== other;
    }

    return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }

  var _baseIsEqual = baseIsEqual;

  var COMPARE_PARTIAL_FLAG$4 = 1,
      COMPARE_UNORDERED_FLAG$2 = 2;

  function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length,
        length = index,
        noCustomizer = !customizer;

    if (object == null) {
      return !length;
    }

    object = Object(object);

    while (index--) {
      var data = matchData[index];

      if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
        return false;
      }
    }

    while (++index < length) {
      data = matchData[index];
      var key = data[0],
          objValue = object[key],
          srcValue = data[1];

      if (noCustomizer && data[2]) {
        if (objValue === undefined && !(key in object)) {
          return false;
        }
      } else {
        var stack = new _Stack();

        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }

        if (!(result === undefined ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack) : result)) {
          return false;
        }
      }
    }

    return true;
  }

  var _baseIsMatch = baseIsMatch;

  function isStrictComparable(value) {
    return value === value && !isObject_1(value);
  }

  var _isStrictComparable = isStrictComparable;

  function getMatchData(object) {
    var result = keys_1(object),
        length = result.length;

    while (length--) {
      var key = result[length],
          value = object[key];
      result[length] = [key, value, _isStrictComparable(value)];
    }

    return result;
  }

  var _getMatchData = getMatchData;

  function matchesStrictComparable(key, srcValue) {
    return function (object) {
      if (object == null) {
        return false;
      }

      return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
    };
  }

  var _matchesStrictComparable = matchesStrictComparable;

  function baseMatches(source) {
    var matchData = _getMatchData(source);

    if (matchData.length == 1 && matchData[0][2]) {
      return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
    }

    return function (object) {
      return object === source || _baseIsMatch(object, source, matchData);
    };
  }

  var _baseMatches = baseMatches;

  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/;

  function isKey(value, object) {
    if (isArray_1(value)) {
      return false;
    }

    var type = _typeof(value);

    if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol_1(value)) {
      return true;
    }

    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }

  var _isKey = isKey;

  var FUNC_ERROR_TEXT$2 = 'Expected a function';

  function memoize(func, resolver) {
    if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT$2);
    }

    var memoized = function memoized() {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }

      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };

    memoized.cache = new (memoize.Cache || _MapCache)();
    return memoized;
  }

  memoize.Cache = _MapCache;
  var memoize_1 = memoize;

  var MAX_MEMOIZE_SIZE = 500;

  function memoizeCapped(func) {
    var result = memoize_1(func, function (key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }

      return key;
    });
    var cache = result.cache;
    return result;
  }

  var _memoizeCapped = memoizeCapped;

  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = _memoizeCapped(function (string) {
    var result = [];

    if (string.charCodeAt(0) === 46) {
      result.push('');
    }

    string.replace(rePropName, function (match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
    });
    return result;
  });
  var _stringToPath = stringToPath;

  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }

    return result;
  }

  var _arrayMap = arrayMap;

  var INFINITY = 1 / 0;
  var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
      symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;

  function baseToString(value) {
    if (typeof value == 'string') {
      return value;
    }

    if (isArray_1(value)) {
      return _arrayMap(value, baseToString) + '';
    }

    if (isSymbol_1(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }

    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }

  var _baseToString = baseToString;

  function toString(value) {
    return value == null ? '' : _baseToString(value);
  }

  var toString_1 = toString;

  function castPath(value, object) {
    if (isArray_1(value)) {
      return value;
    }

    return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
  }

  var _castPath = castPath;

  var INFINITY$1 = 1 / 0;

  function toKey(value) {
    if (typeof value == 'string' || isSymbol_1(value)) {
      return value;
    }

    var result = value + '';
    return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
  }

  var _toKey = toKey;

  function baseGet(object, path) {
    path = _castPath(path, object);
    var index = 0,
        length = path.length;

    while (object != null && index < length) {
      object = object[_toKey(path[index++])];
    }

    return index && index == length ? object : undefined;
  }

  var _baseGet = baseGet;

  function get(object, path, defaultValue) {
    var result = object == null ? undefined : _baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }

  var get_1 = get;

  function baseHasIn(object, key) {
    return object != null && key in Object(object);
  }

  var _baseHasIn = baseHasIn;

  function hasPath(object, path, hasFunc) {
    path = _castPath(path, object);
    var index = -1,
        length = path.length,
        result = false;

    while (++index < length) {
      var key = _toKey(path[index]);

      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }

      object = object[key];
    }

    if (result || ++index != length) {
      return result;
    }

    length = object == null ? 0 : object.length;
    return !!length && isLength_1(length) && _isIndex(key, length) && (isArray_1(object) || isArguments_1(object));
  }

  var _hasPath = hasPath;

  function hasIn(object, path) {
    return object != null && _hasPath(object, path, _baseHasIn);
  }

  var hasIn_1 = hasIn;

  var COMPARE_PARTIAL_FLAG$5 = 1,
      COMPARE_UNORDERED_FLAG$3 = 2;

  function baseMatchesProperty(path, srcValue) {
    if (_isKey(path) && _isStrictComparable(srcValue)) {
      return _matchesStrictComparable(_toKey(path), srcValue);
    }

    return function (object) {
      var objValue = get_1(object, path);
      return objValue === undefined && objValue === srcValue ? hasIn_1(object, path) : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
    };
  }

  var _baseMatchesProperty = baseMatchesProperty;

  function identity(value) {
    return value;
  }

  var identity_1 = identity;

  function baseProperty(key) {
    return function (object) {
      return object == null ? undefined : object[key];
    };
  }

  var _baseProperty = baseProperty;

  function basePropertyDeep(path) {
    return function (object) {
      return _baseGet(object, path);
    };
  }

  var _basePropertyDeep = basePropertyDeep;

  function property(path) {
    return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
  }

  var property_1 = property;

  function baseIteratee(value) {
    if (typeof value == 'function') {
      return value;
    }

    if (value == null) {
      return identity_1;
    }

    if (_typeof(value) == 'object') {
      return isArray_1(value) ? _baseMatchesProperty(value[0], value[1]) : _baseMatches(value);
    }

    return property_1(value);
  }

  var _baseIteratee = baseIteratee;

  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while (fromRight ? index-- : ++index < length) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }

    return -1;
  }

  var _baseFindIndex = baseFindIndex;

  function baseIsNaN(value) {
    return value !== value;
  }

  var _baseIsNaN = baseIsNaN;

  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }

    return -1;
  }

  var _strictIndexOf = strictIndexOf;

  function baseIndexOf(array, value, fromIndex) {
    return value === value ? _strictIndexOf(array, value, fromIndex) : _baseFindIndex(array, _baseIsNaN, fromIndex);
  }

  var _baseIndexOf = baseIndexOf;

  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && _baseIndexOf(array, value, 0) > -1;
  }

  var _arrayIncludes = arrayIncludes;

  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }

    return false;
  }

  var _arrayIncludesWith = arrayIncludesWith;

  function noop$1() {}

  var noop_1 = noop$1;

  var INFINITY$2 = 1 / 0;
  var createSet = !(_Set && 1 / _setToArray(new _Set([, -0]))[1] == INFINITY$2) ? noop_1 : function (values) {
    return new _Set(values);
  };
  var _createSet = createSet;

  var LARGE_ARRAY_SIZE$1 = 200;

  function baseUniq(array, iteratee, comparator) {
    var index = -1,
        includes = _arrayIncludes,
        length = array.length,
        isCommon = true,
        result = [],
        seen = result;

    if (comparator) {
      isCommon = false;
      includes = _arrayIncludesWith;
    } else if (length >= LARGE_ARRAY_SIZE$1) {
      var set = iteratee ? null : _createSet(array);

      if (set) {
        return _setToArray(set);
      }

      isCommon = false;
      includes = _cacheHas;
      seen = new _SetCache();
    } else {
      seen = iteratee ? [] : result;
    }

    outer: while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;

      if (isCommon && computed === computed) {
        var seenIndex = seen.length;

        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }

        if (iteratee) {
          seen.push(computed);
        }

        result.push(value);
      } else if (!includes(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }

        result.push(value);
      }
    }

    return result;
  }

  var _baseUniq = baseUniq;

  function uniqBy(array, iteratee) {
    return array && array.length ? _baseUniq(array, _baseIteratee(iteratee)) : [];
  }

  var uniqBy_1 = uniqBy;

  function uniq(array) {
    return array && array.length ? _baseUniq(array) : [];
  }

  var uniq_1 = uniq;

  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }

    return array;
  }

  var _arrayEach = arrayEach;

  var defineProperty = function () {
    try {
      var func = _getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }();

  var _defineProperty$1 = defineProperty;

  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && _defineProperty$1) {
      _defineProperty$1(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  var _baseAssignValue = baseAssignValue;

  var objectProto$d = Object.prototype;
  var hasOwnProperty$a = objectProto$d.hasOwnProperty;

  function assignValue(object, key, value) {
    var objValue = object[key];

    if (!(hasOwnProperty$a.call(object, key) && eq_1(objValue, value)) || value === undefined && !(key in object)) {
      _baseAssignValue(object, key, value);
    }
  }

  var _assignValue = assignValue;

  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }

      if (isNew) {
        _baseAssignValue(object, key, newValue);
      } else {
        _assignValue(object, key, newValue);
      }
    }

    return object;
  }

  var _copyObject = copyObject;

  function baseAssign(object, source) {
    return object && _copyObject(source, keys_1(source), object);
  }

  var _baseAssign = baseAssign;

  function nativeKeysIn(object) {
    var result = [];

    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }

    return result;
  }

  var _nativeKeysIn = nativeKeysIn;

  var objectProto$e = Object.prototype;
  var hasOwnProperty$b = objectProto$e.hasOwnProperty;

  function baseKeysIn(object) {
    if (!isObject_1(object)) {
      return _nativeKeysIn(object);
    }

    var isProto = _isPrototype(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$b.call(object, key)))) {
        result.push(key);
      }
    }

    return result;
  }

  var _baseKeysIn = baseKeysIn;

  function keysIn$1(object) {
    return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
  }

  var keysIn_1 = keysIn$1;

  function baseAssignIn(object, source) {
    return object && _copyObject(source, keysIn_1(source), object);
  }

  var _baseAssignIn = baseAssignIn;

  var _cloneBuffer = createCommonjsModule(function (module, exports) {
    var freeExports =  exports && !exports.nodeType && exports;
    var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? _root.Buffer : undefined,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }

      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }

    module.exports = cloneBuffer;
  });

  function copyArray(source, array) {
    var index = -1,
        length = source.length;
    array || (array = Array(length));

    while (++index < length) {
      array[index] = source[index];
    }

    return array;
  }

  var _copyArray = copyArray;

  function copySymbols(source, object) {
    return _copyObject(source, _getSymbols(source), object);
  }

  var _copySymbols = copySymbols;

  var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
  var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function (object) {
    var result = [];

    while (object) {
      _arrayPush(result, _getSymbols(object));
      object = _getPrototype(object);
    }

    return result;
  };
  var _getSymbolsIn = getSymbolsIn;

  function copySymbolsIn(source, object) {
    return _copyObject(source, _getSymbolsIn(source), object);
  }

  var _copySymbolsIn = copySymbolsIn;

  function getAllKeysIn(object) {
    return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
  }

  var _getAllKeysIn = getAllKeysIn;

  var objectProto$f = Object.prototype;
  var hasOwnProperty$c = objectProto$f.hasOwnProperty;

  function initCloneArray(array) {
    var length = array.length,
        result = new array.constructor(length);

    if (length && typeof array[0] == 'string' && hasOwnProperty$c.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }

    return result;
  }

  var _initCloneArray = initCloneArray;

  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
    return result;
  }

  var _cloneArrayBuffer = cloneArrayBuffer;

  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }

  var _cloneDataView = cloneDataView;

  var reFlags = /\w*$/;

  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }

  var _cloneRegExp = cloneRegExp;

  var symbolProto$2 = _Symbol ? _Symbol.prototype : undefined,
      symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined;

  function cloneSymbol(symbol) {
    return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
  }

  var _cloneSymbol = cloneSymbol;

  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  var _cloneTypedArray = cloneTypedArray;

  var boolTag$2 = '[object Boolean]',
      dateTag$2 = '[object Date]',
      mapTag$3 = '[object Map]',
      numberTag$2 = '[object Number]',
      regexpTag$2 = '[object RegExp]',
      setTag$3 = '[object Set]',
      stringTag$2 = '[object String]',
      symbolTag$2 = '[object Symbol]';
  var arrayBufferTag$2 = '[object ArrayBuffer]',
      dataViewTag$3 = '[object DataView]',
      float32Tag$1 = '[object Float32Array]',
      float64Tag$1 = '[object Float64Array]',
      int8Tag$1 = '[object Int8Array]',
      int16Tag$1 = '[object Int16Array]',
      int32Tag$1 = '[object Int32Array]',
      uint8Tag$1 = '[object Uint8Array]',
      uint8ClampedTag$1 = '[object Uint8ClampedArray]',
      uint16Tag$1 = '[object Uint16Array]',
      uint32Tag$1 = '[object Uint32Array]';

  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;

    switch (tag) {
      case arrayBufferTag$2:
        return _cloneArrayBuffer(object);

      case boolTag$2:
      case dateTag$2:
        return new Ctor(+object);

      case dataViewTag$3:
        return _cloneDataView(object, isDeep);

      case float32Tag$1:
      case float64Tag$1:
      case int8Tag$1:
      case int16Tag$1:
      case int32Tag$1:
      case uint8Tag$1:
      case uint8ClampedTag$1:
      case uint16Tag$1:
      case uint32Tag$1:
        return _cloneTypedArray(object, isDeep);

      case mapTag$3:
        return new Ctor();

      case numberTag$2:
      case stringTag$2:
        return new Ctor(object);

      case regexpTag$2:
        return _cloneRegExp(object);

      case setTag$3:
        return new Ctor();

      case symbolTag$2:
        return _cloneSymbol(object);
    }
  }

  var _initCloneByTag = initCloneByTag;

  var objectCreate = Object.create;

  var baseCreate = function () {
    function object() {}

    return function (proto) {
      if (!isObject_1(proto)) {
        return {};
      }

      if (objectCreate) {
        return objectCreate(proto);
      }

      object.prototype = proto;
      var result = new object();
      object.prototype = undefined;
      return result;
    };
  }();

  var _baseCreate = baseCreate;

  function initCloneObject(object) {
    return typeof object.constructor == 'function' && !_isPrototype(object) ? _baseCreate(_getPrototype(object)) : {};
  }

  var _initCloneObject = initCloneObject;

  var mapTag$4 = '[object Map]';

  function baseIsMap(value) {
    return isObjectLike_1(value) && _getTag(value) == mapTag$4;
  }

  var _baseIsMap = baseIsMap;

  var nodeIsMap = _nodeUtil && _nodeUtil.isMap;
  var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;
  var isMap_1 = isMap;

  var setTag$4 = '[object Set]';

  function baseIsSet(value) {
    return isObjectLike_1(value) && _getTag(value) == setTag$4;
  }

  var _baseIsSet = baseIsSet;

  var nodeIsSet = _nodeUtil && _nodeUtil.isSet;
  var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;
  var isSet_1 = isSet;

  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;
  var argsTag$3 = '[object Arguments]',
      arrayTag$2 = '[object Array]',
      boolTag$3 = '[object Boolean]',
      dateTag$3 = '[object Date]',
      errorTag$2 = '[object Error]',
      funcTag$2 = '[object Function]',
      genTag$1 = '[object GeneratorFunction]',
      mapTag$5 = '[object Map]',
      numberTag$3 = '[object Number]',
      objectTag$4 = '[object Object]',
      regexpTag$3 = '[object RegExp]',
      setTag$5 = '[object Set]',
      stringTag$3 = '[object String]',
      symbolTag$3 = '[object Symbol]',
      weakMapTag$2 = '[object WeakMap]';
  var arrayBufferTag$3 = '[object ArrayBuffer]',
      dataViewTag$4 = '[object DataView]',
      float32Tag$2 = '[object Float32Array]',
      float64Tag$2 = '[object Float64Array]',
      int8Tag$2 = '[object Int8Array]',
      int16Tag$2 = '[object Int16Array]',
      int32Tag$2 = '[object Int32Array]',
      uint8Tag$2 = '[object Uint8Array]',
      uint8ClampedTag$2 = '[object Uint8ClampedArray]',
      uint16Tag$2 = '[object Uint16Array]',
      uint32Tag$2 = '[object Uint32Array]';
  var cloneableTags = {};
  cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] = cloneableTags[arrayBufferTag$3] = cloneableTags[dataViewTag$4] = cloneableTags[boolTag$3] = cloneableTags[dateTag$3] = cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] = cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] = cloneableTags[int32Tag$2] = cloneableTags[mapTag$5] = cloneableTags[numberTag$3] = cloneableTags[objectTag$4] = cloneableTags[regexpTag$3] = cloneableTags[setTag$5] = cloneableTags[stringTag$3] = cloneableTags[symbolTag$3] = cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] = cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
  cloneableTags[errorTag$2] = cloneableTags[funcTag$2] = cloneableTags[weakMapTag$2] = false;

  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result,
        isDeep = bitmask & CLONE_DEEP_FLAG,
        isFlat = bitmask & CLONE_FLAT_FLAG,
        isFull = bitmask & CLONE_SYMBOLS_FLAG;

    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }

    if (result !== undefined) {
      return result;
    }

    if (!isObject_1(value)) {
      return value;
    }

    var isArr = isArray_1(value);

    if (isArr) {
      result = _initCloneArray(value);

      if (!isDeep) {
        return _copyArray(value, result);
      }
    } else {
      var tag = _getTag(value),
          isFunc = tag == funcTag$2 || tag == genTag$1;

      if (isBuffer_1(value)) {
        return _cloneBuffer(value, isDeep);
      }

      if (tag == objectTag$4 || tag == argsTag$3 || isFunc && !object) {
        result = isFlat || isFunc ? {} : _initCloneObject(value);

        if (!isDeep) {
          return isFlat ? _copySymbolsIn(value, _baseAssignIn(result, value)) : _copySymbols(value, _baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }

        result = _initCloneByTag(value, tag, isDeep);
      }
    }

    stack || (stack = new _Stack());
    var stacked = stack.get(value);

    if (stacked) {
      return stacked;
    }

    stack.set(value, result);

    if (isSet_1(value)) {
      value.forEach(function (subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap_1(value)) {
      value.forEach(function (subValue, key) {
        result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
    }

    var keysFunc = isFull ? isFlat ? _getAllKeysIn : _getAllKeys : isFlat ? keysIn : keys_1;
    var props = isArr ? undefined : keysFunc(value);
    _arrayEach(props || value, function (subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      }

      _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  var _baseClone = baseClone;

  var CLONE_DEEP_FLAG$1 = 1,
      CLONE_SYMBOLS_FLAG$1 = 4;

  function cloneDeep(value) {
    return _baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1);
  }

  var cloneDeep_1 = cloneDeep;

  var file$4 = "src/components/editor/index.svelte";

  function create_fragment$4(ctx) {
    var div;
    var t;
    var div_class_value;
    var div_style_value;
    var current;
    var mdtool = new Tool({
      props: {
        toollist: ctx[5],
        fullscreen: ctx[1],
        splitscreen: ctx[2],
        preview: ctx[3]
      },
      $$inline: true
    });
    mdtool.$on("insertHandler", ctx[12]);
    mdtool.$on("controlHandler", ctx[11]);
    mdtool.$on("toolRightKeyBoard", ctx[13]);
    var mdbody = new Body({
      props: {
        scroll: ctx[9],
        value: ctx[0],
        xss: ctx[8],
        EditorBox: ctx[4],
        placeholder: ctx[7],
        preview: ctx[3]
      },
      $$inline: true
    });
    mdbody.$on("changed", ctx[10]);
    mdbody.$on("mountKeyBoard", ctx[14]);
    mdbody.$on("destroyKeyBoard", ctx[15]);
    var block = {
      c: function create() {
        div = element("div");
        create_component(mdtool.$$.fragment);
        t = space();
        create_component(mdbody.$$.fragment);
        attr_dev(div, "class", div_class_value = "md-editor md-border-box " + (ctx[2] ? "md-split" : "") + " " + (ctx[3] ? "md-preview" : "") + " " + (ctx[1] ? "md-full-screen" : "") + " svelte-jjy8wz");
        attr_dev(div, "style", div_style_value = ctx[6] ? "height:".concat(ctx[6], "px") : "500px");
        attr_dev(div, "zgj-mdeditor", "");
        add_location(div, file$4, 1, 0, 36);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        mount_component(mdtool, div, null);
        append_dev(div, t);
        mount_component(mdbody, div, null);
        ctx[43](div);
        current = true;
      },
      p: function update(ctx, dirty) {
        var mdtool_changes = {};
        if (dirty[0] & 32) mdtool_changes.toollist = ctx[5];
        if (dirty[0] & 2) mdtool_changes.fullscreen = ctx[1];
        if (dirty[0] & 4) mdtool_changes.splitscreen = ctx[2];
        if (dirty[0] & 8) mdtool_changes.preview = ctx[3];
        mdtool.$set(mdtool_changes);
        var mdbody_changes = {};
        if (dirty[0] & 512) mdbody_changes.scroll = ctx[9];
        if (dirty[0] & 1) mdbody_changes.value = ctx[0];
        if (dirty[0] & 256) mdbody_changes.xss = ctx[8];
        if (dirty[0] & 16) mdbody_changes.EditorBox = ctx[4];
        if (dirty[0] & 128) mdbody_changes.placeholder = ctx[7];
        if (dirty[0] & 8) mdbody_changes.preview = ctx[3];
        mdbody.$set(mdbody_changes);

        if (!current || dirty[0] & 14 && div_class_value !== (div_class_value = "md-editor md-border-box " + (ctx[2] ? "md-split" : "") + " " + (ctx[3] ? "md-preview" : "") + " " + (ctx[1] ? "md-full-screen" : "") + " svelte-jjy8wz")) {
          attr_dev(div, "class", div_class_value);
        }

        if (!current || dirty[0] & 64 && div_style_value !== (div_style_value = ctx[6] ? "height:".concat(ctx[6], "px") : "500px")) {
          attr_dev(div, "style", div_style_value);
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(mdtool.$$.fragment, local);
        transition_in(mdbody.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(mdtool.$$.fragment, local);
        transition_out(mdbody.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        destroy_component(mdtool);
        destroy_component(mdbody);
        ctx[43](null);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$4.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$4($$self, $$props, $$invalidate) {
    var dispatch = createEventDispatcher();
    var hasRecordInsert = false;
    var hasRecordTimer = null;
    var hasRecordRangeTimer = null;
    var stack = new Stack({
      value: value,
      range: null
    });
    var oldStatus = true;
    var height = $$props.height;
    var value = $$props.value;
    var placeholder = $$props.placeholder;
    var xss = $$props.xss;
    var scroll = $$props.scroll;
    var fullscreen = $$props.fullscreen;
    var splitscreen = $$props.splitscreen;
    var preview = $$props.preview;
    var EditorBox = $$props.EditorBox;
    var toolbar = $$props.toolbar;
    var _$$props$toollist = $$props.toollist,
        toollist = _$$props$toollist === void 0 ? [] : _$$props$toollist;

    var setToolBar = function setToolBar(_) {
      var array = toolbar && isArray_1(toolbar) && toolbar.length ? _toConsumableArray(toolbar) : null;
      var tools = cloneDeep_1(ToolLeft);
      $$invalidate(5, toollist = []);

      if (array) {
        for (var i = 0, l = tools.length; i < l; i++) {
          var all = tools[i];

          for (var j = 0, t = array.length; j < t; j++) {
            var tool = array[j];

            if (all.name == tool) {
              toollist.push(all);
            }
          }
        }
      } else {
        $$invalidate(5, toollist = _toConsumableArray(tools));
      }
    };

    var setRecord = function setRecord(_) {
      if (hasRecordInsert) return false;
      var range = null;

      try {
        range = getSelection(EditorBox);
      } catch (ex) {}

      stack.push({
        value: value,
        range: range,
        scroll: scroll
      });
    };

    var clearTimerEvent = function clearTimerEvent(_) {
      if (hasRecordRangeTimer) clearTimeout(hasRecordRangeTimer);
      if (hasRecordTimer) clearTimeout(hasRecordTimer);
    };

    var controlCmd = function controlCmd(item) {
      clearTimerEvent();
      var box = getTextEl(EditorBox);

      var _ref = item || {},
          historyValue = _ref.value,
          _ref$range = _ref.range,
          range = _ref$range === void 0 ? {} : _ref$range;

      if (historyValue) {
        $$invalidate(0, value = historyValue);
        hasRecordRangeTimer = setTimeout(function () {
          if (box) box.focus();
          range = range || {
            start: historyValue.length,
            end: historyValue.length
          };
          setSelection(EditorBox, range.start, range.end);
        }, 0);
      }

      hasRecordTimer = setTimeout(function () {
        return hasRecordInsert = false;
      }, 500);
    };

    var markedUndo = function markedUndo(_) {
      hasRecordInsert = true;
      var item = stack.undo();
      controlCmd(item);
    };

    var markedRedo = function markedRedo(_) {
      hasRecordInsert = true;
      var item = stack.redo();
      controlCmd(item);
    };

    var findRecentIndex = function findRecentIndex(array, value) {
      var arr = array.concat([]);
      arr.push(value);
      arr.sort(function (a, b) {
        return a - b;
      });
      var index = arr.indexOf(value);

      if (index === 0) {
        return arr[index + 1];
      } else if (index === array.length - 1) {
        return arr[index - 1];
      }

      var resultIndex = arr[index] - arr[index - 1] > arr[index + 1] - arr[index] ? index + 1 : index - 1;
      return arr[resultIndex];
    };

    var addIndent = function addIndent(event) {
      var range = getSelection(EditorBox);
      var checkedVal = getSelectText(EditorBox, range.start, range.end);

      if (checkedVal == "") {
        insertBeforeText(EditorBox, INDENT, 0, function (fnValue) {
          return $$invalidate(0, value = fnValue);
        });
      } else {
        var val = checkedVal.split(EOL);
        val = val.map(function (item) {
          return item == "" ? item : INDENT + item;
        }).join(EOL);
        insertAfterText(EditorBox, val, function (fnValue) {
          return $$invalidate(0, value = fnValue);
        });
      }

      event.preventDefault();
    };

    var removeIndent = function removeIndent(event) {
      var range = getSelection(EditorBox);
      var checkedVal = getSelectText(EditorBox, range.start, range.end);

      if (checkedVal == "") {
        var isIndent = getSelectText(EditorBox, range.start - INDENT.length, range.end) == INDENT;

        if (isIndent) {
          var index = value.indexOf(EOL);
          var array = [];

          while (index !== -1) {
            array.push(index);
            index = value.indexOf(EOL, index + 1);
          }

          array = array.filter(function (item) {
            return item > range.end;
          });

          if (isArray_1(array) && array.length) {
            var endIndex = findRecentIndex(array, range.end);

            var _checkedVal = getSelectText(EditorBox, range.start - INDENT.length, endIndex);

            _checkedVal = _checkedVal.replace(INDENT, "");

            if (_checkedVal) {
              setSelection(EditorBox, range.start - INDENT.length, endIndex);
              insertAfterText(EditorBox, _checkedVal, function (fnValue) {
                return value == fnValue;
              });
              setSelection(EditorBox, range.start - INDENT.length, range.end - INDENT.length);
            }
          }
        }
      } else {
        var indentReg = new RegExp("^" + INDENT);
        var val = checkedVal.split(EOL);
        val = val.map(function (item) {
          return indentReg.test(item) ? item.replace(INDENT, "") : item;
        }).join(EOL);
        insertBeforeText(EditorBox, val, 0, function (fnValue) {
          $$invalidate(0, value = fnValue);
          var newRange = getSelection(EditorBox);
          setSelection(EditorBox, range.start, newRange.end);
        }, true);
      }

      event.preventDefault();
    };

    var getBeforeTextInLine = function getBeforeTextInLine() {
      var revise = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var range = getSelection(EditorBox);
      var text = getSelectText(EditorBox, 0, range.end);
      var array = text.split(EOL);
      return isArray_1(array) && array.length ? array[array.length - revise] : "";
    };

    var autoComplete = function autoComplete(event) {
      var text = getBeforeTextInLine();

      if (text) {
        var prefix = text.substr(0, 2);
        var reg = /^\d+\./;
        var range, replaceInsertText;

        if (prefix == "* " || prefix == "+ " || prefix == "- " || prefix == "> ") {
          if (prefix.length < text.length) {
            insertBeforeText(EditorBox, EOL + prefix, 0, function (fnValue) {
              return $$invalidate(0, value = fnValue);
            });
          } else {
            range = getSelection(EditorBox);
            replaceInsertText = getSelectText(EditorBox, range.start - prefix.length, range.end);
            replaceInsertText = replaceInsertText.replace(replaceInsertText, "");
            setSelection(EditorBox, range.start - prefix.length, range.end);
            insertBeforeText(EditorBox, EOL + replaceInsertText, -prefix.length, function (fnValue) {
              return $$invalidate(0, value = fnValue);
            });
          }
        } else if (reg.test(text.trim())) {
          var textTrim = text.trim();
          var num = textTrim.split(".")[0];

          if (textTrim.length > num.length + 1) {
            var autoNum = parseInt(num) + 1;
            var insertText = EOL + autoNum + ". ";
            insertBeforeText(EditorBox, insertText, 0, function (fnValue) {
              return $$invalidate(0, value = fnValue);
            });
          } else {
            range = getSelection(EditorBox);
            replaceInsertText = getSelectText(EditorBox, range.start - text.length, range.end);
            replaceInsertText = replaceInsertText.replace(replaceInsertText, "");
            setSelection(EditorBox, range.start - text.length, range.end);
            insertBeforeText(EditorBox, EOL + replaceInsertText, -text.length, function (fnValue) {
              return $$invalidate(0, value = fnValue);
            });
          }
        } else {
          insertBeforeText(EditorBox, EOL, 0, function (fnValue) {
            return $$invalidate(0, value = fnValue);
          });
        }
      } else {
        insertBeforeText(EditorBox, EOL, 0, function (fnValue) {
          return $$invalidate(0, value = fnValue);
        });
      }

      event.preventDefault();
    };

    var keepIndent = function keepIndent(event) {
      var text = getBeforeTextInLine(2);

      if (text) {
        var indent = text.split(INDENT);

        if (indent.length >= 2) {
          var count = 0;
          var buffer = [];

          while (indent[count] == "" && count < indent.length - 1) {
            count++;
            buffer.push(INDENT);
          }

          insertBeforeText(EditorBox, buffer.join(""), 0, function (fnValue) {
            return $$invalidate(0, value = fnValue);
          });
        }
      }

      event.preventDefault();
    };

    var getInfo = function getInfo() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "left";
      var toolLeft = [].concat(_toConsumableArray(toollist), _toConsumableArray(defaultKeyboard));
      var toolRight = cloneDeep_1(ToolRight);
      var bool = type == "left";
      var tools = [];

      if (bool) {
        tools = uniqBy_1(toolLeft, "key") || [];
      } else {
        tools = toolRight;
      }

      var keys = tools.map(function (item) {
        return item.key;
      }).filter(function (item) {
        return item;
      }).join(",");
      return {
        keys: keys,
        tools: tools
      };
    };

    var getItem = function getItem() {
      var tool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      return tool.find(function (item) {
        return item.key == key;
      });
    };

    var hasMultiple = function hasMultiple(_) {
      var oMultipleBox = jq.$(".md-editor[zgj-mdeditor]", document, true);
      return oMultipleBox.length > 1;
    };

    var toolKeyBoard = function toolKeyBoard(type) {
      var _ref2 = getInfo(type) || {},
          keys = _ref2.keys,
          tools = _ref2.tools;

      var bool = type == "left";
      if (!keys) return false;
      keyboard.bind(keys, function (event, handler) {
        var multiple = hasMultiple();
        if (multiple) return false;
        var key = handler.key;

        if (key) {
          var item = getItem(tools, key);

          if (item) {
            if (bool) {
              insertHandler({
                detail: {
                  item: item
                }
              });
            } else {
              controlHandler({
                detail: {
                  item: item
                }
              });
            }
          }
        }
      }, true, EditorBox);
    };

    var changed = function changed(_ref3) {
      var detail = _ref3.detail;
      return $$invalidate(0, value = detail);
    };

    var controlHandler = function controlHandler(_ref4) {
      var _ref4$detail = _ref4.detail,
          detail = _ref4$detail === void 0 ? {} : _ref4$detail;
      var item = detail.item;

      if (item.name == "splitscreen") {
        $$invalidate(2, splitscreen = !splitscreen);

        if (splitscreen) {
          $$invalidate(3, preview = false);
        }
      } else if (item.name == "preview") {
        $$invalidate(3, preview = !preview);

        if (preview) {
          oldStatus = splitscreen;
          $$invalidate(2, splitscreen = false);
        } else {
          $$invalidate(2, splitscreen = oldStatus);
        }
      } else if (item.name == "fullscreen") {
        $$invalidate(1, fullscreen = !fullscreen);
      }
    };

    var insertHandler = function insertHandler(_ref5) {
      var _ref5$detail = _ref5.detail,
          detail = _ref5$detail === void 0 ? {} : _ref5$detail;
      if (preview) return false;
      var _detail$item = detail.item,
          item = _detail$item === void 0 ? {} : _detail$item;

      if (item && typeof item.handler === "function") {
        item.handler();
      } else {
        item.handler = function (_) {
          var _item$code = item.code,
              code = _item$code === void 0 ? "" : _item$code,
              _item$range = item.range,
              range = _item$range === void 0 ? 0 : _item$range,
              name = item.name;

          if (name == "undo") {
            markedUndo();
          } else if (name == "redo") {
            markedRedo();
          } else {
            if (!code) return false;
            insertBeforeText(EditorBox, code, range, function (val) {
              return $$invalidate(0, value = val);
            });
          }
        };

        item.handler();
      }
    };

    var toolLeftKeyBoard = function toolLeftKeyBoard(_) {
      return toolKeyBoard("left");
    };

    var toolRightKeyBoard = function toolRightKeyBoard(_) {
      return toolKeyBoard("right");
    };

    var mountKeyBoard = function mountKeyBoard(_) {
      keyboard.bind("tab", function (event) {
        throttle_1(function () {
          addIndent(event);
        }, 100)();
      }, false, EditorBox);
      keyboard.bind("shift+tab", function (event) {
        throttle_1(function () {
          removeIndent(event);
        }, 100)();
      }, false, EditorBox);
      keyboard.bind("enter", function (event) {
        throttle_1(function () {
          autoComplete(event);
          keepIndent(event);
        }, 100)();
      }, true, EditorBox);
    };

    var destroyKeyBoard = function destroyKeyBoard(_) {
      keyboard.unbind("enter,tab,shift+tab");
      destroyToolKeyBoard();
    };

    var destroyKeyLeft = function destroyKeyLeft(_) {
      var _getInfo = getInfo("left"),
          keys = _getInfo.keys;

      if (!keys) return false;
      keyboard.unbind(keys);
    };

    var destroyKeyRight = function destroyKeyRight(_) {
      var _getInfo2 = getInfo("right"),
          keys = _getInfo2.keys;

      if (!keys) return false;
      keyboard.unbind(keys);
    };

    var destroyToolKeyBoard = function destroyToolKeyBoard(_) {
      destroyKeyLeft();
      destroyKeyRight();
    };

    onMount(function () {});
    onDestroy(function () {
      clearTimerEvent();
      destroyKeyBoard();
    });
    var writable_props = ["height", "value", "placeholder", "xss", "scroll", "fullscreen", "splitscreen", "preview", "EditorBox", "toolbar", "toollist"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Editor> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Editor", $$slots, []);

    function div_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        $$invalidate(4, EditorBox = $$value);
      });
    }

    $$self.$set = function ($$props) {
      if ("height" in $$props) $$invalidate(6, height = $$props.height);
      if ("value" in $$props) $$invalidate(0, value = $$props.value);
      if ("placeholder" in $$props) $$invalidate(7, placeholder = $$props.placeholder);
      if ("xss" in $$props) $$invalidate(8, xss = $$props.xss);
      if ("scroll" in $$props) $$invalidate(9, scroll = $$props.scroll);
      if ("fullscreen" in $$props) $$invalidate(1, fullscreen = $$props.fullscreen);
      if ("splitscreen" in $$props) $$invalidate(2, splitscreen = $$props.splitscreen);
      if ("preview" in $$props) $$invalidate(3, preview = $$props.preview);
      if ("EditorBox" in $$props) $$invalidate(4, EditorBox = $$props.EditorBox);
      if ("toolbar" in $$props) $$invalidate(16, toolbar = $$props.toolbar);
      if ("toollist" in $$props) $$invalidate(5, toollist = $$props.toollist);
    };

    $$self.$capture_state = function () {
      return {
        onMount: onMount,
        onDestroy: onDestroy,
        createEventDispatcher: createEventDispatcher,
        keyboard: keyboard,
        MdTool: Tool,
        MdBody: Body,
        insertBeforeText: insertBeforeText,
        insertAfterText: insertAfterText,
        getSelection: getSelection,
        setSelection: setSelection,
        getSelectText: getSelectText,
        getTextEl: getTextEl,
        marked: marked$1,
        defaultKeyboard: defaultKeyboard,
        ToolLeft: ToolLeft,
        ToolRight: ToolRight,
        EOL: EOL,
        INDENT: INDENT,
        jq: jq,
        Stack: Stack,
        isArray: isArray_1,
        throttle: throttle_1,
        uniqBy: uniqBy_1,
        uniq: uniq_1,
        cloneDeep: cloneDeep_1,
        dispatch: dispatch,
        hasRecordInsert: hasRecordInsert,
        hasRecordTimer: hasRecordTimer,
        hasRecordRangeTimer: hasRecordRangeTimer,
        stack: stack,
        oldStatus: oldStatus,
        height: height,
        value: value,
        placeholder: placeholder,
        xss: xss,
        scroll: scroll,
        fullscreen: fullscreen,
        splitscreen: splitscreen,
        preview: preview,
        EditorBox: EditorBox,
        toolbar: toolbar,
        toollist: toollist,
        setToolBar: setToolBar,
        setRecord: setRecord,
        clearTimerEvent: clearTimerEvent,
        controlCmd: controlCmd,
        markedUndo: markedUndo,
        markedRedo: markedRedo,
        findRecentIndex: findRecentIndex,
        addIndent: addIndent,
        removeIndent: removeIndent,
        getBeforeTextInLine: getBeforeTextInLine,
        autoComplete: autoComplete,
        keepIndent: keepIndent,
        getInfo: getInfo,
        getItem: getItem,
        hasMultiple: hasMultiple,
        toolKeyBoard: toolKeyBoard,
        changed: changed,
        controlHandler: controlHandler,
        insertHandler: insertHandler,
        toolLeftKeyBoard: toolLeftKeyBoard,
        toolRightKeyBoard: toolRightKeyBoard,
        mountKeyBoard: mountKeyBoard,
        destroyKeyBoard: destroyKeyBoard,
        destroyKeyLeft: destroyKeyLeft,
        destroyKeyRight: destroyKeyRight,
        destroyToolKeyBoard: destroyToolKeyBoard
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("hasRecordInsert" in $$props) hasRecordInsert = $$props.hasRecordInsert;
      if ("hasRecordTimer" in $$props) hasRecordTimer = $$props.hasRecordTimer;
      if ("hasRecordRangeTimer" in $$props) hasRecordRangeTimer = $$props.hasRecordRangeTimer;
      if ("stack" in $$props) stack = $$props.stack;
      if ("oldStatus" in $$props) oldStatus = $$props.oldStatus;
      if ("height" in $$props) $$invalidate(6, height = $$props.height);
      if ("value" in $$props) $$invalidate(0, value = $$props.value);
      if ("placeholder" in $$props) $$invalidate(7, placeholder = $$props.placeholder);
      if ("xss" in $$props) $$invalidate(8, xss = $$props.xss);
      if ("scroll" in $$props) $$invalidate(9, scroll = $$props.scroll);
      if ("fullscreen" in $$props) $$invalidate(1, fullscreen = $$props.fullscreen);
      if ("splitscreen" in $$props) $$invalidate(2, splitscreen = $$props.splitscreen);
      if ("preview" in $$props) $$invalidate(3, preview = $$props.preview);
      if ("EditorBox" in $$props) $$invalidate(4, EditorBox = $$props.EditorBox);
      if ("toolbar" in $$props) $$invalidate(16, toolbar = $$props.toolbar);
      if ("toollist" in $$props) $$invalidate(5, toollist = $$props.toollist);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    $$self.$$.update = function () {
      if ($$self.$$.dirty[0] & 65536) {
         setToolBar();
      }

      if ($$self.$$.dirty[0] & 1) {
         setRecord();
      }

      if ($$self.$$.dirty[0] & 32) {
         (function () {
          destroyKeyLeft();
          toolLeftKeyBoard();
        }());
      }
    };

    return [value, fullscreen, splitscreen, preview, EditorBox, toollist, height, placeholder, xss, scroll, changed, controlHandler, insertHandler, toolRightKeyBoard, mountKeyBoard, destroyKeyBoard, toolbar, hasRecordInsert, hasRecordTimer, hasRecordRangeTimer, oldStatus, dispatch, stack, setToolBar, setRecord, clearTimerEvent, controlCmd, markedUndo, markedRedo, findRecentIndex, addIndent, removeIndent, getBeforeTextInLine, autoComplete, keepIndent, getInfo, getItem, hasMultiple, toolKeyBoard, toolLeftKeyBoard, destroyKeyLeft, destroyKeyRight, destroyToolKeyBoard, div_binding];
  }

  var Editor = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Editor, _SvelteComponentDev);

    var _super = _createSuper(Editor);

    function Editor(options) {
      var _this;

      _classCallCheck(this, Editor);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {
        height: 6,
        value: 0,
        placeholder: 7,
        xss: 8,
        scroll: 9,
        fullscreen: 1,
        splitscreen: 2,
        preview: 3,
        EditorBox: 4,
        toolbar: 16,
        toollist: 5
      }, [-1, -1]);
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Editor",
        options: options,
        id: create_fragment$4.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (ctx[6] === undefined && !("height" in props)) {
        console.warn("<Editor> was created without expected prop 'height'");
      }

      if (ctx[0] === undefined && !("value" in props)) {
        console.warn("<Editor> was created without expected prop 'value'");
      }

      if (ctx[7] === undefined && !("placeholder" in props)) {
        console.warn("<Editor> was created without expected prop 'placeholder'");
      }

      if (ctx[8] === undefined && !("xss" in props)) {
        console.warn("<Editor> was created without expected prop 'xss'");
      }

      if (ctx[9] === undefined && !("scroll" in props)) {
        console.warn("<Editor> was created without expected prop 'scroll'");
      }

      if (ctx[1] === undefined && !("fullscreen" in props)) {
        console.warn("<Editor> was created without expected prop 'fullscreen'");
      }

      if (ctx[2] === undefined && !("splitscreen" in props)) {
        console.warn("<Editor> was created without expected prop 'splitscreen'");
      }

      if (ctx[3] === undefined && !("preview" in props)) {
        console.warn("<Editor> was created without expected prop 'preview'");
      }

      if (ctx[4] === undefined && !("EditorBox" in props)) {
        console.warn("<Editor> was created without expected prop 'EditorBox'");
      }

      if (ctx[16] === undefined && !("toolbar" in props)) {
        console.warn("<Editor> was created without expected prop 'toolbar'");
      }

      return _this;
    }

    _createClass(Editor, [{
      key: "height",
      get: function get() {
        return this.$$.ctx[6];
      },
      set: function set(height) {
        this.$set({
          height: height
        });
        flush();
      }
    }, {
      key: "value",
      get: function get() {
        return this.$$.ctx[0];
      },
      set: function set(value) {
        this.$set({
          value: value
        });
        flush();
      }
    }, {
      key: "placeholder",
      get: function get() {
        return this.$$.ctx[7];
      },
      set: function set(placeholder) {
        this.$set({
          placeholder: placeholder
        });
        flush();
      }
    }, {
      key: "xss",
      get: function get() {
        return this.$$.ctx[8];
      },
      set: function set(xss) {
        this.$set({
          xss: xss
        });
        flush();
      }
    }, {
      key: "scroll",
      get: function get() {
        return this.$$.ctx[9];
      },
      set: function set(scroll) {
        this.$set({
          scroll: scroll
        });
        flush();
      }
    }, {
      key: "fullscreen",
      get: function get() {
        return this.$$.ctx[1];
      },
      set: function set(fullscreen) {
        this.$set({
          fullscreen: fullscreen
        });
        flush();
      }
    }, {
      key: "splitscreen",
      get: function get() {
        return this.$$.ctx[2];
      },
      set: function set(splitscreen) {
        this.$set({
          splitscreen: splitscreen
        });
        flush();
      }
    }, {
      key: "preview",
      get: function get() {
        return this.$$.ctx[3];
      },
      set: function set(preview) {
        this.$set({
          preview: preview
        });
        flush();
      }
    }, {
      key: "EditorBox",
      get: function get() {
        return this.$$.ctx[4];
      },
      set: function set(EditorBox) {
        this.$set({
          EditorBox: EditorBox
        });
        flush();
      }
    }, {
      key: "toolbar",
      get: function get() {
        return this.$$.ctx[16];
      },
      set: function set(toolbar) {
        this.$set({
          toolbar: toolbar
        });
        flush();
      }
    }, {
      key: "toollist",
      get: function get() {
        return this.$$.ctx[5];
      },
      set: function set(toollist) {
        this.$set({
          toollist: toollist
        });
        flush();
      }
    }]);

    return Editor;
  }(SvelteComponentDev);

  var name = "@zhanggujun/editor";
  var description = "基于svelte,marked,xss的简单markdown编辑器";
  var main = "dist/editor.min.js";
  var style = "dist/editor.min.css";
  var version = "1.0.12";
  var bugs = {
      url: "https://github.com/zhanggujun/editor/issues"
  };
  var repository = {
      type: "git",
      url: "https://github.com/zhanggujun/editor"
  };
  var keywords = ["svelte","marked","xss","markdown","editor","@zhanggujun/editor"];
  var author = "zhanggujun";
  var license = "MIT";
  var scripts = {
      "clear:dev": "rm -rf public/dist",
      "clear:build": "rm -rf build",
      build: "npm run clear:build && rollup -c && gulp",
      dev: "npm run clear:dev && rollup -c -w",
      publish: "npm publish --access=public --registry=https://registry.npmjs.org/"
  };
  var devDependencies = {
      "@babel/core": "^7.7.7",
      "@babel/plugin-external-helpers": "^7.7.4",
      "@babel/plugin-transform-runtime": "^7.7.6",
      "@babel/preset-env": "^7.7.7",
      "@rollup/plugin-node-resolve": "^6.0.0",
      autoprefixer: "^9.7.1",
      cnpm: "^6.1.1",
      cssnano: "^4.1.10",
      del: "^5.1.0",
      gulp: "^4.0.2",
      "gulp-autoprefixer": "^7.0.1",
      "gulp-babel": "^8.0.0",
      "gulp-clean-css": "^4.2.0",
      "gulp-concat": "^2.6.1",
      "gulp-cssnano": "^2.1.3",
      "gulp-rename": "^2.0.0",
      install: "^0.13.0",
      jest: "^24.9.0",
      "node-sass": "^4.13.0",
      rollup: "^1.12.0",
      "rollup-plugin-babel": "^4.3.3",
      "rollup-plugin-commonjs": "^10.0.0",
      "rollup-plugin-copy": "^3.1.0",
      "rollup-plugin-css-only": "^1.0.0",
      "rollup-plugin-filesize": "^6.2.1",
      "rollup-plugin-json": "^4.0.0",
      "rollup-plugin-livereload": "^1.0.0",
      "rollup-plugin-nodent": "^0.2.2",
      "rollup-plugin-serve": "^1.0.1",
      "rollup-plugin-svelte": "^5.0.3",
      "rollup-plugin-terser": "^5.1.2",
      "rollup-plugin-uglify": "^6.0.3",
      svelte: "^3.16.7",
      "svelte-preprocess": "^3.2.6"
  };
  var dependencies = {
      "github-markdown-css": "^3.0.1",
      "highlight.js": "^9.17.1",
      lodash: "^4.17.15",
      marked: "^0.8.0",
      "shortcut-key": "^1.0.0",
      xss: "^1.0.6"
  };
  var files = ["dist/*","README.md"];
  var pkg = {
      "private": false,
      name: name,
      description: description,
      main: main,
      style: style,
      version: version,
      bugs: bugs,
      repository: repository,
      keywords: keywords,
      author: author,
      license: license,
      scripts: scripts,
      devDependencies: devDependencies,
      dependencies: dependencies,
      files: files
  };


  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2UuanNvbihvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxHQUFBLENBQUksT0FBTztBQUNsQixPQUFPLEdBQUEsQ0FBSSxjQUFjO0FBQ3pCLE9BQU8sR0FBQSxDQUFJLE9BQU87QUFDbEIsT0FBTyxHQUFBLENBQUksUUFBUTtBQUNuQixPQUFPLEdBQUEsQ0FBSSxVQUFVO0FBQ3JCLE9BQU8sR0FBQSxDQUFJLE9BQU87SUFDakIsS0FBSzs7QUFFTixPQUFPLEdBQUEsQ0FBSSxhQUFhO0lBQ3ZCLE1BQU0sS0FEaUIsQ0FBQTtJQUV2QixLQUFLOztBQUVOLE9BQU8sR0FBQSxDQUFJLFdBQVcsQ0FDckIsU0FDQSxTQUNBLE1BQ0EsV0FDQSxTQUNBO0FBRUQsT0FBTyxHQUFBLENBQUksU0FBUztBQUNwQixPQUFPLEdBQUEsQ0FBSSxVQUFVO0FBQ3JCLE9BQU8sR0FBQSxDQUFJLFVBQVU7SUFDcEIsYUFBYSxvQkFETyxDQUFBO0lBRXBCLGVBQWUsY0FGSyxDQUFBO0lBR3BCLE9BQU8sMENBSGEsQ0FBQTtJQUlwQixLQUFLLG1DQUplLENBQUE7SUFLcEIsU0FBUzs7QUFFVixPQUFPLEdBQUEsQ0FBSSxrQkFBa0I7SUFDNUIsZUFBZSxRQURhLENBQUE7SUFFNUIsa0NBQWtDLFFBRk4sQ0FBQTtJQUc1QixtQ0FBbUMsUUFIUCxDQUFBO0lBSTVCLHFCQUFxQixRQUpPLENBQUE7SUFLNUIsK0JBQStCLFFBTEgsQ0FBQTtJQU01QixjQUFjLFFBTmMsQ0FBQTtJQU81QixNQUFNLFFBUHNCLENBQUE7SUFRNUIsU0FBUyxTQVJtQixDQUFBO0lBUzVCLEtBQUssUUFUdUIsQ0FBQTtJQVU1QixNQUFNLFFBVnNCLENBQUE7SUFXNUIscUJBQXFCLFFBWE8sQ0FBQTtJQVk1QixjQUFjLFFBWmMsQ0FBQTtJQWE1QixrQkFBa0IsUUFiVSxDQUFBO0lBYzVCLGVBQWUsUUFkYSxDQUFBO0lBZTVCLGdCQUFnQixRQWZZLENBQUE7SUFnQjVCLGVBQWUsUUFoQmEsQ0FBQTtJQWlCNUIsU0FBUyxTQWpCbUIsQ0FBQTtJQWtCNUIsTUFBTSxTQWxCc0IsQ0FBQTtJQW1CNUIsYUFBYSxTQW5CZSxDQUFBO0lBb0I1QixRQUFRLFNBcEJvQixDQUFBO0lBcUI1Qix1QkFBdUIsUUFyQkssQ0FBQTtJQXNCNUIsMEJBQTBCLFNBdEJFLENBQUE7SUF1QjVCLHNCQUFzQixRQXZCTSxDQUFBO0lBd0I1QiwwQkFBMEIsUUF4QkUsQ0FBQTtJQXlCNUIsMEJBQTBCLFFBekJFLENBQUE7SUEwQjVCLHNCQUFzQixRQTFCTSxDQUFBO0lBMkI1Qiw0QkFBNEIsUUEzQkEsQ0FBQTtJQTRCNUIsd0JBQXdCLFFBNUJJLENBQUE7SUE2QjVCLHVCQUF1QixRQTdCSyxDQUFBO0lBOEI1Qix3QkFBd0IsUUE5QkksQ0FBQTtJQStCNUIsd0JBQXdCLFFBL0JJLENBQUE7SUFnQzVCLHdCQUF3QixRQWhDSSxDQUFBO0lBaUM1QixRQUFRLFNBakNvQixDQUFBO0lBa0M1QixxQkFBcUI7O0FBRXRCLE9BQU8sR0FBQSxDQUFJLGVBQWU7SUFDekIsdUJBQXVCLFFBREUsQ0FBQTtJQUV6QixnQkFBZ0IsU0FGUyxDQUFBO0lBR3pCLFFBQVEsVUFIaUIsQ0FBQTtJQUl6QixRQUFRLFFBSmlCLENBQUE7SUFLekIsZ0JBQWdCLFFBTFMsQ0FBQTtJQU16QixLQUFLOztBQUVOLE9BQU8sR0FBQSxDQUFJLFFBQVEsQ0FDbEIsU0FDQTtBQUVELGVBQWU7SUFDZCxXQUFXLEtBREcsQ0FBQTtJQUVkLE1BQU0sSUFGUSxDQUFBO0lBR2QsYUFBYSxXQUhDLENBQUE7SUFJZCxNQUFNLElBSlEsQ0FBQTtJQUtkLE9BQU8sS0FMTyxDQUFBO0lBTWQsU0FBUyxPQU5LLENBQUE7SUFPZCxNQUFNLElBUFEsQ0FBQTtJQVFkLFlBQVksVUFSRSxDQUFBO0lBU2QsVUFBVSxRQVRJLENBQUE7SUFVZCxRQUFRLE1BVk0sQ0FBQTtJQVdkLFNBQVMsT0FYSyxDQUFBO0lBWWQsU0FBUyxPQVpLLENBQUE7SUFhZCxpQkFBaUIsZUFiSCxDQUFBO0lBY2QsY0FBYyxZQWRBLENBQUE7SUFlZCxPQUFPOztBQTVGUiIsImZpbGUiOiJwYWNrYWdlLmpzb24ob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBuYW1lID0gXCJAemhhbmdndWp1bi9lZGl0b3JcIjtcbmV4cG9ydCB2YXIgZGVzY3JpcHRpb24gPSBcIvqOc3ZlbHRlLG1hcmtlZCx4c3OEgFVtYXJrZG93bhaRaFwiO1xuZXhwb3J0IHZhciBtYWluID0gXCJkaXN0L2VkaXRvci5taW4uanNcIjtcbmV4cG9ydCB2YXIgc3R5bGUgPSBcImRpc3QvZWRpdG9yLm1pbi5jc3NcIjtcbmV4cG9ydCB2YXIgdmVyc2lvbiA9IFwiMS4wLjEyXCI7XG5leHBvcnQgdmFyIGJ1Z3MgPSB7XG5cdHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vemhhbmdndWp1bi9lZGl0b3IvaXNzdWVzXCJcbn07XG5leHBvcnQgdmFyIHJlcG9zaXRvcnkgPSB7XG5cdHR5cGU6IFwiZ2l0XCIsXG5cdHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vemhhbmdndWp1bi9lZGl0b3JcIlxufTtcbmV4cG9ydCB2YXIga2V5d29yZHMgPSBbXG5cdFwic3ZlbHRlXCIsXG5cdFwibWFya2VkXCIsXG5cdFwieHNzXCIsXG5cdFwibWFya2Rvd25cIixcblx0XCJlZGl0b3JcIixcblx0XCJAemhhbmdndWp1bi9lZGl0b3JcIlxuXTtcbmV4cG9ydCB2YXIgYXV0aG9yID0gXCJ6aGFuZ2d1anVuXCI7XG5leHBvcnQgdmFyIGxpY2Vuc2UgPSBcIk1JVFwiO1xuZXhwb3J0IHZhciBzY3JpcHRzID0ge1xuXHRcImNsZWFyOmRldlwiOiBcInJtIC1yZiBwdWJsaWMvZGlzdFwiLFxuXHRcImNsZWFyOmJ1aWxkXCI6IFwicm0gLXJmIGJ1aWxkXCIsXG5cdGJ1aWxkOiBcIm5wbSBydW4gY2xlYXI6YnVpbGQgJiYgcm9sbHVwIC1jICYmIGd1bHBcIixcblx0ZGV2OiBcIm5wbSBydW4gY2xlYXI6ZGV2ICYmIHJvbGx1cCAtYyAtd1wiLFxuXHRwdWJsaXNoOiBcIm5wbSBwdWJsaXNoIC0tYWNjZXNzPXB1YmxpYyAtLXJlZ2lzdHJ5PWh0dHBzOi8vcmVnaXN0cnkubnBtanMub3JnL1wiXG59O1xuZXhwb3J0IHZhciBkZXZEZXBlbmRlbmNpZXMgPSB7XG5cdFwiQGJhYmVsL2NvcmVcIjogXCJeNy43LjdcIixcblx0XCJAYmFiZWwvcGx1Z2luLWV4dGVybmFsLWhlbHBlcnNcIjogXCJeNy43LjRcIixcblx0XCJAYmFiZWwvcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lXCI6IFwiXjcuNy42XCIsXG5cdFwiQGJhYmVsL3ByZXNldC1lbnZcIjogXCJeNy43LjdcIixcblx0XCJAcm9sbHVwL3BsdWdpbi1ub2RlLXJlc29sdmVcIjogXCJeNi4wLjBcIixcblx0YXV0b3ByZWZpeGVyOiBcIl45LjcuMVwiLFxuXHRjbnBtOiBcIl42LjEuMVwiLFxuXHRjc3NuYW5vOiBcIl40LjEuMTBcIixcblx0ZGVsOiBcIl41LjEuMFwiLFxuXHRndWxwOiBcIl40LjAuMlwiLFxuXHRcImd1bHAtYXV0b3ByZWZpeGVyXCI6IFwiXjcuMC4xXCIsXG5cdFwiZ3VscC1iYWJlbFwiOiBcIl44LjAuMFwiLFxuXHRcImd1bHAtY2xlYW4tY3NzXCI6IFwiXjQuMi4wXCIsXG5cdFwiZ3VscC1jb25jYXRcIjogXCJeMi42LjFcIixcblx0XCJndWxwLWNzc25hbm9cIjogXCJeMi4xLjNcIixcblx0XCJndWxwLXJlbmFtZVwiOiBcIl4yLjAuMFwiLFxuXHRpbnN0YWxsOiBcIl4wLjEzLjBcIixcblx0amVzdDogXCJeMjQuOS4wXCIsXG5cdFwibm9kZS1zYXNzXCI6IFwiXjQuMTMuMFwiLFxuXHRyb2xsdXA6IFwiXjEuMTIuMFwiLFxuXHRcInJvbGx1cC1wbHVnaW4tYmFiZWxcIjogXCJeNC4zLjNcIixcblx0XCJyb2xsdXAtcGx1Z2luLWNvbW1vbmpzXCI6IFwiXjEwLjAuMFwiLFxuXHRcInJvbGx1cC1wbHVnaW4tY29weVwiOiBcIl4zLjEuMFwiLFxuXHRcInJvbGx1cC1wbHVnaW4tY3NzLW9ubHlcIjogXCJeMS4wLjBcIixcblx0XCJyb2xsdXAtcGx1Z2luLWZpbGVzaXplXCI6IFwiXjYuMi4xXCIsXG5cdFwicm9sbHVwLXBsdWdpbi1qc29uXCI6IFwiXjQuMC4wXCIsXG5cdFwicm9sbHVwLXBsdWdpbi1saXZlcmVsb2FkXCI6IFwiXjEuMC4wXCIsXG5cdFwicm9sbHVwLXBsdWdpbi1ub2RlbnRcIjogXCJeMC4yLjJcIixcblx0XCJyb2xsdXAtcGx1Z2luLXNlcnZlXCI6IFwiXjEuMC4xXCIsXG5cdFwicm9sbHVwLXBsdWdpbi1zdmVsdGVcIjogXCJeNS4wLjNcIixcblx0XCJyb2xsdXAtcGx1Z2luLXRlcnNlclwiOiBcIl41LjEuMlwiLFxuXHRcInJvbGx1cC1wbHVnaW4tdWdsaWZ5XCI6IFwiXjYuMC4zXCIsXG5cdHN2ZWx0ZTogXCJeMy4xNi43XCIsXG5cdFwic3ZlbHRlLXByZXByb2Nlc3NcIjogXCJeMy4yLjZcIlxufTtcbmV4cG9ydCB2YXIgZGVwZW5kZW5jaWVzID0ge1xuXHRcImdpdGh1Yi1tYXJrZG93bi1jc3NcIjogXCJeMy4wLjFcIixcblx0XCJoaWdobGlnaHQuanNcIjogXCJeOS4xNy4xXCIsXG5cdGxvZGFzaDogXCJeNC4xNy4xNVwiLFxuXHRtYXJrZWQ6IFwiXjAuOC4wXCIsXG5cdFwic2hvcnRjdXQta2V5XCI6IFwiXjEuMC4wXCIsXG5cdHhzczogXCJeMS4wLjZcIlxufTtcbmV4cG9ydCB2YXIgZmlsZXMgPSBbXG5cdFwiZGlzdC8qXCIsXG5cdFwiUkVBRE1FLm1kXCJcbl07XG5leHBvcnQgZGVmYXVsdCB7XG5cdFwicHJpdmF0ZVwiOiBmYWxzZSxcblx0bmFtZTogbmFtZSxcblx0ZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuXHRtYWluOiBtYWluLFxuXHRzdHlsZTogc3R5bGUsXG5cdHZlcnNpb246IHZlcnNpb24sXG5cdGJ1Z3M6IGJ1Z3MsXG5cdHJlcG9zaXRvcnk6IHJlcG9zaXRvcnksXG5cdGtleXdvcmRzOiBrZXl3b3Jkcyxcblx0YXV0aG9yOiBhdXRob3IsXG5cdGxpY2Vuc2U6IGxpY2Vuc2UsXG5cdHNjcmlwdHM6IHNjcmlwdHMsXG5cdGRldkRlcGVuZGVuY2llczogZGV2RGVwZW5kZW5jaWVzLFxuXHRkZXBlbmRlbmNpZXM6IGRlcGVuZGVuY2llcyxcblx0ZmlsZXM6IGZpbGVzXG59O1xuIl19

  var ToolBar = /*#__PURE__*/function () {
    function ToolBar(editor) {
      _classCallCheck(this, ToolBar);

      this.editor = editor;
    }

    _createClass(ToolBar, [{
      key: "has",
      value: function has(name) {
        if (!name) return false;
        var item = this.get(name);
        return item ? true : false;
      }
    }, {
      key: "_add",
      value: function _add(item) {
        var toollist = this.editor.toollist;
        var tools = [].concat(_toConsumableArray(toollist), [item]);
        return tools;
      }
    }, {
      key: "add",
      value: function add(item) {
        if (!isPlainObject_1(item) || !item.icon || !item.name) return false;
        var has = this.has(item.name);
        if (has) return false;

        var tools = this._add(item);

        this.editor.toollist = tools;
      }
    }, {
      key: "_del",
      value: function _del(name) {
        var toollist = this.editor.toollist;
        var findIndex = toollist.findIndex(function (item) {
          return item.name == name;
        });

        if (findIndex != -1) {
          toollist.splice(findIndex, 1);
        }

        return toollist;
      }
    }, {
      key: "del",
      value: function del(name) {
        if (!name) return false;
        var has = this.has(name);
        if (!has) return false;

        var tools = this._del(name);

        this.editor.toollist = tools;
      }
    }, {
      key: "_replace",
      value: function _replace(name, item) {
        var toollist = this.editor.toollist;
        var findIndex = toollist.findIndex(function (val) {
          return val.name == name;
        });
        if (findIndex == -1) return false;
        toollist.splice(findIndex, 1, item);
        return toollist;
      }
    }, {
      key: "replace",
      value: function replace(name, item) {
        if (!isPlainObject_1(item) || !item.icon || !item.name) return false;
        if (!name) return false;

        var tools = this._replace(name, item);

        this.editor.toollist = tools;
      }
    }, {
      key: "set",
      value: function set(item) {
        if (!isPlainObject_1(item) || !item.icon || !item.name) return false;
        var toollist = this.editor.toollist;
        var findIndex = toollist.findIndex(function (val) {
          return val.name == item.name;
        });

        if (findIndex == -1) {
          toollist = this._add(item);
        } else {
          toollist = this._replace(item.name, item);
        }

        this.editor.toollist = toollist;
      }
    }, {
      key: "get",
      value: function get(name) {
        if (!name) return false;
        var toollist = this.editor.toollist;
        return toollist.find(function (val) {
          return val.name == name;
        });
      }
    }]);

    return ToolBar;
  }();

  var getToolBar = function getToolBar(_) {
    return ['undo', 'redo', 'bold', 'italic', 'underline', 'strikethrough', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'quote', 'code', 'orderedlist', 'unorderedlist', 'link', 'table', 'line', 'image'];
  };

  var defaultOptions = function defaultOptions(_) {
    return {
      height: 400,
      value: '',
      xss: {},
      scroll: true,
      fullscreen: false,
      splitscreen: true,
      preview: false,
      placeholder: '输入内容 ...',
      toolbar: getToolBar()
    };
  };

  var Editor$1 = /*#__PURE__*/function () {
    function Editor$1(el) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Editor$1);

      var element = isElement_1(el) ? el : jq.$(el);
      if (!isElement_1(element)) throw new Error("target is not HTMLElement");
      var oTextarea = jq.$('textarea', element);
      if (isElement_1(oTextarea)) oTextarea.style.display = 'none';

      var _defaultOptions = defaultOptions();

      var _options = _objectSpread2(_objectSpread2({}, _defaultOptions), options);

      this.editor = new Editor({
        target: element,
        props: _objectSpread2({}, _options)
      });
      this.editor.set = this.editor.$set;
      this.editor.on = this.editor.$on;
      this.editor.destroy = this.editor.$destroy;
      this.toolbar = new ToolBar(this.editor);
      this.version = pkg.version;
    }

    _createClass(Editor$1, [{
      key: "insertAfterText",
      value: function insertAfterText$1(text) {
        var _this = this;

        insertAfterText(this.editor.EditorBox, text, function (value) {
          _this.editor.value = value;
        });
      }
    }, {
      key: "insertBeforeText",
      value: function insertBeforeText$1(text) {
        var _this2 = this;

        insertBeforeText(this.editor.EditorBox, text, 0, function (value) {
          _this2.editor.value = value;
        });
      }
    }, {
      key: "setText",
      value: function setText(value) {
        this.editor.value = value;
      }
    }, {
      key: "getText",
      value: function getText() {
        return this.editor.value;
      }
    }]);

    return Editor$1;
  }();

  var _MdEditor = function _MdEditor() {
    _classCallCheck(this, _MdEditor);

    this.MdCreate = Editor$1;
    this.MdMarked = marked$1;
  };

  var MdEditor = new _MdEditor();

  return MdEditor;

})));
