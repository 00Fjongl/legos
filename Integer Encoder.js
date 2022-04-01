//version 1
globalThis.int=(a,d,b='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',c=b.length)=>(d=d?a=>(a<c?'':d(a/c-1))+b[a%c|0]:([...a],e=b.indexOf(a.pop()))=>a+a?d(a)*c+c+e:e)(a);

//version 2
globalThis.int=(a,d,b='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',e=1n,f=BigInt,c=f(b.length),g=d?b[(f=a)%c]:(d=d=>f(b.indexOf(a[d])))(0))=>{if(+d)while(c<=f)g=b[(f=(2n-(e*=c)*c--+c*a)/(c++*e))%c]+g;else while(a[e])g=g*c+c+d(e++);return g};

//generalized surrogate pair encoder
globalThis.enc=(a,d,b='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!$&()*+,-./:;<=>?@[]^{|}~',f=BigInt,i=(a,e=1n,c=f(b.length),g=d?(d=d=>f(b.indexOf(a[d])))(0):b[(f=a)%c])=>{if(d)while(a[e])g=g*c+c+d(e++);else while(c<=f)g=b[(f=(2n-(e*=c)*c--+c*a)/(c++*e))%c]+g;return g})=>d?(i(a)+'').replace(/[^]{1,7}(?=(?:[^]{7})*$)/g,a=>String.fromCodePoint(a)):i(f(a.replace(/[^]/g,a=>'0'.repeat(7-(a=''+a.codePointAt()).length)+a)));

//generalized low surrogate encoder
globalThis.enc=(a,d,b='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',f=BigInt,i=(a,e=1n,c=f(b.length),g=d?(d=d=>f(b.indexOf(a[d])))(0):b[(f=a)%c])=>{if(d)while(a[e])g=g*c+c+d(e++);else while(c<=f)g=b[(f=(2n-(e*=c)*c--+c*a)/(c++*e))%c]+g;return g})=>d?(i(a)+'').replace(/[^]{1,5}(?=(?:[^]{5})*$)/g,a=>String.fromCharCode(a)):i(f(a.replace(/[^]/g,a=>'0'.repeat(5-(a=''+a.charCodeAt()).length)+a)));
