import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";

const Feed = () => {
    return (
        <div className="text-white flex-grow border-l border-r border-[#242424] max-w-2xl sm:ml-[73px] xl:ml-[370px]">
            <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 border-b border-[#242424]">
                <h2 className="text-lg sm:text-[1.1rem] font-bold">Home</h2>
                <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
                    <SparklesIcon className="h-5 text-white" />
                </div>
            </div>
            
            <Input />
        </div>
    )
}

export default Feed;
