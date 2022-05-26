# Git & Github

1. [The benefits of Version Control](#the-benefits-of-version-control)
2. [Install and configure Git](#install-and-configure-git)
3. [Git commands](#git-commands)
   - [Getting & Creating](#getting-and-creating)
   - [Basic Snapshotting](#basic-snapshotting)
   - [Sharing and Updating Projects](#sharing-and-updating-projects)
   - [Remove and change remote](#remove-and-change-the-url-for-a-remote-git-repository)
   - [Inspection and Comparison](#inspection-and-comparison)
   - [Branching](#branching-commands)

<br/>

4. [Start using Github (2 ways)](#start-using-github)
   - [Connect local repository with a remote repository via URL](#create-a-local-repo-and-a-remote-repo-then-connect-them-using-a-url)
   - [Clone remote repository](#create-only-a-remote-repo-and-clone-it-into-your-computer)

<br/>

5. [Push your code to Github](#push-your-code-to-github)
6. [Pull changes from remote repo](#pull-changes-from-remote-repo-to-your-local-machine)
7. [Git Branching](#git-branching)
8. [External Resources](#external-resources)

<br/>

# Terms:

| Term                   | Short definition                                                                                     |
| ---------------------- | ---------------------------------------------------------------------------------------------------- |
| Git                    | Free and open source version control system                                                          |
| Version control system | The management of changes on our code                                                                |
| Repository             | The place where your project is kept                                                                 |
| Repo                   | Short for Repository                                                                                 |
| Local Repo             | Where your project is locally kept                                                                   |
| Remote Repo            | Where your project is remotely kept                                                                  |
| Github                 | A website to host your repositories online                                                           |
| Branch                 | Where an updated copy of the main code is kept without affecting the main version with those changes |

<br/>

# The benefits of Version Control:

- Save an initial version of our code
- Register a complete long-term change history of every file
- Branching -> keeps multiple copies of work independent from each other
- Merging -> providing the facility to merge that work back together
- Being able to trace each change made to the project

<br/>

# Install and configure Git

#### Install Git

```
sudo apt-get install git
```

#### User Configuration

After you install Git, we need to add an username and email address. Git will automatically embed this information whenever we commit our changes to Git repository.
This can be done with the following command.

```
git config --global user.name "Your github username"
git config --global user.email "Your Email"
```

> You can check your credentials by typing `git config -l` in your terminal

> There are other VCSs like Mercurial, SVN & CVS, but here we are going to focus only on Git.

<br/>

# Git commands

## Getting and Creating

| Command                                                    | Description                                |
| ---------------------------------------------------------- | ------------------------------------------ |
| `git init`                                                 | Initialize a local Git repository          |
| `git clone git@github.com[username]/[repository-name].git` | Create a local copy of a remote repository |

<br/>

## Basic Snapshotting

| Command                          | Description                                        |
| -------------------------------- | -------------------------------------------------- |
| `git status`                     | Check the status of the repository and its content |
| `git add [file-name]`            | Add the specified file to the staging area         |
| `git add .`                      | Add all new and changed files to the staging area  |
| `git commit -m "commit message"` | Save your changes in Git                           |
| `git rm -r [file/dir-name]`      | Remove a file (or directory)                       |

<br/>

## Sharing and Updating Projects

| Command                                                                | Description                                                       |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `git push origin [branch name]`                                        | Push changes to your remote repository                            |
| `git push -u origin [branch name]`                                     | Push changes to remote repository (and ste the branch as default) |
| `git push`                                                             | Push changes to remote repository (default branch)                |
| `git push origin --delete [branch name]`                               | Delete a remote branch                                            |
| `git pull origin [branch name]`                                        | Pull changes from remote repository                               |
| `git remote add origin git@github.com[username]/[repository-name].git` | Add a remote repository                                           |

<br/>

## Remove and change the URL for a remote git repository

| Command                                   | Description                                                                   |
| ----------------------------------------- | ----------------------------------------------------------------------------- |
| `git remote -v`                           | View all the remotes of our local repository                                  |
| `git remote rm [name of the remote)]`     | Remove a remote connection.                                                   |
| `git remote set-url origin [new git url]` | Create new remote connection called origin (you can also choose another name) |

In the folowing example the remote is called `origin`

```
zkh@zkh ~/Desktop/square (main) $ git remote -v
>> origin	git@github.com:ZakariaHn/square.git (fetch)
>> origin	git@github.com:ZakariaHn/square.git (push)

```

<br/>

## Inspection and Comparison

| Command                                   | Description                    |
| ----------------------------------------- | ------------------------------ |
| `git log`                                 | View changes                   |
| `git log --summary`                       | View changes (detailed)        |
| `git log --oneline`                       | View changes (briefly)         |
| `git diff [source branch] [target branch` | Preview changes before merging |

<br/>

# Start using Github

> Before starting with Github make sure to authenticate your computer with the remote server (Github) for a secure connection

> > Check the other readme.file `ssh.README.md`

<br/>

## There are two ways to start working with Github:

<br/>

### Create a local repo and a remote repo then connect them using a URL

---

<br/>

## 1. Create a GitHub account

you can create an account on [GitHub.com](https://github.com/) for free:

- Pick a username (e.g., hungryNerd88),
- Enter your email address and a password,
- Click **Sign up for GitHub**.

<br/>

## 2. Create a new repository

To create a new repository:

- Select **New Repository** from the `+` sign dropdown menu in the upper-right corner
- Enter a name for your repository (e.g, "demo-repo")
- Click **Create Repository**

<br/>

## 3. Set a local environment for our project

- Create a directory and relocate into it: `mkdir [dir-name] && cd [dir-name]`
- Create a file named `README.md` and write `First Demo` in it: `echo "#Demo" >> README.md`

<br/>

## 4. Initialize a local repository

Tell your computer that _demo-repo_ is a directory managed by the Git program: `git init`

<br/>

## 5. Track changes

Tell Git you care about this file and want to track any changes from this point on: `git add [file-name]`

<br/>

> `git add .` can be used to track all the content of the working directory if there is multiple files and directories

<br/>

## 6: Commit changes

Commit can be thought of as a milestone. Every time you accomplish some work, you can write a Git commit to store that version of your file, so you can go back later and see what it looked like at that point in time. Whenever you make a change to your file, you create a new version of that file, different from the previous one.

```
git commit -m "your message"
```

<br/>

## 7. Connect your GitHub repo with your computer

Make sure to copy the URL for the SSH connection from your repository on Github and use it along with `git remote add origin`

```
git remote add origin git@github.com[username]/[repository-name].git
```

We are telling Git to add a remote called **origin** with the address `git@github.com[username]/[repository-name].git`. This allows you to interact with your Git repository on GitHub by typing origin instead of the full URL and Git will know where to send your code.
Why origin? Well, you can name it anything else if you'd like, but make sure to use the same name when you push, pull ...etc

<br/>

## **OR**

### Create only a remote repo and clone it into your computer

---

1. Create a new repository with readme file
2. Click the **Clone** button and copy the ssh URL
3. Use the git clone command along with the copied URL: `git clone git@github.com[username]/[repository-name.git`

<br/>

When you clone a remote repo, a local repo will be automatically initialized in your computer, unlike the previous way, you **don't need** to initialized a local one with `git init`, then track the changes `git add .`, then save them `git commit`. That is becouse there is non to watch and save yet.

You can directly do changes, after that you track and then save them `git add .`, `git commit -m "your-message"`

<br/>

<br/>

## Push your code to Github

---

Now that we have added the remote repo and identified our machines using SSH keys , we can upload our code to Github

```
git push origin master/ main
```

<br/>

## Pull changes from remote repo to your local machine

The git pull command is used to fetch and download content from a remote repository and immediately update the local repository to match that content

```
git pull origin master/ main
```

<br/>
<br/>

# Git Branching

In a nutshell, Git branches allow developers to diverge from the main branch by creating separate branches to isolate code changes. The default branch in Git is the master/ main branch and any other branch we create is referred to as a feature branch and we have the permission to name it whatever we want.

<br/>

### Branching Commands

| Command                                             | Description                                             |
| --------------------------------------------------- | ------------------------------------------------------- |
| `git branch`                                        | List branches (the asterisk denotes the current branch) |
| `git branch -a`                                     | List all branches (local and remote)                    |
| `git branch [branch name]`                          | Create a new branch                                     |
| `git branch -m [old branch name] [new branch name]` | Rename a local branch                                   |
| `git branch -d [branch name]`                       | Delete a branch                                         |
| `git push origin --delete [branch name]`            | Delete a remote branch                                  |
| `git clone -b [branch name] [remote repo-url]`      | Clone a remote branch                                   |
| `git checkout [branch name]`                        | Switch to another branch                                |
| `git checkout -b [branch name]`                     | Create a new branch and switch to it                    |
| `git checkout -`                                    | Switch to the branch last checked out                   |
| `git checkout -- [file-name.txt]`                   | Discard changes to a file                               |
| `git switch -c [new branch name]`                   | Create a new branch                                     |
| `git switch [existing branch name]`                 | Switch to another branch                                |

<br/>

> The "switch" command is relatively new (added in Git v2.23) and provides a simple alternative to the classic "checkout" command..
>
> It has a very clear and limited purpose: switching and creating branches!

<br/>

<br/>

## External Resources

---

- [Learn Git Branching visually](https://www.atlassian.com/git/tutorials/saving-changes)
- [Git and Github Visualized (video about the game in the link above)](https://www.youtube.com/watch?v=p384Hw2eewA)
- [What is Git?](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F#what_is_git_section)
- [Saving changes](https://www.atlassian.com/git/tutorials/saving-changes)
- [Git Behind the Scenes: How Does Git Work (video)](https://www.youtube.com/watch?v=gzJk1ruqSok)
- [Deleting your git commit history without removing repo on Github](https://www.willandskill.se/en/deleting-your-git-commit-history-without-removing-repo-on-github-bitbucket/)
