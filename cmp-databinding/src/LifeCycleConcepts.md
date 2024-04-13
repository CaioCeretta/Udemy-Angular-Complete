# LifeCycle

ngOnInit is a lifecycle hook, and angular supports several of them

Whenever a new component is instantiated in angular, angular goes through a couple of phases in this creation process,
and it will gives us a chance to hook these phases and execute some code. We can hook into this phases by implementing
some methods that angular will call if they are present

## Phases

1 - ngOnChanges: this is a hook that can be executed multiple times, it is executed right in the start, when the new
component is created, but thereafter, it's also, always called whenever our bound input properties changes, which are
properties decorated with @Input(), so, whenever these properties receive values

2 - ngOnInit: this is the second hook that gets executed once when the component has been initialized, this doesn't mean
that we can see it yet or that it has been added to the DOM, but angular finished the basic initialization, our properties
can now be accessed, and initialized.
Basically the object was created, and this will run after the constructor

3 - ngDoCheck: this will also run multiple times, and this method will be executed a lot, because this will run whenever 
the change detection runs, which is when angular determines whenever something changes on a component, and it needs to change
something in the template

side note: on every check, not if only something has changed, a lot of times ngDoCheck will run because we clicked some button
that doesn't change anything, but still is an event, and on events, angular has to check if something changed

4 - ngAfterContentInit: This is called after content (ng-content) has been projected int oview

5 - ngAfterContentChecked: Called after doCheck and after the content got initialized

6 - ngAfterViewInit: Called after the component's view (and childs views) has been initialized, once after the view has
been rendered

7 - ngAfterViewChecked: Called every time the view (and child views ) have been checked

8 - ngOnDestroy: called once the component is about to be destroyed
