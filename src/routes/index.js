const { Router } = require('express');

const dolarValues = require('./dolarValues');

const router = Router();

router.get('/', (req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
<html>

<head>
<title>BCRA API - Banco Central de la Republica Argentina</title>
<meta name="title" content="BCRA API - Banco Central de la Republica Argentina">
<meta name="description" content="Un servidor intermedio que permite solicitudes http a un sitio de estadisticas no oficiales.">

<meta property="og:type" content="website">
<meta property="og:url" content="https://estadisticas-middle-server-bcra.onrender.com/">
<meta property="og:title" content="BCRA API - Banco Central de la Republica Argentina">
<meta property="og:description" content="Un servidor intermedio que permite solicitudes http a un sitio de estadisticas no oficiales.">
<meta property="og:image" content="http://www.opengraphgenerator.com/images/open-graph.jpg">

<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://estadisticas-middle-server-bcra.onrender.com/">
<meta property="twitter:title" content="BCRA API - Banco Central de la Republica Argentina">
<meta property="twitter:description" content="Un servidor intermedio que permite solicitudes http a un sitio de estadisticas no oficiales.">
<meta property="twitter:image" content="http://estadisticas-middle-server-bcra.onrender.com/images/open-graph.jpg">
    <style>
        body {
            background-color: #F9F9F9;
            color: #004A94;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            margin: 0px;
        }

        p {
          /*   color: #707070; */
            padding: 2px;
        }

        h1{
            margin: 0px;
            color: #ffffff;
        }
        li {
            list-style: none;
            box-shadow: 0px 0px 2px #3E3E3E;
            border-radius: 6px;
            margin: 10px 0px;
            background-color: white;
            padding: 5px 10px;
        }

        a {
            color: #3E3E3E;
            text-decoration: none;
        }

        section {
            padding-left: 5vw;
            padding-right: 5vw;
        }

        ul {
            padding: 0px;
        }
        header{
            padding-left: 5vw;
            padding-right: 5vw;
            padding-top: 5vh;
            padding-bottom: 5vh;
            background-color: #3d6286;
            color: #e9e9e9;
        }
        small{
            color: #e7e7e7;
            letter-spacing: 0.2;
        }
    </style>
</head>

<body>
    <header>
        <h1>BCRA API</h1>
        <p> Api <ins>no oficial</ins> con datos en tiempo real del <strong>Banco Central de la Republica Argentina</strong> </p>
        <small> Este es un servidor intermedio que permite solicitudes http a un sitio de estadisitcas no oficiales. El sitio recolecta datos de diferentes medios y los va actualizando a diario generando un response con valor y fecha de la ultima actualización. Cada enlace lleva al endpoint que necesitarás llamar desde tu front end</small>
    </header>
    <section>
        <h2>Endpoints para obtener los Valores del dolar</h2>
        <ul>
            <li>
                <a href='/usd/blue'> Dolar blue </a>
                <p>url => https://estadisticas-middle-server-bcra.onrender.com/usd/blue</p>
            </li>
            <li>
                <a href='/usd/oficial'> Dolar oficial </a>
                <p>https://estadisticas-middle-server-bcra.onrender.com/usd/oficial</p>
            </li>
            <li>
                <a href='/usd/minorista'> Dolar minorista </a>
                <p>https://estadisticas-middle-server-bcra.onrender.com/usd/minorista</p>
            </li>
        </ul>
    </section>
</body>

</html>
  `;
  res.send(htmlContent);
});

router.use('/usd', dolarValues);


module.exports = router;