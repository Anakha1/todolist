//login validation
function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username=="admin" && password== 12345){
        window.location.assign("todolist.html");
        alert("Login Successfully ");
    }
    else{
        alert("Invalid information");
        return;
    }
}


const btnPopup = document.querySelector('.btntodo-popup');
btnPopup.addEventListener('click', ()=>{
    todoList.classList.add('active-popup');
});

//logout and redirect to login page
const logoutBtn = document.querySelector(".logout-btn");

logoutBtn.addEventListener("click",()=>{
    window.location.replace("index.html");
});


