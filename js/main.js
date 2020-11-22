

var clickI = document.querySelector('.fa-bars'),
    headerUl = document.querySelector('nav ol li ul'),
    headerUlLi = document.querySelectorAll('nav ol li ul li');

function noScroll(){
    window.scrollTo(0,0);
}
clickI.onclick = function(){
    headerUl.classList.toggle('showUl');
    if(clickI.getAttribute('class') == 'fas fa-bars visibale-xs visibale-sm'){
        window.addEventListener('scroll', noScroll);
        clickI.setAttribute('class', 'fas fa-times visibale-xs visibale-sm');
    }
    else{
        window.removeEventListener('scroll', noScroll);
        clickI.setAttribute('class', 'fas fa-bars visibale-xs visibale-sm');
    }
}
headerUlLi.forEach(li =>{
    li.onclick = function(){
        window.removeEventListener('scroll',noScroll);
        headerUl.classList.remove('showUl');
        clickI.setAttribute('class', 'fas fa-bars visibale-xs visibale-sm');
        
    }
});
