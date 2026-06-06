import fs from 'fs';
import path from 'path';

function findWebp(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if (f === 'node_modules' || f.startsWith('.')) continue;
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      findWebp(full);
    } else if (f.endsWith('.webp') || f.includes('logo')) {
      console.log('Found:', full);
    }
  }
}

findWebp('.');

