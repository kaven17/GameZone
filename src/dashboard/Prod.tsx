
import { AppSidebar } from "../components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import { BackgroundGradient } from "../components/ui/background-gradient";



export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="transition-all duration-300 ease-in-out data-[state=closed]:ml-0"  id="dash">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 relative">
          <div className=" absolute not-only:relative grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video relative rounded-xl bg-muted/50 " >
            <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-black dark:bg-zinc-900">
              <div className="flex flex-col h-full">
            
                <div className="aspect-square w-full relative">
                  <img
                    src="/super.jpg"
                    alt="Air Jordan 4"
                    
                    className="object-cover h-full rounded-2xl"
                    
                  />
                </div>
                
               
                <div className="flex-1 mt-4">
                  <p className="text-base sm:text-xl text-white mb-2 dark:text-neutral-200">
                    NVIDIA GeForce RTX 4090
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  A strong 1440p GPU with 16GB GDDR6 VRAM, competing with the RTX 4070. It offers FSR 2.0 for enhanced performance in demanding games. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsam laudantium nihil quisquam unde, neque fugit similique recusandae? Sapiente animi saepe quas alias illum ut vitae fugiat recusandae ab accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aliquam. Dolores atque alias nulla optio, voluptatum molestias quia consequuntur fuga laborum placeat quod architecto eveniet
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      $100
                    </span>
                  </button>
                </div>
              </div>
            </BackgroundGradient>
            </div>
              <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-black dark:bg-zinc-900">
              <div className="flex flex-col h-full">
            
                <div className="aspect-square w-full relative">
                  <img
                    src="/gc-2.webp"
                    alt="Air Jordan 4"
                    
                    className="object-cover h-full rounded-2xl"
                  />
                </div>
                
               
                <div className="flex-1 mt-4">
                  <p className="text-base sm:text-xl text-white mb-2 dark:text-neutral-200">
                  NVIDIA GeForce RTX 4080 SUPER
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  A strong 1440p GPU with 16GB GDDR6 VRAM, competing with the RTX 4070. It offers FSR 2.0 for enhanced performance in demanding games. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsam laudantium nihil quisquam unde, neque fugit similique recusandae? Sapiente animi saepe quas alias illum ut vitae fugiat recusandae ab accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aliquam. Dolores atque alias nulla optio, voluptatum molestias quia consequuntur fuga laborum placeat quod architecto eveniet
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      $100
                    </span>
                  </button>
                </div>
              </div>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-black dark:bg-zinc-900">
              <div className="flex flex-col h-full">
            
                <div className="aspect-square w-full relative">
                  <img
                    src="/gc-3.webp"
                    alt="Air Jordan 4"
                    
                    className="object-cover h-full rounded-2xl"
                  />
                </div>
                
               
                <div className="flex-1 mt-4">
                  <p className="text-base sm:text-xl text-white mb-2 dark:text-neutral-200">
                  AMD Radeon RX 7900 XTX
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  A strong 1440p GPU with 16GB GDDR6 VRAM, competing with the RTX 4070. It offers FSR 2.0 for enhanced performance in demanding games. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsam laudantium nihil quisquam unde, neque fugit similique recusandae? Sapiente animi saepe quas alias illum ut vitae fugiat recusandae ab accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aliquam. Dolores atque alias nulla optio, voluptatum molestias quia consequuntur fuga laborum placeat quod architecto eveniet
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      $100
                    </span>
                  </button>
                </div>
              </div>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-black dark:bg-zinc-900">
              <div className="flex flex-col h-full">
            
                <div className="aspect-square w-full relative">
                  <img
                    src="/4070.webp"
                    alt="Air Jordan 4"
                    
                    className="object-cover h-full rounded-2xl"
                  />
                </div>
                
               
                <div className="flex-1 mt-4">
                  <p className="text-base sm:text-xl text-white mb-2 dark:text-neutral-200">
                  NVIDIA GeForce RTX 4070 Ti
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  A strong 1440p GPU with 16GB GDDR6 VRAM, competing with the RTX 4070. It offers FSR 2.0 for enhanced performance in demanding games. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsam laudantium nihil quisquam unde, neque fugit similique recusandae? Sapiente animi saepe quas alias illum ut vitae fugiat recusandae ab accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aliquam. Dolores atque alias nulla optio, voluptatum molestias quia consequuntur fuga laborum placeat quod architecto eveniet
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      $100
                    </span>
                  </button>
                </div>
              </div>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-black dark:bg-zinc-900">
              <div className="flex flex-col h-full">
            
                <div className="aspect-square w-full relative">
                  <img
                    src="/gc-1.webp"
                    alt="Air Jordan 4"
                    
                    className="object-cover h-full rounded-2xl"
                  />
                </div>
                
               
                <div className="flex-1 mt-4">
                  <p className="text-base sm:text-xl text-white mb-2 dark:text-neutral-200">
                  AMD Radeon RX 7800 XT
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  A strong 1440p GPU with 16GB GDDR6 VRAM, competing with the RTX 4070. It offers FSR 2.0 for enhanced performance in demanding games. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsam laudantium nihil quisquam unde, neque fugit similique recusandae? Sapiente animi saepe quas alias illum ut vitae fugiat recusandae ab accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aliquam. Dolores atque alias nulla optio, voluptatum molestias quia consequuntur fuga laborum placeat quod architecto eveniet
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      $100
                    </span>
                  </button>
                </div>
              </div>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-black dark:bg-zinc-900">
              <div className="flex flex-col h-full">
            
                <div className="aspect-square w-full relative">
                  <img
                    src="/gc-1.webp"
                    alt="Air Jordan 4"
                   
                    className="object-cover h-full rounded-2xl"
                  />
                </div>
                
               
                <div className="flex-1 mt-4">
                  <p className="text-base sm:text-xl text-white mb-2 dark:text-neutral-200">
                  NVIDIA GeForce RTX 4060 Ti
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  A strong 1440p GPU with 16GB GDDR6 VRAM, competing with the RTX 4070. It offers FSR 2.0 for enhanced performance in demanding games. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsam laudantium nihil quisquam unde, neque fugit similique recusandae? Sapiente animi saepe quas alias illum ut vitae fugiat recusandae ab accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aliquam. Dolores atque alias nulla optio, voluptatum molestias quia consequuntur fuga laborum placeat quod architecto eveniet
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      $100
                    </span>
                  </button>
                </div>
              </div>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-black dark:bg-zinc-900">
              <div className="flex flex-col h-full">
            
                <div className="aspect-square w-full relative">
                  <img
                    src="/gc-3.webp"
                    alt="Air Jordan 4"
                  
                    className="object-cover h-full rounded-2xl"
                  />
                </div>
                
               
                <div className="flex-1 mt-4">
                  <p className="text-base sm:text-xl text-white mb-2 dark:text-neutral-200">
                    Radeon 40
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  A strong 1440p GPU with 16GB GDDR6 VRAM, competing with the RTX 4070. It offers FSR 2.0 for enhanced performance in demanding games. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsam laudantium nihil quisquam unde, neque fugit similique recusandae? Sapiente animi saepe quas alias illum ut vitae fugiat recusandae ab accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aliquam. Dolores atque alias nulla optio, voluptatum molestias quia consequuntur fuga laborum placeat quod architecto eveniet
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      $100
                    </span>
                  </button>
                </div>
              </div>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-black dark:bg-zinc-900">
              <div className="flex flex-col h-full">
            
                <div className="aspect-square w-full relative">
                  <img
                    src="/gc-2.webp"
                    alt="Air Jordan 4"
                    
                    className="object-cover h-full rounded-2xl"
                  />
                </div>
                
               
                <div className="flex-1 mt-4">
                  <p className="text-base sm:text-xl text-white mb-2 dark:text-neutral-200">
                  AMD Radeon RX 7700 XT
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  A strong 1440p GPU with 16GB GDDR6 VRAM, competing with the RTX 4070. It offers FSR 2.0 for enhanced performance in demanding games. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsam laudantium nihil quisquam unde, neque fugit similique recusandae? Sapiente animi saepe quas alias illum ut vitae fugiat recusandae ab accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aliquam. Dolores atque alias nulla optio, voluptatum molestias quia consequuntur fuga laborum placeat quod architecto eveniet lorem10
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      $100
                    </span>
                  </button>
                </div>
              </div>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-black dark:bg-zinc-900">
              <div className="flex flex-col h-full">
            
                <div className="aspect-square w-full relative">
                  <img
                    src="/gc-3.webp"
                    alt="Air Jordan 4"
                   
                    className="object-cover h-full rounded-2xl"
                  />
                </div>
                
               
                <div className="flex-1 mt-4">
                  <p className="text-base sm:text-xl text-white mb-2 dark:text-neutral-200">
                  NVIDIA GeForce RTX 3050 (8GB & 6GB Models)
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  A strong 1440p GPU with 16GB GDDR6 VRAM, competing with the RTX 4070. It offers FSR 2.0 for enhanced performance in demanding games. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsam laudantium nihil quisquam unde, neque fugit similique recusandae? Sapiente animi saepe quas alias illum ut vitae fugiat recusandae ab accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aliquam. Dolores atque alias nulla optio, voluptatum molestias quia consequuntur fuga laborum placeat quod architecto eveniet
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      $100
                    </span>
                  </button>
                </div>
              </div>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-black dark:bg-zinc-900">
              <div className="flex flex-col h-full">
            
                <div className="aspect-square w-full relative">
                  <img
                    src="/gc-3.webp"
                    alt="Air Jordan 4"
                    
                    className="object-cover h-full rounded-2xl"
                  />
                </div>
                
               
                <div className="flex-1 mt-4">
                  <p className="text-base sm:text-xl text-white mb-2 dark:text-neutral-200">
                  Intel Arc A770
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  A strong 1440p GPU with 16GB GDDR6 VRAM, competing with the RTX 4070. It offers FSR 2.0 for enhanced performance in demanding games. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsam laudantium nihil quisquam unde, neque fugit similique recusandae? Sapiente animi saepe quas alias illum ut vitae fugiat recusandae ab accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aliquam. Dolores atque alias nulla optio, voluptatum molestias quia consequuntur fuga laborum placeat quod architecto eveniet
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      $100
                    </span>
                  </button>
                </div>
              </div>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-black dark:bg-zinc-900">
              <div className="flex flex-col h-full">
            
                <div className="aspect-square w-full relative">
                  <img
                    src="/gc-3.webp"
                    alt="Air Jordan 4"
                   
                    className="object-cover h-full rounded-2xl"
                  />
                </div>
                
               
                <div className="flex-1 mt-4">
                  <p className="text-base sm:text-xl text-white mb-2 dark:text-neutral-200">
                  Intel Arc A770
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  A strong 1440p GPU with 16GB GDDR6 VRAM, competing with the RTX 4070. It offers FSR 2.0 for enhanced performance in demanding games. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsam laudantium nihil quisquam unde, neque fugit similique recusandae? Sapiente animi saepe quas alias illum ut vitae fugiat recusandae ab accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aliquam. Dolores atque alias nulla optio, voluptatum molestias quia consequuntur fuga laborum placeat quod architecto eveniet
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      $100
                    </span>
                  </button>
                </div>
              </div>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-black dark:bg-zinc-900">
              <div className="flex flex-col h-full">
            
                <div className="aspect-square w-full relative">
                  <img
                    src="/gc-3.webp"
                    alt="Air Jordan 4"
                   
                    className="object-cover h-full rounded-2xl"
                  />
                </div>
                
               
                <div className="flex-1 mt-4">
                  <p className="text-base sm:text-xl text-white mb-2 dark:text-neutral-200">
                  Intel Arc A770
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  A strong 1440p GPU with 16GB GDDR6 VRAM, competing with the RTX 4070. It offers FSR 2.0 for enhanced performance in demanding games. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsam laudantium nihil quisquam unde, neque fugit similique recusandae? Sapiente animi saepe quas alias illum ut vitae fugiat recusandae ab accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aliquam. Dolores atque alias nulla optio, voluptatum molestias quia consequuntur fuga laborum placeat quod architecto eveniet
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      $100
                    </span>
                  </button>
                </div>
              </div>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-black dark:bg-zinc-900">
              <div className="flex flex-col h-full">
            
                <div className="aspect-square w-full relative">
                  <img
                    src="/gc-3.webp"
                    alt="Air Jordan 4"
                    
                    className="object-cover h-full rounded-2xl"
                  />
                </div>
                
               
                <div className="flex-1 mt-4">
                  <p className="text-base sm:text-xl text-white mb-2 dark:text-neutral-200">
                  Intel Arc A770
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  A strong 1440p GPU with 16GB GDDR6 VRAM, competing with the RTX 4070. It offers FSR 2.0 for enhanced performance in demanding games. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsam laudantium nihil quisquam unde, neque fugit similique recusandae? Sapiente animi saepe quas alias illum ut vitae fugiat recusandae ab accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aliquam. Dolores atque alias nulla optio, voluptatum molestias quia consequuntur fuga laborum placeat quod architecto eveniet
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      $100
                    </span>
                  </button>
                </div>
              </div>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-black dark:bg-zinc-900">
              <div className="flex flex-col h-full">
            
                <div className="aspect-square w-full relative">
                  <img
                    src="/gc-3.webp"
                    alt="Air Jordan 4"
                
                    className="object-cover h-full rounded-2xl"
                  />
                </div>
                
               
                <div className="flex-1 mt-4">
                  <p className="text-base sm:text-xl text-white mb-2 dark:text-neutral-200">
                  Intel Arc A770
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  A strong 1440p GPU with 16GB GDDR6 VRAM, competing with the RTX 4070. It offers FSR 2.0 for enhanced performance in demanding games. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsam laudantium nihil quisquam unde, neque fugit similique recusandae? Sapiente animi saepe quas alias illum ut vitae fugiat recusandae ab accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aliquam. Dolores atque alias nulla optio, voluptatum molestias quia consequuntur fuga laborum placeat quod architecto eveniet
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      $100
                    </span>
                  </button>
                </div>
              </div>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-black dark:bg-zinc-900">
              <div className="flex flex-col h-full">
            
                <div className="aspect-square w-full relative">
                  <img
                    src="/gc-3.webp"
                    alt="Air Jordan 4"
                  
                    className="object-cover h-full rounded-2xl"
                  />
                </div>
                
               
                <div className="flex-1 mt-4">
                  <p className="text-base sm:text-xl text-white mb-2 dark:text-neutral-200">
                  Intel Arc A770
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  A strong 1440p GPU with 16GB GDDR6 VRAM, competing with the RTX 4070. It offers FSR 2.0 for enhanced performance in demanding games. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsam laudantium nihil quisquam unde, neque fugit similique recusandae? Sapiente animi saepe quas alias illum ut vitae fugiat recusandae ab accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aliquam. Dolores atque alias nulla optio, voluptatum molestias quia consequuntur fuga laborum placeat quod architecto eveniet
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      $100
                    </span>
                  </button>
                </div>
              </div>
            </BackgroundGradient>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

