const express = require('express');
const app = express ();

app.get ('/user', (req, res) => {
    res.send({"id": 33, "name": "Phallen Yeng"});

});
app.listen(5000, () => {
    console.log('Express Server is Running at Port No 5000..');

});
