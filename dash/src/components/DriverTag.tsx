import clsx from "clsx";

type Props = {
	teamColor: string;
	short: string;
	position?: number;
	className?: string;
};

export default function DriverTag({ position, teamColor, short, className }: Props) {
	return (
		<div
			className={clsx("flex w-fit items-center justify-between gap-0.5 rounded-lg px-1 py-1 font-black", className)}
			style={{ backgroundColor: `#${teamColor}` }}
		>
			{position && <p className="px-1 text-xl leading-none">{position}</p>}

			<div className="flex h-min w-min items-center justify-center rounded-md bg-white px-1">
				<p style={{ color: `#${teamColor}` }}>{short}</p>
			</div>
		</div>
	);
}
