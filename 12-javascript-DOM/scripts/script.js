// 1. Dessinez le modèle par arborescence du DOM (Document Object Model) de index.html


// Éxecuter le Javascript après la création du DOM
window.onload = () => {
  // 2. Remplacez le texte du titre par "DOMaine des Arbres"
  document.getElementById("titre").innerHTML = "DOMaine des Arbres";

  
  // 3. Changez l'ordre de présentation des images avec flex

  var element = document.querySelector(".container");
  element.style["flex-direction"] = "column-reverse";

  // 4. Ajoutez le point "Terre" à la liste d'éléments
  var newElement = document.createElement("li");
  
  var newText = document.createTextNode("Terre");
  newElement.appendChild(newText);

  var position = document.getElementsByTagName("ul")[0];
  position.appendChild(newElement);

    // 5. Ajoutez l'attribut href manquant à la balise lien de l'image d'arbre.
  // avec la valeur  href="https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"
  // Avec le sélecteur suivant, utilisez un "accès par relation" pour faire votre modification.
  const imageSansLien = document.querySelectorAll(
    'img[src="https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"]'
  )[0];
  
  imageSansLien.parentNode.setAttribute("href","https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg");

  // 6. Modifiez la police du texte pour toutes les éléments de la liste

  const elementListe = document.getElementsByTagName("li");
  
 for (const element of elementListe) {
  element.style["font-family"] = "Verdana";
 } 

};
