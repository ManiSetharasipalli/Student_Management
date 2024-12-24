// Header features page
import UnderDevelopment from "@/components/UnderDevelopment"
import { InboxStackIcon } from "@heroicons/react/24/outline"

export default function Features() {
  return (
    <div className="flex-1 flex md:mr-3 md:ml-5">
      <div className="w-full">
        <UnderDevelopment Icon={InboxStackIcon} text={"Features - Coming soon!"} />
      </div>
    </div>
  )
}

