window.onload=getAll();


function Add(){


    var input=document.getElementById('inp');
    var btn=document.getElementById('btn');

    btn.onclick=function()
    {
        var price=50;
        var value1=input.value;

        displayitem();



        var tod=document.getElementById("tod");
        var row=document.createElement("tr");
        var col=document.createElement("td");
        row.setAttribute("class","row");
        var inputjs=document.createElement("input");
        inputjs.setAttribute("value",input.value);
        inputjs.setAttribute("class","inpjs");
        col.appendChild(inputjs);

        var del=document.createElement("button");
        del.setAttribute("class","del");
        del.innerHTML="&#10006 Delete";

        var mark=document.createElement("button");
        mark.setAttribute("class","mark");
        mark.innerHTML="&#10004 Mark as Done";

        var update=document.createElement("button");
        update.setAttribute("class","update")
        update.innerHTML="&#9997 Update";

        var col_del=document.createElement('td');
        var col_mark=document.createElement('td');
        var col_update=document.createElement('td');


        col_del.appendChild(del);
        col_mark.appendChild(mark);
        col_update.appendChild(update);

        row.appendChild(col);

        row.appendChild(col_del);
        row.appendChild(col_update);
        row.appendChild(col_mark);

        tod.appendChild(row);



        del.onclick=function(){
            var a = confirm("Are you sure you want to delete this item?");
if(a) {
    deleteditem(col.innerText);
    del.innerHTML="Deleted";
    inputjs.setAttribute("class","coldel");
    displayitem();

   
}

        }

        mark.onclick=function(){
            markUp(col.innerText);
            displayitem();
            inputjs.setAttribute("class","colup");
            mark.innerHTML="Completed";
           // row.removeChild(col_update);

        }

        update.onclick=function(){



            inputjs.setAttribute("class","inpjs");



        }
        inputjs.onclick=function(){
        inputjs.setAttribute("class","inp1");

    }

    };


}


function getAll()
{
    Add();
}
