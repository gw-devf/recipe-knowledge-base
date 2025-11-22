const url = "../../db";

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
