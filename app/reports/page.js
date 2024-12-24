// SideBarPages

import UnderDevelopment from "@/components/UnderDevelopment"
import { ChartPieIcon } from "@heroicons/react/24/outline"

export default function Reports() {
  return (
    <div className="flex-1 flex md:mr-3 md:ml-5">
      <div className="w-full">
        <UnderDevelopment Icon={ChartPieIcon} text={"Developing reports - Coming soon!"} />
      </div>
    </div>
  )
}

