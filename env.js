import {z, ZodError} from "zod";

// const ageScheme = z.number().min(18).max(100).int();
// const userAge = 17;

// try{
// const parseUserAge = ageScheme.parse(userAge);
// console.log(parseUserAge)
// } catch(error){
//     if(error instanceof ZodError){
//         console.log(error.issues[0].message);
//     } else{
//         console.log("Unexpected error:", error);
        
//     }
// }

// const portSchema = z.coerce.number.min(1).max(6553).default(3000);
// const PORT = portSchema.parse(process.env.PORT)

export const PORT = process.env.PORT
