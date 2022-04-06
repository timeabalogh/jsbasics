function getPrintableHeader(text) {
    console.log(text.trim().toUpperCase())
}

getPrintableHeader(prompt("Kérlek adj meg egy szöveget, aminek az elején és végén whitespace van!"))