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
    "I am studying ZhongShan Girls High School mathematics and science gifted class.",
    "I'm now doing a computer science research about image recognization.",
    "I'm also a beginner of C++ programming language.",
    "I have many interests, such as coding, playing pop piano, making up and shopping.",
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
        name: "我的個人網站 My Portfolio Website",
        description: "A portfolio website for myself that I developed in NTNU CSIE Camp. You're now here!",
        image: "image/2.png",
        skills: ["Vue", "Tailwind", "Node.js", "GitHub"],
        url: "https://hannah082023.github.io/",
    },
    {
        name: "我的專題摘發 My Abstract Presentation",
        description: "These are the slides of my abstract presentation. The presentation took place at September 30th.",
        image: "image/3.png",
        skills: ["AI", "Computer Science", "Image Recognization","CNN"],
        url: "https://reurl.cc/QblgkM",
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
