import Head from "next/head";
import NavFooter from "../../components/NavFooter";

export default function Fascination() {
    return (
        <div>
            <Head>
                <title>Fascination</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex min-h-screen flex-col">
                <header className="mx-3 my-5">
                    <div className="flex justify-center rounded border border-slate-700 bg-slate-100 shadow-md">
                        <div className="flex flex-col justify-center py-3 text-slate-700">
                            <span className="text-4xl font-bold">Fascination</span>
                        </div>
                    </div>
                </header>
                <main className="mx-3 my-5 flex flex-grow flex-col">
                    <div className="flex-1 rounded border border-slate-700 bg-slate-100 p-3 shadow">
                        <div className="flex max-h-[648px] flex-col space-y-5 overflow-auto text-slate-600">
                            <p>
                                Avec un degré de maîtrise de 3 ou plus dans une forme de Représentation, le barde peut fasciner une ou plusieurs créatures grâce
                                à sa musique ou sa poésie. Celles-ci doivent le voir et l'entendre, lui prêter attention et se trouver à 27 mètres ou moins de
                                lui. Le barde doit lui aussi voir sa cible. Un combat proche ou un danger manifeste empêche le fonctionnement de ce pouvoir. Une
                                utilisation de ce pouvoir permet d'affecter une seule créature au niveau un de barde et une créature supplémentaire par trois
                                niveaux de barde au-delà de 1 (soit deux au niveau 4, trois au niveau 7 et ainsi de suite).
                            </p>
                            <p>
                                Pour utiliser son pouvoir de fascination, le barde effectue un test de Représentation dont le résultat sert de DD aux jets de
                                Volonté pour résister à l'effet. Si une cible réussit son jet de sauvegarde, elle n'est pas affectée et, de plus, le barde ne
                                peut pas réessayer de la fasciner avant un délai de 24 heures. En cas d'échec au jet de sauvegarde, la cible s'assied, écoute
                                attentivement le chant et ne prend plus aucune autre action tant que le barde continue à jouer et à se concentrer (pendant un
                                maximum de 1 round par niveau du barde). Tant qu'elle est fascinée, elle subit un malus de -4 à ses tests de compétence joués de
                                façon réactive, comme Détection et de Perception auditive. Toute menace potentielle (comme l'approche d'un ennemi dans son dos)
                                oblige le barde à un nouveau test de Représentation et autorise la cible à un second jet de sauvegarde. Si la menace est
                                manifeste (comme le fait de lancer un sort, de dégainer son arme, etc.), le charme est automatiquement rompu. Fascination est un
                                effet mental de type enchantement (charme).
                            </p>
                        </div>
                    </div>
                </main>
                <NavFooter />
            </div>
        </div>
    );
}
