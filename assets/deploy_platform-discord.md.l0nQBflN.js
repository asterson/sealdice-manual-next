import{_ as e,c as o,o as t,a8 as a}from"./chunks/framework.C7ysi3tu.js";const u=JSON.parse('{"title":"Discord","description":"","frontmatter":{"lang":"zh-cn","title":"Discord"},"headers":[],"relativePath":"deploy/platform-discord.md","filePath":"deploy/platform-discord.md","lastUpdated":1712824762000}'),c={name:"deploy/platform-discord.md"},d=a('<h1 id="discord" tabindex="-1">Discord <a class="header-anchor" href="#discord" aria-label="Permalink to &quot;Discord&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">本节内容</p><p>本节将包含你在 Discord 平台接入海豹核心需要了解的特定内容。</p></div><h2 id="获取-token" tabindex="-1">获取 Token <a class="header-anchor" href="#获取-token" aria-label="Permalink to &quot;获取 Token&quot;">​</a></h2><p>要获取用于连接海豹的 Token 之前，你需要建立好一个应用。登录 <a href="https://discord.com/developers/applications/1178793642148769905/bot" target="_blank" rel="noreferrer">Discord 开发者平台</a>，点击「New application」，按照要求填写应用名字并确认创建。完成后，点击侧边导航栏「bot」，打开「Privileged Gateway Intents」目录下全部三个开关：<code>Presence Intent</code>，<code>Server Members Intent</code>，<code>Message Content Intent</code>。完成后点击「Save Changes」。</p><p>建立好应用后上滑，点击 <code>Reset Token</code>，确认后点击 <code>Copy</code> 复制。</p><h2 id="连接海豹" tabindex="-1">连接海豹 <a class="header-anchor" href="#连接海豹" aria-label="Permalink to &quot;连接海豹&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">提示：代理模式</p><p>如果你海豹所处的位置直接访问 Discord 服务有困难，我们提供了通过 HTTP 代理访问的途径。</p></div><p>登录海豹并添加账号，选择「Discord账号」。在 <code>Token</code> 处粘贴你得到的 Token，点击连接。你的海豹应该可以正常在 Discord 运作了！</p><h2 id="邀请海豹" tabindex="-1">邀请海豹 <a class="header-anchor" href="#邀请海豹" aria-label="Permalink to &quot;邀请海豹&quot;">​</a></h2><p>你需要在侧边栏「Installation」选项卡中的「Authorization Methods」选项中选中 <code>Guild Install</code> 才能将你的机器人邀请至服务器中。</p><p>要申请用于邀请海豹至 Discord 服务器的邀请链接，前往侧边导航栏「OAuth2」下方的子目录「URL Generator」，在 <code>Scope</code> 中选择 <code>Bot</code> 后在下方 <code>Bot Permissions</code> 中选择你希望海豹拥有的权限。完成后复制下方生成的 URL，复制到浏览器打开。</p><div class="warning custom-block"><p class="custom-block-title">注意：权限不足</p><p>如果给予海豹的权限不充分，可能会导致无法发送消息或图片。若你不确定具体应该添加哪些权限，可直接添加 <code>Administrator</code>（管理员）权限。</p></div>',12),s=[d];function r(i,n,l,p,h,_){return t(),o("div",null,s)}const k=e(c,[["render",r]]);export{u as __pageData,k as default};
