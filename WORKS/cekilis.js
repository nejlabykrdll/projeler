
const form = document.querySelector("#participantAddForm");   //add butonuna tıklandıgında formdaki degeri almaası için butonun içinde bulundugu formu aldım
const addInput = document.querySelector("#participantName");    //
const participantList = document.querySelector(".list-group");

const cardBody = document.querySelectorAll(".card-body")[1];  //carpı butonları ıle temızlemek için buraya eriştik
const drawButton = document.querySelector("#drawButton");   //cekılıs butonu secildi


let participants = [];
runEvents();

function runEvents() {     //tüm eventları çalıştıran fonksiyon
    form.addEventListener("submit", addParticipant);
  document.addEventListener('DOMContentLoaded',pageLoaded)
  secondCardBody.addEventListener("click",removeParticipantUI)
  drawButton.addEventListener("click",drawStart)
}


function pageLoaded(){
        checkParticipantFromStorage();
    participants.forEach(function(participant){
        addParticipantToUI(participant)
    })
}


  function drawStart(){


    participants = JSON.parse(localStorage.getItem('participants'))
    console.log(participants)
    let draw=Math.floor(Math.random()*(participants.length))
    console.log(draw)
    console.log(participants[draw])
    alert("  kazanan katılımcı   "+ participants[draw])
  }





function removeParticipantUI(e){
    if(e.target.className==="fa fa-remove"){
       const participant=e.target.parentElement.parentElement    //hangı etıket uzernde calısır
       participant.remove()    //tuttugum li etiketini kaldırdım
        //storageden silme
        removeParticipantToStorage(participant.textContent)

    }
       

}


function removeParticipantToStorage(removeTodo){
        checkParticipantFromStorage()
    participants.forEach(function(participant,index){
        if(removeTodo===participant){
            participants.splice(index,1)      //storage array oldugunddan bır eleman sildik.(carpiya basilinca)
        }
    })
    localStorage.setItem("participants",JSON.stringify(participants))       //dizinin guncel halını setledim
}



function addParticipant(e) {
    const inputText = addInput.value.trim();
    if (inputText == null || inputText == "") {
        alert("Lütfen boş bırakmayınız!");
    }
    else {


        addParticipantToUI(inputText);   //inputa girilen değeri ara yüze yazdıran fonksiyonu cagırdıkk
        addParticipantToStorage(inputText);

    }



}



function addParticipantToUI(newParticipant) {     //arayüze ekleme işi yapan fonksiyon
    /*
<li class="list-group-item d-flex justify-content-between">Todo 1
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li>
                        */


    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newParticipant;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    participantList.appendChild(li);




    addInput.value = "";   //eklendikten sonra katılımcı ekle kısmını boşaltır






}

function addParticipantToStorage(newParticipant) {
        checkParticipantFromStorage();
    participants.push(newParticipant);
    localStorage.setItem('participants', JSON.stringify(participants))    //storage a ekleme- ekranda kalmasını sagladı
}




function     checkParticipantFromStorage() {

    if (localStorage.getItem('participants') === null) {
        participants = []
    } else {
        participants = JSON.parse(localStorage.getItem('participants'))
    }
}




console.log(drawStart())





