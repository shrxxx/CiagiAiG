window.onload = function() {
    const lista_wynikow_szczegoly = document.getElementById('lista_wynikow_szczegoly');
    const zapisaneDane = localStorage.getItem('wynikiMaturaQuiz');

    if (!zapisaneDane) {
        document.body.innerHTML = "<h2 style='color:white; text-align:center; margin-top:50px;'>Błąd: Brak wygenerowanych wyników. Rozwiąż quiz najpierw!</h2>";
        return;
    }

    try {
        let daneWynikowe = JSON.parse(zapisaneDane);
        let kolejnoscPytanNaQuizie = daneWynikowe.kolejnosc;
        let wyboryUcznia = daneWynikowe.wybory;

        let zdobyte_punkty = 0;
        lista_wynikow_szczegoly.innerHTML = '';

        for (let k = 0; k < kolejnoscPytanNaQuizie.length; k++) {
            let trescPytania = kolejnoscPytanNaQuizie[k];
            let uczenWybralIdx = wyboryUcznia[k];

            let zadanie = bazaDanychZadan_v2.find(z => z.pytanko === trescPytania);
            if (!zadanie) continue;

            let poprawneIdx = zadanie.poprawna_indeks;
            let czyDobrze = (uczenWybralIdx === poprawneIdx);

            if (czyDobrze) zdobyte_punkty++;

            const karta = document.createElement('div');
            karta.classList.add('karta_zadania_koniec');
            karta.classList.add(czyDobrze ? 'status_dobrze' : 'status_zle');

            let ikona = czyDobrze ? "✅ Dobrze" : "❌ Źle";
            let htmlKarty = `
                <h4>${ikona} - Zadanie ${k+1}</h4>
                <p style="margin-top: 8px; font-weight: 600;">${zadanie.pytanko}</p>
                <div class="wybory_ucznia_info">
                    <span style="color: ${czyDobrze ? '#2ecc71' : '#e74c3c'}">Twoja odpowiedź: <b>${zadanie.opcje[uczenWybralIdx] || "Brak odpowiedzi (Pominięto)"}</b></span><br>
                    <span style="color: #2ecc71">Poprawna odpowiedź: <b>${zadanie.opcje[poprawneIdx]}</b></span>
                </div>
                <button class="guzik_wyjasnienia_styl" onclick="przelaczWyjasnienie(${k})">Pokaż Wyjaśnienie</button>
                <div id="wyjasnienie_box_${k}" class="tresc_wyjasnienia_box ukryj_to">
                    ${zadanie.wyjasnienie}
                </div>
            `;
            karta.innerHTML = htmlKarty;
            lista_wynikow_szczegoly.appendChild(karta);
        }

        let maxPunktow = kolejnoscPytanNaQuizie.length;
        document.getElementById('id_punkty_cyfra').innerText = zdobyte_punkty + " / " + maxPunktow;

        let procent_wynik = (zdobyte_punkty / maxPunktow) * 100;
        let tekstOcena = "";
        if (procent_wynik === 100) tekstOcena = "Ocena: Celujący (6)";
        else if (procent_wynik >= 85) tekstOcena = "Ocena: Bardzo dobry (5)";
        else if (procent_wynik >= 70) tekstOcena = "Ocena: Dobry (4)";
        else if (procent_wynik >= 50) tekstOcena = "Ocena: Dostateczny (3)";
        else if (procent_wynik >= 30) tekstOcena = "Ocena: Dopuszczający (2)";
        else tekstOcena = "Ocena: Niedostateczny (1)";

        document.getElementById('info_od_nauczyciela').innerText = tekstOcena;

    } catch (e) {
        console.error(e);
    }
};

window.przelaczWyjasnienie = function(indeksZadania) {
    const boksik = document.getElementById('wyjasnienie_box_' + indeksZadania);
    boksik.classList.toggle('ukryj_to');
};