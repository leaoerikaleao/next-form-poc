import React from 'react'
import Link from 'next/link'
import FormResources from './form-resources'


const Index = () => {
    return (
        <div>
            <main className="max-w-screen-lg mx-auto text-new-dark">
                <h1 className="py-14 mx-10 text-4xl font-alegreya-sans text-center text-new-dark md:text-6xl ">Cadastro de Recursos</h1>
                <FormResources />
            </main>
        </div>
    )
}

export default Index