import WorkoutCard from "./WorkoutCard";

export default function WorkoutContainer() {
  return (
    // Initial background for workout containers
    <div className="absolute bottom-0 z-0 flex h-[88%] w-full items-center justify-center">
      {/* Background card */}
      <div className="absolute bottom-0 flex h-[95%] w-[95%] items-center justify-center rounded-t-3xl bg-slate-100 shadow-2xl">
        <div className="absolute z-10 grid h-[90%] w-[98%] grid-cols-5 grid-rows-3 items-center justify-items-center gap-y-5 ">
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
    </div>
  );
}
