fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => {

        const $grid = document.querySelector(".grid");
        data.forEach((character) => {
            //if (character.image) {
            const card = document.createElement("div");
            card.classList.add("card");

            let imageSrc = character.image;
            if (!imageSrc) {
                if (character.alive) {
                    imageSrc = "/assets/foto-perfil-generica.png";
                } else {
                    imageSrc = "/assets/foto-perfil-generica-muerte.png";
                }
            }
            let state;
            if (character.alive) {
                state = "Vivo";
            } else {
                state = "Muerto";
            }
            card.innerHTML = `
                          <div class = "card-content">                              
                            <div class = "image-content"> 
                                <img src="${imageSrc}" alt="${character.name}">
                            </div>
                            <div class = "info-content">
                                <h3>${character.name}</h3>
                                <p><strong> Especie:</strong> ${character.species}</p>
                                <p><strong> Intérprete:</strong> ${character.actor}</p>
                                <p><strong> Estado:</strong> ${state}</p>
                            </div> 
                          <div/>       
                          `;
            $grid.appendChild(card);

            //}
        });
    })

