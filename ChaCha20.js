globalThis.ChaCha=(k,i,v,w,b='byteLength',t=DataView,[o,s,r]=k[b]<32|i[b]<8?'':[w=new(b=Uint32Array)(16),b.from({length:16},(a,c)=>[1634760805,857760878,2036477234,1797285236][c]||(c>11?c>13&&b.getUint32(c+1>>4<<2,1):v.getUint32(c-4<<2,1)),v=new t(k),b=new t(i)),(v,n)=>v<<n|v>>>32-n,w=new t(w.buffer)])=>(b,c,n,v,t,i,a=0,k=k=>b+=i==k||4|i>3)=>{for(o.set(s);a<10;a++)for(i=0;i<8;i++)o[c=b=i&3,n=k(7),v=k(6)]+=o[t=k(5)]=r(o[t]^(o[c]+=o[n]),16),o[n]=r((o[v]+=o[t]=r(o[t]^(o[c]+=o[n]=r(o[n]^o[v],12)),8))^o[n],7);for(a=0;a<16;a++)w.setUint32(a*4,o[a]+s[a],1);return++s[12]||++s[13]?o.buffer:o._}
