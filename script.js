// 1. Petal Background Logic
function spawnPetals() {
    for(let i=0; i<15; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.width = (Math.random() * 10 + 10) + 'px';
        petal.style.height = (Math.random() * 10 + 10) + 'px';
        petal.style.animationDuration = (Math.random() * 3 + 4) + 's';
        petal.style.animationDelay = (Math.random() * 5) + 's';
        document.body.appendChild(petal);
    }
}
spawnPetals();

// 2. Navigation
function showView(stepId) {
    document.querySelectorAll('.step-view').forEach(v => v.classList.remove('active'));
    document.getElementById(`step${stepId}`).classList.add('active');
}

function nextStep(n) { showView(n); }

// 3. Password Check
function checkPassword() {
    const input = document.getElementById('pwInput').value.toLowerCase();
    if(input === 'april07') {
        showView(2);
        setTimeout(() => {
            showView(3);
            runIntro();
        }, 2000);
    } else {
        alert("Hint: It's the date!");
    }
}

// 4. Intro Animation
function runIntro() {
    const name = document.getElementById('animated-name');
    const hbd = document.getElementById('animated-hbd');
    const btn = document.getElementById('intro-btn');

    name.style.opacity = '1';
    setTimeout(() => {
        name.style.display = 'none';
        hbd.style.display = 'block';
        setTimeout(() => { hbd.style.opacity = '1'; }, 100);
        setTimeout(() => { btn.style.display = 'block'; }, 1000);
    }, 2500);
}

// 5. Questions Logic
let currentQ = 1;
const reactions = {
    1: "Correct! Science confirms it.",
    2: "Yess i knew itt.",
    3: "That's the spirit! Let's go."
};

function handleAnswer(isYes) {
    if(isYes) {
        document.getElementById('q-reaction').innerText = reactions[currentQ];
        setTimeout(() => {
            currentQ++;
            if(currentQ > 3) {
                showView(5);
            } else {
                updateQuestion();
            }
        }, 1200);
    }
}

function updateQuestion() {
    const questions = [
        "",
        "I am always right, aren't I?",
        "Will you be always there for me?",
        "Are we going to have an incredible year?"
    ];
    document.getElementById('q-title').innerText = `Question ${currentQ}/3`;
    document.getElementById('q-text').innerText = questions[currentQ];
    document.getElementById('q-reaction').innerText = "";
    document.getElementById('noBtn').style.transform = "none";
}

function dodgeNo() {
    const btn = document.getElementById('noBtn');
    const x = Math.random() * 100 - 50;
    const y = Math.random() * 60 - 30;
    btn.style.transform = `translate(${x}px, ${y}px)`;
}

// 6. Scrapbook Logic (Replace URLs with your actual photo links)
let photoIdx = 0;
const photos = [
   
    "pics/sing.jpg",
    "pics/nell.jpg",
    "pics/fort2.jpg",
    "pics/prya1.jpg",
    "pics/priya2.jpg",
    "pics/fort1.jpg",
    "pics/thtt1.jpg",
    "pics/thtt2.jpg"
];

function nextPhoto() {
    photoIdx++;
    if(photoIdx < photos.length) {
        document.getElementById('scrap-img').src = photos[photoIdx];
        document.getElementById('scrapbook-counter').innerText = `Memory ${photoIdx + 1} of 9`;
        if(photoIdx === 8) document.getElementById('scrap-btn').innerText = "Finish Album";
    } else {
        showView(6);
    }
}

// 7. Envelope & Hugs
function toggleLetter(open) {
    document.getElementById('letterModal').style.display = open ? 'block' : 'none';
    document.getElementById('overlay').style.display = open ? 'block' : 'none';
}

function sendVirtualHug() {
    alert("Virtual Hug Sent! 🤗❤️✨");
}

function restartJourney() {
    location.reload();
}