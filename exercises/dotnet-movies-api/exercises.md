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
1. Create SQL tables `Movies`, `Actors`, `Directors`, and `MovieActors` in a SQL database.
2. Populate the tables with sample data.
3. Write a SQL query that joins the `Movies`, `Actors`, `Directors`, and `MovieActors` tables to retrieve the movie title, actor names, and director names.
4. Execute the query and verify the results.

```sql
-- Example SQL Query
SELECT 
    m.Title AS MovieTitle,
    d.Name AS DirectorName,
    a.Name AS ActorName
FROM 
    Movies m
JOIN 
    Directors d ON m.DirectorId = d.Id
JOIN 
    MovieActors ma ON m.Id = ma.MovieId
JOIN 
    Actors a ON ma.ActorId = a.Id
ORDER BY 
    m.Title, d.Name, a.Name;
```