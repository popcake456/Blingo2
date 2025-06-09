import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { InfinityIcon, Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { courses } from "@/db/schema";

type UserProgressProps = {
  activeCourse: typeof courses.$inferSelect;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: UserProgressProps) => {
  return (
    <div className="flex w-full items-center justify-between gap-x-2">
      <Link href="/courses">
        <Button variant="ghost">
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md border border-black"
            width={32}
            height={32}
          />
        </Button>
      </Link>

      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image
            src="/points.svg"
            height={28}
            width={28}
            alt="Points"
            className="mr-2"
          />
          {points}
        </Button>
      </Link>

      <Link href="/shop">
        <Button variant="default" className="text-green-500">
          <Image
            src="/Shieldsvg.svg"
            height={22}
            width={22}
            alt="Hearts"
            className="mr-2"
          />
          {hasActiveSubscription ? (
            <InfinityIcon className="stroke-3 h-4 w-4" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
      <div className="p-4">
              <ClerkLoading>
                <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
              </ClerkLoading>
      
              <ClerkLoaded>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: { userButtonPopoverCard: { pointerEvents: "initial" } },
                  }}
                />
              </ClerkLoaded>
            </div>
    </div>
  );
};
