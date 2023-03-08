//* Cree un objeto persona en caso de que quiera usarlo por algun motivo y para brindar los datos que no estan en el randomUser, como experiencia laboral, etc */

let persona = '{"nombre":"Pedro","apellido":"Alvarez","calle":"49","numero":"332","ciudad":"La Plata","provincia":"Buenos Aires","pais":"Argentina","dni":"35.648.145","anio":"1980","mes":"febrero","dia":"28","celu":"(11)11111111","email":"algunpedroalvarez@gmail.com","estudioSec":"Estudios secundarios completos en la E.E.S.T. N°8 Juan Bautista Alberdi","estudioUniv":"Cursando Analista Programador Universitario en la Universidad Nacional de La Plata","cursos":"Realizado el curso Primeros pasos del desarrollo Frontend en Ticmas Academy","idioma1":"español","idioma2":"inglés","idioma3":"japonés","cual1":"Trabajo en equipo","trabajoEquipo":"Me considero y se me ha reconocido como una persona que contribuye activamente al buen ambiente laboral y a la cooperación mutua entre compañeros. Siempre dispuesto a ayudar a quien lo necesite","cual2":"Liderazgo","liderazgo":"Reacciono eficientemente en situaciones de presión en las que hay que tomar desiciones considerando las repercusiones a futuro, principalmente para la empresa","cual3":"Atención","atencion":"Tras varios años de trabajar en atención al público, he desarrollado una capacidad para mediar en situaciones difíciles con clientes logrando mantener una relación de buenos términos con la empresa y sus empleados, sin perder de vista los intereses de la misma","anioTrabajo1":"2010-2013","exp1":"atención al público y caja en Supermercado Argenchino. Referencias: 11xxxxxxxx","anioTrabajo2":"2013-2015","exp2":"gerente de ventas en Maxiconsumo S.A. Referencias: 11xxxxxxxx","anioTrabajo3":"2015-2020","exp3":"gerente de ventas en Nini Mayorista. Referencias: 11xxxxxxxx"}';
var dropdown = document.getElementsByClassName("dropdown-btn");
var container = document.getElementsByClassName("dropdown-container");
var popup = document.getElementsByClassName("popup-btn");
var popupbtn = document.getElementById("popupBtn");
var popupContent = document.getElementsByClassName("links");
var i, j, k;
const obj = JSON.parse(persona);
var objx;
var fecha;
var xhr = new XMLHttpRequest();
var url = 'https://randomuser.me/api/';
xhr.open("GET", url, true);


xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        objx = JSON.parse(this.responseText);
        obj.nombre = objx.results[0].name.first;
        obj.apellido = objx.results[0].name.last;
        obj.pais = objx.results[0].location.country;
        obj.ciudad = objx.results[0].location.city;
        obj.provincia = objx.results[0].location.state;
        obj.dni = objx.results[0].id.value;
        obj.fecha = objx.results[0].dob.date;
        fecha = new String(obj.fecha);
        fecha = fecha.split('T');
        fecha = fecha[0].split('-');
        obj.anio = fecha[0];
        obj.mes = fecha[1];
        obj.dia = fecha[2];
        obj.celu = objx.results[0].cell;
        obj.email = objx.results[0].email;
        obj.calle = objx.results[0].location.street.name;
        obj.numero = objx.results[0].location.street.number;
        if (objx.results[0].gender === "male") {
            document.getElementById('parrafo').innerHTML = "Mi nombre es " + obj.nombre + " " + obj.apellido + ", nacido en " + obj.pais + " el día " + obj.dia + " del mes " + obj.mes + " del año " + obj.anio + ".";
        } else {
            document.getElementById('parrafo').innerHTML = "Mi nombre es " + obj.nombre + " " + obj.apellido + ", nacida en " + obj.pais + " el día " + obj.dia + " del mes " + obj.mes + " del año " + obj.anio + ".";
        }
        document.getElementById("wsp").addEventListener("click", wsplink);
        function wsplink() {
            window.open("https://wa.me/" + obj.celu, '_blank');
        }
        document.getElementById("mail").addEventListener("click", maillink);
        function maillink() {
            window.open("mailto:" + obj.email, '_blank');
        }
        document.getElementById("tlgrm").addEventListener("click", tlgrmlink);
        function tlgrmlink() {
            window.open("https://t.me/example" + obj.nombre.toLowerCase() + obj.apellido.toLowerCase(), '_blank');
        }
        document.getElementById("lkdn").addEventListener("click", lkdnlink);
        function lkdnlink() {
            window.open("https://linkedin.com/in/example" + obj.nombre.toLowerCase() + obj.apellido.toLowerCase(), '_blank');
        }
        // en mouseover cambian el icono del link por el mismo icono mas claro
        document.getElementById("wsp").addEventListener("mouseover", function () {
            document.getElementById("wspicon").style.display = 'none';
            document.getElementById("wspiconlight").style.display = 'block';
            document.getElementById("wsptext").style.color = '#606060';
        })
        document.getElementById("wsp").addEventListener("mouseout", function () {
            document.getElementById("wspicon").style.display = 'block';
            document.getElementById("wspiconlight").style.display = 'none';
            document.getElementById("wsptext").style.color = '#222';
        })
        document.getElementById("lkdn").addEventListener("mouseover", function () {
            document.getElementById("lkdnicon").style.display = 'none';
            document.getElementById("lkdniconlight").style.display = 'block';
            document.getElementById("lkdntext").style.color = '#606060';
        })
        document.getElementById("lkdn").addEventListener("mouseout", function () {
            document.getElementById("lkdnicon").style.display = 'block';
            document.getElementById("lkdniconlight").style.display = 'none';
            document.getElementById("lkdntext").style.color = '#222';
        })
        document.getElementById("tlgrm").addEventListener("mouseover", function () {
            document.getElementById("tlgrmicon").style.display = 'none';
            document.getElementById("tlgrmiconlight").style.display = 'block';
            document.getElementById("tlgrmtext").style.color = '#606060';
        })
        document.getElementById("tlgrm").addEventListener("mouseout", function () {
            document.getElementById("tlgrmicon").style.display = 'block';
            document.getElementById("tlgrmiconlight").style.display = 'none';
            document.getElementById("tlgrmtext").style.color = '#222';
        })
        document.getElementById("mail").addEventListener("mouseover", function () {
            document.getElementById("mailicon").style.display = 'none';
            document.getElementById("mailiconlight").style.display = 'block';
            document.getElementById("mailtext").style.color = '#606060';
        })
        document.getElementById("mail").addEventListener("mouseout", function () {
            document.getElementById("mailicon").style.display = 'block';
            document.getElementById("mailiconlight").style.display = 'none';
            document.getElementById("mailtext").style.color = '#222';
        })

        console.log(objx);

        document.getElementById('dondeVivo').addEventListener("click", function () {
            document.getElementById('parrafo').innerHTML = "Vivo en calle " + objx.results[0].location.street.name + " número " + objx.results[0].location.street.number + " ciudad de " + objx.results[0].location.city + ", " + objx.results[0].location.state + ", " + objx.results[0].location.country + ".";
        });

        var img = document.getElementById("profileimg");
        img.className = "img-thumbnail"; //durante todo el proyecto busque trabajar en CSS solamente porque el enunciado no decía si debiamos usar solo CSS o bootstrap. En ésta instancia decidí poner en práctica algo con bootstrap también
        img.src = objx.results[0].picture.large;
        var src = document.getElementById("profile");
        img.onload = function () {
            img.height = 150;
            img.width = 150;
            img.style.borderRadius = "10%";

        };
        src.appendChild(img);
        document.getElementById("profileimg").addEventListener("click", function () {
            if (objx.results[0].gender === "male") {
                document.getElementById('parrafo').innerHTML = "Mi nombre es " + obj.nombre + " " + obj.apellido + ", nacido en " + obj.pais + " el día " + obj.dia + " del mes " + obj.mes + " del año " + obj.anio + ".";
            } else {
                document.getElementById('parrafo').innerHTML = "Mi nombre es " + obj.nombre + " " + obj.apellido + ", nacida en " + obj.pais + " el día " + obj.dia + " del mes " + obj.mes + " del año " + obj.anio + ".";
            }
            for (j = 0; j < dropdown.length; j++) {
                container[j].style.display = "none";
            }
            for (k = 0; k < dropdown.length; k++) {
                dropdown[k].classList.remove("active");
            }
            if (smallsize.matches) {
                popupbtn.classList.remove("active");
                popupContent[0].style.display = "none";
            }
        })


    }
    document.getElementById('naci').addEventListener("click", function () {
        document.getElementById('parrafo').innerHTML = "Nací el " + obj.dia + " de " + obj.mes + " del año " + obj.anio + " en " + obj.ciudad + ", " + obj.provincia + ", " + obj.pais + ".";
    });

    document.getElementById('quienSoy').addEventListener("click", function () {
        if (objx.results[0].id.value === null || objx.results[0].id.value.includes("undefined")) {
            // dice no tengo identificacion cuando da resultado de NaNNxxxundefined y cuando da value null
            document.getElementById('parrafo').innerHTML = "Mi nombre es " + obj.nombre + " " + obj.apellido + " y no tengo identificación.";
        } else {
            document.getElementById('parrafo').innerHTML = "Mi nombre es " + obj.nombre + " " + obj.apellido + " y mi identificación es: " + obj.dni + ".";
        }
    });
}
xhr.send();


