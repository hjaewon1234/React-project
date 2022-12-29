const myCombo = ["a", "d", "m", "i", "n"];
let count = 0;
const Combochecker = (goToAdmin) => {
  window.addEventListener("keydown", (e) => {
    if (e.key == myCombo[count]) {
      count++;
      if (count == myCombo.length) {
        console.log("콤보 완료");
        count = -1;
        goToAdmin();
        return 1;
      }
    } else {
      count = 0;
      // console.log("콤보 실패");
    }
  });
};

export default Combochecker;
