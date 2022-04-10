//version 1
globalThis.int=(a,d,b='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',c=b.length)=>(d=d?a=>(a<c?'':d(a/c-1))+b[a%c|0]:([...a],e=b.indexOf(a.pop()))=>a+a?d(a)*c+c+e:e)(a);

//version 2
globalThis.int=(a,b,c='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',d=1n,e=b?-d--:'',f=(b=BigInt)(c.length),g=f-d)=>{if(e)while(a[d])e=++e*f+b(c.indexOf(a[d++]));else do e=c[(b=(f-d*f+g*a)/(g*d))%f]+e;while(d*=f,f<=b);return e};

//generalized UTF-16 surrogate pair encoder
globalThis.enc=(a,b,c='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',d=1n,e=b?-d--:'',f=(b=BigInt)(c.length),g=f-d,i=a=>{if(e)while(a[d])e=++e*f+b(c.indexOf(a[d++]));else do e=c[(b=(f-d*f+g*a)/(g*d))%f]+e;while(d*=f,f<=b);return e})=>e?(i(a)+'').replace(/[^]{1,7}(?=(?:[^]{7})*$)/g,a=>String.fromCodePoint(a)):i(b(a.replace(/[^]/g,a=>'0'.repeat(7-(a=''+a.codePointAt()).length)+a)));

//generalized UTF-8 encoder
globalThis.enc=(a,b,c='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',d=1n,e=b?-d--:'',f='length',g=(b=BigInt)(c[f]),h=g-d,i=a=>{if(e)while(a[d])e=++e*g+b(c.indexOf(a[d++]));else do e=c[(b=(g-d*g+h*a)/(h*d))%g]+e;while(d*=g,g<=b);return e})=>e?new TextDecoder().decode(Uint8Array.from({length:(e=[[,'00',0][(e=i(a)+'')[f]%3]]+e)[f]/3},a=>e[d++]+e[d++]+e[d++],d=0)):i(b((new TextEncoder().encode(a)+'').replace(/\d+/g,a=>[,'00',0,''][a[f]]+a).replace(/,/g,'')));

//base64-reliant UTF-8 encoder
globalThis.enc=(a,b,$='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',d='',e='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-',f=BigInt,i=(a,b,c=$,d=1n,e=b?-d--:'',g=f(c.length),h=g-d)=>{if(e)while(a[d])e=++e*g+f(c.indexOf(a[d++]));else do e=c[(b=(g-d*g+h*a)/(h*d))%g]+e;while(d*=g,g<=b);return e})=>b?new TextDecoder().decode(Uint8Array.from({length:parseInt((a=i(i(a,1),0,e)).length/4*3,10,b=b=>e.indexOf(a[b]||''))},(a,e)=>(b(a=4*(e/3|0)+(e%=3))&63>>(e*=2))<<2+e|b(a+1)>>4-e)):i(i((a=new TextEncoder().encode(a)).forEach((x,y)=>y%3?0:d+=e[b=a[y+2],y=a[y+1],x>>2]+e[(x&3)<<4|y>>4]+(y+1?e[(y&15)<<2|b>>6]:'')+(y+b+1?e[b&63]:''))||d,1,e));
