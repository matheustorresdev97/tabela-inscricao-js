let participantes = [
  {
    nome: "Fernanda Ribeiro",
    email: "fernanda.ribeiro@gmail.com",
    dataInscricao: new Date(2024, 3, 12, 14, 35),
    dataCheckIn: null,
  },
  {
    nome: "Rafael Martins",
    email: "rafael.martins@hotmail.com",
    dataInscricao: new Date(2024, 4, 5, 10, 20),
    dataCheckIn: null,
  },
  {
    nome: "Juliana Castro",
    email: "juliana.castro@yahoo.com",
    dataInscricao: new Date(2024, 1, 18, 9, 45),
    dataCheckIn: null,
  },
  {
    nome: "Eduardo Lima",
    email: "eduardo.lima@gmail.com",
    dataInscricao: new Date(2023, 11, 22, 16, 40),
    dataCheckIn: null,
  },
  {
    nome: "Camila Ferreira",
    email: "camila.ferreira@gmail.com",
    dataInscricao: new Date(2023, 10, 8, 18, 10),
    dataCheckIn: null,
  },
  {
    nome: "Thiago Rocha",
    email: "thiago.rocha@gmail.com",
    dataInscricao: new Date(2023, 9, 15, 13, 55),
    dataCheckIn: null,
  },
  {
    nome: "Bianca Mendes",
    email: "bianca.mendes@gmail.com",
    dataInscricao: new Date(2023, 8, 3, 17, 5),
    dataCheckIn: null,
  },
  {
    nome: "Rodrigo Azevedo",
    email: "rodrigo.azevedo@gmail.com",
    dataInscricao: new Date(2023, 7, 21, 11, 15),
    dataCheckIn: null,
  },
  {
    nome: "Larissa Gomes",
    email: "larissa.gomes@gmail.com",
    dataInscricao: new Date(2023, 6, 30, 15, 20),
    dataCheckIn: null,
  },
  {
    nome: "Marcelo Nunes",
    email: "marcelo.nunes@gmail.com",
    dataInscricao: new Date(2023, 5, 11, 8, 40),
    dataCheckIn: null,
  },
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao);

  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn);

  if (participante.dataCheckIn == null) {
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
        Confirmar check-in
      </button>
    `;
  }

  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `;
};

const atualizarLista = (participantes) => {
  let output = "";
  for (let participante of participantes) {
    output = output + criarNovoParticipante(participante);
  }

  // substituir informação do HTML
  document.querySelector("tbody").innerHTML = output;
};

atualizarLista(participantes);

const adicionarParticipante = (event) => {
  event.preventDefault();

  const dadosDoFormulario = new FormData(event.target);

  const participante = {
    nome: dadosDoFormulario.get("nome"),
    email: dadosDoFormulario.get("email"),
    dataInscricao: new Date(),
    dataCheckIn: null,
  };

  // verificar se o particpante já existe
  const participanteExiste = participantes.find(
    (p) => p.email == participante.email
  );

  if (participanteExiste) {
    alert("Email já cadastrado!");
    return;
  }

  participantes = [participante, ...participantes];
  atualizarLista(participantes);

  // limpar o formulario
  event.target.querySelector('[name="nome"]').value = "";
  event.target.querySelector('[name="email"]').value = "";
};

const fazerCheckIn = (event) => {
  // confirmar se realmente quer o check-in
  const mensagemConfirmacao = "Tem certeza que deseja fazer o check-in?";

  if (confirm(mensagemConfirmacao) == false) {
    return;
  }

  // encontrar o participante dentro da lista
  const participante = participantes.find(
    (p) => p.email == event.target.dataset.email
  );

  // atualizar o check-in do participante
  participante.dataCheckIn = new Date();

  // atualizar a lista de participantes
  atualizarLista(participantes);
};
