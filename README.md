# NASA Image, Audio and Video Search

This is a ReactJS search app developed using [NASA's Image and Video Library API](https://api.nasa.gov/api.html#Images).

Hosted here: [NASA Search](https://floating-caverns-39502.herokuapp.com)

## Installation

To install, fork and clone this repository.

Open the directory containing this project using the command:

```
cd nasa-search
```

Install all dependencies with:

```
npm install
```

Start a development server with:

```
npm start
```

Happy searching!

## Note

Given more time, I would have carried out more testing of each indivdual component. And I would have built a custom audio player that looks the same in all browsers rather than using the audio HTML tag with the default controls attribute. Something else I wanted to do but didn't have the time to, was error handling for when e.g. a user hits an incorrect endpoint or when the app receives a 500 error code from the API, and present the user with a different page according to the type of error.
