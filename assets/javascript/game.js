$(document).ready(function () {

    // display the starting value of the user total of 0
    var startvalue = 0;
    $("#userScore").html(startvalue);

    // function to choose a random number between the assigned numbers
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    // pick a random number between 19 and 120
    var goalNumber = randomNumber(19, 120);
    console.log(goalNumber);

    // display that number in the appropriate div on the webpage
    $("#assignedNumber").html(goalNumber);

    // assign a random number between 1 and 12 to each gem
    var purpleNumber = $("#purple").attr("value", randomNumber(1,12));
    // var purpleNumber = randomNumber(1, 12);
    // var purpleVal = $("#purple").val(purpleNumber);
    // console.log(purpleNumber);
    var greenNumber = $("#green").attr("value", randomNumber(1, 12));
    // console.log(greenNumber);
    var blueNumber = $("#blue").attr("value", randomNumber(1, 12));
    // console.log(blueNumber);
    var redNumber = $("#red").attr("value", randomNumber(1, 12));
    // console.log(redNumber);


    // on click take the value of the number assigned to the gem clicked and add it to the total of the user score
    $(".gem").click(function (){
        var numVal = $(".gem").event.currentTarget("value");
        console.log(numVal);
    })


    // if the total of the user score matches the random number chosen then the user wins and one win gets added to the win total

    // if the total of the user score goes over the random number then user loses and one loss gets added to the loss total

    // once either a win or loss occurs then the game resets, picking a new random number and assigning new values to each gem


})