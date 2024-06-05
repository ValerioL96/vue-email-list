Descrizione:

1) Attraverso l'apposita API di Boolean, usando axios, con chiamata GET a questo indirizzo https://flynn.boolean.careers/exercises/api/random/mail :

1.1) creo una lista emai vuota in javascript:

-   const { createApp } = Vue

  createApp({
    data() {
      return {
        index:0,
        emailList:[
            {
                response: ''
            }
            
        ]
        
      }
    }
  }).mount('#app')

1.2) aggiungo una chiamata get con axios e gli dico di prendere all'indirizzo dato, che mi darà un email randomica, una domanda e la risposta deve essere stampata in console:

-   const { createApp } = Vue

  createApp({
    data() {
      return {
        index:0,
        emailList:[
            {
                response: ''
            }
            
        ]
        
      }
    },
    methods:{
        getData(){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) =>{
                    console.log(response.data.response);
                    this.response = response.data.response;
                })
            }
    },
    created(){
        this.getData();
    }
  }).mount('#app')



2) generare 10 indirizzi email e stamparli in pagina all'interno di una lista:

2.1) creo un ciclo per generare 10 volte l'email randomica:

- methods:{
        getData(){
            for(let index=0; index< 10 ; index++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) =>{
                    console.log(response.data.response);
                    this.response = response.data.response;
                })
            }
           
        }
    },
    created(){
        this.getData();
    }

2.2) in HTML creo una lista con ciclo v-for per stampare in pagina l'email randomiche:

- < div id="app">

        < ul>
            < li v-for="(item, index) in emailList" :key="index">
                {{item.response}}
            < /li>
        < /ul>

    < /div>