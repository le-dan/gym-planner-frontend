import { motion } from "framer-motion";
import Exercise from "../../../interfaces/Exercise";

export default function ExerciseCard({ Exercise }: { Exercise: Exercise }) {
	return (
		// Exercise Card
		<motion.div
			layout
			className={
				"h-[80%] w-[90%] overflow-hidden rounded-md border-[2px] border-rose-600 p-2"
			}
		>
			{/*Container for Information */}
			<div className="flex h-full w-full flex-col items-center justify-start gap-1">
				<div className="text-xl font-semibold underline">
					{Exercise.exerciseName.toUpperCase()}
				</div>
				<div className="flex h-full w-full flex-col items-center justify-center">
					<div className="italic">
						{"repetitions: " + Exercise.repetitions}
					</div>
					<div className="italic">{"sets: " + Exercise.sets}</div>
				</div>
			</div>
		</motion.div>
	);
}
