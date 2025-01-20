using System;
using Xunit;

namespace CopilotRefactorDotnet.TemplatePattern
{
    public class TemplatePatternTests
    {
        [Fact]
        public void TestTeaPreparation()
        {
            Tea tea = new Tea();
            tea.PrepareRecipe();
            // Add assertions or checks if needed
        }

        [Fact]
        public void TestCoffeePreparation()
        {
            Coffee coffee = new Coffee();
            coffee.PrepareRecipe();
            // Add assertions or checks if needed
        }
    }
}
