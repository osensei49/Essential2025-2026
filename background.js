const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// detect page
const isViewer = window.location.pathname.includes("viewer");

// ===== AUDIO SETUP =====
let audioElement = document.getElementById("video") || document.getElementById("bgMusic");

let audioCtx, analyser, dataArray;

if(audioElement){
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioCtx.createMediaElementSource(audioElement);

    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 64;

    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    dataArray = new Uint8Array(analyser.frequencyBinCount);

    // unlock audio (mobile)
    document.addEventListener("click", ()=>{
        audioCtx.resume();
    }, {once:true});
}

// ===== PARTICLES =====
let particles = [];
let count = 100;

for(let i=0;i<count;i++){
    particles.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        dx: (Math.random()-0.5)*(isViewer?0.3:0.8),
        dy: (Math.random()-0.5)*(isViewer?0.3:0.8),
        r: Math.random()*2+1,
        hue: Math.random()*360
    });
}

// ===== ANIMATION =====
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    let volume = 0;

    if(analyser){
        analyser.getByteFrequencyData(dataArray);

        let sum = 0;
        for(let i=0;i<dataArray.length;i++){
            sum += dataArray[i];
        }
        volume = sum / dataArray.length; // avg volume
    }

    // normalize volume
    let v = volume / 255;

    // ===== DRAW PARTICLES =====
    particles.forEach(p=>{
        // movement reacts to sound
        p.x += p.dx * (1 + v*3);
        p.y += p.dy * (1 + v*3);

        // bounce
        if(p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if(p.y < 0 || p.y > canvas.height) p.dy *= -1;

        // size reacts
        let size = p.r + v * 4;

        // color shift (purple ↔ blue)
        p.hue += v * 10;
        let color = `hsl(${260 + Math.sin(p.hue)*60}, 100%, ${60 + v*20}%)`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI*2);
        ctx.fillStyle = color;
        ctx.fill();
    });

    // ===== CONNECTIONS =====
    for(let i=0;i<particles.length;i++){
        for(let j=i+1;j<particles.length;j++){
            let dx = particles[i].x - particles[j].x;
            let dy = particles[i].y - particles[j].y;
            let dist = Math.sqrt(dx*dx + dy*dy);

            if(dist < 120){
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);

                // brighter lines when louder
                ctx.strokeStyle = `hsla(${260 + v*100},100%,70%,${0.1 + v*0.5})`;
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(animate);
}

animate();

// ===== RESIZE =====
window.addEventListener("resize", ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});