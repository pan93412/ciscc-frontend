import generateComplainPlaceholders from "../utils/generateComplainPlaceholders";

export default function setComplainArea() {
  // #complain-area, a textarea.
  document
    .querySelector("#complain-area")
    .setAttribute("placeholder", generateComplainPlaceholders());
}
