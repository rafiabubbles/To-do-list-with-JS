const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }else{
         let li=document.createElement("li");  //this one is for creating element .the element is storing in li
        li.innerHTML=inputBox.value;  //text are store here
        listContainer.appendChild(li); //li will be displayed here
        let span=document.createElement("span");
        span.innerHTML="\u00d7"; //this \u00d7 is for cross icon
        li.appendChild(span);
    }
    inputBox.value=""; //add your text e ja lekha hoi seta theke jasse. seta add korar por auto muse jabe ey code lekhar jonno.
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
      e.target.classList.toggle("checked");
      saveData()
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

// refresh korle ba new vabe open korle jate set kora task delete na hoye jar setar jonno nicher code

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask();