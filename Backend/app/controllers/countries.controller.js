const db = require("../models");
const Countries = db.countries;
const Op = db.Sequelize.Op;

// Create and Save a new Country
exports.create = (req, res) => {
    // Validate request
    if (!req.body.country){
        res.status(400).send({
            message: "ID can\'t be empty!"
        });
        return;
    }

    // Create a Country
    const countries = {
        // country_id: req.body.country_id,
        country: req.body.country,
        last_update: req.body.last_update ? req.body.last_update : false
    };

    // Save Country in the db
    Countries.create(countries)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ 
                message:
                    err.message || "Some error occurred while creating the Countries."
            });
        });
};

// Retrieve all Countries from the database.
exports.findAll = (req, res) => {
    const country_id = req.query.country_id;
    var condition = country_id ? { country_id: { [Op.iLike]: `%${country_id}` } } : null;

    Countries.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Countries."
            });
        });
};

// Find a single Countries with an id
exports.findOne = (req, res) => {
    const country_id = req.params.country_id;

    Countries.findByPk(country_id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tutorial with id=${country_id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Countries with id= " + country_id
            });
        });
};

// Update a Countries by the id in the request
exports.update = (req, res) => {
    const country_id = req.params.country_id;

    Countries.update(req.body, {
        where: { country_id: country_id }
    })
        .then(num => {
            if (num == 1){
                res.send({
                    message: "Countries was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Countries with id=${country_id}. Maybe Countries was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Countries with id=" + country_id
            });
        });
};

// Delete a Countries with the specified id in the request
exports.delete = (req, res) => {
    const country_id = req.params.country_id;

    Countries.destroy({
        where: { country_id: country_id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Countries was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Countries with id=${country_id}. Maybe Countries was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Countries with id= " + country_id
            });
        });
};

// Delete all Countries from the database.
exports.deleteAll = (req, res) => {
    Countries.destroy({
        where: {},
        truncate: true,
        cascade: true
    })
        .then(nums => {
            res.send({ message: `All Countries were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all countries."
            });
        });
};

// Find all published Countries
exports.findAllPublished = (req, res) => {
    Countries.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving countries."
            });
        });
};
