var dataDisplayed=false;
function createtable(){
    var table = document.getElementsByClassName("mytable")[0];
    if(!dataDisplayed){
        var v=[{
        Name:"v.sripujitha",
        Rollno:21,
        Gender:"Female",
        Branch:"AIML",
        College:"AEC"
        },
        {
        Name:"M.Rohini",
        Rollno:19,
        Gender:"Female",
        Branch:"CSE",
        College:"AEC"
        },
        {
        Name:"K.SujiGayathri",
        Rollno:20,
        Gender:"Female",
        Branch:"AIML",
        College:"AEC"
        },
        {
        Name:"R.suneetha",
        Rollno:18,
        Gender:"Female",
        Branch:"IT",
        College:"AEC"
        }
    ]
    table.style.width='50%';
    table.setAttribute('border','2');
    table.setAttribute('cellpadding','5');
    table.setAttribute('cellspacing', '0');

    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    // tr.style.backgroundColor = "#3FA2F6";

    ['Name','Rollno','Gender','Branch','College'].forEach(ele =>{
        var th = document.createElement("th");
        th.appendChild(document.createTextNode(ele));
        th.style.color = "black";
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);

    var tbody = document.createElement("tbody");

    v.map(ele => {
        var tr = document.createElement("tr");
        Object.values(ele).map(i => {
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(i));
            // td.textContent=i;
            td.contentEditable=true;
            tr.appendChild(td);
        });
        //Add Delete button
        var deleteButton=document.createElement("button");
        deleteButton.textContent="Delete";
        deleteButton.onclick = function()
        {
            table.deleteRow(tr.rowIndex);
        };
        var deleteCell=document.createElement("td");
        deleteCell.appendChild(deleteButton);
        tr.appendChild(deleteCell);
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    dataDisplayed=true;
}else{
        var newRow=promptUserForRowData();
        if(newRow){
            addRow(newRow);
        }
    }
}
function promptUserForRowData() {
        var Name = prompt("Enter name:");
        var Rollno = prompt("Enter Roll number:");
        var Gender = prompt("Enter Gender:");
        var Branch = prompt("Enter branch:");
        var College = prompt("Enter College:");
    
        if (Name && Rollno && Gender && Branch && College ) {
            return { Name: Name, Rollno: Rollno,Gender:Gender, Branch: Branch,College:College };
        } else {
            alert("Please fill all fields.");
            return null;
        }
    }
    
    function addRow(data) {
        var table = document.getElementsByClassName("mytable")[0];
        var tbody = table.getElementsByTagName('tbody')[0];
    
        var tr = document.createElement("tr");
        Object.values(data).forEach(i => {
            var td = document.createElement("td");
            td.textContent = i;
            td.contentEditable = true; // Make cell content editable
            tr.appendChild(td);
        });

        // Add Delete button
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            table.deleteRow(tr.rowIndex);
        };

        var deleteCell = document.createElement("td");
        deleteCell.appendChild(deleteButton);
        tr.appendChild(deleteCell);

        tbody.appendChild(tr);
}
    
