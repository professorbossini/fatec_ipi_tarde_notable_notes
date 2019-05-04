export class NoteService{
    notes = [
        {
            id: '1',
            date: '01/01/2016',
            title: 'Firebase',
            content: 'Que tal programar Serverless?'
        },
        {
            id: '2',
            date: '02/01/2016',
            title: "Angular",
            content: 'Importante para desenvolver com Ionic'

        },
        {
            id: '3',
            date: '03/01/2016',
            title: 'Ionic',
            content: 'Aprenda o básico de Ionic'
        }
    ];

    removeNote (note){
        let indice = this.notes.indexOf(note);
        if (indice > -1){
            this.notes.splice (indice, 1);
        }
    }
}