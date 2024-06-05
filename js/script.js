  const { createApp } = Vue

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
  }).mount('#app')
