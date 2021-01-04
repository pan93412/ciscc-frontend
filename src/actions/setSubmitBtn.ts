import sendMessage from '../utils/sendMessage';
import ErrorEnums from '../enums/ErrorEnums';

const complainArea = <HTMLTextAreaElement>document.querySelector('#complain-area');
const textareaChecker = (area: HTMLTextAreaElement) => (area && area.value && area.value.length > 0);
const warningMessage = [
  "訊息一旦送出，即無法撤回。\n\n",
  "即使這個系統不會記錄您的 IP 地址，",
  "但言語所帶來的傷害是無法估計的。",
  "請謹言慎行。",
].join("");

export default function setSubmitBtn() {
  // #submit, a button.
  const submitBtn = <HTMLButtonElement>document.querySelector("#submit");
  submitBtn.disabled = false;
  submitBtn.addEventListener("click", () => {
    if (confirm(warningMessage)) {
      if (textareaChecker(complainArea)) {
        sendMessage({
          message: complainArea.value
        }).catch(alert);
      } else {
        throw new Error(ErrorEnums.TEXTAREA_CONTENT_INVAILD);
      }
    }
  });
}
