import {contacts} from './db.js';

const {createApp} = Vue;

createApp({
    data(){
        return{
            contacts,
            contactIdActive: 0,
            inputMsg : ''
        }
    },

    methods: {

        addBaloon(){

            if(this.inputMsg.length > 0){

                const newMsg ={
                    date: 'adesso',
                    message: this.inputMsg,
                    status: 'sent'
                };
                
                    
                this.contacts[this.contactIdActive].messages.push(newMsg);

                this.inputMsg = '';

                this.setBot();
            }
            
        },

        setBot(){
            setTimeout(this.answerBot, 1000)
        },

        answerBot(){
                const botMsg ={
                date: 'adesso',
                message: 'ok',
                status: 'received'
                };
                
                this.contacts[this.contactIdActive].messages.push(botMsg);
            
                
        }

    },

    mounted(){

    }
}).mount('#app');