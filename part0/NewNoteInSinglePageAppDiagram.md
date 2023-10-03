%% ```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: POST request to the address new_note_spa contains the new note as JSON data.
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note left of server: 201 created, server does not ask for a redirect
    server-->>browser: 201 status code {"message created"}
    deactivate server
%% ```