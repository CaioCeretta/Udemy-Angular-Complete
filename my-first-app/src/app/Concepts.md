## Modules and App module

### When we create a new component, it's almost ready to be used, but to use it we need to change our app module

###  What is an app module?

  Angular uses components to build webpages and modules to basically bundle the project parts, and it basically gives
  angular the information of which features my app use, and as we can see on the file, it's just an empty ts class, like
  our components, and as the component, we transform it into something else by adding decorators to it.

  Modules have 4 properties we set into the object we pass to @NgModule, declarations, imports, providers and bootstrap

  Declarations: Here is where we register new components in the declarations array, in our case, we already registered
  the app component, because it's used in the bootstrap and also is a part of our app 

  Imports: Simply allows us to add other modules to the module, we can use it for adding new features, such as the
  FormsModule library, or others module that we have created in our application

  Providers: 

  Bootstrap: Responsible for telling angular which components it should be aware of at the point of time the whole 
  application starts, basically, which components it should recognize in the index.html file, so we usually don't
  change this property, still, we add a new component to angular, and these new components have to be registered in the
  module so that angular knows that the component exists.   

## Data-binding

### What is data-binding?

We can basically translate it to communication, one between our typescript code of the component with the businness logic
and the templates. 

We can use string interpolation, such as {{ data }}, property binding with a [property]="data"

We can basically use it to communicate the ts file and its changes with the template witch the user sees, but the other
way around its also interesting, for example:

An user clicks a button, we maybe want to trigger something in our ts code. We can achieve this utilizing event binding
(event)="expression" 

and we also have an additional form of data-binding which is two-way-binding, [(ngModel)]="data", where combine both
directions, in this way we are able to react to events and output something at the same time.

