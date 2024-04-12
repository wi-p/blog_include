function getWords(){
    text = words.value;
    document.getElementById("para").innerHTML += '<div class="divcomment"><p> <b>Comentário: </b> ' + text + ' </p></div>';
    document.getElementById("words").value = '';
}