// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.

async function init() {
  // Import the needed libraries.
  const [{ InfoWindow }, { AdvancedMarkerElement }] = await Promise.all([
    google.maps.importLibrary("maps"),
    google.maps.importLibrary("marker"),
  ]);

  // Get the map element and the inner map from it.
  const mapElement = document.querySelector("gmp-map");
  const innerMap = mapElement.innerMap;

  // Get the center of the map.
  const center = mapElement.center;

  // Create the info window content.
  const heading = document.createElement("h1");
  heading.textContent = "서울시청";

  const content = document.createElement("div");

  const infoParagraph = document.createElement("p");
  infoParagraph.textContent = `서울특별시 중구 세종대로 110 (태평로1가)`;

  content.appendChild(infoParagraph);

  const link = document.createElement("a");
  link.href = "https://en.wikipedia.org/w/index.php?title=Uluru";
  link.textContent = "https://en.wikipedia.org/w/index.php?title=Uluru";
  link.target = "_blank";
  content.appendChild(link);

  // Create the info window.
  const infoWindow = new InfoWindow({
    headerContent: heading,
    content,
    ariaLabel: "서울시청",
    maxWidth: 500, // Set max width (optional).
  });

  // Create the marker.
  const marker = new AdvancedMarkerElement({
    position: center,
    map: innerMap,
    title: "서울시청",
    gmpClickable: true,
  });

  // Open the info window when the map loads.
  infoWindow.open({
    anchor: marker,
    map: innerMap,
  });

  // Open the info window when the marker is clicked.
  marker.addEventListener("gmp-click", () => {
    infoWindow.open({
      anchor: marker,
      map: innerMap,
    });
  });
}

void init();
