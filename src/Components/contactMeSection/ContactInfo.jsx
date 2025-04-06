import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import SingleInfo from "./SingleInfo";
const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="lakvindujayathilaka@gmail.com" Image={MdOutlineEmail} />
      <SingleInfo text="+94 774 718 737" Image={MdOutlinePhone} />
      <SingleInfo text="Kalutara,Sri Lanka" Image={MdOutlineLocationOn} />
    </div>
  );
};

export default ContactInfo;
