const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const routes = require('./src/routes');

//Instantiate App
const app = express();
const PORT = process.env.PORT || 3000;

//Apply Middleware
app.set('trust proxy', true);
app.use(cors());
app.use(morgan(':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms - :date[clf]'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Root Health check
app.get('/', (req, res, next) => {
    res.status(200).json({
        status: 200,
        data: {
            message: "SharkOJ server is live 🔥",
        },
    });
});

//Apply routes
app.use('/', routes);

//Error Handler
app.use((err, req, res, next) => {
    const e_status = err.status || 500;
    const e_message = err.message || `Internal server error`;
    res.status(e_status).json({
        status: e_status,
        data: {
            message: e_message,
        }
    });
    if(process.env.NODE_ENV !== 'production'){
        console.error(err);
    }
});

//Route not found
app.use((req, res, next) => {
    res.status(400).json({
        status: 404,
        data:{
            message: `Route you are looking for does not exist or feature not implemented`,
        }
    });
});

//Listen for client
app.listen(PORT, () => {
    console.log(`Server running @:${PORT} - ${new Date().toISOString()}`);
});

//export for testing
module.exports = app;