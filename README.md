## Description
A Mendix widget that displays a set of words based on the react-d3-cloud library in a form of a cloud. It provides a great and clear way of visually representing the words and their weight.

## Typical usage scenario
- Presenting the most commonly used words in a text with a graphical form (the more common the word, the bigger it gets).
- Showing the most visited entries in an app dictionary (the more hits per entry, the bigger the text).
- Other usages where text are connected with values which require human-friendly and an eye-catching view.

## Features and limitations
The widget uses a react-d3-cloud library which encapsulates an Open Source library d3-cloud that positions the words without overlap using a heuristic algorithm. One need to remember, that in some cases, while rendering the words, not all of them are included, this is due to the algorithm used for placing the words on the canvas. 

Apart from rendering the words in a form of a cloud, the widget also enables interactions with a Mendix app – it allows one to click on the word and trigger an action associated with the widget (a microflow call, a nanoflow call, etc.). This is achieved by returning a text/word which has been selected/clicked on. 

## Dependencies
Tested with the following Mendix versions:
- Mendix Studio Pro 8.12.5
- Mendix Studio Pro 9.0.4

## Installation
- Download widget from the marketplace to your Mendix project.

## Configuration
- Place the widget in a data context within a page/snippet.
- Fill in the required data source attributes:
  - “Data source” – the list of entities to be rendered.
  - “Text attribute” – the string attribute of the list entity which will determine the word to be rendered.
  - “Int attribute” – the integer attribute of the list entity which will determine the size of the word.
- Define the “On click” action in the “Action” tab which will be triggered when one clicks on the specific word.
- Define the attribute which will hold the word that is clicked. 

## Known bugs
No known bugs at the moment. 

## Frequently Asked Questions
Will appear once the knowledge base for this widget grows. 
  Q:
  A:
