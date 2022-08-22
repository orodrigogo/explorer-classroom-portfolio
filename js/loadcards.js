const sectionCards = document.querySelector("section.cards");

const card = document.querySelector(".card");

const jobs = [
  {
    title: "Site para Imobiliária",
    thumb: "https://cdn.dribbble.com/users/2742725/screenshots/17473665/media/d1fadf165b37db99a7c83a545e3ad93f.png?compress=1&resize=320x240&vertical=top",
    id: "1"
  },
  {
    title: "Site para Eventos",
    thumb: "https://cdn.dribbble.com/userupload/3281964/file/original-b8f1d8fee287e8b63cfce3247455fa43.jpg?compress=1&resize=320x240&vertical=top",
    id: "2"
  },
  {
    title: "Venda de Plantas",
    thumb: "https://cdn.dribbble.com/userupload/3278254/file/original-bcb70db42bcc0319be3e03d60705e17f.jpg?compress=1&resize=320x240&vertical=top",
    id: "3"
  },
  {
    title: "Site para venda de carros",
    thumb: "https://cdn.dribbble.com/userupload/3279536/file/original-7b4d49c6b8a1de6f17ec8778ff2c80ab.png?compress=1&resize=320x240&vertical=top",
    id: "4"
  },
  {
    title: "Site para Academia",
    thumb: "https://cdn.dribbble.com/userupload/2585408/file/original-98ba6ee17d42b3c403c982846fd7ae3e.png?compress=1&resize=320x240&vertical=top",
    id: "5"
  },
  {
    title: "Sistema de agendamento de pacientes",
    thumb: "https://cdn.dribbble.com/userupload/2553812/file/original-a2c832f8d00f0633d3d92a6471f5d9ee.png?compress=1&resize=400x300&vertical=top",
    id: "6"
  }
];

jobs.map(job => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", job.id);
  cardClone.querySelector("img").src = job.thumb;
  cardClone.querySelector(".card__title").innerHTML = job.title;

  sectionCards.appendChild(cardClone);
});

card.remove();