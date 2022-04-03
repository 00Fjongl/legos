//version 1
globalThis.int=(a,d,b='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',c=b.length)=>(d=d?a=>(a<c?'':d(a/c-1))+b[a%c|0]:([...a],e=b.indexOf(a.pop()))=>a+a?d(a)*c+c+e:e)(a);

//version 2
globalThis.int=(a,b,c='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',d=0n,e=b?-1n:'',f=(b=BigInt)(c.length))=>{if(e)while(a[d])e=++e*f+b(c.indexOf(a[d++]));else do e=c[(b=(f-f*f--**d+f*a)/f++/f**d++)%f]+e;while(f<=b);return e};

//generalized UTF-16 surrogate pair encoder
globalThis.enc=(a,b,c='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!$&()*+,-./:;<=>?@[]^{|}~',d=1n,e=b?-d--:'',f=(b=BigInt)(c.length),g=f-d-d+1n,i=a=>{if(e)while(a[d])e=e*g+b(c.indexOf(a[d++]));else do e=c[(b=(f-d*f+g*a)/(g*d))%f]+e;while(d*=f,f<=b);return e})=>e?(i(a)+'').replace(/[^]{1,7}(?=(?:[^]{7})*$)/g,a=>String.fromCodePoint(a)):i(b(a.replace(/[^]/g,a=>'0'.repeat(7-(a=''+a.codePointAt()).length)+a)));

//generalized UTF-16 low surrogate encoder
globalThis.enc=(a,b,c='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!$&()*+,-./:;<=>?@[]^{|}~',d=1n,e=b?-d--:'',f=(b=BigInt)(c.length),g=f-d-d+1n,i=a=>{if(e)while(a[d])e=e*g+b(c.indexOf(a[d++]));else do e=c[(b=(f-d*f+g*a)/(g*d))%f]+e;while(d*=f,f<=b);return e})=>e?(i(a)+'').replace(/[^]{1,5}(?=(?:[^]{5})*$)/g,a=>String.fromCharCode(a)):i(b(a.replace(/[^]/g,a=>'0'.repeat(5-(a=''+a.charCodeAt()).length)+a)));
