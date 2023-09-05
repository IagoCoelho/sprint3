import Link from "next/link";

export default function NavBar({active}) {
    return (
        <nav className="bg-slate-900 p-6 flex justify-between items-center">
            <ul className="flex gap-12 items-end text-slate-400 text-sm">
                <li>
                    <a href="#">
                        <h1 className="text-2xl font-bold text-slate-100">Sprint 3</h1>
                    </a>
                </li>
                <li>
                    <Link className={active=="registrar_usuario" && "text-slate-300"} href="/registrar_usuario">
                    registrar usuario
                    </Link>
                </li>
                <li>
                    <Link className={active=="cadastrar_feedback" && "text-slate-300"} href="/cadastrar_feedback">
                        contas
                    </Link>
                </li>
            </ul>

            <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
            </div>
        </nav>
    )
}