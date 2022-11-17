import { motion } from "framer-motion";
import { useState } from "react";
import Workout from "../../../interfaces/Workout";
import AddExerciseCard from "./AddExerciseCard";
import ExerciseCard from "./ExerciseCard";

export default function ExerciseListCard({ Workout }: { Workout: Workout }) {
	// Create a list of exercises from user
	const exerciseList = Workout?.exercises?.map((exercise, index) => (
		<ExerciseCard key={index} Exercise={exercise} />
	));

	// Trigger for add exercise card
	const [triggerNewExercise, setTriggerNewExercise] = useState(false);

	// // Use effect for trigger
	// useEffect(() => {
	//   if (triggerNewExercise) {
	//     setTriggerNewExercise(false);
	//   }
	// }, [triggerNewExercise]);

	// Create a new exercise card
	return (
		/* Pop Up Container Card*/
		<motion.div className="loginCard z-40 flex h-[85%] w-[50%] flex-col items-center gap-3 bg-zinc-100 pt-[0.4rem] opacity-100">
			<div className="flex w-full justify-center">
				<div className="rounded-xl bg-stone-900 px-5 shadow-sm">
					<div className="select-none text-[3rem] text-white">
						{Workout.workoutName}
					</div>
				</div>
			</div>
			{/* Exercise List Container */}
			<div className="flex h-[90%] w-[100%] flex-col gap-4 rounded-3xl bg-zinc-50 p-6 shadow-2xl">
				{/* Exercise List */}
				{exerciseList}
				{/* Add Exercise Card */}
				<div className="flex h-[2em] w-[50%] justify-center">
					<AddExerciseCard
						setTrigger={setTriggerNewExercise}
						trigger={triggerNewExercise}
					/>
				</div>
			</div>
		</motion.div>
	);
}
