let object = {
    nama: '',
    hadiah: 0
}

function randomSoal(bankSoal) {
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
        jawaban: ['laos', 'Thailand', 'Kamboja', 'Filipina'],
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
    let soal = Math.floor(Math.random() * 16) + 1
    // console.log(soal)
    for (let i = 0; i < bankSoal.length; i++) {
        if(soal = 1){
            console.log(bankSoal[i][0]);
        }else if(soal = 2){
            console.log(bankSoal[i][1]);
        }
    }
    result.push(["bankSoal"][i])
return result
}