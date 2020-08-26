# Programming test for [Codeko](http://codeko.com/) [![Build Status](https://travis-ci.com/Firenz/codeko-jobtest.svg?branch=master)](https://travis-ci.com/Firenz/codeko-jobtest)
Programming test for a Front End Developer position in [Codeko](http://codeko.com/).

**[Demo app live version](https://firenz.github.io/codeko-jobtest/)**

**[List of PRs](https://github.com/Firenz/codeko-jobtest/pulls?q=is%3Apr+is%3Aclosed)**

**[List of issues](https://github.com/Firenz/codeko-jobtest/issues?q=is%3Aissue+is%3Aclosed)**

**[Project kanban board](https://github.com/Firenz/codeko-jobtest/projects/2)**

## Description of the project
> Make a React web project that consumes the API https://api.chucknorris.io/
>
> The web must have categories in which the user chooses what kind of random Chuck Norris fact wants to see. When the user gets a new fact, the previously obtained facts must be still visible. And when the user refreshes the web, the obtained facts must remain on the page.
>
> Also, treat this project as a professional project in the matter of small commits, PRs, tooling, bundling, basic UI/UX...

# How to use
- Download the project
- Install dependencies 
```
npm install
```
- And start the application. It will automatically open a tab with the app in your default browser. Also, you can open manually http://localhost:9000
```
npm start
```
## Deploy build
- To deploy a local development build
```
npm run build:dev
```
- To deploy a local production build
```
npm run build:prod
```
As a side note, a production build with this app is running in the [GitHub Pages of this repository](https://firenz.github.io/codeko-jobtest/).

## Run tests
- To run the tests of the project once
```
npm run test
```
- To make the test to run in a loop to watch your changes in code
```
npm run test:watch
```
- To run the tests coverage
```
npm run test:coverage
```
- To deploy a performance build made by Bundle Analyzer Plugin to see how much memory space occupies each package and more
```
npm run build:stats
```
# Checklist of things that were done
- The project should be in a GitHub repository. ✅ 
- You should create a GitHub project with the template you prefer and design the tasks before starting to code. The tasks should be assigned to issues and those issues linked to the project you’ve created. Feel free to use any tag or other marker to indicate the different types of tasks you create. ✅ 
- Once you start working, every step in your project development should be added incrementally to the project using pull requests, and the evolution of the project should be reflected in the project you created before. ✅ 
- CI should be configured using GitHub actions or any other CI platform. The result of the CI execution should generate a bundle we can use to review the implemented application. ✅ 
- The project should use different tools to ensure the quality of the project from different viewpoints. ✅ 
- Code coverage is mandatory. ✅ 
- Documentation about how to use the project and what we are going to find in this repository would be part of the repository README file. ✅ 

## Things that could have been done better
- Polishing UI on edge cases: Though UI now looks pretty good compared to the initial UI version, in some extreme cases (on mobile and with Chrome & Safari browsers) the category menu components weren't displayed correctly. Also, the footer could be more polished in the mobile version (instead of hiding behind the buttons, have a conditional bottom margin depending on whether the fixated button is displayed or not). Finally, the standalone version needs more polishing for wider screens now that were in the era of 4K or 8K monitors.
- Testing coverage: Given personal circumstances and the time restriction for the project, only pretty basic jest tests were done. Also couldn't test the styled-components for these reasons.

# Development environment
- Language: Typescript
- Frameworks: React
- Styling: styled-components & polished
- Tools: 
  - Environment: Node v12.18.2
  - Bundling: Webpack
  - Testing: Jest
  - CI: Travis CI
  - Transpilation: Babel
  - Linter: ES Lint
  - Code Formatter: Prettier
- IDE: Visual Studio Code
- Git IDEs: Visual Studio Code (integrated Git) & GitKraken
- OS: Ubuntu 20.04 LTS 64-bits
- Browser: Chrome v83 64-bits

 # License
This project is licensed under the [MIT license](https://github.com/Firenz/codeko-jobtest/blob/master/LICENSE).

Chuck Norris illustration obtained from [PngKey webite](https://www.pngkey.com/detail/u2q8y3o0t4w7o0a9_chuck-norris-facts-have-spread-around-the-world/).

The mountain background used is part of the free illustration collection of [Freepik](https://www.freepik.es/).
