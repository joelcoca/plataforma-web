class Pelicula {
    constructor(titulo, descripcion, genero) {
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.genero = genero;
    }
  }
  var peliculas = new Array();
  
  function addRow(titulo, descripcion, genero)
  {
           if (!document.getElementsByTagName) return;
           tabBody=document.getElementsByTagName("tbody").item(0);
           row=document.createElement("tr");
           cell1 = document.createElement("td");
           cell2 = document.createElement("td");
           cell3 = document.createElement("td");
           textnode1=document.createTextNode(titulo);
           textnode2=document.createTextNode(descripcion);
           textnode3=document.createTextNode(genero);
           cell1.appendChild(textnode1);
           cell2.appendChild(textnode2);
           cell3.appendChild(textnode3);
           row.appendChild(cell1);
           row.appendChild(cell2);
           row.appendChild(cell3);
           tabBody.appendChild(row);
  }
  
  function add()
  {
      var elements = document.getElementById("my-form").elements;
      var myList = new Array();
  
      for (var i = 0, element; element = elements[i++];) {
          if (element.type === "text"){
              myList.push(element.value);
          }
      }
      peliculas.push(new Pelicula(myList[0], myList[1], myList[2]));
      addRow(peliculas[0].titulo, peliculas[0].descripcion, peliculas[0].genero);
      peliculas = new Array();
  }