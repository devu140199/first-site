console.log('start with magical notes app');
showbox();

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {

    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    // console.log(notesobj);
    showbox();
});
function showbox() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `<div class=" notesCard  my-2 mx-2 card" style="width: 12rem;">
        <div class="card-body">
          <h5 class="card-title">Notes ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deletenotes(this.id)" class="btn btn-primary">Delete</button>
        </div>
      </div>`;
    });
    let nodesElm = document.getElementById("notes");
    if (notesobj.length != 0) {
        nodesElm.innerHTML = html;
    } else {
        nodesElm.innerHTML = `Nothings To Show! "Add a Notes" Section Above add Notes.`;
    }
}
    function deletenotes(index){
        console.log(`delete index number: ${index}`);
        let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showbox();
    }
    let search = document.getElementById('searchtxt');
    search.addEventListener('input',function(){
        let inputval = search.value.toLowerCase();
        console.log('input fired',inputval);
        let notesCard = document.getElementsByClassName('notesCard');
        Array.from(notesCard).forEach(function(element){
            let cardtxt = element.getElementsByTagName('p')[0].innerText;
            if(cardtxt.includes(inputval)){
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
            console.log(cardtxt);
        })
    })
