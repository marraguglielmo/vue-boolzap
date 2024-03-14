import {contacts} from './db.js';

const {createApp} = Vue;

createApp({
        data(){
            return{
                contacts,
                contactIdActive: 0, //  indice del contatto cliccato (attivo)
                inputMsg : ''
            }
        },

    methods: {

        addBaloon(){
            // controllo lunghezza testo inserito
            if(this.inputMsg.length > 0){
                // creo un nuovo oggetto newMsg
                const newMsg ={
                    date: 'adesso',
                    message: this.inputMsg,
                    status: 'sent'
                };
                // se la condizione è vera pusho il nuovo oggetto nell'array
                this.contacts[this.contactIdActive].messages.push(newMsg);
                this.inputMsg = '';
                this.setBot();
            }
            
        },

        setBot(){
            setTimeout(this.answerBot, 1000)
        },

        // creo una funzione che crea il messaggio mandato da un bot
        answerBot(){
                const botMsg ={
                date: 'adesso',
                message: 'ok',
                status: 'received'
                };
                // lo pusho nell'array per visualizzarlo
                this.contacts[this.contactIdActive].messages.push(botMsg);
            
        }

        

    },

    mounted(){

    }
}).mount('#app');