import Head from "next/head";
import Link from "next/link";
import NavFooter from "../components/NavFooter";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Barde - D&D</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex min-h-screen flex-col">
                <header className="mx-3 my-5">
                    <div className="flex justify-center rounded border border-slate-700 bg-slate-100 py-3 text-slate-800 shadow-md">
                        <span className="text-4xl font-bold">Liste de Sorts</span>
                    </div>
                </header>
                <main className="mx-3 my-5 flex flex-grow flex-col">
                    <div className="flex max-h-[648px] flex-col space-y-3 overflow-auto border">
                        <div className="flex justify-center rounded border border-slate-700 bg-slate-100 py-3 text-slate-700 shadow-md">
                            <Link href="/sorts/berceuse">
                                <a className="text-xl font-bold">Berceuse</a>
                            </Link>
                        </div>
                        <div className="flex justify-center rounded border border-slate-700 bg-slate-100 py-3 text-slate-700 shadow-md">
                            <Link href="/sorts/convocation-instrument">
                                <a className="text-xl font-bold">Convocation d'instrument</a>
                            </Link>
                        </div>
                        <div className="flex justify-center rounded border border-slate-700 bg-slate-100 py-3 text-slate-700 shadow-md">
                            <Link href="/sorts/detection-magie">
                                <a className="text-xl font-bold">Détection de la magie</a>
                            </Link>
                        </div>
                        <div className="flex justify-center rounded border border-slate-700 bg-slate-100 py-3 text-slate-700 shadow-md">
                            <Link href="/sorts/lumiere">
                                <a className="text-xl font-bold">Lumière</a>
                            </Link>
                        </div>
                        <div className="flex justify-center rounded border border-slate-700 bg-slate-100 py-3 text-slate-700 shadow-md">
                            <Link href="/sorts/manipulation-distance">
                                <a className="text-xl font-bold">Manipulation à distance</a>
                            </Link>
                        </div>
                        <div className="flex justify-center rounded border border-slate-700 bg-slate-100 py-3 text-slate-700 shadow-md">
                            <Link href="/sorts/reperage">
                                <a className="text-xl font-bold">Repérage</a>
                            </Link>
                        </div>
                        <div className="flex justify-center rounded border border-slate-700 bg-slate-100 py-3 text-slate-700 shadow-md">
                            <Link href="/sorts/deguisement">
                                <a className="text-xl font-bold">Déguisement</a>
                            </Link>
                        </div>
                        <div className="flex justify-center rounded border border-slate-700 bg-slate-100 py-3 text-slate-700 shadow-md">
                            <Link href="/sorts/image-silencieuse">
                                <a className="text-xl font-bold">Image silencieuse</a>
                            </Link>
                        </div>
                        <div className="flex justify-center rounded border border-slate-700 bg-slate-100 py-3 text-slate-700 shadow-md">
                            <Link href="/sorts/sommeil">
                                <a className="text-xl font-bold">Sommeil</a>
                            </Link>
                        </div>
                    </div>
                </main>
                <NavFooter />
            </div>
        </div>
    );
}
