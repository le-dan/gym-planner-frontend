import { useState, useEffect } from "react";
import InputCard from "../components/InputCard";
import PopUp from "../components/PopUp";
import TitleDirectory from "./TitleDirectory";
import WorkoutContainer from "./WorkoutContainer";
import WorkoutPage from "./WorkoutPage/WorkoutPage";

export default function HomePage({
  setSearch,
  user,
}: {
  setSearch: any;
  user: any;
}) {
  return (
    <div className="fixed h-full w-full bg-white">
      <TitleDirectory />
      {/* Space divider for workout grid */}
      <WorkoutPage user={user} />
    </div>
  );
}
