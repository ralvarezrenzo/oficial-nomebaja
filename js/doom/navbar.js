export default function navBar(panelBtn,navBar,headerContent){
    const d = document;
    d.addEventListener("click",(e)=>{
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panelBtn).classList.toggle('is-active');
            d.querySelector(navBar).classList.toggle('nav-active');
        }
    })
}