import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

const requiredFiles = [
  '.nojekyll',
  '404.html',
  'index.html',
  'privacy-policy.html',
  'privacy-policy/index.html',
  'delete-account.html',
  'delete-account/index.html',
  'terms.html',
  'terms/index.html',
  'privacy.html',
  'privacy/index.html',
];

console.log('🔍 Verifying dist directory for GitHub Pages compliance...');

let allPassed = true;
for (const relPath of requiredFiles) {
  const fullPath = path.join(distDir, relPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ Missing required file: dist/${relPath}`);
    allPassed = false;
  } else {
    const size = fs.statSync(fullPath).size;
    if (size === 0 && relPath !== '.nojekyll') {
      console.error(`❌ Empty file: dist/${relPath}`);
      allPassed = false;
    } else {
      console.log(`✅ dist/${relPath} (${size} bytes)`);
    }
  }
}

if (!allPassed) {
  console.error('\n❌ Build verification failed! Essential Google Play compliance routes are missing.');
  process.exit(1);
}

console.log('\n🎉 All static routes verified! GitHub Pages will return HTTP 200 OK for Google Play review.');
