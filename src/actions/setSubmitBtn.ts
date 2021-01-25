import sendMessage from "../utils/sendMessage";
import ErrorEnums from "../enums/ErrorEnums";

const complainArea = <HTMLTextAreaElement>(
  document.querySelector("#complain-area")
);
const textareaChecker = (area: HTMLTextAreaElement) =>
  area && area.value && area.value.length > 0;
const warningMessage = [
  "訊息一旦送出，即無法撤回。\n\n",
  "如管理員或執法單位要求調出訊息傳送記錄，",
  "本服務會有條件提供。請謹言慎行。",
].join("");

export default function setSubmitBtn() {
  // #submit, a button.
  const submitBtn = <HTMLButtonElement>document.querySelector("#submit");
  submitBtn.disabled = false;
  submitBtn.addEventListener("click", async (e) => {
    const el = <HTMLButtonElement>(e.currentTarget)

    if (confirm(warningMessage)) {
      if (textareaChecker(complainArea)) {
        el.disabled = true;
        await sendMessage({
          message: complainArea.value,
        }).catch(alert);
        el.disabled = false;
      } else {
        throw new Error(ErrorEnums.TEXTAREA_CONTENT_INVAILD);
      }
    }
  });
}
