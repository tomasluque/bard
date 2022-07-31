import Head from "next/head";
import NavFooter from "../../components/NavFooter";

export default function InspirationVaillante() {
    return (
        <div>
            <Head>
                <title>Inspiration Vaillante</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex min-h-screen flex-col">
                <header className="mx-3 my-5">
                    <div className="flex justify-center rounded border border-slate-700 bg-slate-100 shadow-md">
                        <div className="flex flex-col justify-center py-3 text-slate-700">
                            <span className="text-4xl font-bold">Inspiration Vaillante</span>
                        </div>
                    </div>
                </header>
                <main className="mx-3 my-5 flex flex-grow flex-col">
                    <div className="flex-1 rounded border border-slate-700 bg-slate-100 p-3 shadow">
                        <div className="flex max-h-[648px] flex-col space-y-5 overflow-auto text-slate-600">
                            <p>
                                Un barde ayant atteint un degré de maîtrise de 3 ou plus dans une forme de Représentation peut utiliser son répertoire musical
                                pour susciter la bravoure chez ses alliés (y compris lui-même), les protéger de la peur et améliorer leurs compétences
                                martiales. Pour en bénéficier, un personnage doit pouvoir entendre le barde chanter. L'effet dure tant que l'allié entend le
                                barde chanter ou jouer de la musique, et pendant 5 rounds par la suite. La bravoure qu'il procure à ses compagnons prend la
                                forme d'un bonus de moral de +1 aux jets de sauvegarde contre les effets de charme et de terreur, et d'un bonus de moral de +1
                                aux jets d'attaque et de dégâts des armes. Ces bonus augmentent de +1 au niveau 8 et tous les 6 niveaux de barde suivants (+2 au
                                niveau 8, +3 au niveau 14 et +4 au niveau 20). L'inspiration vaillante est un pouvoir mental.
                            </p>
                        </div>
                    </div>
                </main>
                <NavFooter />
            </div>
        </div>
    );
}
