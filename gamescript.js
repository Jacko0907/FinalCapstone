
//JS for showing wrong/right answers when clicked
document.addEventListener('DOMContentLoaded', function() {
  const answerButtons = document.querySelectorAll('.answer');

  answerButtons.forEach(button => {
      button.addEventListener('click', function() {
          const isCorrect = button.getAttribute('data-correct') === 'true';

          if (isCorrect) {
              button.style.backgroundColor = '#28a745'; // Green color for correct answer
          } else {
              button.style.backgroundColor = '#dc3545'; // Red color for wrong answer
          }

          // Disable further clicks on buttons after answering
          answerButtons.forEach(btn => {
              btn.disabled = flase;
          });
      });
  });
});
  
 
  // total correct answer count
  let totalCorrectAnswerCount = 0;

  // player name
  let playerName = "";

  // Function to update leaderboard
  function updateLeaderboard() {
    const playerNameDisplay = document.getElementById('player-name-display');
    playerNameDisplay.textContent = playerName;
    
    const correctAnswerCountElement = document.getElementById('total-correct-answer-count');
    correctAnswerCountElement.textContent = totalCorrectAnswerCount;
  }

  // Event listener for form submission
  document.getElementById('name-form').addEventListener('submit', function(event) {
    event.preventDefault();
    playerName = document.getElementById('player-name').value.trim();
    updateLeaderboard();
  });

  // Attach event listeners to all answer buttons
  const answerButtons = document.querySelectorAll('.answer');
  answerButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Check if the total correct answer count has not reached 15
      if (totalCorrectAnswerCount < 15) {
        // Check if the clicked answer is correct
        const isCorrect = button.getAttribute('data-correct') === 'true';
        if (isCorrect) {
          // Increment total correct answer count
          totalCorrectAnswerCount++;
          updateLeaderboard();
        }
      }
    });
  });
