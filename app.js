const video = document.getElementById('video');

const constraints = {
    audio: true,
    video: {
        width: 1280,
        heigth: 720
    }
};

async function init(){
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        window.stream = stream;
        video.srcObject = stream;
    } catch (e) {
        console.log(`error: ${e.toString()}`);
    }
}

init();