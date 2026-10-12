const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
for(const file of ['site/app.js','site/projects.js','site/case-study.js'])new vm.Script(fs.readFileSync(file,'utf8'),{filename:file});
const context=vm.createContext({});vm.runInContext(fs.readFileSync('site/projects.js','utf8')+';globalThis.collection=[...projects,...designProjects,...learningProjects]',context);
assert(!context.collection.some(p=>['minimvc','quixell'].includes(p.id)),'Retired project is still listed');
assert(context.collection.some(p=>p.id==='knights-vow')&&context.collection.some(p=>p.id==='correctionapp')); assert(context.collection.some(p=>p.id==='fishe')&&context.collection.some(p=>p.id==='go-truck')&&context.collection.some(p=>p.id==='voila'));
for(const project of context.collection){
 const page=path.join('site/projects',project.id,'index.html');assert(fs.existsSync(page),'Missing case page: '+project.id);
 for(const shot of project.gallery||[])assert(fs.existsSync(path.join('site/assets',shot[0])),'Missing screenshot: '+shot[0]);
 for(const match of fs.readFileSync(page,'utf8').matchAll(/(?:href|src)="([^"#]+)"/g)){const url=match[1];if(!/^(https?:|mailto:|data:)/.test(url))assert(fs.existsSync(path.resolve(path.dirname(page),url.split('#')[0])),'Broken case link: '+url);}
}
const html=fs.readFileSync('site/index.html','utf8');
for(const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)){const url=match[1];if(!/^(https?:|mailto:|data:)/.test(url))assert(fs.existsSync(path.join('site',url)), 'Missing asset: '+url);}
assert(html.includes('Doddie Prawarjito'));assert(!fs.existsSync('site/ats'),'Company application must live in its own repository');
assert(!/localhost|127\.0\.0\.1/.test(html),'Local URL in public portfolio');
console.log('Portfolio syntax, linked files, separate ATS hosting, and public URL checks passed.');
