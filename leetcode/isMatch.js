var isMatch = function(s, p) {
  return new RegExp(`^${p}$`).test(s);
};

isMatch("aa", "a*");
