const app = Vue.createApp({
    data: function(){
        return{
            words: '',
            sign: null,
            up: null,
            low: null
        }
    },
    methods:{
        updateWord(word){
            this.sign = word
            this.up = word.toUpperCase();
            this.low = word.toLowerCase();
        }

    }
    
})