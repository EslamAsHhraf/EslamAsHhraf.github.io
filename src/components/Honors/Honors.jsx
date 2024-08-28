import React from "react";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { Microsoft, Dell } from "../../assets";
import { Link } from "react-router-dom";
import Certificate from "./Certificate";

const Honors = () =>
{
    return (
        <>
            <div>
                <p className={ `${styles.sectionSubText} ` }>Achievements</p>
                <h2 className={ `${styles.sectionHeadText}` }>Honors & awards.</h2>
            </div>

            <div className='w-full flex'>
                <p
                    variants={ fadeIn( "", "", 0.1, 1 ) }
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    This section highlights key accomplishments that demonstrate your expertise and dedication. Each achievement is a testament to your ability to overcome challenges and drive results.
                </p>
            </div>
            <motion.div variants={ textVariant() } className="bg-tertiary  p-5 rounded-2xl mt-4 ">
                <div className="mb-4 flex gap-2 items-center">
                    <p className={ `${styles.heroSubText} text-white   font-bold` }>Graduation Project: Better Call Soul</p>
                    <div className='w-fit text-[15px] font-small green-pink-gradient p-[1px] rounded-[16px] shadow-card'>
                        <Link to="https://www.linkedin.com/feed/update/urn:li:activity:7229908505573404672/" target="_blank">
                            <button className='bg-tertiary rounded-[16px] py-1 px-3  flex gap-2  items-center justify-center h-[36px]'  >
                                View
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between flex-col-reverse items-center gap-4 md:flex-row " >
                    <div className="max-w-[100%] md:max-w-[48%]">
                        <p className=" text-secondary text-[16px]" >Soul is an AI therapist assistant offering compassionate mental health support via chatbot technology, summarization, reporting, and analysis. It bridges the mental health care gap with scalable, cost-effective solutions for emotional wellness and resilience.</p>
                        <p className="mt-3 text-[16px] font-semibold">Achievements:</p>
                        <ul className='mt-5 list-disc ml-5 space-y-2'>
                            <li className='text-secondary text-[14px] pl-1 tracking-wider'> 
                                Microsoft sponsored and mentored this project.
                            </li>
                            <li className='text-secondary text-[14px] pl-1 tracking-wider'>
                                Responsible for the summarization module (Fine tuning and machine learning approach) and Dee
                                Learning approach from scratch using transformers.
                            </li>
                            <li className='text-secondary text-[14px] pl-1 tracking-wider'>
                                Developed a user interface to interact with the models using React Native.
                            </li>
                        </ul>
                    </div>
                    <div className="max-w-[100%] md:max-w-[48%]">
                        <img loading="lazy"  src={ Microsoft } className="rounded-2xl"/>
                    </div>
                </div>
            </motion.div>
            <motion.div variants={ textVariant() } className="bg-tertiary  p-5 rounded-2xl mt-4 ">
                <div className="mb-4 flex gap-2 items-center">
                    <p className={ `${styles.heroSubText} text-white   font-bold` }> Dell Hacktrick 2024</p>
                    <div className='w-fit text-[15px] font-small green-pink-gradient p-[1px] rounded-[16px] shadow-card'>
                        <Link to="https://www.linkedin.com/feed/update/urn:li:activity:7173316471823941632" target="_blank">
                            <button className='bg-tertiary rounded-[16px] py-1 px-3  flex gap-2  items-center justify-center h-[36px]'  >
                                View
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between flex-col-reverse items-center gap-4 md:flex-row " >
                    <div className="max-w-[100%] md:max-w-[48%]">
                        <p className=" text-secondary text-[16px]" >The game blends problem-solving, machine learning, and cybersecurity skills. It was divided into 2 parts, the
                            fox aimed to send encrypted messages and trick the interceptors and he
                            also tries to solve riddles to increase the fake budget, the eagle worked to intercept messages
                            and decipher it by Developing a deep learning module helps him detect real messages.</p>

                        <p className="mt-3 text-[16px] font-semibold">Achievements:</p>
                        <ul className='mt-5 list-disc ml-5 space-y-2'>
                            <li className='text-secondary text-[14px] pl-1 tracking-wider'>
                                Ranked in 5th place among 35 teams on the leaderboard phase.
                            </li>
                            {/* <li className='text-secondary text-[14px] pl-1 tracking-wider'>
                                Fox uses all his tactics to fool the eagle and try to send the message through to the parrot using steganography, and he
                                also tries to solve riddles to increase the fake budget.
                            </li>
                            <li className='text-secondary text-[14px] pl-1 tracking-wider'>
                                Eagle uses its attentiveness to intercept and decode the messages sent without getting fooled. Developing a deep learning module helps him detect real messages.
                            </li> */}
                        </ul>
                    </div>
                    <div className="max-w-[100%] md:max-w-[48%] ">
                        <img loading="lazy"  src={ Dell } className="rounded-2xl " />
                    </div>
                </div>
            </motion.div>
            <Certificate/>

        </>
    );
};

export default SectionWrapper( Honors, "honors" );
