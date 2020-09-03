(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{356:function(s,t,e){s.exports=e.p+"assets/img/mac1.92e36ce5.jpg"},357:function(s,t,e){s.exports=e.p+"assets/img/mac2.4c587681.jpg"},358:function(s,t,e){s.exports=e.p+"assets/img/mac3.bd3bfe0f.jpg"},359:function(s,t,e){s.exports=e.p+"assets/img/mac4.00cd61ea.jpg"},360:function(s,t,e){s.exports=e.p+"assets/img/mac5.415447f1.jpg"},361:function(s,t,e){s.exports=e.p+"assets/img/mac6.c23ef39f.jpg"},362:function(s,t,e){s.exports=e.p+"assets/img/mac7.94127613.jpg"},363:function(s,t,e){s.exports=e.p+"assets/img/mac8.7562edcd.jpg"},364:function(s,t,e){s.exports=e.p+"assets/img/mac9.40732b9c.jpg"},761:function(s,t,e){"use strict";e.r(t);var a=e(33),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("这篇文章主要介绍的是如何美化 mac 终端，一个好看的终端能让我们在开发的时候赏心悦目。")]),s._v(" "),a("p",[s._v("开始之前，需要具备以下几点：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("一台 mac")])]),s._v(" "),a("li",[a("p",[s._v("安装了 iTerm2")])]),s._v(" "),a("li",[a("p",[s._v("具备 Linux 基础知识")])])]),s._v(" "),a("h2",{attrs:{id:"什么是-iterm2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-iterm2"}},[s._v("#")]),s._v(" 什么是 iTerm2")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.iterm2.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("iTerm2"),a("OutboundLink")],1),s._v("是mac系统下的一款非常好用的终端工具，它比系统自带的Terminal好用得多。有丰富的特色功能供，比如快捷键、分屏、定制终端主题颜色等；这些功能极大的提高我们敲命令的效率，强烈推荐每一个程序员都尝试和习惯使用这款工具。直接官网下载安装即可。")]),s._v(" "),a("h2",{attrs:{id:"iterm2-的配置方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iterm2-的配置方法"}},[s._v("#")]),s._v(" iTerm2 的配置方法")]),s._v(" "),a("p",[a("strong",[s._v("1. 安装主题")])]),s._v(" "),a("p",[s._v("首先需要下载 "),a("a",{attrs:{href:"https://github.com/willmanduffy/seti-iterm",target:"_blank",rel:"noopener noreferrer"}},[s._v("seti_ui"),a("OutboundLink")],1),s._v(" ，下载好之后放到指定的位置，比如桌面。然后打开 iTerm2 -> preferences -> profiles -> colors -> colors presets -> import选中刚才的文件。")]),s._v(" "),a("p",[a("img",{attrs:{src:e(356),alt:"mac",title:"mac"}})]),s._v(" "),a("p",[a("strong",[s._v("2. 让命令变色")])]),s._v(" "),a("p",[s._v("打开 iTerm，输入命令 vim ~/.bash_profile，然后输入以下内容，开启 iTerm 的颜色支持。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLICOLOR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LSCOLORS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("GxFxCxDxBxegedabagaced\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PS1")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\["),a("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[s._v("\\033")]),s._v("[01;32m\\]\\u@\\h\\["),a("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[s._v("\\033")]),s._v("[00m\\]:\\["),a("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[s._v("\\033")]),s._v("[01;34m\\]\\w\\\n["),a("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[s._v("\\033")]),s._v("[00m\\]\\$ '")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("3. 找到自己喜欢的字符画")])]),s._v(" "),a("p",[s._v("将自己喜欢的字符画放在名为 webcome.txt 的文件中，可以将这个文件放在任意位置，只要方便自己后面修改就行了。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(",--^----------,--------,-----,-------^--,\n  | |||||||||   `--------'     |         O \n `+---------------------------^----------|\n   `_,-------, _________________________| \n     / XXXXXX /`|    /\n    / XXXXXX /  `   /\n   / XXXXXX /______(\n  / XXXXXX /\n / XXXXXX /\n(________( ☄ ❄ linnan@1996 ❅ ☼ \n `------'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[a("strong",[s._v("4. 让字符变得漂亮起来")])]),s._v(" "),a("p",[s._v("安装 "),a("a",{attrs:{href:"https://github.com/busyloop/lolcat",target:"_blank",rel:"noopener noreferrer"}},[s._v("lolcat"),a("OutboundLink")],1),s._v("，安装方法如下：")]),s._v(" "),a("p",[s._v("（1）gem install lolcat")]),s._v(" "),a("p",[s._v("（2）vi ~/.bash_profile")]),s._v(" "),a("p",[s._v("（3）将自己的 webcome.txt 文件的存放路径放在 .bash_profile 这个文件的最上面，比如我这里的路径是：lolcat ~/Desktop/webcome.txt。此时整个 .bash_profile 文件的内容应该如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:e(357),alt:"mac",title:"mac"}})]),s._v(" "),a("p",[s._v("（4）在这里，我们可以在 iTerm 中输入 lolcat ~/Desktop/webcome.txt 先测试下字符画能否正常显示。")]),s._v(" "),a("p",[a("strong",[s._v("5. 下载安装字体库")])]),s._v(" "),a("p",[s._v("我们需要安装 "),a("a",{attrs:{href:"https://github.com/powerline/fonts",target:"_blank",rel:"noopener noreferrer"}},[s._v("powerline"),a("OutboundLink")],1),s._v(" 这个字体库，安装完字体库之后，把 iTerm2 的设置里的 Profile 中的 Text 选项卡中里的 Regular Font 和 Non-ASCII Font 的字体都设置成 Powerline 的字体，我这里设置的字体是 12pt Meslo LG S DZ for Powerline。")]),s._v(" "),a("p",[a("img",{attrs:{src:e(358),alt:"mac",title:"mac"}})]),s._v(" "),a("p",[s._v("这里需要注意的是，安装完字体库之后，需要重启 iTerm2，才能够在配置中找到这种字体。")]),s._v(" "),a("p",[a("strong",[s._v("6. 安装 oh-my-zsh")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("但是当我输入这条命令时，却提示我：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("Failed to connect to raw.githubusercontent.com port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(": Connection refused\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("后来搜索到了解决方法如下：")]),s._v(" "),a("p",[s._v("（1）首先，这个网站是需要科学上网才能访问的。")]),s._v(" "),a("p",[s._v("（2）开启科学上网之后，访问 https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh，可以访问的话会看到以下内容：")]),s._v(" "),a("p",[a("img",{attrs:{src:e(359),alt:"mac",title:"mac"}})]),s._v(" "),a("p",[s._v("（3）接下来，把这个网页保存下来，命名为：zsh.sh 文件，注意，文件名可以任意，只要后缀是 .sh 就行了。然后打开终端，先给 zsh.sh 文件加上执行权限：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x zsh.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后执行这个文件：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./zsh.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("就大功告成啦～")]),s._v(" "),a("p",[a("img",{attrs:{src:e(360),alt:"mac",title:"mac"}})]),s._v(" "),a("p",[s._v("按道理，配置到这里，打开终端的时候应该就能看到一把枪了，可奇怪的是，我的却没有自动出现一把枪，只有运行命令的时候才会出来。找了很久也不知道什么原因，无奈只好继续往下配置。")]),s._v(" "),a("p",[a("strong",[s._v("7. 高亮显示")])]),s._v(" "),a("p",[s._v("首先，下载 "),a("a",{attrs:{href:"https://github.com/zsh-users/zsh-syntax-highlighting.git",target:"_blank",rel:"noopener noreferrer"}},[s._v("zsh-syntax-highlighting"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("然后执行命令 vi .zshrc 打开 .zshrc 文件，在我的电脑中这个文件就在 ～ 目录下，是一个隐藏文件，需要用 ls -a 或 ls -al 才能看到。打开文件后在最下面添加这句话：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" XXX/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其中，XXX 表示的是 .zshrc 文件所在的目录。在我的电脑中是 /Users/linnan，也可以直接用 ～。")]),s._v(" "),a("p",[s._v("接着，执行命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.oh-my-zsh/custom/plugins\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("再次打开 .zshrc 文件，也是在最下面添加以下内容：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("zsh-syntax-highlighting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("此时，.zshrc 文件中的内容如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:e(361),alt:"mac",title:"mac"}})]),s._v(" "),a("p",[a("strong",[s._v("8. 换主题")])]),s._v(" "),a("p",[s._v("首先，执行命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.oh-my-zsh/themes\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后在这个目录下下载 agnoster 主题：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/agnoster/agnoster-zsh-theme.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v('接着，执行 vi .zshrc 打开 .zshrc 文件，然后将里面的 ZSH_THEME 字段值改成 agnoster。即 ZSH_THEME = "agnoster" （agnoster就是要设置的主题）。')]),s._v(" "),a("p",[s._v("最后一步，也是最关键的一步，将之前在 .bash_profile 文件中添加的启动欢迎脚本删掉：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("lolcat ~/Desktop/webcome.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后在 .zrhrc 文件中添加这句脚本，如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:e(362),alt:"mac",title:"mac"}})]),s._v(" "),a("p",[s._v("重新启动终端，就可以看到梦寐以求的手枪啦 😆")]),s._v(" "),a("p",[a("img",{attrs:{src:e(363),alt:"mac",title:"mac"}})]),s._v(" "),a("p",[s._v("打开 vscode，也照样能看到 😆")]),s._v(" "),a("p",[a("img",{attrs:{src:e(364),alt:"mac",title:"mac"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);