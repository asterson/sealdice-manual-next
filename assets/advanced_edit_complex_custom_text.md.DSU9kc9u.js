import{_ as n,D as o,c as p,j as t,I as s,a8 as e,o as c}from"./chunks/framework.C7ysi3tu.js";const f=JSON.parse('{"title":"编写复杂文案","description":"","frontmatter":{"lang":"zh-cn","title":"编写复杂文案"},"headers":[],"relativePath":"advanced/edit_complex_custom_text.md","filePath":"advanced/edit_complex_custom_text.md","lastUpdated":1714442589000}'),i={name:"advanced/edit_complex_custom_text.md"},l=e(`<h1 id="编写复杂文案" tabindex="-1">编写复杂文案 <a class="header-anchor" href="#编写复杂文案" aria-label="Permalink to &quot;编写复杂文案&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">本节内容</p><p>本节将展示复杂文案的编写技巧，请善用侧边栏和搜索，按需阅读文档。</p></div><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><h3 id="根据骰点结果展示不同文案" tabindex="-1">根据骰点结果展示不同文案 <a class="header-anchor" href="#根据骰点结果展示不同文案" aria-label="Permalink to &quot;根据骰点结果展示不同文案&quot;">​</a></h3><p>在文案中通常会有结果变量，通过对结果变量的判断来实现展示不同文案。如修改 <code>.r 骰点_单项结果文本</code> 文案为例</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{$t表达式文本}{$t计算过程}={$t计算结果}{%</span></span>
<span class="line"><span>$t计算结果 == 100 ? &quot; 乐！&quot;,</span></span>
<span class="line"><span>$t计算结果 == 1 ? &quot; 啧！&quot;</span></span>
<span class="line"><span>%}</span></span></code></pre></div>`,6),d={class:"info custom-block"},u=t("p",{class:"custom-block-title"},"示例",-1),r=e(`<h3 id="多套文案的实现" tabindex="-1">多套文案的实现 <a class="header-anchor" href="#多套文案的实现" aria-label="Permalink to &quot;多套文案的实现&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">提示：了解自定义回复的编写</p><p>多套文案的实现一般需要用到「自定义回复」来提供切换命令，见 <a href="./edit_reply.html">编写自定义回复</a>。</p><p>如果你想使用 JS 插件实现也是可以的，不过示例以更简单的自定义回复为例。</p></div><h4 id="切换命令实现" tabindex="-1">切换命令实现 <a class="header-anchor" href="#切换命令实现" aria-label="Permalink to &quot;切换命令实现&quot;">​</a></h4><p>正则匹配：<code>mode switch(.*)</code> 回复：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{%</span></span>
<span class="line"><span>if $t1==&quot;&quot;||$t1==&quot; 默认&quot; {$g文案模式 = 0; $t输出=&quot;默认模式启用&quot;};</span></span>
<span class="line"><span>if $t1==&quot; 模式1&quot; {$g文案模式 = 1; $t输出=&quot;模式1启用&quot;};  </span></span>
<span class="line"><span>if $t1==&quot; 模式2&quot; {$g文案模式 = 2; $t输出=&quot;模式2启用&quot;};</span></span>
<span class="line"><span>if $t1!=&quot;&quot;&amp;&amp;$t1!=&quot; 默认&quot;&amp;&amp;$t1!=&quot; 模式1&quot;&amp;&amp;$t1!=&quot; 模式2&quot; {$t输出=\`不存在指定模式{$t1}\`};  </span></span>
<span class="line"><span>$t输出</span></span>
<span class="line"><span>%}</span></span></code></pre></div><p>精确匹配：<code>mode show</code> 回复：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{% </span></span>
<span class="line"><span>$g文案模式==0 ? &quot;当前在默认模式&quot;,</span></span>
<span class="line"><span>$g文案模式==1 ? &quot;当前在模式1&quot; ,</span></span>
<span class="line"><span>$g文案模式==2 ? &quot;当前在模式2&quot;</span></span>
<span class="line"><span>%}</span></span></code></pre></div><h4 id="文案调整" tabindex="-1">文案调整 <a class="header-anchor" href="#文案调整" aria-label="Permalink to &quot;文案调整&quot;">​</a></h4><p>按如下模式调整你的自定义文案项：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>if $g文案模式 == 0 {$t目标文案 = \`（这里填你个性化的默认模式文案）\`};</span></span>
<span class="line"><span>if $g文案模式 == 1 {$t目标文案 = \`（这里填你个性化的模式1文案）\`};</span></span>
<span class="line"><span>if $g文案模式 == 2 {$t目标文案 = \`（这里填你个性化的模式2文案）\`}</span></span>
<span class="line"><span>}{$t目标文案}</span></span></code></pre></div><h4 id="展示" tabindex="-1">展示 <a class="header-anchor" href="#展示" aria-label="Permalink to &quot;展示&quot;">​</a></h4><p>以修改了 <code>.jrrp</code> 的文案为例：</p>`,12),h={class:"info custom-block"},_=t("p",{class:"custom-block-title"},"示例",-1);function m(q,b,g,$,v,x){const a=o("ChatBox");return c(),p("div",null,[l,t("div",d,[u,s(a,{messages:[{content:".r",send:!0},{content:"<木落>掷出了 D100=1 啧！"},{content:".r",send:!0},{content:"<木落>掷出了 D100=100 乐！"}]})]),r,t("div",h,[_,s(a,{messages:[{content:"mode show",send:!0},{content:"默认模式启用"},{content:"mode switch 模式1",send:!0},{content:"模式1启用"},{content:"mode show",send:!0},{content:"当前在模式1"},{content:".jrrp",send:!0},{content:"（这里填你个性化的模式1文案）"},{content:"mode switch 模式2",send:!0},{content:"模式2启用"},{content:".jrrp",send:!0},{content:"（这里填你个性化的模式2文案）"},{content:"mode switch",send:!0},{content:"默认模式启用"},{content:".jrrp",send:!0},{content:"（这里填你个性化的默认模式文案）"}]})])])}const C=n(i,[["render",m]]);export{f as __pageData,C as default};