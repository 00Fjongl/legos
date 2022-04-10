//version 1
globalThis.int=(a,d,b='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',c=b.length)=>(d=d?a=>(a<c?'':d(a/c-1))+b[a%c|0]:([...a],e=b.indexOf(a.pop()))=>a+a?d(a)*c+c+e:e)(a);

//version 2
globalThis.int=(a,b,c='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',d=1n,e=b?-d--:'',f=(b=BigInt)(c.length),g=f-d)=>{if(e)while(a[d])e=++e*f+b(c.indexOf(a[d++]));else do e=c[(b=(f-d*f+g*a)/(g*d))%f]+e;while(d*=f,f<=b);return e};

//generalized UTF-16 surrogate pair encoder
globalThis.enc=(a,b,c='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',d=1n,e=b?-d--:'',f=(b=BigInt)(c.length),g=f-d,i=a=>{if(e)while(a[d])e=++e*f+b(c.indexOf(a[d++]));else do e=c[(b=(f-d*f+g*a)/(g*d))%f]+e;while(d*=f,f<=b);return e})=>e?(i(a)+'').replace(/[^]{1,7}(?=(?:[^]{7})*$)/g,a=>String.fromCodePoint(a)):i(b(a.replace(/[^]/g,a=>'0'.repeat(7-(a=''+a.codePointAt()).length)+a)));

//generalized UTF-16 low surrogate encoder
globalThis.enc=(a,b,c='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',d=1n,e=b?-d--:'',f=(b=BigInt)(c.length),g=f-d,i=a=>{if(e)while(a[d])e=++e*f+b(c.indexOf(a[d++]));else do e=c[(b=(f-d*f+g*a)/(g*d))%f]+e;while(d*=f,f<=b);return e})=>e?(i(a)+'').replace(/[^]{1,5}(?=(?:[^]{5})*$)/g,a=>String.fromCharCode(a)):i(b(a.replace(/[^]/g,a=>'0'.repeat(5-(a=''+a.charCodeAt()).length)+a)));

//generalized UTF-8 encoder
globalThis.enc=(a,b,c='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',d=1n,e=b?-d--:'',f='length',g=(b=BigInt)(c[f]),h=g-d,i=a=>{if(e)while(a[d])e=++e*g+b(c.indexOf(a[d++]));else do e=c[(b=(g-d*g+h*a)/(h*d))%g]+e;while(d*=g,g<=b);return e})=>e?new TextDecoder().decode(Uint8Array.from({length:(e=[[,'00',0][(e=i(a)+'')[f]%3]]+e)[f]/3},a=>e[d++]+e[d++]+e[d++],d=0)):i(b((new TextEncoder().encode(a)+'').replace(/\d+/g,a=>[,'00',0,''][a[f]]+a).replace(/,/g,'')));

//base64-reliant UTF-8 encoder
globalThis.enc=(a,b,$='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',e='',i=(a,b,c=$,d=1n,e=b?-d--:'',g=BigInt(c.length),h=g-d)=>{if(e)while(a[d])e=++e*g+BigInt(c.indexOf(a[d++]));else do e=c[(b=(g-d*g+h*a)/(h*d))%g]+e;while(d*=g,g<=b);return e})=>b?new TextDecoder().decode(Uint8Array.from({length:parseInt((a=i(i(a,1),0,d)).length/4*3,10,b=b=>d.indexOf(a[b]||''))},(a,d)=>b(a=4*(d/3|0)+(d%=3)+1)^64|!d&&(b(a-1)&127>>(1^(d*=2)))<<2+d|b(a)>>4-d)):i(i((a=new TextEncoder().encode(a)).forEach((x,y)=>y%3?0:e+=d[b=a[y+2],y=a[y+1],x>>2]+d[(x&3)<<4|y>>4]+(y+1?d[(y&15)<<2|b>>6]:'')+(y+b+1?d[b&63]:''))||e,1,d));
