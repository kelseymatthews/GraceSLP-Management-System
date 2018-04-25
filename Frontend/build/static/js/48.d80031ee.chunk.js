webpackJsonp([48],{1753:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function r(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}function a(n){var e=n.Notes.toJS();return{notes:e.notes,selectedId:e.selectedId,colors:e.colors,seectedColor:e.seectedColor}}Object.defineProperty(e,"__esModule",{value:!0});var l=t(0),d=t.n(l),p=t(63),s=t(114),c=t(389),f=t(2455),x=t(683),h=t(677),u=t(378),m=t(2224),g=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),b=c.a.changeNote,w=c.a.addNote,y=c.a.editNote,N=c.a.deleteNote,v=c.a.changeColor,j=p.s.Header,O=p.s.Content,C=function(n){function e(n){o(this,e);var t=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return t.updateNote=t.updateNote.bind(t),t}return r(e,n),g(e,[{key:"updateNote",value:function(n){var e=this.props;(0,e.editNote)(e.selectedId,n.target.value)}},{key:"render",value:function(){var n=this.props,e=n.notes,t=n.selectedId,o=n.changeNote,i=n.deleteNote,r=n.addNote,a=n.colors,l=n.seectedColor,s=n.changeColor,c=void 0!==t?e.filter(function(n){return n.id===t})[0]:null;return d.a.createElement(m.b,{className:"isomorphicNoteComponent"},d.a.createElement("div",{style:{width:"340px"},className:"isoNoteListSidebar"},d.a.createElement(f.a,{notes:e,selectedId:t,changeNote:o,deleteNote:i,colors:a})),d.a.createElement(p.s,{className:"isoNotepadWrapper"},d.a.createElement(j,{className:"isoHeader"},void 0!==t?d.a.createElement("div",{className:"isoColorChooseWrapper"},d.a.createElement(x.a,{colors:a,changeColor:s,seectedColor:l})," ",d.a.createElement("span",null,d.a.createElement(u.a,{id:"notes.ChoseColor"}))):"",d.a.createElement(h.b,{type:"primary",className:"isoAddNoteBtn",onClick:r},d.a.createElement(u.a,{id:"notes.addNote"}))),d.a.createElement(O,{className:"isoNoteEditingArea"},void 0!==t?d.a.createElement("textarea",{className:"isoNoteTextbox",value:c.note,onChange:this.updateNote,autoFocus:!0}):"")))}}]),e}(l.Component);e.default=Object(s.b)(a,{addNote:w,editNote:y,deleteNote:N,changeNote:b,changeColor:v})(C)},2224:function(n,e,t){"use strict";function o(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}t.d(e,"a",function(){return f});var i=t(62),r=t(88),a=(t.n(r),t(113)),l=t(112),d=o(["\n  padding: 50px 35px;\n  display: flex;\n  height: 100%;\n  min-height: 300px;\n  background: none;\n\n  @media only screen and (max-width: 767px) {\n    padding: 40px 20px;\n    height: auto;\n    flex-direction: column;\n\n    &.ant-layout.ant-layout-has-sider {\n      flex-direction: column;\n    }\n  }\n\n  @media only screen and (min-width: 767px) and (max-width: 990px) {\n    padding: 50px 20px;\n  }\n\n  .isoNoteListSidebar {\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 0;\n    "," background: #ffffff;\n    border-right: ","px solid\n      ",";\n    border-left: ","px solid\n      ",";\n\n    @media only screen and (min-width: 767px) and (max-width: 990px) {\n      width: 260px !important;\n      flex: 0 0 260px !important;\n      max-width: none !important;\n      min-width: 0 !important;\n    }\n    @media only screen and (max-width: 767px) {\n      width: auto !important;\n      max-width: 100% !important;\n      min-width: 0 !important;\n      margin-bottom: 30px;\n      flex: 0 !important;\n      overflow: hidden;\n      overflow-y: auto;\n    }\n  }\n\n  .isoNotepadWrapper {\n    background: #ffffff;\n\n    .isoHeader {\n      height: auto;\n      line-height: inherit;\n      padding: 20px 30px;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      flex-wrap: wrap;\n      flex-direction: row;\n      background-color: #ffffff;\n      border-bottom: 1px solid ",";\n\n      @media only screen and (max-width: 480px) {\n        padding: 20px;\n      }\n\n      @media only screen and (max-width: 400px) {\n        flex-direction: column;\n        justify-content: center;\n        align-items: flex-start;\n      }\n\n      .isoColorChooseWrapper {\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n        flex-direction: row;\n        margin-right: ",";\n        margin-left: ",";\n\n        span {\n          font-size: 13px;\n          color: ",";\n        }\n\n        .isoColorChooser {\n          width: 20px;\n          height: 20px;\n          cursor: pointer;\n          border: 0;\n          margin: ",";\n          padding: 0;\n          ",";\n        }\n      }\n\n      .isoAddNoteBtn {\n        background-color: ",";\n        border: 0;\n        padding: 5px 15px;\n        margin-left: ",";\n        margin-right: ",";\n        ",";\n        ",";\n\n        @media only screen and (max-width: 400px) {\n          margin: ",";\n        }\n\n        span {\n          font-size: 12px;\n          font-weight: 400;\n          padding: 0;\n          text-transform: uppercase;\n          color: #ffffff;\n        }\n\n        &:hover {\n          background-color: ",";\n        }\n      }\n    }\n\n    .isoNoteEditingArea {\n      display: flex;\n      height: 100%;\n\n      @media (max-width: 800px) {\n        height: 300px;\n      }\n\n      .isoNoteTextbox {\n        font-size: 14px;\n        color: ",";\n        line-height: 24px;\n        width: 100%;\n        height: calc(100% - 30px);\n        border: 0;\n        outline: 0;\n        padding: 20px 30px;\n        resize: none;\n\n        @media only screen and (max-width: 480px) {\n          padding: 20px;\n        }\n      }\n    }\n\n    @media (max-width: 767px) {\n      .isoNoteListSidebar.ant-layout-sider {\n        width: auto !important;\n        margin-bottom: 30px;\n        flex: 0 0 450px !important;\n      }\n    }\n  }\n"],["\n  padding: 50px 35px;\n  display: flex;\n  height: 100%;\n  min-height: 300px;\n  background: none;\n\n  @media only screen and (max-width: 767px) {\n    padding: 40px 20px;\n    height: auto;\n    flex-direction: column;\n\n    &.ant-layout.ant-layout-has-sider {\n      flex-direction: column;\n    }\n  }\n\n  @media only screen and (min-width: 767px) and (max-width: 990px) {\n    padding: 50px 20px;\n  }\n\n  .isoNoteListSidebar {\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 0;\n    "," background: #ffffff;\n    border-right: ","px solid\n      ",";\n    border-left: ","px solid\n      ",";\n\n    @media only screen and (min-width: 767px) and (max-width: 990px) {\n      width: 260px !important;\n      flex: 0 0 260px !important;\n      max-width: none !important;\n      min-width: 0 !important;\n    }\n    @media only screen and (max-width: 767px) {\n      width: auto !important;\n      max-width: 100% !important;\n      min-width: 0 !important;\n      margin-bottom: 30px;\n      flex: 0 !important;\n      overflow: hidden;\n      overflow-y: auto;\n    }\n  }\n\n  .isoNotepadWrapper {\n    background: #ffffff;\n\n    .isoHeader {\n      height: auto;\n      line-height: inherit;\n      padding: 20px 30px;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      flex-wrap: wrap;\n      flex-direction: row;\n      background-color: #ffffff;\n      border-bottom: 1px solid ",";\n\n      @media only screen and (max-width: 480px) {\n        padding: 20px;\n      }\n\n      @media only screen and (max-width: 400px) {\n        flex-direction: column;\n        justify-content: center;\n        align-items: flex-start;\n      }\n\n      .isoColorChooseWrapper {\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n        flex-direction: row;\n        margin-right: ",";\n        margin-left: ",";\n\n        span {\n          font-size: 13px;\n          color: ",";\n        }\n\n        .isoColorChooser {\n          width: 20px;\n          height: 20px;\n          cursor: pointer;\n          border: 0;\n          margin: ",";\n          padding: 0;\n          ",";\n        }\n      }\n\n      .isoAddNoteBtn {\n        background-color: ",";\n        border: 0;\n        padding: 5px 15px;\n        margin-left: ",";\n        margin-right: ",";\n        ",";\n        ",";\n\n        @media only screen and (max-width: 400px) {\n          margin: ",";\n        }\n\n        span {\n          font-size: 12px;\n          font-weight: 400;\n          padding: 0;\n          text-transform: uppercase;\n          color: #ffffff;\n        }\n\n        &:hover {\n          background-color: ",";\n        }\n      }\n    }\n\n    .isoNoteEditingArea {\n      display: flex;\n      height: 100%;\n\n      @media (max-width: 800px) {\n        height: 300px;\n      }\n\n      .isoNoteTextbox {\n        font-size: 14px;\n        color: ",";\n        line-height: 24px;\n        width: 100%;\n        height: calc(100% - 30px);\n        border: 0;\n        outline: 0;\n        padding: 20px 30px;\n        resize: none;\n\n        @media only screen and (max-width: 480px) {\n          padding: 20px;\n        }\n      }\n    }\n\n    @media (max-width: 767px) {\n      .isoNoteListSidebar.ant-layout-sider {\n        width: auto !important;\n        margin-bottom: 30px;\n        flex: 0 0 450px !important;\n      }\n    }\n  }\n"]),p=o(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 160px);\n\n  @media only screen and (max-width: 767px) {\n    max-height: 60vh;\n  }\n\n  .isoSearchNotes {\n    .ant-input {\n      width: 100%;\n      font-size: 14px;\n      font-weight: 400;\n      color: ",";\n      line-height: inherit;\n      height: 77px;\n      padding: 0 15px;\n      padding-left: ",";\n      padding-right: ",";\n      border: 0;\n      border-bottom: 1px solid rgba(230, 230, 230, 0.7);\n      outline: 0 !important;\n      overflow: hidden;\n      background-color: #ffffff;\n      -webkit-box-shadow: none;\n      -moz-box-shadow: none;\n      border-radius: 0;\n      box-shadow: none;\n      ",";\n\n      @media only screen and (max-width: 767px) {\n        height: 50px;\n      }\n    }\n\n    &:hover,\n    &:focus {\n      .ant-input {\n        border-color: rgba(230, 230, 230, 0.7) !important;\n      }\n    }\n  }\n\n  .ant-input-suffix {\n    left: ",";\n    right: ",";\n    color: ",";\n  }\n\n  .isoNoteList {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    max-height: 100%;\n    overflow: hidden;\n    overflow-y: auto;\n\n    .isoList {\n      width: 100%;\n      margin: 0;\n      display: flex;\n      justify-content: flex-start;\n      flex-shrink: 0;\n      padding: 0;\n      border-bottom: 1px solid ",";\n      text-align: ",";\n      position: relative;\n\n      &.active {\n        background-color: ",";\n      }\n\n      .isoNoteBGColor {\n        width: 5px;\n        display: flex;\n        margin: ",";\n        flex-shrink: 0;\n      }\n\n      .isoNoteText {\n        width: calc(100% - 60px);\n        margin: ",";\n        padding: 20px 0;\n        cursor: pointer;\n\n        h3 {\n          width: 100%;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          overflow: hidden;\n          color: ",";\n          font-weight: 500;\n        }\n\n        .isoNoteCreatedDate {\n          font-size: 13px;\n          color: ",";\n        }\n      }\n\n      .isoDeleteBtn {\n        width: 24px;\n        height: 24px;\n        background-color: transparent;\n        flex-shrink: 0;\n        position: absolute;\n        top: 5px;\n        right: ",";\n        left: ",";\n        padding: 0;\n        border: 0;\n        font-size: 14px;\n        color: ",";\n        ",";\n\n        &:hover {\n          color: ",";\n        }\n      }\n    }\n\n    .isoNotlistNotice {\n      font-size: 14px;\n      font-weight: 400;\n      color: ",";\n      line-height: inherit;\n      padding: 30px 20px;\n    }\n\n    .isoNoResultMsg {\n      padding: 15px 20px;\n      text-align: center;\n      color: ",";\n      font-weight: 500;\n      font-size: 14px;\n    }\n  }\n"],["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 160px);\n\n  @media only screen and (max-width: 767px) {\n    max-height: 60vh;\n  }\n\n  .isoSearchNotes {\n    .ant-input {\n      width: 100%;\n      font-size: 14px;\n      font-weight: 400;\n      color: ",";\n      line-height: inherit;\n      height: 77px;\n      padding: 0 15px;\n      padding-left: ",";\n      padding-right: ",";\n      border: 0;\n      border-bottom: 1px solid rgba(230, 230, 230, 0.7);\n      outline: 0 !important;\n      overflow: hidden;\n      background-color: #ffffff;\n      -webkit-box-shadow: none;\n      -moz-box-shadow: none;\n      border-radius: 0;\n      box-shadow: none;\n      ",";\n\n      @media only screen and (max-width: 767px) {\n        height: 50px;\n      }\n    }\n\n    &:hover,\n    &:focus {\n      .ant-input {\n        border-color: rgba(230, 230, 230, 0.7) !important;\n      }\n    }\n  }\n\n  .ant-input-suffix {\n    left: ",";\n    right: ",";\n    color: ",";\n  }\n\n  .isoNoteList {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    max-height: 100%;\n    overflow: hidden;\n    overflow-y: auto;\n\n    .isoList {\n      width: 100%;\n      margin: 0;\n      display: flex;\n      justify-content: flex-start;\n      flex-shrink: 0;\n      padding: 0;\n      border-bottom: 1px solid ",";\n      text-align: ",";\n      position: relative;\n\n      &.active {\n        background-color: ",";\n      }\n\n      .isoNoteBGColor {\n        width: 5px;\n        display: flex;\n        margin: ",";\n        flex-shrink: 0;\n      }\n\n      .isoNoteText {\n        width: calc(100% - 60px);\n        margin: ",";\n        padding: 20px 0;\n        cursor: pointer;\n\n        h3 {\n          width: 100%;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          overflow: hidden;\n          color: ",";\n          font-weight: 500;\n        }\n\n        .isoNoteCreatedDate {\n          font-size: 13px;\n          color: ",";\n        }\n      }\n\n      .isoDeleteBtn {\n        width: 24px;\n        height: 24px;\n        background-color: transparent;\n        flex-shrink: 0;\n        position: absolute;\n        top: 5px;\n        right: ",";\n        left: ",";\n        padding: 0;\n        border: 0;\n        font-size: 14px;\n        color: ",";\n        ",";\n\n        &:hover {\n          color: ",";\n        }\n      }\n    }\n\n    .isoNotlistNotice {\n      font-size: 14px;\n      font-weight: 400;\n      color: ",";\n      line-height: inherit;\n      padding: 30px 20px;\n    }\n\n    .isoNoResultMsg {\n      padding: 15px 20px;\n      text-align: center;\n      color: ",";\n      font-weight: 500;\n      font-size: 14px;\n    }\n  }\n"]),s=i.b.div(d,"",function(n){return"rtl"===n["data-rtl"]?0:1},Object(r.palette)("border",0),function(n){return"rtl"===n["data-rtl"]?1:0},Object(r.palette)("border",0),Object(r.palette)("border",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"auto"},function(n){return"rtl"===n["data-rtl"]?"auto":"inherit"},Object(r.palette)("grayscale",0),function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(a.a)("3px"),Object(r.palette)("primary",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"auto"},function(n){return"rtl"===n["data-rtl"]?"auto":"inherit"},Object(a.a)("3px"),Object(a.c)(),function(n){return n["data-rtl"],"15px 0 0 0"},Object(r.palette)("primary",1),Object(r.palette)("text",2)),c=i.b.div(p,Object(r.palette)("text",0),function(n){return"rtl"===n["data-rtl"]?"15px":"35px"},function(n){return"rtl"===n["data-rtl"]?"35px":"15px"},Object(a.c)(),function(n){return"rtl"===n["data-rtl"]?"auto":"10px"},function(n){return"rtl"===n["data-rtl"]?"10px":"auto"},Object(r.palette)("grayscale",0),Object(r.palette)("border",0),function(n){return"rtl"===n["data-rtl"]?"right":"left"},Object(r.palette)("secondary",1),function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},function(n){return"rtl"===n["data-rtl"]?"0 0 0 20px":"0 20px 0 0"},Object(r.palette)("secondary",2),Object(r.palette)("grayscale",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"5px"},function(n){return"rtl"===n["data-rtl"]?"5px":"inherit"},Object(r.palette)("grayscale",0),Object(a.c)(),Object(r.palette)("primary",0),Object(r.palette)("grayscale",0),Object(r.palette)("secondary",2));e.b=Object(l.a)(s);var f=Object(l.a)(c)},2455:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function r(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}function a(n,e){return e=e.toUpperCase(),e?n.filter(function(n){return n.note.toUpperCase().includes(e)}):n}var l=t(0),d=t.n(l),p=t(705),s=t(677),c=t(678),f=t(2224),x=t(687),h=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),u=function(n){function e(n){o(this,e);var t=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return t.singleNote=t.singleNote.bind(t),t.onChange=t.onChange.bind(t),t.state={search:""},t}return r(e,n),h(e,[{key:"singleNote",value:function(n){var e=this.props,t=e.selectedId,o=e.deleteNote,i=e.changeNote,r=e.colors,a=t===n.id?"active":"",l=function(){return i(n.id)},c=function(){return o(n.id)};return d.a.createElement("div",{className:"isoList "+a,key:n.id},d.a.createElement("div",{className:"isoNoteBGColor",style:{width:"5px",background:r[n.color]}}),d.a.createElement("div",{className:"isoNoteText",onClick:l},d.a.createElement("h3",null,n.note),d.a.createElement("span",{className:"isoNoteCreatedDate"},Object(p.c)(n.createTime))),d.a.createElement(s.b,{className:"isoDeleteBtn",icon:"close",type:"button",onClick:c}))}},{key:"onChange",value:function(n){this.setState({search:n.target.value})}},{key:"render",value:function(){var n=this,e=this.state.search,t=a(this.props.notes,e);return d.a.createElement(f.a,{className:"isoNoteListWrapper"},d.a.createElement(c.b,{placeholder:"Search Notes",className:"isoSearchNotes",value:e,onChange:this.onChange}),d.a.createElement("div",{className:"isoNoteList"},t&&t.length>0?d.a.createElement(x.a,null,t.map(function(e){return n.singleNote(e)})):d.a.createElement("span",{className:"isoNoResultMsg"},"No note found")))}}]),e}(l.Component);e.a=u}});