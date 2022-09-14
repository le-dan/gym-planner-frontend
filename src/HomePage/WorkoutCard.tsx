export default function WorkoutCard({ workoutName }: { workoutName: string }) {
  return (
    <div className=" flex h-[95%] w-[75%] items-center justify-center rounded-3xl bg-zinc-800 shadow-2xl">
      <div className="select-none font-serif text-3xl text-white">
        {workoutName}
      </div>
      <div></div>
    </div>
  );
}
