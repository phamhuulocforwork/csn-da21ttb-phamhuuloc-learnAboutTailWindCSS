const LESSONS_DETAIL = [
  {
    _id: 1,
    lesson_id: 1,
    youtube_id: 'CBWnBi-awSA',
    lead: `JavaScript is an object-based scripting language which is lightweight and
    cross-platform. JavaScript is not a compiled language, but it is a
    translated language. The JavaScript Translator (embedded in the browser)
    is responsible for translating the JavaScript code for the web browser.`,
    article: [
      {
        _id: 1,
        title: 'Purpose',
        content: `
          <p>
            JavaScript enables developers to create dynamic,
            interactive content on web pages. It allows manipulation
            of HTML and CSS, responding to user actions, and handling
            data asynchronously.
          </p>
        `,
      },
      {
        _id: 2,
        title: 'Features',
        content: `
          <ol>
            <li>
              <strong>High-level Language:</strong> It abstracts
              complex details and provides a simpler interface for
              developers.
            </li>
            <li>
              <strong>Interpreted Language:</strong> It doesn't
              require a separate compilation step and can be executed
              directly in web browsers.
            </li>
            <li>
              <strong>Dynamic Typing:</strong> Variables can hold
              different types of data.
            </li>
            <li>
              <strong>Prototype-based Object-Oriented:</strong> It
              uses prototypes rather than classes for inheritance.
            </li>
            <li>
              <strong>Functional Programming Support:</strong>
              Functions are treated as first-class citizens and can be
              passed around as variables.
            </li>
            <li>
              <strong>Event-Driven:</strong> Reacts to events such as
              clicks, form submissions, and more.
            </li>
            <li>
              <strong>Asynchronous:</strong> Supports asynchronous
              operations through callbacks, promises, and async/await
              syntax.
            </li>
          </ol>
        `,
      },
      {
        _id: 3,
        title: 'Usage',
        content: `
          <ul>
            <li>
              <strong>Front-End Development:</strong> Manipulating the
              DOM (Document Object Model), handling events, making
              asynchronous HTTP requests, and creating interactive
              user interfaces.
            </li>
            <li>
              <strong>Back-End Development:</strong> Server-side
              scripting using platforms like Node.js to build web
              servers and handle requests.
            </li>
          </ul>
        `,
      },
      {
        _id: 4,
        title: 'Basic Syntax',
        content: `
          <pre>
            <code>
// Variables and Data Types
let greeting = 'Hello, ';
const name = 'John';
let age = 25;
let isMale = true;
let fruits = ['apple', 'banana', 'orange']; // Array
let person = { name: 'Alice', age: 30 }; // Object

// Functions
function greet(personName) {
return greeting + personName;
}

// Conditionals
if (age >= 18) {
console.log('You are an adult.');
} else {
console.log('You are a minor.');
}

// Loops
for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}

// Events
document.getElementById('myButton').addEventListener('click', function() {
console.log('Button clicked!');
});
            </code>
          </pre>
        `,
      },
      {
        _id: 5,
        title: 'Resources to Learn',
        content: `
          <ul>
            <li>
              <strong>MDN Web Docs:</strong> Offers comprehensive
              documentation and tutorials:
              <a href="#">MDN JavaScript</a>
            </li>
            <li>
              <strong>Codecademy, freeCodeCamp, and Udemy:</strong>
              Provide interactive courses for beginners and advanced
              learners.
            </li>
            <li>
              <strong>Books:</strong> "Eloquent JavaScript" by Marijn
              Haverbeke and "JavaScript: The Good Parts" by Douglas
              Crockford are popular choices.
            </li>
          </ul>
        `,
      },
    ],
    comments: [
      {
        userName: 'Michael Gough',
        comment: `
          Very straight-to-point article. Really worth time reading.
          Thank you! But tools are just the instruments for the UX
          designers. The knowledge of the design tools are as important
          as the creation of the design strategy.
          `,
        date: 'Feb. 8, 2022',
      },
    ],
  },
]

const getAllLessonsDetail = () => {
  return LESSONS_DETAIL
}

const getLessonDetailByID = (id) => {
  return LESSONS_DETAIL.find((lesson) => lesson._id === id)
}

const addLessonDetail = (newLesson) => {
  LESSONS_DETAIL.push(newLesson)
  return newLesson
}

const updateLessonDetail = (id, updatedLesson) => {
  const index = LESSONS_DETAIL.findIndex((lesson) => lesson._id === id)
  if (index !== -1) {
    LESSONS_DETAIL[index] = { ...LESSONS_DETAIL[index], ...updatedLesson }
    return LESSONS_DETAIL[index]
  }
  return null
}

const deleteLessonDetail = (id) => {
  const index = LESSONS_DETAIL.findIndex((lesson) => lesson._id === id)
  if (index !== -1) {
    const deletedLesson = LESSONS_DETAIL.splice(index, 1)
    return deletedLesson[0]
  }
  return null
}

export {
  getAllLessonsDetail,
  getLessonDetailByID,
  addLessonDetail,
  updateLessonDetail,
  deleteLessonDetail,
}
