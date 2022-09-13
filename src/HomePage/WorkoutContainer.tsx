import WorkoutCard from "./WorkoutCard";

export default function WorkoutContainer() {
  return (
    <div className="absolute bottom-0 z-0 flex h-[85%] w-full items-center justify-center">
      <div className="absolute z-10 grid h-[100%]  w-[90%] grid-cols-5 grid-rows-3 items-center justify-items-center rounded-t-[3rem] bg-slate-100 shadow-2xl">
        <WorkoutCard workoutName="push" />
        <WorkoutCard workoutName="pull" />
        <WorkoutCard workoutName="legs" />
        <WorkoutCard workoutName="push" />
        <WorkoutCard workoutName="pull" />
        <WorkoutCard workoutName="legs" />
        <WorkoutCard workoutName="push" />
        <WorkoutCard workoutName="pull" />

      </div>
    </div>
  );
}
