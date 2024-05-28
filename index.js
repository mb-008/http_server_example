var user = [
  {
    name: "john",
    Kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

const express = require("express");
const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  const johnkidneys = user[0].Kidneys;
  const numberOfKidneys = johnkidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (johnkidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});
app.use(express.json());
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  user[0].Kidneys.push({ healthy: isHealthy });
  res.json({ msg: "Done!" });
});

app.put("/", (req, res) => {
  for (let i = 0; i < user[0].Kidneys.length; i++) {
    user[0].Kidneys[i].healthy = true;
  }
  res.json({});
});

app.delete("/", (req, res) => {
  const newKidneys = [];
  for (let i = 0; i < user[0].Kidneys.length; i++) {
    if (user[0].Kidneys[i].healthy) {
      newKidneys.push({
        healthy: true,
      });
    }
  }
  user[0].Kidneys = newKidneys;
  res.json({ msg: "Done!" });
});
