var student= new Array();
 window.onload = function (){
	student.push(["1","Varun"]);
	student.push(["2","Shashank"]);
	for (var i = 0; i < student.length; i++) {
                AddRow(student[i][0], student[i][1]);
            }
};
function Add() {
	var Id=document.getElementById('txtId');
	var Name=document.getElementById('txtName');
	if (student.length>0)
	{	
	for (var i = 0; i < student.length; i++) {
		if(student[i][0]==Id.value)
		{
			alert("The Id is existing!");
			return 0;
		}
	}	
	}
			AddRow(Id.value,Name.value);
			txtName.value = "";
            txtCountry.value = "";
		
	};

function Remove(button)
{
		 var row = button.parentNode.parentNode;
			var name = row.getElementsByTagName("TD")[0].innerHTML;
            if (confirm("Do you want to delete: " + name)) {

                //Get the reference of the Table.
                var table = document.getElementById("StudentTable");

                //Delete the Table row using it's Index.
                table.deleteRow(row.rowIndex);
            }
}

function Edit( button)
{
		
            //Determine the reference of the Row using the Button.
            var row = button.parentNode.parentNode;
          
           Id=prompt('Enter new Id');
           Name=prompt('Enter New Name');
           //var cell = row.insertCell(0);
   			if (student.length>0)
	{	
	for (var i = 0; i < student.length; i++) {
		if(student[i][0]==Id)
		{
			alert("The Id is existing!");
			return 0;
		}
	}	
	}
           row.getElementsByTagName("TD")[0].innerHTML=Id;
           //var cell = row.insertCell(1);
            row.getElementsByTagName("TD")[1].innerHTML=Name;
            
            // if (confirm("Do you want to delete: " + name)) {

            //     //Get the reference of the Table.
            //     var table = document.getElementById("tblCustomers");

            //     //Delete the Table row using it's Index.
            //     table.deleteRow(row.rowIndex);

};


function AddRow(Id,Name)
{
	 //Get the reference of the Table's TBODY element.
            var tBody = document.getElementById("StudentTable").getElementsByTagName("TBODY")[0];

            //Add Row.
            row = tBody.insertRow(-1);

            //Add Name cell.
            var cell = row.insertCell(-1);
            cell.innerHTML = Id;

            //Add Country cell.
            cell = row.insertCell(-1);
            cell.innerHTML = Name;

            //Add Button cell.
            cell = row.insertCell(-1);
            var btnRemove = document.createElement("INPUT");
            btnRemove.type = "button";
            btnRemove.value = "Remove";
            btnRemove.setAttribute("onclick", "Remove(this);");
            cell.appendChild(btnRemove);
            //Add Edit Button
            var btnEdit= document.createElement("INPUT");
            btnEdit.type="button";
            btnEdit.value="Edit";
            btnEdit.setAttribute("onclick","Edit(this);")
            cell.appendChild(btnEdit);
};

