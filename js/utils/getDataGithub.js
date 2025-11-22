const url = "https://api.github.com/users";

export default async function getDataGithub(path = "/") {
  try {
    const response = await fetch(`${url}${path}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
