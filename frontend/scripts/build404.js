import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

// Get the directory name equivalent to __dirname in CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Adjust this path if your build directory is different
// For Vite, it's usually 'dist'
// For Create React App, it's usually 'build'
const buildDir = path.join(__dirname, '../dist'); 

try {
  // Make sure the build directory exists
  if (!fs.existsSync(buildDir)) {
    console.error(`Build directory ${buildDir} does not exist!`);
    process.exit(1);
  }

  // Make sure index.html exists
  const indexPath = path.join(buildDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error(`index.html file not found at ${indexPath}`);
    process.exit(1);
  }

  // Copy index.html to 404.html
  fs.copyFileSync(
    indexPath,
    path.join(buildDir, '404.html')
  );

  console.log('✅ 404.html was created successfully!');
} catch (error) {
  console.error('Error creating 404.html:', error);
  process.exit(1);
}