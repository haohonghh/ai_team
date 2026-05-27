const express = require('express');
const cors = require('cors');
const loginRouter = require('./routes/login');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', loginRouter);

app.get('/', (req, res) => {
  res.json({ message: 'AI Team Login Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});