const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const db = require("./app/models");
db.sequelize.sync();

var corsOptions = {
    origin: 'https://localhost:8081'
};

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/json
app.use(bodyParser.urlencoded({ extended: true }));

// // address, city, customer, payment, rental, staff, store
// (async() => {
//     try { 
//         await db.query(`DELETE FROM address`);
//         await db.query(`DELETE FROM city`);
//         await db.query(`DELETE FROM customer`);
//         await db.query(`DELETE FROM payment`);
//         await db.query(`DELETE FROM rental`);
//         await db.query(`DELETE FROM staff`);
//         await db.query(`DELETE FROM store`);
//     } catch (error) {
//         console.log(error);
//     }
// })();

// route
app.get("/", (req, res) => {
    res.json({ message: ' "Welcome to LXDragon application"'});
});

require("./app/routes/countries.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});