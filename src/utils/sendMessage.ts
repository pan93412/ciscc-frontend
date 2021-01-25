import Message from "../types/Message";
import ErrorEnums from "../enums/ErrorEnums";
import makePostRequest from "./makePostRequest";
import APISendResponse from "../types/APISendResponse";

// It will be provided by webpack.EnvironmentPlugin.
const BACKEND_URL = process.env.BACKEND_URL;

export default async function sendMessage({
  message,
}: Message): Promise<APISendResponse> {
  if (!BACKEND_URL) return;

  try {
    const resp = await makePostRequest(
      `${BACKEND_URL}/send`,
      JSON.stringify({
        message,
      })
    );

    if (resp.status === 429) {
      throw new Error(ErrorEnums.API_RATE_LIMIT);
    } else if (!resp.ok) {
      throw new Error(ErrorEnums.HTTP_NOT_OK);
    }
  
    const respJson: APISendResponse = await resp.json();
    if (!respJson.success) {
      throw new Error(ErrorEnums.API_NOT_SUCCESS);
    }
  
    console.log(resp.headers);
    return respJson;
  } catch (e: any) {
    throw new Error(ErrorEnums.FETCH_ERROR + e);
  }
}
