interface PreparationStepProps {
    index: number;
    description: string;
}

export default function PreparationStep({index, description}: PreparationStepProps) {
    return (
        <li className="flex gap-3 items-start">
            <span className="flex items-center justify-center bg-orange-100 w-6 h-6 rounded-full text-orange-500 font-bold text-xs shrink-0 mt-0.5">{index}</span>
            <p>{description}</p>
        </li>
    )
}