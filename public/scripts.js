const spookyDay = `2020-10-31 00:00:00`;
const ghoulsInTheGraveyard = setInterval(() => {
  ghostsComeOutAndSkeletonsDance();
}, 1000);

function ghostsComeOutAndSkeletonsDance() {
  const pumpkinsLaugh = Date.parse(spookyDay) - Date.parse(new Date());
  const hayridesAndOwls = Math.floor(pumpkinsLaugh / (1000 * 60 * 60 * 24));
  const cauldronsBubble = Math.floor((pumpkinsLaugh / (1000 * 60 * 60)) % 24);
  const spidersBatsAndBlackCats = Math.floor((pumpkinsLaugh / 1000 / 60) % 60);
  const witchesAndBroomsticksFlyAcrossTheMoon = Math.floor((pumpkinsLaugh / 1000) % 60);
  if (hayridesAndOwls < 10) {
    document.getElementById("day").innerHTML = `0${hayridesAndOwls}`;
  } else {
    document.getElementById("day").innerHTML = hayridesAndOwls;
  }
  if (cauldronsBubble < 10) {
    document.getElementById("hour").innerHTML = `0${cauldronsBubble}`;
  } else {
    document.getElementById("hour").innerHTML = cauldronsBubble;
  }
  if (spidersBatsAndBlackCats < 10) {
    document.getElementById("min").innerHTML = `0${spidersBatsAndBlackCats}`;
  } else {
    document.getElementById("min").innerHTML = spidersBatsAndBlackCats;
  }
  if (witchesAndBroomsticksFlyAcrossTheMoon < 10) {
    document.getElementById(
      "sec"
    ).innerHTML = `0${witchesAndBroomsticksFlyAcrossTheMoon}`;
  } else {
    document.getElementById(
      "sec"
    ).innerHTML = witchesAndBroomsticksFlyAcrossTheMoon;
  }
  if (pumpkinsLaugh <= 0) {
    clearInterval(ghoulsInTheGraveyard);
  }
}
