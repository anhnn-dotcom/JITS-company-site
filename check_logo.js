import fs from 'fs';
try {
  const stats = fs.statSync('public/logo.png');
  console.log('Size:', stats.size);
} catch (e) {
  console.error(e.message);
}
