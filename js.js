function inserttext(event)
{
    //get value of input
    var input = document.getElementById("inserttxt").value;
    //make a div container
   var container = document.createElement("div");
   var box = document.createElement("div");
   box.className = "input-group-prepend";
   //set the class
   container.className="input-group-append mb-3";
   container.id="cont"
   //make a input place for the text
   var text = document.createElement("input");
   text.className= "form-control ";
   text.id="textb";
   //set to disable so no one can alter it
   text.disabled=true;
   text.value=input;
   //make checkbox
   var checkbox = document.createElement("input");
   checkbox.setAttribute("type","checkbox");
   checkbox.className="mark "
    checkbox.id="test"
   box.append(checkbox);
   container.append(box);
   container.append(text);

   var element = document.getElementById("fixed");
   element.append(container);
}



function xxx()
{
    if (document.getElementById('test').checked)
    {
            
        var input = document.getElementById("textb");
        input.className="strike";
           
  }
}



function deleteCheckBox(){
    //if checkbox is check do this function
    if (document.getElementById('test').checked)
    {//double check if user really wants to delete the task
          var answer = confirm('Are you sure you want to delete this checkbox?');
           if (answer)
             {//remove both text and checkbox
             $("#cont").remove();
             for (var i = 0; i < 100; i++) {
                if (document.getElementById('test').checked)
                if (answer)
                $("#cont").remove();;
              }
             }
           }
  }

 