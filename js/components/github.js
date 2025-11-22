export default function github(data) {
  return `
    <div class="about__author">
      <img class="about__author__img" src="${data.avatar_url}" alt="Foto do Github - ${data.name}" />

      <div class="about__author__content">
        <h2>${data.name}</h2>
        <h3>${data.login}</h3>

        <p>${data.bio}</p>
      </div>
    </div>
  `;
}
