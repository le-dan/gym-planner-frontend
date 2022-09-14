import WorkoutCard from "./WorkoutCard";

export default function WorkoutContainer() {
  return (
    <div className="absolute bottom-0 z-0 flex h-[88%] w-full items-center justify-center">
      <div className="absolute bottom-0 z-10 grid h-[95%] w-[90%] grid-cols-4 grid-rows-3  items-center justify-items-center rounded-t-3xl bg-slate-200 shadow-2xl">
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
