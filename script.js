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

function openNav() {
    czyOtwarte = true;
    if (window.innerWidth < 800) {
        document.getElementById("navid").style.width = "100%";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("main").style.width = "0%";
    }
    else {

        document.getElementById("navid").style.width = "20%";
        document.getElementById("main").style.marginLeft = "20%";
        document.getElementById("main").style.width = "80%";
    }
}

function closeNav() {
    czyOtwarte = false;
    if (window.innerWidth < 800) {
        document.getElementById("navid").style.width = "0";
        document.getElementById("main").style.margin = "0";
        document.getElementById("main").style.width = "auto";
    }
    else {

        document.getElementById("navid").style.width = "0";
        document.getElementById("main").style.marginLeft = "10%";
        document.getElementById("main").style.width = "80%";
    }
}




function copyFunction() {
    const copyText = document.getElementById("myInput").textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
}

document.getElementById('button').addEventListener('click', copyFunction);

function copyFunction1() {
    const copyText = document.getElementById("myInput1").textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
}

document.getElementById('button1').addEventListener('click', copyFunction1);

function copyFunction2() {
    const copyText = document.getElementById("myInput2").textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
}

document.getElementById('button2').addEventListener('click', copyFunction2);

function copyFunction3() {
    const copyText = document.getElementById("myInput3").textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
}

document.getElementById('button3').addEventListener('click', copyFunction3);

function copyFunction4() {
    const copyText = document.getElementById("myInput4").textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
}

document.getElementById('button4').addEventListener('click', copyFunction4);

function copyFunction5() {
    const copyText = document.getElementById("myInput5").textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
}

document.getElementById('button5').addEventListener('click', copyFunction5);

function copyFunction6() {
    const copyText = document.getElementById("myInput6").textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
}

document.getElementById('button6').addEventListener('click', copyFunction6);


