let data = [
  {
    tarjeta: "html",
    imagen: "./imagenes/html5.png",
    secciones: [
      {
        nombre: "Html",
        descripcion:
          "HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web. Define el significado y la estructura del contenido web. Además de HTML,            generalmente se utilizan otras tecnologías para describir la apariencia/presentación de una página web (CSS) o la funcionalidad/comportamiento (JavaScript).",
        link: "https://developer.mozilla.org/es/docs/Web/HTML",
      },
      {
        nombre: "Estructura",
        descripcion:
          "Las 2 (dos) grandes etiquetas que componen una web con el 'header' y el 'body'. En el primero colocamos meta-data como el titulo de la página, la codificación de caracteres, enlaces externos, etc, y en el segundo colocamos las etiquetas que van a ser renderizadas en nuestra página.",
        link: "https://developer.mozilla.org/es/docs/Web/HTML",
      },
      {
        nombre: "Etiqueta link",
        descripcion: "Utilizada para linkear ficheros CSS a nuestra web.",
        link: "https://developer.mozilla.org/es/docs/Web/HTML",
      },
      {
        nombre: "Etiqueta script",
        descripcion:
          "Utilizada para ejecutar código javascript o linkear ficheros Javascript externos a nuestra web.",
        link: "https://developer.mozilla.org/es/docs/Web/HTML",
      },
    ],
  },
  {
    tarjeta: "css",
    imagen: "./imagenes/CSS.png",
    secciones: [
      {
        nombre: "Css",
        descripcion:
          "Hojas de Estilo en Cascada (del inglés Cascading Style Sheets) o CSS es el lenguaje de estilos utilizado para describir la presentación de documentos HTML o XML (en-US) (incluyendo varios lenguajes basados en XML como SVG, MathML o XHTML). CSS describe como debe ser renderizado el elemento estructurado en la pantalla, en papel, en el habla o en otros medios.",
        link: "https://developer.mozilla.org/es/docs/Web/CSS",
      },
      {
        nombre: "Selectores",
        descripcion:
          "Sirven para seleccionar etiquetas HTML y poder darle estilos. Se pueden seleccionar las mismas en base al nombre de su etiqueta, id, clases y atributos.",
        link: "https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors",
      },
      {
        nombre: "Modelo de cajas",
        descripcion:
          "El modelo de cajas hace referencia al comportamiento que tenga una caja (contenedor) creada en tu página web. Es decir, se refiere a la ubicación que vamos a darle, sus márgenes, paddings, bordes, tamaños. Una caja (contenedor) sirve para colocar elementos dentro.",
        link: "https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/The_box_model",
      },
      {
        nombre: "Animaciones",
        descripcion:
          "Permiten animar la transición entre un estilo CSS y otro. Esto se logra mediante la utilización de la propiedad animation y sus sub-propiedades, con las cuales, podemos otorgarle un nombre a la animación, el tiempo de duración de la misma, entre otros. Con esto, todavía no estamos indicando la apariencia de nuestra animación, es decir, lo que hará en ese tiempo. Para ello haremos uso de @keyframes, manipulando así, en cada momento (fotograma) del tiempo establecido, los efectos css que queramos.",
        link: "https://developer.mozilla.org/es/docs/Web/CSS/CSS_animations/Using_CSS_animations",
      },
      {
        nombre: "Flexbox",
        descripcion:
          "Es un modelo de maquetación que nos permite hacer que nuestras cajas sean más flexibles, logrando así un diseño más adaptable a los diferentes dispositivos. Con flexbox definimos un nuevo modelo de cajas. Nos permite distribuir elementos sea de manera horizontal o vertical. Para utilizar flexbox debo colocar un “display: flex” a la caja padre (caja contenedora) y de esta manera podremos manipular el comportamiento de los “primeros hijos” de dicha caja.",
        link: "https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Flexbox",
      },
    ],
  },
  {
    tarjeta: "javascript",
    imagen: "./imagenes/javascript.png",
    secciones: [
      {
        nombre: "Javascript",
        descripcion:
          "Es un lenguaje interpretado creado por Brendan Eich (programador estadounidense), que, en principio, se podía ejecutar solo dentro del navegador. Surge como necesidad de enviar información al servidor lo más procesada posible.",
        link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
      },
      {
        nombre: "Nodejs",
        descripcion:
          "Es un entorno de ejecución de Javascript que permite ejecutar Javascript fuera del navegador. Es multiplataforma y fue lanzado oficialmente en el año 2009",
        link: "https://nodejs.org/es",
      },
      {
        nombre: "Variables y Constantes",
        descripcion:
          "Una variable es un contenedor de información que apunta a un espacio en memoria. La forma antigua de definir variables era utilizando la palabra reservada var, pero a partir del 2015, con la implementación de ECMAScript 2015 (ES6) se incluyeron, entre otras cosas, una nueva forma de definir variables utilizando las palabras reservadas let y const. Una constante es un contenedor de información que una vez asignado su valor, éste no puede cambiar.",
        link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let",
      },
      {
        nombre: "Arreglos",
        descripcion:
          "Es un tipo de dato que contiene un grupo de elementos. Generalmente los datos que se encuentran en un arreglo son del mismo tipo pero igualmente pueden ser diferentes. Se definen entre corchetes separados por comas. Cada dato dentro del arreglo tiene asignada una posición. Un arreglo arranca con la posición 0 (cero).",
        link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array",
      },
      {
        nombre: "Objetos",
        descripcion:
          "Es un tipo de dato que contiene un grupo de elementos los cuales se identifican mediante “clave:valor”, es decir, sus propiedades se declaran de manera explícita. Se definen esas “clave:valor” entre llaves separados por comas.",
        link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects",
      },
    ],
  },
  {
    tarjeta: "git",
    imagen: "./imagenes/git.png",
    secciones: [
      {
        nombre: "Git",
        descripcion:
          "Es un sistema de control de versiones. Nos permite tener un historial completo de todo el código que desarrollamos sobre nuestra aplicación. Facilita el desarrollo y mantenimiento de aplicaciones.",
        link: "https://git-scm.com/",
      },
      {
        nombre: "Ramas (branches)",
        descripcion:
          "El proyecto puede ser dividido en varias ramas, en el cual cada desarrollador podrá realizar sus propios cambios, añadir nuevos ficheros, carpetas, etc y luego poder unir dichos cambios con los realizados con los demás desarrolladores",
        link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let",
      },
      {
        nombre: "GitHub",
        descripcion:
          "Es un portal para colocar código de las aplicaciones de cualquier desarrollador. Fue creado para que los desarrolladores suban el código de sus aplicaciones y otros usuarios puedan descargarla o colaborar con su desarrollo. Este portal usa el sistema de control de versiones Git. Nos permite alojar nuestros proyectos de manera gratuita. Además permite mirar el código y descargarte las diferentes versiones de una aplicación.",
        link: "https://github.com/",
      },
    ],
  },
];

