import Head from "next/head";
import Image from "next/image";
import NavFooter from "../../components/NavFooter";
import { Tab } from "@headlessui/react";
import { AnnotationIcon, AcademicCapIcon } from "@heroicons/react/solid";

export default function Sommeil() {
    return (
        <div>
            <Head>
                <title>Sommeil</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex min-h-screen flex-col">
                <header className="mx-3 my-5">
                    <div className="flex justify-between rounded border border-slate-700 bg-slate-100 shadow-md">
                        <div className="flex flex-col justify-center px-3 text-slate-800">
                            <span className="text-4xl font-bold">Sommeil</span>
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
                                        <div className="text-sm">Bard 1, Ens/Mag 1</div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Incantation</div>
                                        <div className="text-sm">1 round</div>
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
                                        <div className="text-sm">V, G, M</div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Durée</div>
                                        <div className="text-sm">1 minute/niveau</div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Zone d'effet</div>
                                        <div className="text-sm">1 ou plusieurs créatures vivantes dans un rayonnement de 3 m de rayon</div>
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
                                    Ce sort endort 4 DV de créatures. Les créatures les plus faibles sont affectées les premières. Lorsque leurs DV sont
                                    équivalents, se sont les plus proches du point d'origine du rayonnement qui sont atteintes en priorité. Les DV qui ne
                                    suffisent pas pour affecter la cible suivante sont perdus. <br />
                                    Les créatures endormies sont sans défense. Elles se réveillent si on les gifle ou si on les frappe, mais le bruit normal ne
                                    suffit pas. Réveiller un compagnon constitue une action simple.
                                    <br />
                                    Sommeil reste sans effet sur les créatures inconscientes, les morts-vivants ou les créatures artificielles.
                                    <br />
                                    Composante matérielle : une pincée de sable fin, une poignée de pétales de rose ou un criquet vivant.
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
