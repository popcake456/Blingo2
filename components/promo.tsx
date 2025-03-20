import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const Promo = () => {
  return (
    <div className="space-y-4 rounded-xl border-2 p-4">
      <div className="space-y-2">
        <div className="flex items-center gap-x-2">
          <div className="bg-white p-1 rounded">
            <Image src="/primiumshield.svg" alt="Pro" height={26} width={26} />
          </div>

          <h3 className="text-lg font-bold text-white">Upgrade to Pro</h3>
        </div>

        <p className="text-neutral-200">Get unlimited Shields and more</p>
      </div>

      <Button variant="super" className="w-full" size="lg" asChild>
        <Link href="/shop">Upgrade Today</Link>
      </Button>
    </div>
  );
};