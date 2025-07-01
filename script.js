// نقشه ساده تبدیل کاراکترها به حروف فارسی و برعکس
const map = {
  'a': 'ش', 'b': 'س', 'c': 'ی', 'd': 'ب', 'e': 'ل', 'f': 'ا',
  'g': 'ن', 'h': 'م', 'i': 'ت', 'j': 'ر', 'k': 'ک', 'l': 'د',
  'm': 'پ', 'n': 'و', 'o': 'چ', 'p': 'ج', 'q': 'ق', 'r': 'ه',
  's': 'ز', 't': 'ح', 'u': 'خ', 'v': 'ض', 'w': 'ص', 'x': 'ث',
  'y': 'غ', 'z': 'ع', '0': '۰', '1': '۱', '2': '۲', '3': '۳',
  '4': '۴', '5': '۵', '6': '۶', '7': '۷', '8': '۸', '9': '۹',
  ':': '؛', '/': 'ژ', '.': 'ٰ', '@': 'ً', '?': '؟', '=': '۞', '&': '۩'
};

// ساختن نقشه معکوس
const reverseMap = {};
for (const key in map) {
  reverseMap[map[key]] = key;
}

function encodeText() {
  const input = document.getElementById("input").value;
  let output = "";
  for (let char of input) {
    output += map[char] || char;
  }
  document.getElementById("output").value = output;
}

function decodeText() {
  const input = document.getElementById("input").value;
  let output = "";
  for (let char of input) {
    output += reverseMap[char] || char;
  }
  document.getElementById("output").value = output;
}
