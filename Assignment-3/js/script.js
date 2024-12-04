const apiKey = '911f6a617f6149e49da337468e774278'; // News API key
const newsContainer = document.getElementById('news-container');
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const loadingIndicator = document.createElement('p');
const loadMoreBtn = document.createElement('button');
const backToTopBtn = document.createElement('button');
let currentPage = 1; // Track the current page for pagination
let currentQuery = ''; // Track the current search query
// Add a loading indicator
loadingIndicator.textContent = 'Loading...';
loadingIndicator.style.textAlign = 'center';
loadingIndicator.style.fontSize = '1.5rem';
loadingIndicator.style.color = '#555';

// Add a "Load More" button
loadMoreBtn.textContent = 'Load More';
loadMoreBtn.style.display = 'none';
loadMoreBtn.style.margin = '1rem auto';
loadMoreBtn.style.padding = '0.7rem 1.5rem';
loadMoreBtn.style.backgroundColor = '#0056b3';
loadMoreBtn.style.color = '#fff';
loadMoreBtn.style.border = 'none';
loadMoreBtn.style.borderRadius = '5px';
loadMoreBtn.style.cursor = 'pointer';
loadMoreBtn.addEventListener('click', () => {
    currentPage++;
    fetchNews(currentQuery, true); // Fetch next page of articles
});

// Add a "Back to Top" button
backToTopBtn.textContent = 'Back to Top';
backToTopBtn.style.display = 'none';
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '20px';
backToTopBtn.style.right = '20px';
backToTopBtn.style.padding = '0.7rem 1rem';
backToTopBtn.style.backgroundColor = '#0056b3';
backToTopBtn.style.color = '#fff';
backToTopBtn.style.border = 'none';
backToTopBtn.style.borderRadius = '5px';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Append buttons to the body
document.body.appendChild(loadMoreBtn);
document.body.appendChild(backToTopBtn);
// Show or hide the "Back to Top" button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Fetch top headlines on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedQuery = localStorage.getItem('lastSearch');
    if (savedQuery) {
        searchInput.value = savedQuery;
        currentQuery = `everything?q=${savedQuery}`;
    } else {
        currentQuery = 'top-headlines?country=us';
    }
    fetchNews(currentQuery);
});
// Fetch news based on search query
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        localStorage.setItem('lastSearch', query); // Save query to local storage
        currentPage = 1; // Reset to first page
        currentQuery = `everything?q=${query}`;
        fetchNews(currentQuery);
    } else {
        alert('Please enter a search term.');
    }
});
