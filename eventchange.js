
const colors1 = "rgb(244, 222, 244)"
const colors = "rgba(0, 0, 0, 0.92)"

const home = document.querySelector(".menu-item1")
const about = document.querySelector(".menu-item2");
const port= document.querySelector(".menu-item3");
const contact = document.querySelector(".menu-item4");
const menubtn = document.querySelector(".menubtn")
const menubtn2 = document.querySelector(".menubtn2")
const menu = document.querySelector(".menu");


//----------------------------------------------------팔레트기능

const white = document.querySelector(".white");
const orange = document.querySelector(".orange");
const green = document.querySelector(".green");
const pink = document.querySelector(".pink");

const mainname = document.querySelector(".name");
const bodyinfo = document.querySelector(".body-info");
const body = document.querySelector(".body");
const word = document.querySelector(".word");





const mouseenter = {
  item: function handleTitleenter() {
    home.style.color = colors1;
   
  },
  item2: function handleTitleenter() {
    about.style.color = colors1;

   
  },
  item3: function handleTitleenter() {
    port.style.color = colors1;

  },
  item4: function handleTitleenter() {
    contact.style.color = colors1;

    
    
  }
};

const mouselevave = {
    item: function handleTitleleave() {
        home.style.color = colors
        home.style.paddingRight  = "0px"
       
    },
    item2: function handleTitleleave() {
        about.style.color = colors
        about.style.paddingRight  = "0px"
        
        
    },
    item3: function handleTitleleave() {
        port.style.color = colors
        port.style.paddingRight  = "0px"
    },
    item4: function handleTitleleave() {
      contact.style.color =colors
      contact.style.paddingRight  = "0px"
    
    }
   
}

/*-----------------------------------*/



const mouseclick = {
  item: function handleTitleenter() {
    home.style.color = colors;
    home.style.fontSize = "30px"
    home.style.paddingLeft = "10px"
    
 

   
  },
  item2: function handleTitleenter() {
     

  },
  item3: function handleTitleenter() {
    port.style.color = colors;
    port.style.paddingLeft = "10px"
    
  },
  item4: function handleTitleenter() {
    contact.style.color = colors;
    contact.style.paddingLeft = "10px"

  },
  item5: function handleTitleclick() {
    menu.style.visibility = "hidden"
    menubtn2.style.display = "block"

  },
  item6: function handleTitleclick() {
    menu.style.visibility = "inherit"
    menubtn2.style.display = "none"

  }
 
  

};



const colorchange= {
  item1: function handleTitleenter() {
    mainname.style.color = "white"
    home.style.color = "rgba(0, 0, 0, 0.92);"
    about.style.color =  "rgba(0, 0, 0, 0.92);"
    port.style.color =  "rgba(0, 0, 0, 0.92);"
    contact.style.color =  "rgba(0, 0, 0, 0.92);"
    bodyinfo.style.color = "white"
    word.style.color = "white"
    menu.style.backgroundColor = "#FFFFFF53"
    menubtn2.children[0].style.color = "#FFFFFF";
  

    
    

  },
  item2: function handleTitleenter() {
    mainname.style.color = "orange"
    home.style.color = "rgba(0, 0, 0, 0.92);"
    about.style.color =  "rgba(0, 0, 0, 0.92);"
    port.style.color =  "rgba(0, 0, 0, 0.92);"
    contact.style.color =  "rgba(0, 0, 0, 0.92);"
    bodyinfo.style.color = "orange"
    word.style.color = "orange"
    menu.style.backgroundColor = "#FFFFFF66"
    menubtn2.children[0].style.color = "orange";
   

  },
  item3: function handleTitleenter() {
    mainname.style.color = "greenyellow"
    home.style.color = "rgba(0, 0, 0, 0.92)"
    about.style.color ="rgba(0, 0, 0, 0.92)"
    port.style.color = "rgba(0, 0, 0, 0.92)"
    contact.style.color = "rgba(0, 0, 0, 0.92)"
    bodyinfo.style.color = "greenyellow"
    word.style.color = "greenyellow"
    menu.style.backgroundColor = "#FFFFFF53"
    menubtn2.children[0].style.color = "greenyellow";
   

  },
  item4: function handleTitleenter() {
    mainname.style.color = "rgb(191, 127, 217)"
    home.style.color = "rgba(0, 0, 0, 0.92)"
    about.style.color ="rgba(0, 0, 0, 0.92)"
    port.style.color = "rgba(0, 0, 0, 0.92)"
    contact.style.color = "rgba(0, 0, 0, 0.92)"
    bodyinfo.style.color = "rgb(191, 127, 217)"
    word.style.color = "rgb(191, 127, 217)"
    menu.style.backgroundColor = "rgba(191, 127, 217, 0.563)"
    menubtn2.children[0].style.color = "rgb(191, 127, 217)";
   

  }

  
  

};








home.addEventListener("mouseenter", mouseenter.item);
home.addEventListener("mouseleave", mouselevave.item);


about.addEventListener("mouseenter", mouseenter.item2);
about.addEventListener("mouseleave", mouselevave.item2);
about.addEventListener("click", mouseclick.item2)


port.addEventListener("mouseenter", mouseenter.item3);
port.addEventListener("mouseleave", mouselevave.item3);


contact.addEventListener("mouseenter", mouseenter.item4);
contact.addEventListener("mouseleave", mouselevave.item4);
menubtn.addEventListener("click", mouseclick.item5)
menubtn2.addEventListener("click", mouseclick.item6)


white.addEventListener("click", colorchange.item1)
orange.addEventListener("click",colorchange.item2)
green.addEventListener("click", colorchange.item3)
pink.addEventListener("click", colorchange.item4)

