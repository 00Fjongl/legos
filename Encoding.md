Full one-byte version:  
```\x00\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7F```  
  
Full one-byte version (reordered):  
```0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~\x00\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F\x7F```  
  
Manipulation-friendly version:  
```\x00\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_abcdefghijklmnopqrstuvwxyz{|}~\x7F```  
  
Input-friendly version:  
```\x00\x01\x02\x03\x04\x05\x06\x07\b\t\v\f\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7F```  
  
Friendly version:  
```\x00\x01\x02\x03\x04\x05\x06\x07\b\t\v\f\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_abcdefghijklmnopqrstuvwxyz{|}~\x7F```  
  
More friendly version:  
``` !#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_abcdefghijklmnopqrstuvwxyz{|}~```  
  
URL-tolerant version:  
```\x00\x01\x02\x03\x04\x05\x06\x07\b\t\v\n\f\r\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !"$'()*+,-.0123456789;<=>@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7F```  
  
encodeURI-tolerant version:  
```!$'()*+,-.0123456789;=@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~```  
  
encodeURIComponent-tolerant version:  
```!'()*-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~```  
  
Word-break-tolerant version:  
```0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz```  
  
Eye-tolerant version:  
```23456789ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz```  
  
  
### NOTES
  
All of the above are sorted by .codePointAt() in ascending order. These can be reordered in any way, as long as there are no duplicate encoding characters.  
  
`\n\r`  
Input elements accept all of the one-byte characters except new lines and line feeds.  
  
```\r"'\` ```  
Line feeds, quotes, apostrophes, backslashes, and backticks/grave accents are not considered "manipulation-friendly" because they can make it frustrating to store raw text. Line feeds will often disappear from the output when stored in a page or in many other areas. Backslashes, if handled carelessly, can escape certain characters and cause them to be misinterpreted.  
  
`#&/:?`  
The hash/number sign, the ampersand, the forward slash, the colon, and the question mark can all interfere with how the rest of the URL is interpreted and can cause issues if the encoding is not placed at the very end of the URL.  
  
`01ILOilo`  
The eye-tolerant version removes lookalike characters from the list of alphanumerical characters.
