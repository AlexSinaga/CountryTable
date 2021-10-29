<template>
  <div class="container">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <input v-model="newName" type="text" placeholder="Country Name ...">
    <button @click="addNewCountry">Submit</button>
    <button @click="deleteCountryAll">Delete All</button>
    <Country
      v-for="(country, index) in countries"
      :key="index"
      :country_id="country.country_id"
      :country="country.country"
      :last_update="country.last_update"
    />
  </div>
</template>

<script>
import Country from "./components/Country.vue";
import {getCountry,deleteCountry,addCountry} from "./http-common.js"
export default {
  name: "App",
  components: {
    Country,
  },
  data() {
    return {
      countries: [],
      newName: "",
    };
  },
  methods: {
    async getCountryAll(){
      try{
        let res = await getCountry();
        this.countries = res.data;
        console.log(this.countries);
      } catch (e){
        console.log(e);
      }
    },
    async deleteCountryAll(){
      try{
        await deleteCountry();
        this.getCountryAll();
      } catch (e){
        console.log(e);
      }
    },
    async addNewCountry(){
      try{
        let body = this.newName;
        await addCountry(body);
        this.getCountryAll();
      } catch (e){
        console.log(e);
      }
    }
  },
  mounted() {
    this.getCountryAll();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
