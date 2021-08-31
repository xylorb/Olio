# Olio

###  The Olio Specification (2021-08-31)  ###
The Olio Specification defines the general/abstract concept of an ‘olio’ as a data structure and the 
specification defines some specific/concrete implementations of olios. The word ‘olio’ means “a
miscellaneous mixture or collection”.

The basic logical representation of an olio is that of a container which is made of a ‘meta’ portion and
a ‘body’ portion (both typically contain key/value mappings). 

A common specific representation of an ‘olio’ is the “olio element”. In this form the container’s meta portion
has a ‘label’ item holding a string and an ‘attr’ item holding a dictionary of key/value pairs. Also, in this form,
the body portion consists of a ‘children’ element holding a list of items. Typically, the children are each either
other olio elements or terminal data items (such as boolean, number, string binary, list, map, or null). An olio
element is the basic compositional building-block of data/documents in the Olio
Specification.

The Olio Specification further consists of two parallel formats for data/documents, one for a plain text
representation (OPTM) and one for a binary representation (OSON). The first is intended to be human
readable and both can be used for object serialization. 

Olio is intended to be a unified representation of collections of data/documents whether stored in files
or encoded in strings of text (sequences of bytes ?). The loosely fundamental data types are: boolean;
number; string; binary; list/array; dictionary/object/map; and null.

