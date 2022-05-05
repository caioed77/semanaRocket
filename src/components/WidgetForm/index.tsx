import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/ideia.svg'
import outroImageUrl from '../../assets/outro.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt:'Image de um inseto'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        },
    },
    OTHER: {
        title: 'Outros',
        image: { 
            source: outroImageUrl,
            alt: 'Imagem de um balão de pensamento'
        },
    }, 
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    function handleRestartFeedback() {
        setFeedbackType(null);
    }
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
           
            {!feedbackType ?(
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ): (
                <FeedbackContentStep 
                feedbackType={feedbackType} 
                onFeedbackRestartRequested={handleRestartFeedback}
                />
            )}
           
            <footer className="text-neutral-400">
                Feito pelas equipes tabajara <a className="underline underline-offset-2" href="https://www.linkedin.com/in/caio-eduardo-ba78601b3/">CaioEd77</a> 
               
            </footer>
        </div>
    );
}