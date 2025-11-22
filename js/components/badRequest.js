export default function badRequest() {
  return `
    <div class="bad-request">
      <img class="bad-request__img" src="https://github.com/gw-devf/recipe-knowledge-base/blob/main/assets/bad-request.png?raw=true" alt="Requisição da API não foi bem sucedida" />

      <h4 class="bad-request__message">Ocorreu algum problema para consumir os dados, a cozinha está um caos! Volte mais tarde ou entre em contato com o nosso time!<h4/>
    </div>
  `;
}
