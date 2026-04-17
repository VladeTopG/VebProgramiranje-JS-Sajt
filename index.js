const usluge = [
  { naziv: "Hitan SERVIS",                                    dana: 1 },
  { naziv: "Dijagnostika kvara",                              dana: 1 },
  { naziv: "Sitne intervencije",                              dana: 1 },
  { naziv: "Backup podataka do 10Gb",                         dana: 2 },
  { naziv: "Instalacija komponente",                          dana: 1 },
  { naziv: "Konfigurisanje internet konekcije",               dana: 1 },
  { naziv: "Instalacija OS-a i softvera",                     dana: 2 },
  { naziv: "Instalacija i podešavanje antivirusnog softvera", dana: 1 },
  { naziv: "Čišćenje sistema od virusa",                      dana: 3 },
  { naziv: "Sklapanje računara",                              dana: 2 },
  { naziv: "Čišćenje računara od prašine kompresorom",        dana: 1 },
  { naziv: "Krimpovanje kabla (po konektoru)",                dana: 1 },
  { naziv: "Popravka konektora (LAN, DC, USB)",               dana: 3 },
];

document.addEventListener("DOMContentLoaded", function () {
  const lista = document.getElementById("uslugeCheckboxLista");

  usluge.forEach(function (usluga, index) {
    const div = document.createElement("div");
    div.className = "usluga-checkbox-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "usluga_" + index;
    checkbox.value = index;
    checkbox.addEventListener("change", prikaziRezultat);

    const label = document.createElement("label");
    label.htmlFor = "usluga_" + index;
    label.textContent = usluga.naziv + " (" + usluga.dana + (usluga.dana === 1 ? " dan" : " dana") + ")";

    div.appendChild(checkbox);
    div.appendChild(label);
    lista.appendChild(div);
  });
});

function prikaziRezultat() {
  const checkboxovi = document.querySelectorAll("#uslugeCheckboxLista input[type='checkbox']:checked");
  const rezultat = document.getElementById("rezultat");

  if (checkboxovi.length === 0) {
    rezultat.style.display = "none";
    return;
  }

  let ukupnoDana = 0;
  let izabraneUsluge = [];

  checkboxovi.forEach(function (cb) {
    const usluga = usluge[cb.value];
    ukupnoDana += usluga.dana;
    izabraneUsluge.push(usluga.naziv);
  });

  const danaTekst = ukupnoDana === 1 ? "dan" : "dana";

  let html = "<strong>Izabrane usluge:</strong><ul class='usluge-lista'>";
  izabraneUsluge.forEach(function (naziv) {
    html += "<li>" + naziv + "</li>";
  });
  html += "</ul>";
  html += "<div class='ukupno-dana'>Ukupno vreme: <span class='badge-dana'>" + ukupnoDana + " " + danaTekst + "</span></div>";

  rezultat.style.display = "block";
  rezultat.innerHTML = html;
}

function resetujIzbor() {
  const checkboxovi = document.querySelectorAll("#uslugeCheckboxLista input[type='checkbox']");
  checkboxovi.forEach(function (cb) { cb.checked = false; });
  document.getElementById("rezultat").style.display = "none";
}
