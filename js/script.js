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
                console.log(this.contacts[this.contactIdActive].messages);

                this.inputMsg = '';
            }
            
        },


    },

    mounted(){

    }
}).mount('#app');