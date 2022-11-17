import { motion } from "framer-motion";
import Exercise from "../../../interfaces/Exercise";

export default function ExerciseCard({ Exercise }: { Exercise: Exercise }) {
	return (
		// Exercise Card
		<motion.div
			layout
			className={
				"h-[15%] w-[30%] overflow-hidden rounded-md border-[2px] border-black p-2"
			}
		>
			{/*Container for Information */}
			<div className="flex h-full w-full flex-col items-center justify-start gap-1">
				<div className="text-lg underline">
					{Exercise.exerciseName.toUpperCase()}
				</div>
				<div className="flex h-full w-full items-center justify-center gap-3">
					<div className="">
						{Exercise.repetitions + " repetitions"}
					</div>
					<div className="">{Exercise.sets + " sets"}</div>
				</div>
			</div>
		</motion.div>
	);
}
