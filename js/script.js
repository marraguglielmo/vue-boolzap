import {contacts} from './db.js';

const {createApp} = Vue;

createApp({
    data(){
        return{
            contacts,
            baloon:{
                text: '',
                time: ''
            },
            inputMsg : ''
        }
    },

    methods: {

        sendMsg(){
            this.baloon.text = this.inputMsg;
            this.baloon.time = 'adesso'

            this.inputMsg = '';
        },

        addBaloon(){
            
        }
        
    },

    mounted(){

    }
}).mount('#app');