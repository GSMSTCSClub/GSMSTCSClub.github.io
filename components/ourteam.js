profiles = [
    ["Elizabeth Tsiporkin", "ElizabethT.png", "Co-President"],
    ["Jacqueline Lu", "Jackie.jpg", "Co-President"],
    ["Minju Suh", "placeholder.jpg", "Co-Vice President"],
    ["Luke Cheng", "placeholder.jpg", "Co-Vice President"],
    ["Evan Chen", "placeholder.jpg", "Competition Head"],
    ["James Overcash", "placeholder.jpg", "Algo Head"],
    ["Ethan David Escario", "Ethan.jpg", "Algo Officer"],
    ["Alexander Lu", "Alexander.jpg", "Algo Officer"],
    ["Evan Yang", "EvanY.jpg", "Algo Officer"],
    ["Ann Padamadan", "Ann.jpg", "CyberDragons Head"],
    ["Tara Wang", "Tara.png", "CyberDragons Officer"],
    ["Jason Lu", "Jason.jpg", "CyberDragons Officer"],
    ["Stephen Akrong", "Stephen.jpg", "CS 101 Head"],
    ["Geonhee Shin", "Geonhee.jpg", "CS 101 Officer"],
    ["AnAn Liu", "AnAn.jpg", "CS 101 Officer"],
    ["Ishaan Sanjesh", "Ishaan.jpg", "CS 101 Officer"],
    ["Edwards Nguyen", "Edwards.jpg", "CS 101 Officer"],
    ["Emanuel Million", "Emanuel.jpg", "CS 101 Officer"],
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
