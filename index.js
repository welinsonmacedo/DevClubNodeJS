const express=require("express")
const uuid=require("uuid")
const app = express()
app.use(express.json())
const users=[]

app.get('/users', (request, response) => {
    return response.json(users)
})

app.post('/users',(request, response) => {
    const {age,name}=request.body

    let user={id:uuid.v4(),name,age}

    users.push(user)

    return response.status(201).json(user)   
})

app.put('/users/:id', (request, response) => {
    const {id}=request.params
    const {age,name}=request.body
    let userupdate={id,age,name}
    let index=users.findIndex(user => user.id===id)
    if(index<0){
        return response.status(404).json({message:"User Not Found"})
    }

    users[index]=userupdate
    
    console.log(index)
    return response.json(userupdate)
    
})

app.delete('/users/:id', (request, response) => {
    const {id}=request.params
    let index=users.findIndex(user => user.id===id)
    if(index<0){
        return response.status(404).json({message:"User Not Found"})
    }
    users.splice(index,1)

    return response.json("Usuario Deletado com Sucesso")
})
    








app.listen(3000)