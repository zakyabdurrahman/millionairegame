let player = {
    nama: '',
    hadiah: 0,
    rights: 0
}

let hadiah = [7000_000, 15_500_000, 31_250_000, 62_500_000, 125_000_000, 250_000_000, 500_000_000, 1_000_000_000]
let currentPrizeIndex = 0;
let currentSoal = 0;

let startButton = document.querySelector(".start-btn");
let welcomePage = document.querySelector(".welcome");
let gamePage = document.getElementById("game");
let gameOverPage = document.querySelector(".result-box");

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function randomSoal() {
    let bankSoal = [
        {
            id: 1,
            pertanyaan: 'Batman adalah nama sebuah kota di negara?',
            jawaban: ['Indonesia', 'Amerika Serikat', 'Jerman', 'Turki'],
            kunciJawaban: 'Turki',
            hadiah: 0
        },

        {
            id: 2,
            pertanyaan: 'Bishkek adalah nama sebuah kota di negara?',
            jawaban: ['Afrika', 'Kirgistan', 'Somalia', 'Turkmenistan'],
            kunciJawaban: 'Kirgistan',
            hadiah: 0
        },

        {
            id: 3,
            pertanyaan: 'Laap adalah makanan khas negara ?',
            jawaban: ['Laos', 'Thailand', 'Kamboja', 'Filipina'],
            kunciJawaban: 'Laos',
            hadiah: 0
        },

        {
            id: 4,
            pertanyaan: 'Aziz Akhannouch adalah perdana menteri negara ?',
            jawaban: ['laos', 'Thailand', 'Maroko', 'Filipina'],
            kunciJawaban: 'Maroko',
            hadiah: 0
        },

        {
            id: 5,
            pertanyaan: 'Sir William Herschell adalah penemu dari ?',
            jawaban: ['Bluetooth', 'Inframerah', 'Ultraviolet', 'Cermin'],
            kunciJawaban: 'Inframerah',
            hadiah: 0
        },

        {
            id: 6,
            pertanyaan: 'Leotard adalah perlengkapan yang digunakan pada tarian ?',
            jawaban: ['Salsa', 'Samba', 'Balet', 'Classic'],
            kunciJawaban: 'Balet',
            hadiah: 0
        },

        {
            id: 7,
            pertanyaan: 'Lee Byung-chull adalah pendiri dari perusahaan ?',
            jawaban: ['Samsung', 'LG', 'Sanyo', 'Apple'],
            kunciJawaban: 'Samsung',
            hadiah: 0
        },

        {
            id: 8,
            pertanyaan: 'Nikola tesla lahir di kota ?',
            jawaban: ['Arvana', 'Smiljan', 'Majren', 'Smirjent'],
            kunciJawaban: 'Smiljan',
            hadiah: 0
        },

        {
            id: 9,
            pertanyaan: 'Femur adalah tulang terpanjang dan terkuat di tubuh manusia. Yang terletak dibagian?',
            jawaban: ['Dada', 'Tengkorak', 'Betis', 'Paha'],
            kunciJawaban: 'Paha',
            hadiah: 0
        },

        {
            id: 10,
            pertanyaan: 'Penemu teori radiasi adalah ?',
            jawaban: ['Marie Curie', 'Heinrich Rudolf Hertz', 'Nikola Tesla', 'William Gilbert'],
            kunciJawaban: 'Marie Curie',
            hadiah: 0
        },

        {
            id: 11,
            pertanyaan: 'Suspensi tepung maizena dan air yang dapat berperilaku seperti padat atau cair tergantung pada seberapa besar tekanan yang Anda berikan ?',
            jawaban: ['Magnet', 'Slime', 'Spangler', 'Oobleck'],
            kunciJawaban: 'Oobleck',
            hadiah: 0
        },

        {
            id: 12,
            pertanyaan: 'Roller coaster tertinggi di dunia adalah ?',
            jawaban: ['Steel Dragon 2000', 'Millennium Force', 'Kingda Ka,', 'Escape from Krypton'],
            kunciJawaban: 'Kingda Ka,',
            hadiah: 0
        },

        {
            id: 13,
            pertanyaan: 'Richard Mille merupakan perusahaan jam tangan mewah Swiss yang berbasis di kota ?',
            jawaban: ['Luxibrug', 'Les Breuleux', ' Zurich', 'Interlaken'],
            kunciJawaban: 'Les Breuleux',
            hadiah: 0
        },

        {
            id: 14,
            pertanyaan: 'Klompen adalah sandal yang terbuat dari kayu mindi. Yang berasal dari negara?',
            jawaban: ['Belanda', 'Jerman', 'Swiss', 'Rusia'],
            kunciJawaban: 'Belanda',
            hadiah: 0
        },

        {
            id: 15,
            pertanyaan: 'Kebudayaan jepang untuk memberi hormat kepada matahari disebut dengan ?',
            jawaban: ['Isekai', 'Amaterasu', 'Sekerai', 'Seikerei'],
            kunciJawaban: 'Seikerei',
            hadiah: 0
        },

        {
            id: 16,
            pertanyaan: 'Dewi Kumari adalah sebuah tradisi yang berasal dari ?',
            jawaban: ['Jepang', 'India', 'Nepal', 'Kamboja'],
            kunciJawaban: 'Nepal',
            hadiah: 0
        },
        {
            id: 17,
            pertanyaan: 'Kota tertua di Indonesia adalah ?',
            jawaban: ['Palembang', 'Jakarta', 'Manado', 'Aceh'],
            kunciJawaban: 'Palembang',
            hadiah: 0
        },

        {
            id: 18,
            pertanyaan: 'Siapakah penemu air raksa ?',
            jawaban: ['Nicholas', 'Fahrenheit', 'Iznerdj', 'Tom Bersaudara'],
            kunciJawaban: 'Fahrenheit',
            hadiah: 0
        },

        {
            id: 19,
            pertanyaan: 'Lithuania adalah negara yang tidak memiliki ?',
            jawaban: ['Laut', 'Ibu kota', 'Gunung', 'Tentara'],
            kunciJawaban: 'Gunung',
            hadiah: 0
        },

        {
            id: 20,
            pertanyaan: 'Presiden wanita pertama di Asia adalah ?',
            jawaban: ['Sri Devi', 'Liztania', 'Natania Eldra', 'Corazon Aquino'],
            kunciJawaban: 'Corazon Aquino',
            hadiah: 0
        },

        {
            id: 21,
            pertanyaan: 'Atithi Devo Bhava adalah budaya penyambutan tamu dari negara ?',
            jawaban: ['India', 'Nepal', 'Thailand', 'Filipina'],
            kunciJawaban: 'India',
            hadiah: 0
        },

        {
            id: 22,
            pertanyaan: 'Laut terdangkal di dunia adalah ?',
            jawaban: ['Laut Merah', 'Laut Azov', 'Laut Banda', 'Laut Aloi'],
            kunciJawaban: 'Laut Azov',
            hadiah: 0
        },

        {
            id: 23,
            pertanyaan: 'Penemu cermin adalah ?',
            jawaban: ['Kaisar Chenghua', 'Jack Stuef', 'Justus von Liebig', 'Anthonio Deman'],
            kunciJawaban: 'Justus von Liebig',
            hadiah: 0
        },

        {
            id: 24,
            pertanyaan: 'Driekusman adalah tarian tradisional dari negara ?',
            jawaban: ['Rusia', 'Jerman', 'Italia', 'Belanda'],
            kunciJawaban: 'Belanda',
            hadiah: 0
        },

        {
            id: 25,
            pertanyaan: 'Foil adalah peralatan yang digunakan pada olahraga ?',
            jawaban: ['Anggar', 'Kasti', 'Capoeira', 'Judo'],
            kunciJawaban: 'Anggar',
            hadiah: 0
        },

        {
            id: 26,
            pertanyaan: 'Apa nama bola yang terbuat dari rotan ?',
            jawaban: ['Bola kriket', 'Bola paraga', 'Bola lacrosse', 'Bola Hoki'],
            kunciJawaban: 'Bola paraga',
            hadiah: 0
        },

        {
            id: 27,
            pertanyaan: 'Hum adalah kota kecil di negara ?',
            jawaban: ['Kanada', 'San Marino', 'Kroasia', 'Tuvalu'],
            kunciJawaban: 'Kroasia',
            hadiah: 0
        },

        {
            id: 28,
            pertanyaan: 'Daerah di mana gravitasi menjadi sangat kuat sehingga bahkan cahaya tidak dapat melarikan diri dari efek gravitasi tersebut disebut ?',
            jawaban: ['Gravitasi Area', 'Ruang Hampa', 'Ruang Waktu', 'Singularitas'],
            kunciJawaban: 'Singularitas',
            hadiah: 0
        },

        {
            id: 29,
            pertanyaan: 'Polimer rantai panjang dari atom yang mengikat satu sama lain disebut ?',
            jawaban: ['Plastik', 'Karbon', 'Kaca', 'Aluminium'],
            kunciJawaban: 'Plastik',
            hadiah: 0
        },

        {
            id: 30,
            pertanyaan: 'Flan adalah salah satu makanan khas dari negara ?',
            jawaban: ['Portugal', 'Spanyol', 'Jerman', 'Argentina'],
            kunciJawaban: 'Spanyol',
            hadiah: 0
        },

        {
            id: 31,
            pertanyaan: 'Sepatu kulit tradisional Korea disebut ?',
            jawaban: ['Eungjie', 'Byuneo', 'Hwahye', 'Junghie'],
            kunciJawaban: 'Hwahye',
            hadiah: 0
        },

        {
            id: 32,
            pertanyaan: 'Penemu neutron adalah ?',
            jawaban: ['Ernestr Rutherford', 'James Sand', 'Ludwig Planck', 'James Chadwick'],
            kunciJawaban: 'James Chadwick',
            hadiah: 0
        }
    ]
    let result = []
    /*let soal = Math.floor(Math.random() * 16) + 1
    console.log(soal)
    for (let i = 0; i < bankSoal.length; i++) {
        if(soal = 1){
            result.push(["bankSoal"][i]);
            console.log(bankSoal[i][0]);
        }else if(soal = 2){
            console.log(bankSoal[i][1]);
        }
    }
    */
    //loop 8 kali
    for (let i = 0; i < 8; i++) {
        //tiap loop angka random 0-16 unik (cek apakah soal duplikat)
        let random = getRandomInt(0, 32);
        let pertanyaan = bankSoal[random];
        while (soalSudahAda(pertanyaan.id, result)) {
            random = getRandomInt(0, 32);
            pertanyaan = bankSoal[random];
        }
        pertanyaan.hadiah = hadiah[i];
        result.push(pertanyaan);
    }

    //kalo soal yang sama ada bikin angka random 
    return result
}


