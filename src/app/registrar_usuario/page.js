import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import Button from "@/components/Button";

async function getRegistrarUsuario(){
    const url = "localhost:8080/api/usuarios"
    const resp = await fetch(url,{next: {revalidate: 3600}})
    if(!resp.ok) throw new Error("Não pode carregar os dados")
    return resp.json()
}

export default async function Home(){
    const data = await getRegistrarUsuario()

    return (
        <>
          <NavBar active={"registrar_usuario"} />
    
          <main className="bg-slate-900 m-20 p-12 rounded-xl">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Registrar Usuario</h2>
              <Button href="/registrar_usuario/new" icon={<CreditCardIcon className="h-6 w-6" />}>
                registrar usuário
              </Button>
            </div>
    
            <div id="data" className="text-slate-300 m-1">
              {data.map(registrarUsuario => <DataRow registrarUsuario={registrarUsuario} /> )}
            </div>
          </main>
        </>
    
      )
}