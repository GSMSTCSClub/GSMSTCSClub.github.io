profiles = [
    ["Yubo Cao", "/images/Profiles/placeholder.jpg", "Co-president"],
    ["Katie Chen", "/images/Profiles/placeholder.jpg", "Co-president"],
    ["Brian Zhou", "/images/Profiles/placeholder.jpg", "Co-vice president"],
    ["Minh Ngyuen", "/images/Profiles/placeholder.jpg", "Co-vice President"],
    ["Vishva Patel", "/images/Profiles/placeholder.jpg", "Chief of Fundraising"],
    ["Elizabeth Tsiporkin", "/images/Profiles/placeholder.jpg", "Chief of Fundraising"],
    ["Kevin Jwang Lee", "/images/Profiles/placeholder.jpg", "Competition Head"],
    ["James Overcash", "/images/Profiles/placeholder.jpg", "Algo Head"],
    ["Luke Cheng", "/images/Profiles/placeholder.jpg", "Algo Officer"],
    ["Edmund Fung", "/images/Profiles/placeholder.jpg", "Algo Officer"],
    ["Max Tung", "/images/Profiles/placeholder.jpg", "Algo Officer"],
    ["Jase George", "/images/Profiles/placeholder.jpg", "CyberDragons Head"],
    ["BanAnh Doan", "/images/Profiles/placeholder.jpg", "CyberDrangons Officer"],
    ["Jackie Lu", "/images/Profiles/placeholder.jpg", "CyberDragons Officer"],
    ["Achilleas Galanis", "/images/Profiles/placeholder.jpg", "CyberDragons Officer"],
    ["Nekita Ghimire", "/images/Profiles/placeholder.jpg", "CS 101 Head"],
    ["Ann Padamadan", "/images/Profiles/placeholder.jpg", "CS 101 Officer"],
    ["Zoe _MISSING_", "/images/Profiles/placeholder.jpg", "CS 101 Officer"],
    ["Minju Suh", "/images/Profiles/placeholder.jpg", "CS 101 Officer"],
    ["Ishaan Patel", "/images/Profiles/placeholder.jpg", "CS 101 Officer"],
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
    img.setAttribute("src", element[src_i]);

    const pos = document.createElement("p");
    pos.textContent = element[position_i];

    prof.append(img);
    prof.append(name);
    prof.append(pos);

    document.getElementById("our-team").appendChild(prof);
});
