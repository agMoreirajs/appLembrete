import { lembreteDados } from "../data/lembretesDados";
import { Lembrete } from "../types/lembrete";

const URL = "http://10.59.47.30/api/lembretes";

export function getAllLembretes() {
    return lembreteDados.lembretes;
}


export function getLembreteById(pId: number) {
    return lembreteDados.lembretes.find(item => item.LembreteId === pId);
}

//API

export async function getAllLembretesByAPI(): Promise<Lembrete[]> {
    const response = await fetch(URL);
    const json = await response.json();
    console.log(json);
    return json;
}

export async function getLembreteByIdByAPI(pId: number): Promise<Lembrete> {
    const response = await fetch(`${URL}/${pId}`);
    const json = await response.json();
    console.log(json);
    return json;
}

export async function criarLembrete(lembrete:Omit<Lembrete, 'LembreteId'>){
    const lembreteUnico = {
        "TituloLembrete": lembrete.TituloLembrete,
        "CorpoLembrete": lembrete.CorpoLembrete,
        "StatusLembrete": lembrete.StatusLembrete
    }

    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(lembreteUnico),
    });

    if (!response.ok) {
        throw new Error('Erro ao criar lembrete');
    }
    console.log(response.json);
    return response.json();
}