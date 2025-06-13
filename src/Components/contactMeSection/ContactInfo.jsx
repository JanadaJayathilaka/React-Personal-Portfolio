import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="janadajayathilaka123@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+94774718737" Image={FiPhone} />
      <SingleInfo text="Kalutara, Sri Lanka" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
