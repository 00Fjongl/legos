//version 1
globalThis.int=(a,d,b='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',c=b.length)=>(d=d?a=>(a<c?'':d(a/c-1))+b[a%c|0]:([...a],e=b.indexOf(a.pop()))=>a+a?d(a)*c+c+e:e)(a);

//version 2
globalThis.int=(a,b,c='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',d=1n,e=b?-d--:'',f=(b=BigInt)(c.length),g=f-d)=>{if(e)while(a[d])e=++e*f+b(c.indexOf(a[d++]));else do e=c[(b=(f-d*f+g*a)/(g*d))%f]+e;while(d*=f,f<=b);return e};

//generalized UTF-16 surrogate pair encoder
globalThis.enc=(a,b,c='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',d=1n,e=b?-d--:'',f=(b=BigInt)(c.length),g=f-d,i=a=>{if(e)while(a[d])e=++e*f+b(c.indexOf(a[d++]));else do e=c[(b=(f-d*f+g*a)/(g*d))%f]+e;while(d*=f,f<=b);return e})=>e?(i(a)+'').replace(/[^]{1,7}(?=(?:[^]{7})*$)/g,a=>String.fromCodePoint(a)):i(b(a.replace(/[^]/g,a=>'0'.repeat(7-(a=''+a.codePointAt()).length)+a)));

//generalized UTF-8 encoder v1
globalThis.enc=(a,b,c='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',d=1n,e=b?-d--:'',f='length',g=(b=BigInt)(c[f]),h=g-d,i=a=>{if(e)while(a[d])e=++e*g+b(c.indexOf(a[d++]));else do e=c[(b=(g-d*g+h*a)/(h*d))%g]+e;while(d*=g,g<=b);return e})=>e?new TextDecoder().decode(Uint8Array.from({length:(e=[[,'00',0][(e=i(a)+'')[f]%3]]+e)[f]/3},a=>e[d++]+e[d++]+e[d++],d=0)):i(b((new TextEncoder().encode(a)+'').replace(/\d+/g,a=>[,'00',0,''][a[f]]+a).replace(/,/g,'')));

//generalized UTF-8 encoder v2
globalThis.enc=(a,b,$='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',e='0123456789abcdef',f=BigInt,i=(a,b,c=$,d=1n,e=b?-d--:'',g=f(c[j]),h=g-d)=>{if(e)while(a[d])e=++e*g+f(c.indexOf(a[d++]));else do e=c[(b=(g-d*g+h*a)/(h*d))%g]+e;while(d*=g,g<=b);return e},j='length')=>b?new TextDecoder().decode(Uint8Array.from({length:(a=i(i(a,1),0,e))[j]/2+.5|0},(b,e)=>parseInt(a.substr(e&&e*2-j,e?2:2-j),16),j=a[j]%2)):i(i(new TextEncoder().encode(a).forEach((b,e)=>a+=e&2-(b=b.toString(16))[j]?0+b:b,a='')||a,1,e));

//generalized UTF-8 encoder v3
//better with more characters
globalThis.enc=(a,b,$='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',e='0123456789abcde',f=BigInt,i=(a,b,c=k,d=1n,e=b?-d--:'',g=f(c[j]),h=g-d)=>{if(e)while(a[d])e=++e*g+f(c.indexOf(a[d++]));else do e=c[(b=(g-d*g+h*a)/(h*d))%g]+e;while(d*=g,g<=b);return e},j='length',[k]=[$,$]=$.split(/(?=[^]$)/))=>b?new TextDecoder().decode(Uint8Array.from({length:(b=i(i(a.slice(0,a.indexOf($)),1),0,e),a=i(i(a.slice(a.indexOf($)+1),1,k+$),0,e+'f'))[j]},(d,e)=>parseInt((b[e-j]||'')+a[e],16),j=a[j]-b[j])):i(i(new TextEncoder().encode(a).forEach((c,e)=>{b+=(c=e&2-(c=c.toString(16))[j]?c+0:(c[1]||'')+c[0])[0];a+=c[1]||''},a=b='')||a,1,e))+$+i(i(b,1,e+'f'),0,k+$);

//base64-reliant UTF-8 encoder
globalThis.enc=(a,b,$='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',d='',e='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-',f=BigInt,i=(a,b,c=$,d=1n,e=b?-d--:'',g=f(c.length),h=g-d)=>{if(e)while(a[d])e=++e*g+f(c.indexOf(a[d++]));else do e=c[(b=(g-d*g+h*a)/(h*d))%g]+e;while(d*=g,g<=b);return e})=>b?new TextDecoder().decode(Uint8Array.from({length:parseInt((a=i(i(a,1),0,e)).length/4*3,10,b=b=>e.indexOf(a[b]||''))},(a,e)=>(b(a=4*(e/3|0)+(e%=3))&63>>(e*=2))<<2+e|b(a+1)>>4-e)):i(i((a=new TextEncoder().encode(a)).forEach((x,y)=>y%3?0:d+=e[b=a[y+2],y=a[y+1],x>>2]+e[(x&3)<<4|y>>4]+(y+1?e[(y&15)<<2|b>>6]:'')+(y+b+1?e[b&63]:''))||d,1,e));
