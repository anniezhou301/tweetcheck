$(document).ready(function(){
	var currentquestion = 1;
	var defcount = 0;
	$("li").hide();
	$('#'+currentquestion).show();
	function nextq(next){
	$("li").hide();
	$('#'+next).show();
	$(".bottom").show();
	};
	function isliable(){
		if (defcount>2){
			$("#result").text("You're probably going to be liable if the subject chooses to sue. Think before you tweet!");
			$("#explanation").text("Scroll down for more on defamation. ");
			$("li").hide();
		}
		else{
			$("#result").text("You're probably fine, but if it's not true, why are you tweeting it? No fake news please.");
			$("#explanation").text("Don't be a scumbag, think before you tweet! Scroll down for more on defamation. ");
			$("li").hide();
		}
	};
	$(".q1").click(function(){
		if ($(this).text()=="Yes"){
			$("#result").text("Truth is an absolute defense to defamation.");
			$("#explanation").text("Defamation is a false statement of fact. So, if the statement was accurate, then by definition it wasn't defamatory.");
			$("li").hide();
			
		};
		if ($(this).text()=="No"){
			defcount++;
			currentquestion++;
			nextq(currentquestion);
		};

	});
	$(".q2").click(function(){
		if ($(this).text()=="Yes"){
			defcount+=2;
			currentquestion++;
			nextq(currentquestion);
			
		};
		if ($(this).text()=="No"){
			defcount--;
			currentquestion++;
			nextq(currentquestion);
		};

	});
	
	$(".q3").click(function(){
		if ($(this).text()=="Yes"){
			defcount+=2;
			currentquestion++;
			nextq(currentquestion);
			
		};
		if ($(this).text()=="No"){
			defcount--;
			currentquestion++;
			nextq(currentquestion);
		};

	});
	$(".q4").click(function(){
		if ($(this).text()=="Yes"){
			defcount+=2;
			currentquestion++;
			nextq(currentquestion);
			
		};
		if ($(this).text()=="No"){
			defcount--;
			currentquestion++;
			nextq(currentquestion);
		};

	});
	$(".q5").click(function(){
		if ($(this).text()=="Yes"){
			defcount--;
			isliable();
			$(".bottom").show();
		}
			
		if ($(this).text()=="No"){
			defcount+=2;
			isliable();
			$(".bottom").show();
		};

	});
	$(".bottom").show();

});