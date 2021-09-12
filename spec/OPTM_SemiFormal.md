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

The OPTM 'production rules' can be divided into multiple subsets depending on the usage context. For example, all OPTM contexts use the same basic set of 'terminals'. However, the _primary_ data or 'body' section of an OPTM data/document may or may not have formatting. And as such, the 'body' section may or may not require production rules for parsing content.

The following will define production rules far a variety of situations.

#### OPTM Terminals ####
```
KWD           ::=  ‘TRUE’ | ‘FALSE’ | 'NULL' | 'UNDEF' | 'NONE'
OTL           ::=  '<:'
OTR           ::=  ':>'
CTL           ::=  ‘<:/‘
CTR           ::=  '/:>'
STL           ::=  '<..'
STR           ::=  '..>'
HL1           ::=  ‘###’
HL2           ::=  ‘==‘
HL3           ::=  ‘===‘
HL4           ::=  ‘====‘
HL5           ::=  ‘=====‘
HL6           ::=  ‘======‘
ITL           ::=  '^^'
BLD           ::=  '**'
STK           ::=  '--'
HLT           ::=  '::'
QTS           ::=
QTD           ::=
CML           ::=  '/*'
CMR           ::=  '*/'
SBR           ::=  '~~~~~'
HBR           ::=  '-----'
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

###### Terminal Names ######

|  |  |  |  |  |  |  |  |
|--|--|--|--|--|--|--|--|
|  |  |  |  |  |  |  |  |
| OTL | open tag left | OTR | open tag right | CTL | close tag left | CTR | close tag right |
| STL | special tag left | STR | special tag right |  |  |  |  |
| SBR | soft bar | HBR | hard bar |  |  |  |  |
| HL1 | heading level 1 | HL2 | heading level 2 | HL3 | heading level 3 | HL4 | heading level 4 |
| HL5 | heading level 5 | HL6 | heading level 6 |  |  |  |  |
| ITL | italic | BLD | bold | STR | strike | HLT | highlight |
| CML | comment left | CMR | comment right | QTS | quotes single | QTD | quotes double |
| KWD | keyword |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
|  |  | L1 | list type 1 | L2 | list type 2 |  |  |
| L3 | list type 3 | CE | check empty | CC | check checked |  |  |
| OL | object left | OR | object right | BNL | binary literal |  |  |
| OCL | octal literal | HXL | hex literal |  |  |  |  |

```
<char>              ::=  
<digit>             ::=  

<number>            ::=  (0-9)*
<string>            ::=  (a-zA-Z0-9 )*
```

#### OPTM Basic ####
At the most basic level of usage, OPTM doesn't determine formatting for the 'body' portion of data and so there is no need for production rules. Everything between the opening and closing meta tags of an OPTM data/document is simply 'body' or _primary_ data to be formatted and used depending on the particular implementation.

#### OPTM Default ####
The default usage context of an OPTM data/document is that the 'body' or _primary_ data is formatted according to OPTM markup/styling. In such cases the following production rules apply.

###### OPTM Symbols (Non-Terminals) ######
```
START_OLIO        ::=  <OPEN_TAG> <BODY> <CLOSE_TAG>
OPEN_TAG          ::=  <OTL> <OTR>
CLOSE_TAG         ::=  <CTL> <META> <CTR>

META              ::=  @ |
                       <LABEL> <ATTR>
LABEL             ::=  @ |
                       <KEY>
KEY               ::=  
ATTR              ::=  @ |
                       <TAG> <ASN_VAL>
TAG               ::=  <ATR> <KEY>
ASN_VAL           ::=  @ |
                       <ASN> <VAL>
value             ::=  <QS> <STRING> <QS> |
                       <QD> <STRING> <QD> |

BODY              ::=
HEADING           ::=
STYLED            ::=
LIST              ::=
OBJECT            ::=
ARRAY             ::=
TEXT              ::=
```

_** where @ means remove symbol, replace symbol with nothing_

#### OPTM Extended ####
Beyond the default usage context of an OPTM data/document the 'body' or _primary_ data is formatted according to OPTM markup/styling that adds more features and abilities. In such cases the following production rules apply.

_** unstable area, developing area_

#### OPTM Wrapping ####
In the OPTM Wrapping context an OPTM data/document formats the 'body' or _primary_ data according to some value or information specified in the 'meta' or _secondary_ data. For example, a meta attribute might indicate the body is to be treated as HTML, JSON, etc. Appropriate production rules would then be employed.

## Discussion ##

The OPTM format is undergoing active development and is still not in a fully stable form. The overall thrust of the project is becoming more clear, but some of the grammar is still under debate and may change.

##### STATUS #####

Overall OPTM: [Semi-Stable; 2021-09-12]

Semi-Formal BNF: [Unstable; 2021-09-12]

##### Points of Debate #####
- many ...

##### Related Information #####
- _Olio Specification_: This repository is a collection of information related to the Olio Specification (which is also located nearby).
- _OPTM Quick Reference_: A guide located nearby and designed to be more accessible to a wider audience.
- _Olio Viewer_: Also, a very basic JavaScript web application is under development (also located nearby in this repository) to make a working example and test-bed for Olio and OPTM formats.
