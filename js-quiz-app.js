<<<<<<< HEAD
var x = 0;
var user_answers = 
[
	false,
	false, 
	false,
	false,
	false
];
var howManyCorrect = 0;

function createQuestions()
{

return {"questionSets":
			[
				{
					"question": "which dwarf planet has the furthest orbit?",
					"firstOption": "Pluto",
					"secondOption": "Makemake",
					"thirdOption": "Sedna",
					"fourthOption": "Haumea"
				},
				{
					"question": "Why does Haumea have a football-like appearance?",
					"firstOption": "It is heavily bombarded by asteroids, which have altered it's appearance.",
					"secondOption": "It's moons' strong gravity has caused it to stretch.",
					"thirdOption": "It's gravity is not strong enough to keep it in a spherical shape.",
					"fourthOption": "It's rotation is extremely fast, giving it an elongated shape."
				},
				{
					"question": "What is NOT a criteria to be called a planet?",
					"firstOption": "It must have an atmosphere.",
					"secondOption": "It orbits the sun.",
					"thirdOption": "It is round in shape.",
					"fourthOption": "There are no foreign objects in it's orbit."
				},
				{
					"question": "What is the closest dwarf planet?",
					"firstOption": "Pluto",
					"secondOption": "Eris",
					"thirdOption": "Ceres",
					"fourthOption": "Makemake"
				},
				{
					"question": "What makes Pluto's orbit different from the rest of the planets?",
					"firstOption": "It wobbles.",
					"secondOption": "It crosses Neptune's orbit",
					"thirdOption": "It crosses Uranus's orbit",
					"fourthOption": "It is perfectly circular."
				},
				{
					"question": "Results"
				}
		]};
}




function display(quiz)
{
	$("#question_num").text((x+1) + "/5");
	$("#question").text(quiz.questionSets[x].question);
	$("#first").text(quiz.questionSets[x].firstOption);
	$("#second").text(quiz.questionSets[x].secondOption);
	$("#third").text(quiz.questionSets[x].thirdOption);
	$("#fourth").text(quiz.questionSets[x].fourthOption);
	
}
function answerkey(select, quiz)
{ var keyArray = 
	[
		quiz.questionSets[0].thirdOption,
		quiz.questionSets[1].fourthOption,
		quiz.questionSets[2].firstOption,
		quiz.questionSets[3].thirdOption,
		quiz.questionSets[4].secondOption
	]
	return keyArray[select];
}
function checkAnswer()
{/*

	var answerone = checkme.questionSets[0].thirdOption;
	var answertwo = checkme.questionSets[1].fourthOption;
	var answerthree = checkme.questionSets[2].firstOption;
	var answerfour = checkme.questionSets[3].thirdOption;
	var answerfive = checkme.questionSets[4].secondOption;
*/
	
	if(x == 1) // if we are on the first question
	{
		if($("input[value='three']:checked").val()) //if the correct answer is selected
		{
			user_answers[0] = true;
			howManyCorrect++;
		}
	}
	if(x == 2) // if we are on the second question
	{
		if($("input[value='four']:checked").val()) //if the correct answer is selected
		{
			user_answers[1] = true;
			howManyCorrect++;
		}
	}
	if(x == 3) // if we are on the third question
	{
		if($("input[value='one']:checked").val()) //if the correct answer is selected
		{
			user_answers[2] = true;
			howManyCorrect++;
		}
	}
	if(x == 4) // if we are on the fourth question
	{
		if($("input[value='three']:checked").val()) //if the correct answer is selected
		{
			user_answers[3] = true;
			howManyCorrect++;
		}
	}
	if(x == 5) // if we are on the fifth question
	{
		if($("input[value='two']:checked").val()) //if the correct answer is selected
		{
			user_answers[4] = true;
			howManyCorrect++;
		}
	}

}

