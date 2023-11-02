const { Router } = require('express');

const dolarValues = require('./dolarValues');

const router = Router();

router.get('/', (req, res) => {
    const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>BCRA Api</title>
        <style>
        body {
            background-color: #F9F9F9;
            color: #004A94;
            font-family: ui-serif;
        }
        p{
            color:#707070;
            padding:2px;
        }
        li{
            list-style: none;
            box-shadow: 0px 0px 2px #3E3E3E;
            border-radius:6px;
            margin:10px 0px;
            background-color:white;
            padding:5px 10px;
        }
        a{
            color:#3E3E3E;
            text-decoration:none;
        }
        ul {
            padding: 0px;
        }
      </style>
      </head>
      <body>
        <h1>BCRA API</h1>
        <p> Api no oficial con datos en tiempo real del Banco Central de la Republica Argentina </p>
        <p> Cada enlace lleva al endpoint que necesitarás llamar desde tu front end</p>
        <hr/>
        <h2>Endopoints para obtener los Valores del dolar</h2>
        <ul>
        <li>
        <a href='/usd/blue'> Dolar blue </a>
        <p>https://estadisticas-middle-server-bcra.onrender.com/usd/blue</p>
        </li>
        <li>
        <a href='/usd/oficial'> Dolar oficial </a>
        <p>https://estadisticas-middle-server-bcra.onrender.com/usd/oficial</p></li>
        <li>
        <a href='/usd/minorista'> Dolar minorista </a>
        <p>https://estadisticas-middle-server-bcra.onrender.com/usd/minorista</p></li>
        </ul>
      </body>
    </html>
  `;
    res.send(htmlContent);
});

router.use('/usd', dolarValues);


module.exports = router;