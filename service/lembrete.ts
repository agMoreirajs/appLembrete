import { lembreteDados } from "../data/lembretesDados";

const URL = "http://10.59.47.30:8081/api/lembretes";

export function getAllLembretes() {
    return lembreteDados.lembretes;
}

export async function getAllLembretesByAPI() {
    try {
        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json();

return data.map((item: any) => ({
    lembreteId: item.lembreteId,
    tituloLembrete: item.tituloLembrete,
    corpoLembrete: item.corpoLembrete,
    statusLembrete: item.statusLembrete,
}));

    } catch (error) {
        console.error("Erro ao buscar lembretes:", error);
        throw error;
    }
}

export function getLembreteById(pId: number) {
    return lembreteDados.lembretes.find(item => item.lembreteId === pId);
}

