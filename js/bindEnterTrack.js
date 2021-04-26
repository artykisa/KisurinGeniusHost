var trackName = document.getElementById("track_name");
trackName.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        let explanation = "";
        var queryString = "?" + artist + "&" + track + "&" + lyrics;
        console.log(queryString)
        for(var i = 0; i<length;i++){
            explanation += document.getElementById("explain" + i).value + "\n";
        }
        firebase.database().ref(`/Explanation/${artist}/${track}/${lyrics}`)
            .set(explanation)
            .then(function onSuccess(res) {
                window.location.href = "track.html" + queryString;
            })
    }
});