$(document).ready(function() {
	$('#submitBtn').click(function()
	{
		var planetQuiz = createQuestions();
		$("p").removeClass("center");
		$("fieldset").removeClass("center");
		$("fieldset").removeClass("hidden");
		$("#options-div").removeClass("hidden");	
		display(planetQuiz);
		checkAnswer();

		x++;

		if(x === 6)
		{
			$("#question_num").remove();
			$("fieldset").remove();
			$("#results-page").removeClass("hidden");
			$("#submitBtn").remove();
			$("#results-page").text("You got " + howManyCorrect + "/5 correct!");
			$("#question-div").css("height", "30px");
			$(".inner-panel").css("height", "230px");
			if(howManyCorrect < 5) 
			{
			 // i did not ace it
				$("#result_spot").removeClass("hidden");
				$("#question-div").css("text-align","center");
				$("#result_spot").append("<input type='button' class='button' value='Results' id='resultsBtn'></input>");
				$("#options-div").css("height", '100px');
				$("#resultsBtn").css("margin-top", '-20px');
				$("#resultsBtn").click(function(e){ //button event must be placed within the if statement where the button was created
					var quiz_answer = createQuestions();
					$("#results-page").text("");
					
					for(var y = 0; y < user_answers.length; y++)
					{
						if(user_answers[y] == false)
						{	
						$("#results-page").append("<ul><li>" + (y+1) + ". " + quiz_answer.questionSets[y].question + "<ul><li>" + answerkey(y, createQuestions()) + "</li></ul></li></ul>");
						}
					}
					$("#resultsBtn").remove();
				});
			}		
		}
		
	});
/*	$("#resultsBtn").click(function(e){
		alert("Hello");
	});*/
	
=======
var x = 0;
var correct_score = 0;
var incorrect_score = 0;
var user_answers = 
[
	false,
	false, 
	false,
	false,
	false
];
var howManyCorrect = 0;

function createQuestions()
{

return {"questionSets":
			[
				{
					"question": "which dwarf planet has the furthest orbit?",
					"firstOption": "Pluto",
					"secondOption": "Makemake",
					"thirdOption": "Sedna",
					"fourthOption": "Haumea"
				},
				{
					"question": "Why does Haumea have a football-like appearance?",
					"firstOption": "It is heavily bombarded by asteroids, which have altered it's appearance.",
					"secondOption": "It's moons' strong gravity has caused it to stretch.",
					"thirdOption": "It's gravity is not strong enough to keep it in a spherical shape.",
					"fourthOption": "It's rotation is extremely fast, giving it an elongated shape."
				},
				{
					"question": "What is NOT a criteria to be called a planet?",
					"firstOption": "It must have an atmosphere.",
					"secondOption": "It orbits the sun.",
					"thirdOption": "It is round in shape.",
					"fourthOption": "There are no foreign objects in it's orbit."
				},
				{
					"question": "What is the closest dwarf planet?",
					"firstOption": "Pluto",
					"secondOption": "Eris",
					"thirdOption": "Ceres",
					"fourthOption": "Makemake"
				},
				{
					"question": "What makes Pluto's orbit different from the rest of the planets?",
					"firstOption": "It wobbles.",
					"secondOption": "It crosses Neptune's orbit",
					"thirdOption": "It crosses Uranus's orbit",
					"fourthOption": "It is perfectly circular."
				},
				{
					"question": "Results"
				}
		]};
}




function display(quiz)
{
	$("#question_num").text((x+1) + "/5");															//*******
	$("#score_keeper").text(correct_score + " correct  " + incorrect_score + " incorrect");			//*******
	$("#question").text(quiz.questionSets[x].question);
	$("#first").text(quiz.questionSets[x].firstOption);
	$("#second").text(quiz.questionSets[x].secondOption);
	$("#third").text(quiz.questionSets[x].thirdOption);
	$("#fourth").text(quiz.questionSets[x].fourthOption);
	
}
function answerkey(select, quiz)
{ var keyArray = 
	[
		quiz.questionSets[0].thirdOption,
		quiz.questionSets[1].fourthOption,
		quiz.questionSets[2].firstOption,
		quiz.questionSets[3].thirdOption,
		quiz.questionSets[4].secondOption
	]
	return keyArray[select];
}
function checkAnswer()
{
	var y = x-1;
	if(x == 1) // if we are on the first question
	{
		if($("input[value='three']:checked").val()) //if the correct answer is selected
		{
			user_answers[0] = true;
			howManyCorrect++;
			correct_score++;
		}
		else
		{
			alert("Correct answer: " + answerkey(y, createQuestions()));
			incorrect_score++;
		}
	}
	if(x == 2) // if we are on the second question
	{
		if($("input[value='four']:checked").val()) //if the correct answer is selected
		{
			user_answers[1] = true;
			howManyCorrect++;
			correct_score++;
		}
		else
		{
			alert("Correct answer: " + answerkey(y, createQuestions()));
			incorrect_score++;
		}
	}
	if(x == 3) // if we are on the third question
	{
		if($("input[value='one']:checked").val()) //if the correct answer is selected
		{
			user_answers[2] = true;
			howManyCorrect++;
			correct_score++;
		}
		else
		{
			alert("Correct answer: " + answerkey(y, createQuestions()));
			incorrect_score++;
		}
	}
	if(x == 4) // if we are on the fourth question
	{
		if($("input[value='three']:checked").val()) //if the correct answer is selected
		{
			user_answers[3] = true;
			howManyCorrect++;
			correct_score++;
		}
		else
		{
			alert("Correct answer: " + answerkey(y, createQuestions()));
			incorrect_score++;
		}
	}
	if(x == 5) // if we are on the fifth question
	{
		if($("input[value='two']:checked").val()) //if the correct answer is selected
		{
			user_answers[4] = true;
			howManyCorrect++;
			correct_score++;
		}
		else
		{
			alert("Correct answer: " + answerkey(y, createQuestions()));
			incorrect_score++;
		}
	}

}
function reset()
{

	x = 0;
	correct_score = 0;
	incorrect_score = 0;
	howManyCorrect = 0;
	alert(x + " " + correct_score + " " + incorrect_score);
}

$(document).ready(function() {
	$("#tryAgain").hide();
	$('#submitBtn').click(function()
	{
		var planetQuiz = createQuestions();
		$("p").removeClass("center");
		$("fieldset").removeClass("center");
		$("fieldset").removeClass("hidden");
		$("#options-div").removeClass("hidden");
		$("#submitBtn").prop('value', 'Continue');
		checkAnswer();
		display(planetQuiz);

		x++;

		if(x === 6)
		{
			$("#question_num").hide();
			$("#score_keeper").hide();
			$("fieldset").hide();
			$("#results-page").removeClass("hidden");
			$("#submitBtn").hide();
			$("#tryAgain").show();
			$("#results-page").text("You got " + howManyCorrect + "/5 correct!");
			$("#question-div").css("height", "30px");
			$("#question-div").css("text-align","center");
			$("#buttonDiv").css('margin-top', '-80px');
			$(".inner-panel").css("height", "230px");	
			$('#tryAgain').click(function(){
				reset();
				$("#question-div").css("height", "90px");
				$("#question-div").css("text-align","left");
				$(".inner-panel").css("height", "380px");
				$("#question_num").show();
				$("#score_keeper").show();
				$("fieldset").show();
				$("#tryAgain").hide();
				$("#results-page").addClass("hidden");
				$('#submitBtn').show();

				display(planetQuiz);
			});	
		}
		
	});	
>>>>>>> 3582612fa06f1e65ebd81e140c26326cd0e46918
});