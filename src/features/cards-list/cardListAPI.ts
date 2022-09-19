// A mock function to mimic making an async request for data
const URL = "data.json";

export function fetchCards() {
  return fetch(URL, { headers: { "Content-Type": "application/json" } })
    .then((response) => response.json())
    .then((d) => d["Brastlewark"]);
}
