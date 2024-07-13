import{_ as e,c as a,o as t,a8 as l}from"./chunks/framework.C7ysi3tu.js";const r="/sealdice-manual-next/assets/develop-fork-1.BZOKPa8J.png",s="/sealdice-manual-next/assets/develop-fork-2.X58VX0eS.png",o="/sealdice-manual-next/assets/develop-new-branch-1.BqKBsG0R.png",i="/sealdice-manual-next/assets/develop-new-branch-2.zhLwB2Rj.png",c="/sealdice-manual-next/assets/develop-new-branch-3.C0fRBlWq.png",p="/sealdice-manual-next/assets/develop-new-branch-4.ijy4i49c.png",n="/sealdice-manual-next/assets/develop-new-branch-5.CeOz2UDa.png",d="/sealdice-manual-next/assets/develop-new-branch-6.BBHexEzw.png",u="/sealdice-manual-next/assets/develop-new-branch-7.C2-9Q-ZS.png",h="/sealdice-manual-next/assets/develop-pr-1.BVBX_RTc.png",m="/sealdice-manual-next/assets/develop-pr-2.C-dKwDzw.png",b="/sealdice-manual-next/assets/develop-open-pr-1.DAADwrkm.png",f="/sealdice-manual-next/assets/develop-sync-fork.BZF0daO6.png",C=JSON.parse('{"title":"参与项目","description":"","frontmatter":{"lang":"zh-cn","title":"参与项目"},"headers":[],"relativePath":"about/develop.md","filePath":"about/develop.md","lastUpdated":1718381802000}'),_={name:"about/develop.md"},k=l('<h1 id="参与项目" tabindex="-1">参与项目 <a class="header-anchor" href="#参与项目" aria-label="Permalink to &quot;参与项目&quot;">​</a></h1><p>无论是普通用户还是开发者，我们都非常欢迎你参与海豹的开发，一起努力让海豹变得更好。</p><p>海豹的所有源代码都托管在 <a href="https://github.com/sealdice" target="_blank" rel="noreferrer">海豹开源组织 GitHub</a> 下，每个模块都存放在对应的仓库中，可阅读对应仓库的 Readme 获取更多信息。</p><p>几个比较重要的仓库：</p><ul><li><a href="https://github.com/sealdice/sealdice-core" target="_blank" rel="noreferrer">核心</a>：海豹的 Go 后端代码仓库，这个仓库也作为海豹的主仓库，Bug 可反馈在该仓库的 issue 中；</li><li><a href="https://github.com/sealdice/sealdice-ui" target="_blank" rel="noreferrer">UI</a>：海豹的前端代码，基于 Vue3 + ElementPlus 开发；</li><li><a href="https://github.com/sealdice/sealdice-manual-next" target="_blank" rel="noreferrer">手册（新）</a>：海豹新版官方手册（即当前的手册）的源码，如对手册有什么改进内容可以在该项目提交 pr；</li><li><a href="https://github.com/sealdice/sealdice-build" target="_blank" rel="noreferrer">构建</a>：海豹的自动构建仓库，用于自动化发布海豹的每日构建包与 Release；</li><li>……</li></ul><h2 id="如何参与项目" tabindex="-1">如何参与项目？ <a class="header-anchor" href="#如何参与项目" aria-label="Permalink to &quot;如何参与项目？&quot;">​</a></h2><h3 id="bug-反馈、功能建议" tabindex="-1">Bug 反馈、功能建议 <a class="header-anchor" href="#bug-反馈、功能建议" aria-label="Permalink to &quot;Bug 反馈、功能建议&quot;">​</a></h3><p>所有的 Bug 和功能建议都可反馈在 <a href="https://github.com/sealdice/sealdice-core" target="_blank" rel="noreferrer">核心</a> 仓库的 issue 中，按照模板填写可方便开发组快速定位问题。</p><div class="tip custom-block"><p class="custom-block-title">提示：无法访问 GitHub？</p><p>受限于各种原因，不是所有人都能顺利访问 GitHub，如有 Bug 可以加入官方群进行反馈。但如果有条件，我们还是建议在 GitHub 向开发组反馈问题。</p></div><h3 id="提交修改" tabindex="-1">提交修改 <a class="header-anchor" href="#提交修改" aria-label="Permalink to &quot;提交修改&quot;">​</a></h3><p>欢迎各种类型的 pr 提交，可以帮助改进代码，增加功能，也可以是完善文档等等。向对应仓库发起 pr 即可。</p><h2 id="贡献指南" tabindex="-1">贡献指南 <a class="header-anchor" href="#贡献指南" aria-label="Permalink to &quot;贡献指南&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">贡献指南</p><p>下面将以提交对手册的改进为示例，为还不清楚怎么在 GitHub 上提 Pull Request 的准贡献者做个示范。</p></div><h3 id="整体流程" tabindex="-1">整体流程 <a class="header-anchor" href="#整体流程" aria-label="Permalink to &quot;整体流程&quot;">​</a></h3><ol><li>首先 fork 对应想要修改的仓库，后续所有操作均在 fork 之后的仓库上执行；</li><li>从主分支（通常是 <code>main</code> 或 <code>master</code>）切出一个新分支作为工作分支；</li><li>在新工作分支上提交修改。如果是对代码仓库进行修改，务必在本地测试通过；</li><li>将修改后的内容提交到远程后，在 GitHub 发起 Pull Request 请求，描述修改内容并确认自动测试流程通过；</li><li>等待开发组 review 后合并你的代码。</li></ol><h3 id="对目标仓库进行-fork" tabindex="-1">对目标仓库进行 fork <a class="header-anchor" href="#对目标仓库进行-fork" aria-label="Permalink to &quot;对目标仓库进行 fork&quot;">​</a></h3><p>首先 fork 对应想要修改的仓库，此处以手册仓库 <a href="https://github.com/sealdice/sealdice-manual-next" target="_blank" rel="noreferrer">sealdice-manual-next</a> 为例：</p><p><img src="'+r+'" alt="fork 对应仓库"></p><p>点击 <code>Create a new fork</code> 按钮，如果此处已经有 fork 过仓库，可以直接进行后续步骤无需再次 fork。</p><p>点击按钮后进入如下页面：</p><img src="'+s+'" alt="创建 fork" width="80%"><p>可不做任何修改，直接点击 <code>Create fork</code> 按钮，等待 fork 进度条完成，此时你应当自动跳转到了 fork 出的新仓库。</p><h3 id="切出工作分支" tabindex="-1">切出工作分支 <a class="header-anchor" href="#切出工作分支" aria-label="Permalink to &quot;切出工作分支&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">提示：假如你熟悉 Git 操作</p><p>如果你熟悉 Git 操作，可以自行 clone 仓库到本地后进行修改。</p></div><div class="warning custom-block"><p class="custom-block-title">注意：不要修改主分支</p><p>如果 clone 到本地操作，建议不要在主分支操作，而是新切分支进行编辑。</p><p>原因见 <a href="#保持-fork-仓库与上游同步可选">保持和上游同步</a>。</p></div><p>切换到新仓库的分支页面，创建分支：</p><img src="'+o+'" alt="进入分支页" width="45%"><p><img src="'+i+'" alt="创建分支"></p><p>填写新分支名，建议为形如 <code>feature/xxx</code> 的有意义的英文。确认前请务必保证是从主分支切出的。</p><img src="'+c+'" alt="新分支信息" width="65%"><p>创建完毕后点击分支名切换到对应分支页面：</p><img src="'+p+'" alt="切换分支" width="25%"><p>点击你想要修改的文件，进行在线编辑：</p><p><img src="'+n+'" alt="修改文件"></p><p>修改完成后点击右上角提交变更，填写变更内容信息：</p><img src="'+d+'" alt="提交变更" width="45%"><img src="'+u+'" alt="提交变更信息" width="65%"><h3 id="发起-pull-request-请求" tabindex="-1">发起 Pull Request 请求 <a class="header-anchor" href="#发起-pull-request-请求" aria-label="Permalink to &quot;发起 Pull Request 请求&quot;">​</a></h3><p>你的修改完成后，在你 fork 的新仓库向主仓库发起 Pull Request：</p><p><img src="'+h+'" alt="创建PR"></p><p>提交时间很近的时候，GitHub 会提示快捷发起 PR 的操作按钮：</p><p><img src="'+m+'" alt="快速创建PR"></p><p>进入 PR 编辑页填写信息，请确认是从你的仓库的新分支，提向主仓库的主分支的：</p><p><code>主仓库 主分支 &lt;- fork仓库 功能分支</code></p><p><img src="'+b+'" alt="填写PR信息"></p><p>填写完成后，等待开发组进行 review，有时会给你提出一些修改建议。在你的 PR review 通过并合并后，功能分支就可以被删除了。</p><h3 id="保持-fork-仓库与上游同步-可选" tabindex="-1">保持 fork 仓库与上游同步（可选） <a class="header-anchor" href="#保持-fork-仓库与上游同步-可选" aria-label="Permalink to &quot;保持 fork 仓库与上游同步（可选）&quot;">​</a></h3><p>如果之后还要提交新的 PR，建议先同步上游的主分支，再从同步后的主分支再新切分支进行操作。</p><p>如果你曾经修改了主分支，此处很可能会出现和上游分支有冲突的问题，需要你先手动解决冲突。</p><p>点击 <code>Sync fork</code> 进行同步。</p><p><img src="'+f+'" alt="与上游同步"></p>',51),g=[k];function x(v,q,P,w,R,B){return t(),a("div",null,g)}const H=e(_,[["render",x]]);export{C as __pageData,H as default};