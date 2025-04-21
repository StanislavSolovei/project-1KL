const quizData = [
    {
      question: "Kiedy rozpoczęła się II wojna światowa?",
      answers: ["1939", "1945", "1914", "1920"],
      correct: "1939"
    },
    {
      question: "Jakie miasto było stolicą Bizancjum?",
      answers: ["Ateny", "Konstantynopol", "Rzym", "Aleksandria"],
      correct: "Konstantynopol"
    },
    {
      question: "Które państwo rozpadło się w 1991 roku?",
      answers: ["Jugosławia", "Związek Radziecki", "Czechosłowacja", "Niemcy"],
      correct: "Związek Radziecki"
    },
    {
      question: "Gdzie znajduje się góra Everest?",
      answers: ["Nepal", "Indie", "Pakistan", "Chiny"],
      correct: "Nepal"
    },
    {
      question: "Które państwo leży na dwóch kontynentach?",
      answers: ["Egipt", "Rosja", "Turcja", "Gruzja"],
      correct: "Turcja"
    },
    {
      question: "W którym roku upadł Mur Berliński?",
      answers: ["1987", "1989", "1990", "1991"],
      correct: "1989"
    },
    {
      question: "Ile stanów mają Stany Zjednoczone?",
      answers: ["48", "49", "50", "52"],
      correct: "50"
    },
    {
      question: "Które morze oddziela Europę od Afryki?",
      answers: ["Bałtyckie", "Kaspijskie", "Czarne", "Śródziemne"],
      correct: "Śródziemne"
    },
    {
      question: "Kto był pierwszym królem Polski?",
      answers: ["Mieszko I", "Bolesław Chrobry", "Kazimierz Wielki", "Władysław Jagiełło"],
      correct: "Bolesław Chrobry"
    },
    {
      question: "Najdłuższa rzeka świata to:",
      answers: ["Nil", "Amazonka", "Jangcy", "Missisipi"],
      correct: "Amazonka"
    },
    {
      question: "W jakim kraju znajduje się miasto Timbuktu?",
      answers: ["Mali", "Nigeria", "Egipt", "Sudan"],
      correct: "Mali"
    },
    {
      question: "Która cywilizacja zbudowała Machu Picchu?",
      answers: ["Inki", "Majowie", "Aztekowie", "Olmekowie"],
      correct: "Inki"
    },
    {
      question: "Który kraj NIE należy do G7?",
      answers: ["Włochy", "Kanada", "Rosja", "Francja"],
      correct: "Rosja"
    },
    {
      question: "W którym roku Polska przystąpiła do Unii Europejskiej?",
      answers: ["2000", "2002", "2004", "2006"],
      correct: "2004"
    },
    {
      question: "Które miasto było dawną stolicą Niemiec Wschodnich (NRD)?",
      answers: ["Berlin Zachodni", "Drezno", "Lipsk", "Berlin Wschodni"],
      correct: "Berlin Wschodni"
    }
  ];
  
  let current = 0;
  let score = 0;
  
  const container = document.getElementById("quiz-container");
  
  function loadQuestion() {
    container.innerHTML = "";
  
    if (current >= quizData.length) {
      container.innerHTML = `<h2>Twój wynik: ${score} / ${quizData.length}</h2>
      <button onclick="restartQuiz()">Zagraj ponownie</button>`;
      return;
    }
  
    const q = quizData[current];
    const questionElem = document.createElement("h3");
    questionElem.textContent = q.question;
    container.appendChild(questionElem);
  
    q.answers.forEach(answer => {
      const btn = document.createElement("button");
      btn.textContent = answer;
      btn.className = "answer-button";
      btn.onclick = () => checkAnswer(answer);
      container.appendChild(btn);
    });
  }
  
  function checkAnswer(answer) {
    if (answer === quizData[current].correct) {
      score++;
    }
    current++;
    loadQuestion();
  }
  
  function restartQuiz() {
    current = 0;
    score = 0;
    loadQuestion();
  }
  
  loadQuestion();
  