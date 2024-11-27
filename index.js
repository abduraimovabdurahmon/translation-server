const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();


app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));  

app.use(express.json());

async function translate(text, from, to) {
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURI(text)}`;
  
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error("Translation failed");
      }
  
      const json = await response.json();
  
      if (
        Array.isArray(json) &&
        Array.isArray(json[0]) &&
        Array.isArray(json[0][0])
      ) {
        const translated = json[0].map((item) => item[0]).join("");
        return translated;
      } else {
        throw new Error("Unexpected response format from Translation API");
      }
    } catch (error) {
      console.error("Translation error: ", error);
      return "";
    }
}

app.get('/translate', async (req, res) => {
    const { text, from, to } = req.query; // Access query parameters here
    if (!text || !from || !to) {
      return res.status(400).json({ error: 'Missing required parameters (text, from, to)' });
    }
    const translated = await translate(text, from, to);
    res.json({ translated });
});

// example: http://localhost:3000/translate?text=hello&from=en&to=uz

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
