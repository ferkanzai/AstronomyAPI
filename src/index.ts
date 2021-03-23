require('dotenv').config();

const app = require('./app');
// require('./configs/db');

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
