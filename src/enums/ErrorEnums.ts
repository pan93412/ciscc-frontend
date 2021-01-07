const enum ErrorEnums {
  TEXTAREA_CONTENT_INVAILD = "訊息過短，或是發生內部錯誤。",
  HTTP_NOT_OK = "伺服器、API 或輸入內容有誤：HTTP 狀態碼不是 200。",
  API_NOT_SUCCESS = "API 或輸入內容有誤：動作未成功。",
  API_RATE_LIMIT = "你傳的訊息太多了！請稍後再試。"
}

export default ErrorEnums;
