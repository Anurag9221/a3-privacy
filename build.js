const fs=require('fs'),path=require('path');const d=JSON.parse(fs.readFileSync('all.json','utf8'));
for(const [p,c] of Object.entries(d)){fs.mkdirSync(path.dirname(p)||'.',{recursive:true});fs.writeFileSync(p,c);}
fs.writeFileSync('.nojekyll','');
