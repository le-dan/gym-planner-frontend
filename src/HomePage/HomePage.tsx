import { motion } from "framer-motion";
import SearchBox from "../components/SearchBox";
import TitleDirectory from "./TitleDirectory";
import WorkoutCard from "./WorkoutCard";
import WorkoutContainer from "./WorkoutContainer";

export default function HomePage({ setSearch }: { setSearch: any }) {
  return (
    <div className="fixed h-full w-full bg-white">
      <TitleDirectory />
      {/* Space divider for workout grid */}
      <WorkoutContainer />
    </div>
  );
}
