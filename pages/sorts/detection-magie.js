import Head from "next/head";
import Image from "next/image";
import NavFooter from "../../components/NavFooter";
import { Tab } from "@headlessui/react";
import { AnnotationIcon, AcademicCapIcon } from "@heroicons/react/solid";

export default function DetectionMagie() {
    return (
        <div>
            <Head>
                <title>Détection de la magie</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex min-h-screen flex-col">
                <header className="mx-3 my-5">
                    <div className="flex justify-between rounded border border-slate-700 bg-slate-100 shadow-md">
                        <div className="flex flex-col justify-center px-3 text-slate-800">
                            <span className="text-xl font-bold">Détection de la magie</span>
                            <span className="text-slate-400">Divination</span>
                        </div>
                        <div className="flex content-center justify-center">
                            <Image className="rounded-r" src="/images/divination.png" height={96} width={96} />
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
                                        <div className="text-sm">
                                            Bard 0, Dru 0, <br />
                                            Ens/Mag 0, Prê 0
                                        </div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Incantation</div>
                                        <div className="text-sm">1 action simple</div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Portée</div>
                                        <div className="text-sm">18 m</div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Composants</div>
                                        <div className="text-sm">V, G</div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Durée</div>
                                        <div className="text-sm">concentration, jusqu'à 1 minute/niveau (T)</div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Zone d'effet</div>
                                        <div className="text-sm">émanation en forme de cône</div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Sauvegarde</div>
                                        <div className="text-sm">aucun</div>
                                    </div>
                                    <div className="basis-1/2 p-3">
                                        <div className="font-bold uppercase text-slate-800">Résistance</div>
                                        <div className="text-sm">non</div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="max-h-[488px] overflow-auto text-slate-600 ">
                                    Ce sort permet de détecter les auras magiques. La quantité de renseignements obtenus dépend du temps que l'on passe à
                                    étudier le sujet ou la zone.
                                    <br />
                                    Premier round : présence ou absence d'auras magiques. <br />
                                    Deuxième round : nombre d'auras magiques et intensité de la plus puissante. <br />
                                    Troisième round : intensité et localisation précise de chaque aura. Si les objets ou créatures concernés se trouvent dans le
                                    champ de vision du personnage, celui-ci a la possibilité de tenter des tests d'Art de la magie pour déterminer l'école de
                                    magie assortie à chaque aura (un test par aura ; DD 15 + niveau du sort, ou 15 + moitié du niveau de lanceur de sorts pour
                                    un effet qui ne serait pas un sort).
                                    <br />
                                    Des auras magiques particulièrement puissantes et d'éventuelles émanations magiques locales peuvent masquer des auras plus
                                    discrètes.
                                    <br />
                                    Intensité de l'aura. La puissance d'une aura dépend du sort qui la génère ou du niveau de lanceur de sorts de l'individu qui
                                    a créé l'objet magique dont elle est issue. Si une aura entre dans deux catégories, détection de la magie indique
                                    systématiquement la plus puissante.
                                    <br />
                                    Aura persistante. Une aura magique persiste une fois sa source dissipée (dans le cas d'un sort) ou anéantie (dans le cas
                                    d'un objet magique). Si détection de la magie est lancé et orienté dans cette direction, le sort indique une légère aura (à
                                    peine faible). Ensuite, tout dépend de la source.
                                    <br />
                                    Élémentaires et Extérieurs ne sont pas magiques en soi mais, s'ils ont été convoqués, le personnage détecte l'aura du sort
                                    qui les a appelés. Le personnage peut se tourner pour sonder une nouvelle zone chaque round. Le sort fonctionne au travers
                                    des barrières, à condition qu'elles ne soient pas trop épaisses : il est bloqué par 30 centimètres de pierre, 2,5
                                    centimètres de métal, une mince feuille de plomb ou 90 centimètres de bois ou de terre. Il est possible d'user de permanence
                                    sur détection de la magie.
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