//============================================================================================
//============================================================================================
function llenarDatosHtml()
{

  if (document.querySelector("div.claseActividad")) 
  {
    var gpe_divInactividad = document.querySelector("div.claseActividad");
    document.body.removeChild(gpe_divInactividad);
    location.reload();

  }
  else
  {

    var gpe_divActividad = document.createElement("div");
    gpe_divActividad.className = "claseActividad";
    document.body.appendChild(gpe_divActividad);

  };

  

  const datosHtml = data.filter(elemento => elemento.tarjeta === "html");
  
  let tarjeta0;
  let imagen0;

  let nombre0;
  let descripcion0;
  let link0;

  let nombre1;
  let descripcion1;
  let link1;

  let nombre2;
  let descripcion2;
  let link2;

  let nombre3;
  let descripcion3;
  let link3;

  datosHtml.forEach(element => 
  {

    tarjeta0 = element.tarjeta;
    imagen0 = element.imagen;

       element.secciones.forEach((valor,index) => 
       {
          if(index === 0)
          {
            nombre0 = valor.nombre;
            descripcion0 = valor.descripcion;
            link0 = valor.link;
          };

          

          if(index === 1)
          {
            nombre1 = valor.nombre;
            descripcion1 = valor.descripcion;
            link1 = valor.link;
          };

          if(index === 2)
          {
            nombre2 = valor.nombre;
            descripcion2 = valor.descripcion;
            link2 = valor.link;
          };

          if(index === 3)
          {
            nombre3 = valor.nombre;
            descripcion3 = valor.descripcion;
            link3 = valor.link;
          };

         
       });
    
  });



  //===================================================================================
  //=======================================titulo============================================
  
  if (document.querySelector("h2.claseHtml")) 
  {
     const h2ClaseHtml = document.querySelector("h2.claseHtml");
     document.body.removeChild(h2ClaseHtml);

     const newElement = document.createElement("h2");
     newElement.className = "claseHtml";
     newElement.textContent = tarjeta0;
     newElement.style.textAlign = "center";
     document.querySelector(".gridHijo1").appendChild(newElement);

  }
  else
  {
    const newElement = document.createElement("h2");
    newElement.className = "claseHtml";
    newElement.textContent =  tarjeta0;
    newElement.style.textAlign = "center";
    document.querySelector(".gridHijo1").appendChild(newElement);
     
  };

  //===================================================================================
  //=====================================imagen==============================================

  if (document.querySelector("img.claseHtmlImg")) 
  {
     const imgClaseHtml = document.querySelector("img.claseHtmlImg");
     document.body.removeChild(imgClaseHtml);

     const newElement = document.createElement("img");
     newElement.className = "claseHtmlImg";
     newElement.src = imagen0;
     document.querySelector(".gridHijo2").appendChild(newElement);

  }
  else
  {
     const newElement = document.createElement("img");
     newElement.className = "claseHtmlImg";
     newElement.src = imagen0;
     document.querySelector(".gridHijo2").appendChild(newElement);
     
  };

  //===================================================================================
  //===============================parrafoNode====================================================

  if (document.querySelector("p.claseHtmlNodo")) 
  {
     const pclaseHtmlNodo = document.querySelector("p.claseHtmlNodo");
     document.body.removeChild(pclaseHtmlNodo);

     const newElement = document.createElement("p");
     newElement.className = "claseHtmlNodo";
     newElement.textContent = nombre0 + ":\n" + descripcion0;
     document.querySelector(".gridHijo3").appendChild(newElement);

  }
  else
  {
     const newElement = document.createElement("p");
     newElement.className = "claseHtmlNodo";
     newElement.textContent = nombre0 + ":\n" + descripcion0;
     document.querySelector(".gridHijo3").appendChild(newElement);
     
  };

  //===================================================================================
  //===============================parrafoEstructura====================================================

  if (document.querySelector("p.claseHtmlEstructura")) 
  {
     const pclaseHtmlEstructura = document.querySelector("p.claseHtmlEstructura");
     document.body.removeChild(pclaseHtmlEstructura);

     const newElement = document.createElement("p");
     newElement.className = "claseHtmlEstructura";
     newElement.textContent = nombre1 + ":\n" + descripcion1;
     document.querySelector(".gridHijo4").appendChild(newElement);

  }
  else
  {
     const newElement = document.createElement("p");
     newElement.className = "claseHtmlEstructura";
     newElement.textContent = nombre1 + ":\n" + descripcion1;
     document.querySelector(".gridHijo4").appendChild(newElement);
     
  };

  //===================================================================================
  //===============================parrafoLink====================================================

  if (document.querySelector("p.claseHtmlLink")) 
  {
     const pclaseHtmlLink = document.querySelector("p.claseHtmlLink");
     document.body.removeChild(pclaseHtmlLink);

     const newElement = document.createElement("p");
     newElement.className = "claseHtmlLink";
     newElement.textContent = nombre2 + ":\n" + descripcion2;
     document.querySelector(".gridHijo5").appendChild(newElement);

  }
  else
  {
     const newElement = document.createElement("p");
     newElement.className = "claseHtmlLink";
     newElement.textContent = nombre2 + ":\n" + descripcion2;
     document.querySelector(".gridHijo5").appendChild(newElement);
     
  };

  //===================================================================================
  //===============================parrafoScript====================================================

  if (document.querySelector("p.claseHtmlScript")) 
  {
     const pclaseHtmlScript = document.querySelector("p.claseHtmlScript");
     document.body.removeChild(pclaseHtmlScript);

     const newElement = document.createElement("p");
     newElement.className = "claseHtmlScript";
     newElement.textContent = nombre3 + ":\n" + descripcion3;
     document.querySelector(".gridHijo6").appendChild(newElement);

  }
  else
  {
     const newElement = document.createElement("p");
     newElement.className = "claseHtmlScript";
     newElement.textContent = nombre3 + ":\n" + descripcion3;
     document.querySelector(".gridHijo6").appendChild(newElement);
     
  };

  //=======================================================================================
  //=======================================================================================

};


