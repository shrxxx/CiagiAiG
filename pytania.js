// Baza 15 unikalnych zadań maturalnych
const bazaDanychZadan_v2 = [
    {
    pytanko: "W ciągu arytmetycznym a₁ = 3 oraz a₂₀ = 27. Wtedy suma S₂₀ = a₁ + a₂ + ... + a₁₉ + a₂₀ jest równa:",
    opcje: ["A. 95", "B. 200", "C. 300", "D. 100"],
    poprawna_indeks: 2, // Zmiana na 2 (czyli opcja C)
    wyjasnienie: "Korzystamy ze wzoru na sumę n początkowych wyrazów ciągu arytmetycznego: Sₙ = [(a₁ + aₙ) / 2] * n.<br>Dla n = 20 podstawiamy dane z zadania:<br>S₂₀ = [(a₁ + a₂₀) / 2] * 20<br>S₂₀ = [(3 + 27) / 2] * 20<br>S₂₀ = [30 / 2] * 20 = 15 * 20 = 300.<br>Prawidłowa odpowiedź to C."
    },
    {
        pytanko: "W ciągu arytmetycznym (aₙ) określonym dla n ≥ 1, dane są: a₁ = 5 i różnica r = 3. Wyraz a₄ tego ciągu jest równy:",
        opcje: ["A. 11", "B. 14", "C. 17", "D. 20"],
        poprawna_indeks: 1,
        wyjasnienie: "Stosujemy wzór ogólny ciągu arytmetycznego: aₙ = a₁ + (n-1)*r.<br>Chcemy obliczyć a₄, więc podstawiamy n = 4:<br>a₄ = a₁ + 3*r<br>a₄ = 5 + 3 * 3 = 5 + 9 = 14.<br>Prawidłowa odpowiedź to B."
    },
    {
        pytanko: "Liczby 2, x, 18 w podanej kolejności są pierwszym, drugim i trzecim wyrazem ciągu geometrycznego. Liczba x może być równa:",
        opcje: ["A. 6", "B. 9", "C. 10", "D. 4"],
        poprawna_indeks: 0,
        wyjasnienie: "W ciągu geometrycznym kwadrat wyrazu środkowego jest równy iloczynowi sąsiednich wyrazów: x² = a₁ * a₃.<br>Zatem: x² = 2 * 18 = 36.<br>Pierwiastkując, otrzymujemy x = 6 lub x = -6. W opcjach mamy liczbę 6.<br>Prawidłowa odpowiedź to A."
    },
{
        pytanko: "W nieskończonym ciągu arytmetycznym (aₙ) określonym dla n ≥ 1, suma jedenastu początkowych wyrazów tego ciągu jest równa 187. Średnia arytmetyczna pierwszego, trzeciego i dziewiątego wyrazu tego ciągu jest równa 12. Wyrazy a₁, a₃, aₖ ciągu (aₙ), w podanej kolejności, tworzą nowy, trzywyrazowy ciąg geometryczny. Oblicz k:",
        opcje: ["A. 6", "B. 11", "C. 10", "D. 16"],
        poprawna_indeks: 1,
        wyjasnienie: "<b>Krok 1. Wypisanie danych i stworzenie układu równań:</b><br>- Suma jedenastu wyrazów: S₁₁ = 187<br>- Średnia wyrazów 1, 3 i 9: (a₁ + a₃ + a₉) / 3 = 12<br><br><b>Krok 2. Wyznaczenie różnicy ciągu arytmetycznego (r):</b><br>Korzystamy ze wzoru ogólnego aₙ = a₁ + (n-1)r:<br>a₃ = a₁ + 2r<br>a₉ = a₁ + 8r<br>a₁₁ = a₁ + 10r<br><br>Ze wzoru na sumę Sₙ = [(a₁ + aₙ) / 2] * n wiemy, że:<br>S₁₁ = [(a₁ + a₁₁) / 2] * 11 = [(a₁ + a₁ + 10r) / 2] * 11 = [(2a₁ + 10r) / 2] * 11 = (a₁ + 5r) * 11 = 11a₁ + 55r<br><br>Podstawiamy to do naszego układu równań:<br>1) 11a₁ + 55r = 187  | :11  ->  a₁ + 5r = 17<br>2) (a₁ + a₁ + 2r + a₁ + 8r) / 3 = 12  ->  (3a₁ + 10r) / 3 = 12  | *3  ->  3a₁ + 10r = 36<br><br>Mnożymy pierwsze równanie przez -3, aby rozwiązać układ metodą przeciwnych współczynników:<br>-3a₁ - 15r = -51<br>3a₁ + 10r = 36<br><br>Dodajemy równania stronami:<br>-5r = -15  =>  <b>r = 3</b><br><br><b>Krok 3. Obliczenie wartości pierwszego i trzeciego wyrazu:</b><br>Podstawiamy r = 3 do równania a₁ + 5r = 17:<br>a₁ + 5*(3) = 17  =>  a₁ + 15 = 17  =>  <b>a₁ = 2</b><br><br>Obliczamy wartość trzeciego wyrazu (a₃):<br>a₃ = a₁ + 2r = 2 + 2*3 = 2 + 6  =>  <b>a₃ = 8</b><br><br><b>Krok 4. Zapisanie wzoru na wyraz aₖ:</b><br>aₖ = a₁ + (k-1)r = 2 + (k-1)*3 = 2 + 3k - 3  =>  <b>aₖ = 3k - 1</b><br><br><b>Krok 5. Obliczenie wartości k:</b><br>Skoro a₁, a₃, aₖ tworzą ciąg geometryczny, kwadrat wyrazu środkowego jest równy iloczynowi skrajnych:<br>(a₃)² = a₁ * aₖ<br>8² = 2 * (3k - 1)<br>64 = 6k - 2<br>66 = 6k  | :6<br><b>k = 11</b><br><br>Prawidłowa odpowiedź to B."
    },
    {
        pytanko: "Dany jest ciąg geometryczny (aₙ) o ilorazie q = 2 i pierwszym wyrazie a₁ = 3. Trzeci wyraz tego ciągu (a₃) jest równy:",
        opcje: ["A. 6", "B. 18", "C. 12", "D. 24"],
        poprawna_indeks: 2,
        wyjasnienie: "Wzór ogólny na n-ty wyraz ciągu geometrycznego to: aₙ = a₁ * q^(n-1).<br>Dla trzeciego wyrazu (n = 3): a₃ = a₁ * q².<br>Podstawiamy dane: a₃ = 3 * 2² = 3 * 4 = 12.<br>Prawidłowa odpowiedź to C."
    },
    {
        pytanko: "Liczby 3x, 6, 12 tworzą w podanej kolejności ciąg geometryczny. Wtedy liczba x wynosi:",
        opcje: ["A. 1", "B. 2", "C. 3", "D. 4"],
        poprawna_indeks: 0,
        wyjasnienie: "Korzystamy z zależności dla ciągu geometrycznego: wyraz środkowy do kwadratu równa się iloczynowi skrajnych.<br>6² = 3x * 12<br>36 = 36x<br>Dzielimy obustronnie przez 36 i otrzymujemy x = 1.<br>Prawidłowa odpowiedź to A."
    },
    {
        pytanko: "Dany jest ciąg arytmetyczny o wyrazach a₁ = -2 oraz a₂ = 2. Różnica r tego ciągu jest równa:",
        opcje: ["A. -4", "B. 4", "C. 0", "D. 2"],
        poprawna_indeks: 1,
        wyjasnienie: "Różnicę ciągu arytmetycznego r obliczamy, odejmując od wyrazu następnego wyraz poprzedni: r = a₂ - a₁.<br>Podstawiamy: r = 2 - (-2) = 2 + 2 = 4.<br>Prawidłowa odpowiedź to B."
    },
    {
        pytanko: "Dla ciągu arytmetycznego określonego wzorem ogólnym aₙ = 2n - 5, piąty wyraz tego ciągu (a₅) wynosi:",
        opcje: ["A. 5", "B. -5", "C. 10", "D. 3"],
        poprawna_indeks: 0,
        wyjasnienie: "Aby obliczyć wyraz a₅, należy pod n we wzorze ogólnym podstawić liczbę 5:<br>a₅ = 2 * 5 - 5<br>a₅ = 10 - 5 = 5.<br>Prawidłowa odpowiedź to A."
    },
    {
        pytanko: "W ciągu geometrycznym (aₙ) wyraz a₁ = 4, a wyraz a₂ = 12. Iloraz q tego ciągu wynosi:",
        opcje: ["A. 8", "B. 2", "C. 3", "D. 6"],
        poprawna_indeks: 2,
        wyjasnienie: "Iloraz ciągu geometrycznego q obliczamy dzieląc wyraz następny przez poprzedni: q = a₂ / a₁.<br>Podstawiamy: q = 12 / 4 = 3.<br>Prawidłowa odpowiedź to C."
    },
    {
        pytanko: "Między liczby 5 i 15 wstawiono liczbę k tak, że liczby 5, k, 15 tworzą ciąg arytmetyczny. Liczba k wynosi:",
        opcje: ["A. 7", "B. 10", "C. 9", "D. 12"],
        poprawna_indeks: 1,
        wyjasnienie: "Liczba k jest środkowym wyrazem ciągu arytmetycznego, więc wyliczamy ją jako średnią arytmetyczną sąsiadów:<br>k = (5 + 15) / 2 = 20 / 2 = 10.<br>Prawidłowa odpowiedź to B."
    },
    {
    pytanko: "Liczby 2x + 1, 6, 16x + 2 są w podanej kolejności pierwszym, drugim i trzecim wyrazem ciągu arytmetycznego.<br>Oblicz x.",
    opcje: ["A. 1/2", "B. 2", "C. 1", "D. 1/4"],
    poprawna_indeks: 0,
    wyjasnienie: "Wyraz środkowy (6) jest średnią arytmetyczną skrajnych wyrazów:<br>6 = [(2x + 1) + (16x + 2)] / 2<br>Mnożymy obustronnie przez 2:<br>12 = 2x + 1 + 16x + 2<br>12 = 18x + 3<br>Odejmujemy 3 od obu stron:<br>9 = 18x  ->  x = 9 / 18 = 1/2 (czyli 0.5).<br>Prawidłowa odpowiedź to A."
    },
    {
        pytanko: "Liczby 2, -1, -4 są trzema początkowymi wyrazami ciągu arytmetycznego (aₙ), określonego dla liczb naturalnych n ≥ 1. Wzór ogólny tego ciągu ma postać:",
        opcje: ["A. aₙ = -3n + 5", "B. aₙ = n - 3", "C. aₙ = -n + 3", "D. aₙ = 3n - 5"],
        poprawna_indeks: 0,
        wyjasnienie: "Z treści wiemy, że a₁ = 2 oraz a₂ = -1. Obliczamy różnicę r tego ciągu:<br>r = a₂ - a₁ = -1 - 2 = -3.<br>Podstawiamy te dane do wzoru ogólnego ciągów arytmetycznych: aₙ = a₁ + (n - 1) * r:<br>aₙ = 2 + (n - 1) * (-3)<br>aₙ = 2 - 3n + 3 = -3n + 5.<br>Prawidłowa odpowiedź to A."
    },
    {
        pytanko: "W ciągu arytmetycznym (aₙ), określonym dla n ≥ 1, dane są dwa wyrazy: a₂ = 11 i a₄ = 7. Suma czterech początkowych wyrazów tego ciągu jest równa:",
        opcje: ["A. 36", "B. 40", "C. 13", "D. 20"],
        poprawna_indeks: 1,
        wyjasnienie: "W ciągu arytmetycznym istnieje zależność: a₄ = a₂ + 2r.<br>Podstawiamy dane: 7 = 11 + 2r  <br>  -4 = 2r  <br>  r = -2.<br>Mając różnicę r = -2, cofamy się do pierwszego wyrazu:<br>a₁ = a₂ - r = 11 - (-2) = 13.<br>Wypisujemy cztery pierwsze wyrazy: a₁ = 13, a₂ = 11, a₃ = 9, a₄ = 7.<br>Suma S₄ = 13 + 11 + 9 + 7 = 40.<br>Prawidłowa odpowiedź to B."
    },
    {
        pytanko: "Suma pierwszego i szóstego wyrazu pewnego ciągu arytmetycznego jest równa 13. Wynika stąd, że suma trzeciego i czwartego wyrazu tego ciągu jest równa:",
        opcje: ["A. 13", "B. 12", "C. 7", "D. 6"],
        poprawna_indeks: 0,
        wyjasnienie: "Rozpiszmy wyrazy za pomocą wyrazu a₁ i różnicy r:<br>a₁ + a₆ = a₁ + (a₁ + 5r) = 2a₁ + 5r = 13.<br>Teraz rozpiszmy sumę wyrazu trzeciego i czwartego:<br>a₃ + a₄ = (a₁ + 2r) + (a₁ + 3r) = 2a₁ + 5r.<br>Jak widać, obie te sumy sprowadzają się do dokładnie takiego samego wyrażenia (2a₁ + 5r), czyli ich wynik wynosi tyle samo, czyli 13.<br>Prawidłowa odpowiedź to A."
    },
    {
        pytanko: "W ciągu arytmetycznym (aₙ) określonym dla n ≥ 1 dane są a₁ = -4 i r = 2. Którym wyrazem tego ciągu jest liczba 156?",
        opcje: ["A. 81", "B. 80", "C. 76", "D. 77"],
        poprawna_indeks: 0,
        wyjasnienie: "Szukamy numeru n, dla którego aₙ = 156. Korzystamy ze wzoru ogólnego:<br>aₙ = a₁ + (n - 1) * r<br>156 = -4 + (n - 1) * 2<br>156 = -4 + 2n - 2<br>156 = 2n - 6<br>162 = 2n  ->  n = 162 / 2 = 81.<br>Liczba 156 jest osiemdziesiątym pierwszym wyrazem tego ciągu.<br>Prawidłowa odpowiedź to A."
    }
];