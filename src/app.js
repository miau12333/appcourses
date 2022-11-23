const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./utils/database');
const handleError = require('./middlewares/error.middlerware.js');
const initModels = require('./models/initModels');
const {usersRoutes, coursesRoutes} = require('./Routes');

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

initModels();

db.authenticate()
    .then(() => console.log("RUNNING"))
    .catch((error) => console.log(error));
db.sync({force: false})
    .then(() => console.log("Sincronizada"))
    .catch((error) => console.log(error));

app.get("/", (req, res) => {
    res.json({message: "This is a serve"});
});

app.use("/api/v1", usersRoutes);
app.use("/api/v1", coursesRoutes);

app.use(handleError);

module.exports = app;