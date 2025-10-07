# GitHub Copilot Refactoring Exercises - Java Solutions

This document provides solutions for the Java refactoring exercises using GitHub Copilot.

## Table of Contents
- [Sorting Exercise - Merge Sort Bug Fix](#sorting-exercise---merge-sort-bug-fix)
- [Other Refactoring Exercises](#other-refactoring-exercises)

---

## Sorting Exercise - Merge Sort Bug Fix

### Problem

The `SortingMistake.java` file contains a deliberate mistake in the merge function that affects the sorting algorithm. The bug is in the comparison logic of the merge function.

### Current Buggy Code

```java
public static int[] merge(int[] left, int[] right) {
    List<Integer> result = new ArrayList<>(left.length + right.length);
    int i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] == right[j]) {  // BUG: Only handles equality case
            result.add(left[i]);
            i++;
        } else {
            result.add(right[j]);
            j++;
        }
    }
    // Add remaining elements from left array
    while (i < left.length) {
        result.add(left[i]);
        i++;
    }

    // Add remaining elements from right array
    while (j < right.length) {
        result.add(right[j]);
        j++;
    }
    // Convert result list back to array
    int[] resultArray = new int[result.size()];
    for (int k = 0; k < result.size(); k++) {
        resultArray[k] = result.get(k);
    }
    return resultArray;
}
```

### The Bug

The bug is in this section:
```java
if (left[i] == right[j]) {
    result.add(left[i]);
    i++;
} else {
    result.add(right[j]);
    j++;
}
```

This only handles the case when elements are equal. It should compare if `left[i]` is less than or equal to `right[j]`, not just equal.

### Fixed Solution

```java
package com.ttpsc.copilot_training.template.sorting;

import java.util.ArrayList;
import java.util.List;

public class SortingMistake {

    public static void main(String[] args) {
        int[] arr = { 3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5 };
        int[] sortedArr = mergeSort(arr);
        for (int num : sortedArr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    public static int[] mergeSort(int[] arr) {
        if (arr.length <= 1) {
            return arr;
        }

        int mid = arr.length / 2;
        int[] left = mergeSort(sliceArray(arr, 0, mid));
        int[] right = mergeSort(sliceArray(arr, mid, arr.length));

        return merge(left, right);
    }

    public static int[] merge(int[] left, int[] right) {
        List<Integer> result = new ArrayList<>(left.length + right.length);
        int i = 0, j = 0;

        while (i < left.length && j < right.length) {
            // FIX: Changed from == to <= for proper sorting
            if (left[i] <= right[j]) {
                result.add(left[i]);
                i++;
            } else {
                result.add(right[j]);
                j++;
            }
        }
        
        // Add remaining elements from left array
        while (i < left.length) {
            result.add(left[i]);
            i++;
        }
    
        // Add remaining elements from right array
        while (j < right.length) {
            result.add(right[j]);
            j++;
        }
        
        // Convert result list back to array
        int[] resultArray = new int[result.size()];
        for (int k = 0; k < result.size(); k++) {
            resultArray[k] = result.get(k);
        }
        return resultArray;
    }

    private static int[] sliceArray(int[] arr, int start, int end) {
        int[] slice = new int[end - start];
        System.arraycopy(arr, start, slice, 0, end - start);
        return slice;
    }
}
```

### What Changed

**Line 34-35**: Changed from:
```java
if (left[i] == right[j]) {
```

To:
```java
if (left[i] <= right[j]) {
```

This ensures that:
- Elements are compared properly for ordering
- When `left[i]` is less than or equal to `right[j]`, we take from the left array
- When `left[i]` is greater than `right[j]`, we take from the right array
- This maintains the sorted order during the merge process

### Expected Output

**Before Fix:**
```
3 6 1 1 2 5 3 5 4 9 5  (incorrect sorting)
```

**After Fix:**
```
1 1 2 3 3 4 5 5 5 6 9  (correctly sorted)
```

### Additional Tests

Here are comprehensive tests to validate the fix:

```java
package com.ttpsc.copilot_training.sorting;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class SortingMistakeTest {

    @Test
    public void testMergeSortBasic() {
        int[] arr = { 3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5 };
        int[] expected = { 1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9 };
        int[] result = SortingMistake.mergeSort(arr);
        assertArrayEquals(expected, result);
    }

    @Test
    public void testMergeSortEmptyArray() {
        int[] arr = {};
        int[] expected = {};
        int[] result = SortingMistake.mergeSort(arr);
        assertArrayEquals(expected, result);
    }

    @Test
    public void testMergeSortSingleElement() {
        int[] arr = { 42 };
        int[] expected = { 42 };
        int[] result = SortingMistake.mergeSort(arr);
        assertArrayEquals(expected, result);
    }

    @Test
    public void testMergeSortAlreadySorted() {
        int[] arr = { 1, 2, 3, 4, 5 };
        int[] expected = { 1, 2, 3, 4, 5 };
        int[] result = SortingMistake.mergeSort(arr);
        assertArrayEquals(expected, result);
    }

    @Test
    public void testMergeSortReverseSorted() {
        int[] arr = { 5, 4, 3, 2, 1 };
        int[] expected = { 1, 2, 3, 4, 5 };
        int[] result = SortingMistake.mergeSort(arr);
        assertArrayEquals(expected, result);
    }

    @Test
    public void testMergeSortDuplicates() {
        int[] arr = { 3, 3, 3, 1, 1, 2, 2 };
        int[] expected = { 1, 1, 2, 2, 3, 3, 3 };
        int[] result = SortingMistake.mergeSort(arr);
        assertArrayEquals(expected, result);
    }

    @Test
    public void testMergeSortNegativeNumbers() {
        int[] arr = { -5, 3, -2, 8, -9, 1 };
        int[] expected = { -9, -5, -2, 1, 3, 8 };
        int[] result = SortingMistake.mergeSort(arr);
        assertArrayEquals(expected, result);
    }

    @Test
    public void testMergeSortLargeArray() {
        int[] arr = new int[100];
        for (int i = 0; i < 100; i++) {
            arr[i] = 100 - i;
        }
        int[] result = SortingMistake.mergeSort(arr);
        
        // Verify it's sorted
        for (int i = 0; i < result.length - 1; i++) {
            assertTrue(result[i] <= result[i + 1], 
                "Array should be sorted at index " + i);
        }
    }

    @Test
    public void testMergeSortTwoElements() {
        int[] arr = { 2, 1 };
        int[] expected = { 1, 2 };
        int[] result = SortingMistake.mergeSort(arr);
        assertArrayEquals(expected, result);
    }

    @Test
    public void testMergeSortAllSameElements() {
        int[] arr = { 5, 5, 5, 5, 5 };
        int[] expected = { 5, 5, 5, 5, 5 };
        int[] result = SortingMistake.mergeSort(arr);
        assertArrayEquals(expected, result);
    }
}
```

### How to Use GitHub Copilot to Find This Bug

1. **Ask Copilot to Review**: Select the `merge` function and ask Copilot Chat:
   ```
   Review this merge function for bugs in the merge sort algorithm
   ```

2. **Generate Tests**: Ask Copilot:
   ```
   Generate comprehensive unit tests for this merge sort implementation
   ```

3. **Run Tests**: The tests will fail, revealing the bug

4. **Ask for Fix**: 
   ```
   The merge function is not sorting correctly. Fix the comparison logic.
   ```

5. **Alternative Approach**: Ask Copilot to explain the merge algorithm:
   ```
   Explain how the merge step in merge sort should work
   ```

---

## Other Refactoring Exercises

### Using GitHub Copilot for Refactoring

For the other exercises in this module (abstraction, builder, decorator, flyweight, pipeline, shapes, template), use GitHub Copilot to:

1. **Identify Code Smells**: Ask Copilot to review the code
   ```
   Review this code and identify potential issues or code smells
   ```

2. **Suggest Patterns**: Ask for design pattern suggestions
   ```
   What design patterns could improve this code?
   ```

3. **Generate Refactored Code**: Request specific refactorings
   ```
   Refactor this code to use the [Pattern Name] pattern
   ```

4. **Create Tests**: Generate tests before and after refactoring
   ```
   Create unit tests for this class
   ```

### General Refactoring Tips with Copilot

1. **Start Small**: Refactor one method or class at a time
2. **Test First**: Write tests before refactoring
3. **Use Chat**: Ask Copilot Chat to explain why certain refactorings are beneficial
4. **Iterate**: If the first suggestion isn't perfect, ask for alternatives
5. **Learn**: Use Copilot's suggestions as learning opportunities

### Example Copilot Prompts for Refactoring

- "Refactor this method to be more readable"
- "Apply SOLID principles to this class"
- "Extract this logic into a separate method"
- "Replace conditional with polymorphism in this code"
- "Suggest performance improvements for this algorithm"
- "Make this code more testable"
- "Apply dependency injection to this class"

---

## Running the Code

```bash
# Navigate to the project directory
cd exercises/gh-copilot-refactor/gh-copilot-refactor-java/copilot-refactor

# Build the project
mvn clean install

# Run the sorting example
mvn exec:java -Dexec.mainClass="com.ttpsc.copilot_training.template.sorting.SortingMistake"

# Run tests
mvn test
```

## Expected Results

After fixing the bug, running the `SortingMistake` main method should output:
```
1 1 2 3 3 4 5 5 5 6 9
```

All tests should pass with green checkmarks.

---

## Learning Outcomes

From this exercise, you should understand:

1. How to use GitHub Copilot to identify bugs in algorithms
2. The importance of test-driven development
3. How merge sort algorithm works
4. Common mistakes in comparison logic
5. How to write comprehensive unit tests
6. Using Copilot Chat for code review and suggestions

---

## Additional Resources

- [Merge Sort Algorithm Explanation](https://en.wikipedia.org/wiki/Merge_sort)
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Test-Driven Development with JUnit](https://junit.org/junit5/docs/current/user-guide/)
