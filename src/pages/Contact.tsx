import { useState } from "react"
import { FiArrowUpRight } from "react-icons/fi"

export function Contact() {
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [comment, setComment] = useState('')


    return(
        <div className="flex justify-center bg-slate-800 bg-opacity-40 py-32 border-t-[1px] border-slate-700">
            <div className="w-3/5 max-w-6xl text-left">
            <h1 className="text-left text-4xl uppercase font-bold pb-10">Entre em contato</h1>
            <form className="w-2/5 flex flex-col gap-8 items-end">
                <input type="email" placeholder="Escreva seu e-mail" className="w-full bg-transparent placeholder-zinc-400 rounded-md border-slate-600 focus:border-x-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none" onChange={event => setEmail(event.target.value)} />
                <input type="text" placeholder="Qual assunto do e-mail" className="w-full bg-transparent placeholder-zinc-400 rounded-md border-slate-600 focus:border-x-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none" onChange={event => setSubject(event.target.value)} />
                <textarea placeholder="Escreva aqui sua mensagem..." className="w-full h-28 bg-transparent placeholder-zinc-400 rounded-md border-slate-600 focus:border-x-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin" onChange={event => setComment(event.target.value)} />
                <button type="submit" className="flex items-center justify-between w-36 py-3 px-4 bg-violet-700 rounded-lg hover:bg-violet-800 transition-colors duration-300 disabled:opacity-50 disabled:hover:bg-violet-700" disabled={email.length === 0 || subject.length === 0 || comment.length === 0} >
                    ENVIAR
                    <div className="text-md p-2 bg-violet-800 rounded-md">
                        <FiArrowUpRight />
                    </div>
                    </button>
            </form>
            </div>
        </div>
    )
}