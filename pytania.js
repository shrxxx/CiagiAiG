// Baza zadań z ciągów wybrane z oficjalnych arkuszy maturalnych CKE
const bazaDanychZadan_v2 = [
    {
        pytanko: "W ciągu arytmetycznym a₁ = 3 oraz a₂₀ = 27. Wtedy suma S₂₀ = a₁ + a₂ + ... + a₁₉ + a₂₀ jest równa:",
        opcje: ["A. 95", "B. 200", "C. 300", "D. 100"],
        poprawna_indeks: 2,
        wyjasnienie: "Klasyk z tablic maturalnych. Bierzemy wzór na sumę: Sₙ = [(a₁ + aₙ) / 2] * n.<br>Podstawiamy to co mamy w zadaniu pod n = 20:<br>S₂₀ = [(3 + 27) / 2] * 20 = (30 / 2) * 20 = 15 * 20 = 300.<br>Wychodzi C."
    },
    {
        pytanko: "W ciągu arytmetycznym (aₙ) określonym dla n ≥ 1, dane są: a₁ = 5 i różnica r = 3. Wyraz a₄ tego ciągu jest równy:",
        opcje: ["A. 11", "B. 14", "C. 17", "D. 20"],
        poprawna_indeks: 1,
        wyjasnienie: "Korzystamy ze wzoru ogólnego na n-ty wyraz: aₙ = a₁ + (n-1)*r.<br>Szukamy czwartego wyrazu, czyli n=4:<br>a₄ = 5 + (4-1) * 3 = 5 + 3 * 3 = 5 + 9 = 14.<br>Zaznaczamy B."
    },
    {
        pytanko: "Liczby 2, x, 18 w podanej kolejności są pierwszym, drugim i trzecim wyrazem ciągu geometrycznego. Liczba x może być równa:",
        opcje: ["A. 6 lub -6", "B. 9", "C. 10 lub -10", "D. 4 lub -4"],
        poprawna_indeks: 0,
        wyjasnienie: "W ciągu geometrycznym kwadrat środkowego wyrazu to iloczyn sąsiednich wyrazów: x² = a₁ * a₃.<br>Podstawiamy liczby: x² = 2 * 18 = 36.<br>Pierwiastkujemy i mamy dwa rozwiązania: 6 lub -6. więc bierzemy Odp A."
    },
    {
        pytanko: "Dany jest ciąg geometryczny o wyrazach 2, 6, x+2. Liczba x jest równa:",
        opcje: ["A. 12", "B. 16", "C. 4", "D. 18"],
        poprawna_indeks: 1,
        wyjasnienie: "W ciągu geometrycznym każdy kolejny wyraz powstaje przez pomnożenie przez q. Widzimy z pierwszych wyrazów, że q = 6 / 2 = 3.<br>Skoro tak, to trzeci wyraz musi wynosić: 6 * 3 = 18.<br>Zapisujemy równanie: x + 2 = 18, czyli x = 16. Odpowiedź B."
    },
    {
        pytanko: "Dany jest ciąg geometryczny (aₙ) o ilorazie q = 2 i pierwszym wyrazie a₁ = 3. Trzeci wyraz tego ciągu (a₃) jest równy:",
        opcje: ["A. 6", "B. 18", "C. 12", "D. 24"],
        poprawna_indeks: 2,
        wyjasnienie: "Wzór ogólny z tablic: aₙ = a₁ * q^(n-1).<br>Dla n = 3 rozpisujemy to tak: a₃ = 3 * 2^(3-1) = 3 * 2² = 3 * 4 = 12.<br>Pasuje odpowiedź C."
    },
    {
        pytanko: "Liczby 3x, 6, 12 tworzą w podanej kolejności ciąg geometryczny. Wtedy liczba x wynosi:",
        opcje: ["A. 1", "B. 2", "C. 3", "D. 4"],
        poprawna_indeks: 0,
        wyjasnienie: "Znowu własność trzech wyrazów ciągu geometrycznego: środkowy do kwadratu = iloczyn skrajnych.<br>6² = 3x * 12<br>36 = 36x -> dzielimy przez 36 i wychodzi x = 1. Odpowiedź A."
    },
    {
        pytanko: "Dany jest ciąg arytmetyczny o wyrazach a₁ = -2 oraz a₂ = 2. Różnica r tego ciągu jest równy:",
        opcje: ["A. -4", "B. 4", "C. 0", "D. 2"],
        poprawna_indeks: 1,
        wyjasnienie: "Różnicę r liczymy najprościej jak się da - odejmując wyraz poprzedni od następnego: r = a₂ - a₁.<br>Trzeba tylko uważać na znaki: r = 2 - (-2) = 2 + 2 = 4. Czyli B."
    },
    {
        pytanko: "Dla ciągu arytmetycznego określonego wzorem ogólnym aₙ = 2n - 5, piąty wyraz tego ciągu (a₅) wynosi:",
        opcje: ["A. 5", "B. -5", "C. 10", "D. 3"],
        poprawna_indeks: 0,
        wyjasnienie: "Nic skomplikowanego, po prostu pod n we wzorze podstawiamy piątkę:<br>a₅ = 2 * 5 - 5 = 10 - 5 = 5. Poprawna to A."
    },
    {
        pytanko: "W ciągu geometrycznym (aₙ) wyraz a₁ = 4, a wyraz a₂ = 12. Iloraz q tego ciągu wynosi:",
        opcje: ["A. 8", "B. 2", "C. 3", "D. 6"],
        poprawna_indeks: 2,
        wyjasnienie: "Iloraz q wyznaczamy dzieląc wyraz drugi przez pierwszy: q = a₂ / a₁.<br>Wychodzi: q = 12 / 4 = 3. Opcja C."
    },
    {
        pytanko: "Między liczby 5 i 15 wstawiono liczbę k tak, że liczby 5, k, 15 tworzą ciąg arytmetyczny. Liczba k wynosi:",
        opcje: ["A. 7", "B. 10", "C. 9", "D. 12"],
        poprawna_indeks: 1,
        wyjasnienie: "Liczba k leży dokładnie pośrodku, więc korzystamy z własności ciągu arytmetycznego (środkowy to średnia sąsiadów):<br>k = (5 + 15) / 2 = 20 / 2 = 10. Zaznaczamy B."
    },
    {
        pytanko: "Liczby 2x + 1, 6, 16x + 2 są w podanej kolejności trzema początkowymi wyrazami ciągu arytmetycznego. Oblicz x.",
        opcje: ["A. 1/2", "B. 2", "C. 1", "D. 1/4"],
        poprawna_indeks: 0,
        wyjasnienie: "Środkowy wyraz (6) to średnia arytmetyczna z wyrazów po bokach:<br>6 = [(2x + 1) + (16x + 2)] / 2<br>Mnożymy obie strony przez 2, żeby pozbyć się ułamka:<br>12 = 18x + 3  =>  9 = 18x  =>  x = 9/18 = 1/2. Wychodzi opcja A."
    },
    {
        pytanko: "Liczby 2, -1, -4 są trzema początkowymi wyrazami ciągu arytmetycznego (aₙ). Wzór ogólny tego ciągu ma postać:",
        opcje: ["A. aₙ = -3n + 5", "B. aₙ = n - 3", "C. aₙ = -n + 3", "D. aₙ = 3n - 5"],
        poprawna_indeks: 0,
        wyjasnienie: "Widzimy od razu, że pierwszym wyrazem jest a₁ = 2. Różnica to r = -1 - 2 = -3.<br>Wstawiamy te dane do wzoru ogólnego z tablic:<br>aₙ = a₁ + (n-1)*r<br>aₙ = 2 + (n-1)*(-3) = 2 - 3n + 3 = -3n + 5. Taki wzór jest w podpunkcie A."
    },
    {
        pytanko: "W ciągu arytmetycznym (aₙ) dane są dwa wyrazy: a₂ = 11 i a₄ = 7. Suma czterech początkowych wyrazów tego ciągu jest równa:",
        opcje: ["A. 36", "B. 40", "C. 13", "D. 20"],
        poprawna_indeks: 1,
        wyjasnienie: "Od wyrazu drugiego do czwartego mijają dwie różnice: a₄ = a₂ + 2r.<br>7 = 11 + 2r -> przerzucamy i mamy -4 = 2r, czyli r = -2.<br>Skoro różnica to -2, to wyraz pierwszy wynosi 11 - (-2) = 13.<br>Kolejne cztery wyrazy to: 13, 11, 9, 7. Ich suma: 13 + 11 + 9 + 7 = 40. Odpowiedź B."
    },
    {
        pytanko: "Suma pierwszego i szóstego wyrazu pewnego ciągu arytmetycznego jest równa 13. Wynika stąd, że suma trzeciego i czwartego wyrazu tego ciągu jest równa:",
        opcje: ["A. 13", "B. 12", "C. 7", "D. 6"],
        poprawna_indeks: 0,
        wyjasnienie: "Rozpisujemy sobie to ze wzorów na a₁ i r:<br>a₁ + a₆ = a₁ + a₁ + 5r = 2a₁ + 5r = 13.<br>Teraz patrzymy na to, o co nas pytają: a₃ + a₄ = (a₁ + 2r) + (a₁ + 3r) = 2a₁ + 5r.<br>Wyszło dokładnie to samo wyrażenie, więc suma też musi być równa 13. Zaznaczamy A."
    },
    {
        pytanko: "W ciągu arytmetycznym (aₙ) dane są a₁ = -4 i r = 2. Którym wyrazem tego ciągu jest liczba 156?",
        opcje: ["A. 81", "B. 80", "C. 76", "D. 77"],
        poprawna_indeks: 0,
        wyjasnienie: "Szukamy n ze wzoru ogólnego, podstawiając za aₙ liczbę 156:<br>156 = -4 + (n-1)*2<br>156 = -4 + 2n - 2  =>  156 = 2n - 6<br>Przerzucamy szóstkę na lewo: 162 = 2n  =>  dzielimy na 2 i mamy n = 81. Wyraz 81 (odpowiedź A)."
    }
];
