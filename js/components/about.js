export default function about(data) {
  return `
    <h2 class="about__title">Sobre o projeto</h2>
    <div class="about__content">
      <p>${data.description1}</p>
      <p>${data.description2}</p>
      <p>${data.description3}</p>
      <p>${data.description4}</p>
      <p>${data.description5}</p>
    </div>
  `;
}
