const slide=()=>{
    const burger=document.querySelector('.container__header--toggle-button');
    const nav=document.querySelector('.container__header--menu');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('active');
    });
}

slide();