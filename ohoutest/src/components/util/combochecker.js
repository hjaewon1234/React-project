const myCombo = ["a", "d", "m", "i", "n"];
let count = 0;
const Combochecker = (goToAdmin) => {
  window.addEventListener("keydown", (e) => {
    if (e.key == myCombo[count]) {
      count++;
      if (count == myCombo.length) {
        count = -1;
        goToAdmin();
        return 1;
      }
    } else {
      count = 0;
    }
  });
};

export default Combochecker;
