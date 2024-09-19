profiles = [
    ["Yubo Cao", "Yubo.jpg", "Co-president"],
    ["Katie Chen", "placeholder.jpg", "Co-president"],
    ["Minh Nguyen", "Minh.jpg", "Co-vice President"],
    ["Brian Zhou", "placeholder.jpg", "Co-vice president"],
    ["Vishva Patel", "Vishva.jpg", "Chief of Fundraising"],
    ["Elizabeth Tsiporkin", "Elizabeth.jpg", "Chief of Fundraising"],
    ["Kevin Juwang Lee", "placeholder.jpg", "Competition Head"],
    ["James Overcash", "placeholder.jpg", "Algo Head"],
    ["Luke Cheng", "placeholder.jpg", "Algo Officer"],
    ["Edmund Fung", "Edmund.jpg", "Algo Officer"],
    ["Max Lee", "placeholder.jpg", "Algo Officer"],
    ["Jase George", "placeholder.jpg", "CyberDragons Head"],
    ["BanAnh Doan", "placeholder.jpg", "CyberDrangons Officer"],
    ["Jackie Lu", "Jackie.jpg", "CyberDragons Officer"],
    ["Achilleas Galanis", "Achilleas.jpg", "CyberDragons Officer"],
    ["Nekita Ghimire", "placeholder.jpg", "CS 101 Head"],
    ["Zoe Lee", "placeholder.jpg", "CS 101 Officer"],
    ["Ann Padamadan", "placeholder.jpg", "CS 101 Officer"],
    ["Ishaan Patel", "placeholder.jpg", "CS 101 Officer"],
    ["Minju Suh", "placeholder.jpg", "CS 101 Officer"],
]

const name_i = 0;
const src_i = 1;
const position_i = 2;

profiles.forEach(element => {
    const prof = document.createElement("div");
    prof.setAttribute("class", "profile")

    const name = document.createElement("h3");
    name.textContent = element[name_i];

    const img = document.createElement("img");
    img.setAttribute("src", "/images/Profiles/" + element[src_i]);

    const pos = document.createElement("p");
    pos.textContent = element[position_i];

    prof.append(img);
    prof.append(name);
    prof.append(pos);

    document.getElementById("our-team").appendChild(prof);
});
