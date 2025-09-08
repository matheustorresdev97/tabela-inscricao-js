let participantes = [
  {
    nome: "Fernanda Ribeiro",
    email: "fernanda.ribeiro@gmail.com",
    dataInscricao: new Date(2024, 3, 12, 14, 35),
    dataCheckIn: new Date(2024, 3, 12, 15, 10),
  },
  {
    nome: "Rafael Martins",
    email: "rafael.martins@hotmail.com",
    dataInscricao: new Date(2024, 4, 5, 10, 20),
    dataCheckIn: new Date(2024, 4, 5, 11, 5),
  },
  {
    nome: "Juliana Castro",
    email: "juliana.castro@yahoo.com",
    dataInscricao: new Date(2024, 1, 18, 9, 45),
    dataCheckIn: new Date(2024, 1, 18, 10, 15),
  },
  {
    nome: "Eduardo Lima",
    email: "eduardo.lima@gmail.com",
    dataInscricao: new Date(2023, 11, 22, 16, 40),
    dataCheckIn: new Date(2023, 11, 22, 17, 20),
  },
  {
    nome: "Camila Ferreira",
    email: "camila.ferreira@gmail.com",
    dataInscricao: new Date(2023, 10, 8, 18, 10),
    dataCheckIn: new Date(2023, 10, 8, 19, 0),
  },
  {
    nome: "Thiago Rocha",
    email: "thiago.rocha@gmail.com",
    dataInscricao: new Date(2023, 9, 15, 13, 55),
    dataCheckIn: new Date(2023, 9, 15, 14, 25),
  },
  {
    nome: "Bianca Mendes",
    email: "bianca.mendes@gmail.com",
    dataInscricao: new Date(2023, 8, 3, 17, 5),
    dataCheckIn: new Date(2023, 8, 3, 17, 45),
  },
  {
    nome: "Rodrigo Azevedo",
    email: "rodrigo.azevedo@gmail.com",
    dataInscricao: new Date(2023, 7, 21, 11, 15),
    dataCheckIn: new Date(2023, 7, 21, 12, 0),
  },
  {
    nome: "Larissa Gomes",
    email: "larissa.gomes@gmail.com",
    dataInscricao: new Date(2023, 6, 30, 15, 20),
    dataCheckIn: new Date(2023, 6, 30, 16, 10),
  },
  {
    nome: "Marcelo Nunes",
    email: "marcelo.nunes@gmail.com",
    dataInscricao: new Date(2023, 5, 11, 8, 40),
    dataCheckIn: new Date(2023, 5, 11, 9, 10),
  },
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao);

  const dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn);

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
