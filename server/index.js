import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Get the folder to serve from command line arguments, default to "website"
const folderToServe = process.argv[2] || "website";

// Serve static files from the specified directory
app.use(express.static(path.join(__dirname, "..", folderToServe)));

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`Serving folder: ${folderToServe}`);
});
