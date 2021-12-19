import uniqid from 'uniqid';
let currentId = 0;

function uniqueId(){
    currentId++;
    return `${currentId}${uniqid()}`
}

export default uniqueId;