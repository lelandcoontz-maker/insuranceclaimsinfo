const fs = require('fs');
const p = 'lib/content/articles/accidental-discharge-overflow.tsx';
const src = fs.readFileSync(p, 'utf8');
console.log("Has CalloutBox import:", src.includes("from '@/components/content/CalloutBox'"));
console.log("Has variant=legal:", src.includes('variant="legal"'));
console.log("Has Leland:", src.includes("Leland Coontz"));
console.log("Last </>:", src.lastIndexOf("</>"));
console.log("Total length:", src.length);
console.log("Last 300 chars:", JSON.stringify(src.slice(-300)));
