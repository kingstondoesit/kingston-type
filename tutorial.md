# Building Your First Typing Game with JavaScript

![extension page screenshot](JS_Series\Assets\typing-game.png) *replace this*

Welcome! This is a step-by-step guide to building a minimalist typing game with JavaScript using VSCode and AI.

In this article, you'll learn how to set up manipulate the DOM (Document Object Model) and implement a variety of programming logic to create a fully functional typing game.

At the end of this tutorial, you will not only gain hands-on experience with key JavaScript concepts, but you will also build a fun, interactive project that will attest to your learning progress and set you up for advanced web development projects in the future.

This tutorial is be subdivided into the following sections;

- Pre-requisites and development tools

- Setting up your project environment

- Project setup

- Page markup and interactive element layout

- Functionality implementation

- Code Test

- Git

## Pre-requisites and Development Tools

It is recommended that you have a basic markup experience (with HTML and CSS), as well as a rudimentary understanding of the universal language of the web (Javascript).

If you’re already comfortable working with all three, you’re ready to begin but if that is not the case, then you should take a look at this resource to get up to speed.

### Tools You’ll Need

You're almost ready to build your first typing game in Javascript but there are a few tools you will need. Some of these were introduced to you in the resource link above, however there are new introductions. Overall you should have the following;

- **An IDE (Integrated Development Environment)**: We will be using Visual Studio Code (VSCode) alongside helper extensions, but you can download and use any other IDE of your choice.

- **A Web Browser**: Install MS-Edge, Chrome, Firefox, or any other modern browser to view and test the output your code.

- **Git**: For version control and collaboration, although not mandatory for this project.

- An **AI Assistant** is recommended but not mandatory. A free version of ChatGpt will suffice.

## Setting up your project environment

### Install VS Code Extensions

Extensions enable a smooth and efficient programming experience. For the part 1 of this tutorial, install the following VS Code extensions:

- **Prettier - Code Formatter**:   
Prettier ensures consistent code formatting across your project. Prettier automatically formats your code with a keystroke or on save, making it more readable.

- **ESLint (Code Linter)**:   
ESLint helps identify and fix common coding errors. A `linter` enforces coding standards and best practices, helping you write cleaner JavaScript.

- **Live Server**:  
Live server lets you launch a development local server with a live reload feature for static and dynamic pages. It’s invaluable for testing your game in real-time as you develop.

![extension page screenshot](./JS_Series/Assets/VS%20code%20-%20ESLint.png)

The above image is a demo of the extension installation process. I have used ESLint for this purpose but the process is the same for others. To install an extensions:

- Click on the Extensions icon on the sidebar or press `Ctrl + Shift + X`.

- Enter the extension name in the search bar and click on the first result.

- Click "Install".

### Setting Up Your Project

#### Creating the Project Structure

Start by setting up your project folder. Inside your main project directory, create three files:

- index.html
- style.css
- script.js

#### Basic HTML Layout

In the index.html file, set up the basic structure of your typing game. This will include a container for displaying the quote, an input box for typing, a timer, and a start button.
