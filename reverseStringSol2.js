// Basic Algorithm Scripting: Reverse a String

/*Description
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Tests

reverseString("hello") should return a string.
reverseString("hello") should become "olleh".
reverseString("Howdy") should become "ydwoH".
reverseString("Greetings from Earth") should return "htraE morf sgniteerG"
*/

//Solution 2

function reverseString(str) { //1
    return str                //2
      .split("")              //3
      .reverse()              //4
      .join("");              //5
  }

console.log(reverseString("hello"));
// Output = "olleh"

 //Notes To help me understand the code by line

   /*
        1 - function reverseString(str) {
          - The function declaration (function statement) defines a function with the specified parameters.
          - You can also define functions using the Function constructor and a function expression.
          - source - [https://devdocs.io/javascript/statements/function]
      
          - "reverseString" - the name of the function
          - "str" - The argument for the function - The value to be reversed

        2 - The return ends function execution and specifies a value to be returned to the function caller. source-[https://devdocs.io/javascript/statements/return]
          - str reverse to the function input, value to be reversed. In this case "hello"

        3 - The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split. source-[https://devdocs.io/javascript/global_objects/string/split]

          - In addition, split("") with no space in between quotes will split by letter && split(" ") with space will split by word
          - Output = [ 'h', 'e', 'l', 'l', 'o' ]

        4 - Note that the above split method converted the string to an array and the original string is now split letters of the string in an array
          - The reverse() method is a method to be applied to arrays
          - array.reverse
            The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
            source-[https://devdocs.io/javascript/global_objects/array/reverse]
          - Output = [ 'o', 'l', 'l', 'e', 'h' ]

        5 - The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string source-[https://devdocs.io/javascript/global_objects/array/join]
          - Output = "olleh"
  */
