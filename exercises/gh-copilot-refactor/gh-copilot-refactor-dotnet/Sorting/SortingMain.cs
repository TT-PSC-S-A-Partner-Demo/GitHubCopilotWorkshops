using System;
using System.Collections.Generic;

namespace CopilotRefactorDotnet.Sorting
{
    public class SortingMain
    {
        // public static void Main(string[] args)
        // {
        //     int[] arr = { 3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5 };
        //     int[] sortedArr = Sort(arr);
        //     Console.WriteLine(string.Join(" ", sortedArr));
        // }

        public static int[] Sort(int[] arr)
        {
            if (arr.Length <= 1)
            {
                return arr;
            }

            int mid = arr.Length / 2;
            int[] left = Sort(SliceArray(arr, 0, mid));
            int[] right = Sort(SliceArray(arr, mid, arr.Length));

            return Merge(left, right);
        }

        private static int[] Merge(int[] left, int[] right)
        {
            List<int> result = new List<int>(left.Length + right.Length);
            int i = 0, j = 0;

            while (i < left.Length && j < right.Length)
            {
                if (left[i] <= right[j])
                {
                    result.Add(left[i]);
                    i++;
                }
                else
                {
                    result.Add(right[j]);
                    j++;
                }
            }
            // Add remaining elements from left array
            while (i < left.Length)
            {
                result.Add(left[i]);
                i++;
            }

            // Add remaining elements from right array
            while (j < right.Length)
            {
                result.Add(right[j]);
                j++;
            }
            return result.ToArray();
        }

        private static int[] SliceArray(int[] arr, int start, int end)
        {
            int[] slice = new int[end - start];
            Array.Copy(arr, start, slice, 0, end - start);
            return slice;
        }
    }
}
