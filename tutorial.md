# Building Your First Typing Game with JavaScript

Welcome to a step-by-step guide on building a minimalist typing game with JavaScript using VSCode and AI. In this article, you'll learn how to set up your development environment, structure your code, mznipulate the DOM (document object model) and implement a variety of features to create a fully functional typing game.

At the end of this tutorial, you will not only gain hands-on experience with key JavaScript concepts, but you will also build a fun, interactive project that will attest to your learning progress and set you up for advanced web development projects in the future.

This tutorial will be subdivided into the following sections;

- Pre-requisites and development tools
- Setting up your project environment
- Creating a project struture
- Markup page layout and interactive elements
- Functionality
- Code Testing
- Git

## Pre-requisites and Development Tools

It is recommended that you have a basic markup experience(with HTML and CSS), as well as a rudimentary understanding of the universal language of the web (javascript).

If you’re already comfortable working with the above, you’re ready to begin but if that is not the case, then you should take a look at this resource to get up to speed.

### Tools You’ll Need

You're almost ready to build your first typing game in Javascript but there are a few tools you need to follow through with the rest of this guide. A few of these were introduced to you in the resource link above, however there are new introductions. Overall you should have the following;

- An IDE: I'll be using Visual Studio Code (VSCode) alongside helper extensions, but you can use anyone of your choice.
- A Web Browser: Chrome, Firefox, or any other modern browser to test your code.
- Git: For version control and collaboration, although not mandatory for this project.
An AI Assistant is recommended but not mandatory. A free version of ChatGpt will suffice.

## Setting up your project environment

### Install VS Code Extensions

For a smoother and more efficient experience, install the following VS Code extensions:

- Prettier - Code Formatter: Ensures consistent code formatting across your project. Prettier automatically formats your code on save, making it more readable.

ESLint (Code Linter): Helps identify and fix common coding errors. A linter enforces coding standards and best practices, helping you write cleaner JavaScript.
Live Server: This extension allows you to launch a development local server with a live reload feature for static and dynamic pages. It’s invaluable for testing your game in real-time as you develop.
To install these extensions:

Open VSCode.
Click on the Extensions icon on the sidebar or press Ctrl + Shift + X.
Search for "Prettier - Code Formatter," "ESLint," and "Live Server."
Click "Install" for each extension.

Step 1: Setting Up Your Project
1.1. Creating the Project Structure
Start by setting up your project folder. Inside your main project directory, create three files:

index.html
style.css
script.js
1.2. Basic HTML Layout
In the index.html file, set up the basic structure of your typing game. This will include a container for displaying the quote, an input box for typing, a timer, and a start button.