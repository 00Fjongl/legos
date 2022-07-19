//version 1
globalThis.int=(a,d,b='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',c=b.length)=>(d=d?a=>(a<c?'':d(a/c-1))+b[a%c|0]:([...a],e=b.indexOf(a.pop()))=>a+a?d(a)*c+c+e:e)(a);

//version 2
globalThis.int=(a,b,c='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',d=1n,e=b?-d--:'',f=(b=BigInt)(c.length),g=f-d)=>{if(e)while(a[d])e=++e*f+b(c.indexOf(a[d++]));else if(g?a>=0:![e=c.repeat([++a])])do{e=c[(b=(f-d*f+g*a)/(g*d))%f]+e;d*=f}while(f<=b);return e};

//version 3
globalThis.int=(a,b,c='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',d=1n,e=b?-d:'',f=(b=BigInt)(c.length))=>(e?(d=>{while(d)e=++e*f+b(c.indexOf(a[--d]))})(a.length):f-d?a>=0&&(g=>{do{e+=c[(b=(f-d*f+g*a)/(g*d))%f];d*=f}while(f<=b)})(f-d):c.repeat([++a]))||e;

//generalized UTF-16 surrogate pair encoder
globalThis.enc=(a,b,c='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',d=1n,e=b?-d--:'',f=(b=BigInt)(c.length),g=f-d,i=a=>{if(e)while(a[d])e=++e*f+b(c.indexOf(a[d++]));else do e=c[(b=(f-d*f+g*a)/(g*d))%f]+e;while(d*=f,f<=b);return e})=>e?(i(a)+'').replace(/[^]{1,7}(?=(?:[^]{7})*$)/g,a=>String.fromCodePoint(a)):i(b(a.replace(/[^]/g,a=>'0'.repeat(7-(a=''+a.codePointAt()).length)+a)));

//generalized UTF-8 encoder v1
globalThis.enc=(a,b,c='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',d=1n,e=b?-d--:'',f='length',g=(b=BigInt)(c[f]),h=g-d,i=a=>{if(e)while(a[d])e=++e*g+b(c.indexOf(a[d++]));else do e=c[(b=(g-d*g+h*a)/(h*d))%g]+e;while(d*=g,g<=b);return e})=>e?new TextDecoder().decode(Uint8Array.from({length:(e=[[,'00',0][(e=i(a)+'')[f]%3]]+e)[f]/3},a=>e[d++]+e[d++]+e[d++],d=0)):i(b((new TextEncoder().encode(a)+'').replace(/\d+/g,a=>[,'00',0,''][a[f]]+a).replace(/,/g,'')));

//generalized UTF-8 encoder v2
//better version of base64-reliant encoder
globalThis.enc=(a,b,$='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',e='0123456789abcdef',f=BigInt,i=(a,b,c=$,d=1n,e=b?-d--:'',g=f(c[j]),h=g-d)=>{if(e)while(a[d])e=++e*g+f(c.indexOf(a[d++]));else do e=c[(b=(g-d*g+h*a)/(h*d))%g]+e;while(d*=g,g<=b);return e},j='length')=>b?new TextDecoder().decode(Uint8Array.from({length:(a=i(i(a,1),0,e))[j]/2+.5|0},(b,e)=>parseInt(a.substr(e&&e*2-j,e?2:2-j),16),j=a[j]%2)):i(i(new TextEncoder().encode(a).forEach((b,e)=>a+=2-(b=b.toString(16))[j]&&e?0+b:b,a='')||a,1,e));

//generalized UTF-8 encoder v3
//faster and inefficient v4
globalThis.enc=(a,b,$='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',e='0123456789abcdef',f=BigInt,i=(a,b,c=k,d=1n,e=b?-d--:'',g=f(c[j]),h=g-d)=>{if(e)while(a[d])e=++e*g+f(c.indexOf(a[d++]));else if(h?a>=0:![e=c.repeat([++a])])do e=c[(b=(g-d*g+h*a)/(h*d))%g]+e;while(d*=g,g<=b);return e},j='length',[k]=[$,$]=$.split(/(?=[^]$)/))=>b?new TextDecoder().decode(Uint8Array.from({length:(b=i(i(a.slice(0,a.indexOf($)),1),0,e),a=i(i(a.slice(a.indexOf($)+1),1,k+$),0,e))[j]},(d,e)=>parseInt((b[e-j]||'')+a[e],16),j=a[j]-b[j])):i(i(new TextEncoder().encode(a).forEach((c,e)=>{b+=(c=2-(c=c.toString(16))[j]&&e?c+0:(c[1]||'')+c[0])[0];a+=c[1]||''},a=b='')||a,1,e))+$+i(i(b,1,e),0,k+$);

//generalized UTF-8 encoder v4
//faster and slightly inefficient v2
globalThis.enc=(a,b,$='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',e='0123456789abcdef',f=BigInt,h='slice',i=(a,b,c=k+$,d=1n,e=b?-d--:l,g=f(c[j]),h=g-d)=>{if(e)while(a[d])e=++e*g+f(c.indexOf(a[d++]));else if(h?a>=0:![e=c.repeat(++a+l)])do e=c[(b=(g-d*g+h*a)/(h*d))%g]+e;while(d*=g,g<=b);return e},j='length',[k]=[$,$]=$.split(/(?=[^]$)/),l='')=>b?new TextDecoder().decode(Uint8Array.from({length:(a=i(i(([b,a]=[a[h](0,b=a.indexOf($)),a[h](b+1)])[b=i(i(a[h](0,a=(a[j]-[b&&i(b,1,k)+1n])/2),1),0,e),1][h](a),1),0,e))[j]},(d,f)=>l+i(((d=b[f-h])!='f'?d||l:l)+a[f],1,e),h=a[j]-b[j])):((h=(a=i(i(new TextEncoder().encode(a).forEach((d,k)=>{b+=(d=2-(d=i(f(d),0,e))[j]&&k?d+'f':(d[1]||l)+d[0])[0];a+=d[1]||l},a=b=l)||a,1,e)),b=i(i(b,1,e)))[j]-a[j])?i(f(h-1),0,k):l)+$+a+b;

