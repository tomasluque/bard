import Head from "next/head";
import Image from "next/image";
import NavFooter from "../../components/NavFooter";
import { Tab } from "@headlessui/react";
import { AnnotationIcon, AcademicCapIcon } from "@heroicons/react/solid";

export default function Deguisement() {
    return (
        <div>
            <Head>
                <title>Déguisement</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex min-h-screen flex-col">
                <header className="mx-3 my-5">
                    <div className="flex justify-between rounded border border-slate-700 bg-slate-100 shadow-md">
                        <div className="flex flex-col justify-center px-3 text-slate-800">
                            <span className="text-4xl font-bold">Déguisement</span>
                            <span className="text-slate-400">Illusion (hallucination)</span>
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
                                        <div className="text-sm">personnelle</div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Composants</div>
                                        <div className="text-sm">V, G</div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Durée</div>
                                        <div className="text-sm">10 minute/niveau</div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Cible</div>
                                        <div className="text-sm">le lanceur de sorts</div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="max-h-[488px] overflow-auto text-slate-600">
                                    Le personnage se donne une apparence différente (ce qui inclut vêtements, armure, armes et équipement). Il peut ôter ou
                                    ajouter 30 centimètres à sa taille, avoir l'air plus gros ou plus mince. Par contre, il doit conserver le même type de
                                    corps. Par exemple, un lanceur de sorts humain pourra se faire passer pour un humain, un humanoïde ou quelque autre bipède
                                    de forme humaine. Pour le reste, les changements dépendent des souhaits du personnage. Il est possible d'ajouter ou de
                                    cacher une caractéristique physique mineure, comme un grain de beauté ou une moustache, ou de se faire passer entièrement
                                    pour quelqu'un d'autre.
                                    <br />
                                    Le sort ne confère pas les pouvoirs ou particularités de la forme choisie, pas plus qu'il n'altère les propriétés tactiles
                                    (toucher) et audibles (son) du personnage ou de son équipement. Ainsi, une hache d'armes ressemblant à une dague fera
                                    toujours autant de ravages.
                                    <br />
                                    Si le personnage use de ce sort pour se déguiser, il bénéficie d'un bonus de +10 au test de Déguisement.
                                    <br />
                                    Toute créature interagissant avec l'hallucination a droit à un jet de Volonté pour percer le voile de l'illusion. Par
                                    exemple, si une créature touche le personnage et réalise que la sensation qu'il en tire ne correspond pas à ce qu'elle voit,
                                    elle a droit à un tel jet.
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
