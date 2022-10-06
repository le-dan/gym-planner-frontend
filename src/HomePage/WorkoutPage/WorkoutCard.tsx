import { motion } from "framer-motion";
import axios from "axios";

export default function WorkoutCard({
  username,
  workoutName,
  setClickedWorkout,
  setExercisePopUp,
}: {
  username: string;
  workoutName: string;
  setClickedWorkout: any;
  setExercisePopUp: any;
}) {
  // Function that sets the exercise pop up to true and sets the clicked workout
  const handleClick = () => {
    setClickedWorkout(
      // Axios get request to get clicked workout
      axios
        .get(`/api/users/${username}/workouts/${workoutName}`)
        .then((response) => {
          setClickedWorkout(response.data);
        })
    );
    setExercisePopUp(true);
  };

  return (
    // Workout Card Container
    <div className="workoutCardOuter z-50 flex h-[70%] w-[75%] items-center justify-center rounded-3xl shadow-xl">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="workoutCardInner flex h-[80%] w-[75%] cursor-pointer items-center justify-center rounded-3xl shadow-xl"
        onClick={() => handleClick()}
      >
        <div className="select-none text-3xl font-extralight">
          {workoutName}
        </div>
        <div></div>
      </motion.div>
    </div>
  );
}
