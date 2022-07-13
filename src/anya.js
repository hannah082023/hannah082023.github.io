const pic = {
    uniform: "https://stickershop.line-scdn.net/stickershop/v1/sticker/382380375/android/sticker.png",
    icecream: "https://spy-family.net/assets/img/common/header_bottomimg_3_family.png",
    uniform_large: "https://spy-family.net/assets/img/top/chara_anya_1.png",
    casual_large: "https://spy-family.net/assets/img/top/chara_anya_2.png",
    avatars: [],
};

for (let i = 1; i <= 40; i++) {
    pic.avatars[i] = `https://spy-family.net/assets/img/special/anya/${i
        .toString()
        .padStart(2, "0")}.png`;
}
pic.avatars.push(
    "https://spy-family.net/assets/img/special/episode4/02.png",
    "https://spy-family.net/assets/img/special/episode4/05.png",
    "https://spy-family.net/assets/img/special/episode5/01.png",
    "https://spy-family.net/assets/img/special/episode5/02.png",
    "https://spy-family.net/assets/img/special/episode6/03.png",
    "https://spy-family.net/assets/img/special/episode6/05.png",
    "https://spy-family.net/assets/img/special/episode7/01.png",
    "https://spy-family.net/assets/img/special/episode7/03.png",
    "https://spy-family.net/assets/img/special/episode7/04.png",
    "https://spy-family.net/assets/img/special/episode8/01.png",
    "https://spy-family.net/assets/img/special/episode9/04.png",
    "https://spy-family.net/assets/img/special/episode10/02.png",
    "https://spy-family.net/assets/img/special/episode10/03.png",
    "https://spy-family.net/assets/img/special/episode10/04.png",
    "https://spy-family.net/assets/img/special/episode11/01.png",
    "https://spy-family.net/assets/img/special/episode11/02.png",
    "https://spy-family.net/assets/img/special/episode11/03.png",
    "https://spy-family.net/assets/img/special/episode11/04.png",
    "https://spy-family.net/assets/img/special/episode11/06.png",
    "https://spy-family.net/assets/img/special/episode12/03.png",
    "https://spy-family.net/assets/img/special/episode12/06.png",
);

const titles = ["ZhongShan Girls High School Student", "124th", "Class Lien", "Taipei"];

const about = [
    "My name is Hannah Su.",
    "I am studing ZhongShan Girls High School mathematics and science gifted class.",
    "I'm now doing a computer science research about image recognization.",
    "I have many interests, such as coding, playing piano, making up, shopping.",
    "And I love Kanahei's Small Animals!",
    "",
    "In 2022 summer I went to NTNU CSIE Camp to learn how to code.",
    "I was taught how to build this website and found this interesting!",
    "I'm grateful for everyone's effort, I had great memories there:D",
    "During the camp, I learned how to: ",
    "  - Build SPA Website with frontend framework Vue and Tailwind.",
    "  - Develop efficiently with Node.js ecosystem.",
    "  - Design and develop a gomoku gaming agent with Python.",
    "  - Operate Linux system with common commands.",
    "  - Use Git and GitHub to work on projects.",
    "",
    'By the way, please follow my Instagram(⁎⁍̴̛ᴗ⁍̴̛⁎) @hannah082023',
    'If you have any questions or suggestions, please contact me: hannah082023@gmail.com',
].join("\n");

const projects = [
    {
        name: "我的個人網站 My Portfolio Website",
        description: "A portfolio website for myself that I developed in NTNU CSIE Camp. You're now here!",
        image: "https://img.onl/M0mnkL",
        skills: ["Vue", "Tailwind", "Node.js", "GitHub"],
        url: "https://github.com/anya-forger/anya-forger.github.io",
    },
    {
        name: "我的專題摘發",
        description: "Coming soon...",
        image: "https://img.onl/uVNfga",
        skills: ["AI", "Computer Science", "Image Recognization","CNN"],
        url: "https://www.instagram.com/hannah082023/",
    },
    {
        name: "2022 GiCS初賽影片",
        description: "2022 資安女婕思--創意發想賽 成功進入決賽！",
        image: "https://i9.ytimg.com/vi/RgyQCT0VU2Y/maxresdefault.jpg?time=1657694700000&sqp=COzTuZYG&rs=AOn4CLC1fu70oJXJVvc_nUJshXR6uO1bBQ",
        skills: ["CyberSecurity","QR Code"],
        url: "https://youtu.be/RgyQCT0VU2Y",
    },
];

export { pic, titles, about, projects };
