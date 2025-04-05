import zod from 'zod'; 

const userSchema = zod.object({
    email: zod.string().email(), 
    password : zod.string()

})

export default userSchema; 