for (i = 0; i < container.length; i++) {
    container[i].previousElementSibling.addEventListener("click", function () {
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "none") {
            for (j = 0; j < dropdown.length; j++) {
                container[j].style.display = "none";
                dropdown[j].classList.remove("active");
                dropdownContent.style.display = "block";
                this.classList.add("active");
            }
        } else {
            for (j = 0; j < dropdown.length; j++) {
                container[j].style.display = "none";
                dropdown[j].classList.remove("active");
            }
        }
        if ((smallsize.matches) || (smallheight.matches)) {
            popupbtn.classList.remove("active");
            popupContent[0].style.display = "none";
        }
    });
}





popup[0].addEventListener("click", function () {
    this.classList.toggle("active");
    var popupContent = document.getElementsByClassName("links")[0];
    for (j = 0; j < dropdown.length; j++) {
        container[j].style.display = "none";
    }
    for (j = 0; j < dropdown.length; j++) {
        dropdown[j].classList.remove("active");
    }
    if (popupContent.style.display === "flex") {
        popupContent.style.display = "none";
    } else {
        popupContent.style.display = "flex";
    }
});


var inContLink = document.getElementsByClassName("inContainerLink");

for (i = 0; i < inContLink.length; i++) {
    inContLink[i].addEventListener("click", function () {
        for (j = 0; j < dropdown.length; j++) {
            dropdown[j].classList.remove("active");
            for (k = 0; k < container.length; k++) {
                container[k].style.display = "none";
            }
        }
    });
}
var smallsize = window.matchMedia("(max-width: 520px)")

var inLinkPeq = document.getElementsByClassName("links");
for (i = 0; i < inLinkPeq.length; i++) {
    inLinkPeq[i].addEventListener("click", function () {
        for (j = 0; j < dropdown.length; j++) {
            container[j].style.display = "none";
        }
        for (k = 0; k < dropdown.length; k++) {
            dropdown[k].classList.remove("active");
        }
        if (smallsize.matches) {
            popup[0].classList.remove("active");
            if (popupContent[0].style.display === "flex") {
                popupContent[0].style.display = "none";
            } else {
                popupContent[0].style.display = "flex";
            }
        }
    });
}
//las proximas tres funciones son para hacer para dar comportamiento correcto al contactbar y los sidebars sin importar cuando y como se cambie de tamaño de pantalla
var icon = document.getElementsByClassName("icon");
var texto = document.getElementsByClassName("linkText");

