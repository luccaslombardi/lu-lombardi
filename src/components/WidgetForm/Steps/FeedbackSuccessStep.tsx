import { CloseButton } from "../../CloseButton"
import successImageUrl from "../../../assets/Success.svg"

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested: () => void
}

export function FeedbackSuccessStep({ onFeedbackRestartRequested }: FeedbackSuccessStepProps) {
    return (
        <>
            <header>
                <CloseButton />
            </header>

            <div className="flex flex-col items-center py-10 2-[304px]">
                <img src={successImageUrl} alt="Seu feedback foi enviado" />

                <span className="text-xl mt-2">Agradecemos seu feedback</span>

                <button 
                type="button"
                onClick={onFeedbackRestartRequested}
                className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:border-x-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none"
                >
                    Quero enviar outro feedback
                </button>

            </div>
        </>
    )
}