// there are 3 types of quotes. Backticks allow a string to span multiple lines and embed expressions ${…}.
// We can use special characters, such as a line break \n.
// To get a character, use: [] or at method.
// To get a substring, use: slice or substring.
// To lowercase/uppercase a string, use: toLowerCase/toUpperCase.
// To look for a substring, use: indexOf, or includes/startsWith/endsWith for simple checks.
// To compare strings according to the language, use: localeCompare, otherwise they are compared by character codes.
// str.trim() – removes (“trims”) spaces from the beginning and end of the string.
// str.repeat(n) – repeats the string n times.

      // let str = `Hello`;

      // the first character
      // alert( str[0] ); // H
      // alert( str.at(0) );

      // alert(str[str.length-1])
      // alert (str.at(-5))
      // let a=2345
      // alert(23456);

      // let m=a.toString()
      // alert (typeof(m))

      // let str = "my name is farhan"
      // // alert(str.slice(11,16))
      // alert (str.slice(11))
      // // alert(str.substring(11,16))
      // alert (str.substring(11))

// function ucfirst(str){
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
// alert(ucfirst("farhan"))


// function checkspam(str)
// {
//   let lwr= str.toLowerCase();
// alert (lwr);
//  return lwr.includes('viagra' )|| lwr.includes('xxx');
  
// }
// alert(checkspam('buy ViAgRA now') )
// alert(checkspam('free xxxxx')) 
// alert(checkspam("innocent rabbit") )


// function truncate(str,maxlength){
//  return (str.length > maxlength) ?
//   str.slice(0,maxlength-1)+ "..." : str;
// }
// alert(truncate("hii are you free by any chance",20))


// function extractcurrencyvalue(str){
//   return +str.slice(1)
// }
// alert(typeof(extractcurrencyvalue("$120")))


