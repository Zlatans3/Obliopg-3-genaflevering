app.component('word-list',{

    template: 
    /*html*/
    ` 
    <div class="contatiner page">
    <h3>Words</h3>
    <ul>
        <li v-for="words in words">
        {{ sign }}
        </li>
        <li>
        {{ up }}
        </li>
        <li>
        {{ low }}
        </li>
    </ul>
</div>
    `
})