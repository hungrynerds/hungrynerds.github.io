# Authentication using SSH key

When working with a GitHub repository, you'll often need to identify yourself to GitHub using your username and password. An SSH key is an alternate way to identify yourself that doesn't require you to enter you username and password every time you want to deal with Github.

### Create SSH key with the following steps:

1. Generate an SSH key pair

```
ssh-keygen -t rsa -b 4096 -C "your@email.com"
```

2. Search for the key that has been generated (optional)

```
ls -al ~/.ssh
```

3. Print your public SSH key (optional)

```
cat .ssh/id_rsa.pub
```

4. Start the ssh-agent

```
eval "$(ssh-agent -s)"
```

5. Add your SSH private key

```
ssh-add ~/.ssh/id_rsa
```

6. Copy your **public** key to the clipboard

- **Linux**: `xclip -sel clip < ~/.ssh/id_rsa.pub`
- **Mac**: `pbcopy < ~/.ssh/id_rsa.pub`
- **Windows**: `clip < ~/.ssh/id_rsa.pub`

7. Go to Github > account setting > SSH and GPG Keys

8. Click on **New SSH key**

9. Choose a title (preferably a name that indicate the machine from which the key was generated),

10. Paste the content of your clipboard into the **Key** text box.

11. Hit **Add SSH key** to save. Enter your github password if prompted.
