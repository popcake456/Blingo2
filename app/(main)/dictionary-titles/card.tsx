import { cn } from "@/lib/utils";

type CardProps = {
  title: string;
  id: number;
  onClick: (id: number) => void;
};

export const Card = ({
  title,
  id,
  onClick,
  
}: CardProps) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "flex h-full min-h-[80px] min-w-[200px] cursor-pointer flex-col items-center justify-between rounded-xl border-2 border-b-[4px] p-3 pb-6 hover:bg-black/5 active:border-b-2",
      )}
    >
      

      <p className="mt-3 text-center font-bold text-neutral-700">{title}</p>
    </div>
  );
};
