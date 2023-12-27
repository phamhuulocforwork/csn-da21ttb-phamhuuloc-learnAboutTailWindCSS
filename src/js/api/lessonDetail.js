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
  {
    _id: 2,
    lesson_id: 2,
    youtube_id: '8mAITcNt710',
    lead: `CS50 encapsulates the essence of computer science through a comprehensive curriculum that covers a wide spectrum of topics. From the basics of coding to the complexities of algorithms and data structures, this course equips learners with a robust foundation in computer science principles.`,
    article: [
      {
        _id: 1,
        title: 'Course Features',
        content: `
          <ol>
            <li>
              <strong>Diverse Learning Materials:</strong> CS50 employs an array of resources such as lectures, problem sets, walkthroughs, and supplementary materials, ensuring a multifaceted learning experience.
            </li>
            <li>
              <strong>Engaging Lectures:</strong> The course offers engaging lectures that unravel intricate concepts in an easily digestible manner, making complex topics accessible to all.
            </li>
            <li>
              <strong>Practical Assignments:</strong> With hands-on problem sets and projects, CS50 encourages learners to apply theoretical knowledge to real-world scenarios, fostering a deeper understanding.
            </li>
            <li>
              <strong>Supportive Community:</strong> Students benefit from an active online community, enabling collaboration, discussions, and peer-to-peer learning.
            </li>
          </ol>
        `,
      },
      {
        _id: 2,
        title: 'Curriculum Breakdown',
        content: `
          <ul>
            <li>
              <strong>Introduction to Programming in C</strong> 
            </li>
            <li>
              <strong>Algorithms</strong> 
            </li>
            <li>
              <strong>Data Structures</strong> 
            </li>
            <li>
              <strong>Web Development</strong> 
            </li>
            <li>
              <strong>Python and SQL</strong> 
            </li>
            <li>
              <strong>Security and Privacy</strong> 
            </li>
          </ul>
        `,
      },
      {
        _id: 3,
        title: 'Sample Code',
        content: `
        <pre>
        <code>
# Python code sample
def fibonacci(n):
  if n <= 0:
      return []
  elif n == 1:
      return [0]
  elif n == 2:
      return [0, 1]
  else:
      fib = [0, 1]
      for i in range(2, n):
          fib.append(fib[i - 1] + fib[i - 2])
      return fib

result = fibonacci(10)
print(result)  # Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]        
        </code>
      </pre>
        `,
      },
      {
        _id: 3,
        title: 'Resources for Further Learning',
        content: `
          <ul>
            <li>
              <strong>CS50x on edX:</strong> The online platform hosts CS50x, the online version of the course, allowing learners worldwide to access the course materials.
            </li>
            <li>
              <strong>Harvard CS50 YouTube Channel:</strong> Featuring supplementary videos, tutorials, and lectures for a deeper dive into specific topics covered in the course.
            </li>
            <li>
              <strong>CS50 Library:</strong> A collection of resources, including problem set specifications, lecture notes, and additional readings, available for students to enhance their understanding.
            </li>
          </ul>
        `,
      },
    ],
    comments: [
      {
        userName: 'Alta Cain',
        comment: `
            Very straight-to-point article. Really worth time reading.
            Thank you!
          `,
        date: 'Feb. 8, 2023',
      },
    ],
  },
  {
    _id: 3,
    lesson_id: 3,
    youtube_id: 'rfscVS0vtbw',
    lead: `The "Learn Python" course is structured to provide a comprehensive understanding of Python, emphasizing its simplicity, readability, and versatility. With a blend of theory and practical application, learners will grasp the fundamental concepts of Python programming and gain hands-on experience in building various applications.`,
    article: [
      {
        _id: 1,
        title: 'Course Highlights',
        content: `
          <ol>
            <li>
              <strong>Progressive Learning Modules:</strong> The course follows a step-by-step approach, gradually introducing concepts from basic syntax to more advanced topics like object-oriented programming and web development using frameworks like Django.
            </li>
            <li>
              <strong>Interactive Exercises:</strong> Engaging exercises and coding challenges accompany each module, reinforcing learning and allowing students to apply newly acquired knowledge in real-time.
            <li>
              <strong>Project-Based Learning:</strong> Through practical projects, learners will build applications, manipulate data, and solve problems, consolidating their Python skills and boosting confidence in programming.
            </li>
            <li>
              <strong>Supportive Community:</strong> Access to a supportive community forum fosters collaboration, provides assistance, and encourages peer-to-peer learning.
            </li>
          </ol>
        `,
      },
      {
        _id: 2,
        title: 'Curriculum Breakdown',
        content: `
          <ul>
            <li>
              <strong>Python Basics: Variables, Data Types, Operators</strong> 
            </li>
            <li>
              <strong>Control Flow: Loops, Conditionals</strong> 
            </li>
            <li>
              <strong>Functions and Modules</strong> 
            </li>
            <li>
              <strong>Data Structures: Lists, Tuples, Dictionaries</strong> 
            </li>
            <li>
              <strong>File Handling</strong> 
            </li>
            <li>
              <strong>Object-Oriented Programming</strong> 
            </li>
          </ul>
        `,
      },
      {
        _id: 3,
        title: 'Sample Code',
        content: `
        <pre>
        <code>
# Python code sample - Simple Calculator
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b != 0:
        return a / b
    else:
        return "Cannot divide by zero"

# Test the functions
print(add(5, 3))       # Output: 8
print(subtract(7, 2))  # Output: 5
print(multiply(4, 6))  # Output: 24
print(divide(8, 2))    # Output: 4.0
print(divide(5, 0))    # Output: Cannot divide by zero
        </code>
      </pre>
        `,
      },
      {
        _id: 3,
        title: 'Resources for Further Learning',
        content: `
          <ul>
            <li>
              <strong>Python Documentation:</strong> The official Python documentation serves as a comprehensive reference guide, offering in-depth explanations and examples for various Python functionalities.
            </li>
            <li>
              <strong>Interactive Online Platforms:</strong>  Websites like <a>Codecademy</a>, <a>Coursera</a>, and <a>freeCodeCamp</a> provide interactive Python tutorials, exercises, and projects for continuous practice.
            </li>
            <li>
              <strong>Python Community Forums:</strong> Platforms like Stack Overflow and Reddit's r/learnpython are great places to ask questions, seek advice, and engage with a vibrant community of Python enthusiasts.
            </li>
          </ul>
        `,
      },
    ],
    comments: [
      {
        userName: 'Bernard HillAlta Cain',
        comment: `
            Very straight-to-point article. Really worth time reading.
            Thank you!
          `,
        date: 'Feb. 8, 2023',
      },
    ],
  },
  {
    _id: 4,
    lesson_id: 4,
    youtube_id: 'ua-CiDNNj30',
    lead: `The Data Science course is a comprehensive blend of theoretical knowledge and practical application, catering to both beginners and professionals seeking to enhance their expertise. It encompasses a wide array of topics essential for harnessing the power of data to derive actionable intelligence.`,
    article: [
      {
        _id: 1,
        title: 'Course Highlights',
        content: `
          <ol>
            <li>
              <strong>Foundational Concepts:</strong> The course begins with an introduction to key concepts, including data manipulation, statistical analysis, and data visualization, laying a strong foundation for advanced learning.
            </li>
            <li>
              <strong>Tools and Technologies:</strong> Students delve into popular tools and technologies such as Python, R, SQL, and libraries like Pandas, NumPy, and Matplotlib for data manipulation, analysis, and visualization.
            <li>
              <strong>Machine Learning Fundamentals:</strong> Exploring machine learning algorithms, regression, classification, clustering, and model evaluation forms a crucial part of this course, enabling students to build predictive models.
            </li>
            <li>
              <strong>Real-world Projects:</strong> Engaging in hands-on projects involving real datasets allows learners to apply acquired skills to solve practical problems and gain valuable experience.
            </li>
          </ol>
        `,
      },
      {
        _id: 2,
        title: 'Curriculum Breakdown',
        content: `
          <ul>
            <li>
              <strong>Introduction to Data Science</strong> 
            </li>
            <li>
              <strong>Data Wrangling and Preprocessing</strong> 
            </li>
            <li>
              <strong>Exploratory Data Analysis (EDA)</strong> 
            </li>
            <li>
              <strong>Machine Learning Algorithms</strong> 
            </li>
            <li>
              <strong>Model Deployment and Evaluation</strong> 
            </li>
            <li>
              <strong>Big Data and Data Mining (Optional)</strong> 
            </li>
          </ul>
        `,
      },
      {
        _id: 3,
        title: 'Sample Code',
        content: `
        <pre>
        <code>
# Python code sample - Linear Regression
import numpy as np
from sklearn.linear_model import LinearRegression

# Sample dataset (example data)
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 5, 4, 5])

# Create and fit the model
model = LinearRegression()
model.fit(X, y)

# Make predictions
new_X = np.array([[6], [7]])
predictions = model.predict(new_X)
print(predictions)  # Output: [5.4 6.6]        
        </code>
      </pre>
        `,
      },
      {
        _id: 3,
        title: 'Resources for Further Learning',
        content: `
          <ul>
            <li>
              <strong>Online Courses and Tutorials:</strong>  Platforms like <a>Coursera</a>, <a>edX</a>, and <a>Udacity</a> offer specialized Data Science courses taught by industry experts, providing in-depth knowledge and practical exercises.
            </li>
            <li>
              <strong>Books and Publications:</strong> Resources like "Python for Data Analysis" by Wes McKinney and "Introduction to Statistical Learning" by Gareth James, Daniela Witten, Trevor Hastie, and Robert Tibshirani are highly recommended for comprehensive learning.
            </li>
            <li>
              <strong>Kaggle and DataCamp:</strong> These platforms provide datasets, competitions, and interactive learning environments ideal for honing Data Science skills and applying learned concepts.
            </li>
          </ul>
        `,
      },
    ],
    comments: [
      {
        userName: 'Annie Fernandez',
        comment: `
            Very straight-to-point article. Really worth time reading.
            Thank you!
          `,
        date: 'Feb. 8, 2023',
      },
    ],
  },
  {
    _id: 5,
    lesson_id: 5,
    youtube_id: 'VtLXKU1PpRU',
    lead: `The AutoCAD course is a comprehensive journey that caters to beginners aiming to grasp the basics as well as seasoned professionals seeking to enhance their proficiency. It covers a wide spectrum of tools, commands, and techniques essential for creating 2D drafts and 3D models with precision and efficiency.`,
    article: [
      {
        _id: 1,
        title: 'Course Highlights',
        content: `
          <ol>
            <li>
              <strong>Introduction to AutoCAD:</strong> The course commences with an introduction to the interface, tools, and basic commands of AutoCAD, acquainting students with its functionalities.
            </li>
            <li>
              <strong>2D Drafting:</strong> Students learn to create precise 2D drawings using tools for lines, shapes, dimensions, and annotations, ensuring accuracy in technical drawings.
            <li>
              <strong>3D Modeling:</strong> Delving into the realm of 3D, participants explore techniques to create 3D models, renderings, and visualizations, bringing designs to life.
            </li>
            <li>
              <strong>Project-Based Learning:</strong> Engaging in practical projects, students apply learned skills to design architectural plans, mechanical components, and more, honing their proficiency.
            </li>
          </ol>
        `,
      },
      {
        _id: 2,
        title: 'Curriculum Breakdown',
        content: `
          <ul>
            <li>
              <strong>Introduction to AutoCAD Interface</strong> 
            </li>
            <li>
              <strong>Basic Drawing and Editing Commands</strong> 
            </li>
            <li>
              <strong>Layers, Blocks, and Attributes</strong> 
            </li>
            <li>
              <strong>Advanced 2D Drafting Techniques</strong> 
            </li>
            <li>
              <strong>Introduction to 3D Modeling</strong> 
            </li>
            <li>
              <strong>Rendering and Visualization Techniques</strong> 
            </li>
          </ul>
        `,
      },
      {
        _id: 3,
        title: 'Key Benefits of AutoCAD Mastery:',
        content: `
          <ul>
            <li>
              <strong>Precision and Efficiency:</strong>  AutoCAD enables users to create highly detailed and accurate designs, reducing errors and enhancing productivity.
            </li>
            <li>
              <strong>Versatility:</strong> The skills acquired in AutoCAD are transferable across various industries, including architecture, engineering, interior design, and manufacturing.
            </li>
            <li>
              <strong>Collaboration:</strong> AutoCAD facilitates seamless collaboration by allowing users to share and work on designs in a team environment.
            </li>
          </ul>
        `,
      },
      {
        _id: 4,
        title: 'Resources for Further Learning',
        content: `
          <ul>
            <li>
              <strong>Official AutoCAD Documentation:</strong> Autodesk's official documentation provides comprehensive guides, tutorials, and resources for learners at all levels
            </li>
            <li>
              <strong>Online Tutorials and Courses:</strong> Platforms like LinkedIn Learning, Udemy, and Coursera offer a multitude of courses, tutorials, and videos dedicated to AutoCAD.
            </li>
            <li>
              <strong>AutoCAD Forums and Communities:</strong> Engaging in communities such as Autodesk forums and Reddit's r/AutoCAD allows learners to seek advice, share knowledge, and stay updated with industry trends.
            </li>
          </ul>
        `,
      },
    ],
    comments: [
      {
        userName: 'Lillie Gray',
        comment: `
            Very straight-to-point article. Really worth time reading.
            Thank you!
          `,
        date: 'Feb. 8, 2023',
      },
    ],
  },
  {
    _id: 6,
    lesson_id: 6,
    youtube_id: 'OXGznpKZ_sA',
    lead: `The CSS tutorial is an in-depth exploration into the world of styling and design in web development. Catering to beginners and intermediate learners, this course covers CSS basics, advanced techniques, and responsive design principles, ensuring a well-rounded understanding of styling web content.`,
    article: [
      {
        _id: 1,
        title: 'Course Highlights',
        content: `
          <ol>
            <li>
              <strong>Fundamentals of CSS:</strong> The course commences with an introduction to CSS syntax, selectors, properties, and values, laying a solid groundwork for learners.
            </li>
            <li>
              <strong>Layout and Positioning:</strong> Exploring various layout techniques, including Flexbox and Grid, participants learn to create responsive and adaptable web layouts.
            <li>
              <strong>Styling and Effects:</strong> From colors, typography, and backgrounds to transitions, animations, and transformations, students delve into styling elements and adding dynamic effects.
            </li>
            <li>
              <strong>Responsive Web Design:</strong> Understanding media queries and implementing responsive design principles ensures websites look great across devices and screen sizes.
            </li>
          </ol>
        `,
      },
      {
        _id: 2,
        title: 'Curriculum Breakdown',
        content: `
          <ul>
            <li>
              <strong>Introduction to CSS and Selectors</strong> 
            </li>
            <li>
              <strong>Box Model and Layout</strong> 
            </li>
            <li>
              <strong>Typography and Fonts</strong> 
            </li>
            <li>
              <strong>CSS Grid and Flexbox</strong> 
            </li>
            <li>
              <strong>Transitions, Animations, and Transformations</strong> 
            </li>
            <li>
              <strong>Responsive Design and Media Queries</strong> 
            </li>
          </ul>
        `,
      },
      {
        _id: 3,
        title: 'Sample Code',
        content: `
        <pre>
          <code>
/* CSS code sample - Basic Styling */
/* Selecting an HTML element by its class */
.title {
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

/* Styling a navigation menu */
.nav-menu {
  display: flex;
  justify-content: space-around;
  background-color: #f2f2f2;
  padding: 10px 0;
}

.nav-item {
  list-style: none;
}

.nav-link {
  text-decoration: none;
  color: #555;
  padding: 5px 10px;
}

.nav-link:hover {
  color: #000;
  background-color: #ddd;
}              
        </code>
      </pre>
        `,
      },
      {
        _id: 3,
        title: 'Resources for Further Learning',
        content: `
          <ul>
            <li>
              <strong>Mozilla Developer Network (MDN) Web Docs:</strong>  A comprehensive resource providing detailed explanations, tutorials, and examples on CSS properties and techniques.
            </li>
            <li>
              <strong>CSS-Tricks:</strong> An online hub offering articles, tutorials, and resources for mastering CSS techniques and staying updated with industry trends.
            </li>
            <li>
              <strong>Online Courses and Platforms:</strong> Websites like <a>Codecademy</a>, <a>Udemy</a>, and <a>freeCodeCamp</a> offer structured CSS courses, exercises, and projects for continuous learning.
            </li>
          </ul>
        `,
      },
    ],
    comments: [
      {
        userName: 'Don Montgomery',
        comment: `
            Very straight-to-point article. Really worth time reading.
            Thank you!
          `,
        date: 'Feb. 8, 2023',
      },
    ],
  },
  {
    _id: 7,
    lesson_id: 7,
    youtube_id: 'sWbUDq4S6Y8',
    lead: `This course serves as a foundational introduction to the Linux operating system. It is designed for individuals new to Linux or those seeking to enhance their understanding of its core concepts and functionality. Throughout this course, participants will explore the fundamental principles behind Linux, gaining practical knowledge and hands-on experience in navigating its command line, file system, and essential utilities.`,
    article: [],
    comments: [],
  },
  {
    _id: 8,
    lesson_id: 8,
    youtube_id: 'i_LwzRVP7bg',
    lead: `This course is a comprehensive introduction to the principles and applications of machine learning. Designed for both beginners and those with basic knowledge, this course explores the foundational concepts, algorithms, and techniques essential for understanding and implementing machine learning models.`,
    article: [],
    comments: [],
  },
  {
    _id: 9,
    lesson_id: 9,
    youtube_id: 'pQN-pnXPaVg',
    lead: `This comprehensive course provides a complete immersion into Hypertext Markup Language (HTML), catering to beginners and those seeking to enhance their web development skills. Through a step-by-step approach, participants will grasp the core concepts, elements, and practical applications of HTML in creating web pages.`,
    article: [],
    comments: [],
  },
  {
    _id: 10,
    lesson_id: 10,
    youtube_id: 'A74TOX803D0',
    lead: `This course is a comprehensive introduction to Java programming, suitable for beginners and individuals with minimal coding experience. It covers the core concepts, syntax, and application of Java, providing a solid foundation for software development.`,
    article: [],
    comments: [],
  },
  {
    _id: 11,
    lesson_id: 11,
    youtube_id: 'PkZNo7MFNFg',
    lead: `This course is an in-depth exploration of JavaScript, designed for beginners and individuals with basic programming knowledge. It covers the core concepts, functionalities, and practical applications of JavaScript, empowering participants to build interactive and dynamic web applications.`,
    article: [],
    comments: [],
  },
  {
    _id: 12,
    lesson_id: 12,
    youtube_id: '8hly31xKli0',
    lead: `This course is a comprehensive exploration of fundamental algorithms and data structures essential for software development and problem-solving in computer science. It focuses on understanding the principles, design, and implementation of algorithms, as well as the organization and manipulation of data.`,
    article: [],
    comments: [],
  },
  {
    _id: 13,
    lesson_id: 13,
    youtube_id: 'vLnPwxZdW4Y',
    lead: `This course serves as a comprehensive guide to mastering the C++ programming language, ideal for beginners and individuals with basic programming knowledge. It covers the core concepts, syntax, and features of C++, enabling participants to build robust and efficient applications.`,
    article: [],
    comments: [],
  },
  {
    _id: 14,
    lesson_id: 14,
    youtube_id: 'GhQdlIFylQ8',
    lead: `This course is a comprehensive introduction to the C# programming language, designed for beginners and individuals with minimal programming experience. It covers the fundamental concepts, syntax, and application of C#, providing a strong foundation for building diverse software applications.`,
    article: [],
    comments: [],
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
