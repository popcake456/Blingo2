import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    
     
    
    <div className="sticky top-0 mb-5 flex items-center justify-between border-b-2 bg-white pb-3 text-neutral-400 lg:z-50 lg:mt-[-28px] lg:pt-[28px]">
       <Link href="/courses">
        <Button size="sm" variant="ghost">
          <ArrowLeft className="h-8 w-8 stroke-4 text-neutral-500  " />
        </Button>
      </Link>

      <h1 className="text-lg font-bold">{title}</h1>
      <div aria-hidden />
    </div>
  );
};
