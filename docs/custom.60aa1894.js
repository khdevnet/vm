// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"..\\node_modules\\parcel-bundler\\src\\builtins\\bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"..\\node_modules\\parcel-bundler\\src\\builtins\\css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"..\\node_modules\\parcel-bundler\\src\\builtins\\bundle-url.js"}],"..\\src\\styles\\custom.css":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
        "col-1": "_col-1_194qy_11",
        "col-2": "_col-2_194qy_11",
        "col-3": "_col-3_194qy_11",
        "col-4": "_col-4_194qy_11",
        "col-5": "_col-5_194qy_11",
        "col-6": "_col-6_194qy_11",
        "col-7": "_col-7_194qy_11",
        "col-8": "_col-8_194qy_11",
        "col-9": "_col-9_194qy_11",
        "col-10": "_col-10_194qy_11",
        "col-11": "_col-11_194qy_11",
        "col-12": "_col-12_194qy_11",
        "col": "_col_194qy_11",
        "col-auto": "_col-auto_194qy_11",
        "col-sm-1": "_col-sm-1_194qy_11",
        "col-sm-2": "_col-sm-2_194qy_11",
        "col-sm-3": "_col-sm-3_194qy_11",
        "col-sm-4": "_col-sm-4_194qy_11",
        "col-sm-5": "_col-sm-5_194qy_11",
        "col-sm-6": "_col-sm-6_194qy_11",
        "col-sm-7": "_col-sm-7_194qy_11",
        "col-sm-8": "_col-sm-8_194qy_11",
        "col-sm-9": "_col-sm-9_194qy_11",
        "col-sm-10": "_col-sm-10_194qy_11",
        "col-sm-11": "_col-sm-11_194qy_11",
        "col-sm-12": "_col-sm-12_194qy_11",
        "col-sm": "_col-sm_194qy_11",
        "col-sm-auto": "_col-sm-auto_194qy_11",
        "col-md-1": "_col-md-1_194qy_11",
        "col-md-2": "_col-md-2_194qy_11",
        "col-md-3": "_col-md-3_194qy_11",
        "col-md-4": "_col-md-4_194qy_11",
        "col-md-5": "_col-md-5_194qy_11",
        "col-md-6": "_col-md-6_194qy_11",
        "col-md-7": "_col-md-7_194qy_11",
        "col-md-8": "_col-md-8_194qy_11",
        "col-md-9": "_col-md-9_194qy_11",
        "col-md-10": "_col-md-10_194qy_11",
        "col-md-11": "_col-md-11_194qy_11",
        "col-md-12": "_col-md-12_194qy_11",
        "col-md": "_col-md_194qy_11",
        "col-md-auto": "_col-md-auto_194qy_11",
        "col-lg-1": "_col-lg-1_194qy_11",
        "col-lg-2": "_col-lg-2_194qy_11",
        "col-lg-3": "_col-lg-3_194qy_11",
        "col-lg-4": "_col-lg-4_194qy_11",
        "col-lg-5": "_col-lg-5_194qy_11",
        "col-lg-6": "_col-lg-6_194qy_11",
        "col-lg-7": "_col-lg-7_194qy_11",
        "col-lg-8": "_col-lg-8_194qy_11",
        "col-lg-9": "_col-lg-9_194qy_11",
        "col-lg-10": "_col-lg-10_194qy_11",
        "col-lg-11": "_col-lg-11_194qy_11",
        "col-lg-12": "_col-lg-12_194qy_11",
        "col-lg": "_col-lg_194qy_11",
        "col-lg-auto": "_col-lg-auto_194qy_11",
        "col-xl-1": "_col-xl-1_194qy_11",
        "col-xl-2": "_col-xl-2_194qy_11",
        "col-xl-3": "_col-xl-3_194qy_11",
        "col-xl-4": "_col-xl-4_194qy_11",
        "col-xl-5": "_col-xl-5_194qy_11",
        "col-xl-6": "_col-xl-6_194qy_11",
        "col-xl-7": "_col-xl-7_194qy_11",
        "col-xl-8": "_col-xl-8_194qy_11",
        "col-xl-9": "_col-xl-9_194qy_11",
        "col-xl-10": "_col-xl-10_194qy_11",
        "col-xl-11": "_col-xl-11_194qy_11",
        "col-xl-12": "_col-xl-12_194qy_11",
        "col-xl": "_col-xl_194qy_11",
        "col-xl-auto": "_col-xl-auto_194qy_11",
        "main_container": "_main_container_194qy_21",
        "x_content": "_x_content_194qy_29",
        "x_panel": "_x_panel_194qy_43",
        "x_title": "_x_title_194qy_43",
        "container": "_container_194qy_73",
        "edit-bar": "_edit-bar_194qy_117",
        "edit-board": "_edit-board_194qy_131",
        "close-link": "_close-link_194qy_131",
        "add-widget-link": "_add-widget-link_194qy_145",
        "add-widget-button": "_add-widget-button_194qy_153",
        "panel_toolbox": "_panel_toolbox_194qy_163",
        "modal-header": "_modal-header_194qy_171",
        "close": "_close_194qy_131",
        "panel-loader": "_panel-loader_194qy_187"
};
},{"./background.png":[["background.fb95baea.png","..\\src\\styles\\background.png"],"..\\src\\styles\\background.png"],"_css_loader":"..\\node_modules\\parcel-bundler\\src\\builtins\\css-loader.js"}],"..\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '11453' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js"], null)