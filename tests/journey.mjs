import {build} from 'esbuild';
import {JSDOM, VirtualConsole} from 'jsdom';
import assert from 'node:assert/strict';
const result=await build({entryPoints:['src/main.tsx'],bundle:true,write:false,format:'iife',loader:{'.css':'empty'},jsx:'automatic',logLevel:'silent'});
const errors=[];const vc=new VirtualConsole();vc.on('jsdomError',e=>errors.push(e.message));
const dom=new JSDOM('<!doctype html><div id="root"></div>',{url:'https://mission23.test',pretendToBeVisual:true,runScripts:'outside-only',virtualConsole:vc});
const w=dom.window;w.matchMedia=()=>({matches:true,addListener(){},removeListener(){},addEventListener(){},removeEventListener(){}});w.scrollTo=()=>{};
w.eval(result.outputFiles[0].text);
const wait=(ms=250)=>new Promise(r=>setTimeout(r,ms));await wait();
function text(){return w.document.body.textContent}
async function click(label){const b=[...w.document.querySelectorAll('button')].find(x=>x.textContent.includes(label)||x.getAttribute('aria-label')===label);assert.ok(b,`Button exists: ${label}`);b.click();await wait();}
async function has(s){for(let i=0;i<20;i++){if(text().includes(s))return;await wait(100)}assert.ok(text().includes(s),`Scene contains: ${s}`);}
await click('Enter your universe');await has('The universe');
await click('Follow your curiosity');await has('The Jazz');
await click('Play C');await has('another language');await click('Hear your melody');await wait(450);
await click('Keep exploring');await has('The Library');await click('The art of wondering');await has('Knowing everything');await click('Turn the page');await has('best ideas');await click('An odd little riddle');await has('space between questions');
await click('Keep exploring');await has('Unknown Flavors');await click('Inspect field notes');await has('moon pear');await click('Rotate specimen');await click('Leave it a mystery');
await has('Small Victories');await click('Let the constellation');await has('tried again');await click('Follow the light');await has('of your story');await click('Open the door to world two');await wait(1800);await has('wide open');
for(const title of ['The music','The ideas','The places','The person']){await click(title);await has('Return to the observatory');if(title==='The places'){await click('reveal a coordinate');await has('two sunsets');}await click('Return to the observatory');}
await click('Gather the golden threads');await has('You were never missing');await click('One more place');await has('A little planet.');await click('Light up your sky');await has('Happy 23rd Birthday.');await click('P.S.');await has('One last');await click('Turn hoodie to reveal the message inside the hood');await has('its own rhythm.');
const stored=JSON.parse(w.localStorage.getItem('mission23'));assert.equal(stored.scene,10);assert.equal(stored.visited.length,4);assert.equal(stored.fragments.length,6);
await click('Open journey navigation');await click('Start a fresh journey');await has('Enter your universe');assert.equal(JSON.parse(w.localStorage.getItem('mission23')).scene,0);
assert.deepEqual(errors,[]);console.log('PASS: complete journey, all four portals, interactions, six fragments, persistence, restart, and silent audio fallback.');w.close();
