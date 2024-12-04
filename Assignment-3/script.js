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
