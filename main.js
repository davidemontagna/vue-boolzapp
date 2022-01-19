let app = new Vue({
    el: '#app',
    data:{
        contacts: [
            {
                name: 'Luna',
                avatar: 'img/_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:55:23',
                        text: 'Tutto fatto!',
                        status: 'received'
                    },

                ]
            },
            {
                name: 'Fabio',
                avatar: 'img/_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:15',
                        text: 'Ciao, come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:38:00',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:40:42',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa',
                        status: 'sent'
                    },

                ]
            },
            {
                name: 'Samuele',
                avatar: 'img/_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '22/03/2020 10:20:35',
                        text: 'Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '22/03/2020 10:22:05',
                        text: 'Sicuro di non aver sbagliato persona?',
                        status: 'sent'
                    },
                    {
                        date: '22/03/2020 10:26:09',
                        text: 'Ah scusa!',
                        status: 'received'
                    },

                ]
            },
            {
                name: 'Maurizio',
                avatar: 'img/_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 18:30:45',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 18:38:05',
                        text: 'Si, ma stasera preferirei andare a mangiare sushi',
                        status: 'received'
                    }
                    
                ]
            }
        ],
        userActive: 0,
        newMessage: "",
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

        }

    }
})