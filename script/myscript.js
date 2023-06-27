
var alfab = "0123456789abcdef";
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var kleurvak = document.getElementsByTagName("td");
var knop = document.getElementsByTagName("button");
var woord = ["vraag", "mens", "boom", "teen", "schoen", "zool", "tafel", "toetje"];

function kiesKleur() {
    var y = 0, x = 0, roodcijfer1 = 0, roodcijfer2 = 0, groencijfer1 = 0, groencijfer2 = 0, blauwcijfer1 = 0, blauwcijfer2 = 0, rood = '', antirood = '', groen = '', antigroen = '', blauw = '', antiblauw = '', randomkleur = '', antirandomkleur = '';
    knop[0].innerHTML = "Probeer nog een paar andere kleuren";
    /*dit kan een stuk korter, maar het gaat niet echt om de js in deze opdracht.*/
    for (x = 0; x < kleurvak.length; x += 1) {
        /*Pak een random nummer van maximaal 7 (want math.floor8), doe het plus 8, is een getal tussen 7 en 15, gebruik die om een getal of cijfer te pakken. Zo krijg je niet al te donkere kleuren.*/
        roodcijfer1 = getRandomInt(8) + 8;
        roodcijfer2 = getRandomInt(8) + 8;
        rood = alfab[roodcijfer1] + alfab[roodcijfer2];
        /*Vanwege de lichte kleuren zijn de donkere kleuren ook erg donker, dus die heb ik iets lichter gemaakt. Door math.floor wordt het weer een integer en kan hij gebruikt worden om de alfab array te doorzoeken. Ik had achteraf gezien beter een bafla array kunnen maken, dat had een hoop tijd gescheeld. Maar goed, het werkt nu al en het gaat toch niet om de js.*/
        antirood = alfab[Math.floor(15 - (roodcijfer1 * 0.8))] + alfab[Math.floor(15 - (roodcijfer2 * 0.8))];
        groencijfer1 = getRandomInt(8) + 8;
        groencijfer2 = getRandomInt(8) + 8;
        groen = alfab[groencijfer1] + alfab[groencijfer2];
        antigroen = alfab[Math.floor(15 - (groencijfer1 * 0.8))] + alfab[Math.floor(15 - (groencijfer2 * 0.8))];
        blauwcijfer1 = getRandomInt(8) + 8;
        blauwcijfer2 = getRandomInt(8) + 8;
        blauw = alfab[blauwcijfer1] + alfab[blauwcijfer2];
        antiblauw = alfab[Math.floor(15 - (blauwcijfer1 * 0.8))] + alfab[Math.floor(15 - (blauwcijfer2 * 0.8))];
        antirandomkleur = "#" + antirood + antigroen + antiblauw;
        randomkleur = "#" + rood + groen + blauw;
        kleurvak[x].style.backgroundColor = randomkleur;
        kleurvak[x].style.color = antirandomkleur;
        if (x % 2 == 0)
            { /*voor even getallen: y=0, neem artikelnummer y uit array woord, y= y+1.*/
            kleurvak[x].innerHTML = woord[y]+"<br><br>achtergrond<br>"+ randomkleur +"<br><br>tekst<br>"+ antirandomkleur;
            y++;
        }
        else 
            { /*voor oneven getallen: ik heb de vuurtoren afbeeldingen oneven genummerd zodat ik niet gebruik hoefde te maken van een nieuwe var.*/
            kleurvak[x].innerHTML = "<img src='afbeeldingen/vuurtoren" + x + ".jpg' alt='vuurtoren'>";
        }
    }
}