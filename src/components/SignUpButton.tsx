function SignUpButton({text}: {text: string}) {
  return (
    <button className="px-6 py-2 bg-[#2BD0D0] font-bold text-[15px] text-[#FFFFFF] rounded-3xl hover:bg-[#9AE3E3] transition">
      {text}
    </button>
  )
}

export default SignUpButton
