globalThis.byte=(a,b,j,y,z,l=a.length,p='codePointAt',n=127)=>{if(b)for(b='';l;b+=String.fromCodePoint(p>>7?((j=a[--l])>>7&&a[--l])|((p&n)<<7|j&n)<<(j>>7&&7):p))p=a[--l];else{for(z=j&=l;j<l;y>>9&&j++)z+=1+!!(y=a[p](j++)>>7)|y>>7>0;y=j=0;for(b=new Uint8Array(z);z;b[--z]=j?(j>>7||j)|128:l&n)j?j&=j>n&&n:(j=(l=a[p](y++))>>7)>>9&&y++}return b};
