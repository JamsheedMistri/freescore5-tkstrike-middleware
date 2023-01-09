require('dotenv').config();
const express = require('express');
const helmet = require('helmet');

// Routers
const venueManagementRouter = require('./routes/venueManagement');
const eventsListenerRouter = require('./routes/eventsListener');

// Middleware
const errorHandler = require('./middleware/errorHandler');

// Setup
const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Linkers
app.use('/venue-management', venueManagementRouter);
app.use('/events-listener', eventsListenerRouter);

// Unhandled errors
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () =>
	console.log(`freescore5-tkstrike-middleware started on port ${port}.`)
);
