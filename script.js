// alert("hello")

// arrow function

// function abcd(){

// }
// ()=>{

// }

// Array.map(()=>{

// })


// foreach(()=>{

// })

// var a=[1,2,3,4]

//console.log(a[0]+3)

// a.forEach((a)=>{
//  console.log(e+5)
// })

// Filter(()=>{

// })
//string
// "abjhh"
// 'asasd'
// //   template screenlitry
// `asdfgh`
// `${name}`

//object
// {
//     key : value
// }

// back tick
// var person = {
//     name : 'asdf',
//     age  : 6
// }
// console.log(`your name is : ${person.name}`);
// console.log(`your age is : ${person.age}`);

//evnts
// onclick
// onmousedown
// onmouseenter
// onmouseleave
//onload
//onscroll
//onkeypress

//events listerns

// addEventListener("scroll")
// addEventListener("click")

// document.querySelector('#clickme').addEventListener("click",()=>{
//     console.log("click")
// })

//DOM

// tree ke form

// document.querySelector("#show").addEventListener("click",()=>{
//     document.querySelector(".box").style.display="block";
// })

// document.querySelector("#hide").addEventListener("click",()=>{
//     document.querySelector(".box").style.display="none";
// })




//discover category
var discoverSongs=[
    {
        title:'aankh lad jaye',
        path:'Songs/_Mere-Naam-Tu-Full-Video-Song-ZERO-Shah-Rukh-Khan-Anushka-Sha.mp3', images: 'Images/tum hi ho aasiqi 2.jpeg'
    },
    {
        title:'aankho ko teri aadat',
        path:'Songs/_Tum Hi Ho_ Aashiqui 2 Full Song With Lyrics _ Aditya Roy Kapur_ Shraddha Kapoor(MP3_128K).mp3', images: 'Images/aankho ko teri aadat hai.jpeg'
    },
    {
        title:'aankho ke aansu leke',
        path:'Songs/01 Tera Fitoor (Genius).mp3', images: 'Images/aanko me aansu leke.jpeg'
    },
    {
        title:'agar tum sath',
        path:'Songs/03 Hua Hain Aaj Pehli Baar - Sanam Re (Armaan Malik) 320Kbps.mp3', images: 'Images/Agar tum sath ho.jpeg'
    },
    {
        title:'Apna mujhe bna le',
        path:'Songs/03 Hua Hain Aaj Pehli Baar - Sanam Re (Armaan Malik) 320Kbps.mp3', images: 'Images/Apna mujhe tu laga.jpeg'
    },
    {
        title:'Awara hawa',
        path:'Songs/05 Dhal Jaun Main - Rustom (Jubin Nautiyal) 190Kbps.mp3', images: 'Images/Awara hawa ka jhoka hu.jpeg'
    },
    {
        title:'baithe baithe',
        path:'Songs/06 Dil Meri Na Sune (Reprise) Genius.mp3', images: 'Images/baithe baithe.jpeg'
    },
    {
        title:'Banjaraa',
        path:'Songs/A.R. Rahman - Enna Sona Best Video_OK Jaanu_Arijit Singh_Shraddha Kapoor_Aditya Roy(MP3_128K).mp3', images: 'Images/Banjaraa.jpeg'
    },
];


var discoverContainer = document.querySelector('#discover-song')
var audioPlayer = document.querySelector('#audio')

function songCardCreate(){
    discoverSongs.forEach((e)=>{
        var  card = `
        <div class="card">
                    <div class="card-img">
                        <img src="${e.images}">
                    </div>
                    <i class="fa-solid fa-play "></i>
                    <h4>${e.title}</h4>
            </div> 
        `

        var tempDiv = document.createElement('div');

        tempDiv.innerHTML = card

        discoverContainer.append(tempDiv)

        tempDiv.addEventListener('click',()=>{
            playSong(e.path)
        })
    })
}

songCardCreate()

function playSong(songPath){
    audioPlayer.src = songPath
    audioPlayer.play()
}

