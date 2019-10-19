let songs = new Audio()
let songList =['https://archive.org/download/cd_the-lumineers_the-lumineers/disc1/07.%20The%20Lumineers%20-%20Charlie%20Boy_sample.mp3',
     'https://archive.org/download/cd_the-lumineers_the-lumineers/disc1/03.%20The%20Lumineers%20-%20Submarines_sample.mp3','https://archive.org/download/cd_the-lumineers_the-lumineers/disc1/06.%20The%20Lumineers%20-%20Stubborn%20Love_sample.mp3',
     'https://archive.org/download/cd_the-lumineers_the-lumineers/disc1/02.%20The%20Lumineers%20-%20Ho%20Hey_sample.mp3','https://archive.org/download/cd_the-lumineers_the-lumineers/disc1/08.%20The%20Lumineers%20-%20Big%20Parade_sample.mp3',
     'https://archive.org/download/cd_the-lumineers_the-lumineers/disc1/09.%20The%20Lumineers%20-%20Slow%20It%20Down_sample.mp3','https://archive.org/download/cd_the-lumineers_the-lumineers/disc1/11.%20The%20Lumineers%20-%20Morning%20Song_sample.mp3'] 
let songNames = ["Charlie Boy", "Submarines", "Stubborn Love", "Ho Hey", "Big Parade",
"Slow It Down", "Morning Song"]
let songCounter = 0; /* gör ett index för vektorn */     
let playing = 0; /* variabel som styr play och pause funktionen */

function playorPauseSong(){ /* funktion för att spela och pausa */
    if (playing == 0) {
    songs.src = songList[songCounter] /* hämtar index för vektorn och connectar audio-objektet med den */
    songs.play()
    $('#Play i').attr('class', "fas fa-pause-circle") /* byt ikon till paus när en låt spelas */
    playing = 1;
    }
    else if (playing == 1) { /* om variabeln playing är 1, går det att pausa */
        songs.pause() 
        $('#Play i').attr('class', "fas fa-play-circle")
        playing = 0 /* sätter variabeln till 0, så att man kan spela */
    }
     
    }
function nextSong(){ 
    playing = 1
    songs.src = songList[songCounter]
    songCounter++
    if (songCounter > 6) { /* anropar metod för första låten om songCounter blir större än 6, dvs större än vektorns storlek */
        charlieBoy()
        $('#Play i').attr('class', "fas fa-pause-circle")
    }
    else if (songCounter == 1) {
        subMarines()
        $('#Play i').attr('class', "fas fa-pause-circle")
    }
    else if (songCounter == 2) {
        stubbornLove()
        $('#Play i').attr('class', "fas fa-pause-circle")
    }
    else if (songCounter == 3) {
        hoHey()
        $('#Play i').attr('class', "fas fa-pause-circle")
    }
    else if (songCounter == 4) {
        bigParade()
        $('#Play i').attr('class', "fas fa-pause-circle")
    }
    else if (songCounter == 5) {
        slowItDown()
        $('#Play i').attr('class', "fas fa-pause-circle")
    }
    else if (songCounter == 6) {
        morningSong()
        $('#Play i').attr('class', "fas fa-pause-circle")
    }
}  
function previousSong(){  
    playing = 1
    if (songs.currentTime < 2) { /* om låten har spelat i mindre än 2 sekunder, spela föregående låt */
        songCounter--
        songs.src = songList[songCounter]
    if (songCounter <= 0) { /* anropar metod för första låten om songCounter blir mindre än eller lika med 0, hindrar programmet från att krascha */
        charlieBoy()
        $('#Play i').attr('class', "fas fa-pause-circle")
    }
    else if (songCounter == 1) {
        subMarines()
        $('#Play i').attr('class', "fas fa-pause-circle")
    }
    else if (songCounter == 2) {
        stubbornLove()
        $('#Play i').attr('class', "fas fa-pause-circle")
    }
    else if (songCounter == 3) {
        hoHey()
        $('#Play i').attr('class', "fas fa-pause-circle")
    }
    else if (songCounter == 4) {
        bigParade()
        $('#Play i').attr('class', "fas fa-pause-circle")
    }
    else if (songCounter == 5) {
        slowItDown()
        $('#Play i').attr('class', "fas fa-pause-circle")
    }
    else if (songCounter == 6) {
        morningSong()
        $('#Play i').attr('class', "fas fa-pause-circle")
    }

}
else { /* om låten har spelat i mer än 2 sekunder, spela om samma låt */
    songs.currentTime = 0
}
}
function charlieBoy(){
    document.getElementById("songname").innerHTML = songNames[0] /* ändrar låtnamnet under nowPlaying till första låten */
    songCounter = 0
    songs.src = songList[songCounter]
    playing = 1
    songs.play()
    $('#Play i').attr('class', "fas fa-pause-circle")
}
function subMarines(){
    document.getElementById("songname").innerHTML = songNames[1]
    songCounter = 1
    songs.src = songList[songCounter]
    playing = 1
    songs.play()
    $('#Play i').attr('class', "fas fa-pause-circle")
}
function stubbornLove(){
    document.getElementById("songname").innerHTML = songNames[2]
    songCounter = 2
    songs.src = songList[songCounter]
    playing = 1
    songs.play()
    $('#Play i').attr('class', "fas fa-pause-circle")
}
function hoHey(){
    document.getElementById("songname").innerHTML = songNames[3]
    songCounter = 3
    songs.src = songList[songCounter]
    playing = 1
    songs.play()
    $('#Play i').attr('class', "fas fa-pause-circle")
}
function bigParade() {
    document.getElementById("songname").innerHTML = songNames[4]
    songCounter = 4
    songs.src = songList[songCounter]
    playing = 1
    songs.play()
    $('#Play i').attr('class', "fas fa-pause-circle")
}
function slowItDown() {
    document.getElementById("songname").innerHTML = songNames[5]
    songCounter = 5
    songs.src = songList[songCounter]
    playing = 1
    songs.play()
    $('#Play i').attr('class', "fas fa-pause-circle")
}
function morningSong() {
    document.getElementById("songname").innerHTML = songNames[6]
    songCounter = 6
    songs.src = songList[songCounter]
    playing = 1
    songs.play()
    $('#Play i').attr('class', "fas fa-pause-circle")
}

