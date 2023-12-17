const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');

const data = {
    "John Doe": {
        age: "23"
    },
    "Jane Smith": {
        age: "40"
    },
    // Tambahkan data lainnya di sini
};

nameInput.addEventListener('input', () => {
    const inputText = nameInput.value;
    suggestionsDiv.innerHTML = '';

    if (inputText.length > 0) {
        for (const name in data) {
            if (name.toLowerCase().includes(inputText.toLowerCase())) {
                const suggestionItem = document.createElement('div');
                suggestionItem.textContent = name;
                suggestionItem.addEventListener('click', () => {
                    nameInput.value = name;
                    mataKuliahInput.value = data[name].mataKuliah;
                    dosenInput.value = data[name].dosen;
                    suggestionsDiv.style.display = 'none';
                });
                suggestionsDiv.appendChild(suggestionItem);
            }
        }
        suggestionsDiv.style.display = 'block';
    } else {
        suggestionsDiv.style.display = 'none';
    }
});

document.addEventListener('click', (event) => {
    if (event.target !== nameInput && event.target !== suggestionsDiv) {
        suggestionsDiv.style.display = 'none';
    }
});

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Periksa apakah semua kolom telah diisi
    if (!nameInput.value || !ageInput.value) {
        alert('Mohon isi semua kolom!');
    }
});