//version 1
globalThis.int=(a,d,b='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',c=b.length)=>(d=d?a=>(a<c?'':d(a/c-1))+b[a%c|0]:([...a],e=b.indexOf(a.pop()))=>a+a?d(a)*c+c+e:e)(a);

//version 2
globalThis.int=(a,d,b='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',e=1n,f=BigInt,c=f(b.length),g=d?b[(f=a)%c]:(d=d=>f(b.indexOf(a[d])))(0))=>{if(+d)while(c<=f)g=b[(f=(2n-c*c--**e+c*a)/(c++*c**e++))%c]+g;else while(a[e])g=g*c+c+d(e++);return g};
