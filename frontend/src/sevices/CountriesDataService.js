import http from "../http-common";

class CountriesDataService {
  getAll() {
    return http.get("/countries");
  }

  get(country_id) {
    return http.get(`/countries/${country_id}`);
  }

  create(data) {
    return http.post("/countries", data);
  }

  update(country_id, data) {
    return http.put(`/countries/${country_id}`, data);
  }

  delete(country_id) {
    return http.delete(`/countries/${country_id}`);
  }

  deleteAll() {
    return http.delete(`/countries`);
  }

  findBycountry(country) {
    return http.get(`/countries?country=${country}`);
  }
}

export default new TutorialDataService();