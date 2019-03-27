function checkbox()
{
	var male=document.getElementById("Male").checked;
	var Female=document.getElementById("Female").checked;
	var other=document.getElementById("Other").checked;
	

	if(male)
	{
		 document.getElementById("result").innerHTML="Male is checked.";
	}
	if(Female)
	{
        document.getElementById("result").innerHTML=" Female is checked.";
	}	
	if(other)
	{
		doucemnt.getElementById("result").innerHTML="Other gender is selected.";
	}

}

function radiobutton()
{
	
	if(document.getElementById("English"))
	{
		 document.getElementById("result1").innerHTML="English is checked.";
	}	
	if(document.getElementById("Hindi"))
	{
		 document.getElementById("result1").innerHTML=" Hindi is checked.";
	}	
	if(document.getElementById("Gujarati"))
	{
		document.getElementById("result1").innerHTML="Gujarati is selected.";
	}
	
}

function res()
{	checkbox();
	radiobutton();
}
