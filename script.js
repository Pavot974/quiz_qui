const questionsQuiSerait = [
    "Qui serait Joueur 1 dans « Inception » ?",
    "Qui serait Joueur 2 dans « Cendrillon » ?",
    "Qui serait Joueur 1 dans « OSS 117 : Le Caire, nid d'espions » ?",
    "Qui serait Joueur 2 dans « Les Simpson » ?",
    "Qui serait Joueur 1 dans « Fight Club » ?",
    "Qui serait Joueur 2 dans « Toy Story » ?",
    "Qui serait Joueur 1 dans « Amélie » ?",
    "Qui serait Joueur 2 dans « How I Met Your Mother » ?",
    "Qui serait Joueur 1 dans « Star Wars » ?",
    "Qui serait Joueur 2 dans « Mulan » ?",
    "Qui serait Joueur 1 dans « Les Visiteurs » ?",
    "Qui serait Joueur 2 dans « La Casa de Papel » ?",
    "Qui serait Joueur 1 dans « Retour vers le Futur » ?",
    "Qui serait Joueur 2 dans « Raiponce » ?",
    "Qui serait Joueur 1 dans « Le Dîner de Cons » ?",
    "Qui serait Joueur 2 dans « The Crown » ?",
    "Qui serait Joueur 1 dans « La Liste de Schindler » ?",
    "Qui serait Joueur 2 dans « Sherlock » ?",
    "Qui serait Joueur 1 dans « Astérix et Obélix : Mission Cléopâtre » ?",
    "Qui serait Joueur 2 dans « La Reine des Neiges » ?",
    "Qui serait Joueur 1 dans « Forrest Gump » ?",
    "Qui serait Joueur 2 dans « Aladdin » ?",
    "Qui serait Joueur 1 dans « La Grande Vadrouille » ?",
    "Qui serait Joueur 2 dans « The Office » ?",
    "Qui serait Joueur 1 dans « Inception » ?",
    "Qui serait Joueur 2 dans « Blanche-Neige » ?",
    "Qui serait Joueur 1 dans « OSS 117 : Le Caire, nid d'espions » ?",
    "Qui serait Joueur 2 dans « Les Simpson » ?",
    "Qui serait Joueur 1 dans « Fight Club » ?",
    "Qui serait Joueur 2 dans « Toy Story » ?"
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
 selectedQuestions = [];
    while (selectedQuestions.length < totalQuestions) {
        const randomIndex = Math.floor(Math.random() * questionsCouple.length);
        const question = questionsCouple[randomIndex];
        if (!selectedQuestions.includes(question)) {
            selectedQuestions.push(question);
        }
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
