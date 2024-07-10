import web from '../assets/imges/web.png'
import app from '../assets/imges/mobile.png'
import graphy from '../assets/imges/graphy.png'


export const services=[
    {
        id:1,
        img:web,
        activity:'web development',
        discription:`Web development refers to
         the creating, building, and maintaining 
         of websites. It includes aspects such 
         as web design, web publishing, web programming,
          and database management. It is the creation of
           an application that works over the internet i.e. 
           websites.`
    },
    {
        id:2,
        img:app,
        activity:'mobile app development',
        discription:`Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources.`
    },
    {
        id:3,
        img:graphy,
        activity:'Graphic design',
        discription:`Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques`
    },
]

//-----------------skills------------------------
import css from '../assets/imges/css.jpg';
import html from '../assets/imges/html.jpeg';
import js from '../assets/imges/js.jpg';
import react from '../assets/imges/react.png';
import node from '../assets/imges/nodejs2.jpg';
import mongodb from '../assets/imges/mongodb.png';
import scss from '../assets/imges/scss.jpg';
import redux from '../assets/imges/redux.png';
import github from '../assets/imges/github.webp'


export const skills=[
    {
        id:1,
        name:'CSS',
        discription:'CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML). This language contains coding elements and is composed of these “cascading style sheets” which are equally called CSS files (. css).',
        img:css
    },
    {
        id:2,
        name:'HTML',
        discription:'HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables.',
        img:html
    },
    {
        id:3,
        name:'JavaScript',
        discription:'JavaScript is a scripting language used to develop web pages. Developed in Netscape, JS allows developers to create a dynamic and interactive web page to interact with visitors and execute complex actions. It also enables users to load content into a document without reloading the entire page',
        img:js
    },
    {
        id:4,
        name:'React',
        discription:'What is React JS used for? ReactJSs primary goal is to create User Interfaces (UI) which enhance the speed of programs. It makes use of virtual DOM (JavaScript object), which enhances the apps efficiency. Quicker than the standard DOM is the JavaScript virtual DOM.',
        img:react
    },
    {
        id:5,
        name:'node js',
        discription:'What Is Express JS? Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. Its a layer built on the top of the Node js that helps manage servers and routes',
        img:node
    },
    {
        id:6,
        name:'MongoDB',
        discription:'MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas',
        img:mongodb
    },
    {
        id:7,
        name:'SCSS',
        discription:'What is SCSS? The term SCSS is an acronym for Sassy Cascading Style Sheets. It is basically a more advanced and evolved variant of the CSS language. Natalie Weizenbaum and Chris Eppstein created it, and Hampton Catlin designed it',
        img:scss
    },
    {
        id:8,
        name:'redux',
        discription:'Use React state system for simple and local state that does not need to be shared with other components or persisted across sessions',
        img:redux
    },
    {
        id:9,
        name:'GitHub',
        discription:'GitHub is a developer platform that allows developers to create, store, manage and share their code. It uses Git software, providing the distributed version control of Git plus access control',
        img:github
    },
    
]