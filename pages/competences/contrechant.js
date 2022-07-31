import Head from "next/head";
import NavFooter from "../../components/NavFooter";

export default function Contrechant() {
    return (
        <div>
            <Head>
                <title>Contre-Chant</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex min-h-screen flex-col">
                <header className="mx-3 my-5">
                    <div className="flex justify-center rounded border border-slate-700 bg-slate-100 shadow-md">
                        <div className="flex flex-col justify-center py-3 text-slate-700">
                            <span className="text-4xl font-bold">Contre-Chant</span>
                        </div>
                    </div>
                </header>
                <main className="mx-3 my-5 flex flex-grow flex-col">
                    <div className="flex-1 rounded border border-slate-700 bg-slate-100 p-3 shadow">
                        <div className="flex max-h-[648px] flex-col space-y-5 overflow-auto text-slate-600">
                            <p>
                                Un barde ayant atteint un degré de maîtrise de 3 ou plus dans une forme de Représentation peut utiliser sa voix ou sa musique
                                pour contrer les sorts à base de son (mais pas ceux dont l'unique aspect sonore est une simple composante verbale). Chaque round
                                que dure son contre-chant, il joue un test de Représentation. Toute créature se trouvant à 9 mètres ou moins de lui (y compris
                                le barde lui-même) peut utiliser le test de Représentation du barde à la place de son propre jet de sauvegarde si elle est prise
                                pour cible par une attaque magique de son ou de langage (comme cacophonie ou injonction). La créature effectue son jet de
                                sauvegarde normalement et prend le plus avantageux des deux résultats. Toute créature qui se trouve à portée du contre-chant et
                                qui subit les effets durables d'une attaque magique de son ou de langage a droit à un nouveau jet de sauvegarde, pour lequel
                                elle ne peut utiliser que le résultat du test de Représentation du barde. Contre-chant est sans effet sur les attaques qui
                                n'autorisent pas de jets de sauvegarde. Le barde peut maintenir un contre-chant pendant 10 rounds.
                            </p>
                        </div>
                    </div>
                </main>
                <NavFooter />
            </div>
        </div>
    );
}
