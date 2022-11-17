import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AddExerciseCard({
	setTrigger,
	trigger,
}: {
	setTrigger: any;
	trigger: boolean;
}) {
	// Query Use State
	const [query, setQuery] = useState("");
	// Name of new exercise
	const [newExerciseName, setNewExerciseName] = useState("");
	// Repetitions of new exercise
	const [newExerciseReps, setNewExerciseReps] = useState("");
	// Sets of new exercise
	const [newExerciseSets, setNewExerciseSets] = useState("");
	// Open Rep and Set Box Trigger
	const [expandCard, setExpandCard] = useState(false);

	// When enter key is pressed, set search query
	useEffect(() => {
		const onKeyDown = (e: any) => {
			if (e.key === "Enter") {
				setNewExerciseName(query);
				setTrigger(false);
			}
		};
		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, [setNewExerciseName, query, setTrigger]);

	useEffect(() => {
		console.log(newExerciseName);
	}, [newExerciseName]);

	const plusButtonVariant = {
		open: {
			opacity: 1,
			rotate: -90,
			transition: { opacity: { duration: 3 } },
		},
		closed: { opacity: 0, rotate: 90 },
	};

	const addExerciseVariant = {
		open: { opacity: 1, transition: { delay: 0.75 } },
		closed: { opacity: 0 },
	};

	return (
		<motion.div
			layout="size"
			variants={{
				open: {
					height: 70,
					width: "95%",
				},
				closed: {
					height: 30,
					width: 70,
				},
			}}
			initial={"closed"}
			animate={trigger ? "open" : "closed"}
			transition={{
				height: { duration: 0.2, delay: trigger ? 0.2 : 0 },
				width: { duration: 0.2, delay: trigger ? 0 : 0.2 },
				stiffness: 1000,
			}}
			onClick={() => setTrigger(!trigger)}
			className={`${
				trigger
					? "border-[2px] border-green-500"
					: "border-[2px] border-black"
			}  flex cursor-pointer flex-col items-center justify-center  rounded-3xl transition duration-[1s]`}
		>
			{/* + button */}
			<AnimatePresence>
				{!trigger && (
					<motion.div
						variants={plusButtonVariant}
						animate={"open"}
						exit={"closed"}
						transition={{ rotate: { duration: 0.5 } }}
						className="absolute select-none text-lg"
					>
						+
					</motion.div>
				)}
			</AnimatePresence>
			{/* Search Box */}
			<AnimatePresence>
				{trigger && (
					<motion.input
						autoFocus
						variants={addExerciseVariant}
						initial={"closed"}
						animate={trigger ? "open" : "closed"}
						exit={"closed"}
						type="text"
						placeholder="Exercise Name"
						onChange={(event) => setQuery(event.target.value)}
						className="focus searchBox z-50 h-1/2 w-[80%] text-center"
					/>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
