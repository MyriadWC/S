S
=

A micro javascript library for string manipulation

The library takes advantage of method chaining.

Version 1.0

I only started this library earlier today, but decided to build a repositiry early on. It hasn't been fully tested.

how to use:



.delimiter(delimiter, spacing)

this will add a delimiter of your choice between each character if defined like this:

"string".delimiter('-');
> "s-t-r-i-n-g"

but an optional second parameter can be passed defining how many characters should be placed between each delimiter,
with any remaining characters becoming the last section regardless of length:

"longer string".delimiter(',' 3);
>"lon,ger, st,rin,g"



.reverse(words);

the words parameter is optional. If omitted, the text will simply be reversed:

"string".reverse();
>"gnirts"

however, if the parameter "words" is passed, the words in the string will be reversed while the individual letters stay intact:

"A longer sentence is here".reverse("words");
>"here is sentence longer A"



.noSpaces()

simply removes all of the whitespace in a string:

"    a lo ng string     ".noSpaces();
>"alongstring"



.tidySpaces();

turns all whitespace into single spaces:

"     a    sentence      with      too many     spaces        ".tidySpaces();
>" a sentence with too many spaces ";

this may leave the string with spaces before and/or after the text, which can be solved by:

" a      sentence".tidySpaces.trim();



.scramble();

returns a randomly scrambled version of the original text:

"string".scramble();
>"rtgins" etc.



.multiply(factor);

will repeat the original string a specified number of times:

"string".multiply(3);
>"stringstringstring"

