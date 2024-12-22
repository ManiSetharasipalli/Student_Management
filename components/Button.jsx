import { PlusIcon } from "@heroicons/react/24/outline";

function Button(){
    return (
        <div className="flex gap-3 bg-gray-100 rounded-lg w-[197px] h-[36px] py-2 px-4 cursor-pointer">
            <PlusIcon className="h-5 w-5 text-gray-500"/>
            <p>Add New Student</p>
        </div>
    )
}

export default Button;