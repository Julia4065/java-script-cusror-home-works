document.querySelector("#heroInfoId").addEventListener("click", getHeros);

function getHeros(e) {
    const episode = document.getElementById("episodeNumber").value;

    clearHeroInfo();

    axios.get(`https://swapi.dev/api/films/${episode}`)
        .then(response => {
            return response.data;
        })
        .then((data) => {
            data.characters.map((person => {
                axios.get(person)
                    .then(response => {
                        return response.data;
                    })
                    .then((data) => {
                        const hero = {
                            name: data.name,
                            birthYear: data.birth_year,
                            gender: data.gender
                        }

                        createRecordForHero(hero["name"]);

                        let resRecord = "";
                        for (let heroAttribute in hero) {
                            resRecord = hero[heroAttribute] + " ";

                            if (heroAttribute != "gender") {
                                document.getElementById("tableId" + hero["name"]).innerHTML += '<td>' + resRecord + '</td>';
                            } else {
                                displayHeroGender(hero["gender"], hero["name"]);
                            }
                        };
                    })
            }))
        });
}


clearHeroInfo = () => {
    if (document.getElementsByTagName("tr").length != 0) {
        for (let i = document.getElementsByTagName("tr").length; i > 0; i--) {
            document.getElementById("tableId").deleteRow(0);
        }
    }
}

createRecordForHero = (nameOfHero) => {
    let tr = document.createElement("tr");
    tr.setAttribute("id", "tableId" + nameOfHero);
    document.getElementById("tableId").appendChild(tr);
}

displayHeroGender = (gender, heroName) => {
    const heroRecord = document.getElementById("tableId" + heroName);
    let genderImg = document.createElement("img");

    if (['n/a', 'none', 'hermaphrodite'].indexOf(gender) >= 0) {
        gender = "none";
    }

    genderImg.src = `img/${gender}-icon.png`;

    let tdEl = document.createElement("td");
    heroRecord.appendChild(tdEl);
    tdEl.append(genderImg);
}

document.getElementById(`buttonNext`).addEventListener("click", () => {
    window.location.href = "pageWithPlanets.html";
});