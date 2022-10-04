import User from "../interfaces/User";
import TitleDirectory from "./TitleDirectory";
import WorkoutPage from "./WorkoutPage/WorkoutPage";

export default function HomePage({ user }: { user: User }) {
  return (
    <div className="fixed h-full w-full bg-stone-900">
      <TitleDirectory />
      {/* Space divider for workout grid */}
      <WorkoutPage user={user} />
    </div>
  );
}
