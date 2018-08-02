// export const createCourse = (course) => (

//     {
//          type: "CREATE_COURSE",
//          course
        
//         }

// );

export function createCourse (course)
{
    
    return {
        
        type: "CREATE_COURSE", course
    }
}