function handleSearch(event) {
  event.preventDefault(); // stop page reload

  const input = document.getElementById("searchInput");

  if (!input) {
    alert("Search input not found.");
    return false;
  }

  const query = input.value.trim().toLowerCase();

  if (query === "") {
    alert("Please enter a search term.");
    return false;
  }

  if (query.includes("tour") || query.includes("ocean") || query.includes("diving")||query.includes("island") || query.includes("cruise")) {
    window.location.href = "services.html";
  } 
  else if (query.includes("book")) {
    window.location.href = "booking.html";
  } 
  else if (query.includes("contact")) {
    window.location.href = "contact.html";
  } 
  else if (query.includes("gallery")) {
    window.location.href = "gallery.html";
  } 
  else {
    alert("No results found for: " + query);
  }

  return false;
}