var medsmallsize = window.matchMedia("(max-width: 850px)")
myFunction4(medsmallsize)
medsmallsize.addListener(myFunction4)

var medsize = window.matchMedia("(max-width: 980px)")
myFunction3(medsize)
medsize.addListener(myFunction3)

var smallheight = window.matchMedia("(max-height: 450px)")
myFunction2(smallheight)
smallheight.addListener(myFunction2)

var smallsize = window.matchMedia("(max-width: 520px)")
myFunction(smallsize)
smallsize.addListener(myFunction)


function myFunction(smallsize) {
    for (j = 0; j < dropdown.length; j++) {
        container[j].style.display = "none";
    }
    for (j = 0; j < dropdown.length; j++) {
        dropdown[j].classList.remove("active");
    }
    if ((smallsize.matches) && (smallheight.matches)) {
        for (j = 0; j < texto.length; j++) {
            texto[j].style.display = "none";
        }
    }
    if ((smallheight.matches) && !(smallsize.matches)) {
        for (j = 0; j < texto.length; j++) {
            texto[j].style.display = "block";
        }
    }

    if ((smallsize.matches) || (smallheight.matches)) {
        popup[0].classList.remove("active");
        popupContent[0].style.display = "none";
        popup[0].style.display = "block";
        for (i = 0; i < icon.length; i++) {
            icon[i].style.height = "18px";
            icon[i].style.width = "18px";
            icon[i].style.padding = "0px";
            icon[i].style.margin = "0px";
        }
        for (j = 0; j < texto.length; j++) {
            texto[j].style.fontSize = "12px";
        }
    } else {
        popupContent[0].style.display = "flex";
        popup[0].classList.remove("active")
        popup[0].style.display = "none";
        for (i = 0; i < icon.length; i++) {
            icon[i].style.height = "45px";
            icon[i].style.width = "50px";
            icon[i].style.padding = "0px";
            icon[i].style.margin = "0px";
        }
        for (j = 0; j < texto.length; j++) {
            texto[j].style.fontSize = "18px";
        }
    }
}



function myFunction2(smallheight) {
    if (smallheight.matches) {
        if ((medsmallsize.matches) && !(smallsize.matches)) {
            for (j = 0; j < texto.length; j++) {
                texto[j].style.display = "block";
            }
        }
        if (smallsize.matches) {
            popup[0].classList.remove("active");
            popupContent[0].style.display = "none";
            popup[0].style.display = "block";
            for (j = 0; j < texto.length; j++) {
                texto[j].style.display = "none";
            }
        }
    } else {
        if ((medsmallsize.matches) && !(smallsize.matches)) {
            if ((smallheight.matches) && (medsize.matches)) {
                for (j = 0; j < texto.length; j++) {
                    texto[j].style.display = "none";
                }
            }
        }
        if ((medsmallsize.matches) && !(smallsize.matches)) {
            for (j = 0; j < texto.length; j++) {
                texto[j].style.display = "none";
            }
        }
    }
    for (j = 0; j < dropdown.length; j++) {
        container[j].style.display = "none";
    }
    for (j = 0; j < dropdown.length; j++) {
        dropdown[j].classList.remove("active");
    }
    if ((smallheight.matches) || (smallsize.matches)) {
        popup[0].classList.remove("active");
        popupContent[0].style.display = "none";
        popup[0].style.display = "block";
        for (i = 0; i < icon.length; i++) {
            icon[i].style.padding = "0px";
            icon[i].style.margin = "0px";
            icon[i].style.padding = "0px";
            icon[i].style.height = "18px";
            icon[i].style.width = "18px";
        }
        for (j = 0; j < texto.length; j++) {
            texto[j].style.fontSize = "13px";
            texto[j].style.padding = "0px"

        }
    } else {
        popupContent[0].style.display = "flex";
        popup[0].classList.remove("active");
        popup[0].style.display = "none";
        for (i = 0; i < icon.length; i++) {
            icon[i].style.height = "45px";
            icon[i].style.width = "50px";
            icon[i].style.padding = "0px";
            icon[i].style.margin = "0px";
        }
        for (j = 0; j < texto.length; j++) {
            texto[j].style.fontSize = "18px";
            texto[j].style.paddingTop = "8px";
            texto[j].style.paddingBottom = "8px";
        }
    }
}

