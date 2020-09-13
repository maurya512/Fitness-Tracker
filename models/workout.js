const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    // add attributes 
    // attribute for when the log was created
    day: {
        type: Date,
        default: Date.now
    },
    // array of objects that contain the attributes for the exercise
    exercises: [{
        // attribute for the type of the exercise
        type: {
            type: String,
            trim: true,
            required: true
        },
        // attribute for the name of the exercise
        name: {
            type: String,
            trim: true,
            required: "Enter a name for the exercise."
        },
        // attribute for the duration of the exericse
        duration: {
            type: Number,
            required: true
        },
        // attribute for the weight of the exercise
        weight: {
            type: Number,
        },
        // attribute for the reps of the exercise
        reps: {
            type: Number,
        },
        // attributes for the sets of the exercise
        sets: {
            type: Number,
        },
        // attributes for the distance of the exercise
        distance: {
            type: Number,
        }
    }]
},
{
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true,
    },
  })
workoutSchema.virtual('totalDuration').get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;