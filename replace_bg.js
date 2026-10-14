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
  
  // Skip ScrollAnimation.tsx
  if (file === 'ScrollAnimation.tsx') return;

  // Replace opaque backgrounds with glassmorphism
  content = content.replace(/\bbg-black\b(?!\/)/g, 'bg-black/40 backdrop-blur-lg');
  content = content.replace(/\bbg-zinc-950\b(?!\/)/g, 'bg-black/30 backdrop-blur-md');
  content = content.replace(/\bbg-zinc-900\b(?!\/)/g, 'bg-black/30 backdrop-blur-md');
  
  // Lighten the modal overlays slightly to let the animation show more
  content = content.replace(/bg-black\/(80|85|90|95)/g, 'bg-black/60');
  content = content.replace(/bg-zinc-950\/(80|85|90|95)/g, 'bg-black/60');

  fs.writeFileSync(filePath, content);
});
console.log("Updated all components to glassmorphism!");
