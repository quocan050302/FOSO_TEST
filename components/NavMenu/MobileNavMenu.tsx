import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Bell, ChevronDown, HelpCircle, Settings } from 'lucide-react';
import Image from 'next/image';
import user from '../../public/assets/images/user.png';

const MobileNavMenu = () => {
  return (
    <div className="xl:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center space-x-1 cursor-pointer">
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <Image
                width={40}
                height={40}
                src={user}
                className="w-10 h-10 rounded-full"
                alt="user"
              />
            </div>
            <ChevronDown className="h-4 w-4 inline-block" />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56">
          <DropdownMenuItem>
            <Settings strokeWidth={1.5} className="h-4 w-4 mr-2" />
            Cài đặt
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="cursor-pointer mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="black"
              >
                <g opacity="0.9">
                  <path
                    d="M6.54163 18.9583H4.29163C2.07496 18.9583 1.04163 17.925 1.04163 15.7083V13.4583C1.04163 11.2417 2.07496 10.2083 4.29163 10.2083H6.54163C8.75829 10.2083 9.79163 11.2417 9.79163 13.4583V15.7083C9.79163 17.925 8.75829 18.9583 6.54163 18.9583ZM4.29163 11.4583C2.75829 11.4583 2.29163 11.925 2.29163 13.4583V15.7083C2.29163 17.2417 2.75829 17.7083 4.29163 17.7083H6.54163C8.07496 17.7083 8.54163 17.2417 8.54163 15.7083V13.4583C8.54163 11.925 8.07496 11.4583 6.54163 11.4583H4.29163Z"
                    fill="black"
                  />
                  <path
                    d="M12.5 18.9583C12.275 18.9583 12.0666 18.8333 11.9583 18.6417C11.85 18.45 11.85 18.2083 11.9666 18.0167L12.8416 16.5583C13.0166 16.2583 13.4 16.1667 13.7 16.3417C14 16.5167 14.0916 16.9 13.9166 17.2L13.6916 17.575C15.9916 17.0333 17.7166 14.9667 17.7166 12.5C17.7166 12.1583 18 11.875 18.3416 11.875C18.6833 11.875 18.9666 12.1583 18.9666 12.5C18.9583 16.0583 16.0583 18.9583 12.5 18.9583Z"
                    fill="black"
                  />
                  <path
                    d="M1.66663 8.125C1.32496 8.125 1.04163 7.84166 1.04163 7.5C1.04163 3.94166 3.94163 1.04166 7.49996 1.04166C7.72496 1.04166 7.93329 1.16666 8.04163 1.35833C8.14996 1.55 8.14996 1.79166 8.03329 1.98333L7.15829 3.45C6.98329 3.74166 6.59996 3.84166 6.29996 3.65833C6.00829 3.48333 5.90829 3.1 6.09163 2.8L6.31663 2.425C4.00829 2.96666 2.29163 5.03333 2.29163 7.5C2.29163 7.84166 2.00829 8.125 1.66663 8.125Z"
                    fill="black"
                  />
                  <path
                    d="M14.5834 9.79166C12.175 9.79166 10.2084 7.825 10.2084 5.41666C10.2084 3.00833 12.175 1.04166 14.5834 1.04166C16.9917 1.04166 18.9584 3.00833 18.9584 5.41666C18.9584 7.825 16.9917 9.79166 14.5834 9.79166ZM14.5834 2.29166C12.8584 2.29166 11.4584 3.69166 11.4584 5.41666C11.4584 7.14166 12.8584 8.54166 14.5834 8.54166C16.3084 8.54166 17.7084 7.14166 17.7084 5.41666C17.7084 3.69166 16.3084 2.29166 14.5834 2.29166Z"
                    fill="black"
                  />
                </g>
              </svg>
            </div>
            Tiện ích
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="cursor-pointer mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g opacity="0.9">
                  <path
                    d="M7.08329 15.8333H6.66663C3.33329 15.8333 1.66663 15 1.66663 10.8333V6.66666C1.66663 3.33333 3.33329 1.66666 6.66663 1.66666H13.3333C16.6666 1.66666 18.3333 3.33333 18.3333 6.66666V10.8333C18.3333 14.1667 16.6666 15.8333 13.3333 15.8333H12.9166C12.6583 15.8333 12.4083 15.9583 12.25 16.1667L11 17.8333C10.45 18.5667 9.54996 18.5667 8.99996 17.8333L7.74996 16.1667C7.61663 15.9833 7.30829 15.8333 7.08329 15.8333Z"
                    stroke="black"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.83337 6.66666H14.1667"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.83337 10.8333H10.8334"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
            Chat
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bell strokeWidth={1.5} className="h-4 w-4 mr-2" />
            Thông báo
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HelpCircle strokeWidth={1.5} className="h-4 w-4 mr-2" />
            Trợ giúp
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNavMenu;
