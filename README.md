# intern-evaluation
Evaluation of Intern framework as a tool for Functional (B2B) testing

# Requirements
1. Ability to catch JS errors
2. Different real browsers which are supported by Darwin. PhantomJS is a plus
3. Ability for self-education: rich documentation, code examples, etc
4. Ability to debug tests and page context (aka open web dev toolbar)
5. Approaches for good application structuring
6. Tests reports in different formats
7. Ability to integrate testing of UI & API from the same code
8. Ability to improve speed (as example parallel execution of the tests)
9. Execute JS on the web page before the test (for example for links modification)
10. Rich API for browser manipulation
11. Same API for different browsers
12. Ability to make screenshots
13. User emulation: type from keyboard, mouse movements, etc


# Comparison with other framework / libraries
1. Overview - https://theintern.github.io/ - scroll to "What can Intern do that others can’t?"
2. Supported and used by Mozilla for their website
3. Community
   * [GitHub](https://github.com/theintern/intern): 3112 stars, 233 forks
   * [stackoverflow](http://stackoverflow.com/questions/tagged/intern): 367 questions, 56 followers
   * [IRC channel](irc://irc.freenode.net/intern)

# Running Intern for local development
1. Install chromedriver as described [here](https://theintern.github.io/intern/#local-selenium)
   * or install it on Mac with ```brew install chromedriver```
2. Install npm (bundled together with NodeJS) ```brew install node```
3. Download [test application](https://github.com/OleksandrGolub/intern-evaluation) from GitHub (not deployed yet)
4. Install dependencies ```npm install``` 
5. Make sure that ChromeDriver is running and Chrome browser is installed
   - ```chromedriver --port=4444 --url-base=wd/hub```
6. Enter email & password for your user into ```/suites/login.js```
7. Run tests ```npm test```

# Under the hood
1. Dependencies
```
"dependencies": {
    "istanbul": "0.3.17",
    "source-map": "0.1.33",
    "dojo": "2.0.0-alpha.6",
    "chai": "3.0.0",
    "leadfoot": "1.6.4",
    "digdug": "1.3.2",
    "charm": "0.2.0",
    "diff": "1.1.0"
}
```
2. [Chai](http://chaijs.com) - BDD/TDD assertion library for node.js and the browser. Test framework agnostic."
3. [Leadfoot](http://github.com/theintern/leadfoot) - A JavaScript client library that brings cross-platform consistency to the Selenium WebDriver API.
4. [Dig Dug](https://github.com/theintern/digdug) - A simple abstraction library for downloading and launching WebDriver service tunnels.

# Learning Intern
## Tutorial
There is [Official Tutorial](https://github.com/theintern/intern-tutorial) where in README.md might be found all information
## Code examples
1. [Code examples](https://github.com/theintern/intern-examples) with different TodoMVC applications
2. Leadfoot has good (official documentation)[https://theintern.github.io/leadfoot/Command.html] with examples of browser interaction
## Documentation
1. Full [Intern official documentation](https://theintern.github.io/intern/)
2. Overview [Introduction video](https://www.youtube.com/watch?v=_KFjuEKLqDA) to watch
3. Leadfoot [official documentation](https://theintern.github.io/leadfoot/)
4. Chai [official Guide](http://chaijs.com/guide/)

# Debugging application
1. Debugging NodeJS application
2. Running JS in context of opened web page

# Cool stuff
1. Paralelize execution (suppotred by promises)
2. [Executes JS](https://theintern.github.io/leadfoot/Command.html#execute) in context of opened page (for example to fix links)
3. Rich API for [browser communication](https://theintern.github.io/leadfoot/Command.html#methods)
4. Same API for [different browsers](https://theintern.github.io/leadfoot/index.html)
5. APIs allows to work with [visible elements](https://theintern.github.io/leadfoot/Command.html#findDisplayed), [type from keyboard](https://theintern.github.io/leadfoot/Command.html#type), etc
6. Full featured solution which suites for Enterprise applications testing
   - TDD JS tests
   - BDD JS tests
   - functional tests
7. Support's [Promises](https://www.promisejs.org/) from the box.

# Weak parts
1. Community might be bigger and more active
2. Amount of articles, videos might be bigger
3. Sometimes big tools === difficult to extend
4. Many developers should learn about JS, NodeJS
5. No solid solution for API testing which should be added / integrated manually

# Conclusion
Javascript world has a lot of libraries which solves small specific needs. 
**For our need a tool with:**

1. Jasmine or other tests runner
2. Chai or other assertion library
3. Leadfoot or WebDriverIO or other Selenium 2.0 bindings 
4. Batch of tools for Report Generation, doing other small tasks might be added

might be assembled 

or **Intern** which has everything bundled might be chosen.


# Structuring the application
**Official documentation suggest using several approaches:**

 1. [Page Objects](https://theintern.github.io/intern/#page-objects) which provides information & actions grouping by different types of web pages in application. 
 2. Extending Command ability to extend framework by providing webpage manipulation on higher level. (For example Forms filling)

# Other libraries
1. [WebDriverIO](http://webdriver.io/) - Selenium 2.0 bindings for NodeJS. Competitor of Leadfoot.
2. [Jasmine](http://jasmine.github.io/) - JS tests runner
3. [php-webdriver](https://github.com/facebook/php-webdriver) - WebDriver bindings for PHP