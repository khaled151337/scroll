let input = document.querySelector('input');
let pass_Hide = document.querySelector('.pass_Hide');
let pass_Show = document.querySelector('.pass_Show');

pass_Hide.addEventListener("click", function() {
    input.type = "password";
    pass_Hide.style.display = "none";
    pass_Show.style.display = "block";
});

pass_Show.addEventListener("click", function() {
    input.type = "text";
    pass_Hide.style.display = "block";
    pass_Show.style.display = "none";
});




window.addEventListener("scroll", () => {
let ouTre = document.querySelector(".outer");
let inNer = document.querySelector(".inner");
let bodyHeight = document.documentElement.scrollHeight;
let clientHeight = document.documentElement.clientHeight;
let fromTop = document.documentElement.scrollTop;

let sub = bodyHeight - clientHeight;
let result = fromTop * 100 / sub;
let exactly = Math.round(result);

    ouTre.style.backgroundImage = `conic-gradient(rgb(255, 156, 26) ${exactly}%, rgb(140, 140, 159) ${exactly}%)`;
    inNer.innerHTML = exactly;
    inNer.style.color = "rgb(255, 156, 26)"
});




