$(document).ready(function() {
  $("#blanks form").submit(function() {
    var blanks = ["person1", "person2", "animal", "verb"];

    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);

    });
    $("#story").show();

    event.preventDefault();





});
});


// run array of strings and return all in UPPERCASE
// var names = ["jeff", "ryan", "june", "stimpy"];
// var upperNames = names.map(function(name){
//   return name.toUpperCase();
// });
// alert(upperNames);


// **run array of numbers through map and return with added +1
// var numbers = [1,2,3,4,5]
//
// var plusNumbers = numbers.map(function(number){
//   return number + 1;
// });
// alert(plusNumbers);


 // *run array of numbers, then second var to double numbers, not affecting original array
// var numbers = [1,2,3,4,5];
//
// var doubledNumbers = [];
// numbers.forEach(function(number){
//   doubledNumbers.push(number * 2);
// });
// alert(doubledNumbers);
//
// var doubledNumbers = numbers.map(function(number){
// return number * 2;
// });
// alert(doubledNumbers);




// multiply through a series of numbers in array
//     var summands = [2, 4, 8, 16, 32];
//     total = 1;
//     summands.forEach(function(summand){
//     total = total * summand;
//     console.log(total);
// });

 // array of icecreams to just display in #icecream
 // var icecreams = ["RockyRoad", "CookieDough", "Vanilla", "Chocolate"]
 // icecreams.forEach(function(icecream){
 //   $('#icecream').text(icecreams);
 // });

// >----------  array of names, alert each name -------->
    // var names = ["Alex", "Ryan", "Tyler", "Josh"];
    // console.log(names);
    // names.forEach(function(name){
    //   alert(name + " Is such a cool person.");
    // });


// <---------bulky old code -------->
    // var person1Input = $("input#person1").val();
    // var person2Input = $("input#person2").val();
    // var animalInput = $("input#animal").val();
    // var verbInput = $("input#verb").val();
    //
    //
    //
    //
    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".verb").text(verbInput);
