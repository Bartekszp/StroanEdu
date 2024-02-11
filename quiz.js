var questions = [
    {
        question: 'Jak poprawnie zapisać kod, aby na ekranie wyświetliło się „Hello World” w języku C#?',
        answers: [
            { text: 'Console.WriteLine("Hello World");', correct: true },
            { text: 'System.out.println("Hello World");', correct: false },
            { text: 'print("Hello World");', correct: false },
            { text: 'cout&#60&#60 "Hello World"', correct: false },

        ]
    },
    {
        question: 'Jak zadeklarować zmienną w C#?',
        answers: [
            { text: 'variable x;', correct: false },
            { text: 'x = int;', correct: false },
            { text: 'int x;', correct: true },
            { text: 'create x;', correct: false },

        ]
    },
    {
        question: 'Który operator używamy do porównywania wartości dwóch zmiennych w C#?',
        answers: [
            { text: '==', correct: true },
            { text: '<=', correct: false },
            { text: '=', correct: false },
            { text: 'equals', correct: false },

        ]
    },
    {
        question: 'Którego słowa kluczowego używamy do definiowania funkcji w C#?',
        answers: [
            { text: 'function', correct: false },
            { text: 'method', correct: false },
            { text: 'def', correct: false },
            { text: 'void', correct: true },

        ]
    },
    {
        question: 'Jak można zainicjować nową tablicę w C#?',
        answers: [
            { text: 'int[] arr = new int[5];', correct: true },
            { text: 'new Array()', correct: false },
            { text: 'createArray<int>(5);', correct: false },
            { text: 'int tab[];', correct: false },

        ]
    },
    {
        question: 'Jakie słowo kluczowe używamy do tworzenia nowej klasy w C#?',
        answers: [
            { text: 'new', correct: false },
            { text: 'create', correct: false },
            { text: 'struct', correct: false },
            { text: 'class', correct: true },

        ]
    },
    {
        question: 'Która instrukcja służy do powtarzania bloku kodu w C#, dopóki określony warunek jest spełniony?',
        answers: [
            { text: 'while', correct: true },
            { text: 'for', correct: false },
            { text: 'do...while', correct: false },
            { text: 'repeat...until', correct: false },

        ]
    },
    {
        question: 'Który z tych operatorów jest używany do operacji inkrementacji w C#?',
        answers: [
            { text: '--', correct: false },
            { text: '+=', correct: false },
            { text: '+', correct: false },
            { text: '++', correct: true },

        ]
    },

    {
        question: 'Który z poniższych operatorów jest używany do operacji dekrementacji w C#?',
        answers: [
            { text: '--', correct: true },
            { text: '+=', correct: false },
            { text: '+', correct: false },
            { text: '++', correct: false },

        ]
    },

    {
        question: 'Jakie słowo kluczowe używamy do wyjścia z funkcji w C#?',
        answers: [
            { text: 'break', correct: false },
            { text: 'return', correct: true },
            { text: 'quit', correct: false },
            { text: 'exit', correct: false },

        ]
    },

    {
        question: 'Który z tych operatorów jest używany do operacji dzielenia w C#?',
        answers: [
            { text: '/', correct: true },
            { text: '//', correct: false },
            { text: '%', correct: false },
            { text: ':', correct: false },

        ]
    },
    {
        question: 'Który z tych operatorów jest używany do operacji dzielenia z resztą w C#?',
        answers: [
            { text: '/', correct: false },
            { text: '//', correct: false },
            { text: '%', correct: true },
            { text: ':', correct: false },

        ]
    },
    {
        question: 'Który z tych operatorów jest używany do operacji logicznego "NOT" w C#?',
        answers: [
            { text: 'NOT', correct: false },
            { text: '!', correct: true },
            { text: '&&', correct: false },
            { text: '||', correct: false },

        ]
    },
    {
        question: 'Który operator jest używany do operacji logicznej "lub" w C#?',
        answers: [
            { text: 'NOT', correct: false },
            { text: '!', correct: false },
            { text: '&&', correct: false },
            { text: '||', correct: true },

        ]
    },
    {
        question: 'Który operator jest używany do konkatenacji łańcuchów znaków w C#?',
        answers: [
            { text: '/', correct: false },
            { text: '-', correct: false },
            { text: '+', correct: true },
            { text: '*', correct: false },

        ]
    },
    {
        question: 'Która metoda jest używana do odczytywania danych z konsoli w C#?',
        answers: [
            { text: 'read()', correct: false },
            { text: 'cin>>', correct: false },
            { text: 'Console.ReadLine()', correct: true },
            { text: 'System.console.readLine()', correct: false },

        ]
    },
    {
        question: 'Która metoda jest używana do konwersji liczby na łańcuch znaków w C#?',
        answers: [
            { text: 'toString()', correct: true },
            { text: 'number.ToString()', correct: false },
            { text: 'int.ToString()', correct: false },
            { text: 'convert()', correct: false },

        ]
    },
    {
        question: 'Która z poniższych instrukcji jest używana do definiowania warunków w C#?',
        answers: [
            { text: 'for', correct: false },
            { text: 'if', correct: true },
            { text: 'while', correct: false },
            { text: 'conditional', correct: false },

        ]
    },
    {
        question: 'Która z poniższych konstrukcji językowych służy do wybierania jednej z wielu możliwości w C#?',
        answers: [
            { text: 'for', correct: false },
            { text: 'else', correct: false },
            { text: 'case', correct: false },
            { text: 'switch', correct: true },

        ]
    },
    {
        question: 'Która z poniższych metod jest używana do sortowania tablicy w C#?',
        answers: [
            { text: 'sort()', correct: false },
            { text: 'Array.sortArray()', correct: false },
            { text: 'Array.sort()', correct: true },
            { text: 'sortArray()', correct: false },

        ]
    },
    {
        question: 'Co oznacza skrótka "IDE"?',
        answers: [
            { text: 'Instrukcja doświadczenia edukacyjnego.', correct: false },
            { text: 'Indeks dynamicznych elementów.', correct: false },
            { text: 'Internetowa edycja dokumentów.', correct: false },
            { text: 'Zintegrowane środowisko programistyczne.', correct: true },

        ]
    },
    {
        question: 'Jak zakończyć instrukcję w języku C#?',
        answers: [
            { text: 'Za pomocą znaku zapytania.', correct: false },
            { text: 'Przy użyciu dwukropka na końcu linii kodu.', correct: false },
            { text: 'Przez dodanie średnika na końcu linii kodu.', correct: true },
            { text: 'Poprzez umieszczenie wykrzyknika na końcu linii.', correct: false },

        ]
    },
    {
        question: 'Co to jest konstruktor w języku C#?',
        answers: [
            { text: 'Specjalna metoda wywoływana podczas tworzenia obiektu danej klasy.', correct: true },
            { text: 'Metoda, która zwraca wartość.', correct: false },
            { text: 'Instrukcja warunkowa.', correct: false },
            { text: 'Metoda niszcząca obiekty w klasie.', correct: false },

        ]
    },
    {
        question: 'Co to jest tablica (ang. array) w języku C#?',
        answers: [
            { text: 'Klasa służąca do obsługi operacji na plikach.', correct: false },
            { text: 'Struktura danych przechowująca kolekcję elementów tego samego typu.', correct: true },
            { text: 'Specjalna metoda wywoływana podczas tworzenia obiektu danej klasy.', correct: false },
            { text: 'Słowo kluczowe używane do deklaracji nowej zmiennej.', correct: false },

        ]
    },
    {
        question: 'Jakie jest słowo kluczowe używane do zatrzymania obecnej iteracji pętli i przejścia do kolejnej w języku C#?',
        answers: [
            { text: 'exit', correct: false },
            { text: 'skip', correct: false },
            { text: 'continue', correct: true },
            { text: 'break', correct: false },

        ]
    },
    {
        question: 'Jakie jest słowo kluczowe używane do iteracji przez elementy tablicy w języku C#?',
        answers: [
            { text: 'foreach', correct: true },
            { text: 'iterate', correct: false },
            { text: 'for', correct: false },
            { text: 'loop', correct: false },

        ]
    },
    {
        question: 'Którego słowa kluczowego można użyć do obliczenia długości łańcucha tekstu?',
        answers: [
            { text: 'length', correct: false },
            { text: 'length()', correct: false },
            { text: 'getLength()', correct: false },
            { text: 'Length', correct: true },

        ]
    },
    {
        question: 'Aby zadeklarować tablicę w C#, definiujesz typ zmiennej za pomocą:',
        answers: [
            { text: '{}', correct: false },
            { text: '[]', correct: true },
            { text: '()', correct: false },
            { text: '<>', correct: false },

        ]
    },
    {
        question: 'Indeksy tablic zaczynają się od:',
        answers: [
            { text: '0', correct: true },
            { text: '1', correct: false },
        ]
    },
    {
        question: 'Który modyfikator dostępu sprawia, że ​​kod jest dostępny tylko w tej samej klasie?',
        answers: [
            { text: 'public', correct: false },
            { text: 'abstract', correct: false },
            { text: 'private', correct: true },
            { text: 'final', correct: false },

        ]
    },
    
    

];

