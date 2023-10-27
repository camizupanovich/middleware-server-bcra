const axios = require('axios');
const express = require('express');
const router = express.Router();
require('dotenv').config();
const { BCRA_API_URL } = process.env;

// middleware
const addBearerToken = require('../authmiddleware');

// routes

router.get('/blue', async (req, res) => {
    try {
        const response = await axios.get(`${BCRA_API_URL}/usd`, addBearerToken);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los datos del BCRA.');
    }
});
router.get('/oficial', async (req, res) => {
    try {
        const response = await axios.get(`${BCRA_API_URL}/usd_of`, addBearerToken);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los datos del BCRA.');
    }
});
router.get('/minorista', async (req, res) => {
    try {
        const response = await axios.get(`${BCRA_API_URL}/usd_of_minorista`, addBearerToken);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los datos del BCRA.');
    }
});

module.exports = router;
