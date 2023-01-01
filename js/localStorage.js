

function lisenerScore () {
  const score = document.querySelector(`.score`)
  const monsters = document.querySelectorAll(`.monster`)
  
  for (let i = 0; i > monsters.length; i+=1){
    if(monsters.length = 0) {
      score.innerHTML++
    }
  }

  
  console.log(score)
  
  console.log(monsters)
}

document.getElementById('arena').addEventListener('click', lisenerScore) 