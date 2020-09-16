box = vie.new("div", "#box")
title = vie.new("h1", "#title", "Titel")
text = vie.new("p", "#text", "jabum baba bumabo")
text2 = vie.new("p", "#text2", "jabum baba bumabo2")
container = vie.new("div", "#container")

image = vie.new("img", "#cardIMG")
image.src = "./data/bus.jpeg"

struc = vie.build(box, [
    title, container, [
        text,
        image,
        text2
    ]
])

console.log(struc)

vie.insert("<body", struc)

vie.gen({
    card: ["div", ".card", {
        cardTitle: ["h1", "gute card"],
        cardText: ["p", "www.instagram.com kann diese Anfrage momentan nicht verarbeiten."]
    }],
})