var IndiaBestsong = [
    {
        title:'Barshat ki dhun',
        path:'Songs/Barsaat Ki Dhun Song _ Rochak K Ft. Jubin N _ .mp3', images: 'Images/barshat ki dhun.jpeg'
    },
    {
        title:'Bol do n jara',
        path:'Songs/BOL DO NA ZARA Lyrical Video Song _ AZHAR _ Emraan Hashmi_ Nargis Fakhri _ Armaan Malik_Amaal Mallik(MP3_128K).mp3', images: 'Images/Bol do n jara.jpeg'
    },
    {
        title:'Dhal jau main',
        path:'Songs/Aakhon Ko Teri Aadat Hai Lyrics(MP3_128K).mp3', images: 'Images/dhal jau main.jpeg'
    },
    {
        title:'Huaa aaj pahle baar',
        path:'Songs/Aawara Hawa Ka Jhonka Hoon I Cover Song by Sneh Upadhya (Helo Kon).mp3', images: 'Images/Huaa hai aaj pahli baar.jpeg'
    },
    {
        title:'tera fitoor',
        path:'Songs/Apnaa Mujhe Tu Lagaa Lyrical 1920 Evil Returns Aftab Shivdasani, Sonu Nigam.mp3', images: 'Images/tera fetoor.jpeg'
    },
    {
        title:'mera naam tu',
        path:'Songs/_Mere-Naam-Tu-Full-Video-Song-ZERO-Shah-Rukh-Khan-Anushka-Sha.mp3', images: 'Images/mera naam tu.jpeg'
    },
    {
        title:'Muskarane ki wajah',
        path:'Songs/Arijit Singh - Muskurane (Full Song Official) - Citylights (2014) - Rajkumar Rao - YouTube(MP3_128K).mp3', images: 'Images/Muskurane ki wajah tum ho.jpeg'
    },
    {
        title:'Enna sona',
        path:'Songs/Akh_Lad_Jaave_With_Lyrics__Loveyatri__Aayush_S__Warina_H_Badshah,Tanishk_Bagchi,Jubin_N,Asees_K.mp3', images: 'Images/Enna sona.jpeg'
    },
]

var IndiaContainer = document.querySelector('#India-song')
var audioPlayer = document.querySelector('#audio')

function IndiasongCreate(){
    IndiaBestsong.forEach((e)=>{
        var  card = `
        <div class="card">
                    <div class="card-img">
                        <img src="${e.images}">
                    </div>
                    <i class="fa-solid fa-play "></i>
                    <h4>${e.title}</h4>
            </div> 
        `

        var tempSpan = document.createElement('div');

        tempSpan.innerHTML = card

        IndiaContainer.append(tempSpan)

        tempSpan.addEventListener('click',()=>{
            playSong(e.path)
        })
    })
}

IndiasongCreate()


var popularsong = [
    {
        title:'tum hi ho aasiq',
        path:'Songs/_Tum Hi Ho_ Aashiqui 2 Full Song With Lyrics _ Aditya Roy Kapur_ Shraddha Kapoor(MP3_128K).mp3', images: 'Images/tum hi ho aasiqi 2.jpeg'
    },
    {
        title:'Mujhe tum achhi lagti hu',
        path:'Songs/ADDY NAGAR - Achchi Lagti Ho ( Full Song ) Vijay JammersNew Hindi Songs.mp3', images: 'Images/mujhe tum achhi lagti ho.jpeg'
    },
    {
        title:'Huaa aaj pahle baar',
        path:'Songs/Aawara Hawa Ka Jhonka Hoon I Cover Song by Sneh Upadhya (Helo Kon).mp3', images: 'Images/Huaa hai aaj pahli baar.jpeg'
    },
    {
        title:'Awara shaam hai',
        path:'Songs/Aawara Shaam Hai ¦ Meet Bros Ft. Piyush Mehroliyaa ¦ Manjul, Rits Badiani, Shabbir ¦ Hit Song.mp3', images: 'Images/Awara shaam hai.jpeg'
    },
]

var popularsongContainer = document.querySelector('#popular-song')
var audioPlayer = document.querySelector('#audio')

function popularsongCreate(){
    popularsong.forEach((e)=>{
        var  card = `
        <div class="card">
                    <div class="card-img">
                        <img src="${e.images}">
                    </div>
                    <i class="fa-solid fa-play "></i>
                    <h4>${e.title}</h4>
            </div> 
        `

        var tempfont = document.createElement('div');

        tempfont.innerHTML = card

        popularsongContainer.append(tempfont)

        tempfont.addEventListener('click',()=>{
            playSong(e.path)
        })
    })
}

popularsongCreate()
