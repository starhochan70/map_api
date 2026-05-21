async function init() {
  // Import the needed libraries.
  await google.maps.importLibrary("maps");

  // Access the map.
  const mapElement = document.querySelector("gmp-map");
  // Access the underlying map object.
  const innerMap = mapElement.innerMap;

  console.log({ mapElement, innerMap });
}

void init();
