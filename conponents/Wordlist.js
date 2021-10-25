app.component('word-list',{
    props:{
        words:{
            type: Array,
            required: true        
        }
    },
    template: 
    /*html*/
    ` 
    <div class="contatiner">
    <h3>Words</h3>
    <ul>
        <li v-for="word in words">
        {{ words.length }}
        </li>
    </ul>
</div>
    `
})