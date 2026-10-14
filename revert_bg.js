import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (file === 'ScrollAnimation.tsx') return;

  // Revert the glassmorphism changes made by replace_bg.js
  content = content.replace(/bg-black\/40 backdrop-blur-lg/g, 'bg-black');
  content = content.replace(/bg-black\/30 backdrop-blur-md/g, 'bg-zinc-950');
  
  // Revert the modal overlays
  content = content.replace(/bg-black\/60/g, 'bg-black/90');

  fs.writeFileSync(filePath, content);
});
console.log("Reverted the bulk glassmorphism changes!");
