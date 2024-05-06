## Attribute vs Structural Directives

Attribute directives are called like this because they "sit" on elemnts, just like normal html attributes.
Different from structural directives, with these directives we never destroy an element from the DOM, we only change
properties of the element.

Structural directives do the same thing, but they also change the structure of the DOM, for example, if we have 
*ngIf on a paragraph, we can remove or place that paragraph on the DOM based on a condition
