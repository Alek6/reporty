# Reporty
![Unsplash - Digital Content Production by Emma Matthews](/assets/Unsplash_Digital-Content-Production_by-Emma-Matthews.jpeg)

## The Baseline
A simple, intuitive and well designed system to create, organize &amp; publish your everyday _"work-from-home"_ or _"smart-working"_ workflow.

## Development strategy and ideas
For a successful requirements analysis, design, implementation, testing and release of this project the development idea is to use an **incremental development** (agile) strategy.
The main **idea** is to create for User a personal space where to track &amp; report his work to a project with specific tasks, work-category labels, timings and documentation of his work.

## Agile Pattern and Branching Strategy
In this project I will follow the **Agile** pattern and best practices for an efficient design and development. In particular I will use the Github blackboard kaban cards to track the evolvement of the entire project.
I decided to apply the standards which we can find in any development environment.
I will use the branching strategy of _evolutionary-prototyping_ type. So I will have a branch for every different task.
The main branches are: `main`, `project-template`, `doc`, `ui/ux` and `dev`.

The `dev` development branch will composed by two parallel sub-branches:
- `front-end`, and
- `back-end`

The _front-end_ will cover all the UI/UX aspects, the UI components, the stylesheets (Sass - scss), various UX design principles.
The _back-end_ one intead will cover all the technologies under the hood, like TypeScript, JavaScript, Local Storage, MongoDB, sessions, cookies.

## Naming conventions and best practices
I this project I will adopt:

- [kebab-case](https://it.wikipedia.org/wiki/Kebab_case) for file, folder and branch names
- [CamelCase](https://en.wikipedia.org/wiki/Camel_case) for functions and methods
- [lowerCamelCase](https://www.w3schools.com/JS/js_conventions.asp) for variables accordingly with the native project setup

I will try to split the scripts on multiple files and use the object oriented paradigm, where possible.