<<<<<<< HEAD
let abrirMenu=document.querySelector("#navBurger"),cerrarMenu=document.querySelector("#closeMenu"),menuMovil=document.querySelector(".nav__mob"),listaForm=document.querySelectorAll(".formulario__conten ul li"),listaTabs=document.querySelectorAll(".tabs__lista ul li"),listaFormSpan=document.querySelector(".lista__form span"),titulosTabla=document.querySelectorAll(".tabla__tit"),textoTabla=document.querySelector("#tabla-conten"),modal=document.querySelector(".modal"),abrirModal=document.querySelector("#politicas"),cerrarModal=document.querySelector("#cerrarModal"),btnCalendario=document.querySelector(".btn__calendar");for(let listForm of(abrirMenu.addEventListener("click",()=>{menuMovil.classList.add("abrir")}),cerrarMenu.addEventListener("click",()=>{menuMovil.classList.remove("abrir")}),listaForm))listForm.addEventListener("click",()=>{listForm.classList.toggle("mostrar")});for(let listTabs of listaTabs)listTabs.addEventListener("click",()=>{listTabs.classList.toggle("mostrar")});for(let i=0;i<titulosTabla.length;i++)titulosTabla[i].addEventListener("click",()=>{switch(titulosTabla[i]){case titulosTabla[0]:textoTabla.innerHTML=`Si est\xe1s cansado de no conseguir respuesta ante atropellos de las instituciones, la \xfanica manera de cambiar esto, es participando, 
                \xfanete a nosotros, vamos juntos a poner en valor a las personas. T\xfa haces falta.`,titulosTabla[0].classList.add("select"),titulosTabla[1].classList.remove("select"),titulosTabla[2].classList.remove("select");break;case titulosTabla[1]:textoTabla.innerHTML=`Proponemos un programa de empoderamiento ciudadano, all\xed establecemos una serie de herramientas que brindar\xe1n cambios en la estructura ante ingentes 
            problemas que confronta la sociedad. Nuestro pilar de arranque ser\xe1 la Democratizaci\xf3n de la Justicia.`,titulosTabla[0].classList.remove("select"),titulosTabla[1].classList.add("select"),titulosTabla[2].classList.remove("select");break;case titulosTabla[2]:textoTabla.innerHTML=`La Democratizaci\xf3n de la Justicia aporta soluciones enfocadas en redimensionar la relaci\xf3n (control) entre el Estado, medios de comunicaci\xf3n y las personas. 
            Es un proyecto ambicioso que va m\xe1s all\xe1 de las ayudas interminables fuera de contexto que buscan apa\xf1ar los s\xedntomas sin proponer verdaderas soluciones. <br/> <br/> 
            La transformaci\xf3n es posible mediante nuestros programas dise\xf1ados con herramientas para la emancipaci\xf3n en beneficio del ciudadano, aportando
            mecanismos para empoderar a las personas.`,titulosTabla[0].classList.remove("select"),titulosTabla[1].classList.remove("select"),titulosTabla[2].classList.add("select")}});abrirModal.addEventListener("click",()=>{modal.classList.remove("cerrar")}),cerrarModal.addEventListener("click",()=>{modal.classList.add("cerrar")}),btnCalendario.addEventListener("click",()=>{btnCalendario.classList.toggle("ver")});
=======
let abrirMenu = document.querySelector("#navBurger");
let cerrarMenu = document.querySelector("#closeMenu");
let menuMovil = document.querySelector(".nav__mob");
let listaForm = document.querySelectorAll(".formulario__conten ul li");
let listaTabs = document.querySelectorAll(".tabs__lista ul li");
let listaFormSpan = document.querySelector(".lista__form span");
let titulosTabla = document.querySelectorAll(".tabla__tit");
let textoTabla = document.querySelector("#tabla-conten");


/*Funcionalidad de abrir y cerrar menú móvil*/

abrirMenu.addEventListener("click", () => {

    menuMovil.classList.add("abrir");
})

cerrarMenu.addEventListener("click", () => {

    menuMovil.classList.remove("abrir");
})

/*Funcionalidad de los acordeones en la sección del formulario*/

for (let listForm of listaForm) {

    listForm.addEventListener("click", () => {

        listForm.classList.toggle("mostrar");
    })
}

/*Funcionalidad de los acordeones en la sección de las tablas*/

for (let listTabs of listaTabs) {

    listTabs.addEventListener("click", () => {

        listTabs.classList.toggle("mostrar");
    })
}

/*Funcionalidad de las tablas*/

for(let i = 0; i < titulosTabla.length; i++) {

    titulosTabla[i].addEventListener("click", () => {

        switch(titulosTabla[i]) {

            case titulosTabla[0]:

                textoTabla.innerHTML = `Si estás cansado de no conseguir respuesta ante atropellos de las instituciones, la única manera de cambiar esto, es participando, 
                únete a nosotros, vamos juntos a poner valor a las personas. Tú haces falta.`;

                titulosTabla[0].classList.add("select");
                titulosTabla[1].classList.remove("select");
                titulosTabla[2].classList.remove("select");

            break;

            case titulosTabla[1]:

            textoTabla.innerHTML = `Proponemos un programa de empoderamiento ciudadano, allí establecemos una serie de herramientas que brindarán cambios en la estructura ante ingentes 
            problemas que confronta la sociedad. Nuestro pilar de arranque será la Democratización de la Justicia.`;

            titulosTabla[0].classList.remove("select");
            titulosTabla[1].classList.add("select");
            titulosTabla[2].classList.remove("select");

            break;

            case titulosTabla[2]:

            textoTabla.innerHTML = `La Democratización de la Justicia aporta soluciones enfocadas en redimensionar la relación (control) entre el Estado, medios de comunicación y las personas. 
            Es un proyecto ambicioso que va más allá de las ayudas interminables fuera de contexto que buscan apañar los síntomas sin proponer verdaderas soluciones. <br/> <br/> 
            La transformación es posible mediante nuestros programas diseñados con herramientas para la emancipación en beneficio del ciudadano, aportando
            mecanismos para empoderar a las personas.`

            titulosTabla[0].classList.remove("select");
            titulosTabla[1].classList.remove("select");
            titulosTabla[2].classList.add("select");

            break;
        }
    })
}
>>>>>>> a17016c08810c223660e197c7aff7c97595ef600
