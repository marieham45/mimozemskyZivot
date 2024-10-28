/*
Podívejte se na stránku existuje-mimozemsky-zivot.cz. Podle toho, v jakém období toto zadání čtete, se dozvíte, zda jsme již objevili život mimo planetu Zemi. Stránka zobrazuje pouze jednoduchou zprávu. Podobných stránek lze na internetu najít vícero. Například

sediuzbabis.cz
uzjepatek.cz
Vytvořte podobnou stránku s vaším vlastním tématem.

Vytvořte prázdnou stránku, do které vložte knihovnu Day.js.
Vyberte si nějakou budoucí událost, jejíž datum je pevně určeno. Za pomoci knihovny Day.js vytvořte stránku zobrazující velké ANO nebo NE případně krátkou zprávu podle toho, zda už událost nastala či nikoliv.
Bonus
Publikuje vaši stránku přes GitHub Pages (případně Netlify drop či jinou alternativu, pokud je znáte).
*/

const heading = document.querySelector("#heading");
const endOf2024 = dayjs("2024-01-31");
const now = dayjs();

if (now.isAfter(endOf2024)) {
  heading.textContent = "Je.";
} else {
  heading.textContent = "Není.";
}
