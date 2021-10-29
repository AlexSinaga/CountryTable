module.exports = app => {
    const Countries = require("../controllers/countries.controller.js");

    var router = require("express").Router();

    // Create a new Countries
    router.post("/", Countries.create);

    // Retrieve all Countries
    router.get("/", Countries.findAll);

    // Retrieve all published Countries
    router.get("/published", Countries.findAllPublished);

    // Retrieve a single Countries with id
    router.get("/:country_id", Countries.findOne);

    // Update a Countries with id
    router.put("/:country_id", Countries.update);

    // Delete a Countries with id
    router.delete("/:country_id", Countries.delete);

    // Delete all published Countries
    router.delete("/", Countries.deleteAll);

    app.use('/api/countries', router);
}
