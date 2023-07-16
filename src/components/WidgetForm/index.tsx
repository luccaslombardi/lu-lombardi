import bugImageUrl from "../../assets/Bug.svg"
import ideaImageUrl from "../../assets/Idea.svg"
import thoughtImageUrl from "../../assets/Thought.svg"
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title:'problema',
        image: {
            source: bugImageUrl,
            alt: 'Bug Icon'
        }
    },
    IDEA: {
        title:'ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Idea Icon'
        }
    },
    OTHER: {
        title:'outros',
        image: {
            source: thoughtImageUrl,
            alt: 'Thought Icon'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)


    function handleRestartFeedback() {
        setFeedbackType(null)
        setFeedbackSent(false)
    }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent   ? (
               <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />     
            ) : (
                <>
                 {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <FeedbackContentStep onFeedbackSent={() => setFeedbackSent(true)} feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartFeedback}/>
            )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Powered by <a className="underline underline-offset-2" href="http://github.com/luccaslombardi" target="blank">Luccas Lombardi</a>
            </footer>
        </div>
    )
}   