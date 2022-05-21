---
title: "Viewing, Navigating, Creating, Manipulating files and directories"
tags:
- linux
---
This note has been shared with me by our awesome teacher Zakaria Hamdan.

> **Folder** in Windows is referred to as **Directory** in Linux and each directory can have sub directories or files

<br />

- [01. man & --help](#01.-man-&---help)
- [02. pwd](#02-pwd)
- [03. ls](#03-ls)
- [04. cd](#04-cd)
- [05. mkdir](#05-mkdir)
- [06. rmdir](#06-rmdir)
- [07. touch](#07-touch)
- [08. nano](#08-nano)
- [09. less](#09-less)
- [10. cp](#10-cp)
- [11. mv](#11-mv)
- [12. rm](#12-rm)
- [External Resources](#external-resources)

<br />

## **root directory? root home directory? user home directory?**

There are two types of users in a Linux system. The First one is the root user, also known as super user, and the other one is the normal user.

The root user has the infinite power and can do anything in the system, while the normal user has some sort of restrictions and can't perform all the operations that the root user can perform.

- **`/`** is the top level directory, which is known as root directory
- **`~`** user home directory, (Default current working directory when opening new terminal session)
- **`/root`** root home directory. it is the same of your user home directory but for the root account

> You can open ubuntu file manager as root user by typing **`sudo nautilus`** in your terminal

<br />

## **Basic shell Commands**

> open-terminal-keyboard-shortcut: **Ctrl + Alt + t**

<br />

### **01. man & --help**

Both of **`man`** and **`help`** are used to display the user manual of any command that we can run on the terminal

Syntax:

- **`man [command name]`**
- **`[command name] --help`**

> without the square brackets `[]`

<br />

### **02. pwd**

When you first open the terminal, you are in the home directory of your user. To know which directory you are in, you can use the **`pwd`** command. It gives us the absolute path, which means the path that starts from the root. The root is the base of the Linux file system. It is denoted by a forward slash( / ). The user directory is usually something like "/home/username".

<br />

### **03. ls**

Used to know what files and directories are in the directory you are in.

> **Linux commands** can be used in combination with **Flags** to modify the behavior of a command

Some examples about **`ls`** with Flags:

- **`ls -a`** lists all the hidden files
- **`ls -r`** lists all files in reversed order
- **`ls -R`** recursively lists sub-directories
- **`ls -l`** displays the long format of the files
- **`ls -lh`** displays the long format of the files, but it shows the sizes in human readable format

<br />

### **04. cd**

The **`cd`** command, which stands for "change directory", changes the shell's current working directory

##### Absolute/Relative Pathnames:

- Elements of a pathname are separated by a /
- A pathname is absolute if it is described in relation to root
- Absolute pathnames always begin with a /

```
zkh@zkh:~$ cd public/ 					`Relative Pathnames`
zkh@zkh:~$ cd /home/smh/public/			`Absolute Pathnames`
zkh@zkh:~/public$
```

##### Change current directory to root directory

```
zkh@zkh:~/public/git/linux-tutorial$ cd /
zkh@zkh:/$
```

##### Change Current directory to parent or current directory

The current working directory is represented by a single dot `.`
If you type `cd .`, you will change into the current directory, in other words, the command will do nothing.

```
zkh@zkh:~/Desktop$ cd .
zkh@zkh:~/Desktop$
```

Two dots `..`, one after the other, represent the parent directory or the directory immediately above the current one.

```
zkh@zkh:~/Desktop/React$ cd ..
zkh@zkh:~/Desktop$
```

##### Switch back to previous directory

```
zkh@zkh:~/Desktop$ cd -
/home/zkh/Desktop/React
zkh@zkh:~/Desktop/React$
```

##### Move to users home directory from any location

```
zkh@zkh:~/Desktop/React$ cd ~
zkh@zkh:~$
```

```
zkh@zkh:~/Desktop/React$ cd
zkh@zkh:~$
```

<br />

### **05. mkdir**

The command **`mkdir`** allows you to create directories by typing it into your terminal followed by a name of you choice

To create:

- Single directory: **`mkdir myDirectory`**
- Single directory that it's name contains two words separated by an empty space/s: **`mkdir my\ directory`** or **`mkdir "my directory"`**
- Multiple directories: **`mkdir directory1 directory2 directory3 `**
- Multiple directories that there names contains multiple words separated by empty space/s: **`mkdir my\ directory my\ other\ directory`** or **`mkdir "my directory" "my other directory"`**

<br />

### **06. rmdir**

The command **`rmdir`** allows you to remove directories by typing it into your terminal followed by the name of the directory you want to remove

> **`rmdir`** follow the same rules of **`mkdir`** regarding removing single/multiple files with different naming conventions

> We can remove only empty directories using the command **`rmdir`**

<br />

### **07. touch**

The command **`touch`** is used to create files by typing it into the terminal followed by a name and suffix

> **`touch`** follow the same rules of **`mkdir`** regarding creating single/multiple files with different naming conventions

> We can also use **`touch`** to change and modify timestamps. [Read more](https://linuxize.com/post/linux-touch-command/)

<br />

### **08. nano**

Nano text editor is pre-installed on macOS and most Linux distros. To check if it is installed on your system type:
**`nano --version`**

If it is not installed, you can install by typing **`sudo apt install nano`** in your terminal.

##### Opening and Creating Files

- To open an existing file, type `nano [file name]`
- To create a new file and open it immediately, type `nano [file name]`

> without the square brackets `[]`

<br />

### **09. less**

**`less`** used to read the contents of a text file one page at a time.
The **`less`** command doesn’t load the entire file, but loads it part by part which makes it faster.

<br />

### **10. cp**

**`cp`** command is used for copying files and directories to another location. To copy a file, specify **`cp`** followed by the name of a file to copy. Then, state the location at which the new file should appear

to copy:

- file or directory to another directory: `cp [source file/dir name] [dest dir name]`
- file content into another file: `cp [source file name] [dest file name]`
- all contents of the current `cp -r !([dest dir name]) [dest dir name]`
- multiple Files or directories to another directory: `cp [source file/dir name] [other source file/dir name] [dest dir name]`

<br />

### **11. mv**

**`mv`** command is used for move files and directories to another location. To move a file, specify **`mv`** followed by the name of a file/dir to move. Then, state the location at which the new file/dir should appear

> same rules of **`cp`** applies on **`mv`** regarding moving single/multiple files or directories

<br />

### **12. rm**

The **`rm`** commands used to remove files and directories. However, the removed files and directories do not get moved to the Trash. Instead, the rm command removes the files and directories permanently

syntax:
**`rm [option] [filename]`**

In order to:

- remove a file : **`rm [file name]`**
- remove the intire content of a directory **`rm -r *`**
- recursively delete a directory and all its contents: **`rm -r [directory name]`**
- forcibly delete files without confirmation: **`rm -f [file name]`**
- remove file after confirmation:
  1. **rm -i** will ask for confirmation before deleting each file
  2. **rm -I** will only ask once and only if you are trying to delete three or more files

> be careful while using these commands as you will not be able to recover the removed files and directories unless you have a backup.

<br />

### External Resources

- [Intro to terminal](https://github.com/DigitalCareerInstitute/BDL-teaching-materials/blob/master/materials/01-intro-terminal.md)
- [The Linux command line for beginners](https://ubuntu.com/tutorials/command-line-for-beginners#1-overview)
- [Linux Command-line Cheatsheet](https://cheatography.com/davechild/cheat-sheets/linux-command-line/)
- [Terminus Game](https://web.mit.edu/mprat/Public/web/Terminus/Web/main.html)