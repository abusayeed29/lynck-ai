import Image from "next/image"

const Loader = () => {
  return (
    <div className=" h-full flex flex-col items-center justify-center">
        <div className="w-10 h-10 relative animate-spin">
            <Image
            alt="logo"
            fill
            src="/logo.png"
            />

        </div>
        <p className=" text-sm text-muted-foreground"> Powerz AI is thinking ...</p>

    </div>
  )
}

export default Loader