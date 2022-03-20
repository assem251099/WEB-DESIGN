
function showChar(e){
  alert(
    "Key Pressed: " + String.fromCharCode(e.charCode) + "\n"
    + "charCode: " + e.charCode + "\n"
    + "SHIFT key pressed: " + e.shiftKey + "\n"
    + "ALT key pressed: " + e.altKey + "\n"
  );
}