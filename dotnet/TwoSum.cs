using System.Collections;
using System.Collections.Generic;

namespace dotnet
{
    class TwoSum
    {
        public static int[] Run(int[] nums, int target)
        {
            var table = new Hashtable();
            var found = new List<int>();

            for (int i = 0; i < nums.Length; i++)
            {
                int value = nums[i];
                int valueNeeded = target - value;

                if (table.ContainsKey(value))
                {
                    found.Add((int)table[value]);
                    found.Add(i);
                    table.Remove(value);
                    continue;
                }

                if (!table.ContainsKey(valueNeeded))
                    table.Add(valueNeeded, i);
                else
                    table[valueNeeded] = i;
            }

            return found.ToArray();
        }
    }
}
