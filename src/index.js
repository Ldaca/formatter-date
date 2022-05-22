function  format(dating = new Date('1977-02-07T02:13:06.612Z'), format = 'yyyymmddhhiissms') {
  var mm = dating.getMonth() + 1;
  var dd = dating.getDate();
  var hh = dating.getHours();
  var ii = dating.getMinutes();
  var ss = dating.getSeconds();
  var ms = dating.getMilliseconds();

  const map = {
    ms: (ms > 99 ? "" : ms > 9 ? "0" : "00") + ms,
    ss: (ss > 9 ? "" : "0") + ss,
    ii: (ii > 9 ? "" : "0") + ii,
    hh: (hh > 9 ? "" : "0") + hh,
    mm: (mm > 9 ? "" : "0") + mm,
    dd: (dd > 9 ? "" : "0") + dd,
    yyyy: dating.getFullYear(),
  };

  return format.replace(/ms|ss|ii|hh|mm|dd|yyyy/gi, (matched) => map[matched]);
};

export  { format };
