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
/******/ 					"__wbindgen_cb_forget": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_cb_forget"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_error_4bb6c2a97407129a": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_error_4bb6c2a97407129a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_59cb74e423758ede": function() {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_new_59cb74e423758ede"]();
/******/ 					},
/******/ 					"__wbg_stack_558ba5917b466edd": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_stack_558ba5917b466edd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Element_fc5de05fee1e0030": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_instanceof_Element_fc5de05fee1e0030"](p0i32);
/******/ 					},
/******/ 					"__wbg_setclassName_bc898343f6f3f5a6": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_setclassName_bc898343f6f3f5a6"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_classList_2aa73fdf17a29f68": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_classList_2aa73fdf17a29f68"](p0i32);
/******/ 					},
/******/ 					"__wbg_setinnerHTML_ebf37095d2177081": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_setinnerHTML_ebf37095d2177081"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_querySelector_51b1b6d5e1e35c4c": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_querySelector_51b1b6d5e1e35c4c"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getItem_6f2992539addebe8": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_getItem_6f2992539addebe8"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_setItem_56835e22c5609ad0": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_setItem_56835e22c5609ad0"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_get_03f5a798a35cf3a1": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_get_03f5a798a35cf3a1"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_set_6535f2e63385fcd4": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_set_6535f2e63385fcd4"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_length_934cf12fc6042868": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_length_934cf12fc6042868"](p0i32);
/******/ 					},
/******/ 					"__wbg_get_c5660d7999b12a8d": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_get_c5660d7999b12a8d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlElement_7e7a87e33735b8a3": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_instanceof_HtmlElement_7e7a87e33735b8a3"](p0i32);
/******/ 					},
/******/ 					"__wbg_dataset_b63c86dabbb357fb": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_dataset_b63c86dabbb357fb"](p0i32);
/******/ 					},
/******/ 					"__wbg_sethidden_15c1797390ff37ba": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_sethidden_15c1797390ff37ba"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_blur_7c4d6364af541085": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_blur_7c4d6364af541085"](p0i32);
/******/ 					},
/******/ 					"__wbg_focus_764ff7af03580982": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_focus_764ff7af03580982"](p0i32);
/******/ 					},
/******/ 					"__wbg_exception_9f5fa4ecb407e134": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_exception_9f5fa4ecb407e134"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Node_6266219467033646": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_instanceof_Node_6266219467033646"](p0i32);
/******/ 					},
/******/ 					"__wbg_parentElement_2260bddc557303f0": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_parentElement_2260bddc557303f0"](p0i32);
/******/ 					},
/******/ 					"__wbg_textContent_2f92c89d911e8458": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_textContent_2f92c89d911e8458"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_settextContent_1fb8e2642c9c164e": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_settextContent_1fb8e2642c9c164e"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_appendChild_c1802f48577b21f6": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_appendChild_c1802f48577b21f6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_isEqualNode_8092901093c2780f": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_isEqualNode_8092901093c2780f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_removeChild_9a521558bd3fd73e": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_removeChild_9a521558bd3fd73e"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_hash_a80add7590c75a0c": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_hash_a80add7590c75a0c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlInputElement_5f61a3d2d3d02410": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_instanceof_HtmlInputElement_5f61a3d2d3d02410"](p0i32);
/******/ 					},
/******/ 					"__wbg_checked_7c0dec85d367c6cb": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_checked_7c0dec85d367c6cb"](p0i32);
/******/ 					},
/******/ 					"__wbg_setchecked_8f4b67dbaf90811e": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_setchecked_8f4b67dbaf90811e"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_value_06af6d392334302f": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_value_06af6d392334302f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setvalue_ce3b7a6a03d76643": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_setvalue_ce3b7a6a03d76643"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_a633dbe0900c728a": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_instanceof_Window_a633dbe0900c728a"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_07444f1bbea314bb": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_document_07444f1bbea314bb"](p0i32);
/******/ 					},
/******/ 					"__wbg_localStorage_48f33617aec46f3f": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_localStorage_48f33617aec46f3f"](p0i32);
/******/ 					},
/******/ 					"__wbg_add_ffec1d1c7c637f02": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_add_ffec1d1c7c637f02"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_remove_f687c6830045d69d": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_remove_f687c6830045d69d"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_target_7c8691623acab2b6": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_target_7c8691623acab2b6"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_EventTarget_971d8789b99a766a": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_instanceof_EventTarget_971d8789b99a766a"](p0i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_9f325a58d77d2781": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_addEventListener_9f325a58d77d2781"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_db9f515ba1054ea4": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_addEventListener_db9f515ba1054ea4"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_removeEventListener_54932b092806fbeb": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_removeEventListener_54932b092806fbeb"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_location_bfe965ae49e868fd": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_location_bfe965ae49e868fd"](p0i32);
/******/ 					},
/******/ 					"__wbg_body_5f6496599a0f5214": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_body_5f6496599a0f5214"](p0i32);
/******/ 					},
/******/ 					"__wbg_createElement_5a267cb074dc073b": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_createElement_5a267cb074dc073b"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_querySelectorAll_b569b8d19e6ec9d7": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_querySelectorAll_b569b8d19e6ec9d7"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_KeyboardEvent_113766af8a69da33": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_instanceof_KeyboardEvent_113766af8a69da33"](p0i32);
/******/ 					},
/******/ 					"__wbg_keyCode_dd1ebde18a23b1d4": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_keyCode_dd1ebde18a23b1d4"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_function": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_is_function"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_object": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_is_object"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_ec28d6ba821801cb": function() {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_new_ec28d6ba821801cb"]();
/******/ 					},
/******/ 					"__wbg_isArray_c4a3026522b7f963": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_isArray_c4a3026522b7f963"](p0i32);
/******/ 					},
/******/ 					"__wbg_push_ffaa2df7422d3b4c": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_push_ffaa2df7422d3b4c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_shift_0df93fbad6082f66": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_shift_0df93fbad6082f66"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_ebdc90c3d1e4e55d": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_newnoargs_ebdc90c3d1e4e55d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_804d3ad7e8acd4d5": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_call_804d3ad7e8acd4d5"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_next_c08bf57a239475c3": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_next_c08bf57a239475c3"](p0i32);
/******/ 					},
/******/ 					"__wbg_next_3d521c5c088358fa": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_next_3d521c5c088358fa"](p0i32);
/******/ 					},
/******/ 					"__wbg_done_e784c64062606540": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_done_e784c64062606540"](p0i32);
/******/ 					},
/******/ 					"__wbg_value_11f53ed6202a1367": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_value_11f53ed6202a1367"](p0i32);
/******/ 					},
/******/ 					"__wbg_now_baf1a029473d526d": function() {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_now_baf1a029473d526d"]();
/******/ 					},
/******/ 					"__wbg_iterator_7ab2f711861ad076": function() {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_iterator_7ab2f711861ad076"]();
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
/******/ 					"__wbg_get_8fd175832d82a656": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_get_8fd175832d82a656"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_parse_79173bf664dcb05b": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_parse_79173bf664dcb05b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_stringify_83b4d8efb351c7a4": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_stringify_83b4d8efb351c7a4"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_boolean_get": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_boolean_get"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_rethrow": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_rethrow"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper268": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_closure_wrapper268"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper270": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_closure_wrapper270"](p0i32,p1i32,p2i32);
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
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./pkg/index_bg.wasm":"73fe6a667b6460e5c0d5"}[wasmModuleId] + ".module.wasm");
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

eval("// For more comments about what's going on here, check out the `hello_world`\n// example\nconst rust = Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./pkg */ \"./pkg/index.js\"));\n\nrust\n  .then(m => m.run())\n  .catch(console.error);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });