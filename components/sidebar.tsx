import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { SidebarItem } from "./sidebar-item";

type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div
      className={cn(
        "left-0 top-0 flex h-full flex-col border-r-2 border-black px-4 lg:fixed lg:w-[256px] bg-[#213741]",
        className
      )}
    >
      <Link href="/learn">
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8  ">
          <div className="bg-[#6e7f86] p-1 rounded-full">
          <Image src="/mascot.svg" alt="Mascot" height={40} width={40} />
          </div>

          <h1 className="text-2xl font-extrabold tracking-wide text-[#cec9c1]">
            BLingo
          </h1>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-y-2 ">
        <SidebarItem label="Learn" 
        href="/learn" 
        iconSrc="/learn.svg" />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem 
          label="Earn" 
          href="/quests" 
          iconSrc="/points.svg" 
          />
        <SidebarItem 
          label="Shop" 
          href="/shop" 
          iconSrc="/shop.svg" 
          />
        <SidebarItem 
          label="Dictionary" 
          href="/dictionary-titles" 
          iconSrc="/dictionary_icon2.svg" 
          />
      </div>
 </div>
  );
};
