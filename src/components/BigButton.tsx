function BigButton({text}: {text: string}) {
  return (
    <button className="px-10 py-[14px] bg-[#2BD0D0] font-bold text-[15px] text-[#FFFFFF] rounded-3xl hover:bg-[#9AE3E3] transition">
      {text}
    </button>
  )
}

export default BigButton
