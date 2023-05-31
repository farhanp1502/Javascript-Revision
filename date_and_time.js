// let date = new Date(2013, 0, 32); 
// alert(date);


//new Date(year, month, date, hour, minute, second, millisecond)
// let d1 = new Date(2012, 1, 20, 3, 12);
// alert( d1 );


// let date = new Date(2012, 0, 3);
//  // 3 Jan 2012
// function getWeekDay(date){
//   let days=['su','mo','tu','we','th','fr','sa']
// return days[date.getDay()]}
// alert( getWeekDay(date) )



// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getLocalDay(date) );       // tuesday, should show 2

// function getLocalDay(date) {

// let day = date.getDay();

// if (day == 0) { // weekday 0 (sunday) is 7 in european
//   day = 7;
// }

// return day;
// }



// function getDateAgo(date, days) {
//   let dateCopy = new Date(date);

//   dateCopy.setDate(date.getDate() - days);
//   return dateCopy.getDate();
// }

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)





function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

alert( getLastDayOfMonth(2012, 0) ); // 31
alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2013, 1) ); // 28