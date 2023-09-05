"use client"

import { create } from "@/actions/registrar_usuario";
import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";
import { CheckIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import NavBar from "@/components/NavBar";

export default function FormRegistrarUsuario(){
    const [message, setMessage] = useState("")

    async function handleSubmit(formData){
        const resp = await create(formData)
        if(resp.message){
            setMessage(resp.message)
            return
        }
        redirect("/registrar_usuario")
    }

    return (
        <>
            <NavBar active="registrar_usuario" />

            <main className="bg-slate-900 mt-10 p-12 rounded-xl max-w-lg m-auto">
                <h2 className="text-2xl font-bold">Registrar Usuario</h2>
                <form action={handleSubmit}>
                    <InputText name="usuario" id="usuario" label="usuario" />
                    <InputText name="email" id="email" label="email" />
                    <InputText name="telefone" id="telefone" label="telefone" />

                    <div className="flex justify-around mt-4">
                        <Button href="/registrar_usuario" variant="secudary" icon={<ArrowLeftIcon className="h-6 w-6"/>}>
                            cancelar
                        </Button>
                        <Button element="button" icon={<CheckIcon className="h-6 w-6" />}>
                            salvar
                        </Button>
                    </div>
                </form>
                <p>{message}</p>
            </main>
        </>
    )
}