## Model

In the last lecture i didn't talk about models

All the code will be in the recipes/recipe.model.ts

Let's use the recipes module, for example, a model in the end, shoudl just be a blueprint of the objects we creat and the
ts class does just this job, so in the model.ts we create a class which can be instantiated, so we can create new objects
based on the setup that we provide on the model class, and we can define how a recipe should look like in the class

now, with the model created, when we create the recipes array in the recipes-list, we can define that its type is an array
of Recipe[]
