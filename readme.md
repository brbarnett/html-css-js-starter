# HTML/CSS/JavaScript starter
This is a starter template to tinker with the interaction between HTML, CSS and JavaScript. You can open `index.html` directly, but browsers limit some functionaly of html files opened directly. For a more feature-rich experience, use a simple web server to host this webpage locally.

Let's get started!

## Download an IDE (Integrated Development Environment)
IDE is a fancy term for code editing software. My favorite is [Visual Studio Code](https://code.visualstudio.com/). It allows you to install a ton of extensions that work in almost any language and make your experience more fun.

## Download (or "Clone") this code
I suggest using Git for this in order to learn it, but technically you can just [download a zip of this repository](https://github.com/brbarnett/html-css-js-starter/archive/refs/heads/master.zip).

Git is a tool that allows you to save versions of code locally on your computer, or on the web in places like GitHub. [Check out this guide](https://github.com/git-guides/install-git) to install Git on your computer.

Once you have it installed, open up a terminal in VS Code by pressing `ctrl ` ` and type:

```
git clone https://github.com/brbarnett/html-css-js-starter.git
```

This will download the code to your computer automatically so you can play with it!

## Run a simple web server
This may seem like overkill, but some of the things we're going to install here are tools that developers use every day.

1. [Download and install Node.js](https://nodejs.org/en/download/current) - Node.js is a JavaScript-based environment that can run as a server.
2. VS Code comes with an integrated terminal to run commands. Type `ctrl + ` ` to open it up.
3. Type `npx http-server -o -c-1` and hit enter. If it asks you to install the `http-server` package, type `y` and enter.
4. Navigate your browser to [http://127.0.0.1:8080/](http://127.0.0.1:8080/) to view the webpage!
5. Open up the dev console by pressing `F12` in your browser to view how the code is working.

If you make any changes to your code, don't forget to refresh the website to see the changes.
