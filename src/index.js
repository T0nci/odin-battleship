import playGame from "./assets/js/game";

// Cancel closing of dialogs because they are mandatory
document.querySelector("html").addEventListener("keydown", (e) => {
  if (e.key === "Escape") e.preventDefault();
});

document.querySelector(".choose-mode").showModal();
document
  .querySelector(".choose-mode > form")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    // e.target is the form
    const mode = e.target.querySelector("input[type='radio']:checked").value;

    // Close the dialog and reset the form
    e.target.parentNode.close();
    e.target.reset();

    playGame(mode);
  });
