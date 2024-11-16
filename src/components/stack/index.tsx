import Image from "next/image"

import NestImage from "@/assets/nestjs.svg"
import NextImage from "@/assets/nextjs.svg"
import LaravelImage from "@/assets/laravel.svg"

export const Stack = () => {
    return (
        <section id="stack" className="min-h-[500px] flex items-center">
            <div className="m-auto container p-10 md:p-0">
                <h2 className="font-extrabold text-3xl mb-10">## Stack</h2>

                <div className="grid md:grid-cols-3 grid-cols-1 mt-10 justify-center">
                    <Image src={NestImage} width={300} height={300} alt="Nest.JS" color="#fff"/>
                    <Image src={LaravelImage} width={300} height={300} alt="Laravel" color="#fff"/>
                    <Image src={NextImage} width={300} height={300} alt="NExt.JS" color="#fff"/>
                </div>
            </div>
        </section>
    )
}