const pic = {
    uniform: "https://stickershop.line-scdn.net/stickershop/v1/sticker/382380375/android/sticker.png",
    icecream: "image/fimmies.PNG",
    uniform_large: "https://spy-family.net/assets/img/top/chara_anya_1.png",
    casual_large: "image/IMG_0535.PNG",
    avatars: [],
};


pic.avatars.push(
    "image/IMG_0017.jpg",
    "image/IMG_0061.jpg",
    "image/IMG_1890.jpg",
    "image/IMG_7673.jpg",
    "image/IMG_0874.jpg",
    "image/IMG_8636.jpg",
    "image/IMG_0236.jpg",
    "image/IMG_0237.jpg",
    "image/IMG_2577.jpg",
    "image/IMG_5497 2.jpg",
    "image/IMG_5298.jpg",
    "image/IMG_5442.jpg",
    "image/IMG_8629.jpg",
    "image/IMG_6170.jpg",
    "image/IMG_8367.jpg",
    "image/IMG_6584.jpg",
    "image/IMG_8650.jpg",
    "image/gics.jpg",
    "image/IMG_9082.jpg",
    "image/IMG_1482.jpg",
    "image/IMG_2187.png",
    "image/IMG_9751.jpg",
    "image/IMG_8635.jpg",
    "image/IMG_7150.jpg",
    "image/IMG_0017.jpg",
);

const titles = ["National Cheng Kung University (NCKU) Student", "Engineering Science 117", "ZSGHed", "From Taipei, Taiwan"];

const about = [
    "My name is Hannah Su.",
    "I am a college student majoring Engineering Science in NCKU,",
    "and a member of ES Makerspace and GO Club.",
    "I'm born in Taipei, and I graduated from Taipei Municipal ZhongShan Girls High School.",
    "I have various interests, including doing makeup, manicure, handicrafts, and playing badminton.",
    "I also found my interest in programming recently, and I'm planning to learn more about it.",
    "I'm currently studying in NCKU, located in Tainan, Taiwan.",
    "I like desserts, and I often visit cafés in Tainan recently.",
    "For music, I like listening to K-pop, and my favorite group is LE SSERAFIM.",
    "I also like other pop music!",
    "",
    "This website was built in 2022 NTNU CSIE CAMP.",
    "I like this project and I keep updating it :).",
    "",
    'If you want to know more about me, you can follow my Instagram,',
    'You can see my daily life and my favorite things there!',
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
        skills: ["Machine Learning", "YOLOv5", "PyTorch","CNN"],
        url: "https://reurl.cc/o7xXWD",
    },
    {
        name: "Discord Bot -- 活躍羅伯特",
        description: "簡易的機器人，會打招呼，會偵測收回與修改訊息，還有slash command!",
        image: "image/bot_info.png",
        skills: ["Discord Bot","Slash Command"],
        url: "https://github.com/hannah082023/Discord-Bot",
    },
];

export { pic, titles, about, projects };
