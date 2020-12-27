

var clickI = document.querySelector('.fa-bars'),
    headerUl = document.querySelector('nav ol li ul'),
    headerUlLi = document.querySelectorAll('nav ol li ul li'),
    body = document.querySelector("body");


clickI.onclick = function(){
    headerUl.classList.toggle('showUl');
    if(clickI.getAttribute('class') == 'fas fa-bars visibale-xs visibale-sm'){
        body.classList.add("hidden-Y");
        clickI.setAttribute('class', 'fas fa-times visibale-xs visibale-sm');
    }
    else{
        body.classList.remove("hidden-Y");
        clickI.setAttribute('class', 'fas fa-bars visibale-xs visibale-sm');
    }
}
headerUlLi.forEach(li =>{
    li.onclick = function(){
        body.classList.remove("hidden-Y");
        headerUl.classList.remove('showUl');
        clickI.setAttribute('class', 'fas fa-bars visibale-xs visibale-sm');
    }
});
