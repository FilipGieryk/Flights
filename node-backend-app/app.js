const express = require(`express`);
const mongose = require('mongoose');

const app = express ();
const bodyParser = require('body-parser');

const productRoutes = require('./api/routes/flights');
const orderRoutes = require('./api/routes/orders');

mongose.connect('mongodb+srv://Midget:' + process.env.MONGO_ATLAS_PW + '@cluster0.h98g88c.mongodb.net/?retryWrites=true&w=majority'
)


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
if (req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
}
next();
});

app.use('/flights', productRoutes);
app.use('/orders', orderRoutes);


app.use((req,  res, next) =>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


module.exports = app;

