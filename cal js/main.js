let dollar = document.getElementById("dollar");
let dirham = document.getElementById("dirham");

dollar.onkeyup = function () {
    let result = dollar.value * 10.11;
    dirham.value = result.toFixed(3);
}

dirham.onkeyup = function () {
    let result = dirham.value / 10.11;
    dollar.value = result.toFixed(3);
}

let typedDoller = document.getElementsByClassName("dollar");

typedDoller = new Typed (".dollar", {
    strings: ["Dollar"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
});

let typedDirham = document.getElementsByClassName("dirham");

typedDirham = new Typed (".dirham", {
    strings: ["Dirham"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
});