//8 chunk Unicode encoder
//by far the fastest and most thorough
globalThis.enc=(a,b,$='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',j,l,z,y='',n=127,f=BigInt,i=(a,b,d=p,e=b?-d--:'',g=f($.length),h=g-d)=>{if(e)while(a[d])e=++e*g+f($.indexOf(a[d++]));else if(h?a>=0:![e=$.repeat([++a])])do{e=$[(b=(g-d*g+h*a)/(h*d))%g]+e;d*=g}while(g<=b);return e},p=1n,r=p,[c,d,e,g,h,m,o,q]=b?a.map(a=>i(a,1)+p):Array(8).fill(0n))=>{if(b)for(i=f.asUintN,l=l=>{l=!!i(1,c)<<7|!!i(1,d)<<6|!!i(1,e)<<5|!!i(1,g)<<4|!!i(1,h)<<3|!!i(1,m)<<2|!!i(1,o)<<1|!!i(1,q);c>>=p;d>>=p;e>>=p;g>>=p;h>>=p;m>>=p;o>>=p;q>>=p;return l};q-p;y+=String.fromCodePoint(r>>7?((j=l())>>7&&l())|((r&n)<<7|j&n)<<(j>>7&&7):r))r=l();else{l=a.length;for(b=j=0;l||j;r<<=p){j?j&=j>n&&n:(l--,j=(y=a.codePointAt(b++))>>7)>>9&&(l--,b++);z=j?(j>>7||j)|128:y&n;z>>7?c|=r:0;z&64?d|=r:0;z&32?e|=r:0;z&16?g|=r:0;z&8?h|=r:0;z&4?m|=r:0;z&2?o|=r:0;z&1?q|=r:0}y=[c,d,e,g,h,m,o,q|r].map(a=>i(--a))}return y};

//8 chunk Unicode encoder v2
//may or may not be faster
globalThis.enc=(a,b,$='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',j,l,t,z,y='',k='length',f=BigInt,i=f.asUintN,s=f($[k]),p=1n,r=p,u=-p,v=p,w,[c,d,e,g,h,m,o,q]=b?a.map((a,d,e)=>{d=a[k];e=-p;while(d)e=++e*s+f($.indexOf(a[--d]));return e+p}):Array(8).fill(0n))=>(b?n=>{for(l=l=>!!i(1,c)<<7|!!i(1,d)<<6|!!i(1,e)<<5|!!i(1,g)<<4|!!i(1,h)*8|!!i(1,m)*4|!!i(1,o)*2|!!i(1,q,c>>=p,d>>=p,e>>=p,g>>=p,h>>=p,m>>=p,o>>=p,q>>=p);q-p;y+=String.fromCodePoint(r>>7?((j=l())>>7&&l())|((r&n)<<7|j&n)<<(j>>7&&7):r))r=l()}:n=>{l=a[k];for(b=j=0;l||j;r<<=p)j?j&=j>n&&n:(l--,j=(y=a.codePointAt(b++))>>7)>>9&&(l--,b++),z=j?(j>>7||j)|128:y&n,z>>7?c|=r:0,z&64?d|=r:0,z&32?e|=r:0,z&16?g|=r:0,z&8?h|=r:0,z&4?m|=r:0,z&2?o|=r:0,z&1?q|=r:0;q|=r;if(t=s-p){k=k=>$[Number(b%s)];p=s;a=a=>s<=(b=(a-w)/t);[z,i,f,n,l,j,y,r]=[c,d,e,g,h,m,o,q].map(a=>a--?a*t:a);r=r||v;c=d=e=g=h=m=o=q='';while(r)w=p-s,z+v?c+=k(a(z)?0:z=u):0,i+v?d+=k(a(i)?0:i=u):0,f+v?e+=k(a(f)?0:f=u):0,n+v?g+=k(a(n)?0:n=u):0,l+v?h+=k(a(l)?0:l=u):0,j+v?m+=k(a(j)?0:j=u):0,y+v?o+=k(a(y)?0:y=u):0,q+=k(a(r)?0:r=0),p*=s,t*=s}y=[c,d,e,g,h,m,o,q];t?0:y=y.map(a=>$.repeat([a]))})(127)||y;

//base64-reliant UTF-8 encoder
globalThis.enc=(a,b,$='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!#$%&()*+,-./:;<=>?@[]^{|}~',d='',e='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-',f=BigInt,i=(a,b,c=$,d=1n,e=b?-d--:'',g=f(c.length),h=g-d)=>{if(e)while(a[d])e=++e*g+f(c.indexOf(a[d++]));else do e=c[(b=(g-d*g+h*a)/(h*d))%g]+e;while(d*=g,g<=b);return e})=>b?new TextDecoder().decode(Uint8Array.from({length:parseInt((a=i(i(a,1),0,e)).length/4*3,10,b=b=>e.indexOf(a[b]||''))},(a,e)=>(b(a=4*(e/3|0)+(e%=3))&63>>(e*=2))<<2+e|b(a+1)>>4-e)):i(i((a=new TextEncoder().encode(a)).forEach((x,y)=>y%3?0:d+=e[b=a[y+2],y=a[y+1],x>>2]+e[(x&3)<<4|y>>4]+(y+1?e[(y&15)<<2|b>>6]:'')+(y+b+1?e[b&63]:''))||d,1,e));
