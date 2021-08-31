# OPTM - Quick Reference #
The following is a non-formal listing of the current OPTM (Olio Plain Text and Meta) format/protocol for quick reference.

### OPTM Enclosing Tags ###
OPTM data/documents enclosing tags:

    <::>
    
    <://:>
    
OPTM data/documents enclosing tags, with label:

    <:label:>
    
    <:/label/:>
    
OPTM data/document enclosing tags, with label and meta:

    <:label:>
    
    <:/label #attrTag #attrKey="value" /:>

### OPTM Enclosed Body ###

#### Markup Style ####
OPTM Heading Notation:

    ###  Heading (Level 1)  ###
    ==  Heading (Level 2)  ==
    ===  Heading (Level 3)  ===
    ====  Heading (Level 4)  ====
    =====  Heading (Level 5)  =====
    ======  Heading (Level 6)  ======

OPTM Text Styling:

    ^^italics^^
    __underline__
    **bold**
    /*comments*/
    
OPTM Lists:

    .   A					
    .   .   B					
    .   .   .   C		

    ..  A
    ..  ..  B
    ..  ..  ..  C

    -   A
        -   B
            -   C

OPTM Soft Break:

    ~~~~~
    
OPTM Hard Break:

    -----
   
OPTM Links:

    [displayed link text](literal-link-address)
    [displayed link text]<./#ralis=“literal-link-address”/.>

#### Quick Objects ####
Object of Key/Value pairs when starting the line with no spaces before the '{':

    {
        key: value
    }

Array when starting the line with no spaces before the '[':




:: name ::
key	
key = “value”


                    	


