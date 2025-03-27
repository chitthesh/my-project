document.addEventListener("DOMContentLoaded", () => {
    const movies = [
      { id: "1", title: "The Batman", description: "A thrilling superhero movie.", image: "batman.jpg" },
      { id: "2", title: "Avengers: Endgame", description: "The epic conclusion to the saga.", image: "marvel2.jpg" },
      { id: "3", title: "Inception", description: "A mind-bending thriller.", image: "bollywood1.jpg" },
      { id: "4", title: "One Piece: Stampede", description: "An epic pirate adventure.", image: "onepiece1.jpg" },
      { id: "5", title: "3 Idiots", description: "A hilarious yet touching journey.", image: "3idiots.jpg" },
      { id: "6", title: "Dilwale Dulhania Le Jayenge", description: "A timeless romantic classic.", image: "ddlj.jpg" },
      { id: "7", title: "Iron Man", description: "The journey of a billionaire superhero.", image: "ironman.jpg" }
    ];
  
    const moviesContainer = document.getElementById("movies-container");
    const searchInput = document.getElementById("search-input");
    const searchDropdown = document.getElementById("search-dropdown");
    const searchButton = document.getElementById("search-button");
  
    // Function to display movies
    function displayMovies(moviesList) {
      moviesContainer.innerHTML = ""; // Clear previous movie cards
      moviesList.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");
        movieCard.innerHTML = `
          <img src="/images/${movie.image}" alt="${movie.title}">
          <h3>${movie.title}</h3>
          <p>${movie.description}</p>
          <button onclick="bookTicket('${movie.id}')">Book Now</button>
        `;
        moviesContainer.appendChild(movieCard);
      });
    }
  
    // Initial display of all movies
    displayMovies(movies);
  
    // Function to handle search
    function handleSearch() {
      const query = searchInput.value.toLowerCase();
      const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(query)
      );
      displayMovies(filteredMovies);
      updateDropdown(filteredMovies);
    }
  
    // Function to update dropdown suggestions
    function updateDropdown(filteredMovies) {
      searchDropdown.innerHTML = ""; // Clear previous dropdown items
      filteredMovies.forEach((movie) => {
        const dropdownItem = document.createElement("div");
        dropdownItem.classList.add("dropdown-item");
        dropdownItem.textContent = movie.title;
        dropdownItem.onclick = () => {
          searchInput.value = movie.title; // Update input with selection
          handleSearch();
        };
        searchDropdown.appendChild(dropdownItem);
      });
  
      searchDropdown.style.display = filteredMovies.length > 0 ? "block" : "none";
    }
  
    // Event listeners
    searchInput.addEventListener("input", () => handleSearch());
    searchButton.addEventListener("click", () => handleSearch());
  
    // Hide dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-bar")) {
        searchDropdown.style.display = "none";
      }
    });
  
    // Booking functionality
    function bookTicket(movieId) {
      alert(`Booking ticket for Movie ID: ${movieId}`);
    }
  });
  