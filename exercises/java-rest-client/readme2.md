a demo project for Spring Boot, showcasing various functionalities implemented using a hexagonal architecture style. The project includes operations for date difference calculation, phone number validation, color code retrieval, DNI validation, joke fetching, URL parsing, word counting in files, and folder zipping.

Table of Contents
Getting Started
Project Structure
Operations
Date Difference Calculation
Phone Number Validation
Color Code Retrieval
DNI Validation
Joke Fetching
URL Parsing
Word Counting in Files
Folder Zipping
Running Tests
License
Getting Started
To get started with this project, clone the repository and build the project using Maven.

Project Structure
Operations
Date Difference Calculation
Endpoint: /diffdates

Calculates the difference between two dates. The operation receives two dates as parameters in the format dd-MM-yyyy and returns the difference in days.

Phone Number Validation
Endpoint: /validatePhoneNumber

Validates the format of a Spanish phone number (+34 prefix, then 9 digits, starting with 6, 7, or 9). The operation receives a phone number as a parameter and returns true if the format is correct, false otherwise.

Color Code Retrieval
Endpoint: /color/{name}

Based on the existing colors.json file under resources, given the name of the color as a path parameter, returns the hexadecimal code. If the color is not found, returns 404.

DNI Validation
Endpoint: /validateDNI

Validates the format of a Spanish DNI (8 digits and 1 letter). The operation receives a DNI as a parameter and returns true if the format is correct, false otherwise.

Joke Fetching
Endpoint: /joke

Fetches a random joke from the API https://api.chucknorris.io/jokes/random and returns the joke.

URL Parsing
Endpoint: /parseUrl

Parses a given URL and returns its components.

Word Counting in Files
Endpoint: /countWord

Given the path of a file and a word, counts the number of occurrences of the provided word. The path and the word should be query parameters. The response is in JSON format.

Folder Zipping
Endpoint: /zipFolder

Creates a zip file with the content of a given folder. The path of the folder should be a query parameter.

Running Tests
To run the tests, use the following command:

License
This project is licensed under the MIT License - see the LICENSE file for details.