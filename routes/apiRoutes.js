
const router = require('express').Router();
const Workout = require('../models/workout');

// Use 'Workout' to refernce the model and use the methods provided with the model to execute database operatioms

router.post('/api/workouts', ({body}, res) => {
  // Replace <METHOD> with method to create document in collection with data in req body
  // Pass in data passed in from browser as input argument to the method
  Workout.create({body})

    // Fill in .then() with call back function that takes result from db as input argument and send it back to browser
    .then(data =>{
        res.json(data)
    })

    // Fill in .catch() with call back function that takes error as input argument and send it back to browser
    .catch(err =>{
        res.json(err);
    });
});

router.put('/api/workouts/:id', ({body, params}, res) => {
  // Replace <METHOD> with method to Find the document with id passed in and update the document with data in req body
  // Look into mongoose doc for method to perform both find document by id and update the document
  // Look into a way to push data passed in to the exercises array in model
  // Fill in the input argument(s) to the method

  Workout.findByIdAndUpdate(
     {_id: params.id, },
     { $push: {exercises: body}}, 
    
    // "runValidators" will ensure new exercises meet our schema requirements
    // Don't forget comma proceeds the following option
    { new: true, runValidators: true }
  )

    // Fill in .then() with call back function that takes result from db as input argument and send it back to browser
    .then(data =>{
        res.json(data)
    })

    // Fill in .catch() with call back function that takes error as input argument and send it back to browser
    .catch(err => {
        res.json(err);
    });
});

router.get('/api/workouts', (req, res) => {
  // Replace <METHOD> with method to Find all workouts from collection
  Workout.find({})

    // Fill in .then() with call back function that takes result from db as input argument and send it back to browser
    .then(data => {
        res.json(data)
    })

    // Fill in .catch() with call back function that takes error as input argument and send it back to browser
    .catch(err => {
        res.json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
  // Replace <METHOD> with method to Find all workouts then limit with range
  // Look into mongoose doc for how to limit with range
  // Fill in the input argument(s) to the method

  Workout.find({}).sort({date: -1}).limit(7)

    // Fill in .then() with call back function that takes result from db as input argument and send it back to browser
    .then(data => {
        res.json(data)
    })

    // Fill in .catch() with call back function that takes error as input argument and send it back to browser
    .catch(err => {
        res.json(err);
    });
});

router.delete('/api/workouts', ({ body }, res) => {
  // Find document with id passed in as part of data
  // Look into mongoose doc for a method to perform both to find document with id and delete it
  // Review the front end javascript code to understand how document id is passed to back end
  // Fill in the input argument(s) to the method

  Workout.remove({})

    // Fill in .then() with call back function that takes no input argument and send boolean 'true' back to browser
    .then(data => {
        res.json(data)
    })

    // Fill in .catch() with call back function that takes error as input argument and send it back to browser
    .catch(err => {
        res.json(err)
    });
});

module.exports = router;