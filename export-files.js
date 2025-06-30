const fs = require('fs');
const path = require('path');

const filesToExport = [
  'package.json',
  'index.html',
  'vite.config.ts',
  'tailwind.config.js',
  'postcss.config.js',
  'tsconfig.json',
  'tsconfig.app.json',
  'tsconfig.node.json',
  'eslint.config.js',
  'src/main.tsx',
  'src/App.tsx',
  'src/index.css',
  'src/vite-env.d.ts',
  'src/contexts/ThemeContext.tsx',
  'src/components/Header.tsx',
  'src/components/Hero.tsx',
  'src/components/About.tsx',
  'src/components/Skills.tsx',
  'src/components/Projects.tsx',
  'src/components/Education.tsx',
  'src/components/Contact.tsx',
  'src/components/Footer.tsx'
];

console.log('='.repeat(80));
console.log('PORTFOLIO WEBSITE FILES - COPY TO GITHUB');
console.log('='.repeat(80));

filesToExport.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    console.log(`\n${'='.repeat(40)}`);
    console.log(`FILE: ${filePath}`);
    console.log('='.repeat(40));
    console.log(fs.readFileSync(filePath, 'utf8'));
  }
});

console.log('\n' + '='.repeat(80));
console.log('END OF FILES');
console.log('='.repeat(80));