import {contacts} from './db.js';

const {createApp} = Vue;

createApp({
    data(){
        return{
            contacts,
            contactIdActive: 0,
            newMsg :{
                date: 'adesso',
                message: '',
                status: 'sent'
            },
            inputMsg : ''
        }
    },

    methods: {

        addBaloon(){

            if(this.inputMsg.length > 0){
                this.newMsg.message = this.inputMsg;
                    
                this.contacts[this.contactIdActive].messages.push(this.newMsg);
                console.log(this.contacts[this.contactIdActive].messages);

                this.inputMsg = '';
            }
            

        },


    },

    mounted(){

    }
}).mount('#app');