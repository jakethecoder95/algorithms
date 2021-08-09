using System;
using System.Text;

public class Program {
	// a == 97 & z == 122
	// O(n) | O(1)
	public static string CaesarCypherEncryptor(string str, int key) {
		var decrypted = new StringBuilder("");
		key = key % 26;
		foreach (char c in str) {
			int amount = (int)c;
			if (c + key > 122) {
			  amount = 96 + (c + key - 122); 
				decrypted.Append((char)(amount));
				continue;
			}
			decrypted.Append((char)(amount + key));
		}
		return decrypted.ToString();
	}
}
