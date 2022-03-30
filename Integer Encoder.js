//version 1
globalThis.int=(a,d,b='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',c=b.length)=>(d=d?a=>(a<c?'':d(a/c-1))+b[a%c|0]:([...a],e=b.indexOf(a.pop()))=>a+a?d(a)*c+c+e:e)(a);

//version 2
globalThis.int=(a,d,b='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',g,e=1n,f=BigInt,c=f(b.length))=>{if(d){d=b[(f=a)%c];while(c<=f)d=b[(f=(-c*c--**e-c+c*a)/(c++*c**e++))%c]+d}else{d=(g=g=>f(b.indexOf(a[g])))(0);while(a[e])d=d*c+c+g(e++)};return d};
