
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Matha pitha Mamitha');
});

// Start the server only when running this file directly
if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
  });
}

export default app;
