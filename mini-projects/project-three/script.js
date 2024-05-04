const apiBody = document.querySelector('.api_body')
const apiURL = 'https://jsonplaceholder.typicode.com/todos'
const fetchJokeButton = document.getElementById('fetchJoke')

fetchJokeButton.addEventListener('click', fetching)

function fetching() {
    fetch(apiURL,{
        headers: {
            Accept: "application/json"
        }
    })
    .then((res) => {
        console.log(res);
        return res.json()
    })
    .then((data) => {
        const formattedData = data.map(
            (todo) => `
            <div class="todo-item">
                <h2>UserId: ${todo.id}</h2>
                <h3>Title : ${todo.title}</h3>
                <h4>Completed? : ${todo.completed ? 'Yes' : 'No'}</h4>
            </div>
            `
        ).join('');
        apiBody.innerHTML = formattedData
    })
    .catch((error) => {
        console.log(error);
    })
}