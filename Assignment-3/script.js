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
