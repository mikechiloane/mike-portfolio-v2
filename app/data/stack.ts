
function generateStack(){
    const stack = [];

    for (let i = 0; i <= 27; i++){
        stack.push(`/Stack/${i}.png`);
    }

    return stack;

}


export const stackImages = generateStack();