globalThis.rc4=(a,b,c,d,e,f,g,h=[],i='charCodeAt',j=g=c=0,k=l=>++j<m?k(l,l[l[j]=e?l[g=(g+(c=l[j])+b[i](j%b.length))%m]:j,g]=c):d+1?(k=l=>{while(d<a.length)l+=String.fromCharCode(h[((e[e[f=a[i](d++)^h[((h[c=h[j=++j%m],j]=h[g=(g+c)%m])+(h[g]=c))%m],j]=e[b=(b+(c=e[j]))%m],b]=c)+e[j])%m]^f);return l})(j=g=b=''):k(e=h,d^=j=-1),m=256)=>k(h);