import Head from "next/head";
import NavFooter from "../../components/NavFooter";

export default function SavoirBardique() {
    return (
        <div>
            <Head>
                <title>Savoir bardique</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex min-h-screen flex-col">
                <header className="mx-3 my-5">
                    <div className="flex justify-center rounded border border-slate-700 bg-slate-100 shadow-md">
                        <div className="flex flex-col justify-center py-3 text-slate-700">
                            <span className="text-4xl font-bold">Savoir bardique</span>
                        </div>
                    </div>
                </header>
                <main className="mx-3 my-5 flex flex-grow flex-col">
                    <div className="flex-1 rounded border border-slate-700 bg-slate-100 p-3 shadow">
                        <div className="flex max-h-[648px] flex-col space-y-5 overflow-auto text-slate-600">
                            <p>
                                Un barde acquiert de nombreuses connaissances au cours de ses voyages et au contact de ses confrères. Chaque fois qu'il faut
                                déterminer s'il détient des informations importantes au sujet d'un objet légendaire, des notables ou des sites connus de la
                                région, il effectue un test spécial de savoir bardique, soit 1d20 + son niveau de barde + son modificateur d'Intelligence. (Si
                                le barde possède un degré de maîtrise de 5 ou plus en Connaissances (histoire), il obtient un bonus de +2 sur ce test.)
                            </p>
                            <p>
                                Le savoir bardique ne révèle jamais les pouvoirs spécifiques d'un objet, mais il peut donner des indications quant à sa
                                fonction. Le personnage n'a pas la possibilité de faire 10 ou de faire 20, ce type de connaissances étant extrêmement aléatoire.
                                On détermine le degré de difficulté du test en se référant à la table suivante.
                            </p>
                        </div>
                    </div>
                </main>
                <NavFooter />
            </div>
        </div>
    );
}
