# Binding to custom properties

Now, in our code, we are separating the cockpit, which will create the servers, to the serverElement, which is a singular
 server and the app component, which holds the servers created by the cockpit and shown by the serverElement.

 So we learned that we can use property binding to bind into our own properties, properties of our components.

Now one real example

on the serverElement, we are using something like

<strong *ngIf="element.type === 'server'" style="color: red">{{ element.content }}</strong>

the serverELement will be created based on an element which was sent by the app component, so we must hold a property
"element" which represents our server.

But that element is just part of the serverElement component, we can't access it from outside, but we want to access
it from our app component

so for us to be able to access it, in our app component, when we call the app-server, we need to combine our property
element, wich we have on the server component, with the serverElements one, which we have on the app component

so to be able to access the element on the serverElement component, so we need to add it, on the serverElement as

@Input element

now we are exposing this property to "the world" so any parent component hosting our serverElement component, implementing
it through its selector, is now able to bind to the element, so if we do this on our serverElement, and in our app component
we have, for example

  serverElements = [
    {
      type: 'server',
      name: 'Test Server',
      content: 'Just a test'
    },
    {
      type: 'server',
      name: 'Test Server 2',
      content: 'Just a test'
    },

  ];

  then on our html we have

        <app-server-element
      *ngFor="let serverElement of serverElements"
      [element]="serverElement"
      >

  here we are going to print out on the serverElement component, all the serverElements from the app

  <p>
      <strong *ngIf="element.type === 'server'" style="color: red">{{ element.content }}</strong>
      <em *ngIf="element.type === 'blueprint'">{{ element.content }}</em>
    </p>

So basically doing so, we can successfully pass the element down to that component and bind to the property


____________________________________________________________________________________________________________

We can even configure this a bit more, some times we don't want to use the same property outside of the component as we
use inside of it, let's say that element is that exactly the property name i want to use because it makes more sense, 
but outside of it, we maybe don't want to bind to an element property, but to a property srvElement, and that would not
work, because now we are trying to bind to a property angular doesn't know that it would be bindable, because there isn't
a property with @Input named like it.
So in the @Input() we can pass an alias inside of it, with the property name as we want to have it outside of the component


________________________________________________________________________________________________________________

## Inform the parent component that a new server was created

Our app component, may still want to implement the two methods

  onServerAdded() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    })
  }

  onBlueprintAdded() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    })
  }





if i used it like this, it wouldn't work, because the app component ts file does not have the newServerName and neither the newServerContent property, but those are two informations we want to access from the cockpit in the appComponent.

so on the app component html file, where we implement the cockpit, let's say that on the html, we have
something like

(serverAdded)="onServerAdded($event)

here we are binding an event into the server added, but it won't work just yet, in the cockpit component we need to emit
our own event, we are waiting for an event named serverCreated and a blueprintCreated, so in the cockpit component we need
to create two new properties with the name of the functions we are event binding.
We need to make sure that both properties are events that we can emmit, so instead of using the @Input(), to make them
events we have to do it like so, on the cockpit attributes we use it like

serverCreated = new EventEmitter<{serverName: string, serverContent: string}>()

Where EventEmitter receives a type parameter on it, it should receive an object with the variables that we are passing to it
it is an object type containing those two properties

The EventEmitter is an object in the angular framework which allows us to emit our own events, so on the onAddServer method
inside the cockpit ts, 

    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});

emit what we just created, then, on to make it available outside, we need to make this event listenable from outside, which
is @Output(), because we are passing something OUT of the component an not IN


