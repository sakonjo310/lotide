const assertEqual = require('../assertEqual')


//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("light", "light");
assertEqual("light", "house");
assertEqual(1, 5);
assertEqual(1, "1");

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);