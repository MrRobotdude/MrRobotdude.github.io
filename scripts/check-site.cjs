const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
for(const file of ['site/app.js','site/projects.js'])new vm.Script(fs.readFileSync(file,'utf8'),{filename:file});
const html=fs.readFileSync('site/index.html','utf8');
for(const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)){const url=match[1];if(!/^(https?:|mailto:|data:)/.test(url))assert(fs.existsSync(path.join('site',url)), 'Missing asset: '+url);}
assert(html.includes('Doddie Prawarjito'));assert(fs.existsSync('site/ats/index.html'));
assert(!/localhost|127\.0\.0\.1/.test(html),'Local URL in public portfolio');
console.log('Portfolio syntax, linked files, ATS presentation, and public URL checks passed.');
