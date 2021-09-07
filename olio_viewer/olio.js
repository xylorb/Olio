/*
Olio Definitions and Main API (olio.js)
#2021-09-07 #wwood
*/

/* Olio Terminal Types */
const OlioTermType = {
  NULL: 'null',
  BOOL: 'boolean',
  NUMBER: 'number',
  STRING: 'string',
  ARRAY: 'array',
  OBJECT: 'object',
  OLIO: 'olio'
}

/* Olio Literals Prefixes */
const OlioLiteralPrefix = {
  BIN: '0b',
  OCT: '0o',
  HEX: '0x'
}

/* OPTM Token Types */
const OPTMTokenTypes = {
  OPEN_TAG_START:     '<:',
  OPEN_TAG_END:       ':>',
  CLOSE_TAG_START:    '<:/',
  CLOSE_TAG_END:      '/:>',
  HEADING_1:          '###',
  HEADING_2:          '==',
  HEADING_3:          '===',
  HEADING_4:          '====',
  HEADING_5:          '=====',
  HEADING_6:          '======',
  ITALICS:            '\\^\\^',
  BOLD:               '\\*\\*',
  UNDERLINE:          '__',
  COMMENT_START:      '/\\*',
  COMMENT_END:         '\\*/',
  SOFT_BREAK:         '~~~~~',
  HARD_BREAK:         '-----'
}


/* Parsing Functions */
function tokenize(s) {
  console.log(s)
  let tokens = []
  let re_str = '#'

  for (let i in OPTMTokenTypes) {
    re_str = re_str + '|' + OPTMTokenTypes[i]
  }
  let re = new RegExp(re_str, 'g');
  var myArray = s.matchAll(re)
  console.log(myArray.next())
  console.log(myArray.next())
  console.log(myArray.next())

  return tokens
}
function validate() {}
function jsObjectinate() {}


/* Stringinate Functions */
function validateJSObject() {}
function jsObjectToString() {}



/* OPTM API */
export class OPTM {
  /* take an OPTM string and return JS object comprising a 'meta' object and a 'body' object */
  static parse(s) {
    let result = {}

    let r = tokenize(s)
    if (validate(r)) {

    } else {}

    return result
  }
  /* take a JS object comprising a 'meta' object and a 'body' object and return an OPTM string */
  static stringinate(o) {
    return 'string ...'
  }
}


export class OlioElement {
  constructor() {}
}




export default OPTM
