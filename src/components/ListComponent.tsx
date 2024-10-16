interface ListComponentProps {
  content: string;
  number: number;
}

export const ListComponent = ({ content, number }: ListComponentProps) => {
  return (
    <div className="grid grid-cols-5 gap-2 md:gap-8">
      <div className="col-span-4">
        <p className="text-white md:text-2xl ">{content}</p>
      </div>
      <div>
        <span className="text-blue-300 font-bold bg-white w-8 h-8 rounded-full flex justify-center items-center ">
          {number}
        </span>
      </div>
    </div>
  );
};
