// SideBar Pages
import UnderDevelopment from "@/components/UnderDevelopment"
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline"

export default function Settings() {
  return (
    <div className="flex-1 flex md:mr-3 md:ml-5">
      <div className="w-full">
        <UnderDevelopment Icon={WrenchScrewdriverIcon} text={"Configuring settings - Coming soon!"} />
      </div>
    </div>
  )
}

