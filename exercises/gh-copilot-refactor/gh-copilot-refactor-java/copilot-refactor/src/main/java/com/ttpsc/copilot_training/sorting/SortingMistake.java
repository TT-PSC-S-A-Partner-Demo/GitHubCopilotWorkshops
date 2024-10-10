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
            if (left[i] == right[j]) {
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