import WorkoutCard from "./WorkoutCard";

export default function WorkoutContainer() {
  return (
    <div className="absolute bottom-0 z-0 flex h-[85%] w-full items-center justify-center">
      <div className="absolute z-10 grid h-[95%] w-[95%] grid-cols-3 grid-rows-2 items-center justify-items-center rounded-xl bg-slate-50 shadow-2xl">
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
      </div>
    </div>
  );
}
