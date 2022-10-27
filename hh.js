  // AIzaSyDfDGuXpPofzFbXud90SXX4rH4e5eOvrPk
    // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&key=[YOUR_API_KEY]
    // let url =  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&key=AIzaSyDfDGuXpPofzFbXud90SXX4rH4e5eOvrPk`
    // fetch(url)
    // .then () => {}

    // AIzaSyDv4EIOIfKx0L6mFbK9_aP4X5IdoHARkok

const api = "AIzaSyCAEAkAJ6Ph_CzIEL-4KpmbPe695Qi0gVU"
const searchVedios = async () => {
    try {

        const q = document.getElementById("query").value
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}&key=${api}`);
        const data = await res.json();
        append(data.items)
        console.log(data.items)

    } catch (err) {
        console.log(err)
    }
};

const append = (videos) => {
    let show_vedios = document.getElementById("showvedios");

    show_vedios.innerHTML=null;

    videos.forEach( ({ id: {videoId},snippet: {title} }) => {

        let div = document.createElement("div");
        div.setAttribute("id","box")

        let iframe = document.createElement("iframe")

        iframe.src = `https://www.youtube.com/embed/${videoId}`

        iframe.width = "100%";
        iframe.height = "100%";
        iframe.allow = "fullscreen";

        let name = document.createElement("h5");

        name.innerText = title;

        div.append(iframe,name);

        let data = {
            title,
            videoId,
        }
        div.onclick= () => {
            showVedio(data)
        }

        show_vedios.append(div);

        
    });
};



const showVedio = (x) => {
    window.location= "video.html";
    console.log("yes")
    localStorage.setItem("vedio",JSON.stringify(x))
}


/* <iframe 
width="560" 
height="315" 
src="https://www.youtube.com/embed/ZHByWMQLieU" 
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen>
</iframe> */