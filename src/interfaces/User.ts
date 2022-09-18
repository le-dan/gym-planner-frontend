import Workout from "./Workout";

export default interface User {
  username: string;
  workouts: Workout[];
}
