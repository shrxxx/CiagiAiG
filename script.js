const URL_STRONY_Z_WYNIKAMI = "wynik.html"; 

let licznik_pytanek = 0;
let zdobyte_punkty = 0;
let czy_kliknal_odpowiedz = false;

// Losowanie kolejności pytań (Fisher-Yates Shuffle)
function przetasujTablice(tablica) {
    for (let i = tablica.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tablica[i], tablica[j]] = [tablica[j], tablica[i]];
    }
}

przetasujTablice(bazaDanychZadan_v2);

let historia_wyborow_ucznia = new Array(bazaDanychZadan_v2.length).fill(null);

const pole_na_pytanie = document.getElementById('zadanie_tresc_pole');
const kontener_na_guziki = document.getElementById('boxy_na_odpowiedzi_div');
const guzik_dalej = document.getElementById('nastepne_pytanie_btn');
const guzik_pomin = document.getElementById('pomin_pytanie_btn');
const numeracja_pola = document.getElementById('id_numeracja_zadania');
const pasek_progresu = document.getElementById('id_pasek_wypelnienie');

function inicjalizacjaQuizu() {
    licznik_pytanek = 0;
    zdobyte_punkty = 0;
    historia_wyborow_ucznia = new Array(bazaDanychZadan_v2.length).fill(null);
    wczytajNowePytanie();
}

function wczytajNowePytanie() {
    czy_kliknal_odpowiedz = false;
    guzik_dalej.classList.add('ukryj_to');
    guzik_pomin.classList.remove('ukryj_to');
    kontener_na_guziki.innerHTML = '';

    let daneAktualne = bazaDanychZadan_v2[licznik_pytanek];
    let zrobioneLiczba = historia_wyborow_ucznia.filter(el => el !== null).length;
    
    numeracja_pola.innerText = "Zadanie " + (licznik_pytanek + 1) + " (Rozwiązane: " + zrobioneLiczba + " z " + bazaDanychZadan_v2.length + ")";
    pole_na_pytanie.innerHTML = daneAktualne.pytanko;

    let procent_progresu = (zrobioneLiczba / bazaDanychZadan_v2.length) * 100;
    pasek_progresu.style.width = procent_progresu + "%";

    for (let i = 0; i < daneAktualne.opcje.length; i++) {
        const nowy_guzior = document.createElement('button');
        nowy_guzior.innerText = daneAktualne.opcje[i];
        nowy_guzior.classList.add('btn_odp_wzorzec');
        
        nowy_guzior.addEventListener('click', function() {
            sprawdzankoOdpowiedzi(i, nowy_guzior);
        });
        kontener_na_guziki.appendChild(nowy_guzior);
    }
}

function sprawdzankoOdpowiedzi(wybranyIndeks, kliknietyGuzik) {
    if (czy_kliknal_odpowiedz) return;
    czy_kliknal_odpowiedz = true;

    guzik_pomin.classList.add('ukryj_to');

    let poprawneIdx = bazaDanychZadan_v2[licznik_pytanek].poprawna_indeks;
    const wszystkieGuziki = kontener_na_guziki.getElementsByTagName('button');

    historia_wyborow_ucznia[licznik_pytanek] = wybranyIndeks;

    if (wybranyIndeks === poprawneIdx) {
        kliknietyGuzik.classList.add('git_odpowiedz');
        zdobyte_punkty++;
    } else {
        kliknietyGuzik.classList.add('lipa_odpowiedz');
        wszystkieGuziki[poprawneIdx].classList.add('git_odpowiedz');
    }

    for (let j = 0; j < wszystkieGuziki.length; j++) {
        wszystkieGuziki[j].disabled = true;
    }
    guzik_dalej.classList.remove('ukryj_to');
}

function znajdzNastepnyIndeks() {
    let idx = (licznik_pytanek + 1) % bazaDanychZadan_v2.length;
    for (let i = 0; i < bazaDanychZadan_v2.length; i++) {
        if (historia_wyborow_ucznia[idx] === null) {
            return idx;
        }
        idx = (idx + 1) % bazaDanychZadan_v2.length;
    }
    return -1;
}

guzik_dalej.addEventListener('click', function() {
    let nastepnyIdx = znajdzNastepnyIndeks();
    if (nastepnyIdx !== -1) {
        licznik_pytanek = nastepnyIdx;
        wczytajNowePytanie();
    } else {
        zapiszWynikiIPrekieruj();
    }
});

guzik_pomin.addEventListener('click', function() {
    let nastepnyIdx = znajdzNastepnyIndeks();
    if (nastepnyIdx !== -1 && nastepnyIdx !== licznik_pytanek) {
        licznik_pytanek = nastepnyIdx;
        wczytajNowePytanie();
    } else {
        alert("To jest jedyne pozostałe pytanie! Musisz na nie odpowiedzieć.");
    }
});

function zapiszWynikiIPrekieruj() {
    let daneWynikowe = {
        kolejnosc: bazaDanychZadan_v2.map(z => z.pytanko),
        wybory: historia_wyborow_ucznia
    };
    localStorage.setItem('wynikiMaturaQuiz', JSON.stringify(daneWynikowe));
    window.location.href = URL_STRONY_Z_WYNIKAMI;
}

window.onload = inicjalizacjaQuizu;