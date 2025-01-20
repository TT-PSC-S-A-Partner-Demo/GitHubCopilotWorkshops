# .NET 8 Refactor Exercise

## Objective

The goal of this exercise is to implement the Template pattern and a sorting algorithm with a deliberate mistake in a .NET 8 project.

## Exercise Description

### Template Pattern

The template pattern is a design pattern that defines the program skeleton of an algorithm in an operation, deferring some steps to subclasses. It lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.

### Sorting Algorithm

The provided code contains a deliberate mistake in the merging function that affects the sorting of the array. Your tasks are to identify and fix the mistake and to write additional tests to ensure the correctness of the implementation.

## Tasks

1. **Understand the Current Implementation:**
    - Spend some time understanding the current implementation and how it works.

2. **Identify Areas for Improvement:**
    - Identify parts of the code that could benefit from the template pattern.

3. **Refactor the Code:**
    - Refactor the identified parts of the code to use the template pattern.

4. **Test the Refactored Code:**
    - Ensure that the refactored code still works as expected by running any provided tests.

## Goals

- **Implement the Template Pattern:** Refactor the provided code to use the template pattern.
- **Maintain Functionality:** Ensure that the refactored code still performs the same tasks as the original code.
- **Fix the Sorting Algorithm:** Correct the identified mistake in the merging function so that the Merge Sort algorithm sorts arrays or lists as expected.
- **Validate the Implementation:** Write and run comprehensive tests to ensure that the Merge Sort algorithm handles various cases correctly, including edge cases.

## Project Structure

- `Sorting/SortingMain.cs`: Main entry point for sorting functionality.
- `Sorting/MergeSort.cs`: Contains the Merge Sort algorithm.
- `TemplatePattern/TemplatePatternMain.cs`: Main entry point for template pattern functionality.
- `TemplatePattern/CaffeineBeverage.cs`: Abstract class for the template pattern.
- `TemplatePattern/Tea.cs`: Concrete class for Tea.
- `TemplatePattern/Coffee.cs`: Concrete class for Coffee.
- `.gitignore`: Git ignore file to exclude common files and directories.
