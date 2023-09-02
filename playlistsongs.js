let usersSongs=[]

function addusersongstoLS(){
    localStorage.setItem('usersSongs',JSON.stringify(usersSongs))
    console.log('usersSongs added')
    console.log(usersSongs.length+100)
}

