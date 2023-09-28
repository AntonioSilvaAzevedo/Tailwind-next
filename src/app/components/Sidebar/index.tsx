import { BarChart, Flag, Home, SearchIcon, SquareStack, Users } from "lucide-react";
import * as Input from "../Input";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { Profile } from "./Profile";
import { UsedSpaceWidget } from "./UsedSpaceWidget";

export function SideBar() {
  return (
    <aside className='flex flex-col gap-6 border-r border-zinc-200 px-5 py-8 '> 
      <Logo/>
      
      <Input.Root>
        <Input.Prefix>
        <SearchIcon className="h-5 w-5 text-zinc-500"/>
        </Input.Prefix>
        <Input.Control placeholder="Search"/>
      </Input.Root>
      
      
      <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home}/>
          <NavItem title="Dashboard" icon={BarChart}/>
          <NavItem title="Projects" icon={SquareStack}/>
          <NavItem title="Tasks" icon={Flag}/>
          <NavItem title="Users" icon={Users}/>
      </nav>

      <UsedSpaceWidget />    

      <div className="h-px bg-zinc-200"></div>   

      <Profile />
    </aside>
  )
}