//============================================================================================
//============================================CSS================================================
function llenarDatosCss()
{
  
  if (document.querySelector("div.claseActividad")) 
  {
    var gpe_divInactividad = document.querySelector("div.claseActividad");
    document.body.removeChild(gpe_divInactividad);
    location.reload();

  }
  else
  {

    var gpe_divActividad = document.createElement("div");
    gpe_divActividad.className = "claseActividad";
    document.body.appendChild(gpe_divActividad);

  };

  
  const datosHtml = data.filter(elemento => elemento.tarjeta === "css");
  
  let tarjeta0;
  let imagen0;

  let nombre0;
  let descripcion0;
  let link0;

  let nombre1;
  let descripcion1;
  let link1;

  let nombre2;
  let descripcion2;
  let link2;

  let nombre3;
  let descripcion3;
  let link3;

  datosHtml.forEach(element => 
  {

    tarjeta0 = element.tarjeta;
    imagen0 = element.imagen;

       element.secciones.forEach((valor,index) => 
       {
          if(index === 0)
          {
            nombre0 = valor.nombre;
            descripcion0 = valor.descripcion;
            link0 = valor.link;
          };

          

          if(index === 1)
          {
            nombre1 = valor.nombre;
            descripcion1 = valor.descripcion;
            link1 = valor.link;
          };

          if(index === 2)
          {
            nombre2 = valor.nombre;
            descripcion2 = valor.descripcion;
            link2 = valor.link;
          };

          if(index === 3)
          {
            nombre3 = valor.nombre;
            descripcion3 = valor.descripcion;
            link3 = valor.link;
          };

         
       });
    
  });



  //===================================================================================
  //=======================================titulo============================================
  
  if (document.querySelector("h2.claseHtml")) 
  {
     const h2ClaseHtml = document.querySelector("h2.claseHtml");
     document.body.removeChild(h2ClaseHtml);

     const newElement = document.createElement("h2");
     newElement.className = "claseHtml";
     newElement.textContent = tarjeta0;
     newElement.style.textAlign = "center";
     document.querySelector(".gridHijo1").appendChild(newElement);

  }
  else
  {
    const newElement = document.createElement("h2");
    newElement.className = "claseHtml";
    newElement.textContent =  tarjeta0;
    newElement.style.textAlign = "center";
    document.querySelector(".gridHijo1").appendChild(newElement);
     
  };

  //===================================================================================
  //=====================================imagen==============================================

  if (document.querySelector("img.claseHtmlImg")) 
  {
     const imgClaseHtml = document.querySelector("img.claseHtmlImg");
     document.body.removeChild(imgClaseHtml);

     const newElement = document.createElement("img");
     newElement.className = "claseHtmlImg";
     newElement.src = imagen0;
     newElement.height = 200;
     newElement.width = 400;
     document.querySelector(".gridHijo2").appendChild(newElement);

  }
  else
  {
     const newElement = document.createElement("img");
     newElement.className = "claseHtmlImg";
     newElement.src = imagen0;
     newElement.height = 240;
     newElement.width = 600;
     document.querySelector(".gridHijo2").appendChild(newElement);
     
  };

  //===================================================================================
  //===============================parrafoNode====================================================

  if (document.querySelector("p.claseHtmlNodo")) 
  {
     const pclaseHtmlNodo = document.querySelector("p.claseHtmlNodo");
     document.body.removeChild(pclaseHtmlNodo);

     const newElement = document.createElement("p");
     newElement.className = "claseHtmlNodo";
     newElement.textContent = nombre0 + ":\n" + descripcion0;
     document.querySelector(".gridHijo3").appendChild(newElement);

  }
  else
  {
     const newElement = document.createElement("p");
     newElement.className = "claseHtmlNodo";
     newElement.textContent = nombre0 + ":\n" + descripcion0;
     document.querySelector(".gridHijo3").appendChild(newElement);
     
  };

  //===================================================================================
  //===============================parrafoEstructura====================================================

  if (document.querySelector("p.claseHtmlEstructura")) 
  {
     const pclaseHtmlEstructura = document.querySelector("p.claseHtmlEstructura");
     document.body.removeChild(pclaseHtmlEstructura);

     const newElement = document.createElement("p");
     newElement.className = "claseHtmlEstructura";
     newElement.textContent = nombre1 + ":\n" + descripcion1;
     document.querySelector(".gridHijo4").appendChild(newElement);

  }
  else
  {
     const newElement = document.createElement("p");
     newElement.className = "claseHtmlEstructura";
     newElement.textContent = nombre1 + ":\n" + descripcion1;
     document.querySelector(".gridHijo4").appendChild(newElement);
     
  };

  //===================================================================================
  //===============================parrafoLink====================================================

  if (document.querySelector("p.claseHtmlLink")) 
  {
     const pclaseHtmlEstructura = document.querySelector("p.claseHtmlLink");
     document.body.removeChild(pclaseHtmlEstructura);

     const newElement = document.createElement("p");
     newElement.className = "claseHtmlLink";
     newElement.textContent = nombre2 + ":\n" + descripcion2;
     document.querySelector(".gridHijo5").appendChild(newElement);

  }
  else
  {
     const newElement = document.createElement("p");
     newElement.className = "claseHtmlLink";
     newElement.textContent = nombre2 + ":\n" + descripcion2;
     document.querySelector(".gridHijo5").appendChild(newElement);
     
  };

  //===================================================================================
  //===============================parrafoScript====================================================

  if (document.querySelector("p.claseHtmlScript")) 
  {
     const pclaseHtmlScript = document.querySelector("p.claseHtmlScript");
     document.body.removeChild(pclaseHtmlScript);

     const newElement = document.createElement("p");
     newElement.className = "claseHtmlScript";
     newElement.textContent = nombre3 + ":\n" + descripcion3;
     document.querySelector(".gridHijo6").appendChild(newElement);

  }
  else
  {
     const newElement = document.createElement("p");
     newElement.className = "claseHtmlScript";
     newElement.textContent = nombre3 + ":\n" + descripcion3;
     document.querySelector(".gridHijo6").appendChild(newElement);
     
  };


  //=======================================================================================
  
 //=======================================================================================


};

