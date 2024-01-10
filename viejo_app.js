const express = require("express");

const app = express();

// Se intentara siempre que sea el 3000 pero dependiendo del trabajo me pueden obligar a usar uno u otro diferente.
const PORT = 3000;

// creamos una peticion rest
app.get("/", (request, response) => {
  response.send(
    `<h1>Buenos días</h1><p>Has recibido una respuesta del servidor</p>`
  );
});

app.get("/organos", (req, res) => {
  res.send(`<ul>
  <li>Estomago</li>
  <li>Corazon</li>
  <li>Higado</li>
  <li>Cerebro</li>
  <li>Pulmones</li>
    </ul>`);
});

app.get("/peliculas-ghibli", (req, res) => {
  res.send(`<ul>
    <li>La princesa Mononoke</li>
    <li>El castillo ambulante</li>
    <li>El viaje de Chihiro</li>
    <li>Mi vecino Totoro</li>
    <li>La tumba de las luciérnagas</li>
    </ul>`);
});

app.get("/comidas-del-mundo", (req, res) => {
  res.send(`<h1>Comidas tipicas del mundo</h1
    <h3>España</h3>
    <ul>
    <li>Tortilla de patata</li>
    <li>Patatas bravas</li>
    </ul>
    <h3>Italiana</h3>
    <ul>
    <li>Pizza</li>
    <li>Canelones</li>
    </ul>
    <h3>Turca</h3>
    <ul>
    <li>Falafel</li>
    <li>Kebab</li>
    </ul>`);
});

const coche = {
  1: { title: "Carburador" },
  2: { title: "Correa de distrubucion" },
  3: { title: "Bujias" },
  4: { title: "Pastillas de freno" },
};

app.get("/getcoche/:id", (req, res) => {
  const id = req.params.id;
  res.send(coche[id]);
});

// ejercicio de prueba

const personajes = {
  1: {
    name: "Sophie Hatter",
    description:
      "Es una joven de dieciocho años que trabaja en una sombrerería. Es víctima de una maldición por parte de la Bruja del Páramo que le hace tener la apariencia de una mujer de noventa años. De carácter tímido y cerrado, tendrá que enfrentarse a sí misma para poder romper el maleficio que se ha desatado sobre ella y ayudar a Howl",
  },
  2: {
    name: "Howl Jenkins Pendragon",
    description:
      "Es el amo y señor del castillo ambulante. Es un mago dotado de un poder inmesurable del que se cuentan varias leyendas, entre ellas que se dedica a robar el corazón de mujeres jóvenes y bellas. De apariencia joven y energética, rechaza la invitación del rey de unirse a la guerra puesto que vive sus días con despreocupación y sin objetivos. En realidad, aborrece la guerra y por ende trata de sabotear las naves de guerra de ambos bandos para así evitar la masacre de inocentes, a costa de perder su propia humanidad",
  },
  3: {
    name: "Bruja del Páramo",
    description:
      "Es una malvada bruja que persigue a Howl para adueñarse de su corazón. De acuerdo con Howl, la Bruja del Páramo alguna vez fue una bella mujer, motivo por el cual se acercó a ella, pero terminó huyendo al ver cómo era realmente. Desde ese entonces, la bruja lo ha estado persiguiendo. También solía ser la bruja de la Casa Real de Kingsbury, pero fue expulsada cincuenta años atrás por Madame Suliman y eligió el Páramo para vivir, de ahí su nombre",
  },
  4: {
    name: "Markl",
    description:
      "Es el joven discípulo de Howl. Es huérfano y se encarga de recibir a los visitantes que llegan al castillo para ver al mago o a los enviados del rey que portan cartas de invitación",
  },
  5: {
    name: "Calcifer",
    description:
      " Es un demonio de fuego, encargado de mantener la energía del castillo ambulante. Irónico y bromista, promete ayudar a Sophie a condición de que esta le ayude a él",
  },
};

app.get("/getpersonajes/nombres", (req, res) => {
  const nombres = [];
  for (let x in personajes) {
    nombres.push(personajes[x].name);
  }
  const data = JSON.stringify(nombres);
  res.send(data);
});

const foots = {
  1: {
    food_name: "Jameson Irish Whiskey",
    food_category: "grain",
    food_price: 50.3,
    food_expiration_date: "11/1/2023",
    food_origin: "Japan",
  },
  2: {
    food_name: "Apple - Fuji",
    food_category: "fruit",
    food_price: 11.42,
    food_expiration_date: "12/26/2023",
    food_origin: "Indonesia",
  },
  3: {
    food_name: "Cleaner - Bleach",
    food_category: "dairy",
    food_price: 21.36,
    food_expiration_date: "9/3/2023",
    food_origin: "Greece",
  },
  4: {
    food_name: "Mace Ground",
    food_category: "vegetable",
    food_price: 80.05,
    food_expiration_date: "6/9/2023",
    food_origin: "Philippines",
  },
  5: {
    food_name: "Appetizer - Assorted Box",
    food_category: "fruit",
    food_price: 17.79,
    food_expiration_date: "1/4/2023",
    food_origin: "Poland",
  },
  6: {
    food_name: "Beans - Fava, Canned",
    food_category: "fruit",
    food_price: 75.68,
    food_expiration_date: "2/21/2023",
    food_origin: "Indonesia",
  },
  7: {
    food_name: "Wine - White, Chardonnay",
    food_category: "meat",
    food_price: 34.41,
    food_expiration_date: "2/10/2023",
    food_origin: "Indonesia",
  },
  8: {
    food_name: "Chicken - Wings, Tip Off",
    food_category: "grain",
    food_price: 77.36,
    food_expiration_date: "2/22/2023",
    food_origin: "Indonesia",
  },
  9: {
    food_name: "Pomello",
    food_category: "fruit",
    food_price: 15.64,
    food_expiration_date: "2/10/2023",
    food_origin: "Morocco",
  },
  10: {
    food_name: "Pastry - Chocolate Chip Muffin",
    food_category: "grain",
    food_price: 93.32,
    food_expiration_date: "7/23/2023",
    food_origin: "Poland",
  },
};

app.get("/getfoods/");

// indicamos al servidor que puerto tiene que escuchar

app.listen(PORT, () => {
  console.log(`se ha iniciado el servidor en el puerto: ${PORT}`);
});
