const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint para convertir COP a USD
app.post('/api/convert/cop-to-usd', async (req, res) => {
  try {
    const { amount } = req.body;
    
    if (!amount || isNaN(amount)) {
      return res.status(400).json({ error: 'Cantidad inválida' });
    }

    // Usando una tasa de cambio aproximada (en producción usarías una API real)
    const exchangeRate = 0.00025; // 1 COP = 0.00025 USD aproximadamente
    const result = amount * exchangeRate;
    
    res.json({
      from: 'COP',
      to: 'USD',
      amount: amount,
      result: parseFloat(result.toFixed(4)),
      rate: exchangeRate
    });
  } catch (error) {
    res.status(500).json({ error: 'Error en la conversión' });
  }
});

// Endpoint para convertir metros a centímetros
app.post('/api/convert/meters-to-cm', (req, res) => {
  try {
    const { amount } = req.body;
    
    if (!amount || isNaN(amount)) {
      return res.status(400).json({ error: 'Cantidad inválida' });
    }

    const result = amount * 100;
    
    res.json({
      from: 'metros',
      to: 'centímetros',
      amount: amount,
      result: result
    });
  } catch (error) {
    res.status(500).json({ error: 'Error en la conversión' });
  }
});

// Endpoint para convertir kilos a libras
app.post('/api/convert/kg-to-lbs', (req, res) => {
  try {
    const { amount } = req.body;
    
    if (!amount || isNaN(amount)) {
      return res.status(400).json({ error: 'Cantidad inválida' });
    }

    const result = amount * 2.20462;
    
    res.json({
      from: 'kilogramos',
      to: 'libras',
      amount: amount,
      result: parseFloat(result.toFixed(2))
    });
  } catch (error) {
    res.status(500).json({ error: 'Error en la conversión' });
  }
});

// Endpoint para convertir km/h a mph
app.post('/api/convert/kmh-to-mph', (req, res) => {
  try {
    const { amount } = req.body;
    
    if (!amount || isNaN(amount)) {
      return res.status(400).json({ error: 'Cantidad inválida' });
    }

    const result = amount * 0.621371;
    
    res.json({
      from: 'km/h',
      to: 'mph',
      amount: amount,
      result: parseFloat(result.toFixed(2))
    });
  } catch (error) {
    res.status(500).json({ error: 'Error en la conversión' });
  }
});

// Endpoint de salud
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Servidor funcionando correctamente' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});