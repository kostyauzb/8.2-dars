import BigButton from "./BigButton"

function Footer() {
  return (
    <>
      <div className="w-full bg-[#3A3054] h-[250px]">
        <div className="">
          <p className="text-white font-bold text-[40px] tracking-[-1px] text-center pt-[57px]">
            Boost your links today
          </p>
          <h1 className="text-center mt-8">
            <BigButton text="Get Started" />
          </h1>
        </div>
      </div>
      <footer className="bg-black h-[310px] pt-[30px]">
        <div className="container flex justify-between">
          <div>
            <img src="/assets/lightLogo.svg" alt="" />
          </div>
          <div className="flex gap-x-24 items-start">
            <div className="text-white grid gap-y-[10px]">
              <p className="font-bold tracking-[-0.25px] text-[16px] mb-3">
                Features
              </p>
              <p className="font-medium text-[#sBFBFBF] mb-3">
                Link Shortening
              </p>
              <p className="font-medium text-[#BFBFBF]">Branded Links</p>
              <p className="font-medium text-[#BFBFBF]">Analytics</p>
            </div>
            <div className="text-white grid gap-y-[10px]">
              <p className="font-bold tracking-[-0.25px] text-[16px] mb-3">
                Features
              </p>
              <p className="font-medium text-[#BFBFBF]">Link Shortening</p>
              <p className="font-medium text-[#BFBFBF]">Branded Links</p>
              <p className="font-medium text-[#BFBFBF]">Analytics</p>
            </div>
            <div className="text-white grid gap-y-[10px]">
              <p className="font-bold tracking-[-0.25px] text-[16px] mb-3">
                Features
              </p>
              <p className="font-medium text-[#BFBFBF]">Link Shortening</p>
              <p className="font-medium text-[#BFBFBF]">Branded Links</p>
              <p className="font-medium text-[#BFBFBF]">Analytics</p>
            </div>
            <div className="flex gap-x-6">
              <img src="/assets/facebook.svg" alt="" />
              <img src="/assets/twitter.svg" alt="" />
              <img src="/assets/pinterest.svg" alt="" />
              <img src="/assets/instagram.svg" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
