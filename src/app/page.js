import Map from "../components/Map";

async function fetchPotholes() {
  const apiUrl = "";
  let potholes = [];

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Parse the data to extract latitude, longitude, and descriptions
    potholes = data.data.map((item) => ({
      latitude: parseFloat(item[14]), // Replace with the correct index for latitude
      longitude: parseFloat(item[15]), // Replace with the correct index for longitude
      description: item[8] || "Pothole", // Replace with the correct index for description
    }));
  } catch (error) {
    console.error("Error fetching pothole data:", error);
  }

  return potholes;
}

export default async function Home() {
  const potholes = await fetchPotholes();

  return (
    <div>
      <h1>Pothole Map</h1>
      <Map potholes={potholes} />
    </div>
  );
}
