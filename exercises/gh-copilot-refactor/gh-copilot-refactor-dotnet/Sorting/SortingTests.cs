using Xunit;

namespace CopilotRefactorDotnet.Sorting
{
    public class SortingTests
    {
        [Fact]
        public void TestMergeSort()
        {
            int[] arr = { 3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5 };
            int[] sortedArr = SortingMain.Sort(arr);
            Assert.Equal(new int[] { 1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9 }, sortedArr);
        }
    }
}
