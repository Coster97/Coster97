
const colors1 = "rgb(244, 222, 244)"
const colors = "rgb(191, 127, 217)";

const home = document.querySelector(".menu-item1")
const about = document.querySelector(".menu-item2");
const port= document.querySelector(".menu-item3");
const contact = document.querySelector(".menu-item4");
const menubtn = document.querySelector(".menubtn")
const menubtn1 = document.querySelector("#menubtn1")
const menubtn2 = document.querySelector(".menubtn2")
const menu = document.querySelector(".menu")


//----------------------------------------------------팔레트기능

const white = document.querySelector(".white");
const orange = document.querySelector(".orange");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const pink = document.querySelector(".pink");
const palet = document.querySelector("#palet")

const mainname = document.querySelector(".name");
const bodyinfo = document.querySelector(".body-info");
const body1 = document.querySelector(".body-1");
const body2 = document.querySelector(".body-2");
const body3 = document.querySelector(".body-3");
const body = document.querySelector(".body");
const word = document.querySelector(".word");

const aboutme = document.querySelector(".about")
const portfo = document.querySelector(".port")
const contactme = document.querySelector(".contact")

const fromname = document.querySelector("#contact-from-name")
const fromemail = document.querySelector("#contact-from-email")
const message = document.querySelector("#contact-message")
const submit = document.querySelector("#contact-submit")
const meinfo = document.querySelector(".me-info")
const i = document.querySelector(".fa-solid")
const line = document.querySelector(".v-line")




const mouseenter = {
  item: function handleTitleenter() {

    home.style.marginRight = "5px"
   
  },
  item2: function handleTitleenter() {
    about.style.marginRight = "5px"

   
  },
  item3: function handleTitleenter() {


  },
  item4: function handleTitleenter() {
   
   

    
    
  },
  item5: function handleTitleenter() {
    menubtn2.style.fontSize="15px"
   

    
    
  }
  
};

const mouselevave = {
    item: function handleTitleleave() {

        home.style.marginRight = "0px"
       
    },
    item2: function handleTitleleave() {
        about.style.marginRight = "0px"
      
        
        
    },
    item3: function handleTitleleave() {
        port.style.marginRight = "0px"
        
    },
    item4: function handleTitleleave() {
      contact.style.marginRight = "0px"
    
    },
    item5: function handleTitleleave() {
      menubtn2.style.fontSize="13px"
    
    
    
    }
   
}

/*-----------------------------------*/



const mouseclick = {
  item: function handleTitleenter() {
    bodyinfo.style.visibility = "inherit"
    body1.style.visibility = "hidden"
    body2.style.visibility = "hidden"
    body3.style.visibility = "hidden"
   
  
    
 

   
  },
  item2: function handleTitleenter() {
    bodyinfo.style.visibility = "hidden"
    body1.style.visibility = "inherit"
    body2.style.visibility = "hidden"
    body3.style.visibility = "hidden"
    
     

  },
  item3: function handleTitleenter() {
    bodyinfo.style.visibility = "hidden"
    body1.style.visibility = "hidden"
    body3.style.visibility = "inherit"
    body2.style.visibility = "hidden"
    
    
  },
  item4: function handleTitleenter() {
    bodyinfo.style.visibility = "hidden"
    body1.style.visibility = "hidden"
    body3.style.visibility = "hidden"
    body2.style.visibility = "inherit"
   

  },
  item5: function handleTitleclick() {
    menubtn.style.visibility = "hidden"
    menu.style.visibility = "hidden"
    menubtn2.style.display = "block"

  },
  item6: function handleTitleclick() {
    menubtn.style.visibility = "inherit"
    menubtn2.style.display = "none"
    menu.style.visibility = "inherit"

  }
 
  

};



