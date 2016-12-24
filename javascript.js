function gimmegooglefont(name){
  var el = document.createElement("Link");
  el.href = "https://fonts.googleapis.com/css?family=" + name;
  el.rel = "stylesheet";
  document.body.appendchild(el);
}
function calculator(funct, num1, num2){
  switch(funct):
    case "add":
      return num1 + num2;
      break;
    case "sub":
      return num1 - num2;
      break;
    case "mul":
      return num1 * num2;
      break;
    case "div":
      return num1 / num2;
      break;
    case "exp":
      return num1^num2;
      break;
}

function reverse(str) {
    var neostr = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        neostr += str[i]; 
    }
    return newString; 
}