var questionElement = document.getElementById('question');
var percentageElement = document.getElementById('percentage')
var answerButton = document.getElementById('answer');
var nextButton = document.getElementById('next');
var questionNumberElement = document.getElementById('question-number');


let currentQuestion = 0;
let score = 0;
let questionNumber = 0;


function startQuiz() {
    currentQuestion = 0;
    score = 0;
    nextButton.innerHTML = 'Następne pytanie';
    showQuestion();
}
function showQuestion() {
    resetState();
    questionNumberElement.style.display = 'block';
    questionNumber++;
    questionNumberElement.innerHTML = questionNumber + '/' + questions.length;
    let actualQuestion = questions[currentQuestion];
    let questionNo = currentQuestion + 1;
    questionElement.innerHTML = questionNo + '. ' + actualQuestion.question;

    actualQuestion.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    percentageElement.style.display = 'none';
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e)
{
    var selectedButton = e.target;
    var isCorrect = selectedButton.dataset.correct === 'true';
    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
    }
    else {
        selectedButton.classList.add('incorrect');
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}
function handleNextButton(){
    currentQuestion++;
    if(currentQuestion < questions.length){
        showQuestion();
    }
    else{
        resetState();
        percentageElement.style.display = 'block';
        questionElement.innerHTML = 'Twój wynik to: ' + score + '/' + questions.length;
        percentageElement.innerHTML = 'Wynosi to ' + Math.round((score / questions.length) * 100) + '%';
        nextButton.innerHTML = 'Spróbuj ponownie';
        nextButton.style.display = 'block';
        questionNumberElement.style.display = 'none'
        questionNumber = 0;

    }
}
nextButton.addEventListener("click", () => {
    if(currentQuestion < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();