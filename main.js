let app = new Vue({
    el: '#app',
    data:{
        user: {
            name: 'Davide',
            avatar: '_me'
        },
        contacts: [
            {
                name: 'Luna',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2022 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2022 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2022 15:55:23',
                        text: 'Tutto fatto!',
                        status: 'received'
                    },

                ]
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/12/2021 16:30:15',
                        text: 'Ciao, come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/12/2021 16:38:00',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/12/2021 16:40:42',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa',
                        status: 'sent'
                    },

                ]
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '22/11/2021 10:20:35',
                        text: 'Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '22/11/2021 10:22:05',
                        text: 'Sicuro di non aver sbagliato persona?',
                        status: 'sent'
                    },
                    {
                        date: '22/11/2021 10:26:09',
                        text: 'Ah scusa!',
                        status: 'received'
                    },

                ]
            },
            {
                name: 'Maurizio',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '23/01/2020 18:30:45',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '23/01/2020 18:38:05',
                        text: 'Si, ma stasera preferirei andare a mangiare sushi',
                        status: 'received'
                    }
                    
                ]
            }
            
            
        ],
        userActive: null,
        newMessage: "",
        srcUserInput: ""
    },
    methods: {
        isActive: function(index){
            if(index == this.userActive){
                return "";
            }
            return "not-active";
        },
        
        //funzione per assegnare un colore al messaggio a seconda se sia inviato o ricevuto
        statusMessage: function(message){
            if(message.status == 'received'){                
                return "mess-received";
            }
            return "mess-sent";
        },

        //funzione per l'invio del messaggio e risposta "ok" dopo un secondo
        sendMessage: function(message){
            this.contacts[this.userActive].messages.push(
                {
                    text: message,
                    status: 'sent'
            }
            )
            this.newMessage = "";
            setTimeout(() => {
                this.contacts[this.userActive].messages.push(
                    {
                        text: 'Ok',
                        status: 'received'
                    }
                )
            }, 1000)

        },

        searchUser: function(char){
            srcUserInput = char.split('');
            console.log(srcUserInput);
            
            
        }

    }
})