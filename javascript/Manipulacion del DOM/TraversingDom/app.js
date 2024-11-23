// Selecciona el elemento con el id 'parent' y lo guarda en la variable 'parent'
const parent = document.getElementById('parent');
console.log(parent); // Imprime el elemento padre en la consola

// Obtiene todos los elementos hijos directos del elemento 'parent'
const children = parent.children;
console.log(children); // Imprime una colección HTML con los elementos hijos de 'parent'

// Obtiene el primer hijo elemento (nodo tipo elemento) de 'parent'
const firstChild = parent.firstElementChild;
console.log(firstChild); // Imprime el primer elemento hijo

// Obtiene el último hijo elemento (nodo tipo elemento) de 'parent'
const lastChild = parent.lastElementChild;
console.log(lastChild); // Imprime el último elemento hijo

// Obtiene el elemento hermano anterior de 'parent' (nodo tipo elemento)
const previousSibling = parent.previousElementSibling;
console.log(previousSibling); // Imprime el hermano anterior de 'parent', si existe

// Obtiene el elemento hermano siguiente de 'parent' (nodo tipo elemento)
const nextSibling = parent.nextElementSibling;
console.log(nextSibling); // Imprime el hermano siguiente de 'parent', si existe

// Selecciona el primer elemento `<li>` encontrado en el documento
const newChildren = document.querySelector('li');
console.log(newChildren); // Imprime el primer elemento `<li>` encontrado

// Obtiene el nodo padre del elemento 'newChildren'
const newParent = newChildren.parentNode;
console.log(newParent); // Imprime el nodo padre de 'newChildren'

// Obtiene el elemento padre del elemento 'newChildren'
const newParent2 = newChildren.parentElement;
console.log(newParent2); // Imprime el elemento padre de 'newChildren'

// Encuentra el ancestro más cercano del elemento 'newChildren' que coincida con el selector 'menu'
const GrandParent = newChildren.closest('menu');
console.log(GrandParent); // Imprime el ancestro más cercano con el tag `menu`, si existe
