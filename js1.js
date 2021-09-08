showNotes();
let addnote = document.getElementById("add-note");
addnote.addEventListener("click", function (e) {
    let txt = document.getElementById("add-txt");
    let addTitle=document.getElementById("Title")
    let notes = localStorage.getItem("notes");
    let titles = localStorage.getItem("titles");
    if (notes == null) {
     notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);

    }
    if (titles == null) {
        titlesObj = [];
       }
       else {
           titlessObj = JSON.parse(titles);
   
       }
    notesObj.push(txt.value);
    titlesObj.push(addTitle.value);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    localStorage.setItem("titles", JSON.stringify(titlesObj))
    txt.value = " ";
    addTitle.value="";
    console.log(titlesObj);
    console.log(notesObj);
    showNotes();
});
function showNotes() {
    let notes = localStorage.getItem("notes");
    let titles = localStorage.getItem("titles");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    if (titles == null) {
        titlesObj = [];
       }
       else {
           titlesObj = JSON.parse(titles);
   
       }
    let html = " ";
    notesObj.forEach(function(element, index) {
        html += ` <div class="note-card">
        <div  class="card-title">${titlesObj[index]}</div>
        <div class="card-body2">
        <p class="card-text">${element}</p>
        <div class="buttons">
        <button class="btn" id="${index}" onclick="deleteNode(this.id)">Delete Note</button>
  
        </div>
    </div>    
</div> `;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0 && titlesObj.length!=0) {

        notesElm.innerHTML =  html;
    }
    else{
        notesElm.innerHTML = "Nothing to show! Use Add a Note section above to add notes";
    
    }
}
function deleteNode(index){
    console.log("I am deleting",index);
    let notes = localStorage.getItem("notes");
    let titles=localStorage.getItem("titles");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    if (titles == null) {
        titlesObj = [];
       }
       else {
           titlesObj = JSON.parse(titles);
   
       }
    notesObj.splice(index,1);
    titlesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    localStorage.setItem("titles", JSON.stringify(titlesObj));
    showNotes();
}
let searchTxt=document.getElementById("searchText");
searchTxt.addEventListener("input",function()
{  
    let val=searchTxt.value;
    console.log("The search value is "+searchTxt.value);

    let searchbutton=document.getElementById("searchButton");
searchbutton.addEventListener("click",function(){
    let all_notes=document.getElementsByClassName("note-card");
    Array.from(all_notes).forEach(function(element){
        let ptxt= element.getElementsByTagName("p")[0].innerText;
        if(ptxt.includes(val))
        {
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
      
    })
    searchTxt.value="";
})
})
// function markImp(i){
//     localStorage.setItem("notes", JSON.stringify(notesObj));
//     let all_notes=document.getElementsByClassName("note-card");
  
//         Array.from(all_notes).forEach(function(element,index){
//         if(index==i){
//             all_notes[index].style.backgroundColor =" rgb(248, 104, 104)";
//         } 
//         sessionStorage.setItem("colourednotes", JSON.stringify(all_notes));
//      } )
// }
burger=document.querySelector(".burger");
navbar=document.querySelector(".navbar");
search=document.querySelector(".search");
second_child=document.querySelector(".second-item");
burger.addEventListener("click",function(){
    navbar.classList.toggle("h-nav");
    search.classList.toggle("v-class");
    second_child.classList.toggle("v-class");
})