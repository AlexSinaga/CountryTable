<template>
  <div class="table">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
      <div class="col">{{ country_id }}</div>
      <div class="col">{{ country }}</div>
      <div class="col">{{ last_update }}</div>
      <div class="col">
        <div class="d-grip gap-2">
          <button type="button" class="btn btn-primary btn-sm">Update</button>
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
