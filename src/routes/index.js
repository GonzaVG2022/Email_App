const express = require('express');
const router = express.Router();
const sendEmail = require('../utils/sendEmail');
// colocar las rutas aquí
router.get('/', (req, res) => {
    res.send("Welcome to express");
});
router.post('/emails/sayhi', async ( req, res ) => {
    await sendEmail({
        to:"gonzagargantini20@gmail.com",
        subject:"Porbando Email",
        html:`
            <h1 style="color:red">Hola! :D</h1>
            <p>portafolio html</p>
        `
    })
    return res.json({message: "Email sent"});
})
router.post('/emails/contact', async( req, res) =>{
    const { name, email, phone, message } = req.body;
    await sendEmail({
        to:"gonzagargantini20@gmail.com",
        subject:"Email del Portafolio",
        html:`<h1>${name}, te escribio desde tu portafolio!</h1>
        <p>${message}</p>
        <ul>
        <li><b>Email</b>${email}</li>
        <li><b>Telefono</b>${phone}</li>
        </ul>`
        
    })
    return res.json({message: "Email sent successfully"});
})

module.exports = router;
