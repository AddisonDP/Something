function gimmegooglefont(name){
  var name = name;
  var el = document.createElement("Link");
  el.href = "https://fonts.googleapis.com/css?family=" + name;
  el.rel = "stylesheet";
  document.body.appendchild(el);
}
