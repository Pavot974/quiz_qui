const questionsQuiSerait = [
  "Qui serait Joueur 1 dans Gladiator ?",
  "Qui serait Joueur 2 dans Fifty Shades of Grey ?",
  "Qui serait Joueur 1 dans The Silence of the Lambs ?",
  "Qui serait Joueur 2 dans Rocky ?",
  "Qui serait Joueur 1 dans A Star Is Born ?",
  "Qui serait Joueur 2 dans Braveheart ?",
  "Qui serait Joueur 1 dans Deadpool ?",
  "Qui serait Joueur 2 dans The Lion King ?",
  "Qui serait Joueur 1 dans Spider-Man: Homecoming ?",
  "Qui serait Joueur 2 dans Shrek ?",
  "Qui serait Joueur 1 dans Finding Nemo ?",
  "Qui serait Joueur 2 dans The Avengers ?",
  "Qui serait Joueur 1 dans Mad Max: Fury Road ?",
  "Qui serait Joueur 2 dans La La Land ?",
  "Qui serait Joueur 1 dans The Social Network ?",
  "Qui serait Joueur 2 dans Memento ?",
  "Qui serait Joueur 1 dans Kill Bill ?",
  "Qui serait Joueur 2 dans The Truman Show ?",
  "Qui serait Joueur 1 dans The Departed ?",
  "Qui serait Joueur 2 dans Psycho ?",
  "Qui serait Joueur 1 dans Star Wars: A New Hope ?",
  "Qui serait Joueur 2 dans Blade Runner ?",
  "Qui serait Joueur 1 dans A Clockwork Orange ?",
  "Qui serait Joueur 2 dans 12 Angry Men ?",
  "Qui serait Joueur 1 dans The Green Mile ?",
  "Qui serait Joueur 2 dans The Prestige ?",
  "Qui serait Joueur 1 dans Eternal Sunshine of the Spotless Mind ?",
  "Qui serait Joueur 2 dans Goodfellas ?",
  "Qui serait Joueur 1 dans The Breakfast Club ?",
  "Qui serait Joueur 2 dans The Big Lebowski ?",
  "Qui serait Joueur 1 dans Django Unchained ?",
  "Qui serait Joueur 2 dans The Revenant ?",
  "Qui serait Joueur 1 dans The Great Gatsby ?",
  "Qui serait Joueur 2 dans Gravity ?",
  "Qui serait Joueur 1 dans American Beauty ?",
  "Qui serait Joueur 2 dans The King's Speech ?",
  "Qui serait Joueur 1 dans Jaws ?",
  "Qui serait Joueur 2 dans The Exorcist ?",
  "Qui serait Joueur 1 dans The Usual Suspects ?",
  "Qui serait Joueur 2 dans Interstellar ?"
];

let currentQuestionIndex = 0;
let player1Answers = [];
let player2Answers = [];
let player1Score = 0;
let player2Score = 0;
let timer;
const totalQuestions = 10;

document.getElementById("startButton").addEventListener("click", startQuiz);
document.getElementById("submitAnswerButton").addEventListener("click", submitAnswer);
document.getElementById("restartButton").addEventListener("click", restartQuiz);

function startQuiz() {
  document.getElementById("quizContainer").style.display = "block";
  document.getElementById("resultsContainer").style.display = "none";
  player1Answers = [];
  player2Answers = [];
  player1Score = 0;
  player2Score = 0;
  currentQuestionIndex = 0;
  displayQuestion();
}

function displayQuestion() {
  if (currentQuestionIndex < totalQuestions) {
      document.getElementById("questionContainer").innerText = questionsQuiSerait[currentQuestionIndex];
      document.getElementById("answerInput").value = "";
      startTimer(30); // 30 secondes pour répondre
  } else {
      endQuiz();
  }
}

function submitAnswer() {
  const answer = document.getElementById("answerInput").value;
  if (currentQuestionIndex % 2 === 0) {
      player1Answers.push(answer);
      player1Score += (answer.toLowerCase() === "votre réponse ici" ? 1 : 0); // Changez "votre réponse ici" avec la réponse correcte
  } else {
      player2Answers.push(answer);
      player2Score += (answer.toLowerCase() === "votre réponse ici" ? 1 : 0); // Changez "votre réponse ici" avec la réponse correcte
  }
  currentQuestionIndex++;
  displayQuestion();
}

function startTimer(duration) {
  let timeLeft = duration;
  document.getElementById("timeLeft").innerText = timeLeft;
  clearInterval(timer);
  timer = setInterval(() => {
      timeLeft--;
      document.getElementById("timeLeft").innerText = timeLeft;
      if (timeLeft <= 0) {
          clearInterval(timer);
          submitAnswer(); // Soumet la réponse lorsque le temps est écoulé
      }
  }, 1000);
}

function endQuiz() {
  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("resultsContainer").style.display = "block";
  const resultsTable = `
      <table>
          <tr>
              <th>Joueur 1</th>
              <th>Réponses</th>
          </tr>
          ${player1Answers.map((answer, index) => `<tr><td>${index + 1}</td><td>${answer}</td></tr>`).join('')}
          <tr>
              <td><strong>Score</strong></td>
              <td>${player1Score}</td>
          </tr>
      </table>
      <table>
          <tr>
              <th>Joueur 2</th>
              <th>Réponses</th>
          </tr>
          ${player2Answers.map((answer, index) => `<tr><td>${index + 1}</td><td>${answer}</td></tr>`).join('')}
          <tr>
              <td><strong>Score</strong></td>
              <td>${player2Score}</td>
          </tr>
      </table>
  `;
  document.getElementById("resultsTableContainer").innerHTML = resultsTable;
  document.getElementById("score").innerText = `Score final: Joueur 1 - ${player1Score}, Joueur 2 - ${player2Score}`;
}

function restartQuiz() {
  startQuiz();
}
