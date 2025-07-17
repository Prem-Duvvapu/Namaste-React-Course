const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

const { resList } = require('./mockData.cjs.js');

app.use(cors()); // Allow requests from frontend

app.get('/api/restaurants', (req, res) => {
    res.json(resList);
});

app.get('/api/restaurants/:resId', (req,res) => {
    // console.log("reached here");
    // console.log(req.params);
    const { resId } = req.params;
    const restaurant = resList.find((res) => res.id === resId);

    // console.log(restaurant);

    if (restaurant) {
        res.json(restaurant);
    } else {
        res.status(404).json({ error: "Restaurant not found"});
    }
});

app.listen(PORT, () => {
    console.log(`Mock API running at http://localhost:${PORT}`);
});
