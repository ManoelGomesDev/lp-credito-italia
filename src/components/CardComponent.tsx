import { IoCheckmarkCircle } from "react-icons/io5";


interface CardComponentProps {
    content: string
}


export const CardComponent = ({content}:CardComponentProps) => {
    return (
        <div className="bg-blue-400 px-4 py-2 rounded-2xl flex items-center gap-2">
            <div>

            <IoCheckmarkCircle color="white" size={32} />
            </div>
            <p className="text-white md:text-2xl">{content}</p>
        </div>
    )
}