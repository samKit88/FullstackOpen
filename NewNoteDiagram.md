sequenceDiagram
participant browser
participant server

    Note right of browser: browser will send the user input
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note left of server: server asks the browser to do a new HTTP GET request
    server-->>browser: HTTP status code 302 redirect to /exampleapp/notes
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    Note right of browser: HTTP requests: fetching the style sheet (main.css)
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser:  CSS file
    deactivate server

    Note right of browser: HTTP requests: fetching the Javascript code (main.js)
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: browser initiates execution of JavaScript code responsible for fetching JSON data.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: executes the callback function, responsible for rendering the notes.
