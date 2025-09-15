"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/v1/qrcode/route";
exports.ids = ["app/api/v1/qrcode/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fv1%2Fqrcode%2Froute&page=%2Fapi%2Fv1%2Fqrcode%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fv1%2Fqrcode%2Froute.ts&appDir=%2FUsers%2Fkunal%2Fagkb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkunal%2Fagkb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fv1%2Fqrcode%2Froute&page=%2Fapi%2Fv1%2Fqrcode%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fv1%2Fqrcode%2Froute.ts&appDir=%2FUsers%2Fkunal%2Fagkb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkunal%2Fagkb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_kunal_agkb_app_api_v1_qrcode_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/v1/qrcode/route.ts */ \"(rsc)/./app/api/v1/qrcode/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/v1/qrcode/route\",\n        pathname: \"/api/v1/qrcode\",\n        filename: \"route\",\n        bundlePath: \"app/api/v1/qrcode/route\"\n    },\n    resolvedPagePath: \"/Users/kunal/agkb/app/api/v1/qrcode/route.ts\",\n    nextConfigOutput,\n    userland: _Users_kunal_agkb_app_api_v1_qrcode_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/v1/qrcode/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ2MSUyRnFyY29kZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdjElMkZxcmNvZGUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ2MSUyRnFyY29kZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmt1bmFsJTJGYWdrYiUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZrdW5hbCUyRmFna2ImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ0o7QUFDekU7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vPzEyODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2t1bmFsL2Fna2IvYXBwL2FwaS92MS9xcmNvZGUvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3YxL3FyY29kZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3YxL3FyY29kZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdjEvcXJjb2RlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2t1bmFsL2Fna2IvYXBwL2FwaS92MS9xcmNvZGUvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3YxL3FyY29kZS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fv1%2Fqrcode%2Froute&page=%2Fapi%2Fv1%2Fqrcode%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fv1%2Fqrcode%2Froute.ts&appDir=%2FUsers%2Fkunal%2Fagkb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkunal%2Fagkb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/v1/qrcode/route.ts":
/*!************************************!*\
  !*** ./app/api/v1/qrcode/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   runtime: () => (/* binding */ runtime)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qrcode */ \"(rsc)/./node_modules/qrcode/lib/index.js\");\n\n\nconst runtime = \"nodejs\";\nasync function GET(req) {\n    const { searchParams } = new URL(req.url);\n    const text = searchParams.get(\"text\");\n    const widthParam = searchParams.get(\"w\");\n    const download = searchParams.get(\"download\") === \"1\";\n    if (!text) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Missing text\"\n    }, {\n        status: 400\n    });\n    try {\n        const u = new URL(text);\n        if (u.protocol !== \"http:\" && u.protocol !== \"https:\") {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invalid URL\"\n            }, {\n                status: 400\n            });\n        }\n    } catch  {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Invalid URL\"\n        }, {\n            status: 400\n        });\n    }\n    const width = Math.min(Math.max(Number(widthParam || 512), 128), 1024);\n    const bytes = await qrcode__WEBPACK_IMPORTED_MODULE_1__.toBuffer(text, {\n        width,\n        margin: 1,\n        errorCorrectionLevel: \"M\"\n    });\n    const ab = new ArrayBuffer(bytes.byteLength);\n    new Uint8Array(ab).set(bytes);\n    const headers = new Headers({\n        \"Content-Type\": \"image/png\",\n        \"Cache-Control\": \"public, max-age=31536000, immutable\"\n    });\n    if (download) {\n        const fileSafe = text.replace(/[^a-zA-Z0-9_-]+/g, \"_\").slice(0, 40) || \"qr\";\n        headers.set(\"Content-Disposition\", `attachment; filename=\"${fileSafe}.png\"`);\n    }\n    return new Response(ab, {\n        headers\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3YxL3FyY29kZS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ2Y7QUFFckIsTUFBTUUsVUFBVSxTQUFTO0FBRXpCLGVBQWVDLElBQUlDLEdBQVk7SUFDcEMsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJRixJQUFJRyxHQUFHO0lBQ3hDLE1BQU1DLE9BQU9ILGFBQWFJLEdBQUcsQ0FBQztJQUM5QixNQUFNQyxhQUFhTCxhQUFhSSxHQUFHLENBQUM7SUFDcEMsTUFBTUUsV0FBV04sYUFBYUksR0FBRyxDQUFDLGdCQUFnQjtJQUVsRCxJQUFJLENBQUNELE1BQU0sT0FBT1IscURBQVlBLENBQUNZLElBQUksQ0FBQztRQUFFQyxPQUFPO0lBQWUsR0FBRztRQUFFQyxRQUFRO0lBQUk7SUFFN0UsSUFBSTtRQUNGLE1BQU1DLElBQUksSUFBSVQsSUFBSUU7UUFDbEIsSUFBSU8sRUFBRUMsUUFBUSxLQUFLLFdBQVdELEVBQUVDLFFBQVEsS0FBSyxVQUFVO1lBQ3JELE9BQU9oQixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQWMsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ25FO0lBQ0YsRUFBRSxPQUFNO1FBQ04sT0FBT2QscURBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQWMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDbkU7SUFFQSxNQUFNRyxRQUFRQyxLQUFLQyxHQUFHLENBQUNELEtBQUtFLEdBQUcsQ0FBQ0MsT0FBT1gsY0FBYyxNQUFNLE1BQU07SUFFakUsTUFBTVksUUFBUSxNQUFNckIsNENBQWUsQ0FBQ08sTUFBTTtRQUFFUztRQUFPTyxRQUFRO1FBQUdDLHNCQUFzQjtJQUFJO0lBQ3hGLE1BQU1DLEtBQUssSUFBSUMsWUFBWUwsTUFBTU0sVUFBVTtJQUMzQyxJQUFJQyxXQUFXSCxJQUFJSSxHQUFHLENBQUNSO0lBRXZCLE1BQU1TLFVBQVUsSUFBSUMsUUFBUTtRQUMxQixnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ25CO0lBQ0EsSUFBSXJCLFVBQVU7UUFDWixNQUFNc0IsV0FBV3pCLEtBQUswQixPQUFPLENBQUMsb0JBQW9CLEtBQUtDLEtBQUssQ0FBQyxHQUFHLE9BQU87UUFDdkVKLFFBQVFELEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxzQkFBc0IsRUFBRUcsU0FBUyxLQUFLLENBQUM7SUFDN0U7SUFFQSxPQUFPLElBQUlHLFNBQVNWLElBQUk7UUFBRUs7SUFBUTtBQUNwQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9hcGkvdjEvcXJjb2RlL3JvdXRlLnRzPzE2NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgUVJDb2RlIGZyb20gXCJxcmNvZGVcIjtcblxuZXhwb3J0IGNvbnN0IHJ1bnRpbWUgPSBcIm5vZGVqc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogUmVxdWVzdCkge1xuICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXEudXJsKTtcbiAgY29uc3QgdGV4dCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ0ZXh0XCIpO1xuICBjb25zdCB3aWR0aFBhcmFtID0gc2VhcmNoUGFyYW1zLmdldChcIndcIik7XG4gIGNvbnN0IGRvd25sb2FkID0gc2VhcmNoUGFyYW1zLmdldChcImRvd25sb2FkXCIpID09PSBcIjFcIjtcblxuICBpZiAoIXRleHQpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIk1pc3NpbmcgdGV4dFwiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB1ID0gbmV3IFVSTCh0ZXh0KTtcbiAgICBpZiAodS5wcm90b2NvbCAhPT0gXCJodHRwOlwiICYmIHUucHJvdG9jb2wgIT09IFwiaHR0cHM6XCIpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkludmFsaWQgVVJMXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkludmFsaWQgVVJMXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgfVxuXG4gIGNvbnN0IHdpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgoTnVtYmVyKHdpZHRoUGFyYW0gfHwgNTEyKSwgMTI4KSwgMTAyNCk7XG5cbiAgY29uc3QgYnl0ZXMgPSBhd2FpdCBRUkNvZGUudG9CdWZmZXIodGV4dCwgeyB3aWR0aCwgbWFyZ2luOiAxLCBlcnJvckNvcnJlY3Rpb25MZXZlbDogXCJNXCIgfSk7XG4gIGNvbnN0IGFiID0gbmV3IEFycmF5QnVmZmVyKGJ5dGVzLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShhYikuc2V0KGJ5dGVzIGFzIFVpbnQ4QXJyYXkpO1xuXG4gIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJpbWFnZS9wbmdcIixcbiAgICBcIkNhY2hlLUNvbnRyb2xcIjogXCJwdWJsaWMsIG1heC1hZ2U9MzE1MzYwMDAsIGltbXV0YWJsZVwiLFxuICB9KTtcbiAgaWYgKGRvd25sb2FkKSB7XG4gICAgY29uc3QgZmlsZVNhZmUgPSB0ZXh0LnJlcGxhY2UoL1teYS16QS1aMC05Xy1dKy9nLCBcIl9cIikuc2xpY2UoMCwgNDApIHx8IFwicXJcIjtcbiAgICBoZWFkZXJzLnNldChcIkNvbnRlbnQtRGlzcG9zaXRpb25cIiwgYGF0dGFjaG1lbnQ7IGZpbGVuYW1lPVwiJHtmaWxlU2FmZX0ucG5nXCJgKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoYWIsIHsgaGVhZGVycyB9KTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJRUkNvZGUiLCJydW50aW1lIiwiR0VUIiwicmVxIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwidGV4dCIsImdldCIsIndpZHRoUGFyYW0iLCJkb3dubG9hZCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInUiLCJwcm90b2NvbCIsIndpZHRoIiwiTWF0aCIsIm1pbiIsIm1heCIsIk51bWJlciIsImJ5dGVzIiwidG9CdWZmZXIiLCJtYXJnaW4iLCJlcnJvckNvcnJlY3Rpb25MZXZlbCIsImFiIiwiQXJyYXlCdWZmZXIiLCJieXRlTGVuZ3RoIiwiVWludDhBcnJheSIsInNldCIsImhlYWRlcnMiLCJIZWFkZXJzIiwiZmlsZVNhZmUiLCJyZXBsYWNlIiwic2xpY2UiLCJSZXNwb25zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/v1/qrcode/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/qrcode","vendor-chunks/pngjs","vendor-chunks/dijkstrajs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fv1%2Fqrcode%2Froute&page=%2Fapi%2Fv1%2Fqrcode%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fv1%2Fqrcode%2Froute.ts&appDir=%2FUsers%2Fkunal%2Fagkb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkunal%2Fagkb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();