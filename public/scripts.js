document.addEventListener("DOMContentLoaded", () => {
<<<<<<< HEAD
  // Regular movies
  const regularMovies = [
      { id: "1", title: "The Batman", description: "A thrilling superhero movie.", image: "batman.jpg", seatsAvailable: 50 },
      { id: "2", title: "Avengers: Endgame", description: "The epic conclusion to the saga.", image: "marvel2.jpg", seatsAvailable: 30 },
      { id: "3", title: "Inception", description: "A mind-bending thriller.", image: "bollywood1.jpg", seatsAvailable: 20 },
      { id: "4", title: "One Piece: Stampede", description: "An epic pirate adventure.", image: "onepiece1.jpg", seatsAvailable: 15 },
      { id: "5", title: "3 Idiots", description: "A hilarious yet touching journey.", image: "3idiots.jpg", seatsAvailable: 40 },
      { id: "6", title: "Dilwale Dulhania Le Jayenge", description: "A timeless romantic classic.", image: "ddlj.jpg", seatsAvailable: 35 },
      { id: "7", title: "Iron Man", description: "The journey of a billionaire superhero.", image: "ironman.jpg", seatsAvailable: 25 },
      { id: "8", title: "Interstellar", description: "An epic space exploration story.", image: "interstellar.jpg", seatsAvailable: 45 },
      { id: "9", title: "Joker", description: "The story of a tormented soul.", image: "joker.jpg", seatsAvailable: 10 },
      { id: "10", title: "RRR", description: "A grand historical action drama.", image: "rrr.jpg", seatsAvailable: 60 }
  ];

  // Premium movies (completely separate)
  const premiumMovies = [
      { id: "101", title: "Avatar: The Way of Water", description: "An immersive experience with breathtaking visuals.", image: "avatar2.jpg", premiumSeats: 20 },
      { id: "102", title: "The Lion King", description: "A timeless story of royalty and bravery.", image: "lionking.jpg", premiumSeats: 15 },
      { id: "103", title: "Mission Impossible: Fallout", description: "High-octane action and thrilling missions.", image: "mi6.jpg", premiumSeats: 10 },
      { id: "104", title: "Spider-Man: Across the Spider-Verse", description: "A visually stunning multiverse adventure.", image: "spiderman2.jpg", premiumSeats: 12 },
      { id: "105", title: "Harry Potter and the Philosopher's Stone", description: "The magical journey begins.", image: "harrypotter1.jpg", premiumSeats: 25 }
  ];

  const moviesContainer = document.getElementById("movies-container");
  const searchInput = document.getElementById("search-input");
  const searchDropdown = document.getElementById("search-dropdown");
  const searchButton = document.getElementById("search-button");
  const resetButton = document.getElementById("reset-button"); // Reset button to show all movies
  const premiumCheckbox = document.getElementById("premium-checkbox"); // Premium filter checkbox

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
              <p>${movie.seatsAvailable !== undefined ? `Seats Available: ${movie.seatsAvailable}` : `Premium Seats: ${movie.premiumSeats}`}</p>
              <button onclick="bookTicket('${movie.id}', ${movie.seatsAvailable === undefined})">
                  ${movie.seatsAvailable !== undefined ? "Book Regular" : "Book Premium"}
              </button>
          `;
          moviesContainer.appendChild(movieCard);
      });
  }

  // Initial display of regular movies
  displayMovies(regularMovies);

  // Function to handle search
  function handleSearch() {
      const query = searchInput.value.toLowerCase();
      const filteredRegularMovies = regularMovies.filter((movie) =>
          movie.title.toLowerCase().includes(query)
      );
      const filteredPremiumMovies = premiumMovies.filter((movie) =>
          movie.title.toLowerCase().includes(query)
      );
      displayMovies([...filteredRegularMovies, ...filteredPremiumMovies]);
      updateDropdown([...filteredRegularMovies, ...filteredPremiumMovies]);
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

  // Booking functionality
  function bookTicket(movieId, isPremium) {
      const movie = (isPremium ? premiumMovies : regularMovies).find(m => m.id === movieId);
      if (movie) {
          if (isPremium) {
              if (movie.premiumSeats > 0) {
                  movie.premiumSeats--;
                  alert(`Successfully booked a premium ticket for: ${movie.title}`);
              } else {
                  alert(`Sorry, no premium seats available for: ${movie.title}`);
              }
          } else {
              if (movie.seatsAvailable > 0) {
                  movie.seatsAvailable--;
                  alert(`Successfully booked a regular ticket for: ${movie.title}`);
              } else {
                  alert(`Sorry, no regular seats available for: ${movie.title}`);
              }
          }
          displayMovies(premiumCheckbox.checked ? premiumMovies : [...regularMovies, ...premiumMovies]); // Update the movie list
      } else {
          alert("Movie not found!");
      }
  }

  // Reset functionality
  resetButton.addEventListener("click", () => {
      searchInput.value = "";
      displayMovies([...regularMovies, ...premiumMovies]);
      searchDropdown.innerHTML = ""; // Clear dropdown
      searchDropdown.style.display = "none";
  });

  // Premium filter functionality
  premiumCheckbox.addEventListener("change", () => {
      if (premiumCheckbox.checked) {
          displayMovies(premiumMovies);
      } else {
          displayMovies([...regularMovies]);
      }
  });
  document.addEventListener("DOMContentLoaded", () => {
    const premiumCheckbox = document.getElementById("premium-checkbox");
    const premiumLabel = document.getElementById("premium-label");
  
    premiumCheckbox.addEventListener("change", () => {
      if (premiumCheckbox.checked) {
        premiumLabel.textContent = "Show All Movies";
        displayMovies(premiumMovies); // Show only premium movies
      } else {
        premiumLabel.textContent = "Show Premium Movies Only";
        displayMovies([...regularMovies]); // Show all movies
      }
    });
  
    // Example displayMovies function remains unchanged
  });
  
  // Event listeners
  searchInput.addEventListener("input", () => handleSearch());
  searchButton.addEventListener("click", () => handleSearch());

  // Hide dropdown when clicking outside
  document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-bar")) {
          searchDropdown.style.display = "none";
      }
  });
});
=======
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
  
>>>>>>> bffe013 (Initial commit)
