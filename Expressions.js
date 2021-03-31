/^(?:https?:\/\/)?\w+\.\w/i //URL detection
/^\w+:.+/ //URI detection
/[^]/g //Everything
/(?<=url\((?<a>["']?)).*?(?=\k<a>\))|(?<=@import .*?(?<b>"|')).*?(?=\k<b>;)/g //Grab CSS URLs
.replace(/(?<=[a-z])([A-Z])/g,'-$1').toLowerCase() //camelCase identifiers to dashes
