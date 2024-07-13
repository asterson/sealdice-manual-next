import{_ as c,D as p,c as d,j as e,a as s,I as a,w as i,a8 as n,o as r}from"./chunks/framework.C7ysi3tu.js";const h="/sealdice-manual-next/assets/edit-jsscript-dts.j849kmdb.png",te=JSON.parse('{"title":"前言","description":"","frontmatter":{"lang":"zh-cn","title":"前言"},"headers":[],"relativePath":"advanced/js_start.md","filePath":"advanced/js_start.md","lastUpdated":1715601883000}'),k={name:"advanced/js_start.md"},u=n(`<h1 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">本节内容</p><p>本节将介绍 JavaScript 脚本的编写的前置知识，更多内容请看 <a href="./js_api_list.html">API 列表</a> 和 <a href="./js_example.html">常见用法示例</a>，请善用侧边栏和搜索，按需阅读文档。</p><p>我们假定你熟悉 JavaScript / TypeScript，编程语言的教学超出了本文档的目的，如果你还不熟悉它们，可以从互联网上寻找到很多优秀的教程。如：</p><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript" target="_blank" rel="noreferrer">MDN | JavaScript</a></li><li><a href="https://zh.javascript.info" target="_blank" rel="noreferrer">现代 JavaScript 教程</a></li><li><a href="https://www.liaoxuefeng.com/wiki/1022910821149312" target="_blank" rel="noreferrer">JavaScript 教程 - 廖雪峰</a></li><li><a href="https://www.runoob.com/js/js-tutorial.html" target="_blank" rel="noreferrer">JavaScript - 菜鸟教程</a></li></ul><p>注意：你只需要学习 JavaScript 语言本身，不包括 WebAPI。</p></div><h2 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h2><blockquote><p><strong>JavaScript</strong>（<strong>JS</strong>）虽然作为 Web 页面中的脚本语言被人所熟知，但是它也被用到了很多 <a href="https://zh.wikipedia.org/wiki/JavaScript#%E5%85%B6%E4%BB%96" target="_blank" rel="noreferrer">非浏览器环境</a> 中，例如 <a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Node.js" target="_blank" rel="noreferrer">Node.js</a>、<a href="https://couchdb.apache.org/" target="_blank" rel="noreferrer">Apache CouchDB</a>、<a href="https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/" target="_blank" rel="noreferrer">Adobe Acrobat</a> 等。</p></blockquote><p>海豹的 JS 插件就是运行在一个非浏览器环境中—— <a href="https://github.com/dop251/goja" target="_blank" rel="noreferrer">goja</a> 作为 JS 脚本引擎所提供的环境，该环境目前支持了 ES6 基本上全部的特性，包括 <code>async/await</code>、<code>promise</code> 和 <code>generator</code> 等异步编程友好的特性。</p><p>除了 JS 语言规范所提供的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects" target="_blank" rel="noreferrer">内置对象</a>，海豹额外在环境中提供了如下全局对象：</p><ul><li><code>seal</code> 用于自定义扩展、增加指令、管理黑白名单……几乎所有与海豹本体有关的 API 都挂载在这个内置对象上。</li><li><code>console</code> 专门与海豹的日志模块进行交互。</li><li><code>setTimeout/setInterval</code> 等与事件循环相关的函数。</li><li><code>fetch</code> 用于网络请求。</li><li><code>atob/btoa</code> 用于 base64 编解码。</li></ul><div class="warning custom-block"><p class="custom-block-title">警告</p><p>需要注意引擎的整型为 32 位，请小心溢出问题。</p></div><p>现在，让我们从最简单的扩展开始，这个扩展只会在日志中打印一条 <code>Hello World!</code>。</p><p>新建一个 JS 文件，写入如下内容，然后通过海豹的 WebUI 上传并重载 JS 环境（或是直接复制到海豹 WebUI 的调试控制台中运行）。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ==UserScript==</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @name         示例：如何开始</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @author       木落</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @version      1.0.0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @description  这是一个演示脚本，并没有任何实际作用。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @timestamp    1671368035</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2022-12-18</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @license      Apache-2</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @homepageURL  https://github.com/sealdice/javascript</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ==/UserScript==</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hello World!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>你应当能在控制台中观察到一条 Hello World 的日志。</p><div class="tip custom-block"><p class="custom-block-title">提示：打印日志</p><p>console 打印出来的东西不仅会在控制台中出现，在日志中也会显示。</p><p>涉及网络请求或延迟执行的内容，有时候不会在控制台调试面板上显示出来，而在日志中能看到。</p></div><h3 id="插件元数据" tabindex="-1">插件元数据 <a class="header-anchor" href="#插件元数据" aria-label="Permalink to &quot;插件元数据&quot;">​</a></h3><p>每个 JS 扩展需要在开头以固定格式注释的形式留下信息，以便使用和分享，这些信息通常被称为「插件元数据」：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ==UserScript==</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @name         脚本的名字</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @author       木落</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @version      1.0.0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @description  这是一个演示脚本，并没有任何实际作用。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @timestamp    1672066028</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @license      Apache-2</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @homepageURL  https://github.com/sealdice/javascript</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @depends      SzzRain:demo:1.0.0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @sealVersion  1.4.5</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ==/UserScript==</span></span></code></pre></div>`,16),_={tabindex:"0"},g=e("thead",null,[e("tr",null,[e("th",null,"属性"),e("th",null,"含义")])],-1),b=e("tr",null,[e("td",null,"@name"),e("td",null,"必填，JS 扩展的名称，会展示在插件列表页面")],-1),m=e("tr",null,[e("td",null,"@author"),e("td",null,"必填，作者名")],-1),v=e("tr",null,[e("td",null,"@version"),e("td",null,[s("必填，版本号，可以自己定义，但建议遵循 "),e("a",{href:"https://semver.org/lang/zh-CN/",target:"_blank",rel:"noreferrer"},"语义版本控制（Semantic Versioning）")])],-1),A=e("tr",null,[e("td",null,"@description"),e("td",null,"可选，对扩展的功能的描述")],-1),y=e("tr",null,[e("td",null,"@timestamp"),e("td",null,[s("可选，最后更新时间，以秒为单位的 unix 时间戳，新版本支持了直接使用时间字符串，如 "),e("code",null,"2023-10-30"),s("。")])],-1),f=e("tr",null,[e("td",null,"@license"),e("td",null,"可选，开源协议，示例中的 Apache-2 是一个比较自由的协议，允许任意使用和分发（包括商用），当然你也可以使用其它协议（MIT GPL 等）")],-1),D=e("tr",null,[e("td",null,"@homepageURL"),e("td",null,"可选，你的扩展的主页链接，有 GitHub 仓库可以填仓库链接，没有则可以填海豹官方插件仓库")],-1),S=e("strong",null,"可以不含此行或含有多行",-1),x=e("a",{href:"#依赖其他扩展"},"依赖其他扩展",-1),C=e("a",{href:"#目标海豹版本"},"目标海豹版本",-1),z=n('<h2 id="单-js-文件编写插件" tabindex="-1">单 JS 文件编写插件 <a class="header-anchor" href="#单-js-文件编写插件" aria-label="Permalink to &quot;单 JS 文件编写插件&quot;">​</a></h2><p>我们更推荐使用 TypeScript 来编写插件，编译到 ES6 后使用即可。不过先从 JavaScript 开始也是没有任何问题的。 编写插件时，可以下载海豹提供的 <a href="https://raw.githubusercontent.com/sealdice/sealdice-js-ext-template/master/types/seal.d.ts" target="_blank" rel="noreferrer">seal.d.ts</a> 文件，将其保存在和你要编写的 JS 文件同级的目录下。</p><p><code>seal.d.ts</code> 支持了在使用 vscode 等工具编写时，对海豹提供的 API 的代码补全。</p><p><img src="'+h+'" alt="海豹 API 代码补全"></p><div class="tip custom-block"><p class="custom-block-title">提示</p><p><code>seal.d.ts</code> 文件随时可能会有更新，如果你需要的 API 没有提示，可以检查一下是否是最新版本。</p></div><h2 id="使用-ts-模板" tabindex="-1">使用 TS 模板 <a class="header-anchor" href="#使用-ts-模板" aria-label="Permalink to &quot;使用 TS 模板&quot;">​</a></h2><p>如果你打算使用 TypeScript，海豹提供了相应的 <a href="https://github.com/sealdice/sealdice-js-ext-template" target="_blank" rel="noreferrer">模板工程</a>，注册扩展和指令的代码已经写好，可以直接编译出一个可直接装载的 JS 扩展文件。</p><h3 id="clone-或下载项目" tabindex="-1">clone 或下载项目 <a class="header-anchor" href="#clone-或下载项目" aria-label="Permalink to &quot;clone 或下载项目&quot;">​</a></h3><p>推荐的流程：</p><ol><li>在 <a href="https://github.com/sealdice/sealdice-js-ext-template" target="_blank" rel="noreferrer">模板项目仓库</a> 点击 Use this template 按钮，使用该模板在自己的 GitHub 上创建一个扩展的仓库，并设置为自己的扩展的名字；</li><li><code>git clone</code> 到本地，进行开发。</li></ol><p>如果你没有 GitHub 账号，也不会用 git：</p><ol><li>在 <a href="https://github.com/sealdice/sealdice-js-ext-template" target="_blank" rel="noreferrer">模板项目仓库</a> 点击 Code 按钮，在出现的浮窗中选择 Download ZIP，这样就会下载一个压缩包；</li><li>解压后进行开发。</li></ol><h3 id="使用和编译" tabindex="-1">使用和编译 <a class="header-anchor" href="#使用和编译" aria-label="Permalink to &quot;使用和编译&quot;">​</a></h3><p>TS 插件代码需要编译为 js 文件才能被海豹核心加载。</p><p>开始使用模板工程时，需要先将所需依赖包安装好。在确认你所使用的包管理器后，在命令行使用如下命令：</p>',15),T=e("div",{class:"language-bash vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"npm"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install")])])])],-1),j=e("div",{class:"language-bash vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"pnpm"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install")])])])],-1),P=e("p",null,"当你写好了代码，需要将 ts 文件转换为 js 文件以便上传到海豹骰时，在命令行使用如下命令：",-1),F=e("div",{class:"language-bash vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"npm"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," run"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," build")])])])],-1),E=e("div",{class:"language-bash vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"pnpm"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," run"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," build")])])])],-1),R=n('<p>编译成功的 js 文件在 <code>dist</code> 目录下，默认的名字是 <code>sealdce-js-ext.js</code>。</p><h3 id="补全信息" tabindex="-1">补全信息 <a class="header-anchor" href="#补全信息" aria-label="Permalink to &quot;补全信息&quot;">​</a></h3><p>当插件开发完成后（或者开始开发时），你还需要修改几处地方：</p><ul><li><code>header.txt</code>：这个文件是你插件的描述信息；</li><li><code>tools/build-config.js</code>：最开头一行 <code>var filename = &#39;sealdce-js-ext.js&#39;;</code> 改成你中意的名字，注意不要与现有的重名。</li></ul><h3 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h3><p>只列出其中主要的一些文件</p><ul><li><code>src</code><ul><li><code>index.ts</code>：你的扩展的代码就写在这个文件里。</li></ul></li><li><code>tools</code><ul><li><code>build-config</code>：一些编译的配置，影响 <code>index.ts</code> 编译成 js 文件的方式；</li><li><code>build.js</code>：在命令 <code>npm run build</code> 执行时所运行的脚本，用于读取 <code>build-config</code> 并按照配置进行编译。</li></ul></li><li><code>types</code><ul><li><code>seal.d.ts</code>：类型文件，海豹核心提供的扩展 API。</li></ul></li><li><code>header.txt</code>：扩展头信息，会在编译时自动加到目标文件头部；</li><li><code>package.json</code>：命令 <code>npm install</code> 时就在安装这个文件里面所指示的依赖包；</li><li><code>tsconfig.json</code>：typescript 的配置。</li></ul><h3 id="扩展依赖" tabindex="-1">扩展依赖 <a class="header-anchor" href="#扩展依赖" aria-label="Permalink to &quot;扩展依赖&quot;">​</a></h3>',8),I={id:"依赖其他扩展",tabindex:"-1"},q=e("a",{class:"header-anchor",href:"#依赖其他扩展","aria-label":'Permalink to "依赖其他扩展 <Badge type="tip" text="v1.4.4"/>"'},"​",-1),J=e("p",null,"有些时候，你的扩展依赖于另一个扩展提供的功能，希望在缺失对应扩展时不进行这个插件的加载。",-1),V=e("p",null,"例如，「SzzRain:每日新闻」依赖于「SzzRain:定时任务」，我们希望在骰主仅安装了「SzzRain:每日新闻」时，提示需要安装其依赖的「SzzRain:定时任务」扩展。",-1),B=e("a",{href:"#填写插件信息"},"插件元数据",-1),N=e("code",null,"@depends",-1),w=n('<h4 id="指定依赖的格式" tabindex="-1">指定依赖的格式 <a class="header-anchor" href="#指定依赖的格式" aria-label="Permalink to &quot;指定依赖的格式&quot;">​</a></h4><p>指定依赖的格式为 <code>作者:插件名[:SemVer版本约束，可选]</code>，其中 <code>:</code> 是分隔符，注意必须是半角符号。</p><p>例如，使用 <code>@depends SzzRain:定时任务</code>，这意味着该插件需要同时安装一个名为 <code>定时任务</code>，作者名为 <code>SzzRain</code> 的插件才可正常工作。</p>',3),U=e("div",{class:"language-javascript vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"javascript"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// ==UserScript==")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// @name         每日新闻")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// @author       SzzRain")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// @version      2.0.0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// ...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// @depends      SzzRain:定时任务:>=2.0.0")])])])],-1),W=e("div",{class:"language-javascript vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"javascript"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// ==UserScript==")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// @name         定时任务")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// @author       SzzRain")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// @version      2.0.0")])])])],-1),G=n(`<p>在上面的示例中，可以看见「SzzRain:每日新闻」通过 <code>@depends</code> 指明了其依赖 <code>SzzRain:定时任务:&gt;=2.0.0</code>。</p><p>版本限制是可选的，比如上面示例中的 <code>&gt;=2.0.0</code>，这表示 <code>SzzRain:每日新闻</code> 依赖于 <code>SzzRain:定时任务</code>，且后者的版本必须大于等于 <code>2.0.0</code>。这在你需要依赖高版本插件的情况下很有用。</p><div class="info custom-block"><p class="custom-block-title">插件名、作者、版本号</p><p>指定依赖插件涉及到对应的插件名、作者名和版本号，其为插件元数据中的 <code>@name</code>、<code>@author</code> 和 <code>@version</code>。</p></div><div class="info custom-block"><p class="custom-block-title">有更复杂的指定依赖版本需求？</p><p>除了上面提到的 <code>&gt;=2.0.0</code> 之外，你还可以参阅海豹所使用的 <a href="https://github.com/Masterminds/semver" target="_blank" rel="noreferrer">go-semver</a> 库的文档，来进行更复杂的限制。</p><p>比如 <code>1.1.4-5.1.4</code> 意味着指定的依赖版本需要在 <code>1.1.4</code> 和 <code>5.1.4</code> 之间。</p><p>但是，目标依赖的版本号需要符合 <a href="https://semver.org/lang/zh-CN/" target="_blank" rel="noreferrer">SemVer</a> 才能更好的支持你进行版本限制。</p></div><h5 id="依赖多个扩展" tabindex="-1">依赖多个扩展 <a class="header-anchor" href="#依赖多个扩展" aria-label="Permalink to &quot;依赖多个扩展&quot;">​</a></h5><p>依赖可以是多个，每一行指定一个 <code>@depends</code>，这意味着这个插件需要同时满足所有的依赖才能工作。</p><p>例如我们给上面的「SzzRain:每日新闻」增加一个新的依赖：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ==UserScript==</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @name         每日新闻</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @author       SzzRain</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @version      2.0.0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @depends      SzzRain:定时任务:&gt;=2.0.0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @depends      sealdice:强制依赖</span></span></code></pre></div><p>此时，这个插件需要同时安装 <code>SzzRain:定时任务</code>（且版本大于等于 <code>2.0.0</code>）和 <code>sealdice:强制依赖</code> 这两个插件时，才能正常加载。</p>`,9),H={id:"目标海豹版本",tabindex:"-1"},L=e("a",{class:"header-anchor",href:"#目标海豹版本","aria-label":'Permalink to "目标海豹版本 <Badge type="tip" text="v1.4.5"/>"'},"​",-1),$=e("p",null,"新版本的海豹有时会增加更多插件可以调用的 API，但会出现使用旧版本海豹的骰主，去尝试加载使用了新 API 的插件而出错的情况。",-1),M=e("a",{href:"#插件元数据"},"插件元数据",-1),K=e("code",null,"@sealVersion",-1),O=n('<p>例如，当插件使用了在 <code>1.4.6</code> 新增的 API，可以指定目标海豹版本 <code>@sealVersion 1.4.6</code>。而当加载该插件的海豹版本为 <code>1.4.5</code> 时，会向骰主提示海豹版本不兼容而拒绝加载。</p><div class="info custom-block"><p class="custom-block-title">兼容的海豹版本</p><p>插件作者只需要指定目标海豹版本即可，如 <code>1.4.5</code> 新增的 API 则指定 <code>@sealVersion 1.4.5</code>。</p><p>海豹会尝试在兼容的情况下尽可能地加载插件，这是由海豹核心自动处理的。</p></div><h2 id="一些有帮助的资源" tabindex="-1">一些有帮助的资源 <a class="header-anchor" href="#一些有帮助的资源" aria-label="Permalink to &quot;一些有帮助的资源&quot;">​</a></h2><p>VS Code 可以安装 <a href="https://marketplace.visualstudio.com/items?itemName=yxChangingSelf.sealdice-snippets" target="_blank" rel="noreferrer">SealDice Snippets</a> 插件，提供了一些常见代码片段，帮助快速生成模板代码。</p>',4);function Z(Q,X,Y,ee,se,ae){const t=p("Badge"),l=p("PluginTabsTab"),o=p("PluginTabs");return r(),d("div",null,[u,e("table",_,[g,e("tbody",null,[b,m,v,A,y,f,D,e("tr",null,[e("td",null,[s("@depends "),a(t,{type:"tip",text:"v1.4.4"})]),e("td",null,[s("可选，从 "),a(t,{type:"tip",text:"v1.4.4"}),s(" 加入，指定你的扩展依赖的其他扩展，"),S,s("。详见 "),x])]),e("tr",null,[e("td",null,[s("@sealVersion "),a(t,{type:"tip",text:"v1.4.5"})]),e("td",null,[s("可选，从 "),a(t,{type:"tip",text:"v1.4.5"}),s(" 加入，指定你的扩展的目标海豹版本。详见 "),C])])])]),z,a(o,{sharedStateKey:"npm"},{default:i(()=>[a(l,{label:"npm"},{default:i(()=>[T]),_:1}),a(l,{label:"pnpm"},{default:i(()=>[j]),_:1})]),_:1}),P,a(o,{sharedStateKey:"npm"},{default:i(()=>[a(l,{label:"npm"},{default:i(()=>[F]),_:1}),a(l,{label:"pnpm"},{default:i(()=>[E]),_:1})]),_:1}),R,e("h4",I,[s("依赖其他扩展 "),a(t,{type:"tip",text:"v1.4.4"}),s(),q]),J,V,e("p",null,[s("从 "),a(t,{type:"tip",text:"v1.4.4"}),s(" 开始，你可以在 "),B,s(" 中通过 "),N,s(" 来指定扩展依赖的其他扩展。")]),w,a(o,null,{default:i(()=>[a(l,{label:"SzzRain:每日新闻"},{default:i(()=>[U]),_:1}),a(l,{label:"SzzRain:定时任务"},{default:i(()=>[W]),_:1})]),_:1}),G,e("h4",H,[s("目标海豹版本 "),a(t,{type:"tip",text:"v1.4.5"}),s(),L]),$,e("p",null,[s("为了让插件作者无需反复说明，也更好地提示使用插件的骰主，从 "),a(t,{type:"tip",text:"v1.4.5"}),s(" 开始，你可以在 "),M,s(" 中通过 "),K,s(" 来指定插件的目标海豹版本。")]),O])}const le=c(k,[["render",Z]]);export{te as __pageData,le as default};