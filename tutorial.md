# Building Your First Typing Game with JavaScript

![extension page screenshot](JS_Series\Assets\typing-game.png) *replace this*

Welcome! This is a step-by-step guide to building a minimalist typing game with JavaScript using VSCode and AI.

You'll learn how to set up and manipulate the DOM (Document Object Model) while implementing a variety of programming logic to create a fully functional typing game.

At the end of this tutorial, you will not only gain hands-on experience with key JavaScript concepts, you will also build a fun, interactive tool that will attest to your learning progress and set you up for advanced web development projects in the future.

This tutorial is subdivided into the following sections;

- Pre-requisites and development tools

- Setting up your project environment

- Project Deliverables

- Project structure setup

- Page markup and interactive element layout

- Functionality implementation

- Code Test

- Git

## Pre-requisites

It is recommended that you have at least a basic markup experience (with HTML and CSS) and a rudimentary understanding of the universal language of the web (Javascript).

You should be familiar with the following concepts:

- Creating text input and form submit buttons
- CSS styling using ids and classes
- JavaScript basics:
  - Creating an array
  - Creating a random number
  - Getting the current time
  - Fetching data from API

If you’re already comfortable with the above, you’re ready to begin but if that is not the case then you should consider studying the content and completing the practice tests in this [resource](https://google.com) .

## Tools You’ll Need

You're almost ready to build your first typing game in Javascript but there are a few tools you will need. Some of these were introduced to you in the resource link above, however there are new introductions. Overall you should have the following;

- **An IDE (Integrated Development Environment)**: We will be using Visual Studio Code (VSCode) alongside helper extensions, but you can download and use any other IDE of your choice.

- **A Web Browser**: Install MS-Edge, Chrome, Firefox, or any other modern browser to view and test the output of your code.

- **Git**: For version control and collaboration, although not mandatory.

- **Generative AI Assistant**: A free version of ChatGpt will suffice.

## Setting up your project environment

### Install VS Code Extensions

Extensions enable a smooth and efficient programming experience. For the part 1 of this tutorial, install the following VS Code extensions:

- **Prettier - Code Formatter**: to enhance code readability with consistent formatting styles.

- **ESLint (Code Linter)**: to identify and fix common coding errors.

- **Live Server**:  to test your game in real-time during development phase.

![extension page screenshot](./JS_Series/Assets/VS%20code%20-%20ESLint.png)

The above image is a demo of the extension installation process. I have used `ESLint` for this purpose but the process is the same for others. To install any extension:

- Click on the Extensions icon on the left sidebar of VS code or press `Ctrl + Shift + X`.

- Enter the extension name in the search bar and click on the most relevant result (usually the first on the list).

- Click "Install".

>It is recommended that you restart VS code after installing extensions for proper IDE integration.

### Project Deliverables

Before we set up our project, pause for a moment and think about what features make up a typing game. If you have played one before or used any typing tool in the past, you will notice that they:

- Provide an intuitive and interactive interface to the user/player.

- Display a random word, quote or sentence for the user to type.

- Track and compare the user's input against the displayed text or group of texts.

- Highlight correct and incorrect submissions, and signal erroneous input in real-time.

- Measure typing speed AKA Word Per Minute (WPM) and accuracy.

- Provide feedback of tracked data on completion.

- Store typing records at the end of each session.

We could regard these as the core features and functionalities of a typing game. Therefore, these are what we aim to achieve at the end of this project.

Now that we are clear on the primary objectives of what we want to build, lets's start by initiating a basic project structure.

### Creating the Project Structure

Begin by setting up a project folder named `Typing-Game`. (You can give it any name of your choosing)

Inside the main project directory, create the following new files:

- index.html
- style.css
- script.js

![file create screenshot](./JS_Series/Assets/firstThree.png)

`index.html` will house all our markup. It is essentially the file the web browser loads by default, and the resulting webpage which users interact with.

`style.css` serves as our stylesheet ***

`script.js` will hold all the underlying logic governing the typing game's behaviour.

#### Basic HTML Layout

In the `index.html` file, set up the structure of your typing game.

In VS code, use the exclamation mark (`!`) [Emmet Abbreviation](https://code.visualstudio.com/docs/editor/emmet) on the page of the newly created file. This will automatically populate the page with a basic HTML boilerplate structure, as shown below.

![image after using exclamation mark](./JS_Series/Assets/after-exclam-emmet.png)

Next, copy this block of code and insert it in the body of your html markup:

```html
  <header>
    <h1 id="welcome">Welcome!</h1>
    <nav class="reset-btn">
      <div class="reset-div">
        <p id="reset-msg">reset typing records</p>
        <button id="reset">
          <i class="ri-reset-left-fill"></i>
        </button>
      </div>
    </nav>
    <h1><time id="timer" class="timer none" datetime=""></time></h1>
  </header>
```

The above `<header>` tag contains three key elements you should take note of. First, a `h1` element that displays a welcome message with an ID of **welcome**.

Since the game will be capable of saving a bunch of typing records, we are including a reset button in navigation section (nav) incase a user decides to revert to a clean slate. We are going to outsource the reset button icon style from an npm style pack and implement with the `<i>` tag (more on that later on).

Lastly, a second h1 element that wraps a hidden timer (`<time>`) is also  included and will be displayed during the typing game.

Now onto the main section of the game. Attach the following code under the header element:

```html
<div class="main">
  <div>
    <p id="prompt_start">
      Practice your typing skills with a quote from
      <a class="link" target="_blank" href="https://quotable.io/">quotable</a> <br />
      Click the <strong>Start button</strong> to begin!
    </p>
    <p id="prompt_again" class="none">
      Click the <strong>Start button</strong> to play again!
    </p>
    <p id="quote" class="quote"></p>
    <p id="message"></p>
  </div>
<div>
```

The `<div class="main">` block contains several elements aimed at guiding and interacting with the user. First, there's a paragraph `<p>` with the ID `prompt_start` that provides instructions on starting the typing game and includes a link to the external quote source (quotable.io). There's also a secondary hidden paragraph with the ID `prompt_again`, that prompts the user to replay after finishing the game.

Additionally, there is empty paragraph with the ID `quote`, displays a random quote fetched from the API endpoint during the game. There is another empty paragraph `<p id="message">` that, on typing completion, shows a congratulatory message and alerts the user their result for that session alongside previous typing records.

#### Typing Area

```html
<div>
  <form action="" class="form">
    <input
      type="text"
      aria-label="current word"
      id="typed-value"
      class="form-input"
    />
    </form>
  <button type="button" id="start" class="form-btn">Start</button>
</div>
```

This will include a container for displaying the quote, an input box for typing, a timer, and a start button.

>We shall revisit this markup file to add more features as we go. For now, lets setup

## Credits

This guide builds on the typing-game reference documentation [by Microsoft](https://github.com/microsoft/Web-Dev-For-Beginners/tree/main/4-typing-game), so huge credits goes to author [Christopher Harrison](http://www.twitter.com/geektrainer).
