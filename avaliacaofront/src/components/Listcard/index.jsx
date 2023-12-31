import axios from "axios"
import { useEffect, useState } from "react"
import Card from "@/components/card"
import styles from "./styles.module.css"

export default function ListCard() {

    const [eventos, setEventos] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3001/eventos')
            .then(resultado => setEventos(resultado.data))
    }, [])


    function formatarData(data) {
        const [ano, mes, dia] = data.split('-');
        
        return `${dia}/${mes}/${ano}`
    }

    return (
        <>
            <div className={styles.listCard}>
                {eventos.map(e => (
                    <Card
                        id={e.id}
                        titulo={e.titulo}
                        imagem={e.imagem}
                        descricao={e.descricao}
                        dataInicio={formatarData(e.dataInicio)}
                        dataFim={formatarData(e.dataFim)}
                        local={e.local}
                    />
                ))}
            </div>
        </>

    )
}