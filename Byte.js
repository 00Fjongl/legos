globalThis.byte=(a,b,x,z,l='',p='codePointAt',j='length',n=127)=>{if(b){for(b=0,x=a[j];b<x;)l+=String.fromCodePoint((z=a[b++])>>7?((j=a[b++])>>7?a[b++]:0)|((z&n)<<7|(j&n))<<(j>>7&&7):z)}else{for(l=b=0,x=a[j];b<x;)l+=Math.log2(z=a[p](b++),z>>16&&b++)/7+1|0||1;for(x=(l=new Uint8Array(l))[j],z=b=j=0;b<x;)j?j&=j>n&&n:a=a.slice((j=(z=a[p]())>>7,z)>>16?2:1),l[b++]=j?(j>>7||j)|128:z&n}return l};
