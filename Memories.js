// ===== MEDIA FILE LIST =====
const mediaFiles = [ /* KEEP YOUR FILE LIST */ ];

const gallery = document.getElementById("gallery");

mediaFiles.forEach((file, index) => {
    const div = document.createElement("div");
    div.className = "media";
    div.style.animationDelay = `${index * 0.3}s`;

    if(file.endsWith(".mp4")) {
        const vid = document.createElement("video");
        vid.src = file;
        vid.controls = true;
        div.appendChild(vid);
    } else {
        const img = document.createElement("img");
        img.src = file;
        div.appendChild(img);
    }

    if(index % 2 === 0) div.style.marginLeft = "0";
    else div.style.marginLeft = "auto";

    gallery.appendChild(div);
});

// ===== MODAL =====
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalVideo = document.getElementById("modal-video");

function openMedia(file, type){
    modal.style.display = "flex";

    if(type === "video"){
        modalVideo.src = file;
        modalVideo.style.display = "block";
        modalImg.style.display = "none";
        modalVideo.play();
    } else {
        modalImg.src = file;
        modalImg.style.display = "block";
        modalVideo.style.display = "none";
    }
}

document.addEventListener("click", e => {
    if(e.target.tagName === "IMG" && e.target.parentElement.classList.contains("media")){
        openMedia(e.target.src, "image");
    }

    if(e.target.tagName === "VIDEO" && e.target.parentElement.classList.contains("media")){
        openMedia(e.target.src, "video");
    }
});

document.getElementById("close")?.addEventListener("click", ()=>{
    modal.style.display = "none";
    modalVideo.pause();
});