const about=document.querySelector('#about');
const contact=document.querySelector('#contact');
const aboutContent=document.querySelector('#about-content');
const isicontact=document.querySelector('#contact-content');
const portfoliocontent=document.querySelector('#portfolio-content')
about.addEventListener('click',()=>{
    //ketika li atau menu atau menu about diklik  jalankan winbox 
    const aboutBox=new WinBox({
        //objek dari library winbox
        title:'About Me',
        background:'rgb(243, 179, 179)',
        width:'400px',
        height:'400px',
        x: "center",
        y: "center",
        width: "25%",
        height: "50%",
        mount:aboutContent
})
});

contact.addEventListener('click',()=>{
    const aboutBox=new WinBox({
        //objek dari library winbox
        title:'Contact Me',
        background:'rgb(243, 179, 179)',
        width:'400px',
        height:'400px',
        x: "center",
        y: "center",
        width: "25%",
        height: "50%",
        mount:isicontact
})
});


portfolio.addEventListener('click',()=>{
    const portfolioBox=new WinBox({
        //objek dari library winbox
        title:'Contact Me',
        background:'rgb(243, 179, 179)',
        width:'400px',
        height:'400px',
        x: "center",
        y: "center",
        width: "25%",
        height: "50%",
        mount:portfoliocontent
})
});
