"use client"
import { motion } from "framer-motion";

export const sentenceVariants = {
    hidden: {},
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export const About = () => {
    return <div id="about" className="flex items-center">
        <div className="m-auto container p-10 md:p-0 mt-20 md:mt-0">
            <h2 className="font-bold text-3xl mb-10">## Sobre</h2>
            <motion.p 
                variants={sentenceVariants}
                initial="hidden"
                animate="visible"
                className="font-extralight text-lg">
                    Olá, eu sou Willian Fortes, Desenvolvedor Full-Stack especializado em Next.js, NestJS e Laravel, com mais de 8 anos de experiência em criar soluções digitais escaláveis e de alto impacto.<br/>Minha missão é transformar ideias em produtos tecnológicos robustos, aplicando metodologias ágeis e as mais recentes tecnologias do mercado.<br/><br/>Tenho um sólido histórico no desenvolvimento de MVPs para startups, integrações de pagamentos (Pix, boleto, cartão de crédito), otimização de sistemas e construção de interfaces modernas e intuitivas.<br/><br/>Com experiência em projetos como marketplaces, gateways de pagamento, busca híbrida com IA e plataformas SaaS, ofereço soluções que alinham inovação tecnológica às necessidades reais do negócio. Seja um projeto pequeno ou uma aplicação corporativa, meu compromisso é entregar resultados que geram valor.
            </motion.p>
        </div>
    </div>
}