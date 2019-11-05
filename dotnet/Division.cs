using System;

namespace dotnet
{
    partial class Program
    {
        class Division
        {
            public static string Run(int d, int n)
            {
                if (n == 0)
                    throw new InvalidOperationException("This is impossible");

                int wholeNum = Divide(d, n);
                int decimalNum = Divide(100, n) * (d - n * wholeNum);

                return wholeNum.ToString() + "." + decimalNum.ToString();
            }

            private static int Divide(int d, int n)
            {
                int dCounter = d;
                int quocient = 0;

                while (dCounter - n >= 0)
                {
                    dCounter -= n;
                    quocient++;
                }

                return quocient;
            }
        }
    }
}
