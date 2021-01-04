export interface APISendResponseData {
  message: string;
}

export default interface APISendResponse {
  success: boolean;
  data: APISendResponseData;
}
