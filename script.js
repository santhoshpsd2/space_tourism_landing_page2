const mobilenav = document.querySelector('.mobile-menu-btn');
const navele = document.querySelector('nav');

mobilenav.addEventListener('click',()=>{
    navele.classList.toggle('active');

    if(navele.classList.contains('active')){
        mobilenav.innerHTML = '<i class="fas fa-times"></i>';
    }else{
        mobilenav.innerHTML = '<i class="fal fa-bars"></i>';
    }
})

const tablist = document.querySelector('#tab-list');
const tabs = document.querySelectorAll('.tab');

let tabindex = 0;
function selecttab(e){
    if(e.keyCode == 37){
        tabindex --;
        if(tabindex < 0){
            tabindex = 3
        }
    }
    if(e.keyCode == 39){
        tabindex++;
        if(tabindex > 3){
            tabindex = 0;
        }
    }
    console.log(tabindex);
    tabs[tabindex].focus();
}

function changetab(ev){
    let e = ev.target;
    let imagediv = e.getAttribute('data-image');
    let datadiv = e.getAttribute('aria-controls');
    let parent = e.parentElement.parentElement;

    tabs.forEach(tab1 => {
        if(tab1 == e){
            tab1.classList.add('active');
        }else{
            tab1.classList.remove('active');
        }
    })

    const imagedivs = parent.querySelectorAll('picture');
    const datadivs = parent.querySelectorAll('article');

    datadivs.forEach(data => {
        if(data.id == datadiv){
            data.removeAttribute('hidden');
        }else{
            data.setAttribute('hidden','true');
        }
    })

    imagedivs.forEach(imgs =>{
        if(imgs.id == imagediv){
            imgs.removeAttribute('hidden')
        }else{
            imgs.setAttribute('hidden',true);
        }
    })
}


tablist.addEventListener('keydown',selecttab);

tabs.forEach(tab => {
    tab.addEventListener('click',changetab);
})


