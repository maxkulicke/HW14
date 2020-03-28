const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    })
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    })
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
      req.params.id,
      {$push: {exercises: req.body}},
      {new: true}
  ).then(data => res.json(data))
      .catch(error => {
          res.json(error);
      })
});

router.post("/api/workouts", (req, res) => {
  Workout.create({}).then(data => res.json(data))
      .catch(error => {
          res.json(error);
      })
});


module.exports = router;
