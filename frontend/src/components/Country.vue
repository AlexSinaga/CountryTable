<template>
  <div class="table">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
      <div class="col">{{ country_id }}</div>
      <div class="col">{{ country }}</div>
      <div class="col">
        <input v-model="edit_country" type="text" placeholder="Edit Country Name ...">
      </div>
      <div class="col">
        <div class="d-grip gap-2">
          <button @click="update(country_id)" type="button" class="btn btn-primary btn-sm">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Country",
  props: {
    country_id: Number,
    country: String,
    last_update: String,
  },
  data() {
    return {
      edit_country:""
    }
  },
  methods: {
    update(country_id){
      this.$emit("update", country_id, this.edit_country);
    },
  }
};
</script>

<style>
  .cmd-btn{
    margin-right: 1rem;
  }
  .row{
    align-items: center;
  }
</style>
