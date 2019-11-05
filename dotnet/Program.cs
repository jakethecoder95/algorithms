using System;

namespace dotnet
{
    partial class Program
    {
        static void Main(string[] args)
        {
            string answer = Division.Run(5, 2);
            Console.WriteLine(answer);
        }
    }
}
