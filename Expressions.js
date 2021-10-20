/^(?:https?:\/\/)?\w+\.\w\w+\S*/i //URL detection
/^\w+:.+/ //URI detection
/[^]/g //Everything
/(?<=url\((?<a>["']?)).*?(?=\k<a>\))|(?<=@import .*?(?<b>"|')).*?(?=\k<b>;)/g //Grab CSS URLs
.replace(/(?<=[a-z])([A-Z])/g,'-$1').toLowerCase() //camelCase identifiers to dashes

//All-in-one Discord filter
/(\w{0,3}\W{5,}\w{0,3}){275,}|\b(:regional_indicator_n:|:capricorn:|n)(:(regional_indicator_i|one|(grey_)?exclamation|information_source):|[il1!])(:regional_indicator_g:|:nine:|[g9])\b|(?<!\w[aeiou][hlmnrswy](?=ning))(?<!\w\w[aeiou][hlmnrswy](?=ning))(?<!\w\w[aeiou](?=ning|n[aei](\W?l|l\W?)[^\Waeiou]{0,2}[aeiou][^\Waeiou][aeiou]))(?<![^\Waeiou][aei](?=nage[^\Waiou]?a?s?(?!\w)|n[aei]\Wg([aei](?!ni)[lmnpqtvwyz]{1,2}[aeiou]|r[aeiou]{1,2}[^\Waeiou])))(?<!(?=new\W?g(r[aeiou]{1,2}[^\Waeiou]|[aeiou][^\Waeiou]{1,2}e)|(nibbl|negat)(e|i[onv]\w)))((:regional_indicator_n:|:capricorn:|n)|\b((:regional_indicator_n:|:capricorn:|n)\W*)+)((:(a|o|regional_indicator_[aou]|one|two|three|four|five|six|seven|eight|nine|zero|ophiuchus):|[aou\d@])?((:(a|regional_indicator_[aei]|one|three|four|(grey_)?exclamation|information_source):|[aeil134!@])\W*)+|((:regional_indicator_g:|:nine:|[g9])\W*)(?=:regional_indicator_g:|:nine:|[g9]))\w?(((:regional_indicator_g:|:nine:|[g9])\W*)+((:(a|regional_indicator_[asz$]|four|five|heavy_dollar_sign):|[asz45@$])|((:(regional_indicator_[eu]|three|ophiuchus):|[eu3])\W*)*\w?(:regional_indicator_r:|r)(?!(?<=niger)ia)|((:(regional_indicator_i|one|(grey_)?exclamation|information_source):|[il1])\W*)+\w?(:(regional_indicator_[ei]|one|three|(grey_)?exclamation|information_source):|[eil13!]))|((:(b|regional_indicator_[bgq]|six|eight|8ball|nine):|[bgq689])\W*){2,}(?![^aeiloru0134\W!@]|in))|(:regional_indicator_d:|d)((:(regional_indicator_|zer)?o:|[o0])\W*)+\w?((:regional_indicator_g:|:nine:|[g9])\W*)+\w?((:((regional_indicator_)?m|scorpius|virgo):|m)\W*)+((:(regional_indicator_|zer)?o:|[o0])\W*)*\w?((:regional_indicator_v:|:aries:|v)\W*)+\w?\W*(:(regional_indicator_[ei]|one|three|(grey_)?exclamation|information_source):|[eil13!])|r\W*\w?(\/\W*)+(s\W*)+\w?(o\W*)+\w?(u\W*)+\w?(n\W*)+\w?(d\W*)+(i\W*)+n|r\W*((:(regional_indicator_[ei]|one|three|(grey_)?exclamation|information_source):|[eil13!])\W*)+((:regional_indicator_t:|t)\W*)+((:(a|regional_indicator_[au]|four|ophiuchus):|[au4@])\W*)+((:regional_indicator_r:|r)\W*)+(:(regional_indicator_[dt]|(latin_)?cross|heavy_plus_sign):|[dt])|(?<!\w\w[aeiou](?=f(\W?a\W|\Wa\W?)g[^aeiou]{0,2}[aeiou]))(?<!\w[aeiou][^aeiou](?=f(\W?a\W|\Wa\W?)g[^aeiou]{0,2}[aeiou]))(?<!\w[aeiou][^aeiou][^aeiou](?=f(\W?a\W|\Wa\W?)g[^aeiou]{0,2}[aeiou]))(?<!\w[aeiou][^aeiou][^aeiou][^aeiou](?=f(\W?a\W|\Wa\W?)g[^aeiou]{0,2}[aeiou]))(?<![io](?=f\Wa\W?g(?!(((:regional_indicator_g:|:nine:|[g9])\W*)|((:(o|regional_indicator_[eio]|zero|one|three|(grey_)?exclamation|information_source):|[eilo013!])\W*)+(?=(:(regional_indicator_t|(latin_)?cross|heavy_plus_sign):|t)))+)(?=[aehilnoruwy]\w)))f\W*((:(regional_indicator_)?a:|:four:|[a4@])\W*)+((:regional_indicator_g:|:nine:|[g9])|((:((regional_indicator_)?b|six|eight|8ball):|[b68])\W*){2,}((:(o|regional_indicator_[eio]|zero|one|three|(grey_)?exclamation|information_source):|[eilo013!])\W*)+(:(regional_indicator_t|(latin_)?cross|heavy_plus_sign):|t))|([bd]([il1]s?([aeiol10]s?|[s5])c[aeo0]c?r?|[il1]?[aeious015]c[aeo0]c?r|[il1]{1,2}[s5]{1,2}c?[cq][aeo0]{0,2}c?rr?)[bd][bd]?([aeo4]pp?p?)?|n[il1]?tr[aeo0])([-._]?\w+)*\.(?!((?<=(?<!\w)discord\.)(com|gg|gift|org|js|py)|(?<=(?<!\w)discordapp\.)(com|net))(?!\w))(?=\w(\w|\.))|[s5]t\w?([e3][a4]|[a4][e3])([mnr]|rn)(m|n|rn)?_?_?([ckq][aceionu]((m|rn)(m|rn)?(m|rn)?|[rmn]{1,3}[mn]))?\w?[aceionu][nty][aceionuy1][nty][ntuy]\w?\.(?!(?<=(?<!\w)steamcommunity\.)com(?!\w))(?=\w(\w|\.))/gi