//function buat cek apakah ada soal yang sama 
function soalSudahAda(id, arr) {
    let ada = false;
    let hasil = arr.find((element) => element.id === id);
    if (hasil !== undefined) {
        return true;
    } else {
        return false;
    }
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
let soal = randomSoal();
function updateGame(soalArr) {

    let prize = document.querySelector(`#i${currentPrizeIndex}`);
    prize.classList.add('current');
    if (currentPrizeIndex > 0) {
        let prevPrize = document.querySelector(`#i${currentPrizeIndex - 1}`)
        prevPrize.classList.remove("current");
    }
    let pertanyaan = document.querySelector('#pertanyaan');

    pertanyaan.innerText = soalArr[currentSoal].pertanyaan;
    //bersihin eventListener
    let scoreEl = document.querySelector('.score');
    let prizeMoney = numberWithCommas(hadiah[currentPrizeIndex]);
    scoreEl.innerText = `Hadiah: Rp ${prizeMoney}`;
    //seed jawaban
    // loop 0 - 4;
    for (let i = 0; i < 4; i++) {
        let pertanyaanBox = document.querySelector(`#jawaban${i}`);
        pertanyaanBox.innerText = soalArr[currentSoal].jawaban[i];
    }
    //select prize


}

function correctAnswer(soal) {
    player.hadiah = hadiah[currentPrizeIndex];
    currentPrizeIndex++;
    currentSoal++;
    player.rights++;
    console.log(currentPrizeIndex, "INDEX")
    // menang jackpot
    if (currentPrizeIndex > 7) {
        console.log(player.hadiah);
        player.rights = 8;
        currentPrizeIndex - 1;
        let music = document.querySelector('#victoryMusic');
        music.play();
        gameOver();
        return;
    }
    updateGame(soal);
    let music = document.querySelector('#correctMusic')
    music.play();
}

function wrongAnswer() {
    let music = document.querySelector("#wrongMusic");
    music.play();
    for (let i = 0; i < 8; i++) {
        let prize = document.querySelector(`#i${currentPrizeIndex}`);
        prize.classList.remove("current");
    }
    let jawaban = soal[currentSoal].kunciJawaban;
    alert(`SALAH!! Jawabannya adalah: ${jawaban}`)
    gameOver();
}

function gameOver() {
    for (let i = 0; i < 8; i++) {
        let prize = document.querySelector(`#i${i}`);
        prize.classList.remove("current");
    }

    let prizeText = document.querySelector('.prize-text');
    gamePage.style.display = "none";
    gameOverPage.style.display = "flex";
    let prizeMoney = numberWithCommas(player.hadiah);
    prizeText.innerText = `Your Prize Rp.${prizeMoney}`;

    let persen = player.rights / 8;
    let derajat = 360 * persen;
    persen = Math.floor(persen * 100);


    let progress = document.querySelector(".progres");
    let progresText = document.querySelector('.progres-value');
    progresText.innerText = `${persen}%`
    progress.style.background = `conic-gradient(white ${derajat}deg, rgba(255,255,255, .1) 0deg)`;
    //let progresText = document.querySelector();
}


let tryButton = document.querySelector('.TryAgain');
tryButton.addEventListener('click', function (event) {
    gameOverPage.style.display = 'none';
    welcomePage.style.display = 'block';
    currentPrizeIndex = 0;
    currentSoal = 0;
    soal = randomSoal();
    player.hadiah = 0;
    player.rights = 0;

    updateGame(soal);
})
//game start
// render first question
// render(questionObj) 
// remove listener to choice buttons
// add listener to choice buttons
// gameover()
// correct()
// wrong()
// render info on creect answer







startButton.addEventListener("click", function (event) {
    welcomePage.style.display = "none";
    gamePage.style.display = "block";
})


//set up click on jawaban
for (let i = 0; i < 4; i++) {
    let pertanyaanBox = document.querySelector(`#jawaban${i}`).parentElement;
    pertanyaanBox.addEventListener('click', function (event) {
        //cek jawaban benar -> lanjut;
        let jawaban = event.target.innerText;
        let { kunciJawaban } = soal[currentSoal];
        if (jawaban === kunciJawaban) {

            correctAnswer(soal);
        } else {
            wrongAnswer(soal);
        }
    })
}


updateGame(soal);




