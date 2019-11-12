using System.Collections.Generic;

namespace dotnet
{
    public class RomanToInt
    {
        public static int Run(string s)
        {
            var romanNumerals = new Dictionary<char, int>();
            romanNumerals.Add('I', 1);
            romanNumerals.Add('V', 5);
            romanNumerals.Add('X', 10);
            romanNumerals.Add('L', 50);
            romanNumerals.Add('C', 100);
            romanNumerals.Add('D', 500);
            romanNumerals.Add('M', 1000);

            int answer = 0;
            for (int i = 0; i < s.Length; i++)
            {
                char numeral = s[i];

                if (i == s.Length - 1)
                {
                    answer += romanNumerals[numeral];
                    break;
                }

                char nextNumeral = s[i + 1];

                if (romanNumerals[numeral] < romanNumerals[nextNumeral])
                {
                    answer += romanNumerals[nextNumeral] - romanNumerals[numeral];
                    i++;
                }
                else
                    answer += romanNumerals[numeral];
            }

            return answer;
        }
    }
}
