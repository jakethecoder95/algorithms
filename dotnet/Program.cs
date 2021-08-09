using System;

namespace dotnet
{
    class MaxArea
    {
        public static int Run(int[] heights)
        {
            int answer = -1;

            for (int i = 0; i < heights.Length; i++)
            {
                // Go back
                for (int j = i - 1; j >= 0; j--)
                {
                    int distanceBetween = i - j;
                    int quantity = heights[i] > heights[j] ? distanceBetween * heights[j] : distanceBetween * heights[i];

                    if (quantity > answer)
                        answer = quantity;
                }

                // Check forward
                for (int j = i + 1; j < heights.Length; j++)
                {
                    int distanceBetween = j - i;
                    int quantity = heights[i] > heights[j] ? distanceBetween * heights[j] : distanceBetween * heights[i];

                    if (quantity > answer)
                        answer = quantity;
                }
            }

            return answer;
        }
    }

    partial class Program
    {
        static void Main(string[] args)
        {
            var heights = new int[] { 1, 8, 6, 2, 5, 4, 8, 3, 7 };
            Console.WriteLine(MaxArea.Run(heights));
        }
    }
}
