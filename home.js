// Function to toggle visibility of game options based on selected consoles
function toggleGameOptions() {
    const consolesSelect = document.getElementById('consoles');
    const gameOptionsDiv = document.getElementById('game-options');

    // Hide all game options initially
    const gameOptions = gameOptionsDiv.getElementsByClassName('game-option');
    for (let i = 0; i < gameOptions.length; i++) {
        gameOptions[i].style.display = 'none';
    }

    // Show game options based on selected consoles
    for (let i = 0; i < consolesSelect.options.length; i++) {
        const console = consolesSelect.options[i].value.toLowerCase();
        const gameOptionDiv = document.getElementById(`${console}-games`);
        if (gameOptionDiv) {
            gameOptionDiv.style.display = consolesSelect.options[i].selected ? 'block' : 'none';
        }
    }
}

// Function to toggle visibility of "Other" gender input
function toggleGenderInput() {
    const genderSelect = document.getElementById('gender');
    const otherGenderInput = document.getElementById('otherGender');

    if (genderSelect.value === 'other') {
        otherGenderInput.style.display = 'block';
        otherGenderInput.setAttribute('required', 'required');
    } else {
        otherGenderInput.style.display = 'none';
        otherGenderInput.removeAttribute('required');
        otherGenderInput.value = '';
    }
}

// Function to handle form submission
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const consoles = Array.from(document.getElementById('consoles').selectedOptions).map(option => option.value);
    const selectedGames = [];

    // Iterate through selected consoles to get selected games
    consoles.forEach(console => {
        const gameCheckboxes = document.querySelectorAll(`input[name="${console.toLowerCase()}-game"]:checked`);
        gameCheckboxes.forEach(checkbox => {
            if (checkbox.value === 'Other') {
                const otherGameInput = document.getElementById(`${console.toLowerCase()}-other-game`);
                selectedGames.push(otherGameInput.value.trim());
            } else {
                selectedGames.push(checkbox.value);
            }
        });
    });

    const gender = document.getElementById('gender').value;
    let otherGender = '';

    // If "Other" is selected, use the text input value
    if (gender === 'other') {
        otherGender = document.getElementById('otherGender').value;
    }

    // Display selected form values for demonstration
    console.log('Username:', username);
    console.log('Consoles:', consoles);
    console.log('Selected Games:', selectedGames);
    console.log('Gender:', gender);
})
