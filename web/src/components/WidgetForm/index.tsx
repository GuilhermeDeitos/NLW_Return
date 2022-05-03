import { CloseButton } from "../CloseButton";
import { useState } from "react";

import bugImageUrl from "../../assets/Bug.svg";
import ideaImageUrl from "../../assets/Idea.svg";
import thoughtImageUrl from "../../assets/Thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackTypeContentStep } from "./Steps/FeedbackContentStep";


export const feedbackTypes = {
    BUG: {
        title:"Problema",
        Image:{
            source:bugImageUrl,
            alt:'Imagem de um inseto',
        }
    },
    IDEA:{
        title:"Ideia",
        Image:{
            source: ideaImageUrl,
            alt:'Imagem de uma Lampada',
        }
    }, 
    OTHER:{
        title:"Outro",
        Image:{
            source:thoughtImageUrl,
            alt:'Imagem de um balão de pensamento',
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

//Object.entries(feedbackTypes) => 

/*
[
    ['Bug', {...}],
    ['Idea', {...}],
    ['Other', {...}]
]



*/

export function WidgetForm(){

    const[feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    function handleRestartFeedback(){
        setFeedbackType(null);
    }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            

           {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <FeedbackTypeContentStep feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartFeedback}/>
            )}

            <footer className="text-xs text-neutral-500">
                Feito por <a href="https://github.com/GuilhermeDeitos" className="underline underline-offset-2"> Guilherme Deitos</a>

            </footer>
        </div>
    )
}