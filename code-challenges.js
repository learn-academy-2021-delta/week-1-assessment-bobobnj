// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a statement that determines if a temperature is below
//boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Using string interpolation and connditional statements, I would create a variable that indicates
//// the running temp and use - else - and - else if -in order to determine whether the temperature
//// is below, at, or above boiling point; referencing number 212 as boiling point.
////// Ex.
////// var temp = 699;

          var temp = 699;

          if(temp === 212) {
            console.log(`${temp} is at boiling point`)
          }else if (temp < 212) {
            console.log(`${temp} is below boiling point`);
          } else if (temp > 212) {
            console.log(`${temp} is above boiling point`);
  }


// Create the code and test each of the variables provided. Expected output:
//"35 is below boiling point", "350 is above boiling point", "212 is at boiling point"
// With my newly established



//var temp = 35
// var temp = 350
// var temp = 212
                var temp = 35;


                if(temp === 212) {
                  console.log(`${temp} is at boiling point`)
                }else if (temp < 212) {
                  console.log(`${temp} is below boiling point`);
                } else if (temp > 212) {
                  console.log(`${temp} is above boiling point`);
                }




// --------------------2) Create the code that will combine two arrays and return the
//  length using the variables provided below. Expected output: 10
//
// var myNumbers1 = [3, 7, 0, 36, -9]
// var myNumbers2 = [8, -7, 22, 9, 13]

            var myNumbers1 = [3, 7, 0, 36, -9]
            var myNumbers2 = [8, -7, 22, 9, 13]

              console.log(myNumbers1.length + (myNumbers2.length);

//
// // --------------------3) Create the code that will reverse the letters of a string
// using the test variables provided below. Expected output: "eilrahc", "atled"
//
// var myString1 = "charlie"
// var myString2 = "delta"
//
//  var myString1 = "charlie"
     console.log(myString1.split(""));
  var splitNames1 = myString1.split("")
    console.log(splitNames1);
    console.log(splitNames1.reverse());
  var newName1 = splitNames1.reverse()
  console.log(newName1.join());
  var jointName1 = newName1.join()
  console.log(jointName1);
  var myString1 = jointname1
  console.log(myString1);

  var myString2 = "delta"
     console.log(myString2.split(""));
  var splitNames2 = myString2.split("")
    console.log(splitNames2);
    console.log(splitNames2.reverse());
  var newName2 = splitNames2.reverse()
  console.log(newName2.join());
  var jointName2 = newName2.join()
  console.log(jointName2);
  var myString2 = jointname2
  console.log(myString2);

//
// // --------------------4) Create a statement that evaluates two numbers and subtracts
//  the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12

//// In javascript numbers are used as mathematical tools and can perform simple calculations like subtraction.
//// If we used a scale of zero to 100 (assuming 0 is least and 100 is greatest) we can determine that 42 is 58 less than 100 while 27 is 73 less of 100.
//// The difference of 73 and 58 is 15. Or more simpley put, javascript understands that 27 is factually less than
//// 42 by a numerical of 15 while 7 is factually less than 19 by a numerical of 12. Creating a specific variable
//// that takes the exact value of of each number in question we can create a formula to evaluate the difference
//// between number1 and number2.

// var number1 = 42
// var number2 = 27
                        var number1 = 32
                        var number2 = 27
                        console.log(number1 - (number2));

// // var number1 = 7
// // var number2 = 19
                        var number1 = 7
                        var number2 = 19
                        console.log(number2 - (number1));
//
//
// // --------------------5) Copy/paste your code from #4. Refactor your code to also
//  accept non-number edge cases. Inform your user if the variable is not a number using
//   the two sets of test variables provided below. Expected output: "Your input is not a number", 3
//
                          var number1 = 42
                          var number2 = "hello"
                          if(number1 < 0 && number > 999999999999999) {
                          console.log(`${number1} Your input is not a number`);
                            }


// var numberRefactor1 = 42
// var numberRefactor2 = "hello"
                            var number1 = 27
                            var number2 = 24
                            console.log(number1 - (number2));
// // var numberRefactor1 = 27
// // var numberRefactor2 = 24
