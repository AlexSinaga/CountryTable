import axios from "axios";

export async function getCountry(){
  return await axios.get("http://localhost:8000/api/countries/");
}

export async function deleteCountry(){
  return await axios.delete("http://localhost:8000/api/countries/")
}

export async function addCountry(country, last_update=new Date()){
  return await axios.post("http://localhost:8000/api/countries/", {
    country: country,
    last_update: last_update
  });
}

export async function updateCountry(country_id, country, last_update=new Date()){
  return await axios.put("http://localhost:8000/api/countries/" + country_id, {
    country: country,
    last_update: last_update
  });
}