function crearArrayImagenes() {
  const arrayImagenes = [];
  for (let i = 1; i <= 30; i++) {
    arrayImagenes.push(`img${i}`);
  }
  return arrayImagenes;
}

function agregarImagenesAlDiv() {
  const imagenes = crearArrayImagenes();
  const contenedores = document.querySelectorAll('[id^="cont"]');
  let index = 0;

  contenedores.forEach((contenedor) => {
    for (let i = index; i < index + 10; i++) {
      if (i >= imagenes.length) break;
      const imgElement = document.createElement('img');
      imgElement.src = `./img/${imagenes[i]}.jpeg`;
      contenedor.appendChild(imgElement);
    }
    index += 10;
  });
}

// Llamar a la función para agregar las imágenes a los divs
agregarImagenesAlDiv();

