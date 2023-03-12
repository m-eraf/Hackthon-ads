import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import CallIcon from '@mui/icons-material/Call'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';





import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className='joke'>For Any Queries</p>
        <p className='joke'>Contact  us</p>
        <h3 className='joke'> at:</h3>
        <h3 className='joke'> </h3>
        <div className='joke'>
      <CallIcon style={{ fontSize: '2rem' }}/>
      <span >+91 7302254559</span>
    </div>
    <div className='joke'>
      <CallIcon style={{ fontSize: '2rem' }}/>
      <span >+91 8058659197</span>
    </div>
    <div class="w-full h-[1px] bg-gray-400 my-4"></div>
                    <div class="flex flex-wrap gap-4 justify-between items-center">
      <TwitterIcon style={{ fontSize: '2rem' }}/>
      <InstagramIcon style={{ fontSize: '2rem' }}/>
      <FacebookIcon style={{ fontSize: '2rem' }}/>
      <EmailIcon style={{ fontSize: '2rem' }}/>
                        
                    </div>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
      
    </div>
    
  );
};

export default SectionWrapper(Contact, "contact");
