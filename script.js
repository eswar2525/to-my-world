const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continueBtn");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

startBtn.addEventListener("click", () => {
    page1.style.display = "none";
    page2.style.display = "flex";
});
continueBtn.addEventListener("click", () => {
    page2.style.display = "none";
    alert("Penguin Proposal Page - Next Step ❤️");
});
const page3 = document.getElementById("page3");

continueBtn.addEventListener("click", () => {
    page2.style.display = "none";
    page3.style.display = "flex";
});

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
    alert("❤️ You made me the happiest person in the world! ❤️");
});

noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 70 + "%";
    noBtn.style.top = Math.random() * 70 + "%";
});
const page4 = document.getElementById("page4");
const letterBtn = document.getElementById("letterBtn");

yesBtn.addEventListener("click", () => {
    page3.style.display = "none";
    page4.style.display = "flex";
});

letterBtn.addEventListener("click", () => {
    alert("🎂 Birthday Page - Next Step ❤️");
});
const page5 = document.getElementById("page5");

letterBtn.addEventListener("click", () => {

    page4.style.display = "none";

    page5.style.display = "flex";

});
const penguin = document.getElementById("penguin");
const proposalText = document.getElementById("proposalText");
const question = document.getElementById("question");

page3.addEventListener("transitionend", ()=>{});

setTimeout(() => {

    proposalText.style.display = "block";

},4000);

setTimeout(() => {

    question.style.display="block";

    yesBtn.style.display="inline-block";

    noBtn.style.display="inline-block";

},6000);
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 2000);
});
const openLetterBtn = document.getElementById("openLetterBtn");

openLetterBtn.addEventListener("click", () => {
    document.getElementById("letterCover").style.display = "none";
    document.getElementById("letterContent").style.display = "block";
});