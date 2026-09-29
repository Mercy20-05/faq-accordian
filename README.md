# FAQ Accordion

## Project Overview

The **FAQ Accordion** is an interactive web component that allows users to click a frequently asked question and display or hide its answer.

The project is designed according to the given task requirements and demonstrates the use of **HTML5, CSS3 and JavaScript DOM events**.

The accordion contains at least eight FAQ questions, expandable and collapsible answers, a clear active state and a responsive design.

---

## Objective

The main objective of this project is to practice:

* DOM events
* DOM element selection
* `addEventListener()`
* `classList.toggle()`
* Class manipulation
* Interactive UI components
* Responsive web design
* CSS animations

---

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Visual Studio Code
* Web Browser

---

## Project Features

The project provides the following features:

* At least 8 FAQ questions
* Clickable question buttons
* Expandable answers
* Collapsible answers
* Clear active state
* Plus icon animation
* Smooth answer animation
* Only one answer remains open at a time
* Responsive mobile design
* Clean and professional interface
* Easy addition of new questions

---

## Project Structure

```text
faq-accordion/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the complete structure of the FAQ accordion, including the questions and answers.

### `style.css`

Contains the visual design, layout, colors, animations, hover effects and responsive styling.

### `script.js`

Controls the interactive behavior of the accordion using JavaScript DOM events and `classList`.

### `README.md`

Contains the project documentation, approach, features and outcome.

---

## Approach

### 1. HTML Structure

First, an FAQ container was created using HTML5.

Each FAQ consists of:

* A question button
* A plus icon
* An answer section

Eight FAQ questions were added to satisfy the project requirement.

Buttons were used for the questions because they are appropriate for clickable interactive elements.

---

### 2. CSS Design

CSS3 was used to create a clean and professional interface.

The design includes:

* White FAQ card
* Blue and orange theme
* Rounded corners
* Borders
* Box shadows
* Hover effects
* Active state
* Responsive layout
* Mobile-friendly spacing
* Simple animation

The FAQ card automatically adjusts its size according to the screen width.

---

### 3. JavaScript Functionality

JavaScript is responsible for making the FAQ interactive.

First, all FAQ question buttons are selected:

```javascript
const questions = document.querySelectorAll(".faq-question");
```

An event listener is then added to every question:

```javascript
question.addEventListener("click", function () {
```

When a question is clicked, JavaScript identifies its parent FAQ item.

The `classList.toggle()` method is used to add or remove the `active` class:

```javascript
currentItem.classList.toggle("active");
```

The CSS uses this class to determine whether the answer should be displayed.

Before opening the selected question, other FAQ items are closed:

```javascript
document.querySelectorAll(".faq-item").forEach(function (item) {

    if (item !== currentItem) {
        item.classList.remove("active");
    }

});
```

Therefore, only one FAQ answer remains open at a time.

---

## Working Flow

```text
User clicks a question
        ↓
JavaScript detects click
        ↓
Current FAQ item is identified
        ↓
Other FAQ items are closed
        ↓
classList.toggle("active")
        ↓
Active class added/removed
        ↓
CSS displays or hides answer
        ↓
User sees the answer
```

---

## Outcome

The final project successfully provides an interactive FAQ accordion.

The completed application contains:

* 8 FAQ questions
* Expandable answers
* Collapsible answers
* Active state
* `classList.toggle()` functionality
* DOM event handling
* Responsive design
* Interactive icons
* Smooth animations

The project demonstrates how HTML, CSS and JavaScript can work together to create a simple interactive user interface.

---

## How to Run

### Step 1

Create a folder named:

```text
faq-accordion
```

### Step 2

Create these four files:

```text
index.html
style.css
script.js
README.md
```

### Step 3

Paste the respective code into each file.

### Step 4

Open `index.html` in a web browser.

Alternatively, open the project in VS Code and use the **Live Server** extension.

---

## How to Add More FAQs

To add another FAQ, copy an existing block:

```html
<div class="faq-item">

    <button class="faq-question">
        <span>Your Question</span>
        <span class="icon">+</span>
    </button>

    <div class="faq-answer">
        <p>
            Your answer goes here.
        </p>
    </div>

</div>
```

Change the question and answer text.

No JavaScript changes are required.

---

## Learning Outcomes

After completing this project, the following concepts are practiced:

1. HTML semantic structure
2. CSS responsive design
3. JavaScript DOM selection
4. Event listeners
5. `classList.toggle()`
6. `classList.add()`
7. `classList.remove()`
8. Conditional logic
9. Interactive UI design
10. CSS animations

---

## Conclusion

The FAQ Accordion project demonstrates the implementation of a simple and reusable interactive UI component using only HTML5, CSS3 and JavaScript.

It fulfills the required deliverables by providing at least eight FAQ questions, expandable and collapsible answers, a clear active state and responsive design.

The project also provides practical experience with DOM events and `classList` manipulation, making it a useful beginner-level JavaScript project.
