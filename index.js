/**
 * index.js
 * 
 * @author Anthony Loukinas <anthony.loukinas@gmail.com>
 * 
 * Application Entrypoint
 */

/**
 * Dependencies
 */
const express = require('express');
const path = require('path');
const fs = require('fs');

/**
 * Initialize Express Application
 */
const app = express();

/**
 * Express Configuration
 * 
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('./public'));

/**
 * Express Routes
 */
app.get('/', (req, res) => {
    res.render('Index');
});

/**
 * Run Express Application
 */
app.listen(3000, () => console.info('BMWMaintenanceTool is running *:3000'));