//============================================================================================
//============================================JAVASCRIPT================================================

function llenarDatosJavaScript()
{
  
  if (document.querySelector("div.claseActividad")) 
  {
    var gpe_divInactividad = document.querySelector("div.claseActividad");
    document.body.removeChild(gpe_divInactividad);
    location.reload();

  }
  else
  {

    var gpe_divActividad = document.createElement("div");
    gpe_divActividad.className = "claseActividad";
    document.body.appendChild(gpe_divActividad);

  };

  
  const datosHtml = data.filter(elemento => elemento.tarjeta === "javascript");
  
  let tarjeta0;
  let imagen0;

  let nombre0;
  let descripcion0;
  let link0;

  let nombre1;
  let descripcion1;
  let link1;

  let nombre2;
  let descripcion2;
  let link2;

  let nombre3;
  let descripcion3;
  let link3;

  datosHtml.forEach(element => 
  {

    tarjeta0 = element.tarjeta;
    imagen0 = element.imagen;

       element.secciones.forEach((valor,index) => 
       {
          if(index === 0)
          {
            nombre0 = valor.nombre;
            descripcion0 = valor.descripcion;
            link0 = valor.link;
          };

          

          if(index === 1)
          {
            nombre1 = valor.nombre;
            descripcion1 = valor.descripcion;
            link1 = valor.link;
          };

          if(index === 2)
          {
            nombre2 = valor.nombre;
            descripcion2 = valor.descripcion;
            link2 = valor.link;
          };

          if(index === 3)
          {
            nombre3 = valor.nombre;
            descripcion3 = valor.descripcion;
            link3 = valor.link;
          };

         
       });
    
  });



  //===================================================================================
  //=======================================titulo============================================
  
  if (document.querySelector("h2.claseHtml")) 
  {
     const h2ClaseHtml = document.querySelector("h2.claseHtml");
     document.body.removeChild(h2ClaseHtml);

     const newElement = document.createElement("h2");
     newElement.className = "claseHtml";
     newElement.textContent = tarjeta0;
     newElement.style.textAlign = "center";
     document.querySelector(".gridHijo1").appendChild(newElement);

  }
  else
  {
    const newElement = document.createElement("h2");
    newElement.className = "claseHtml";
    newElement.textContent =  tarjeta0;
    newElement.style.textAlign = "center";
    document.querySelector(".gridHijo1").appendChild(newElement);
     
  };

  //===================================================================================
  //=====================================imagen==============================================

  if (document.querySelector("img.claseHtmlImg")) 
  {
     const imgClaseHtml = document.querySelector("img.claseHtmlImg");
     document.body.removeChild(imgClaseHtml);

     const newElement = document.createElement("img");
     newElement.className = "claseHtmlImg";
     newElement.src = imagen0;
     newElement.height = 240;
     newElement.width = 600;
     document.querySelector(".gridHijo2").appendChild(newElement);

  }
  else
  {
     const newElement = document.createElement("img");
     newElement.className = "claseHtmlImg";
     newElement.src = imagen0;
     newElement.height = 200;
     newElement.width = 600;
     document.querySelector(".gridHijo2").appendChild(newElement);
     
  };

  //===================================================================================
  //===============================parrafoNode====================================================

  if (document.querySelector("p.claseHtmlNodo")) 
  {
     const pclaseHtmlNodo = document.querySelector("p.claseHtmlNodo");
     document.body.removeChild(pclaseHtmlNodo);

     const newElement = document.createElement("p");
     newElement.className = "claseHtmlNodo";
     newElement.textContent = nombre0 + ":\n" + descripcion0;
     document.querySelector(".gridHijo3").appendChild(newElement);

  }
  else
  {
     const newElement = document.createElement("p");
     newElement.className = "claseHtmlNodo";
     newElement.textContent = nombre0 + ":\n" + descripcion0;
     document.querySelector(".gridHijo3").appendChild(newElement);
     
  };

  //===================================================================================
  //===============================parrafoEstructura====================================================

  if (document.querySelector("p.claseHtmlEstructura")) 
  {
     const pclaseHtmlEstructura = document.querySelector("p.claseHtmlEstructura");
     document.body.removeChild(pclaseHtmlEstructura);

     const newElement = document.createElement("p");
     newElement.className = "claseHtmlEstructura";
     newElement.textContent = nombre1 + ":\n" + descripcion1;
     document.querySelector(".gridHijo4").appendChild(newElement);

  }
  else
  {
     const newElement = document.createElement("p");
     newElement.className = "claseHtmlEstructura";
     newElement.textContent = nombre1 + ":\n" + descripcion1;
     document.querySelector(".gridHijo4").appendChild(newElement);
     
  };

  //===================================================================================
  //===============================parrafoLink====================================================

  if (document.querySelector("p.claseHtmlLink")) 
  {
     const pclaseHtmlEstructura = document.querySelector("p.claseHtmlLink");
     document.body.removeChild(pclaseHtmlEstructura);

     const newElement = document.createElement("p");
     newElement.className = "claseHtmlLink";
     newElement.textContent = nombre2 + ":\n" + descripcion2;
     document.querySelector(".gridHijo5").appendChild(newElement);

  }
  else
  {
     const newElement = document.createElement("p");
     newElement.className = "claseHtmlLink";
     newElement.textContent = nombre2 + ":\n" + descripcion2;
     document.querySelector(".gridHijo5").appendChild(newElement);
     
  };

  //===================================================================================
  //===============================parrafoScript====================================================

  if (document.querySelector("p.claseHtmlScript")) 
  {
     const pclaseHtmlScript = document.querySelector("p.claseHtmlScript");
     document.body.removeChild(pclaseHtmlScript);

     const newElement = document.createElement("p");
     newElement.className = "claseHtmlScript";
     newElement.textContent = nombre3 + ":\n" + descripcion3;
     document.querySelector(".gridHijo6").appendChild(newElement);

  }
  else
  {
     const newElement = document.createElement("p");
     newElement.className = "claseHtmlScript";
     newElement.textContent = nombre3 + ":\n" + descripcion3;
     document.querySelector(".gridHijo6").appendChild(newElement);
     
  };

  //=======================================================================================
 //=======================================================================================


};

