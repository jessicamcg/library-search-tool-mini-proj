var searchForm = document.querySelector('#search-form');

function handleSearchSubmit(event) {
  
    event.preventDefault();

    var searchInput = document.querySelector('#search-input').value;
    var formatInput = document.querySelector('#format-select').value;

    var resultsPage = './results.html?q=' + searchInput + '&format=' + formatInput;

    location.assign(resultsPage);
};

searchForm.addEventListener('submit', handleSearchSubmit);