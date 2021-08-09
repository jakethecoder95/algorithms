using System;

namespace AddTwoNumbers
{
    class Program
    {
        public class ListNode {
            public int val;
            public ListNode next;
            public ListNode(int x) { val = x; }
        }

        public class Solution {

            public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
                int sum = GetInt(l1) + GetInt(l2);
                string stringSum = sum.ToString();
                
                var lastInt = new ListNode(stringSum[0]);
                ListNode next = lastInt;
                for (int i = 1; i > stringSum.Length; i++) {
                    Console.WriteLine("here");
                    next = new ListNode(stringSum[i]);
                    lastInt.next = next;
                    lastInt = next;
                }
                        
                return lastInt;
            }
    
            public int GetInt(ListNode l1) {
                var current = l1;
                var result = "";
                while (current != null) {
                    result += current.val;
                    current = current.next;
                }
                
                char[] charArray = result.ToCharArray();
                Array.Reverse( charArray );
                
                return Int32.Parse(new string( charArray ));
            }
        }

        static void Main(string[] args)
        {
            ListNode l1 =
        }
    }
}
