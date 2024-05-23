let object = {
    nama: '',
    hadiah: 0
}

let hadiah = [7000_000, 15_500_000, 31_250_000, 62_500_000, 125_000_000, 250_000_000, 500_000_000, 1_000_000_000]
let currentPrizeIndex = 0;
let currentSoal = 0;

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
        }
    ]
    let result =[]
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
     let random = getRandomInt(0, 16);
     let pertanyaan = bankSoal[random];
     while(soalSudahAda(pertanyaan.id, result)) {
        random = getRandomInt(0, 15);
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
    console.log(`soal`, soalArr);
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
    currentPrizeIndex++;
    currentSoal++;
    updateGame(soal);
    let music =  document.querySelector('#correctMusic')
    music.play();
}

//game start
// render first question
// render(questionObj) 
// remove listener to choice buttons
// add listener to choice buttons
// gameover()
// correct()
// wrong()
// render info on creect answer


let startButton = document.querySelector('.start-btn')
let welcomePage = document.querySelector('.welcome');
let gamePage = document.getElementById('game');




startButton.addEventListener("click", function(event) {
    welcomePage.style.display = "none";
    gamePage.style.display = "block";
})


//set up click on jawaban
for (let i = 0; i < 4; i++) {
  let pertanyaanBox = document.querySelector(`#jawaban${i}`).parentElement;
  pertanyaanBox.addEventListener('click', function(event) {
    //cek jawaban benar -> lanjut;
    let jawaban = event.target.innerText;
    let {kunciJawaban} = soal[currentSoal];
    if (jawaban === kunciJawaban) {
        console.log("BENAR");
        correctAnswer(soal);
    }
  })
}


updateGame(soal);




