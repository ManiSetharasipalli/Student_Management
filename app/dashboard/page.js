// Sidear pages
import UnderDevelopment from "@/components/UnderDevelopment"
import { ChartBarSquareIcon } from "@heroicons/react/24/outline"

export default function Dashboard() {
  return (
    <div className="flex-1 flex md:mr-3 md:ml-5">
      <div className="w-full">
        <UnderDevelopment Icon={ChartBarSquareIcon} text={"Building your dashboard - Coming soon!"} />
      </div>
    </div>
  )
}

