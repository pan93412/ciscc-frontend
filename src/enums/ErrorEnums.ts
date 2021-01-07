const enum ErrorEnums {
  TEXTAREA_CONTENT_INVAILD = "訊息過短，或是發生內部錯誤。",
  HTTP_NOT_OK = "伺服器、API 或輸入內容有誤：HTTP 狀態碼不是 200。",
  API_NOT_SUCCESS = "API 呼叫失敗：可能是輸入的訊息含有無效字元，或是 API 發生錯誤。",
  API_RATE_LIMIT = "你傳的訊息太多了！請稍後再試。",
  FETCH_ERROR = "發生 fetch 錯誤：可能是因為您短時間內傳送的訊息太多，或是 API 有問題。\n詳細資料：\n"
}

export default ErrorEnums;
