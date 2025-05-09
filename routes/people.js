const express = require("express");
const router = express.Router();
const data = require("../data/data");
let people = data.people;
const logger = require("../middleware/logger");
function checkforId(id) {
  return people.some((per) => per.id === id);
}
router.use(logger);

router.get("/", (req, res) => {
  console.log("GET /api/people hit");
  return res.status(200).json({ success: true, data: people });
});

router.get("/query", (req, res) => {
  const { name } = req.query;

  // Log the name parameter to see if it's passed correctly
  console.log("Query name:", name);

  if (!name) {
    return res.status(400).json({
      success: false,
      data: "Name parameter is required",
    });
  }

  const person = people.find(
    (per) => per.name.toLowerCase() === name.toLowerCase()
  );

  router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const person = people.find((per) => {
      if (per.id === id) return per;
    });
    if (!person) {
      return res.status(404).json({
        sucess: false,
        data: `The person with id ${id} does not exist`,
      });
    } else {
      return res.status(200).json({ sucess: true, data: person.name });
    }
  });

  // Log the person found
  console.log("Found person:", person);

  if (!person) {
    return res.status(404).json({
      success: false,
      data: `The person with name ${name} does not exist`,
    });
  } else {
    return res.status(200).json({
      success: true,
      data: person.id,
    });
  }
});

router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ success: true, msg: "Name is required" });
  }

  let custom_id;
  do {
    custom_id = Math.floor(Math.random() * 100) + 1;
  } while (checkforId(custom_id));
  people.push({ name: name, id: custom_id });
  return res.status(201).json({ sucess: true, data: people });
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name } = req.body;
  const person = people.find((person) => person.id === id);
  if (!person) {
    return res
      .status(400)
      .json({ sucess: false, msg: `No persn with id ${id}` });
  }
  person.name = name;
  return res.status(200).json({ sucess: true, data: people });
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const deletePerson = people.find((person) => person.id === id); // Renamed variable

  if (!deletePerson) {
    return res
      .status(404) // Change status code to 404 if person is not found
      .json({ success: false, msg: `No available person with id ${id}` }); // Corrected the typo
  }

  // Remove the person from the 'people' array
  people.splice(
    people.findIndex((person) => person.id === id),
    1
  );

  return res.status(200).json({ success: true, data: people });
});

module.exports = router;
