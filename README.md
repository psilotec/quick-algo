# Quick Algo
A web app for creating/organizing algorithms and tests quickly.


## Functions:
Autosave of tech used so user can select tech stacks later
Checkbox/Highlighting for core functions
Component hierarchy planning with color coordination
Button to convert to pdf and save/share

Convert from component description to a test - have them answer each of the important test questions for each component then premake test with questions as comments - make tests in generic syntax (assert, action, actual from JS Jabber podcast on testing), and syntax from main testing libraries - ability to download tests as files or easy copy to clipboard button

Render a div with each component name as the title in the outline of the divs as a way to visualize component hierarchy

When you name the component in the hierarchy part, it makes an area at the bottom for you to type in the test questions (what does this component do, what is the expected type/output etc) (What are you testing for aka it/xit statement) (what are you expecting aka comment under it statement) (https://github.com/andersr/meteor-testdouble-boilerplate/tree/master/app)
(http://www.east5th.co/blog/2016/05/02/meteor-unit-testing-with-testdoublejs/)
(https://github.com/testdouble/testdouble.js) Read section: the very basics
mocha/test double
npm run test-unit

Add collection, documents, and select expected value type and methods for each collection - export to a schema

Post each component's route name (url ending) at the top of its card so that it can be added to "your routes may look a little something like this" output later

Component page that translates from the component hierarchy that you set up (below - with tabbed pattern and arrows) and puts into a grouping component that is either a series of flexboxes within flexboxs or panels with horizontal flexbox styling inside to emulate: https://www.udemy.com/meteor-react-tutorial/learn/v4/t/lecture/5174164 @ :42)

## Features:
Landing Page: Explanation of why it's important to use TDD/an algorithm (when you start with a solid foundation, everything just falls into place) and quick start button - 'Create new algo' with signup after your algo is complete
Main Menu: see all your algos, create new algo, see your tests 
3 pages - enter general info and funxtions, component hierarchy, component test info entering page,

## Aesthetic:
Light background with colorful buttons
Color accents to come from whatever belt area you're in
HD picture landing page/login screen with 1px blur glass look
https://www.coachstudio.net/

## Styling:
Semantic UI
SCSS
Flexbox

## Mockup:


## Collections:
Algos
Tests
Settings

## Component Hierarchy:
App
Header
     Logo
     Login
     Menu
Container
    
     Landing Page
     MainMenu

NewAlgo
     AlgoDescription
         AlgoForm
     ComponentHierarchy
         ComponentForm
     TestInfo
         TestForm


YourAlgos
     AlgoList


YourTests
     TestList

Footer
     
               
