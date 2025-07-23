document.addEventListener('DOMContentLoaded', () => {
    // Dynamically update the copyright year
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Mobile navigation toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- ONLY FOR index.html (Home Page) ---
    // Basic "View Details" functionality (simulated data)
    // This part of the script is specific to the home page for demonstration.
    // In a real app, this would likely be part of a client-side router or a dedicated detail page.
    const movieListingSection = document.querySelector('.movie-listing');
    const movieDetailSection = document.getElementById('movieDetailSection');
    const backToMoviesBtn = document.getElementById('backToMovies');

    if (movieListingSection && movieDetailSection && backToMoviesBtn) { // Check if elements exist on current page
        // Mock movie data (in a real app, this would come from an API)
        const mockMovies = {
            1: {
                title: "Dune: Part Two",
                poster: "https://image.tmdb.org/t/p/w500/1E5baazlVaWsChzQ1lKjo6TsD5.jpg",
                rating: "8.5",
                genre: "Sci-Fi, Adventure",
                releaseDate: "March 1, 2024",
                director: "Denis Villeneuve",
                cast: "Timothée Chalamet, Zendaya, Rebecca Ferguson",
                plot: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee."
            },
            2: {
                title: "Kung Fu Panda 4",
                poster: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPKEbJawrGsQzgpc.jpg",
                rating: "7.1",
                genre: "Animation, Family",
                releaseDate: "March 8, 2024",
                director: "Mike Mitchell",
                cast: "Jack Black, Awkwafina, Viola Davis",
                plot: "Po is back! After years of training, Po is ready to take the next step in his journey as the Dragon Warrior, but a new villain emerges, threatening to destroy his legacy."
            },
            3: {
                title: "Godzilla x Kong: The New Empire",
                poster: "https://image.tmdb.org/t/p/w500/zEqj8pW75H9J8Mh5gV2e0t2Sj9b.jpg",
                rating: "6.6",
                genre: "Action, Sci-Fi",
                releaseDate: "March 29, 2024",
                director: "Adam Wingard",
                cast: "Rebecca Hall, Brian Tyree Henry, Dan Stevens",
                plot: "Godzilla and Kong must unite to fight against a colossal undiscovered threat hidden within the Earth, which poses an existential threat to their species and to humanity."
            },
            4: {
                title: "Damsel",
                poster: "https://image.tmdb.org/t/p/w500/A0K0xJ0YI3gS8p0p7dGk3lXqYqX.jpg",
                rating: "6.2",
                genre: "Fantasy, Action",
                releaseDate: "March 8, 2024",
                director: "Juan Carlos Fresnadillo",
                cast: "Millie Bobby Brown, Ray Winstone, Angela Bassett",
                plot: "A dutiful damsel agrees to marry a handsome prince, only to find the royal family has recruited her as a sacrifice to a fire-breathing dragon. She must rely on her wits and will to survive."
            }
        };

        const viewDetailsButtons = document.querySelectorAll('.view-details');
        viewDetailsButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const movieId = event.target.dataset.movieId;
                const movie = mockMovies[movieId];

                if (movie) {
                    document.getElementById('detailPoster').src = movie.poster;
                    document.getElementById('detailPoster').alt = movie.title + " Poster";
                    document.getElementById('detailTitle').textContent = movie.title;
                    document.getElementById('detailRating').textContent = movie.rating;
                    document.getElementById('detailGenre').textContent = movie.genre;
                    document.getElementById('detailReleaseDate').textContent = movie.releaseDate;
                    document.getElementById('detailDirector').textContent = movie.director;
                    document.getElementById('detailCast').textContent = movie.cast;
                    document.getElementById('detailPlot').textContent = movie.plot;

                    movieListingSection.classList.add('hidden');
                    movieDetailSection.classList.remove('hidden');
                    window.scrollTo(0, 0); // Scroll to top of the page
                }
            });
        });

        backToMoviesBtn.addEventListener('click', () => {
            movieListingSection.classList.remove('hidden');
            movieDetailSection.classList.add('hidden');
            window.scrollTo(0, 0); // Scroll to top of the page
        });
    }
});