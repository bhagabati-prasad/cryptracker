const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');

// import routes
const { UserRoutes } = require('./routes');

// database connection --
const connectDB = require('./config/db_conn');
connectDB();

// -- apply middlewares --
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));
app.use(cookieParser());
// morgan for logging every request status on console
app.use(morgan('dev'));

// serve static folder to serve files
app.use(express.static(path.resolve(__dirname, '../client/build')));

// ROUTES --
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});

// API Routes
app.use('/api/user', UserRoutes);

// production build for reactjs --
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});

module.exports = app;
