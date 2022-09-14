export default function WorkoutCard({ workoutName }: { workoutName: string }) {
  return (
    <div className=" flex h-[90%] w-[70%] items-center justify-center rounded-3xl bg-black shadow-2xl">
      <div className="select-none font-serif text-3xl text-white">
        {workoutName}
      </div>
      <div></div>
    </div>
  );
}
