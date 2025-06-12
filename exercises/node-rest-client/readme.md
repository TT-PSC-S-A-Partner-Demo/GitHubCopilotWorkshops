🚀 Exercises – node REST API with GitHub Copilot
1. Handle a Simple GET Request
Implement a simple GET endpoint: /hello?key=world

Run tests before and after using:

node test

Add a new unit test for when no key is provided.

Test the endpoint:

curl -v "http://localhost:3000/hello?key=world"

2. Dates ComparisonCreate /diffdates endpoint
Accept two date parameters (dd-MM-yyyy)

Return the difference in days

Create appropriate unit tests

3. Spanish Phone Validation
Create endpoint to validate Spanish phone format

Must match: +34 followed by 9 digits starting with 6, 7, or 9

4. Spanish DNI Validation
Validate DNI format: 8 digits + 1 letter

Return true/false

5. Color to Hex Conversion
Load colors.json from Resources/

Given a color name, return its hex code or return 404

Use TDD: write test first, then implement logic

6. Chuck Norris Jokes
Create endpoint that calls: https://api.chucknorris.io/jokes/random

Return the joke in response

7. URL Parsing
Accept URL as a query parameter

Return: protocol, host, port, path, query params in JSON

8. List Files and Folders
Accept a path as query param

Return list of files/folders in JSON

9. Word Counting
Accept file path and a word

Return how many times the word appears in the file

10. Folder Zipping
Accept a folder path

Create and return a zip of its contents

11. Password Generator
Create endpoint to generate secure passwords

Accept params: length, include uppercase/lowercase/numbers/symbols

12. Email Validation & Domain Extraction
Validate an email with regex

Return validation status + domain in JSON

13. JWT Token Operations
Implement JWT generation and validation

Handle claims, expiration, secure signing

14. File Encryption/Decryption
Use AES to encrypt/decrypt files

Accept file path and password as parameters

15. CRUD with Entity Framework Core
Create a User entity with full CRUD endpoints

Use EF Core and DbContext

16. API Rate Limiting
Implement rate limiting for selected endpoints

Use AspNetCoreRateLimit or custom middleware

17. Custom Data Validation
Create custom attributes for rules like IBAN or credit card numbers

18. Caching
Add caching to expensive methods

Use [ResponseCache] or IMemoryCache

19. Global Exception Handling
Add a global error handler using middleware

Return consistent error responses

20. Async Processing
Use Task or async/await for long operations

Return status updates via background task

21. Health Check Endpoints
Add custom /health checks

Include DB, external services, CPU, RAM

22. API Documentation
Use Swashbuckle or NSwag for OpenAPI docs

Annotate endpoints with summaries and parameters

23. Integration Testing
Test full request/response flow

Mock dependencies using Moq/TestServer

24. Performance Monitoring
Add timing logs, use Stopwatch, ILogger, or Prometheus exporters

25. Security Implementation
    Write JWT token authentication

Secure endpoints with [Authorize]

🎁 Bonus Challenges
26. Refactor for Clean Code
Use Copilot to refactor an endpoint using SOLID and Clean Architecture principles

27. Code Review Assistant
Use Copilot Chat to review and suggest improvements

28. Generate Documentation
Ask Copilot to generate README.md, XML comments, and docs

29. Test Strategy
Design unit, integration, and edge tests with Copilot’s help

30. Docker & Deployment
Use Copilot to generate Dockerfiles, GitHub Actions, or Azure Pipelines
