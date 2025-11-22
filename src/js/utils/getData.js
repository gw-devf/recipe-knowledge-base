const url =
  "https://raw.githubusercontent.com/gw-devf/recipe-knowledge-base/refs/heads/main/db";

export default async function getData(path = "/") {
  try {
    const response = await fetch(`${url}${path}.json`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
