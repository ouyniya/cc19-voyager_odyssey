import avatar1 from "./assets/images/avatar1.png";
import avatar2 from "./assets/images/avatar2.png";
import avatar3 from "./assets/images/avatar3.png";
import avatar4 from "./assets/images/avatar4.png";
import avatar5 from "./assets/images/avatar5.png";
import avatar6 from "./assets/images/avatar6.png";

const cards = [
  { id: 1, name: "avatar1", image: avatar1 },
  { id: 2, name: "avatar1", image: avatar1 },
  { id: 3, name: "avatar2", image: avatar2 },
  { id: 4, name: "avatar2", image: avatar2 },
  { id: 5, name: "avatar3", image: avatar3 },
  { id: 6, name: "avatar3", image: avatar3 },
  { id: 7, name: "avatar4", image: avatar4 },
  { id: 8, name: "avatar4", image: avatar4 },
  { id: 9, name: "avatar5", image: avatar5 },
  { id: 10, name: "avatar5", image: avatar5 },
  { id: 11, name: "avatar6", image: avatar6 },
  { id: 12, name: "avatar6", image: avatar6 },
];

export const cardsData = cards.map((card) => ({
  ...card,
  order: Math.floor(Math.random() * 12),
  isFlipped: false,
}));
