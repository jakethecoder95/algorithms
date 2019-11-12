using System;
using System.Collections.Generic;

namespace dotnet
{
    class IntToRoman
    {
        public static string Run(int num)
        {
            var romanNumerals = new Dictionary<char, int>();
            romanNumerals.Add('I', 1);
            romanNumerals.Add('V', 5);
            romanNumerals.Add('X', 10);
            romanNumerals.Add('L', 50);
            romanNumerals.Add('C', 100);
            romanNumerals.Add('D', 500);
            romanNumerals.Add('M', 1000);

            var numeralsList = new char[]
                            { 'I', 'V', 'X', 'L', 'C', 'D', 'M' };

            string answer = "";
            for (int i = 6; i >= 0; i--)
            {
                char numeral = numeralsList[i];
                int numeralVal = romanNumerals[numeral];
                float quotient = (float)num / (float)numeralVal;

                if (quotient >= 1)
                {
                    for (int j = 0; j < Math.Floor(quotient); j++)
                    {
                        answer += numeral;
                        num -= numeralVal;
                    }
                }

                if (i % 2 == 0 && i >= 2)
                {
                    var prefixedNumeral = numeralsList[i - 2].ToString() + numeral.ToString();
                    var prefixedNumeralValue = numeralVal - romanNumerals[numeralsList[i - 2]];

                    if (num >= prefixedNumeralValue)
                    {
                        answer += prefixedNumeral;
                        num -= prefixedNumeralValue;
                    }
                }
                else if (i >= 1)
                {
                    var prefixedNumeral = numeralsList[i - 1].ToString() + numeral.ToString();
                    var prefixedNumeralValue = numeralVal - romanNumerals[numeralsList[i - 1]];

                    if (num >= prefixedNumeralValue)
                    {
                        answer += prefixedNumeral;
                        num -= prefixedNumeralValue;
                    }
                }

            }

            return answer;
        }
    }
}
