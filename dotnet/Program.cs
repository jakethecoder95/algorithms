using System;

namespace dotnet
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = new int[] { 1, 3, 4, 5, 6, 6, 7, 9 };

            var matches = TwoSum.Run(numbers, 10);

            foreach (var match in matches)
            {
                Console.Write(match + ", ");
            }
        }
    }
}
