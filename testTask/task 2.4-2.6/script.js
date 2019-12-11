let movies = [];
const addMovie = (ev)=>{
    ev.preventDefault();
    let movie = {
        id: Date.now,
        Title:document.getElementById('title').value,
        Year: document.getElementById('year').value,
        Grade: document.getElementById('grade').value
    }
    movies.push(movie);
    document.forms[0].reset();

    console.warn('added', {movies});
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

    localStorage.setItem('Movies', JSON.stringify())
}



document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addMovie);
});

function loadMovies() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'movies.json', true);
    xhr.send();

    if (xhr.status != 200) {

    alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
    } else {
    alert(xhr.responseText);
    }
}