// console.log(fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=35&q=video&videoEmbeddable=true&key=AIzaSyChgYDk0j3HZ5iCz-uT3xMmMB8G7q9slzA`));

async function youtube() {
    let input = document.getElementById('input').value

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=35&type=video&q=${input}&videoEmbeddable=true&key=AIzaSyChgYDk0j3HZ5iCz-uT3xMmMB8G7q9slzA`);
    let data = await res.json();
    // console.log(data.items);
    appendVideos(data.items)
}

let parent = document.getElementById('parent')
function appendVideos(video) {
    parent.innerHTML = null
    video.forEach(videos => {
        // console.log(videos);
        let div = document.createElement('div')
        div.innerHTML = `<iframe width="360" height="215" src="https://www.youtube.com/embed/${videos.id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

        parent.append(div)
    
    });


}