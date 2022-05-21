"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8880],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=a,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6311:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Viewing, Navigating, Creating, Manipulating files and directories",tags:["linux"]},s=void 0,m={unversionedId:"Linux/Viewing, Navigating, Creating, Manipulating files and directories",id:"Linux/Viewing, Navigating, Creating, Manipulating files and directories",title:"Viewing, Navigating, Creating, Manipulating files and directories",description:"This note has been shared with me by our awesome teacher Zakaria Hamdan.",source:"@site/docs/Linux/Viewing, Navigating, Creating, Manipulating files and directories.md",sourceDirName:"Linux",slug:"/Linux/Viewing, Navigating, Creating, Manipulating files and directories",permalink:"/docs/Linux/Viewing, Navigating, Creating, Manipulating files and directories",draft:!1,editUrl:"https://github.com/hungrynerds/hungrynerds.github.io/docs/docs/Linux/Viewing, Navigating, Creating, Manipulating files and directories.md",tags:[{label:"linux",permalink:"/docs/tags/linux"}],version:"current",frontMatter:{title:"Viewing, Navigating, Creating, Manipulating files and directories",tags:["linux"]},sidebar:"tutorialSidebar",previous:{title:"Linux",permalink:"/docs/Linux/"}},p={},u=[{value:"<strong>root directory? root home directory? user home directory?</strong>",id:"root-directory-root-home-directory-user-home-directory",level:2},{value:"<strong>Basic shell Commands</strong>",id:"basic-shell-commands",level:2},{value:"<strong>01. man &amp; --help</strong>",id:"01-man----help",level:3},{value:"<strong>02. pwd</strong>",id:"02-pwd",level:3},{value:"<strong>03. ls</strong>",id:"03-ls",level:3},{value:"<strong>04. cd</strong>",id:"04-cd",level:3},{value:"Absolute/Relative Pathnames:",id:"absoluterelative-pathnames",level:5},{value:"Change current directory to root directory",id:"change-current-directory-to-root-directory",level:5},{value:"Change Current directory to parent or current directory",id:"change-current-directory-to-parent-or-current-directory",level:5},{value:"Switch back to previous directory",id:"switch-back-to-previous-directory",level:5},{value:"Move to users home directory from any location",id:"move-to-users-home-directory-from-any-location",level:5},{value:"<strong>05. mkdir</strong>",id:"05-mkdir",level:3},{value:"<strong>06. rmdir</strong>",id:"06-rmdir",level:3},{value:"<strong>07. touch</strong>",id:"07-touch",level:3},{value:"<strong>08. nano</strong>",id:"08-nano",level:3},{value:"Opening and Creating Files",id:"opening-and-creating-files",level:5},{value:"<strong>09. less</strong>",id:"09-less",level:3},{value:"<strong>10. cp</strong>",id:"10-cp",level:3},{value:"<strong>11. mv</strong>",id:"11-mv",level:3},{value:"<strong>12. rm</strong>",id:"12-rm",level:3},{value:"External Resources",id:"external-resources",level:3}],d={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This note has been shared with me by our awesome teacher Zakaria Hamdan."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Folder")," in Windows is referred to as ",(0,o.kt)("strong",{parentName:"p"},"Directory")," in Linux and each directory can have sub directories or files")),(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#01.-man-&---help"},"01. man & --help")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#02-pwd"},"02. pwd")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#03-ls"},"03. ls")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#04-cd"},"04. cd")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#05-mkdir"},"05. mkdir")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#06-rmdir"},"06. rmdir")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#07-touch"},"07. touch")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#08-nano"},"08. nano")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#09-less"},"09. less")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#10-cp"},"10. cp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#11-mv"},"11. mv")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#12-rm"},"12. rm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#external-resources"},"External Resources"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"root-directory-root-home-directory-user-home-directory"},(0,o.kt)("strong",{parentName:"h2"},"root directory? root home directory? user home directory?")),(0,o.kt)("p",null,"There are two types of users in a Linux system. The First one is the root user, also known as super user, and the other one is the normal user."),(0,o.kt)("p",null,"The root user has the infinite power and can do anything in the system, while the normal user has some sort of restrictions and can't perform all the operations that the root user can perform."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"/"))," is the top level directory, which is known as root directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"~"))," user home directory, (Default current working directory when opening new terminal session)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"/root"))," root home directory. it is the same of your user home directory but for the root account")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can open ubuntu file manager as root user by typing ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"sudo nautilus"))," in your terminal")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"basic-shell-commands"},(0,o.kt)("strong",{parentName:"h2"},"Basic shell Commands")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"open-terminal-keyboard-shortcut: ",(0,o.kt)("strong",{parentName:"p"},"Ctrl + Alt + t"))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"01-man----help"},(0,o.kt)("strong",{parentName:"h3"},"01. man & --help")),(0,o.kt)("p",null,"Both of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"man"))," and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"help"))," are used to display the user manual of any command that we can run on the terminal"),(0,o.kt)("p",null,"Syntax:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"man [command name]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"[command name] --help")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"without the square brackets ",(0,o.kt)("inlineCode",{parentName:"p"},"[]"))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"02-pwd"},(0,o.kt)("strong",{parentName:"h3"},"02. pwd")),(0,o.kt)("p",null,"When you first open the terminal, you are in the home directory of your user. To know which directory you are in, you can use the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"pwd")),' command. It gives us the absolute path, which means the path that starts from the root. The root is the base of the Linux file system. It is denoted by a forward slash( / ). The user directory is usually something like "/home/username".'),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"03-ls"},(0,o.kt)("strong",{parentName:"h3"},"03. ls")),(0,o.kt)("p",null,"Used to know what files and directories are in the directory you are in."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Linux commands")," can be used in combination with ",(0,o.kt)("strong",{parentName:"p"},"Flags")," to modify the behavior of a command")),(0,o.kt)("p",null,"Some examples about ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ls"))," with Flags:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ls -a"))," lists all the hidden files"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ls -r"))," lists all files in reversed order"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ls -R"))," recursively lists sub-directories"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ls -l"))," displays the long format of the files"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ls -lh"))," displays the long format of the files, but it shows the sizes in human readable format")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"04-cd"},(0,o.kt)("strong",{parentName:"h3"},"04. cd")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"cd")),' command, which stands for "change directory", changes the shell\'s current working directory'),(0,o.kt)("h5",{id:"absoluterelative-pathnames"},"Absolute/Relative Pathnames:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Elements of a pathname are separated by a /"),(0,o.kt)("li",{parentName:"ul"},"A pathname is absolute if it is described in relation to root"),(0,o.kt)("li",{parentName:"ul"},"Absolute pathnames always begin with a /")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"zkh@zkh:~$ cd public/                   `Relative Pathnames`\nzkh@zkh:~$ cd /home/smh/public/         `Absolute Pathnames`\nzkh@zkh:~/public$\n")),(0,o.kt)("h5",{id:"change-current-directory-to-root-directory"},"Change current directory to root directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"zkh@zkh:~/public/git/linux-tutorial$ cd /\nzkh@zkh:/$\n")),(0,o.kt)("h5",{id:"change-current-directory-to-parent-or-current-directory"},"Change Current directory to parent or current directory"),(0,o.kt)("p",null,"The current working directory is represented by a single dot ",(0,o.kt)("inlineCode",{parentName:"p"},"."),"\nIf you type ",(0,o.kt)("inlineCode",{parentName:"p"},"cd ."),", you will change into the current directory, in other words, the command will do nothing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"zkh@zkh:~/Desktop$ cd .\nzkh@zkh:~/Desktop$\n")),(0,o.kt)("p",null,"Two dots ",(0,o.kt)("inlineCode",{parentName:"p"},".."),", one after the other, represent the parent directory or the directory immediately above the current one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"zkh@zkh:~/Desktop/React$ cd ..\nzkh@zkh:~/Desktop$\n")),(0,o.kt)("h5",{id:"switch-back-to-previous-directory"},"Switch back to previous directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"zkh@zkh:~/Desktop$ cd -\n/home/zkh/Desktop/React\nzkh@zkh:~/Desktop/React$\n")),(0,o.kt)("h5",{id:"move-to-users-home-directory-from-any-location"},"Move to users home directory from any location"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"zkh@zkh:~/Desktop/React$ cd ~\nzkh@zkh:~$\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"zkh@zkh:~/Desktop/React$ cd\nzkh@zkh:~$\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"05-mkdir"},(0,o.kt)("strong",{parentName:"h3"},"05. mkdir")),(0,o.kt)("p",null,"The command ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"mkdir"))," allows you to create directories by typing it into your terminal followed by a name of you choice"),(0,o.kt)("p",null,"To create:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Single directory: ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"mkdir myDirectory"))),(0,o.kt)("li",{parentName:"ul"},"Single directory that it's name contains two words separated by an empty space/s: ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"mkdir my\\ directory"))," or ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},'mkdir "my directory"'))),(0,o.kt)("li",{parentName:"ul"},"Multiple directories: ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"mkdir directory1 directory2 directory3 "))),(0,o.kt)("li",{parentName:"ul"},"Multiple directories that there names contains multiple words separated by empty space/s: ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"mkdir my\\ directory my\\ other\\ directory"))," or ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},'mkdir "my directory" "my other directory"')))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"06-rmdir"},(0,o.kt)("strong",{parentName:"h3"},"06. rmdir")),(0,o.kt)("p",null,"The command ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"rmdir"))," allows you to remove directories by typing it into your terminal followed by the name of the directory you want to remove"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"rmdir"))," follow the same rules of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"mkdir"))," regarding removing single/multiple files with different naming conventions")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We can remove only empty directories using the command ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"rmdir")))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"07-touch"},(0,o.kt)("strong",{parentName:"h3"},"07. touch")),(0,o.kt)("p",null,"The command ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"touch"))," is used to create files by typing it into the terminal followed by a name and suffix"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"touch"))," follow the same rules of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"mkdir"))," regarding creating single/multiple files with different naming conventions")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We can also use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"touch"))," to change and modify timestamps. ",(0,o.kt)("a",{parentName:"p",href:"https://linuxize.com/post/linux-touch-command/"},"Read more"))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"08-nano"},(0,o.kt)("strong",{parentName:"h3"},"08. nano")),(0,o.kt)("p",null,"Nano text editor is pre-installed on macOS and most Linux distros. To check if it is installed on your system type:\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"nano --version"))),(0,o.kt)("p",null,"If it is not installed, you can install by typing ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"sudo apt install nano"))," in your terminal."),(0,o.kt)("h5",{id:"opening-and-creating-files"},"Opening and Creating Files"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To open an existing file, type ",(0,o.kt)("inlineCode",{parentName:"li"},"nano [file name]")),(0,o.kt)("li",{parentName:"ul"},"To create a new file and open it immediately, type ",(0,o.kt)("inlineCode",{parentName:"li"},"nano [file name]"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"without the square brackets ",(0,o.kt)("inlineCode",{parentName:"p"},"[]"))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"09-less"},(0,o.kt)("strong",{parentName:"h3"},"09. less")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"less"))," used to read the contents of a text file one page at a time.\nThe ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"less"))," command doesn\u2019t load the entire file, but loads it part by part which makes it faster."),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"10-cp"},(0,o.kt)("strong",{parentName:"h3"},"10. cp")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"cp"))," command is used for copying files and directories to another location. To copy a file, specify ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"cp"))," followed by the name of a file to copy. Then, state the location at which the new file should appear"),(0,o.kt)("p",null,"to copy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"file or directory to another directory: ",(0,o.kt)("inlineCode",{parentName:"li"},"cp [source file/dir name] [dest dir name]")),(0,o.kt)("li",{parentName:"ul"},"file content into another file: ",(0,o.kt)("inlineCode",{parentName:"li"},"cp [source file name] [dest file name]")),(0,o.kt)("li",{parentName:"ul"},"all contents of the current ",(0,o.kt)("inlineCode",{parentName:"li"},"cp -r !([dest dir name]) [dest dir name]")),(0,o.kt)("li",{parentName:"ul"},"multiple Files or directories to another directory: ",(0,o.kt)("inlineCode",{parentName:"li"},"cp [source file/dir name] [other source file/dir name] [dest dir name]"))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"11-mv"},(0,o.kt)("strong",{parentName:"h3"},"11. mv")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"mv"))," command is used for move files and directories to another location. To move a file, specify ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"mv"))," followed by the name of a file/dir to move. Then, state the location at which the new file/dir should appear"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"same rules of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"cp"))," applies on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"mv"))," regarding moving single/multiple files or directories")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"12-rm"},(0,o.kt)("strong",{parentName:"h3"},"12. rm")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"rm"))," commands used to remove files and directories. However, the removed files and directories do not get moved to the Trash. Instead, the rm command removes the files and directories permanently"),(0,o.kt)("p",null,"syntax:\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"rm [option] [filename]"))),(0,o.kt)("p",null,"In order to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"remove a file : ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"rm [file name]"))),(0,o.kt)("li",{parentName:"ul"},"remove the intire content of a directory ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"rm -r *"))),(0,o.kt)("li",{parentName:"ul"},"recursively delete a directory and all its contents: ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"rm -r [directory name]"))),(0,o.kt)("li",{parentName:"ul"},"forcibly delete files without confirmation: ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"rm -f [file name]"))),(0,o.kt)("li",{parentName:"ul"},"remove file after confirmation:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"rm -i")," will ask for confirmation before deleting each file"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"rm -I")," will only ask once and only if you are trying to delete three or more files")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"be careful while using these commands as you will not be able to recover the removed files and directories unless you have a backup.")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"external-resources"},"External Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/DigitalCareerInstitute/BDL-teaching-materials/blob/master/materials/01-intro-terminal.md"},"Intro to terminal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ubuntu.com/tutorials/command-line-for-beginners#1-overview"},"The Linux command line for beginners")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cheatography.com/davechild/cheat-sheets/linux-command-line/"},"Linux Command-line Cheatsheet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://web.mit.edu/mprat/Public/web/Terminus/Web/main.html"},"Terminus Game"))))}c.isMDXComponent=!0}}]);