
##  Documentation
In your README.md describe the exported values of each module you have defined. Every function description should include it's airty (expected number of parameters), the expected data for each paramiter (data-type and limitations), and it's behavior (for both valid and invalued use). Feel free to write any additional information in your README.md.


The reader.readFileAsync module basically just takes in a filepath and outputs it as text with the help of 'fs'. It has an arity of 2-- a filepath, and a callback function to which it passes the text (which also allows for the functionality described below)

More interestingly, it is used within the function readFileArrayAsync in a way that feeds it the filepaths of each file in turn, from an array of filepaths. By using an anonymous function that calls readFileArrayAsync as the callback argument of reader.readFileAsync, while also containing reader.readFileAsync, this function can call itself, albeit with a modified "currentIndex" parameter.
The function's arity is 3 -- it takes an array of filepaths, a starting index for that array, and a final callback that is invoked when all indices have been run through.
