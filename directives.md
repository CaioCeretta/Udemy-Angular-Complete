# What are Directives?

Directives are instructions in the DOM, and we actually already use directives without knowing it, components are kinds of such instructions in the DOM, once we place the selector of our component, somewhere in our templates, in this point of time, we are instructing angular to add the content of our component template and the business logic in our typescript code in this place where we use the selector, this was our instruction, "Angular, please add the component in this place", and indeed components are directives, but directives with a template, there are also directives without a template, examples:

<p appTurnGreen>Receives a green background!</p>

this appTurnGreen directive, which would be a custom directive we would build, we typically add directives with attributes selectors, but technically, selector of a directive can be configured just like the select of a component, so we can use it just like the css classes or the element style, but again, typically used the attribute style, and on this paragraph, this directive might just color the text green, so angular would find this instruction

@Directive({
  selector: '[appTurnGreen]'
})
export class TurnGreenDirective {
  ...
}

here we would have defined our directive with the directive decorator, to inform angular that this class holds a directive, and there we might have the logic to turn this green