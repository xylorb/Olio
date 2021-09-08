

import OPTM from './src/olio'

let text_edit = document.getElementById('text_edit')
text_edit.value = "<::>\nHello World!\n<://:>"


let o = OPTM.parse(text_edit.value)
let s = OPTM.stringinate(o)


console.log(s)
