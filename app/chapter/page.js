// Sidebar pages
import UnderDevelopment from "@/components/UnderDevelopment"
import { NewspaperIcon } from "@heroicons/react/24/outline"

export default function Chapter() {
  return (
    <div className="flex-1 flex md:mr-3 md:ml-5">
      <div className="w-full">
        <UnderDevelopment Icon={NewspaperIcon} text={"Building chapter section - Coming soon!"} />
      </div>
    </div>
  )
}
