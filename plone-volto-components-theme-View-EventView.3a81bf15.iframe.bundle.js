"use strict";(self.webpackChunk_plone_volto=self.webpackChunk_plone_volto||[]).push([[3728],{"./src/components/theme/View/EventView.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var _home_runner_work_volto_highlight_block_volto_highlight_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_volto_highlight_block_volto_highlight_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/helpers/index.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Grid/Grid.js"),_plone_volto_components_theme_View_RenderBlocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/theme/View/RenderBlocks.jsx"),_plone_volto_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/index.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Container/Container.js"),_plone_volto_registry__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/registry.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const EventTextfieldView=({content:content})=>{const Image=_plone_volto_registry__WEBPACK_IMPORTED_MODULE_4__.default.getComponent({name:"Image"}).component;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,content.title&&__jsx("h1",{className:"documentFirstHeading"},content.title),content.description&&__jsx("p",{className:"documentDescription"},content.description),content.image&&__jsx(Image,{className:"document-image ui right floated image",item:content,imageField:"image",alt:""}),content.text&&__jsx("div",{dangerouslySetInnerHTML:{__html:(0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_1__.sp)(content.text.data)}}))},EventView=props=>{const{content:content}=props,Container=_plone_volto_registry__WEBPACK_IMPORTED_MODULE_4__.default.getComponent({name:"Container"}).component||semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.c;return __jsx(Container,{id:"page-document",className:"view-wrapper event-view"},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.c.Column,{width:7,className:"mobile hidden"},(0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_1__.I1)(content)?__jsx(_plone_volto_components_theme_View_RenderBlocks__WEBPACK_IMPORTED_MODULE_2__.c,props):__jsx(EventTextfieldView,props)),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.c.Column,{width:5,className:"mobile hidden"},__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_3__.WGZ,{content:content})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.c.Column,{width:12,only:"mobile"},(0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_1__.I1)(content)?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_plone_volto_components_theme_View_RenderBlocks__WEBPACK_IMPORTED_MODULE_2__.c,(0,_home_runner_work_volto_highlight_block_volto_highlight_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__.c)({},props,{content:(0,_home_runner_work_volto_highlight_block_volto_highlight_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__.c)((0,_home_runner_work_volto_highlight_block_volto_highlight_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__.c)({},content),{},{blocks_layout:{items:props.content.blocks_layout.items.slice(0,1)}})})),__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_3__.WGZ,{content:content,display_as:"div"}),__jsx(_plone_volto_components_theme_View_RenderBlocks__WEBPACK_IMPORTED_MODULE_2__.c,(0,_home_runner_work_volto_highlight_block_volto_highlight_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__.c)({},props,{content:(0,_home_runner_work_volto_highlight_block_volto_highlight_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__.c)((0,_home_runner_work_volto_highlight_block_volto_highlight_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__.c)({},content),{},{blocks_layout:{items:props.content.blocks_layout.items.slice(1)}})}))):__jsx(EventTextfieldView,props))))};__webpack_exports__.default=EventView,EventView.__docgenInfo={description:"EventView view component class.\n@function EventView\n@params {object} content Content object.\n@returns {string} Markup of the component.",methods:[],displayName:"EventView",props:{content:{description:"",type:{name:"shape",value:{title:{name:"string",required:!1},description:{name:"string",required:!1},text:{name:"shape",value:{data:{name:"string",required:!1}},required:!1},attendees:{name:"arrayOf",value:{name:"string"},required:!0},contact_email:{name:"string",required:!1},contact_name:{name:"string",required:!1},contact_phone:{name:"string",required:!1},end:{name:"string",required:!0},event_url:{name:"string",required:!1},location:{name:"string",required:!1},open_end:{name:"bool",required:!1},recurrence:{name:"any",required:!1},start:{name:"string",required:!0},subjects:{name:"arrayOf",value:{name:"string"},required:!0},whole_day:{name:"bool",required:!1}}},required:!0}}}}}]);