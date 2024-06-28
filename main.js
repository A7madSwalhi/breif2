let result = {
    correctAnswer: 0,
    wrongAnswer: 0,
};

let showResult = [];
var quiznumber;

document.querySelectorAll(".quiz").forEach((button) => {
    button.addEventListener("click", (event) => {
        const buttonId = event.target.id;
        const buttonText = event.target.innerText;
        quiznumber = buttonId;
        window.location.href = "index.html";
        window.localStorage.setItem("quizid", buttonId);
    });
});

const questions1 = [
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript",
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Hot Mail",
            "How to Make Lasagna",
            "None of the above",
        ],
        answer: "Hyper Text Markup Language",
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Colorful Style Sheets",
            "Creative Style Sheets",
            "Computer Style Sheets",
        ],
        answer: "Cascading Style Sheets",
    },
];

const questions2 = [
    {
        question:
            "The correct sequence of HTML tags for starting a webpage is?",
        options: [
            "Head, Title, HTML, body",
            "HTML, Body, Title, Head",
            "HTML, Body, Title, Head",
            "HTML, Head, Title, Body",
        ],
        answer: "HTML, Head, Title, Body",
    },
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["Angular", "Ruby on Rails", "Django", "Laravel"],
        answer: "Angular",
    },
    {
        question:
            " Which event occurs when the user clicks on an HTML element?",
        options: ["onchange", "onclick", "onmouseclick", "onmouseover"],
        answer: "onclick",
    },
];

const questions3 = [
    {
        question: "HHow do you declare a JavaScript variable?",
        options: [
            "var carName;",
            "variable carName;",
            "v carName;",
            "var: carName;",
        ],
        answer: "var carName;",
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: ["*", "=", "-", "x"],
        answer: "=",
    },
    {
        question: "Page designed in HTML is called a",
        options: ["Yellow Page", "Server Page", "Web Page", "Front Page"],
        answer: "Web Page",
    },
];

quiznumber = Number(window.localStorage.getItem("quizid"));
console.log(quiznumber);
const quizzes = [questions1, questions2, questions3];

questions = quizzes[quiznumber];

console.log(questions);

let currentQuestionIndex = 0;
pageloadupdate();

function nextQuestion() {
    const form = document.getElementById("quizForm");
    const errorDiv = document.getElementById("error");
    const selectedOption = form.querySelector('input[name="language"]:checked');

    if (!selectedOption) {
        errorDiv.style.display = "block";
        return;
    }
    errorDiv.style.display = "none";
    console.log(selectedOption.value);
    console.log(questions[currentQuestionIndex].answer);

    updateResult(selectedOption, questions[currentQuestionIndex]);
    updateAnswers(selectedOption, questions[currentQuestionIndex]);

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        currentQuestionIndex = 0;

        console.log(`correct answer: ${result.correctAnswer}`);
        console.log(`wrong answer: ${result.wrongAnswer}`);
        window.localStorage.setItem();

        result.correctAnswer = 0;
        result.wrongAnswer = 0;

        console.log(showResult);
        showResult = [];
        window.location.href = "ht.html";
    }
}

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const form = document.getElementById("quizForm");
    questionElement.innerText = questions[currentQuestionIndex].question;

    form.innerHTML = "";
    questions[currentQuestionIndex].options.forEach((option) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="language" value="${option}"> ${option}`;
        form.appendChild(label);
    });

    const button = document.createElement("button");
    button.type = "button";
    button.onclick = nextQuestion;
    button.innerText = "Submit";
    form.appendChild(button);
}

function updateResult(ele, question) {
    if (ele.value === question.answer) {
        result.correctAnswer++;
    } else {
        result.wrongAnswer++;
    }
}

function updateAnswers(ele, que) {
    if (ele.value === que.answer) {
        showResult.push({
            question: que.question,
            select: ele.value,
            answer: true,
        });
    } else {
        showResult.push({
            question: que.question,
            select: ele.value,
            answer: false,
        });
    }
}

function pageloadupdate() {
    const questionElement = document.getElementById("question");
    const form = document.getElementById("quizForm");
    questionElement.innerText = questions[currentQuestionIndex].question;

    form.innerHTML = "";
    questions[currentQuestionIndex].options.forEach((option) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="language" value="${option}"> ${option}`;
        form.appendChild(label);
    });

    const button = document.createElement("button");
    button.type = "button";
    button.onclick = nextQuestion;
    button.innerText = "Submit";
    form.appendChild(button);
}
