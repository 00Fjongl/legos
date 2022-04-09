//Uint8Array form
globalThis.b64=(i,z,o='',k='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=')=>z?i.forEach((x,y)=>y%3?0:o+=k[z=i[y+2],y=i[y+1],x>>2]+k[(x&3)<<4|y>>4]+k[y+1?(y&15)<<2|z>>6:64]+k[y+z+1?z&63:64])||o.replace(/=+$/,''):Uint8Array.from({length:parseInt(i.length/4*3,10,z=z=>k.indexOf(i[z]||''))},(i,k)=>z(i=4*(k/3|0)+(k%=3)+1)^64|!k&&(z(i-1)&127>>(1^(k*=2)))<<2+k|z(i)>>4-k);

//Text form
globalThis.b64=(i,z,o='',k='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=')=>z?new TextDecoder().decode(Uint8Array.from({length:parseInt((i=i.replace(/=+$/,'')).length/4*3,10,z=z=>k.indexOf(i[z]||''))},(i,k)=>z(i=4*(k/3|0)+(k%=3)+1)^64|!k&&(z(i-1)&127>>(1^(k*=2)))<<2+k|z(i)>>4-k)):(i=new TextEncoder().encode(i)).forEach((x,y)=>y%3?0:o+=k[z=i[y+2],y=i[y+1],x>>2]+k[(x&3)<<4|y>>4]+k[y+1?(y&15)<<2|z>>6:64]+k[y+z+1?z&63:64])||o;
