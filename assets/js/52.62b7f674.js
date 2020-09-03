(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{763:function(e,r,t){"use strict";t.r(r);var a=t(33),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"solid-实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solid-实战"}},[e._v("#")]),e._v(" SOLID 实战")]),e._v(" "),t("p",[e._v("这是一个使用基于 SOLID 实现的 inversify 框架完成的 IoC 的 Node.js 小架构。"),t("a",{attrs:{href:"https://github.com/StarCoderLn/SOLID-DDD/tree/master/SOLID",target:"_blank",rel:"noopener noreferrer"}},[e._v("代码地址"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"开发流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发流程"}},[e._v("#")]),e._v(" 开发流程")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("先定义接口")])]),e._v(" "),t("li",[t("p",[e._v("实现接口 services，标记为可被注入 @injectable()")])]),e._v(" "),t("li",[t("p",[e._v("起名字，采用 inversify-binding-decorators 这个库的话可以省去这一步的工作")]),e._v(" "),t("p",[e._v("容器.绑定"),t("code",[e._v("<interface类>")]),e._v("（名字）.to（具体哪个类）")]),e._v(" "),t("p",[t("code",[e._v("container.bind<Warrior>(TYPES.Warrior).to(Ninja);")])])]),e._v(" "),t("li",[t("p",[e._v("执行注入到需要的类里")])])]),e._v(" "),t("h3",{attrs:{id:"目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[e._v("#")]),e._v(" 目录结构")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("├── README.md 说明文档\n├── app.ts 启动文件\n├── constant 敞亮定义\n├── controllers 路由文件\n├── interface 接口\n├── ioc 控制中心\n├── models 数据模型\n├── node_modules 仓库 @types/xxx\n├── package.json 包管理\n├── services 服务层实现接口层\n├── tsconfig.json 配置文件，最好自己一个个往里填\n└── yarn.lock 🔐 包锁文件\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br")])]),t("h3",{attrs:{id:"用到的库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用到的库"}},[e._v("#")]),e._v(" 用到的库")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://github.com/inversify/InversifyJS",target:"_blank",rel:"noopener noreferrer"}},[e._v("InversifyJS"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://www.npmjs.com/package/inversify-koa-utils",target:"_blank",rel:"noopener noreferrer"}},[e._v("inversify-koa-utils"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://github.com/inversify/inversify-binding-decorators",target:"_blank",rel:"noopener noreferrer"}},[e._v("inversify-binding-decorators"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://www.npmjs.com/package/koa-router",target:"_blank",rel:"noopener noreferrer"}},[e._v("koa-router"),t("OutboundLink")],1),e._v(" 和 "),t("a",{attrs:{href:"https://www.npmjs.com/package/@types/koa-router",target:"_blank",rel:"noopener noreferrer"}},[e._v("@types/koa-router"),t("OutboundLink")],1)])])]),e._v(" "),t("h3",{attrs:{id:"启动项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动项目"}},[e._v("#")]),e._v(" 启动项目")]),e._v(" "),t("p",[e._v("启动命令：ts-node app.ts，需要先安装 typescript 和 ts-node")]),e._v(" "),t("h3",{attrs:{id:"inversifyjs-和-awilix-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inversifyjs-和-awilix-的区别"}},[e._v("#")]),e._v(" InversifyJS 和 Awilix 的区别")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("InversifyJS 是完全遵循 SOLID 原则实现的，但是 Awilix 并没有。")])]),e._v(" "),t("li",[t("p",[e._v("InversifyJS 在注入过程中灵活性更高。")])])]),e._v(" "),t("h2",{attrs:{id:"ddd-实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ddd-实战"}},[e._v("#")]),e._v(" DDD 实战")]),e._v(" "),t("p",[e._v("DDD（领域驱动设计） 实战是在基于 SOLID 实战的基础上进行的。"),t("a",{attrs:{href:"https://github.com/StarCoderLn/SOLID-DDD/tree/master/DDD",target:"_blank",rel:"noopener noreferrer"}},[e._v("代码地址"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"关于-ddd-的思想"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于-ddd-的思想"}},[e._v("#")]),e._v(" 关于 DDD 的思想")]),e._v(" "),t("p",[e._v("学习 DDD 可以去看这篇文章："),t("a",{attrs:{href:"https://khalilstemmler.com/articles/domain-driven-design-intro/",target:"_blank",rel:"noopener noreferrer"}},[e._v("An Introduction to Domain-Driven Design - DDD w/ TypeScript"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"ddd-的核心点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ddd-的核心点"}},[e._v("#")]),e._v(" DDD 的核心点")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("软件复杂度的分析")])]),e._v(" "),t("li",[t("p",[e._v("怎么去界定服务的上下文，怎么知道谁通知谁，谁跟谁之间协作")])]),e._v(" "),t("li",[t("p",[e._v("软件分层，这个分层是基于 SOLID 之上的")])])]),e._v(" "),t("h3",{attrs:{id:"新增的库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新增的库"}},[e._v("#")]),e._v(" 新增的库")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://www.npmjs.com/package/@node-ts/bus-messages",target:"_blank",rel:"noopener noreferrer"}},[e._v("@node-ts/bus-messages"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://www.npmjs.com/package/@node-ts/ddd",target:"_blank",rel:"noopener noreferrer"}},[e._v("@node-ts/ddd"),t("OutboundLink")],1),e._v(" 和 "),t("a",{attrs:{href:"https://www.npmjs.com/package/@node-ts/ddd-types",target:"_blank",rel:"noopener noreferrer"}},[e._v("@node-ts/ddd-types"),t("OutboundLink")],1)])])])])}),[],!1,null,null,null);r.default=s.exports}}]);