var detectNetwork = function(cardNumber) {
  
if (isAmericanExpress(cardNumber))
  return "American Express";
if (isSwitch(cardNumber))
  return 'Switch';
if (IsVisa(cardNumber))
  return "Visa";
if (IsMasterCard(cardNumber))
return "MasterCard";
if (isDinersClub(cardNumber))
return "Diner's Club";
if (isDiscover(cardNumber))
	return "Discover";
if (isMaestro(cardNumber))
	return "Maestro";
if (isUnionPay(cardNumber))
  return "China UnionPay"
};

function IsVisa(cardNumber){
return ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && cardNumber.charAt(0) === "4");
}
function IsMasterCard(cardNumber){
  var startsWith = cardNumber.substring(0, 2);
  var arr = ["51", "52", "53", "54", "55"];
return (cardNumber.length === 16 && arr.includes(startsWith));
}
function isAmericanExpress(cardNumber){
  var startsWith = cardNumber.substring(0, 2);
  var arr = ["34", "37"];
  return (cardNumber.length === 15 && arr.includes(startsWith));
  }
function isDinersClub(cardNumber){
var startsWith = cardNumber.substring(0, 2);
var arr = ["38", "39"];
  return (cardNumber.length === 14 && arr.includes(startsWith)); 
}

function isDiscover(cardNumber) {
  var prefixes = ["644", "645", "646", "647", "648", "649"]

  return ((cardNumber.slice(0, 4) === "6011" || cardNumber.slice(0,2) === "65" || prefixes.indexOf(cardNumber.slice(0, 3)) !== -1)
   && (cardNumber.length === 16 || cardNumber.length === 19));
}
function isMaestro(cardNumber){
	var arr = ["5018", "5020", "5038", "6304"];
var startsWith = cardNumber.substring(0, 4);
return ((cardNumber.length > 11 || cardNumber.length < 20) && arr.includes(startsWith));
}

function isUnionPay(cardNumber){
  var arr = [];
  for (var i = 622126; i <=  622925; i++){
   arr.push(i.toString());
}
for (var j = 6282; j <= 6288; j++){
  arr.push(j.toString());
}
arr.push('624', '625', '626');
return ((arr.indexOf(cardNumber.slice(0, 6)) !== -1 ||  arr.indexOf(cardNumber.slice(0, 4)) !== -1 || arr.indexOf(cardNumber.slice(0, 3)) !== -1) && (cardNumber.length > 15 && cardNumber.length < 20));
}
function isSwitch(cardNumber){
  var arr = ["4903", "4905", "4911", "4936", "564182", "633110", "6333", "6759"];
return ((arr.indexOf(cardNumber.slice(0, 6)) !== -1 ||  arr.indexOf(cardNumber.slice(0, 4)) !== -1 || arr.indexOf(cardNumber.slice(0, 3)) !== -1) && (cardNumber.length === 16 || cardNumber.length === 19 || cardNumber.length === 18));
}

























