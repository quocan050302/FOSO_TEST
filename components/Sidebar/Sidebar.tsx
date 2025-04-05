import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Search } from 'lucide-react';
import Link from 'next/link';
import { navLinks } from '@/constant/navLinks';
import { Input } from '@/components/ui/input';

const Sidebar: React.FC = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="flex w-5 h-5 justify-start xl:hidden text-white"
          >
            <Menu className="" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-header text-white w-64 z-[1001]"
        >
          <div className="relative flex mt-6 w-full">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/70" />
            <Input
              type="search"
              placeholder="Tìm kiếm"
              className="bg-white/20 w-full border-none text-white pl-8 placeholder:text-white/70 focus-visible:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-4 mt-6">
            {navLinks.map((text, idx) => (
              <Link
                key={idx}
                href="/"
                className="hover:bg-white/10 transition-all px-3 py-2 rounded"
              >
                {text}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
