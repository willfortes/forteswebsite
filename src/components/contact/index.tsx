"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

import { motion } from "motion/react";

export const sentenceVariants = {
    hidden: {},
    visible: { opacity: 1, transition: { staggerChildren: 0.1, type: "spring", stiffness: 400, damping: 10 } }
};

export const Contact = () => {
    return (
        <section id="contact" className="h-screen flex items-center">
            <div className="m-auto container p-10 md:p-0">
                <h2 className="font-extrabold text-3xl mb-10">## Contato</h2>

                <div className="grid md:grid-cols-4 grid-cols-2 gap-10 mt-10 m-auto justify-center">
                    <motion.div 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        variants={sentenceVariants}
                        initial="hidden"
                        animate="visible"
                        >
                        <Link href="https://www.linkedin.com/in/willortes/" target="_blank" >
                            <FaLinkedin color="#fff" size={"10rem"}/>
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        variants={sentenceVariants}
                        initial="hidden"
                        animate="visible"
                        >
                        <Link href="https://wa.me/5548991369366" target="_blank">
                            <IoLogoWhatsapp color="#fff" size={"10rem"}/>
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        variants={sentenceVariants}
                        initial="hidden"
                        animate="visible"
                        >
                        <Link href="mailto:willfortes.dev@gmail.com">
                            <IoIosMail color="#fff" size={"10rem"}/>
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        variants={sentenceVariants}
                        initial="hidden"
                        animate="visible"
                        >
                        <Link href="https://github.com/willfortes" target="_blank">
                            <FaGithub color="#fff" size={"10rem"}/>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}