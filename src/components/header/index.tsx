"use client";

import { motion } from "framer-motion";

import WillImage from "@/assets/will.png";
import Image from "next/image";

export const Header = () => {
  
    return <header className="h-svh flex items-center">
        <div className="m-auto container p-10 md:p-0">
            <h1 className="font-extrabold text-5xl mb-10 mt-40 md:mt-0">Full Stack Developer</h1>
            <p className="font-extralight text-4xl mb-10">Soluções escalaveis,<br/>de alta performance<br/>e inovadoras.</p>
            <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }} 
                href="#contact" 
                className="block w-80 px-5 py-2 border-2 border-white rounded-full">
                    Vamos contruir?
            </motion.a>

            <Image className="md:absolute md:left-[50%] bottom-0 md:translate-x-[-50%] relative left-5" width={700} height={700} src={WillImage} alt="Willian Fortes - Desenvolvedor Full-Stack" color="#fff"/>
        </div>
    </header>;
};