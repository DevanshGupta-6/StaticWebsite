
document.addEventListener('DOMContentLoaded', () =>{
    const yes = document.getElementById("Yes")
    const no = document.getElementById("No")
    const pleas = ["Are you sure?", "Better say yes!", "Babe please :(", "Don't do this", "I'm gonna cry", "Heart Broken &lt;/3"]

    const pleader = document.getElementById("plead")

    let noSize = 1;
    let yesSize = 1;
    let pleaCount = -1;
    no.addEventListener('click', () =>{
        noSize -= 0.1;
        yesSize += 0.1;
        if(pleaCount>=5)
            pleaCount = 5;
        else
           pleaCount++;
        no.style.transform = `scale(${noSize})`
        yes.style.transform = `scale(${yesSize})`
        pleader.innerHTML = pleas[pleaCount]
    })
    yes.addEventListener('click', () =>{
        window.location.href = '/yess'
    })

    

})


