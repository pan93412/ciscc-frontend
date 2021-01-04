import generateSlogan from "../utils/generateSlogan";

export default function setSlogan(): void {
  // .slogan, a subtitle.
  document.querySelector(".slogan").innerHTML = generateSlogan();
}
