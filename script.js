const tabIcon=document.querySelectorAll('.tab-item');
const tabContent=document.querySelectorAll('.tab-content');

function selectItem(e){
    removeBorder();
    removeContent();
    let currentContent=document.querySelector(`#${this.id}-content`);
    
    this.classList.add('border-red');
    currentContent.classList.remove('hide');
    currentContent.classList.add('show');
    console.log(currentContent.classList);
}

function removeBorder(){
    for(let i=0;i<tabIcon.length;i++){
        tabIcon[i].classList.remove('border-red');
    }
}
function removeContent(){
    for(let i=0;i<tabContent.length;i++){
        tabContent[i].classList.add('hide');
    }
}


for(let i=0;i<tabIcon.length;i++){
    tabIcon[i].addEventListener('click',selectItem);
}