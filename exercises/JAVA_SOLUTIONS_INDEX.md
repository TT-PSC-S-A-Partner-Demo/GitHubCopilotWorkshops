# Java Exercises - Quick Solutions Reference

This document provides a quick reference guide for all Java exercise solutions in the GitHub Copilot Workshops.

## 📁 Available Solutions

### 1. Java REST Client Exercises
**Location**: `exercises/java-rest-client/SOLUTIONS.md`

Complete implementations for 30 exercises covering:
- ✅ Basic REST endpoints (GET, POST, PUT, DELETE)
- ✅ Date operations and validations
- ✅ Regular expressions (phone, DNI, email validation)
- ✅ File operations (reading, writing, zipping)
- ✅ External API integration (Chuck Norris jokes)
- ✅ Security (JWT tokens, encryption/decryption)
- ✅ Database operations (JPA CRUD)
- ✅ Advanced topics (caching, async, rate limiting, health checks)

**Quick Access**: [View Solutions](./java-rest-client/SOLUTIONS.md)

### 2. GitHub Copilot Refactoring Exercises (Java)
**Location**: `exercises/gh-copilot-refactor/gh-copilot-refactor-java/SOLUTIONS.md`

Solutions for refactoring exercises including:
- ✅ **Sorting Bug Fix**: Detailed explanation of the Merge Sort bug and fix
- ✅ Comprehensive unit tests for validation
- ✅ How to use GitHub Copilot for bug detection
- ✅ Best practices for refactoring with Copilot

**Quick Access**: [View Solutions](./gh-copilot-refactor/gh-copilot-refactor-java/SOLUTIONS.md)

---

## 🚀 Quick Start Guide

### For REST API Exercises

1. **Navigate to the project**:
   ```bash
   cd exercises/java-rest-client
   ```

2. **Build the project**:
   ```bash
   mvn clean package
   ```

3. **Run the application**:
   ```bash
   mvn spring-boot:run
   ```

4. **Test an endpoint**:
   ```bash
   curl -v "http://localhost:8080/hello?key=world"
   ```

5. **View solution**: Open `SOLUTIONS.md` for detailed implementations

### For Refactoring Exercises

1. **Navigate to the project**:
   ```bash
   cd exercises/gh-copilot-refactor/gh-copilot-refactor-java/copilot-refactor
   ```

2. **View the bug**: Open `src/main/java/com/ttpsc/copilot_training/sorting/SortingMistake.java`

3. **Read the exercise**: Check `src/main/java/com/ttpsc/copilot_training/sorting/sorting.md`

4. **View solution**: Open `../../SOLUTIONS.md` for the fix and explanation

---

## 📚 Exercise Coverage

### REST API Exercises (1-15)

| Exercise | Topic | Difficulty | Solution Available |
|----------|-------|------------|-------------------|
| 1 | Simple GET Request | ⭐ | ✅ |
| 2 | Date Comparison | ⭐ | ✅ |
| 3 | Spanish Phone Validation | ⭐⭐ | ✅ |
| 4 | Spanish DNI Validation | ⭐⭐ | ✅ |
| 5 | Color to Hex Conversion | ⭐⭐ | ✅ |
| 6 | External API Integration | ⭐⭐ | ✅ |
| 7 | URL Parsing | ⭐⭐ | ✅ |
| 8 | File/Folder Listing | ⭐⭐ | ✅ |
| 9 | Word Counting | ⭐⭐ | ✅ |
| 10 | Folder Zipping | ⭐⭐⭐ | ✅ |
| 11 | Password Generator | ⭐⭐ | ✅ |
| 12 | Email Validation | ⭐⭐ | ✅ |
| 13 | JWT Token Operations | ⭐⭐⭐ | ✅ |
| 14 | File Encryption/Decryption | ⭐⭐⭐ | ✅ |
| 15 | Database CRUD | ⭐⭐⭐ | ✅ |

### Advanced Exercises (16-30)

| Exercise | Topic | Difficulty | Solution Available |
|----------|-------|------------|-------------------|
| 16 | API Rate Limiting | ⭐⭐⭐ | ✅ |
| 17 | Custom Annotations | ⭐⭐⭐ | ✅ |
| 18 | Caching | ⭐⭐⭐ | ✅ |
| 19 | Exception Handling | ⭐⭐⭐ | ✅ |
| 20 | Async Processing | ⭐⭐⭐ | ✅ |
| 21 | Health Checks | ⭐⭐ | ✅ |
| 22-30 | Various Advanced Topics | ⭐⭐⭐ | ✅ |

### Refactoring Exercises

| Exercise | Topic | Difficulty | Solution Available |
|----------|-------|------------|-------------------|
| Sorting | Merge Sort Bug Fix | ⭐⭐ | ✅ |
| Others | Design Patterns | ⭐⭐⭐ | 📝 (Guide provided) |

---

## 💡 Using GitHub Copilot Effectively

### Tips from the Solutions

1. **Write Clear Comments**: Describe what you want before writing code
   ```java
   // Create an endpoint that validates Spanish phone numbers with +34 prefix
   ```

2. **Use Test-Driven Development**: Write tests first
   ```java
   @Test
   void shouldValidateSpanishPhone() {
       // Copilot will suggest the test implementation
   }
   ```

3. **Ask Copilot Chat**: Use the chat for explanations
   ```
   Q: "How do I implement JWT token validation in Spring Boot?"
   ```

4. **Iterate on Suggestions**: If the first suggestion isn't perfect, ask again
   ```
   "Refactor this code to be more secure"
   "Make this method more readable"
   ```

5. **Learn from Generated Code**: Review and understand Copilot's suggestions

---

## 🧪 Testing Your Solutions

### Running Unit Tests

```bash
# Run all tests
mvn test

# Run specific test class
mvn test -Dtest=CopilotDemoApplicationTests

# Run with coverage
mvn test jacoco:report
```

### Manual Testing Examples

```bash
# Exercise 2: Date comparison
curl "http://localhost:8080/diffdates?date1=01-01-2020&date2=01-01-2021"

# Exercise 3: Phone validation
curl "http://localhost:8080/validatephone?phone=+34612345678"

# Exercise 11: Password generation
curl "http://localhost:8080/generatepassword?length=16&uppercase=true"

# Exercise 15: User CRUD
curl -X POST http://localhost:8080/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}'
```

---

## 📖 Additional Resources

### Official Documentation
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [JUnit 5 User Guide](https://junit.org/junit5/docs/current/user-guide/)

### Related Workshop Materials
- Main README: `../../README.md`
- Java REST Client Exercises: `exercises/java-rest-client/README.md`
- Refactoring Exercises: `exercises/gh-copilot-refactor/`

---

## 🤝 Contributing

If you find issues or want to add more solutions:

1. Review the existing solutions
2. Follow the same format and style
3. Include comprehensive examples
4. Add unit tests where applicable
5. Update this quick reference guide

---

## 📝 Notes

- All solutions are provided as **learning aids** - try solving exercises yourself first!
- Solutions demonstrate **best practices** with Spring Boot and GitHub Copilot
- Code examples are **production-ready** with proper error handling
- Each solution includes **unit tests** for validation

---

**Last Updated**: 2025-10-07

**Solution Authors**: Generated with GitHub Copilot assistance

**Feedback**: Feel free to suggest improvements or report issues!
