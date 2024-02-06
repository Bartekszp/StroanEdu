let czyOtwarte = false;
///////////////////////////////////////////////
function sprawdzSzerokoscOkna() {
    const szerokoscOkna = window.innerWidth;
    console.log('Szerokość okna:', szerokoscOkna);

    if(czyOtwarte)
    {
        openNav();
    }else
    {
        closeNav();
    }
}

// Dodanie nasłuchiwania na zdarzenie zmiany rozmiaru okna
window.addEventListener('resize', sprawdzSzerokoscOkna);

// Wywołanie funkcji na początku, aby uzyskać początkową szerokość okna
sprawdzSzerokoscOkna();

/////////////////////////////////////////////////////




