/* Search */
var UI = {};
var input;
// Clear the tracks on page
UI.clearTracks = function() {
    document.querySelector('#search-results').innerHTML = '';
}
// When enter is pressed
UI.enterPress = function() {
    document.querySelector('#search-input').addEventListener('keyup', function(e) {
        // if the key ENTER is pressed...
        if(e.which === 13) {
            UI.clearTracks();
            input = document.querySelector('#search-input').value;
            SoundCloudAPI.getTrack(input);
        }
    });
}
UI.enterPress();
// When the search icon is clicked on
UI.submitClick = function() {
    document.querySelector('#search-button').addEventListener('click', function(e) {
        UI.clearTracks();
        input = document.querySelector('#search-input').value;
        SoundCloudAPI.getTrack(input);
    });
}
UI.submitClick();

/* Query SoundCloud API */
var SoundCloudAPI = {};
// Set up SoundCloud API
SoundCloudAPI.init = function() {
    SC.initialize({
        client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
    });
}
SoundCloudAPI.init();
// Get tracks from SoundCloud
SoundCloudAPI.getTrack = function(inputValue) {
    // find all sounds of buskers licensed under 'creative commons share alike'
    SC.get('/tracks', {
        q: inputValue
    }).then(function(tracks) {
        SoundCloudAPI.renderTracks(tracks);
    });
}

/* Render tracks */
SoundCloudAPI.renderTracks = function(tracks) {
    tracks.forEach(function(track) {
        // Card
        var card = document.createElement('div');
        card.classList.add('card');
        var row = document.createElement('div');
        row.classList.add('row');
        row.classList.add('g-0');
        card.appendChild(row);
        // Image
        var imageDiv = document.createElement('div');
        imageDiv.classList.add('col');
        var image_img = document.createElement('img');
        image_img.classList.add('image_img');
        image_img.src = track.artwork_url || 'http://lorempixel.com/100/100/abstract/';
        image_img.alt = 'Track #' + track.id + '\'s artwork';
        console.log(track);
        imageDiv.appendChild(image_img);
        row.appendChild(imageDiv);
        // Content
        var content = document.createElement('div');
        content.classList.add('col');
        var body = document.createElement('div');
        body.classList.add('card-body');
        content.appendChild(body);
        // Title
        var header = document.createElement('h5');
        header.classList.add('card-title');
        header.innerHTML = '<a href="' + track.permalink_url + '" target="_blank">' + track.title + '</a>';
        body.appendChild(header);
        // User
        var user = document.createElement('p');
        user.classList.add('card-text');
        user.innerHTML = '<small class="text-muted">by ' + track.user.username + '</small>';
        body.appendChild(user);
        row.appendChild(content);
        // Button
        var button = document.createElement('div');
        button.classList.add('col-md-1');
        var icon = document.createElement('img');
        icon.src = '/assets/images/icons/play.svg';
        icon.alt = 'Play Icon'
        icon.classList.add('play-button');
        button.appendChild(icon);
        row.appendChild(button);
        button.addEventListener('click', function() {
            SoundCloudAPI.getEmbed(track.permalink_url);
        });
        var searchResults = document.querySelector('#search-results');
        searchResults.appendChild(card);
    });
}

/* Play track */
SoundCloudAPI.getEmbed = function(trackURL) {
    SC.oEmbed(trackURL, {
        auto_play: true
    }).then(function(embed) {
        var playerArea = document.querySelector('#soundcloud-player');
        var box = document.createElement('div');
        box.innerHTML = embed.html;
        playerArea.innerHTML = '';
        playerArea.append(box);
    });
}
