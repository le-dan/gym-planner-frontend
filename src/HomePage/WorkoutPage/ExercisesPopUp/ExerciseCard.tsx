export default function ExerciseCard({
  ExerciseName,
}: {
  ExerciseName: string;
}) {
  return (
    <div className="flex h-[10%] w-[85%] items-center justify-center rounded-3xl border-[1.5px]">
      <div className="select-none">{ExerciseName}</div>
    </div>
  );
}
