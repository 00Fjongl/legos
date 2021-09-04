self.add=(x,y,z,a=z='',b,c,d)=>{for(;(b=x[x.length-++a])+(c=y[y.length-a]);z=d%10+z)d=~~b+~~c+(d>9);return(d>9|0||'')+z}
