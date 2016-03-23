$(document).ready(function() {
  $("#blanks form").submit(function() {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput = $("input#animal").val();
    var verbInput = $("input#verb").val();



    $(".person1").append(person1Input);
    $(".person2").append(person2Input);
    $(".animal").append(animalInput);
    $(".verb").append(verbInput);

    $("#story").show();

    event.preventDefault();
});
});
