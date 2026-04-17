const usluge = [
  { naziv: "Hitan SERVIS",                                    dana: 1  },
  { naziv: "Dijagnostika kvara",                              dana: 1  },
  { naziv: "Sitne intervencije",                              dana: 1  },
  { naziv: "Backup podataka do 10Gb",                         dana: 2  },
  { naziv: "Instalacija komponente",                          dana: 1  },
  { naziv: "Konfigurisanje internet konekcije",               dana: 1  },
  { naziv: "Instalacija OS-a i softvera",                     dana: 2  },
  { naziv: "Instalacija i podešavanje antivirusnog softvera", dana: 1  },
  { naziv: "Čišćenje sistema od virusa",                      dana: 3  },
  { naziv: "Sklapanje računara",                              dana: 2  },
  { naziv: "Čišćenje računara od prašine kompresorom",        dana: 1  },
  { naziv: "Krimpovanje kabla (po konektoru)",                dana: 1  },
  { naziv: "Popravka konektora (LAN, DC, USB)",               dana: 3  },
];

document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("uslugeSelect");

  usluge.forEach(function (usluga, index) {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = usluga.naziv;
    select.appendChild(option);
  });
});

function prikaziRezultat() {
  const select = document.getElementById("uslugeSelect");
  const rezultat = document.getElementById("rezultat");
  const selectedIndex = select.value;

  if (selectedIndex === "") {
    rezultat.style.display = "none";
    return;
  }

  const usluga = usluge[selectedIndex];
  const danaTekst = usluga.dana === 1 ? "dan" : usluga.dana < 5 ? "dana" : "dana";

  rezultat.style.display = "block";
  rezultat.innerHTML =
    "<strong>" + usluga.naziv + "</strong><br>" +
    "Procenjeno vreme: <span class='badge bg-success fs-6'>" +
    usluga.dana + " " + danaTekst + "</span>";
}
