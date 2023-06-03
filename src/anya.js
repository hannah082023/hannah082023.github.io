const pic = {
    uniform: "https://stickershop.line-scdn.net/stickershop/v1/sticker/382380375/android/sticker.png",
    icecream: "https://stickershop.line-scdn.net/stickershop/v1/product/24283/LINEStorePC/main.png;compress=true",
    uniform_large: "https://spy-family.net/assets/img/top/chara_anya_1.png",
    casual_large: "https://stickershop.line-scdn.net/stickershop/v1/product/8949/LINEStorePC/main.png",
    avatars: [],
};


pic.avatars.push(
    "image/IMG_3090.JPG",
    "image/IMG_3775.jpg",
    "image/IMG_3873.JPG",
    "image/IMG_4486.JPG",
    "image/IMG_4763.jpg",
    "image/IMG_5130.JPG",
    "image/IMG_5077.JPG",
    "image/IMG_5109.JPG",
    "image/IMG_5114.JPG",
    "image/IMG_5127.JPG",
    "image/IMG_4858.JPG",
    "image/IMG_4155.JPG",
);

const titles = ["ZhongShan Girls High School Student", "124th", "Class Lien", "Taipei"];

const about = [
    "My name is Hannah Su.",
    "I am studying in ZhongShan Girls High School mathematics and science gifted class.",
    "My research group is information technology,",
    "and I finished my research presentation at May 26, 2023.",
    "My interests: Make Up, Manicure, Badminton, Pop Piano.",
    "I'm an Applefan,",
    "and I love Kanahei's Small Animals!",
    "",
    "This website was built in 2022 NTNU CSIE CAMP.",
    "I forked Anya's Website built by JacobLinCool and edited it into my portfolio website.",
    "I'm grateful for everyone's effort, I learned a lot and had great memories there :D",
    "",
    'If you have any questions of suggestions, you can find me at:',
    'Instagram: hannah082023',
    'Email: hannah082023@gmail.com',
].join("\n");

const projects = [
    {
        name: "Aerialien 成發網站",
        description: "I made a website for our research presentation《Aerialien》. The audience could find related imformation and links here.",
        image: "image/aerialienweb.png",
        skills: ["HTML", "CSS", "GitHub", "Figma"],
        url: "https://aerialien23.github.io/",
    },
    {
        name: "我的高中專題成發 My High School Research Presentation",
        description: "These are the slides of my research presentation. The presentation took place at May 26, 2023.",
        image: "image/slides.png",
        skills: ["AI", "YOLOv5", "Image Recognization","CNN"],
        url: "https://reurl.cc/o7xXWD",
    },
    {
        name: "2022 GiCS初賽影片",
        description: "2022 資安女婕思--創意發想賽 成功進入決賽！",
        image: "image/1.jpeg",
        skills: ["CyberSecurity","QR Code"],
        url: "https://youtu.be/RgyQCT0VU2Y",
    },
];

export { pic, titles, about, projects };