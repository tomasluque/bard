import Head from "next/head";
import Image from "next/image";
import NavFooter from "../../components/NavFooter";
import { Tab } from "@headlessui/react";
import { AnnotationIcon, AcademicCapIcon } from "@heroicons/react/solid";

export default function ImageSilencieuse() {
    return (
        <div>
            <Head>
                <title>Image silencieuse</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex min-h-screen flex-col">
                <header className="mx-3 my-5">
                    <div className="flex justify-between rounded border border-slate-700 bg-slate-100 shadow-md">
                        <div className="flex flex-col justify-center px-3 text-slate-800">
                            <span className="text-2xl font-bold">Image silencieuse</span>
                            <span className="text-slate-400">Illusion (chimère)</span>
                        </div>
                        <div className="flex content-center justify-center">
                            <Image className="rounded-r" src="/images/illusion.png" height={96} width={96} />
                        </div>
                    </div>
                </header>
                <main className="mx-3 my-5 flex flex-grow flex-col">
                    <Tab.Group defaultIndex={0}>
                        <Tab.List className="flex flex-row space-x-4">
                            <Tab
                                className={({ selected }) =>
                                    selected
                                        ? "basis-1/2 rounded border-2 border-cyan-500 bg-slate-100 py-3 text-cyan-500 shadow-md"
                                        : "basis-1/2 rounded border border-slate-700 bg-slate-100 py-3 text-slate-600 shadow-md"
                                }
                            >
                                <div className="flex content-center justify-center">
                                    <AcademicCapIcon className="w-10 " />
                                </div>
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    selected
                                        ? "basis-1/2 rounded border-2 border-cyan-500 bg-slate-100 py-3 text-cyan-500 shadow-md"
                                        : "basis-1/2 rounded border border-slate-700 bg-slate-100 py-3 text-slate-600 shadow-md"
                                }
                            >
                                <div className="flex content-center justify-center">
                                    <AnnotationIcon className="w-10" />
                                </div>
                            </Tab>
                        </Tab.List>
                        <Tab.Panels className="my-5 flex-1 rounded border border-slate-700 bg-slate-100 p-3 shadow">
                            <Tab.Panel>
                                <div className="flex flex-wrap text-slate-600">
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Niveau</div>
                                        <div className="text-sm">Bard 1, Ens/Mag 1</div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Incantation</div>
                                        <div className="text-sm">1 action simple</div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Portée</div>
                                        <div className="text-sm">
                                            longue
                                            <br />
                                            (120 m + 12 m/niveau)
                                        </div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Composants</div>
                                        <div className="text-sm">V, G, F</div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Durée</div>
                                        <div className="text-sm">concentration</div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Effet</div>
                                        <div className="text-sm">
                                            chimère visuelle ne pouvant occuper plus de 4 cubes de 3 m d'arête + 1 cube de 3 m d'arête/niveau (F)
                                        </div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Sauvegarde</div>
                                        <div className="text-sm">Volonté, dévoile (en cas d'interaction)</div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Résistance</div>
                                        <div className="text-sm">non</div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="max-h-[488px] overflow-auto text-slate-600">
                                    Ce sort génère une illusion strictement visuelle représentant un objet, une créature ou un effet magique choisi par le
                                    personnage. Elle n'inclut aucune sensation sonore, tactile, olfactive ou thermique. Le lanceur de sorts peut déplacer
                                    l'image dans les limites de portée indiquées. Focaliseur : un bout de toison de mouton.
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </main>
                <NavFooter />
            </div>
        </div>
    );
}
