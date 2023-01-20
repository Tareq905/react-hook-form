import { parseOnlyLetterAndSpace } from '../services/inputParser';
import { checkAtLeastLength, checkIsfilled, checkIsTrue } from '../services/inputValidator';

const registrationModel = [{
    name: 'name',
    label: 'Name',
    type: 'text',
    parseFun: parseOnlyLetterAndSpace,
    validators: [{
        id: 'name-length',
        isValidFun: expression => checkAtLeastLength(expression, 3),
        alert: 'Name is too short! Please write your full name.'
    }]
}, 
 {
    name: 'Sectors',
    label: 'Sectors',
    type: 'select',
    options: [
        { value: '', name: 'None' },
        { value: 'Manufacturing', name: 'Construction materials' },
        { value: 'Manufacturing', name: 'Food and Beverage' },
        { value: 'Manufacturing', name: 'Electronics and Optics' },
        { value: 'Manufacturing', name: 'Other' },
        { value: 'Furniture', name: 'Bedroom' },
        { value: 'Furniture', name: 'Office' },
        { value: 'Furniture', name: 'Other (Furniture)' },
        { value: 'Machinery', name: 'Machinery components' },
        { value: 'Machinery', name: 'Machinery equipment/tools' },
        { value: 'Machinery', name: 'Maritime' },
        { value: 'Machinery', name: 'Repair and maintenance service' },
        { value: 'Metalworking', name: 'Construction of metal structures' },
        { value: 'Metal Working', name: 'Houses and buildings' },
        { value: 'Metal Working', name: 'Metal products' },
        { value: 'Metal Working', name: 'Metal works' },
        { value: 'Metal Working', name: 'CNC-machining' },
        { value: 'Metal Working', name: 'Gas, Plasma, Laser cutting' },
        { value: 'Metal Working', name: 'MIG, TIG, Aluminum welding' },
        { value: 'Plastic and Rubber', name: 'Packaging' },
        { value: 'Plastic and Rubber', name: 'Plastic goods' },
        { value: 'Plastic and Rubber', name: 'Plastic processing technology' },
        { value: 'Plastic and Rubber', name: 'Blowing' },
        { value: 'Plastic and Rubber', name: 'Moulding' },
        { value: 'Plastic and Rubber', name: 'Plastic profiles' },
        
    ],
    validators: [{
        id: 'Sector is required!',
        isValidFun: checkIsfilled,
        alert: 'You have to select your sector.'
    }]
},  {
    name: 'terms',
    label: 'Agree to terms and conditions',
    type: 'checkbox',
    validators: [{
        id: 'terms-required',
        isValidFun: checkIsTrue,
        alert: 'You must agree before saving!'
    }]
}];

export default registrationModel;