window.onload = function() {
    var main = document.querySelector("main")
    var container = document.querySelector("main .container")
    container.animate([
        {opacity:0,height:'0px'},
        {offset:.65,opacity:0,height:'0px'},
        {offset:.66,height:'auto'},
        {offset:.8,opacity:0},
        {opacity:1}
    ], {
        duration: 3500,
        iterations:1,
    })
    main.animate([
        {flex:'none',padding:'0'},
        {offset:.4,flex:'none',padding:'0'},
        {offset:.65,flex:'1 0 auto',padding:'1em'}
    ], {
        duration: 3500,
        iterations:1,
    })
}