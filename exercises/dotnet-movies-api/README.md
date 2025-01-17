# REST API with ASP.NET Core and InMemory Store

## What is a REST API?
An API, or application programming interface, is a set of rules that define how applications or devices can connect to and communicate with each other. A REST API is an API that conforms to the design principles of the REST, or representational state transfer architectural style. For this reason, REST APIs are sometimes referred to RESTful APIs.  

Focus of this tutorial to write a REST API using C# .NET.

# Exercises

### User Story 1: Creating Multiple Tables
**As a developer, I want to create three new tables in the in-memory store so that I can store additional data related to movies, actors, and directors.**

#### Exercise:
1. Create new classes `Actor`, `Director`, and `MovieActor` in the `Domain` folder with appropriate properties.
2. Create new classes `CreateActorParams`, `CreateDirectorParams`, and `CreateMovieActorParams` in the `Store` folder with appropriate properties.
3. Update the `InMemoryMoviesStore` to include new dictionaries for storing actors, directors, and movie-actor relationships.
4. Implement methods in `IMoviesStore` for adding, retrieving, updating, and deleting actors, directors, and movie-actor relationships.

### User Story 2: Creating New Endpoints
**As a developer, I want to create new endpoints for managing actors, directors, and movie-actor relationships so that I can perform CRUD operations on these entities.**

#### Exercise:
1. Create new controllers `ActorsController`, `DirectorsController`, and `MovieActorsController` in the `Controllers` folder.
2. Implement endpoints for `GET`, `POST`, `PUT`, and `DELETE` operations for actors, directors, and movie-actor relationships.
3. Use the `IMoviesStore` methods for handling the requests.

### User Story 3: Writing Unit Tests
**As a developer, I want to write unit tests for the new controllers so that I can ensure the endpoints work correctly.**

#### Exercise:
1. Create a new test project in the solution.
2. Add a reference to the `Movies.Api` project.
3. Write unit tests for the `ActorsController`, `DirectorsController`, and `MovieActorsController` methods using a mocking framework like Moq.
4. Ensure the tests cover all possible scenarios, including success and failure cases.

### User Story 4: Using Regular Expressions
**As a developer, I want to validate movie titles, actor names, and director names using regular expressions so that I can ensure they follow a specific format.**

#### Exercise:
1. Update the `CreateMovieRequest`, `CreateActorRequest`, and `CreateDirectorRequest` classes to include validation attributes for the `Title`, `Name`, and `Name` properties respectively.
2. Use regular expressions to ensure the title starts with an uppercase letter and is followed by lowercase letters, and names contain only alphabetic characters.
3. Update the controllers to return a `BadRequest` response if the validation fails.

### User Story 5: Adding a New Health Check
**As a developer, I want to add a new health check for the in-memory store so that I can monitor its status.**

#### Exercise:
1. Create a new health check class `InMemoryStoreHealthCheck` that implements `IHealthCheck`.
2. Implement the `CheckHealthAsync` method to verify the status of the in-memory store.
3. Register the health check in the `Program.cs` file.
4. Update the `README.md` file with instructions on how to add custom health checks.

### User Story 6: Writing a Complex SQL Query
**As a developer, I want to write a complex SQL query that joins the movies, actors, and directors tables so that I can retrieve detailed information about movies and their associated actors and directors.**

#### Exercise:
1. Base on Domain package generate sql script which recreates entire database.
2. Create sql query which get all Actors which plays with plays in movie directed by certain directors
3. Create sql query which counts how many times actor cooperates with all movie directors

#### User Story 7: Creating Infrastructure in Azure Cloud with Copilot
As a developer, I want to use GitHub Copilot to create infrastructure in Azure Cloud so that I can automate the deployment of resources.

#### Exercise:
Create a Bicep template to define the infrastructure resources.
Use GitHub Copilot to assist in writing the Bicep for creating a virtual network, a subnet, app service and storage account.

Update the README.md file with instructions on how to use GitHub Copilot to create and deploy the Bicep template.
Place bicep template in the azure-infrastructure folder.

#### User Story 8: Deploying cloud infrastructure
As a developer, I want to deploy infrastructure and the code using CICD pipelines

#### Exercise:
Write pipeline which deploys bicep infrastructure and code to app service.
