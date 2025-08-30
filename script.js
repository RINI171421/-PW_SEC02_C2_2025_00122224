function toggleLayout() {
    const cities = document.getElementById("cities");
    cities.style.flexDirection = 
        cities.style.flexDirection === "column" ? "row" : "column";
}

function changeTitle() {
    document.getElementById("header-title").textContent = "HTML & CSS: Curso práctico avanzado";
}

function changeColors() {
    const titles = document.querySelectorAll(".city h2");
    const texts = document.querySelectorAll(".city p");

    titles.forEach(t => t.style.color = "#00FF00");
    texts.forEach(p => p.style.color = "navy");
}

function addImage() {
    const footer = document.getElementById("footer");

    if (!document.getElementById("footer-img")) {
        let img = document.createElement("img");
        img.id = "footer-img";
        img.src = "https://s1.1zoom.me/big0/996/France_Bridges_Paris_497438.jpg";
        img.alt = "Imagen Footer";
        img.style.display = "block";
        img.style.margin = "10px auto";
        img.style.borderRadius = "8px";
        footer.appendChild(img);
    }
}
