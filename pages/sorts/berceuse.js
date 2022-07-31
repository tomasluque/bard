import Head from "next/head";
import Image from "next/image";
import NavFooter from "../../components/NavFooter";
import { Tab } from "@headlessui/react";
import { AnnotationIcon, AcademicCapIcon } from "@heroicons/react/solid";

export default function Berceuse() {
    return (
        <div>
            <Head>
                <title>Berceuse</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex min-h-screen flex-col">
                <header className="mx-3 my-5">
                    <div className="flex justify-between rounded border border-slate-700 bg-slate-100 shadow-md">
                        <div className="flex flex-col justify-center px-3 text-slate-800">
                            <span className="text-4xl font-bold">Berceuse</span>
                            <span className="text-slate-400">Enchantement (coercition) [mental]</span>
                        </div>
                        <div className="flex content-center justify-center">
                            <Image className="rounded-r" src="/images/enchantement.png" height={96} width={96} />
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
                                        <div className="text-sm">Bard 0</div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Incantation</div>
                                        <div className="text-sm">1 action simple</div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Portée</div>
                                        <div className="text-sm">
                                            moyenne <br />
                                            (30m + 3m/niveau)
                                        </div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Composants</div>
                                        <div className="text-sm">V, G</div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Durée</div>
                                        <div className="text-sm">
                                            concentration <br />+ 1 round/niveau (T)
                                        </div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Zone d'effet</div>
                                        <div className="text-sm">créatures vivantes situées dans une étendue de 3 m de rayon</div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Sauvegarde</div>
                                        <div className="text-sm">Volonté, annule</div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Résistance</div>
                                        <div className="text-sm">oui</div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="text-slate-600">
                                    Toutes les créatures situées dans la zone se montrent distraites, voire somnolentes. Si elles ratent leur jet de Volonté,
                                    elles subissent un malus de -5 aux tests de Détection et de Perception auditive, ainsi qu'un malus de -2 aux jets de
                                    sauvegarde contre les effets de sommeil tant que dure le sort. Berceuse dure aussi longtemps que le personnage se concentre,
                                    plus 1 round par niveau de lanceur de sorts ensuite.
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
