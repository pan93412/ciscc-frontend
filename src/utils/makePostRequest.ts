/**
 * Make a POST request with the specified data to the specified url.
 * 
 * @param url The URL to make the POST request.
 * @param data The data of the POST request. Can be JSON.
 * @returns The response.
 */
export default async function makePostRequest(url: string, data: string): Promise<Response> {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });
}
