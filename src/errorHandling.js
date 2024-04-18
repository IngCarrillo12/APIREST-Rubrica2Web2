export const errors = (codeError)=>{
    console.log(codeError)
    if(codeError === 1048){
        return {message:'Verifique que todos los campos esten llenados'}
    }else if(codeError ===1452){
        return {message:'Verifique que exista una habitacion con ese id'}
    }
}