document.addEventListener('DOMContentLoaded', function () {
    const goal = 2000;
    let currentAmount = 0;

    const remainedElement = document.getElementById('remained');
    const litersElement = document.getElementById('liters');
    const percentageElement = document.getElementById('percentage');
    const smallCups = document.querySelectorAll('.cup-small');


    function updateCupUI() {
      const percentage = (currentAmount / goal) * 100;
      percentageElement.style.height = percentage + '%';
      litersElement.innerText = (goal - currentAmount) / 1000 + 'L';
      remainedElement.style.height = 100 - percentage + '%';
    }

    smallCups.forEach((cup, index) => {
      cup.addEventListener('click', () => {
        if (!cup.classList.contains('full')) {
          cup.classList.add('full');
          currentAmount += 250; 
          updateCupUI();
        } else {
          cup.classList.remove('full');
          currentAmount -= 250; 
          updateCupUI();
        }
      });
    });

    updateCupUI();
  });