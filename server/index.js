const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Load the data from the JSON file
const dataPath = path.join(__dirname, 'unhas_mapping.json'); // Update the path here
const rawData = fs.readFileSync(dataPath);
const jsonData = JSON.parse(rawData);

// API endpoint to get all data
app.get('/api/data', (req, res) => {
  res.json(jsonData);
});

// API endpoint to search data by name
app.get('/api/search', (req, res) => {
  const { query } = req.query;
  const filteredData = jsonData.filter((item) => item.nama.toLowerCase().includes(query.toLowerCase()));
  res.json(filteredData);
});

app.get('/api/fakultas/:fakultasId', (req, res) => {
  const fakultasId = req.params.fakultasId;
  const fakultasInfo = fakultasData.find(fakultas => fakultas.id === fakultasId);

  if (!fakultasInfo) {
    return res.status(404).json({ error: 'Fakultas not found' });
  }

  res.json(fakultasInfo);
});

app.get('/api/gedung', (req, res) => {
  const { fakultasId } = req.query;
  const gedungData = jsonData.find(item => item.type === 'table' && item.name === 'gedung');
  const gedungItems = gedungData ? gedungData.data.filter(item => item.id_fakultas === fakultasId) : [];
  res.json(gedungItems);
});

app.get('/api/gedung/:fakultasId', (req, res) => {
  const { fakultasId } = req.params;
  const filteredGedung = jsonData.filter(
    (item) => item.type === 'table' && item.name === 'gedung' && item.data.id_fakultas === fakultasId
  );
  if (filteredGedung.length > 0) {
    const gedungData = filteredGedung[0].data;
    const ruanganData = jsonData.find((item) => item.type === 'table' && item.name === 'ruangan').data;

    const gedungWithRuangan = gedungData.map((gedung) => {
      const ruanganByGedung = ruanganData.filter((ruangan) => ruangan.id_gedung === gedung.id_gedung);
      return { ...gedung, ruangan: ruanganByGedung };
    });

    res.json(gedungWithRuangan);
  } else {
    res.json([]);
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
