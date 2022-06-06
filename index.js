const toggleBtn=document.querySelector(".toggle-btn");
const body=document.body;

function toggleTheme(){
    if(body.classList.contains("dark-mode")){
        body.classList.remove("dark-mode");
        toggleBtn.textContent="Dark Mode";
    }
    else{
        body.classList.add("dark-mode");
        toggleBtn.textContent="Ligh Mode";
    }
}
toggleBtn.addEventListener("click",toggleTheme);