globalThis.rc4=(a,b,c,d,e,f,g,h='charCodeAt',i=c=0,j=k=>++i<l?j(k,m(k,f=e?(f+(c=k[i])+b[h](i%b.length))%l:0)):d+1?(b=>{for(k=i=f=b;d<a.length;k+=String.fromCharCode(a[h](d++)^m(g,f=(f+c)%l)^m(e,b=(b+=c=e[i])%l)))c=g[i=++i%l]})``||k:j(e=g,d^=i=-1),l=256,m=(a,b)=>g[((a[i]=e?a[b]:i)+(a[b]=c))%l])=>j(g=[]);

//shorter and more secure modification
globalThis.rc4=(a,b,c,d,e,f,g,h='charCodeAt',i=c=0,j=k=>++i<l?j(k,m(k,f=e?(f+(c=k[i])+b[h](i%b.length))%l:0)):d+1?(b=>{for(k=i=f=b;d<a.length;k+=String.fromCharCode(a[h](d++)^m(g,f=(f+c)%l)^m(e,b=(b+=c=e[i])%l)))c=g[i=++i%l]})``||k:j(e=g,d^=i=-1),l=256,m=(a,b)=>g[((a[i]=a[b]^i)+(a[b]=c))%l])=>j(g=[]);
