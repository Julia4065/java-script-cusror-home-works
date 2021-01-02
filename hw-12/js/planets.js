window.onload = function() {
    axios.get('https://swapi.dev/api/planets/')
        .then((response) => {
            return response.data.results;
        })
        .then((planets) => {
            planets.map(planet => {
                document.getElementById('planets').innerHTML += '<li>' + planet.name + '</li>';
            })
        })
}

document.getElementById(`prevBtn`).addEventListener("click", () => {
    window.location.href = "12-hw.html";
});