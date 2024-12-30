using System;
using CopilotRefactorDotnet.Sorting;
using CopilotRefactorDotnet.TemplatePattern;

namespace CopilotRefactorDotnet
{
    class Program
    {
        static void Main(string[] args)
        {
            // Sorting algorithm with mistake
            int[] arr = { 3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5 };
            int[] sortedArr = MergeSort.Sort(arr);
            Console.WriteLine(string.Join(" ", sortedArr));

            // Template pattern
            Tea tea = new Tea();
            tea.PrepareRecipe();

            Coffee coffee = new Coffee();
            coffee.PrepareRecipe();
        }
    }
}
