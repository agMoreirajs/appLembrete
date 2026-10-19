import { lembreteDados } from "../data/lembretesDados";

export function getAllLembretes() {
    return lembreteDados.lembretes;
}

export function getLembreteById(pId: number) {
    return lembreteDados.lembretes.find(item => item.lembreteId === pId);
}