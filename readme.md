simple text to binary plugin, usage:
{c}t2b ([-s -p] | -c)

normally it doesn't send the message, if you want to add "-s" at the beginning like so:

{c}t2b -s emma is cute

if you want spaces between each letter add -p flag:

{c}t2b -p emma is cute

this results in "1100101 1101101 1101101 1100001 100000 1101001 1110011 100000 1100011 1110101 1110100 1100101" 

instead of "1100101110110111011011100001100000110100111100111000001100011111010111101001100101"

{c}t2b -c 1100101 1101101 1101101 1100001 100000 1101001 1110011 100000 1100011 1110101 1110100 1100101

this results in "emma is cute" 


###### tank u bowoser and powercord in general yes yes also [this random gist i found on gtihub](https://gist.github.com/belohlavek/90771ccccb11100e76d1)


###### thanks to [this nerd](https://stackoverflow.com/a/56867045)