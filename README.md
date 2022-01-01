# Receipt => Plain Text
This is simple library to create receipt. 


## Instance
    const {spaceBetween, loopingText, centerPosition, justifyContent, convertString} = plainreceipt({max_character: 32, near_space_by_position: 1, space_character: '\xa0'})

- max_character: maximum characters in one line on thermal paper
- near_space_by_position: space between by position => left | right
- space_character: space character `\xa0` or just leave a space


## Text Format
- `centerPosition('your text')` : make a text align center
- `loopingText('#')`: looping # by max_character
- `spaceBetween([ ["first", "second", "third"] ])`: giving space between column with near position is left or
- `spaceBetween([ ["first", "second", "third"] ], 'right')` : to make it near position is right
- `justifyContent([ ["first", "second"] ], 'right')`: to make it content align right




