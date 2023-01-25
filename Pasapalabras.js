const questions = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },
  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },
  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

class Players {
  constructor(name, points) {
    this.name = name;
    this.points = points;
  }
}

const name1 = [];
const name2 = [];

const askUserName1 = () => {
  let askName1 = prompt(
    "Bienvenido al PASAPALABRAS jugador => 1: introduzca su nombre"
  );

  if (askName1 === "" || askName1 === null) {
    askName1 = prompt(
      "Bienvenido al PASAPALABRAS jugador => 1: introduzca su nombre"
    );
  } else {
    alert(`Hola ${askName1.toUpperCase()}, comencemos el juego`);
  }
  name1.push(askName1.toUpperCase());
  return askName1.toUpperCase();
};

const askUserName2 = () => {
  let askName2 = prompt(
    "Bienvenido al PASAPALABRAS jugador => 2: introduzca su nombre"
  );

  if (askName2 === "" || askName2 === null) {
    askName2 = prompt(
      "Bienvenido al PASAPALABRAS jugador => 2: introduzca su nombre"
    );
  } else {
    alert(`Hola ${askName2.toUpperCase()}, comencemos el juego`);
  }
  name2.push(askName2.toUpperCase());
  return askName2.toUpperCase();
};

const pasapalabrasPlay = () => {
  for (let i = 0; i < questions.length; i++) {
    const answers = prompt(`${questions[i].question}`);

    if (answers.toLowerCase() === questions[i].answer.toLowerCase()) {
      alert(`Correcto, ha ganado 1 punto`);

      questions[i].status = 1;
    } else if (
      answers.toLowerCase() === "pasapalabra".toLowerCase() ||
      answers.toLowerCase() === "pasapalabras".toLowerCase()
    ) {
      alert(`Se le volverá a preguntar al final del juego`);

      questions[i].status = 2;
    } else if (answers.toLowerCase() === "end".toLowerCase()) {
      alert(`Usted ha acertado ${scoreAccuratePlayer()} preguntas. Adios!`);
      break;
    } else if (answers === null) {
      alert(`Usted ha acertado ${scoreAccuratePlayer()} preguntas. Adios!`);
      break;
    } else {
      alert(`Incorrecto`);

      questions[i].status = 3;
    }
  }
  pasapalabraAnswer();
};

const pasapalabraAnswer = () => {
  for (i in questions) {
    if (questions[i].status === 2) {
      const answerAgain = prompt(`${questions[i].question}`);

      if (answerAgain.toLowerCase() === questions[i].answer.toLowerCase()) {
        alert(`Correcto, ha ganado 1 punto`);

        questions[i].status = 1;
      } else {
        alert(`Incorrecto`);

        questions[i].status = 3;
      }
    }
  }
};

const scoreAccuratePlayer = () => {
  const accurateLetters = [];
  const accurate = questions.filter((estat) => estat.status === 1);
  for (i in accurate) {
    accurateLetters.push(accurate[i].status);
  }
  const sumAccurate = accurateLetters.reduce((a, b) => a + b, 0);
  return sumAccurate;
};

const scoreFailedPlayer = () => {
  const failedLetters = [];
  const failed = questions.filter((estat) => estat.status === 3);
  for (i in failed) {
    failedLetters.push(failed[i].status);
  }
  return failedLetters.length;
};

const showFinal = () => {
  alert(
    `Usted ha acertado ${scoreAccuratePlayer()} preguntas y ha fallado ${scoreFailedPlayer()} preguntas`
  );
};

const play1 = () => {
  askUserName1();
  pasapalabrasPlay();
  showFinal();
  name1.push(scoreAccuratePlayer());

  askUserName2();
  pasapalabrasPlay();
  showFinal();
  name2.push(scoreAccuratePlayer());
};
play1();

const player1 = new Players(name1[0], name1[1]);
const player2 = new Players(name2[0], name2[1]);

const ranking = () => {
  if (player1.points > player2.points) {
    alert(`${player1.name} => ${player1.points}
    ${player2.name} => ${player2.points}`);
  } else {
    alert(`${player2.name} => ${player2.points}
    ${player1.name} => ${player1.points}`);
  }
};
ranking();
