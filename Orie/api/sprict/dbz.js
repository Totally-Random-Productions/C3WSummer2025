const API_URL = 'https://dragonball-api.com/api/characters';

async function fetchCharacters() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    displayCharacters(data.items.slice(0, 20)); // limit to 20 characters
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayCharacters(characters) {
  const container = document.getElementById('characters');

  characters.forEach(character => {
    const card = document.createElement('div');
    card.classList.add('character-card');

    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}" />
      <h3>${character.name}</h3>
      <p>Race: ${character.race}</p>
      <p>Description: ${character.description}</p>
    `;

    container.appendChild(card);
  });
}

fetchCharacters();
