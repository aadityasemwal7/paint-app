window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d")

    // variables 
    let painting = false

    function startPosition(){
        painting = true
    }

    function finishedPosition(){
        painting = false
        ctx.beginPath()
    }

    function draw(e){
        if(!painting) return
        ctx.lineWidth = 2
        ctx.lineCap = 'round'

        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(e.clientX, e.clientY)
    }
    // event listeners 
    canvas.addEventListener("mousedown", startPosition)
    canvas.addEventListener("mouseup", finishedPosition)
    canvas.addEventListener("mousemove", draw)
    
    canvas.width = innerWidth
    canvas.height = innerHeight
})

