import Head from "next/head";
import Link from "next/link";
import NavFooter from "../../components/NavFooter";

export default function Competences() {
    return (
        <div>
            <Head>
                <title>Barde - D&D</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex min-h-screen flex-col">
                <header className="mx-3 my-5">
                    <div className="flex justify-center rounded border border-slate-700 bg-slate-100 py-3 text-slate-800 shadow-md">
                        <span className="text-4xl font-bold">Compétences</span>
                    </div>
                </header>
                <main className="mx-3 my-5 flex flex-grow flex-col">
                    <div className="flex max-h-[648px] flex-col space-y-3 overflow-auto border">
                        <div className="flex justify-center rounded border border-slate-700 bg-slate-100 py-3 text-slate-700 shadow-md">
                            <Link href="/competences/savoir-bardique">
                                <a className="text-xl font-bold">Savoir Bardique</a>
                            </Link>
                        </div>
                        <div className="flex justify-center rounded border border-slate-700 bg-slate-100 py-3 text-slate-700 shadow-md">
                            <Link href="/competences/contrechant">
                                <a className="text-xl font-bold">Contre-Chant</a>
                            </Link>
                        </div>
                        <div className="flex justify-center rounded border border-slate-700 bg-slate-100 py-3 text-slate-700 shadow-md">
                            <Link href="/competences/fascination">
                                <a className="text-xl font-bold">Fascination</a>
                            </Link>
                        </div>
                        <div className="flex justify-center rounded border border-slate-700 bg-slate-100 py-3 text-slate-700 shadow-md">
                            <Link href="/competences/inspiration-vaillante">
                                <a className="text-xl font-bold">Inspiration Vaillante</a>
                            </Link>
                        </div>
                        <div className="flex justify-center rounded border border-slate-700 bg-slate-100 py-3 text-slate-700 shadow-md">
                            <Link href="/competences/inspiration-talentueuse">
                                <a className="text-xl font-bold">Inspiration Talentueuse</a>
                            </Link>
                        </div>
                    </div>
                </main>
                <NavFooter />
            </div>
        </div>
    );
}
