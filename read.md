The Code you write is not the code that gets executed (like this) in the browser. Instead the code is transformed before it's handed off to the browser.

The Two main reason for it are
1) Raw, unprocessed React code won't execute in the browser (JSX is not a default JavaScript feature)
2) In addition, the code would not be optimized for production (e.g. not minified)

Node JS is not just used to install packages for react, or create project, but are used by tools that build process to run it behind the scenes.
 
#Import Export 
Only one default export per file

They are different types of Values and they are :
1) String, 2) Number, 3) Boolean 4)Null & undefined 5) Additional Objects

Variables stores values and two reasons to use variables are 1) Reusability and 2) Readibility (Organize your code over several lines)

Some of the important JS operators are: 
+ - / *
=== cheching for equality and leads a boolean value
<= >= ( Mostly used for if conditions)

Functions are not be executed immediately but at some time in future and can be called as many times as needed

The idea of an array is to create a list of values together (Group values together), Arrays can contain any kinds of values such as they can contain other arrays, objects, numbers, strings whatever you want.

Map  allows to transform every item in an array to another item

In variable you dont store the value but instead store the address of the data in memory for objects. Thats why you can edit object event thought it is declared in const. Const does not mean the value cannot be edited but the value cannot be overwritten. So you cant give = to add value in const but can push value such as hobbies.push("Working") to add value in objects. 