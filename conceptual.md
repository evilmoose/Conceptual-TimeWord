### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  
  A JWT, or JSON Web Token, is a compact, URL-safe means of representing claims to be transferred between two parties.

- What is the signature portion of the JWT?  What does it do?
  
  The signature portion of a JWT ensures the data integrity and the authenticity of the token, using a cryptographic algorithm.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  
  Yes, if a JWT is intercepted, the attacker can see what's inside the payload because it's only encoded, not encrypted.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  
  Authentication with a JWT involves issuing a token upon successful login and requiring that token to be presented for accessing protected resources, serving as a means to confirm the user's identity.

- Compare and contrast unit, integration and end-to-end tests.
  
  Unit tests assess individual components for correctness, integration tests evaluate the interactions between components, and end-to-end tests verify the system as a whole, often from a user's perspective.

- What is a mock? What are some things you would mock?
  
  A mock is a simulated object that mimics the behavior of real objects in controlled ways, often used to test the interactions with external systems or services that are difficult to incorporate into tests directly.

- What is continuous integration?
  
  Continuous integration is a software development practice where code changes are automatically built, tested, and merged to a shared repository frequently to catch integration errors early.

- What is an environment variable and what are they used for?
  
  An environment variable is a dynamic-named value that can affect the way running processes will behave on a computer, often used to store configuration settings and system parameters.

- What is TDD? What are some benefits and drawbacks?
  
  TDD, or Test-Driven Development, is a software development approach where tests are written before the code, promoting better design and maintainability but can be time-consuming and difficult for complex scenarios.

- What is the value of using JSONSchema for validation?
  
  JSONSchema provides a standardized and powerful way to validate the structure and data within JSON documents, ensuring data integrity and reducing errors.

- What are some ways to decide which code to test?
  
  Deciding which code to test often involves evaluating code complexity, criticality to the application, user interaction points, and areas with frequent changes or historical bugs.

- What does `RETURNING` do in SQL? When would you use it?
  
  The `RETURNING` clause in SQL provides a way to return data from inserted, updated, or deleted rows, allowing for more efficient data retrieval and manipulation in a single operation.

- What are some differences between Web Sockets and HTTP?
  
  Web Sockets provide a full-duplex communication channel over a single long-lived connection, ideal for real-time applications, while HTTP is a stateless protocol designed for request-response interactions.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  Preference between Flask and Express can vary based on factors like language preference (Python vs. JavaScript), simplicity vs. flexibility, and the specific requirements of the project or developer familiarity.
