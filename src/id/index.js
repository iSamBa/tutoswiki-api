import { v4 as uuidv4 } from 'uuid';
import { validate as uuidValidate } from 'uuid';

const Id = Object.freeze({
    createId: uuidv4,
    isValid: uuidValidate
})

export default Id;