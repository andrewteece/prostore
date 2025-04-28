//import { ShoppingCart, UserIcon } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

//import { Button } from "@/components/ui/button";
import { APP_NAME } from '@/lib/constants/index';
import Menu from './menu';

import ModeToggle from './mode-toggle';
import CategoriesDrawer from './categories-drawer';
import Search from './search';

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex-between'>
        <div className='flex-start'>
          <CategoriesDrawer />
          <Link href='/' className='flex-start ml-4'>
            <Image
              priority={true}
              src='/images/logo.svg'
              width={48}
              height={48}
              alt={`${APP_NAME} logo`}
            />
            <span className='hidden lg:block font-bold text-2xl ml-3'>
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className='hidden md:block'>
          <Search />
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