const colorchange= {
  item1: function handleTitleenter() {
    mainname.style.color = "white"
    home.style.color = "white"
    about.style.color =  "white"
    port.style.color =  "white"
    contact.style.color =  "white"
    bodyinfo.style.color = "white"
    word.style.color = "white"
    menubtn1.style.color = "white"
    menubtn2.children[0].style.color = "#FFFFFF";
    aboutme.style.color = "white";
    contactme.style.color = "white"
    portfo.style.color = "white"

    fromname.style.borderColor = "white"
    fromemail.style.borderColor = "white"
    message.style.borderColor = "white"
    submit.style.borderColor = "white"
    meinfo.style.color = "white"
    meinfo.style.borderColor = "white"
    line.style.borderColor = "white"

    palet.style.color = "white"
    
   

    
    

  },
  item2: function handleTitleenter() {
    mainname.style.color = "orange"
    home.style.color = "orange";
    about.style.color =  "orange";
    port.style.color =  "orange";
    contact.style.color =  "orange";
    bodyinfo.style.color = "orange"
    word.style.color = "orange"
    menubtn1.style.color = "orange";
    menubtn2.children[0].style.color = "orange";
    aboutme.style.color = "orange"
    contactme.style.color ="orange"
    portfo.style.color = "orange"


    fromname.style.borderColor = "orange"
    fromemail.style.borderColor = "orange"
    message.style.borderColor = "orange"
    submit.style.borderColor = "orange"
    meinfo.style.color = "orange"
    meinfo.style.borderColor = "orange"
    line.style.borderColor = "orange"
  
   

  },
  item3: function handleTitleenter() {
    mainname.style.color = "greenyellow"
    home.style.color = "greenyellow"
    about.style.color ="greenyellow"
    port.style.color = "greenyellow"
    contact.style.color ="greenyellow"
    bodyinfo.style.color = "greenyellow"
    word.style.color = "greenyellow"
    menubtn1.style.color = "greenyellow"
    menubtn2.children[0].style.color = "greenyellow";
    aboutme.style.color = "greenyellow"
    contactme.style.color = "greenyellow"
    portfo.style.color = "greenyellow"


    fromname.style.borderColor = "greenyellow"
    fromemail.style.borderColor = "greenyellow"
    message.style.borderColor = "greenyellow"
    submit.style.borderColor = "greenyellow"
    meinfo.style.color = "greenyellow"
    meinfo.style.borderColor = "greenyellow"
    line.style.borderColor = "greenyellow"
  
   

  },
  item4: function handleTitleenter() {
    mainname.style.color = "rgb(191, 127, 217)"
    home.style.color = "rgb(191, 127, 217)"
    about.style.color ="rgb(191, 127, 217)"
    port.style.color = "rgb(191, 127, 217)"
    contact.style.color = "rgb(191, 127, 217)"
    bodyinfo.style.color = "rgb(191, 127, 217)"
    word.style.color = "rgb(191, 127, 217)"
    menubtn1.style.color = "rgb(191, 127, 217)"
    menubtn2.children[0].style.color = "rgb(191, 127, 217)";
    aboutme.style.color = "rgb(191, 127, 217)";
    contactme.style.color ="rgb(191, 127, 217)"
    portfo.style.color = "rgb(191, 127, 217)"

    fromname.style.borderColor ="rgb(191, 127, 217)"
    fromemail.style.borderColor ="rgb(191, 127, 217)"
    message.style.borderColor ="rgb(191, 127, 217)"
    submit.style.borderColor = "rgb(191, 127, 217)"
    meinfo.style.color ="rgb(191, 127, 217)"
    meinfo.style.borderColor = "rgb(191, 127, 217)"
    line.style.borderColor = "rgb(191, 127, 217)"
  
   

  },
  item5: function handleTitleenter() {
    mainname.style.color = "rgba(24, 142, 245, 0.839)"
    home.style.color = "rgba(24, 142, 245, 0.839)"
    about.style.color ="rgba(24, 142, 245, 0.839)"
    port.style.color = "rgba(24, 142, 245, 0.839)"
    contact.style.color = "rgba(24, 142, 245, 0.839)"
    bodyinfo.style.color = "rgba(24, 142, 245, 0.839)"
    word.style.color ="rgba(24, 142, 245, 0.839)"
    menubtn1.style.color ="rgba(24, 142, 245, 0.839)"
    menubtn2.children[0].style.color ="rgba(24, 142, 245, 0.839)"
    aboutme.style.color = "rgba(24, 142, 245, 0.839)"
    contactme.style.color ="rgba(24, 142, 245, 0.839)"
    portfo.style.color = "rgba(24, 142, 245, 0.839)"

    fromname.style.borderColor ="rgba(24, 142, 245, 0.839)"
    fromemail.style.borderColor ="rgba(24, 142, 245, 0.839)"
    message.style.borderColor ="rgba(24, 142, 245, 0.839)"
    submit.style.borderColor ="rgba(24, 142, 245, 0.839)"
    meinfo.style.color ="rgba(24, 142, 245, 0.839)"
    meinfo.style.borderColor ="rgba(24, 142, 245, 0.839)"
    line.style.borderColor ="rgba(24, 142, 245, 0.839)"
  
   

  }
  

  
  

};








home.addEventListener("mouseenter", mouseenter.item);
home.addEventListener("mouseleave", mouselevave.item);
home.addEventListener("click", mouseclick.item)

about.addEventListener("mouseenter", mouseenter.item2);
about.addEventListener("mouseleave", mouselevave.item2);
about.addEventListener("click", mouseclick.item2)


port.addEventListener("mouseenter", mouseenter.item3);
port.addEventListener("mouseleave", mouselevave.item3);
port.addEventListener("click", mouseclick.item3)


contact.addEventListener("mouseenter", mouseenter.item4);
contact.addEventListener("mouseleave", mouselevave.item4);
contact.addEventListener("click", mouseclick.item4)
menubtn.addEventListener("click", mouseclick.item5)
menubtn2.addEventListener("click", mouseclick.item6)

menubtn2.addEventListener("mouseenter", mouseenter.item5)
menubtn2.addEventListener("mouseleave", mouselevave.item5)

white.addEventListener("click", colorchange.item1)
orange.addEventListener("click",colorchange.item2)
green.addEventListener("click", colorchange.item3)
blue.addEventListener("click", colorchange.item5)
pink.addEventListener("click", colorchange.item4)

