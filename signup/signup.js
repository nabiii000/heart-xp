// Sample provinces data
const locations = {
    "Canada": {
        "Ontario": ["Toronto", "Ottawa", "Hamilton"],
        "Quebec": ["Montreal", "Quebec City", "Gatineau"],
        "British Columbia": ["Vancouver", "Victoria", "Surrey", "Burnaby"],
        "Alberta": ["Calgary", "Edmonton", "Red Deer"]
    }
};

// Populate country dropdown
const countrySelect = document.getElementById('country');
const provinceSelect = document.getElementById('province');
const citySelect = document.getElementById('city');
const distanceGroup = document.getElementById('distanceGroup');
const provinceGroup = document.getElementById('provinceGroup');
const cityGroup = document.getElementById('cityGroup');

// Populate province dropdown based on selected country
countrySelect.addEventListener('change', function() {
    provinceSelect.innerHTML = '<option value="">Select province</option>';
    citySelect.innerHTML = '<option value="">Select city</option>';
    provinceGroup.style.display = 'none';
    cityGroup.style.display = 'none';
    distanceGroup.style.display = 'none';

    const selectedCountry = countrySelect.value;
    if (selectedCountry && locations[selectedCountry]) {
        provinceGroup.style.display = 'block';
        for (const province in locations[selectedCountry]) {
            const option = document.createElement('option');
            option.value = province;
            option.textContent = province;
            provinceSelect.appendChild(option);
        }
    }
});

// Populate city dropdown based on selected province
provinceSelect.addEventListener('change', function() {
    citySelect.innerHTML = '<option value="">Select city</option>';
    cityGroup.style.display = 'none';
    distanceGroup.style.display = 'none';

    const selectedCountry = countrySelect.value;
    const selectedProvince = provinceSelect.value;
    if (selectedProvince && locations[selectedCountry][selectedProvince]) {
        cityGroup.style.display = 'block';
        for (const city of locations[selectedCountry][selectedProvince]) {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        }
    }
});

// Show distance input when city is selected
citySelect.addEventListener('change', function() {
    const selectedCity = citySelect.value;
    if (selectedCity) {
        distanceGroup.style.display = 'block';
    } else {
        distanceGroup.style.display = 'none';
    }
});

// Function to handle additional info form submission
document.getElementById('additional-info-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const genderPreference = document.getElementById('genderPreference').value;
    const age = document.getElementById('age').value;
    const country = document.getElementById('country').value;
    const province = document.getElementById('province').value;
    const city = document.getElementById('city').value;
    const distance = document.getElementById('distance').value;
    const experience = document.getElementById('experience').value;
    const height = document.getElementById('height').value;
    const profilePicture = document.getElementById('profilePicture').files[0];
    const bio = document.getElementById('bio').value;
    const relationshipType = document.getElementById('relationshipType').value;

    // Display selected form values for demonstration
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Gender Preference:', genderPreference);
    console.log('Age:', age);
    console.log('Country:', country);
    console.log('Province:', province);
    console.log('City:', city);
    console.log('Preferred Distance Range:', distance);
    console.log('Experience Level:', experience);
    console.log('Height:', height);
    console.log('Profile Picture:', profilePicture);
    console.log('Bio:', bio);
    console.log('Relationship Type:', relationshipType);

    // Here you would handle the form submission, e.g., sending the data to a server
});
 document.getElementById('file-upload').addEventListener('change', function() {
        var fileName = this.files[0].name;
        document.getElementById('file-upload-filename').textContent = fileName;
    });
