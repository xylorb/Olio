# Olio Specification (2021-08-31) #

The Olio Specification defines the general/abstract concept of an ‘olio’ as a data structure and the 
specification defines some specific/concrete implementations of olios. The word ‘olio’ means “a
miscellaneous mixture or collection”.

The basic logical representation of an olio is that of a container which is made of a ‘meta’ portion and
a ‘body’ portion (both typically contain key/value mappings). 

A common specific representation of an ‘olio’ is the “olio element”. In this form the container’s meta portion
has a ‘label’ item holding a string and an ‘attr’ item holding a dictionary of key/value pairs. Also, in this form,
the body portion consists of a ‘children’ element holding a list of items. Typically, the children are each either
other olio elements or terminal data items (such as boolean, number, string, binary, list, map, or null). An olio
element is the basic compositional building-block of data/documents in the Olio Specification.

The Olio Specification further consists of two parallel formats used to record/store for data/documents, one for a
plain text representation (OPTM) and one for a binary representation (OSON). The first is intended to be human
readable and both can be used for object serialization. 

Olio is intended to be a unified representation of collections of data/documents, which may be stored in together
or separately in one or more files (encoded as plain text or as sequences of bytes). The loosely fundamental data
types are: boolean; number; string; binary; list/array; dictionary/object/map; and null.


### Representations ###

#### Abstract Olio ####

    {
        meta: {},
        body: {}
    }

#### Concrete OlioElement ####
The most common form of an Olio is the 'OlioElement', which has a meta section comprising a 'label' (string), 'attr' (dictionary of Olio data object’s attributes); and a body section comprising a list of
“children”.

	{
		meta: {
			label: '',
			attr: {},
	  	},
		body: {
			children: [NULL | BOOL | NUM | STR | BIN | LIST | MAP | OLIO]
	}

### Serialization Formats ###
The Olio Specification has two serialization formats, OPTM and OSON.

#### OPTM Format of an Olio Object ####
The following is a brief and informal description of the OlioElement Plain Text and Meta (OPTM) protocol for data/document storage.

OPTM represents a document format and composition of data where data is stored as plain-text along along side plain-text meta data. OPTM is used to make a user readable representation of an Olio Object. The first and last line of a document are 'meta' tags surrounding the body of the document. Everything in between the meta tags is the regular content or 'body' of the document. OPTM does not specify how the 'body' portion should be formatted. OPTM does specify how the 'meta' portion contained within the starting and ending meta tags should be formatted.

OPTM Meta is composed of the same attributes as a generic OlioElement Object: 'label', 'attr'. Meta is found in the first line and last line of an OPTM data/document and is written in a markup style 'tag' form, where the opening tag is formed as ‘<:’ and ends with a ‘:>’, and the closing tag is formed as ‘<:/‘ and ending with ‘/:>’. The label must immediately follow the left most portion of the opening and closing tags. And attributes are separated by a space with 'attr' being denoted in the form ‘#key=“value”’. Further, 'attr' can be written in the form of #attr such that a hashtag type attribute can be applied to the meta. The opening meta tag, the first line of a document, only contains the label. All other meta data must be contained in the closing tag, the last line of a document. 

The label name cannot contain white space. The tag and attribute names cannot contain white space, but the value of attributes (enclosed in quotes) can contain white space. Tags and attributes are user defined. The entire protocol is in UTF-8. By default an example of plain text in Olio or OlioElement is processed by the OPTM protocol, but the reserved 'attr' '#type' can be used to specify different processing using different data formats.

##### OPTM Meta Attribute Reserved Keywords #####
The following keywords are reserved for use with the 'attr' portion:
	label	
	version			(version info pertaining to OPTM)
	type			(how to process the olio - default, html, etc.)
	ralis			(reserved for olio’s ralis identification)
	linkref			(equivalent to href)


