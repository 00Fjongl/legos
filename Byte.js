globalThis.byte=(a,b,j,y='',z=0,l=a.length,p='codePointAt')=>(b?n=>{for(;l;y+=String.fromCodePoint(p>>7?((j=a[--l])>>7&&a[--l])|((p&n)<<7|j&n)<<(j>>7&&7):p))p=a[--l]}:n=>{for(;y<l;b>>9&&y++)z+=(b=a[p](y++)>>7)>127|2-!b;b=j=0;for(y=new Uint8Array(z);z;y[--z]=j?(j>>7||j)|128:l&n)j?j&=j>n&&n:(j=(l=a[p](b++))>>7)>>9&&b++})(127)||y;
