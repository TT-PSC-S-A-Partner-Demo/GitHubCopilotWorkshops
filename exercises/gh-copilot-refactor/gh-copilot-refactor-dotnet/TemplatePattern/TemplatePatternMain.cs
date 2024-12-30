using System;

namespace CopilotRefactorDotnet.TemplatePattern
{
    // public class TemplatePatternMain
    // {
    //     public static void Main(string[] args)
    //     {
    //         Tea tea = new Tea();
    //         tea.PrepareRecipe();

    //         Coffee coffee = new Coffee();
    //         coffee.PrepareRecipe();
    //     }
    // }

    public abstract class CaffeineBeverage
    {
        public void PrepareRecipe()
        {
            BoilWater();
            Brew();
            PourInCup();
            AddCondiments();
        }

        protected abstract void Brew();
        protected abstract void AddCondiments();

        private void BoilWater()
        {
            Console.WriteLine("Boiling water");
        }

        private void PourInCup()
        {
            Console.WriteLine("Pouring into cup");
        }
    }

    public class Tea : CaffeineBeverage
    {
        protected override void Brew()
        {
            Console.WriteLine("Steeping the tea");
        }

        protected override void AddCondiments()
        {
            Console.WriteLine("Adding lemon");
        }
    }

    public class Coffee : CaffeineBeverage
    {
        protected override void Brew()
        {
            Console.WriteLine("Brewing coffee grounds");
        }

        protected override void AddCondiments()
        {
            Console.WriteLine("Adding sugar and milk");
        }
    }
    
}
