# OPTM Semi-Formal Definition #

OPTM is an acronym for Olio Plain-Text and Meta, which is a format for organizing Olio data in a standard and human-readable form. The idea behind this to define a format for information sharing that is both flexible and technology independent, but also robust and recoverable for a very lengthy time into the future.

As used herein, an 'Olio' is simply a collection of information or data such that the Olio object contains a 'meta' object and a 'body' object. The body is the __primary__ data of interest, and the meta is __secondary__ information/data _about_ the actual primary data. OPTM is considered a part of the overall 'Olio Specification' (see elsewhere in this repository).

This document makes use of a pseudo Backus-Naur Form to establish a rough definition of the OPTM format. In the future, this can become more formalized. But for the time being, this document and the contained definition can serve as a basis for coordination of how the format is to be applied.

This definition serves as the starting foundation for the first OPTM implementations in Python and JavaScript (see elsewhere in this repository).

## General Description ##

OPTM represents a data/document composition format, where _primary_ data of interest is stored as plain-text along with _secondary_ plain-text 'meta data' (that is data about the primary data). OPTM is used to make a concrete user-readable representation of an abstract Olio object.

For example, an OPTM document might be recorded as follows:
```
<::>
  Hello World!
<:/ #2021-09-11 #author="me" /:>
```
In this example, the OPTM data/document consists of everything from the first '<:' to the last '/:>'. The _primary_ data of this OPTM is the string "Hello World!", while the _secondary_ data are two attributes about the primary data (one being a simple tag and the other being key/value pair identifying the author).

More precisely, the data/document is defined as starting with an opening meta tag, '<::>', and ending with a closing meta tag, '<://:>'. Everything between these two tags is the _primary_ 'body' data of the document and anything contained within the tags themselves is the _secondary_ 'meta' data of the document.

OPTM does not specify how the 'body' portion should be formatted. OPTM does specify how the 'meta' portion contained within the starting and ending meta tags should be formatted.

** _Possible Unstable Area Below_

OPTM Meta is composed of the same attributes as a generic OlioElement Object: 'label', 'attr'. Meta is found in the first line and last line of an OPTM data/document and is written in a markup style 'tag' form, where the opening tag is formed as ‘<:’ and ends with a ‘:>’, and the closing tag is formed as ‘<:/‘ and ending with ‘/:>’. The label must immediately follow the left most portion of the opening and closing tags. And attributes are separated by a space with 'attr' being denoted in the form ‘#key=“value”’. Further, 'attr' can be written in the form of #attr such that a hashtag type attribute can be applied to the meta. The opening meta tag, the first line of a document, only contains the label. All other meta data must be contained in the closing tag, the last line of a document.

The label name cannot contain white space. The tag and attribute names cannot contain white space, but the value of attributes (enclosed in quotes) can contain white space. Tags and attributes are user defined. The entire protocol is in UTF-8. By default an example of plain text in Olio or OlioElement is processed by the OPTM protocol, but the reserved 'attr' '#type' can be used to specify different processing using different data formats.

## Semi-Formal Pseudo BNF ##
** _The following is an incomplete rough draft (at this point the OPTM Quick Reference is more reliable)._

### Production Rules ###
##### OPTM Terminals #####
```
KW            ::=  ‘TRUE’ | ‘FALSE’ | 'NULL' | 'UNDEF' | 'NONE'
OTL           ::=  '<:'
OTR           ::=  ':>'
CTL           ::=  ‘<:/‘
CTR           ::=  '/:>'
STL           ::=  '<..'
STR           ::=  '..>'
H1            ::=  ‘###’
H2            ::=  ‘==‘
H3            ::=  ‘===‘
H4            ::=  ‘====‘
H5            ::=  ‘=====‘
H6            ::=  ‘======‘
IT            ::=  '^^'
BO            ::=  '**'
ST            ::=  '--'
HL            ::=  '::'
QS            ::=
QD            ::=
CL            ::=  '/*'
CR            ::=  '*/'
SB            ::=  '~~~~~'
HB            ::=  '-----'
L1            ::=  '.   '
L2            ::=  '..  '
L3            ::=  '  - '
CE            ::=  '- [ ]'
CC            ::=  '- [x]'
OL            ::=  '{'
OR            ::=  '}'
AL            ::=  '['
AR            ::=  ']'
ATR           ::=  '#'
ASN           ::=  '='
PL            ::=  '('
PR            ::=  ')'
AL            ::=  '<'
AR            ::=  '>'

BNL           ::=  '0b'
OCL           ::=  '0o'
HXL           ::=  '0x'
```

```
<char>              ::=  
<digit>             ::=  

<number>            ::=  (0-9)*
<string>            ::=  (a-zA-Z0-9 )*
```

##### OPTM Symbols (Non-Terminals) #####
```
S                 ::=  <OPEN_TAG> <BODY> <CLOSE_TAG>
OPEN_TAG          ::=  <OTL> <OTR>
CLOSE_TAG         ::=  <CTL> <META> <CTR>
META              ::=  
BODY              ::=  
```

##### Definition Legend #####

|        |       |       |       |       |       |
|--------|-------|-------|-------|-------|-------|
| KW | keyword |  |  |  |  |
| OTL | open tag left | OTR | open tag right | IT | italic |
| CTL | close tag left | CTR | close tag right | BO | bold |
| STL | special tag left | STR | special tag right | ST | strike |
| H1 | heading level 1 | H2 | heading level 2 | HL | highlight |
| H3 | heading level 3 | H4 | heading level 4 | QS | quote single |
| H5 | heading level 5 | H6 | heading level 6 | QD | quote double |
| CL | comment left | CR | comment right | SB | soft bar |
| HB | hard bar | L1 | list type 1 | L2 | list type 2 |
| L3 | list type 3 | CE | check empty | CC | check checked |
| OL | object left | OR | object right | BNL | binary literal |
| OCL | octal literal | HXL | hex literal | | |

## Discussion ##

The OPTM format is undergoing active development and is still not in a fully stable form. The overall thrust of the project is becoming more clear, but some of the grammar is still under debate and may change.

##### STATUS #####

Overall OPTM: [Semi-Stable; 2021-09-11]

Semi-Formal BNF: [Unstable; 2021-09-11]

##### Points of Debate #####
- many ...

##### Related Information #####
- _Olio Specification_: This repository is a collection of information related to the Olio Specification (which is also located nearby).
- _OPTM Quick Reference_: A guide located nearby and designed to be more accessible to a wider audience.
- _Olio Viewer_: Also, a very basic JavaScript web application is under development (also located nearby in this repository) to make a working example and test-bed for Olio and OPTM formats.
