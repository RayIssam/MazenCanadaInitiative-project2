//fetch videos from youtube API
const url="https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC98Suvqo2atFD0Y6e3Bn2AA&maxResults=3&order=date&key=AIzaSyCM4gJwvXZYvpf-EtgY7snempe8q8P4Drs"
fetch(url)
.then(response => {return response.json() })
.then(data =>{youtubeLatestVideos(data.items);})

function youtubeLatestVideos(data){
    //console.log(data)
data.forEach(element => {
    /*
      let title=element.snippet.thumbnails.title;
      let image=element.snippet.thumbnails.high.url;
    */

    let videoId=element.id.videoId;
    document.getElementById("latest-videos").innerHTML +=
      `<div> <iframe src="https://www.youtube.com/embed/${videoId}"></iframe></div>`
});

}


