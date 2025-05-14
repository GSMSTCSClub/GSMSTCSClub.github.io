profiles = [
    ["Elizabeth Tsiporkin", "ElizabethT.png", "Co-President"],
    ["Jacqueline Lu", "Jackie.jpg", "Co-President"],
    ["Minju Suh", "placeholder.jpg", "Co-Vice President"],
    ["Luke Cheng", "placeholder.jpg", "Co-Vice President"],
    ["Evan Chen", "placeholder.jpg", "Competition Head"],
    ["James Overcash", "placeholder.jpg", "Algo Head"],
    ["Ethan David Escario", "placeholder.jpg", "Algo Officer"],
    ["Alexander Lu", "placeholder.jpg", "Algo Officer"],
    ["Evan Yang", "placeholder.jpg", "Algo Officer"],
    ["Ann Padamadan", "placeholder.jpg", "CyberDragons Head"],
    ["Tara Wang", "placeholder.jpg", "CyberDrangons Officer"],
    ["Jason Lu", "placeholder.jpg", "CyberDragons Officer"],
    ["Stephen Akrong", "Stephen.jpg", "CS 101 Head"],
    ["Geonhee Shin", "placeholder.jpg", "CS 101 Officer"],
    ["AnAn Liu", "placeholder.jpg", "CS 101 Officer"],
    ["Ishaan Sanjesh", "placeholder.jpg", "CS 101 Officer"],
    ["Edwards Nguyen", "placeholder.jpg", "CS 101 Officer"],
    ["Emanuel Million", "placeholder.jpg", "CS 101 Officer"],
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
