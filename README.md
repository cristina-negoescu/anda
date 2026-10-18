# Psihoterapie perinatală — spațiu pentru tine

Site de prezentare în limba română pentru o practică individuală de psihoterapie perinatală. React 19, TypeScript, Vite și Tailwind CSS 4. Design responsive cu cinci pagini, meniu mobil, întrebări extensibile și formular demonstrativ cu validare nativă.

## Pornire

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

Build-ul verifică tipurile TypeScript și generează `dist/`. La găzduire, toate rutele aplicației trebuie redirecționate către `index.html` (SPA fallback). Pentru GitHub Pages sunt necesare configurarea bazei și o strategie de rutare; nu este inclusă publicarea automată.

## Pagini

- `/` — Acasă
- `/despre-mine` — prezentare și valori
- `/cum-te-pot-ajuta` — arii orientative
- `/prima-sedinta` — proces, detalii și întrebări frecvente
- `/contact` — formular demonstrativ
- `/confidentialitate` — informații despre demonstrație

## Personalizare înainte de publicare

Identitatea vizuală folosește denumirea „PSIHOTERAPIE PERINATALĂ”. Înlocuiți textele marcate cu numele, titulatura, acreditările verificate, abordarea, experiența și ariile reale de competență. Completați fotografia personală, tariful, durata, adresa, formatul și politica de anulare. Nu sunt inventate calificări sau testimoniale.

Formularul **nu trimite și nu salvează date** și comunică explicit acest lucru. Conectați un serviciu securizat de contact înainte de lansare, adăugați tratarea erorilor și protecție anti-spam, apoi actualizați mesajele și politica de confidențialitate. Nu introduceți date medicale în demo.

Fotografia de pădure este încărcată de la Unsplash, iar fonturile de la Google Fonts. Pentru producție se recomandă găzduire locală și actualizarea politicii privind resursele externe. Nu sunt integrate analytics sau cookies de marketing. Fonturile au fallback local.

Paleta este definită în `src/styles.css`: `#245C59`, `#8FA99A`, `#F7F4ED`, `#D9A47E`. Conținutul și componentele sunt în `src/main.tsx`.

Repository țintă: https://github.com/cristina-negoescu/anda. Proiectul este generat local; nu include un push sau o publicare automată.
