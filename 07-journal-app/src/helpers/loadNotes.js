import { db } from "../firebase/firebase-config"

export const loadNotes = async(uid) => {
    const notesSnap = await db.collection(`journal/${uid}/notas`).get(),
    notes = [];

    notesSnap.forEach(snapHijo => notes.push({
        id: snapHijo.id,
        ...snapHijo.data()
    }))

    return notes;
    
}