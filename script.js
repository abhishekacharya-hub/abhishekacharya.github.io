const quizData = [
    {
        question: "How do you call a function named 'myFunction'?",
        a: "call myFunction()",
        b: "call function myFunction()",
        c: "myFunction()",
        d: "function call myFunction()",
        correct: "c",
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
        a: "document.getElementById('demo').innerHTML = 'Hello World!'; ",
        b: "#demo.innerHTML = 'Hello World!';",
        c: "document.getElementByName('p').innerHTML = 'Hello World!';",
        d: "document.getElement('p').innerHTML = 'Hello World!'';",
        correct: "a",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        a: "Math.round(7.25)  ",
        b: "Math.rnd(7.25)",
        c: "round(7.25)",
        d: "rnd(7.25)",
        correct: "a",
    },
    {
        question: "How does a FOR loop start?",
        a: "for (i = 0; i <= 5; i++) ",
        b: "for (i <= 5; i++)",
        c: "for (i = 0; i <= 5)",
        d: "for i = 1 to 5",
        correct: "a",
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        a: "onclick   ",
        b: "onmouseover",
        c: "onmouseclick",
        d: "onchange",
        correct: "a",
    },
    {
        question: "How does a WHILE loop start?",
        a: "while (i <= 10)",
        b: "while i = 1 to 10",
        c: "while (i <= 10; i++)",
        d: "while(i <-10)",
        correct: "a",
    },
    {
        question: "How to write an IF statement in JavaScript?",
        a: "if i = 5 then",
        b: "if i == 5 then",
        c: "if i = 5",
        d: "if (i == 5)",
        correct: "d",
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        a: "var colors = (1:'red', 2:'green', 3:'blue')",
        b: "var colors = ['red', 'green', 'blue']  ",
        c: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        d: "var colors = red', 'green', 'blue'",
        correct: "b",
    },
    {
        question: "How do you find the number with the highest value of x and y??",
        a: "top(x, y)",
        b: "ceil(x, y)",
        c: "Math.max(x, y) ",
        d: "Math.ceil(x, y)",
        correct: "c",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const f_text = document.getElementById("f_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});