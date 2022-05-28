import { FormEvent, useState } from "react"
import { FiArrowUpRight } from "react-icons/fi"
import { Loading } from "../components/WidgetForm/Loading"
import { apiSend } from "../service/api"
import ContactGif from "../assets/contact-image.gif"

export function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')
    const [isSendingEmail, setIsSendingEmail] = useState(false)
    const [emailAlreadySended, setEmailAlreadySended] = useState(false)

    async function submitContact(event: FormEvent) {
        event.preventDefault()

        setIsSendingEmail(true)

        await apiSend.post('/sendEmail', {
            name,
            email,
            subject,
            body
        })

        setIsSendingEmail(false)
        setEmailAlreadySended(true)
    }

    return (
        <div className="flex justify-center bg-[#151d30] py-32 border-t-[1px] border-slate-700">
            <div className="flex w-4/5 md:w-4/6 max-w-6xl gap-24 text-left">
                <div className="w-full md:w-1/2">
                    <h1 className="text-left text-3xl md:text-4xl uppercase font-bold pb-10">Entre em contato</h1>
                    <form className="flex flex-col gap-8 items-end" onSubmit={submitContact}>

                        <input type="text" placeholder="Escreva seu nome/empresa" className="w-full bg-transparent placeholder-zinc-400 rounded-md border-slate-600 focus:border-x-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none" onChange={event => setName(event.target.value)} />
                        <input type="email" placeholder="Escreva seu e-mail" className="w-full bg-transparent placeholder-zinc-400 rounded-md border-slate-600 focus:border-x-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none" onChange={event => setEmail(event.target.value)} />
                        <input type="text" placeholder="Qual assunto do e-mail" className="w-full bg-transparent placeholder-zinc-400 rounded-md border-slate-600 focus:border-x-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none" onChange={event => setSubject(event.target.value)} />
                        <textarea placeholder="Escreva aqui sua mensagem..." className="w-full h-28 bg-transparent placeholder-zinc-400 rounded-md border-slate-600 focus:border-x-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin" onChange={event => setBody(event.target.value)} />
                        {!emailAlreadySended ? null : (
                            <div className="flex w-full h-8 mt-[-20px] bg-green-700 border-[1px] text-sm text-green-200 border-green-600 rounded-md items-center px-4">
                                <span>Mensagem enviada</span>
                            </div>
                        )}

                        <button type="submit" className="flex items-center justify-between w-40 py-3 px-6 mr-4 bg-violet-700 rounded-lg hover:bg-violet-800 transition-colors duration-300 disabled:opacity-50 disabled:hover:bg-violet-700" disabled={name.length === 0 || email.length === 0 || subject.length === 0 || body.length === 0} >
                            {isSendingEmail ? (
                                <div className="flex w-full justify-center">
                                    <Loading />
                                </div>
                            ) : (
                                <>
                                    ENVIAR
                                    <div className="text-md p-2 bg-violet-800 rounded-md"> <FiArrowUpRight /> </div>
                                </>
                            )}
                        </button>
                    </form>
                </div>
                <div className="hidden md:flex w-1/2 items-center text-center">
                    <img src={ContactGif} alt="Contact" />
                </div>
            </div>
        </div >
    )
}