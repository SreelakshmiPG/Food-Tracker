// Select the water checkbox
const waterCheckbox = document.getElementById('waterCheckbox');

// Add an event listener for when the checkbox is clicked
waterCheckbox.addEventListener('change', () => {
  if (waterCheckbox.checked) {
    // Show a congratulatory pop-up
    alert('🎉 Congratulations! You stayed hydrated and drank 8 glasses of water today. Great job!');
  }
});

// Nutrition database for various foods
const nutritionDatabase = {
    banana: { carbs: 27, proteins: 1, fats: 0.3, minerals: 'Potassium', vitamins: 'Vitamin B6, C' },
    eggs: { carbs: 1.1, proteins: 6, fats: 5, minerals: 'Iron', vitamins: 'Vitamin D, B12' },
    rice: { carbs: 28, proteins: 2.7, fats: 0.3, minerals: 'Magnesium', vitamins: 'B vitamins' },
    apple: { carbs: 25, proteins: 0.5, fats: 0.3, minerals: 'Potassium', vitamins: 'Vitamin C' },
    dosa: { carbs: 35, proteins: 3, fats: 2, minerals: 'Calcium', vitamins: 'Vitamin B' },
    idli: { carbs: 33, proteins: 2, fats: 0.4, minerals: 'Iron', vitamins: 'Vitamin B' },
    sambar: { carbs: 15, proteins: 5, fats: 3, minerals: 'Potassium', vitamins: 'Vitamin C' },
    upma: { carbs: 40, proteins: 5, fats: 6, minerals: 'Magnesium', vitamins: 'B vitamins' },
    pongal: { carbs: 45, proteins: 6, fats: 7, minerals: 'Iron', vitamins: 'B vitamins' },
    vada: { carbs: 22, proteins: 6, fats: 11, minerals: 'Calcium', vitamins: 'Vitamin B' },
    appam: { carbs: 20, proteins: 2, fats: 1, minerals: 'Calcium', vitamins: 'Vitamin B' },
    puttu: { carbs: 45, proteins: 4, fats: 2, minerals: 'Iron', vitamins: 'B vitamins' },
    rasam: { carbs: 10, proteins: 2, fats: 1, minerals: 'Potassium', vitamins: 'Vitamin C' },
    curd_rice: { carbs: 40, proteins: 4, fats: 3, minerals: 'Calcium', vitamins: 'Vitamin B' },
    bisi_bele_bath: { carbs: 50, proteins: 6, fats: 7, minerals: 'Iron', vitamins: 'B vitamins' },
    masala_dosa: { carbs: 40, proteins: 5, fats: 4, minerals: 'Potassium', vitamins: 'Vitamin B' },
    biriyani: { carbs: 60, proteins: 8, fats: 10, minerals: 'Iron', vitamins: 'B vitamins' },
    salmon: { carbs: 0, proteins: 25, fats: 13, minerals: 'Omega-3, Selenium', vitamins: 'Vitamin D, B12' },
    whole_grains: { carbs: 40, proteins: 7, fats: 2, minerals: 'Magnesium, Iron', vitamins: 'B vitamins' },
    nuts_seeds: { carbs: 20, proteins: 15, fats: 50, minerals: 'Zinc, Magnesium', vitamins: 'Vitamin E, B' },
    fish: { carbs: 0, proteins: 22, fats: 5, minerals: 'Selenium', vitamins: 'Vitamin D, B12' },
    meat: { carbs: 0, proteins: 26, fats: 20, minerals: 'Zinc', vitamins: 'Vitamin B12, B3' },
    peanut_butter: { carbs: 20, proteins: 25, fats: 50, minerals: 'Magnesium', vitamins: 'Vitamin E' },
    bread: { carbs: 49, proteins: 9, fats: 3, minerals: 'Iron', vitamins: 'B vitamins' },
    icecream: { carbs: 24, proteins: 4, fats: 11, minerals: 'Calcium', vitamins: 'Vitamin A' },
    soft_drinks: { carbs: 39, proteins: 0, fats: 0, minerals: 'None', vitamins: 'None' },
    soda: { carbs: 35, proteins: 0, fats: 0, minerals: 'None', vitamins: 'None' },
    chocolate: { carbs: 50, proteins: 5, fats: 30, minerals: 'Magnesium', vitamins: 'Vitamin E' },
    beef: { carbs: 0, proteins: 26, fats: 15, minerals: 'Zinc, Iron', vitamins: 'Vitamin B12, B6' },
    yogurt: { carbs: 17, proteins: 10, fats: 0.4, minerals: 'Calcium', vitamins: 'Vitamin D, B12' },
    milk: { carbs: 12, proteins: 8, fats: 5, minerals: 'Calcium', vitamins: 'Vitamin D, B12' },
    salad: { carbs: 10, proteins: 2, fats: 0.5, minerals: 'Iron', vitamins: 'Vitamin C, A' },
    sweet_potatoes: { carbs: 27, proteins: 2, fats: 0.1, minerals: 'Potassium', vitamins: 'Vitamin A, C' },
  };
  // Array of fun facts
  const funFacts = [
    "Bananas are berries, but strawberries aren't!",
    "Eggs are one of the most nutrient-dense foods, containing almost all essential vitamins and minerals.",
    "Rice is a staple food for more than half of the world's population.",
    "Apples float in water because they are 25% air.",
    "Dosa is a great source of probiotics due to the fermentation process.",
    "Idli is considered one of the healthiest breakfasts due to its low calorie and high nutrient content.",
    "Sambar is not only delicious but also a great source of vitamins and minerals like iron and potassium.",
    "Upma is packed with fiber, making it a great food for digestion.",
    "Puttu is a traditional steamed dish rich in complex carbs, ideal for sustained energy.",
    "Rasam helps boost immunity, thanks to its high vitamin C content.",
    "Curd rice is excellent for digestion and contains probiotics for gut health.",
    "Coconut, used in many South Indian dishes, is a great source of healthy fats.",
    "Lentils in sambar and dal are rich in protein and iron, making them great for vegetarians.",
    "Appam is not only tasty but also rich in calcium, promoting strong bones.",
    "A single egg contains all the essential amino acids your body needs.",
    "Spinach, a common ingredient in Indian dishes, is rich in iron and vitamin K.",
    "Sweet potatoes are rich in beta-carotene, which converts to vitamin A in your body.",
    "Chilies are rich in vitamin C and can boost your metabolism.",
    "Turmeric, widely used in Indian cooking, is a powerful anti-inflammatory and antioxidant.",
    "Ghee contains healthy fats and fat-soluble vitamins like A, D, E, and K."
  ];
  
  // Function to display a random fun fact
  function displayRandomFunFact() {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.getElementById('funFact').textContent = randomFact;
  }
  
  // Call the function on page load
  window.onload = displayRandomFunFact;
  
  
  // Recommended Daily Intake (RDI) values
  const dailyIntake = {
    carbs: 300, // grams
    proteins: 50, // grams
    fats: 70, // grams
    vitamins: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D', 'Vitamin E', 'Vitamin K'],
    minerals: ['Calcium', 'Iron', 'Magnesium', 'Potassium'],
  };
  
  // Initialize totals
  let totalNutrients = {
    carbs: 0,
    proteins: 0,
    fats: 0,
  };
  let consumedVitamins = new Set();
  let consumedMinerals = new Set();
  
  // Global chart variables
  let carbsChart, proteinsChart, fatsChart;
  
  // Form and table elements
  const foodForm = document.getElementById('foodForm');
  const foodInput = document.getElementById('foodInput');
  const foodData = document.getElementById('foodData');
  const missedNutrients = document.getElementById('missedNutrients');
  
  // Function to create pie charts
  function createPieCharts() {
    // Destroy existing charts if they exist
    if (carbsChart) carbsChart.destroy();
    if (proteinsChart) proteinsChart.destroy();
    if (fatsChart) fatsChart.destroy();
  
    // Data for carbs
    const carbsData = [totalNutrients.carbs, Math.max(0, dailyIntake.carbs - totalNutrients.carbs)];
    const proteinsData = [totalNutrients.proteins, Math.max(0, dailyIntake.proteins - totalNutrients.proteins)];
    const fatsData = [totalNutrients.fats, Math.max(0, dailyIntake.fats - totalNutrients.fats)];
  
    // Labels
    const labels = ['Consumed', 'Remaining'];
  
    // Carbs chart
    carbsChart = new Chart(document.getElementById('carbsChart'), {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Carbs',
          data: carbsData,
          backgroundColor: ['#FF6384', '#FFCE56'],
          hoverOffset: 4,
        }],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: `Carbs Intake (${totalNutrients.carbs}g / ${dailyIntake.carbs}g)`
          }
        }
      }
    });
  
    // Proteins chart
    proteinsChart = new Chart(document.getElementById('proteinsChart'), {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Proteins',
          data: proteinsData,
          backgroundColor: ['#36A2EB', '#FFCE56'],
          hoverOffset: 4,
        }],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: `Proteins Intake (${totalNutrients.proteins}g / ${dailyIntake.proteins}g)`
          }
        }
      }
    });
  
    // Fats chart
    fatsChart = new Chart(document.getElementById('fatsChart'), {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Fats',
          data: fatsData,
          backgroundColor: ['#4BC0C0', '#FFCE56'],
          hoverOffset: 4,
        }],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: `Fats Intake (${totalNutrients.fats}g / ${dailyIntake.fats}g)`
          }
        }
      }
    });
  }
  
  // Event listener for form submission
  foodForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const foodName = foodInput.value.toLowerCase().trim();
    
    if (nutritionDatabase[foodName]) {
      const nutrition = nutritionDatabase[foodName];
      
      // Update totals
      totalNutrients.carbs += nutrition.carbs;
      totalNutrients.proteins += nutrition.proteins;
      totalNutrients.fats += nutrition.fats;
  
      // Update vitamins and minerals
      nutrition.vitamins.split(', ').forEach((vitamin) => consumedVitamins.add(vitamin));
      nutrition.minerals.split(', ').forEach((mineral) => consumedMinerals.add(mineral));
  
      // Create a new table row
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${foodName.charAt(0).toUpperCase() + foodName.slice(1)}</td>
        <td>${nutrition.carbs}</td>
        <td>${nutrition.proteins}</td>
        <td>${nutrition.fats}</td>
        <td>${nutrition.minerals}</td>
        <td>${nutrition.vitamins}</td>
      `;
      
      foodData.appendChild(row);
      
      // Update missed nutrients display
      updateMissedNutrients();
      
      // Update charts
      createPieCharts();
    } else {
      alert('Nutrition data for this food is not available.');
    }
    
    foodInput.value = '';
  });
  
  // Function to calculate and display missed nutrients
  function updateMissedNutrients() {
    const carbsMissed = Math.max(0, dailyIntake.carbs - totalNutrients.carbs);
    const proteinsMissed = Math.max(0, dailyIntake.proteins - totalNutrients.proteins);
    const fatsMissed = Math.max(0, dailyIntake.fats - totalNutrients.fats);
  
    // Calculate missing vitamins and minerals
    const missingVitamins = dailyIntake.vitamins.filter((vitamin) => !consumedVitamins.has(vitamin));
    const missingMinerals = dailyIntake.minerals.filter((mineral) => !consumedMinerals.has(mineral));
  
    missedNutrients.innerHTML = `
      <h3>Missed Nutrients</h3>
      <p><strong>Carbs:</strong> ${carbsMissed}g</p>
      <p><strong>Proteins:</strong> ${proteinsMissed}g</p>
      <p><strong>Fats:</strong> ${fatsMissed}g</p>
      <p><strong>Vitamins Missed:</strong> ${missingVitamins.length > 0 ? missingVitamins.join(', ') : 'None'}</p>
      <p><strong>Minerals Missed:</strong> ${missingMinerals.length > 0 ? missingMinerals.join(', ') : 'None'}</p>
    `;
  }
  
  // Initial chart creation
  createPieCharts();
  // Handle the additional intake checklist
  const supplementsForm = document.getElementById('supplementsForm');
  
  supplementsForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const selectedItems = Array.from(supplementsForm.elements)
    .filter((element) => element.checked)
    .map((item) => item.value);
  
  if (selectedItems.length > 0) {
    alert(`Additional Intake Saved: ${selectedItems.join(', ')}`);
  } else {
    alert('No additional intake selected.');
  }
  });
  function calculateRewards() {
    // Calculate nutrient percentages
    const carbsPercent = (totalNutrients.carbs / dailyIntake.carbs) * 100;
    const proteinsPercent = (totalNutrients.proteins / dailyIntake.proteins) * 100;
    const fatsPercent = (totalNutrients.fats / dailyIntake.fats) * 100;
  
    const averagePercent = (carbsPercent + proteinsPercent + fatsPercent) / 3;
  
    // Check water intake
    const waterCheckbox = Array.from(supplementsForm.elements).find(
      (element) => element.value === 'Water Intake (8 glasses)'
    );
    const drankWater = waterCheckbox && waterCheckbox.checked;
  
    // Determine rewards
    let rewardMessage = 'Complete your goals to unlock rewards!';
    if (averagePercent >= 100 && drankWater) {
      rewardMessage = '🎉 Congratulations! You achieved 100% of your nutrient goals and drank enough water. You earned the "Health Guru" badge!';
    } else if (averagePercent >= 80 && drankWater) {
      rewardMessage = '💪 Great job! You reached 80% of your nutrient goals and stayed hydrated. Keep it up!';
    } else if (averagePercent >= 50) {
      rewardMessage = '👍 Good effort! You met 50% of your nutrient goals. Stay consistent for better rewards!';
    } else {
      rewardMessage = '⚡ Keep pushing! Focus on your nutrients and hydration to unlock rewards.';
    }
  
    // Update rewards section
    document.getElementById('rewardMessage').textContent = rewardMessage;
  }
  
  // Update rewards on form submission
  supplementsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    calculateRewards();
  });
  function calculateRewards() {
  // Calculate nutrient percentages
  const carbsPercent = (totalNutrients.carbs / dailyIntake.carbs) * 100;
  const proteinsPercent = (totalNutrients.proteins / dailyIntake.proteins) * 100;
  const fatsPercent = (totalNutrients.fats / dailyIntake.fats) * 100;
  
  const averagePercent = (carbsPercent + proteinsPercent + fatsPercent) / 3;
  
  // Check water intake
  const waterCheckbox = Array.from(supplementsForm.elements).find(
    (element) => element.value === 'Water Intake (8 glasses)'
  );
  const drankWater = waterCheckbox && waterCheckbox.checked;
  
  // Determine rewards
  let rewardMessage = 'Complete your goals to unlock rewards!';
  const penguinBadge = document.getElementById('penguinBadge');
  
  if (averagePercent >= 100 && drankWater) {
    rewardMessage = '🎉 Congratulations! You achieved 100% of your nutrient goals and drank enough water. You earned the "Health Guru" badge!';
    penguinBadge.style.display = 'block'; // Show the penguin badge
  } else {
    penguinBadge.style.display = 'none'; // Hide the penguin badge
    if (averagePercent >= 80 && drankWater) {
      rewardMessage = '💪 Great job! You reached 80% of your nutrient goals and stayed hydrated. Keep it up!';
    } else if (averagePercent >= 50) {
      rewardMessage = '👍 Good effort! You met 50% of your nutrient goals. Stay consistent for better rewards!';
    } else {
      rewardMessage = '⚡ Keep pushing! Focus on your nutrients and hydration to unlock rewards.';
    }
  }
  
  // Update rewards section
  document.getElementById('rewardMessage').textContent = rewardMessage;
  }
  
  // Update rewards on form submission
  supplementsForm.addEventListener('submit', (e) => {
  e.preventDefault();
  calculateRewards();
  });
  