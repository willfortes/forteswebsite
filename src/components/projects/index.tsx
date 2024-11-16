"use client"

import { motion } from "motion/react";


export const Projects = () => {

    const projects = [
        {
            title: "Shopmyfeed",
            description: "Desenvolvimento de uma plataforma inovadora que combina busca híbrida utilizando IA, permitindo pesquisa com imagem e texto, integrada com Pinecone. Atuei na aplicação de LLMs (Large Language Models) para melhorar descrições de produtos e na otimização da identificação em buscas, garantindo uma experiência de usuário mais eficiente. Stack utilizada inclui Next.js, React, Node.js, TypeScript, Python e FastAPI, com foco em escalabilidade e entrega contínua.",
        },
        {
            title: "Splitwave",
            description: "Construção de uma plataforma inovadora para gerenciamento de royalties e rendimentos de criadores digitais e artistas. Atuei como desenvolvedor Full-Stack, criando interfaces intuitivas no React e implementando lógica de divisão de pagamentos no Node.js. O projeto demandou alta precisão e segurança nas integrações financeiras, com foco em simplicidade para os usuários finais."
        },
        {
            title: "Abmex 2.0",
            description: "Redesign e desenvolvimento da principal plataforma de marketplace da Abmex, focada na venda de infoprodutos (similar ao Hotmart). O projeto envolveu integração de métodos de pagamento como Pix e cartão de crédito, além de melhorias na performance do sistema. Trabalhei exclusivamente no backend utilizando Laravel, garantindo segurança e robustez para lidar com transações financeiras e grande volume de usuários."
        },
        {
            title: "Neotech",
            description: "Contribuí para diversos projetos da Neotech, incluindo: OXYS (Web): Integração com Serasa para análise de crédito e otimização de funcionalidades no sistema; ASQ (Mobile): Desenvolvimento da feature 'Dicas de Saúde' e sistema de notificações para o app; Bria Saúde (Web & Mobile): Implementação de partes do aplicativo e manutenção de recursos no sistema web; Cartos POS (Mobile): Criação e integração de um aplicativo nativo para máquinas de pagamento (GPOS700); O trabalho envolveu tecnologias como Laravel, Vue.js e soluções nativas, sempre com foco na qualidade e usabilidade."
        }
    ]

    return (
        <main id="projects h-screen">
            <div className="m-auto container min-h-screen p-10 md:p-0">
                <h2 className="font-extrabold text-3xl mb-10">## Últimos Projetos Relevantes</h2>
                
                {
                    projects.map((project, index) => (
                        <motion.div 
                            key={index}
                            className="mb-10"
                            initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? 50 : -50
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 1
                                }
                            }}
                            viewport={{ once: true }}>
                            <h3 className="font-bold text-2xl mb-5"># {project.title}</h3>
                            <p className="font-extralight text-lg">{project.description}</p>
                        </motion.div>
                    ))
                }
            </div>
        </main>
    )
}