function myFunction3(medsize) {
    if ((window.matchMedia("(max-height: 450px)").matches) && (medsize.matches)) {
        for (j = 0; j < texto.length; j++) {
            texto[j].style.display = "block";
        }
    }
    for (j = 0; j < dropdown.length; j++) {
        container[j].style.display = "none";
    }
    for (j = 0; j < dropdown.length; j++) {
        dropdown[j].classList.remove("active");
    }
}

function myFunction4(medsmallsize) {
    if (!window.matchMedia("(max-height: 450px)").matches) {
        if (medsmallsize.matches) {
            for (j = 0; j < texto.length; j++) {
                texto[j].style.display = "none";
            }
        } else {
            for (j = 0; j < texto.length; j++) {
                texto[j].style.display = "block";
            }
        }
    } else {
        for (j = 0; j < texto.length; j++) {
            texto[j].style.display = "block";
        }
    }
}



document.getElementById('exp1').innerHTML = obj.anioTrabajo1

document.getElementById('exp2').innerHTML = obj.anioTrabajo2

document.getElementById('exp3').innerHTML = obj.anioTrabajo3

document.getElementById('cual1').innerHTML = obj.cual1

document.getElementById('cual2').innerHTML = obj.cual2

document.getElementById('cual3').innerHTML = obj.cual3

document.getElementById('exp1').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = "Entre los años " + obj.anioTrabajo1 + " desempeñé tareas de " + obj.exp1 + ".";
});

document.getElementById('exp2').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = "Entre los años " + obj.anioTrabajo2 + " estuve trabajando como " + obj.exp2 + ".";
});

document.getElementById('exp3').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = "Entre los años " + obj.anioTrabajo3 + " cumplí con las tareas de " + obj.exp3 + ".";
});

document.getElementById('secundaria').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = obj.estudioSec + ".";
});

document.getElementById('universitario').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = obj.estudioUniv + ".";
});

document.getElementById('cursos').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = obj.cursos + ".";
});

document.getElementById('materna').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = "Mi lengua materna es el " + obj.idioma1 + ".";
});

document.getElementById('hablo').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = "Hablo fuidamente el " + obj.idioma2 + ".";
});

document.getElementById('entiendo').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = "Entiendo y estoy aprendiendo el " + obj.idioma3 + ".";
});

document.getElementById('cual1').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = obj.trabajoEquipo + ".";
});

document.getElementById('cual2').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = obj.liderazgo + ".";
});

document.getElementById('cual3').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = obj.atencion + ".";
});

//sin ajax

// function imgclick() {
//     document.getElementById('parrafo').innerHTML = "Mi nombre es " + obj.nombre + " " + obj.apellido + ", nacido en " + obj.pais + " el día " + obj.dia + " de " + obj.mes + " del año " + obj.anio + ".";


// }

// document.getElementById('parrafo').innerHTML = "Mi nombre es " + obj.nombre + " " + obj.apellido + ", nacido en " + obj.pais + " el " + obj.dia + " de " + obj.mes + " del " + obj.anio + ".";

// document.getElementById('quienSoy').addEventListener("click", function () {
//     document.getElementById('parrafo').innerHTML = "Mi nombre es " + obj.nombre + " " + obj.apellido + " y mi DNI es: " + obj.dni + ".";;
// });

// var img = document.createElement("img");
// img.src = "images/24.jpg";
// var src = document.getElementById("profile");
// img.onload = function () {
//     img.height = 150;
//     img.width = 150;
//     img.style.borderRadius = "10%";

// };