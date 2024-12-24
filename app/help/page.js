// SideBar pages
import UnderDevelopment from "@/components/UnderDevelopment"
import { UserGroupIcon } from "@heroicons/react/24/outline"

export default function Help() {
  return (
    <div className="flex-1 flex md:mr-3 md:ml-5">
      <div className="w-full">
        <UnderDevelopment Icon={UserGroupIcon} text={"Creating help center - Coming soon!"} />
      </div>
    </div>
  )
}

