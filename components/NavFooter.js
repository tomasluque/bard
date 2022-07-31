import Link from "next/link";
import { useRouter } from "next/router";
import { ViewListIcon, ArrowLeftIcon, MusicNoteIcon } from "@heroicons/react/solid";

export default function Footer() {
    const router = useRouter();

    return (
        <footer className="h-24 bg-slate-700 text-slate-100">
            <div className="flex h-full w-full flex-row space-x-4">
                <div className="flex flex-1 items-center justify-center text-gray-400">
                    <a onClick={() => router.back()}>
                        <ArrowLeftIcon className="w-12" />
                    </a>
                </div>
                <div className="flex flex-1 items-center justify-center text-gray-400">
                    <Link href="/">
                        <a>
                            <ViewListIcon className="w-12" />
                        </a>
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-center text-gray-400">
                    <Link href="/competences/">
                        <a>
                            <MusicNoteIcon className="w-12" />
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
