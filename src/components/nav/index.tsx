"use client";
import { motion } from "framer-motion";

export const Nav = () => {
    return (
        <nav className="w-full p-10 md:p-0 h-[80px] fixed flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] to-[#0a0a0a]/80">
            <div className="relative w-full m-auto container grid md:grid-cols-2 sm:grid-cols-1">
                <h1 className="font-extrabold text-4xl">Willian Fortes</h1>
                <div className="w-full hidden justify-end md:flex">
                    <ul className="flex gap-10">
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            ><a href="#about">Sobre</a></motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            ><a href="#stack">Stack</a></motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            ><a href="#projects">Projetos</a></motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            ><a href="#contact">Contato</a></motion.li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}