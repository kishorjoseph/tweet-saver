const apiHost = "http://localhost:4000";
export const searchTweets = async (q) => {
  const headers = [["Content-type", "application/json; charset=utf-8"]];
  const count = 10;
  try {
    const response = await fetch(`${apiHost}/tweets?q=${q}&count=${count}`, {
      method: "GET",
      mode: "cors",
      headers,
    });
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
