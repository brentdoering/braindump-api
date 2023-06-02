const express = require('express');
const port = 3000;

const app = express();

const ideas = [
    {
      id: 1,
      text: 'Give Sherwood his meds',
      tag: 'Child',
      username: 'BrentMan',
      date: '2023-05-07',
    },
    {
      id: 2,
      text: 'Buy More Oat Milk',
      tag: 'Shopping',
      username: 'NickMan',
      date: '2023-05-15',
    },
    {
      id: 3,
      text: 'Figure out when Casa Bonita opens and make reservations',
      tag: 'Life',
      username: 'BrentMan',
      date: '2023-05-12',
    },
  ];

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

// Get all ideas
app.get('/api/ideas', (req, res) => {
    res.json({ success: 'true', data: ideas });
});

// Get all ideas
app.get('/api/ideas/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);

    if (!idea) {
       return res.status(404).json({ success: 'false', error: 'Resource not found'});
    }

    res.json({ success: 'true', data: idea });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));