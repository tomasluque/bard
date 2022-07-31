import Head from "next/head";
import NavFooter from "../../components/NavFooter";

export default function InspirationTalentueuse() {
    return (
        <div>
            <Head>
                <title>Inspiration Talentueuse</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex min-h-screen flex-col">
                <header className="mx-3 my-5">
                    <div className="flex justify-center rounded border border-slate-700 bg-slate-100 shadow-md">
                        <div className="flex flex-col justify-center py-3 text-slate-700">
                            <span className="text-3xl font-bold">Inspiration Talentueuse</span>
                        </div>
                    </div>
                </header>
                <main className="mx-3 my-5 flex flex-grow flex-col">
                    <div className="flex-1 rounded border border-slate-700 bg-slate-100 p-3 shadow">
                        <div className="flex max-h-[648px] flex-col space-y-5 overflow-auto text-slate-600">
                            <p>
                                Un barde de niveau 3 ayant atteint un degré de maîtrise de 6 dans une forme de Représentation peut utiliser sa musique ou sa
                                poésie pour aider un allié à mener à bien une tâche spécifique. Le compagnon du barde doit le voir, l'entendre et se trouver à 9
                                mètres ou moins de lui. Le barde doit également voir le sujet. En fonction de la tâche que ce dernier souhaite accomplir, le
                                barde peut l'encourager, l'aider à se concentrer, etc. Le personnage affecté bénéficie d'un bonus d'aptitude de +2 à ses tests
                                de compétence (uniquement pour ce qui concerne la compétence choisie) tant qu'il entend la musique du barde. Cette aptitude
                                n'est pas toujours utilisable (il serait par exemple stupide de chanter pour aider un roublard à… se déplacer en silence !).
                                L'effet dure tant que le barde se concentre, jusqu'à un maximum de 2 minutes. Un barde ne peut utiliser cet effet sur lui- même.
                                L'inspiration talentueuse est un pouvoir mental.
                            </p>
                        </div>
                    </div>
                </main>
                <NavFooter />
            </div>
        </div>
    );
}
