import { FormEvent } from "react";
import BigButton from "./BigButton";
import { toast } from "react-toastify";

function MainSection() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newForm = new FormData(e.currentTarget);
    const text = newForm.get("text") as string;

    if (!text.trim()) {
      toast.error("Input field is empty");
      return;
    }

    console.log(text);
  };

  return (
    <>
      <section className="flex max-w-full w-full items-center mt-20">
        <div className="max-w-[1130px] mr-[100px] ml-[420px]">
          <h1 className="font-bold text-[80px] tracking-[-2px] max-w-[570px] w-full">
            More than just shorter links
          </h1>
          <p className="font-medium mb-9 text-[22px] tracking-[0.15px] text-[#9E9AA8] w-[570px]">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <BigButton text="Get Started" />
        </div>
        <img className="mb-40" src="/assets/MainSectionImage.svg" alt="" />
      </section>
      <div className="bg-[url('/assets/inputBg.png')] absolute left-0 right-0 top-[735px] h-[155px] bg-no-repeat container rounded-[10px]">
        <div className="w-full gap-x-6 pr-[56px] pl-[35px] justify-between flex">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="w-full flex gap-x-9"
          >
            <input
              className="h-16 rounded-[10px] max-w-3xl w-full px-4 font-medium text-[15px]"
              type="text"
              placeholder="Ex: example.com"
              name="text"
            />
            <button className="py-4 px-10 bg-[#2BD0D0] text-[#FFFFFF] font-bold gap-x-2 text-xl rounded-[10px] flex hover:bg-[#9AE3E3] transition">
              Shorten<span>It!</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default MainSection;
