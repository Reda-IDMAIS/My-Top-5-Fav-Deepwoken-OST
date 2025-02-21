musiques.forEach(function(chanson, index) {
    const description = descMusiques[index];

    // Créer un identifiant unique pour chaque audio
    const audioId = "audio-" + index;

    const illuId = illuMusiques[index];

    const liensYtb = liensMusiques[index]; 

    // Ajouter les éléments dans la page
    document.querySelector('.liste-musiques').innerHTML += 
        "<section>" +
            "<h1>" + chanson + "</h1>" +  // Titre de la chanson
            "<h2>" + description + "</h2>" +  // Description de la chanson
            '<img src="' + illuId  + '">' + // Illustration de la chanson avec ID unique
            '<audio id="' + audioId + '" src="liste musiques/"></audio>' +  // Audio avec ID unique
            '<button class="play" data-audio-id="' + audioId + '">⏵</button>' +  // Bouton Play avec référence à l'audio
            '<button class="pause" style="display: none;" data-audio-id="' + audioId + '">⏸</button>' + // Bouton Pause avec référence à l'audio
            '<a href="' + liensYtb + '" target="_blank"><img class="Ytb" src="autres images/youtube.png"></a>' +
        "</section>";
});



// Gestionnaire de bouton Play
document.querySelectorAll('.play').forEach(function(button) {
    button.addEventListener('click', function(event) {
        var audioId = button.getAttribute('data-audio-id');
        var audio = document.getElementById(audioId);

        audio.play();
        console.log("L'audio a été joué");

        button.style.display = 'none';
        var pauseButton = button.nextElementSibling;
        pauseButton.style.display = 'inline';

        // Remettre le bouton "Pause" sur "Play" une fois la musique terminé
        audio.addEventListener('ended', function() {
            button.style.display = 'inline'; // Affiche le bouton Play
            pauseButton.style.display = 'none'; // Cache le bouton Pause
        });
    });
});

// Gestionnaire de bouton Pause
document.querySelectorAll('.pause').forEach(function(button) {
    button.addEventListener('click', function(event) {
        var audioId = button.getAttribute('data-audio-id');
        var audio = document.getElementById(audioId);

        audio.pause();
        console.log("L'audio a été mis en pause");

        button.style.display = 'none';
        var playButton = button.previousElementSibling;
        playButton.style.display = 'inline';
    });
});

 
//Partie suggestion de musique
var inputTitre = document.getElementById('titre')
inputTitre.addEventListener('input', function(event){

    console.log(inputTitre.value)
    titreOutput.textContent = inputTitre.value;

})

var inputDesc = document.getElementById('descriptionMusique')
inputDesc.addEventListener('input', function(event){
    descOutput.textContent = inputDesc.value;
    console.log(inputDesc.value)


})

document.getElementById('SuggestionMusique').addEventListener('submit', function(event) {


    event.preventDefault();

})





