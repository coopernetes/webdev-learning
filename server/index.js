import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname, '..')));

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});