## Components and modules

Angular uses components to build the webpage, and utilize modules to basically bundle different pieces, for example
components of our app, into packages.



##Module structure

The app module per example, gives angular the information of which features does my app have and use, in this case, app
 is just an empty javascript class. then we add a decorator to transform this component into a module, the @NgModule,
where it has 4 properties on the object we pass into it.



```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


Declarations - Where we register new components to the module
Imports - Simply allows us to add other modules to this module
Providers -
Bootstrap - Responsible for telling angular, the component we should be aware of at the time we load the application
starts, which components we must recognize in the index.html, and in this case is the AppComponent.

We won't add more components selectors to the index.html file, therefore, we won't touch the bootstrap array, still we
add a new component to angular. and the new component has to be registered in the module so angular knows that this com
ponent exist.

If we don't tell angular that the server component exists, it doesn't know it, just creating the file is not enough,
so we need to register it into the NgModule.
We are telling angular: 'Hey, parth of this module is the server component,  


## Alternative to create components using the cli

on the terminal, we keep the server running and we use the command, let's say we wan't to have our single server comp
in another component, so nested into another component, multiple servers component.

ng g c servers

this will create, inside the app folder, a new folder servers with the servers ts, html and css

## Component ts selector
it works like a css selector, and therefore, we are not limited to selecting by element, we could also put in side
a square bracket to use the attribute selector 
