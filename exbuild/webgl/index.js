/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".index.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"./pkg/index_bg.wasm": function() {
/******/ 			return {
/******/ 				"./index.js": {
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_WebGlRenderingContext_3aadcbc31d1748d3": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_instanceof_WebGlRenderingContext_3aadcbc31d1748d3"](p0i32);
/******/ 					},
/******/ 					"__wbg_bufferData_985a5ff391474177": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_bufferData_985a5ff391474177"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_attachShader_9564db836e3d4ece": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_attachShader_9564db836e3d4ece"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_bindBuffer_6cc973b0a3488535": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_bindBuffer_6cc973b0a3488535"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_clear_c50cee241485d576": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_clear_c50cee241485d576"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_clearColor_ce7ee2c8c34d229d": function(p0i32,p1f32,p2f32,p3f32,p4f32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_clearColor_ce7ee2c8c34d229d"](p0i32,p1f32,p2f32,p3f32,p4f32);
/******/ 					},
/******/ 					"__wbg_compileShader_91ce1c5df480321c": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_compileShader_91ce1c5df480321c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createBuffer_1b29c13abf687b68": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_createBuffer_1b29c13abf687b68"](p0i32);
/******/ 					},
/******/ 					"__wbg_createProgram_0bbeea9ffc5daa63": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_createProgram_0bbeea9ffc5daa63"](p0i32);
/******/ 					},
/******/ 					"__wbg_createShader_cdd9f1769cd1de1e": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_createShader_cdd9f1769cd1de1e"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_drawArrays_dfc8bd56cfd2c50e": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_drawArrays_dfc8bd56cfd2c50e"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_enableVertexAttribArray_1b8360d81db7d6f0": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_enableVertexAttribArray_1b8360d81db7d6f0"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getProgramInfoLog_2a1da5b17664faa9": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_getProgramInfoLog_2a1da5b17664faa9"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getProgramParameter_ff1b7fa34d0991f5": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_getProgramParameter_ff1b7fa34d0991f5"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getShaderInfoLog_5a8842f27648dd20": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_getShaderInfoLog_5a8842f27648dd20"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getShaderParameter_9fe8d76217a4969c": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_getShaderParameter_9fe8d76217a4969c"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_linkProgram_cba038b57a3871ef": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_linkProgram_cba038b57a3871ef"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_shaderSource_57dcf3bb9d5a2045": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_shaderSource_57dcf3bb9d5a2045"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_useProgram_324a22a196d1f113": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_useProgram_324a22a196d1f113"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_vertexAttribPointer_0e306f7de4de676a": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_vertexAttribPointer_0e306f7de4de676a"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32);
/******/ 					},
/******/ 					"__wbg_getElementById_633c94a971ae0eb9": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_getElementById_633c94a971ae0eb9"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlCanvasElement_c6a06fc9a851a478": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_instanceof_HtmlCanvasElement_c6a06fc9a851a478"](p0i32);
/******/ 					},
/******/ 					"__wbg_getContext_2151b76e11a6eb39": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_getContext_2151b76e11a6eb39"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_a633dbe0900c728a": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_instanceof_Window_a633dbe0900c728a"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_07444f1bbea314bb": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_document_07444f1bbea314bb"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_ebdc90c3d1e4e55d": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_newnoargs_ebdc90c3d1e4e55d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_804d3ad7e8acd4d5": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_call_804d3ad7e8acd4d5"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_globalThis_48a5e9494e623f26": function() {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_globalThis_48a5e9494e623f26"]();
/******/ 					},
/******/ 					"__wbg_self_25067cb019cade42": function() {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_self_25067cb019cade42"]();
/******/ 					},
/******/ 					"__wbg_window_9e80200b35aa30f8": function() {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_window_9e80200b35aa30f8"]();
/******/ 					},
/******/ 					"__wbg_global_7583a634265a91fc": function() {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_global_7583a634265a91fc"]();
/******/ 					},
/******/ 					"__wbg_buffer_f897a8d316863411": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_buffer_f897a8d316863411"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithbyteoffsetandlength_7ccfa06426575282": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_newwithbyteoffsetandlength_7ccfa06426575282"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_boolean_get": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_boolean_get"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_rethrow": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_rethrow"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_memory"]();
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"1":["./pkg/index_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./pkg/index_bg.wasm":"522d7feb1be4b96b04e5"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// For more comments about what's going on here, check out the `hello_world`\n// example.\nPromise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./pkg */ \"./pkg/index.js\"))\n  .catch(console.error);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });