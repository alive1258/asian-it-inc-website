"use client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useCreateContactUsMutation } from "@/redux/api/homeApi";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [createContactUs, { isLoading }] = useCreateContactUsMutation();

  const onSubmit = async (data) => {
    try {
      const res = await createContactUs(data).unwrap();
      if (res?.success) {
        reset();
        toast.success("Successfully Sent Message!", {
          position: toast.TOP_RIGHT,
        });
      } else {
        toast.error(res?.message || "Something Went wrong!", {
          position: toast.TOP_RIGHT,
        });
      }
    } catch (error) {
      toast.error(error?.data || "Something Went wrong!", {
        position: toast.TOP_RIGHT,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Subject Field */}
      <div className="flex  gap-4">
        <div className="w-full flex flex-col gap-2">
          <p className="text-base">Name</p>
          <input
            placeholder="Enter Your name"
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full rounded border-[1.5px] border-[#3137F8] bg-transparent py-3 px-5 text-black outline-none transition   placeholder:text-[#A3A3A3] focus:placeholder:text-black-base focus:border-info-base active:border-[#3137F8] disabled:cursor-default disabled:bg-whiter  focus:bg-[#EAEBFE] dark:bg-form-input text-black dark:focus:border-[#3137F8]"
          />
          {errors.subject && (
            <p className="text-red-500 text-xs">{errors.subject.message}</p>
          )}
        </div>

        <div className="w-full flex flex-col gap-2">
          <p className="text-base">Subject</p>
          <input
            placeholder="Enter Your Subject"
            type="text"
            {...register("subject", { required: "Subject is required" })}
            className="w-full rounded border-[1.5px] border-[#3137F8] bg-transparent py-3 px-5 text-black outline-none transition placeholder:text-[#A3A3A3] focus:placeholder:text-black-base  focus:border-[#3137F8] active:border-[#3137F8] disabled:cursor-default disabled:bg-whiter  focus:bg-[#EAEBFE] dark:bg-form-input text-black dark:focus:border-[#3137F8]"
          />
          {errors.subject && (
            <p className="text-red-500 text-xs">{errors.subject.message}</p>
          )}
        </div>
      </div>

      {/* Email Field */}
      <div className="w-full flex flex-col gap-2">
        <p className="text-base">Email</p>

        <input
          className="w-full rounded border-[1.5px] border-[#3137F8] bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base placeholder:text-[#A3A3A3] focus:placeholder:text-black-base  active:border-[#3137F8] disabled:cursor-default disabled:bg-whiter  dark:bg-form-input text-black focus:bg-[#EAEBFE] dark:focus:border-[#3137F8]"
          placeholder="Enter Your Email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div className="flex flex-col gap-2">
        <p className="text-base">Message</p>
        <textarea
          rows={5}
          placeholder="Type Your Message"
          {...register("message", { required: "Message is required" })}
          className="w-full rounded border-[1.5px] border-[#3137F8] bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base placeholder:text-[#A3A3A3] focus:placeholder:text-black-base  focus:bg-[#EAEBFE] active:border-[#3137F8] disabled:cursor-default disabled:bg-whiter  text-black dark:focus:border-[#3137F8]"
        />
        {errors.message && (
          <p className="text-red-500 text-xs">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="mt-10 ">
        <button type="submit" className="bg-btn w-fit text-[#fff]">
          <span className=" "> {isLoading ? "Loading.." : "Submit Now "} </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
