const pic = {
    uniform: "https://stickershop.line-scdn.net/stickershop/v1/sticker/382380375/android/sticker.png",
    icecream: "image/fimmies.PNG",
    uniform_large: "https://spy-family.net/assets/img/top/chara_anya_1.png",
    casual_large: "image/Me.png",
    avatars: [],
};


pic.avatars.push(
    "image/IMG_0017.jpg",
    "image/IMG_6561.jpg",
    "image/IMG_1890.jpg",
    "image/IMG_7673.jpg",
    "image/IMG_6555.JPG",
    "image/IMG_8636.jpg",
    "image/IMG_0236.jpg",
    "image/IMG_0237.jpg",
    "image/DSC_6398.JPEG",
    "image/IMG_5497 2.jpg",
    "image/IMG_5298.jpg",
    "image/IMG_5442.jpg",
    "image/IMG_8071.jpg",
    "image/IMG_6170.jpg",
    "image/IMG_8367.jpg",
    "image/IMG_4186.jpg",
    "image/IMG_8650.jpg",
    "image/IMG_6220.JPG",
    "image/IMG_9082.jpg",
    "image/IMG_1482.jpg",
    "image/IMG_2187.png",
    "image/IMG_7496.jpg",
    "image/IMG_8635.jpg",
    "image/IMG_2564.jpg",
    "image/IMG_4845.JPG",
);

const titles = ["National Cheng Kung University (NCKU) Student", "Computer Science and Information Engineering 117", "ZSGHed", "From Taipei, Taiwan"];

const about = [
    "Hi there, my name is Hannah Su.",
    "NCKU CSIE Student | Tech Enthusiast | Maker",
    "Born in Taipei, currently exploring Tainan.",
    "Currently digging into machine learning and computer vision research.",
    "",
    "I also enjoy international experiences and traveling.",
    "The following are my study abroad experiences.",
    "Vancouver BC | Canada | ILAC | 2025 Summer",
    "Santa Barbara CA | USA | EF | 2024 Summer",
    "",
    "When I'm offline, I'm usually doing manicures or handicrafts.",
    "Or searching for the best café desserts in Tainan 🍰.",
    "Powered by K-pop and LE SSERAFIM 🎵.",
    "Want to see more? Find my projects on GitHub or my life on Instagram!"
].join("\n");

const projects = [
    {
        name: "Traffic Light & Crosswalk Detection",
        description: "A YOLOv5-based object detection system for identifying traffic lights and crosswalks to assist visually impaired individuals.",
        image: "image/Traffic_Lights.png",
        skills: ["Machine Learning", "YOLOv5", "PyTorch", "Python"],
        url: "https://github.com/hannah082023/Vision-Assist-YOLOv5",
    },
    {
        name: "Aerialien Website",
        description: "I made a website for our research presentation《Aerialien》. The audience could find related imformation and links here.",
        image: "image/aerialienweb.png",
        skills: ["HTML", "CSS", "GitHub", "Figma"],
        url: "https://aerialien23.github.io/",
    },
    {
        name: "ESP32-Bluetooth-Car",
        description: "A remote-controlled ESP32 car that can be controlled through the Dabble App.",
        image: "image/ESP32_Car.JPG",
        skills: ["C++","ESP32"],
        url: "https://github.com/hannah082023/ESP32-Bluetooth-Car",
    },
];

export { pic, titles, about, projects };
