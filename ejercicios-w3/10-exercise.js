//22. Remove Character at Specified Position in String
//Write a JavaScript program to remove a character at the specified position in
//  a given string and return the modified string.

function remove(string, posicion) {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    if (i !== posicion) {
      newString += string[i];
    }
  }
  return newString;
}

console.log(remove("hello world", 0));

