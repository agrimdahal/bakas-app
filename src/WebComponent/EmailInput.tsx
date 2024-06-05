import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MdOutlineEmail } from "react-icons/md"

export function InputWithButton() {
  return (
    <div className="lg:mt-[20px] grid gap-5 flex-col">
        <h1 className=" text-gray-800 font-bold text-2xl">Subscribe to Our Newsletter!</h1>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <span className=" border w-12 h-10 flex justify-center items-center " >
        <MdOutlineEmail type="submit"  />
        </span>
      </div>
    </div>
  )
}
