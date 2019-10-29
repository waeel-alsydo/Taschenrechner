function add(number) {
  //fügen Nummer im Bildschirm hinzu
  var myNumber = document.getElementById('view').value;
  var lastNumber = myNumber[myNumber.length - 1];
  if (!isNaN(lastNumber) || !isNaN(number)) {
    // wenn ich zwei nummer oder mehr schreiben möchte
    document.getElementById('view').value = myNumber + number;
  }
}
function egual() {
  // Berechnungen durchführen
  var sum = document.getElementById('view').value;
  if (sum) {
    document.getElementById('view').value = eval(sum);
  }
}
function back() {
  // löschen letzte nummer vom Bildschirm
  var num = document.getElementById('view').value;
  document.getElementById('view').value = num.substring(0, num.length - 1);
}
function clean() {
  //löschen was ich im Bildschirm geschrieben habe
  document.getElementById('view').value = '';
}
