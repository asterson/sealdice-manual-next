---
lang: zh-cn
title: 特色功能
---

# 特色功能

::: info 本节内容

本节将会介绍海豹的特色功能。

:::

## 指令兼容性

兼容了溯洄骰、赵骰和塔骰的绝大部分主流指令，无论之前用过哪一个都可以轻松上手。

对格式不敏感，你可以` .r1d20  +1`、`.r  d20+1`、`.stshow力量 敏捷`、`。st hp - 1`等等各种写法。



## 易于部署和使用

海豹的设计初衷就是“**能被任何TRPG玩家喜爱和使用**”，同时秉持”**没有提供UI的功能等于不存在**“的理念。

只需一个15MB的安装包、一个空闲的QQ号，和5分钟时间，任何人都可以搭建一个QQ骰子。



## 极少的资源占用

由于Golang的高效，海豹核心只占用大概40MB内存，以及极少的CPU资源。

自带的《COC7怪物之锤》和《DND系列资料》会另外占用50-70MB内存，但能提供极为强大的资料查询功能。

因此总计的初始内存大概在90MB左右。其中有一部分其实是空闲内存，因为go运行时的特性并不立即还给操作系统。



## 强自定义

提供了友好的GUI界面，可以自定义大部分指令的回复语句。

同时对于自定义回复(即reply)功能进行了强化，可以支持一些逻辑分支。



## 人工智能鸽子

让您想咕就咕

```
.gugu
🕊️: <木落>在来开团的路上被巨龙叼走了！
```

查看鸽子背后的故事

```
.gugu 来源
🕊️: 前往了一个以前捕鲸的小岛度假~这里人很亲切！但是吃了这里的鱼肉料理之后有点晕晕的诶...想到前几天<木落>的短信，还是别追究他为什么不在了。
    ——鹊鹊结合实际经历创作
```



## 强大的查询功能

海豹搭载了全文搜索技术(仅限PC版)，可以看作是一个微型搜索引擎。

可以找一只海豹试下这个指令：

```
.查询 30尺 法术
```

细节可参见 [.find/.查询 查询指令](#.find/.查询 查询指令) 一节



## COC特化支持

### 属性同义词

各种旧版翻译、俗称、简繁汉字的属性被视为同一属性。

### 默认技能等级

内置部分人物卡上没有的默认技能等级。

包括不限于速记、园艺、攀爬、各种武器等等。

### 支持 .scb 指令

用于在sc时额外摇一个奖励骰。

适用于规则书中，用**关键连接**自救的部分

见《COC7th守密人核心规则书》第八章 理智 - 增加当前理智值 - 4.自救

### 同时遇到多个目标的理智检定

指令未完成



## DND特化支持

### 属性同义词

功能同COC，但是使用不同的关键字

### 人物卡录入

参见[.st DND属性设置](#.st DND属性设置)

### 优势骰劣势骰

```
.set 20
.r d20优势 - d劣势
```

d20优势 = 2d20k1，即2个d20取结果高的一个

d20劣势 = 2d20q1，即2个d20取结果低的一个

属性调整值和熟练自动计算

### 临时属性

参见 [.buff 临时属性](#.buff 临时属性)

### 法术位支持

参见 [.ss 法术位(spell slots)](#.ss 法术位(spell slots))

### 死亡豁免

参见死亡豁免

### 休息

参见 [.longrest / .长休](#.longrest / .长休)



## 通用特化支持

### 对他人做检定 / 属性操作

功能描述见 [对他人做检定](#对他人做检定)，同理，可以修改他人的属性。

支持COC的.ra / .rc 指令，DND的除了先攻之外的全部指令

### 小队 / 批量操作

未完成 但是有热心的社区开发者们制作了类似的插件，你可以在js仓库或用户群中找到更多



## 可以实时编辑的跑团日志

https://log.sealdice.com/

除了海豹log自用之外，支持QQ格式和塔骰格式。

全选删除现有文本后，全文粘贴到文本框里即可。



## 是纯净骰，也是娱乐骰

海豹除了核心指令之外，都被设计为可插拔的，目前有7个内置扩展。

关闭对应扩展会连同扩展带来的指令一块关闭。

因此在跑团时，如果你不想要任何娱乐功能，你可以（以COC团为例）：

```
.ext fun off // 关闭.jrrp和.gugu
.ext reply off // 关闭关键字回复
.ext deck off // 关闭抽牌 .draw
.ext dnd5e off // 关闭dnd5e系列指令
.ext story off // 关闭.name[随机指令]/.modu[魔都查询]/.who[排序]等

也可以写成一行:
.ext fun reply deck dnd5e story off
```

这样一来，就只剩下coc系列指令和log指令了。

这个改动在当前群持续生效，如果想回去可以这样再打开

```
.ext fun on
```

请注意！默认情况下是所有扩展全部开启的，且coc7优先级高于dnd5e。

但这取决于骰主的个人喜好，骰主可以设置刚进群的时候默认开启的扩展。

因此遇到不认识指令你的骰，可以先用.ext看一眼情况。



## 更强的指令支持

海豹核心将表达式翻译成字节码，丢进指令虚拟机里执行，同时也做了很强的兼容性处理。

可以在不同骰系下测试一下这些指令:

```
.r 30 + (-1d20) + 49
.r d20 + (3 + 1d4)
.r 1 + (3+2)d(4+2d10)

.sc 0/-1
.sc (1+2)/0
.sc 0/1d4+(3*2)
.sc 1 / 2
.sc 1/2 + 3

.ra b 测试50
.ra b 50 测试
```

彩蛋:

```
.r 1+d10-3*4 --asm
<木落>掷出了 1+d10-3*4=1 + 3[1d10=3] - 12=-8
=== VM Code ===
push 1
mark.left
push 1
mark.left
push 10
dice
add
mark.left
push 3
mark.left
push 4
mul
sub
halt
=== VM Code End===
```



## 跨平台

虽然海豹核心目前主要服务于QQ用户，并做了很多对应优化。

但其实QQ本身只是默认被实现的第一个交互端。

海豹核心的底层架构，支持单进程的**多骰多号**。

**多骰**即可以执行多个骰子实例，分别拥有不同的自定义设置。好比是你的学校有3个不同的食堂。

**多号**即每个骰子上，可以绑定N个帐号，就好比是同一个食堂开了多个窗口，卖的东西是一样的。

这里的帐号概念并不局限于QQ，至少可以确定的是，未来会提供骰点HTTP API

> 2023/2/4 更新： 目前海豹已经支持 Kook(开黑啦) Discord Telegram 甚至是 Minecraft 服务器中使用！
> 你可以在添加账号时的**账号类型**里看到他们。感谢Szzrain提交的PR。以后也会支持更多的平台




## TRPG规则支持列表

* COC7
* DND5e
* COC - DeltaGreen (.setcoc dg)
* 暗影狂奔 (.rsr)
* WOD/无限团 (.ww)
* 双十字DoubleCross (.dx)
* 共鸣性怪异Emoklore (.ek .ekgen)
* 剑世界2.5 (插件)
* 明日方舟跑团规则 (插件)
* 其它插件由海豹社区提供，欢迎前去[插件仓库](https://github.com/sealdice/javascript/tree/main/scripts/%E6%A1%8C%E6%B8%B8%E8%A7%84%E5%88%99)查看

如果你不跑这些规则，或者觉得并无必要，可以在后台关闭对应的指令。

如果你喜欢的规则这里没有，那么可以去插件仓库看一看，或者自己编写规则模板插件！