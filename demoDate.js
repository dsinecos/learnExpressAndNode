var rawDate = new Date();

var month = rawDate.getMonth() + 1

var date = rawDate.getFullYear() + "-" + month + "-" + rawDate.getDate() + " " + rawDate.getHours() + ":" + rawDate.getMinutes();

console.log(date);