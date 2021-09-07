

import OPTM from './olio'

let text_edit = document.getElementById('text_edit')


let o = OPTM.parse(text_edit.value)
let s = OPTM.stringinate(o)


console.log(s)