//============================================================================================
//============================================GIT================================================

function llenarDatosGit()
{
  
  if (document.querySelector("div.claseActividad")) 
  {
    var gpe_divInactividad = document.querySelector("div.claseActividad");
    document.body.removeChild(gpe_divInactividad);
    location.reload();

  }
  else
  {

    var gpe_divActividad = document.createElement("div");
    gpe_divActividad.className = "claseActividad";
    document.body.appendChild(gpe_divActividad);

  };

  
  const datosHtml = data.filter(elemento => elemento.tarjeta === "git");
  
  let tarjeta0;
  let imagen0;

  let nombre0;
  let descripcion0;
  let link0;

  let nombre1;
  let descripcion1;
  let link1;

  let nombre2;
  let descripcion2;
  let link2;

  let nombre3;
  let descripcion3;
  let link3;

  datosHtml.forEach(element => 
  {

    tarjeta0 = element.tarjeta;
    imagen0 = element.imagen;

       element.secciones.forEach((valor,index) => 
       {
          if(index === 0)
          {
            nombre0 = valor.nombre;
            descripcion0 = valor.descripcion;
            link0 = valor.link;
          };

          

          if(index === 1)
          {
            nombre1 = valor.nombre;
            descripcion1 = valor.descripcion;
            link1 = valor.link;
          };

          if(index === 2)
          {
            nombre2 = valor.nombre;
            descripcion2 = valor.descripcion;
            link2 = valor.link;
          };

          if(index === 3)
          {
            nombre3 = valor.nombre;
            descripcion3 = valor.descripcion;
            link3 = valor.link;
          };

         
       });
    
  });



  //===================================================================================
  //=======================================titulo============================================
  
  if (document.querySelector("h2.claseHtml")) 
  {
     const h2ClaseHtml = document.querySelector("h2.claseHtml");
     document.body.removeChild(h2ClaseHtml);

     const newElement = document.createElement("h2");
     newElement.className = "claseHtml";
     newElement.textContent = tarjeta0;
     newElement.style.textAlign = "center";
     document.querySelector(".gridHijo1").appendChild(newElement);

  }
  else
  {
    const newElement = document.createElement("h2");
    newElement.className = "claseHtml";
    newElement.textContent =  tarjeta0;
    newElement.style.textAlign = "center";
    document.querySelector(".gridHijo1").appendChild(newElement);
     
  };

  //===================================================================================
  //=====================================imagen==============================================

  if (document.querySelector("img.claseHtmlImg")) 
  {
     const imgClaseHtml = document.querySelector("img.claseHtmlImg");
     document.body.removeChild(imgClaseHtml);

     const newElement = document.createElement("img");
     newElement.className = "claseHtmlImg";
     newElement.src = imagen0;
     newElement.height = 200;
     newElement.width = 600;
     document.querySelector(".gridHijo2").appendChild(newElement);

  }
  else
  {
     const newElement = document.createElement("img");
     newElement.className = "claseHtmlImg";
     newElement.src = imagen0;
     newElement.height = 240;
     newElement.width = 600;
     document.querySelector(".gridHijo2").appendChild(newElement);
     
  };

  //===================================================================================
  //===============================parrafoNode====================================================

  if (document.querySelector("p.claseHtmlNodo")) 
  {
     const pclaseHtmlNodo = document.querySelector("p.claseHtmlNodo");
     document.body.removeChild(pclaseHtmlNodo);

     const newElement = document.createElement("p");
     newElement.className = "claseHtmlNodo";
     newElement.textContent = nombre0 + ":\n" + descripcion0;
     document.querySelector(".gridHijo3").appendChild(newElement);

  }
  else
  {
     const newElement = document.createElement("p");
     newElement.className = "claseHtmlNodo";
     newElement.textContent = nombre0 + ":\n" + descripcion0;
     document.querySelector(".gridHijo3").appendChild(newElement);
     
  };

  //===================================================================================
  //===============================parrafoEstructura====================================================

  if (document.querySelector("p.claseHtmlEstructura")) 
  {
     const pclaseHtmlEstructura = document.querySelector("p.claseHtmlEstructura");
     document.body.removeChild(pclaseHtmlEstructura);

     const newElement = document.createElement("p");
     newElement.className = "claseHtmlEstructura";
     newElement.textContent = nombre1 + ":\n" + descripcion1;
     document.querySelector(".gridHijo4").appendChild(newElement);

  }
  else
  {
     const newElement = document.createElement("p");
     newElement.className = "claseHtmlEstructura";
     newElement.textContent = nombre1 + ":\n" + descripcion1;
     document.querySelector(".gridHijo4").appendChild(newElement);
     
  };

  //===================================================================================
  //===============================parrafoLink====================================================

  if (document.querySelector("p.claseHtmlLink")) 
  {
     const pclaseHtmlEstructura = document.querySelector("p.claseHtmlLink");
     document.body.removeChild(pclaseHtmlEstructura);

     const newElement = document.createElement("p");
     newElement.className = "claseHtmlLink";
     newElement.textContent = nombre2 + ":\n" + descripcion2;
     document.querySelector(".gridHijo5").appendChild(newElement);

  }
  else
  {
     const newElement = document.createElement("p");
     newElement.className = "claseHtmlLink";
     newElement.textContent = nombre2 + ":\n" + descripcion2;
     document.querySelector(".gridHijo5").appendChild(newElement);
     
  };

  //===================================================================================
  //===============================parrafoScript====================================================

  if (document.querySelector("p.claseHtmlScript")) 
  {
     const pclaseHtmlScript = document.querySelector("p.claseHtmlScript");
     document.body.removeChild(pclaseHtmlScript);

     const newElement = document.createElement("p");
     newElement.className = "claseHtmlScript";
     newElement.textContent = "";
     document.querySelector(".gridHijo6").appendChild(newElement);

  }
  else
  {
     const newElement = document.createElement("p");
     newElement.className = "claseHtmlScript";
     newElement.textContent = "";
     document.querySelector(".gridHijo6").appendChild(newElement);
     
  };

  //=======================================================================================
 //=======================================================================================


};