const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

const f1Drivers = {
  verstappen: {
    team: "Red Bull Racing",
    firstName: "Max",
    number: 1,
  },
  leclerc: {
    team: "Ferrari",
    firstName: "Charles",
    number: 16,
  },
  perez: {
    team: "Red Bull Racing",
    firstName: "Sergio",
    number: 11,
  },
  russell: {
    team: "Mercedes",
    firstName: "George",
    number: 63,
  },
  sainz: {
    team: "Ferrari",
    firstName: "Carlos",
    number: 55,
  },
  hamilton: {
    team: "Mercedes",
    firstName: "Lewis",
    number: 44,
  },
  norris: {
    team: "McLaren",
    firstName: "Lando",
    number: 4,
  },
  bottas: {
    team: "Alfa Romeo",
    firstName: "Valterri",
    number: 77,
  },
  ocon: {
    team: "Alpine",
    firstName: "Esteban",
    number: 31,
  },
  magnussen: {
    team: "Haas",
    firstName: "Kevin",
    number: 20,
  },
  ricciardo: {
    team: "McLaren",
    firstName: "Daniel",
    number: 3,
  },
  tsunoda: {
    team: "AlphaTauri",
    firstName: "Yuki",
    number: 22,
  },
  alonso: {
    team: "Alpine",
    firstName: "Fernando",
    number: 14,
  },
  gasly: {
    team: "AlphaTauri",
    firstName: "Pierre",
    number: 10,
  },
  vettel: {
    team: "Aston Martin",
    firstName: "Sebastian",
    number: 5,
  },
  albon: {
    team: "Williams",
    firstName: "Alexander",
    number: 23,
  },
  stroll: {
    team: "Aston Martin",
    firstName: "Lance",
    number: 18,
  },
  zhou: {
    team: "Alfa Romeo",
    firstName: "Guanyu",
    number: 24,
  },
  schumacher: {
    team: "Haas",
    firstName: "Mick",
    number: 47,
  },
  hulkenberg: {
    team: "Aston Martin",
    firstName: "Nico",
    number: 27,
  },
  latifi: {
    team: "Williams",
    firstName: "Nicholas",
    number: 6,
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api", (req, res) => {
  res.json(f1Drivers);
});

app.get("/api/:driverName", (req, res) => {
  const driver = req.params.driverName.toLowerCase();
  if (f1Drivers[driver]) {
    res.json(f1Drivers[driver]);
  } else {
    res.status(404).end();
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
