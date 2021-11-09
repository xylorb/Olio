# OPTM - Quick Reference #
The following is a non-formal listing of the current OPTM (Olio Plain Text and Meta) format for quick reference.

### OPTM Enclosing Tags ###
OPTM data/documents enclosing tags:
```
    <:\\:>

    <://:>
```

OPTM data/documents enclosing tags, with label:
```
    <:\label\:>

    <:/label/:>
```

OPTM data/document enclosing tags, with label and meta:
```
    <:\label\:>


    <:|  attrTag  attrKey="value"  |:>
    <:/label/:>
```

### OPTM Meta ###
```
    <:|  attrTag  attrKey="value"  |:>
    <:  attrTag  attrKey="value"  :>
```

### OPTM Body ###

#### Markup Style ####
OPTM Heading Notation:
```
    ###  Heading (Level 1)  ###
    ##  Heading (Level 2)  ##
    #  Heading (Level 3)  #
    ==  Heading (Level 4)  ==
    ===  Heading (Level 5)  ===
```

OPTM Text Styling:
```
    ^^italics^^
    __underline__
    **bold**
    ~~strikethrough~~
    /*comments*/

    “string”
    ‘string’
    > blockquote

    `code`
    ```
      code block
    ```
```

OPTM Lists:
```
    .   A					
    .   .   B					
    .   .   .   C		

    ..  A
    ..  ..  B
    ..  ..  ..  C

      - A
          - B
              - C

    - [x] A
    - [ ] B
    - [ ] C
```

OPTM Tree View:
```
    +++ root
        |__ leaf
        |__ node
        |   \__ leaf
        |   \__ leaf
        \__ leaf
```

OPTM Soft Break:
```
    ~~~~~
```

OPTM Hard Break:
```
    -----
```

OPTM Links:
```
    [displayed link text]<:  #linkref="literal-link-address"  :>
    ![alt text]<:  #linkref=“image-literal-link-address”  :>
    [displayed link text]<:  #ralis=“literal-link-address”  :>
    ![alt text]<:  #ralis=“image-literal-link-address”  :>
```

Key/Value Definition List:
```
    :: name ::
    key
    key := “value”
```

Separated Note:
```
    !!! Note: Title
        Content of Note.
```

Footnotes:
```
    Sentence with footnote. [^1]
    [^1]: footnote
```

#### Embedded Objects ####
Object of Key/Value pairs when starting the line with no spaces before the '{':
```
    {
        key: value
    }
```

Array when starting the line with no spaces before the '[':
```
    [
        item
    ]
```




END
