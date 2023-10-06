# Lifecycle

When a new component is instantiated, angular goes through a couple of different phases in this creation process, and it will give us a chance to hook into this phases and execute some code by implementing some methods, and angular will call if they are present.

# Phases

## 1. ngOnChanges

May be executed multiple times, it's executed right at the start, when the component is instantiated, but thereafter it's also called whenever one of our bound input properties changes, and by that, i mean properties decorated with the @Input(), so whenever these properties receive new values

## 2. ngOnInit

Called once the component is instantiated, and it will run after the constructor.

## 3. ngDoCheck

This method will be executed a lot, it is called during every change detection run,  and it is simply the system on which angular determines whether something changed inside of a component and whenever it needs to change something in the template. Basically if something changes and angular needs to re render that component