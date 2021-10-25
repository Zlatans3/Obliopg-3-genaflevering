app.component('word-form',{
    template:
    /*html*/
    ` 
    <div class="container">
    <div class="row">
    
    <form class="form alert alert-dark" @submit.prevent="onSubmit">

    <h3>Words</h3>
    <div class="form-group">
      <label for="write-word">Word:</label>
      <input type="word" class="form-control" id="write-word" placeholder="Write a word" v-model="word">
      <input type="submit" class="form-control btn btn-primary" value="Submit">
    </div>
    </form>
  </div>
</div>
    ` ,
    data(){
      return{
        word: ''
      }
    },
    methods:{
      onSubmit(){
        let submitWord = {
          word: this.word
        }
        this.$emit('word-submitted', submitWord)

        this.word = ''
      }
    }
})