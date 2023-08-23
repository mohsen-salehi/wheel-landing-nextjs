"use client"
import '@/styles/globals.css'
import {StoreContextProvider} from "@/context/store";

export default function App({Component, pageProps}) {
    return <section className="bg-stone-200">
        <StoreContextProvider>
            <Component {...pageProps} />
        </StoreContextProvider>
    </section>
}
