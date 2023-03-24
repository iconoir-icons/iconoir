## Hierarchy

The foundation of the naming conventions in Iconoir is:

[Object]-[Modifier]-[Container]

[Object]
It contains one or more objects.

[Modifier]
It's often an additional and unique element 
added as a secondary object (`-minus`, `-plus`, `-warning`).

[Container]
A shape used as a container for the object (`-square`, `-circle`).
If a shape is directly part of an object, it's not considered a container.

*You could notice a difference between icons such as 
`user-minus` and `minus-square`. The second one looks different 
because in this case the minus symbol is an [Object], followed 
by the [Container].

## Object-oriented naming

Exceptions apart, icons follow an object-oriented naming and 
should not embed actions in their names.

Examples:
`remove-user` would be wrong. `user-minus` is correct.

## Physical actions

Icons that represent a physical action or movement 
can embed that action in their name.

Examples:
`walking`, `running`, `vehicle-fast`, `crane-lifting` are correct.

## Most-used modifiers and shapes

Modifiers:
`-plus`, `-minus`, `-warning`, `-check`, `-xmark`, `-tag`,
`-ban`, `-slash`.

`-plus-in` and `minus-in`: Differently from `-plus` and `-minus`, these are used when the icon 
has a bigger plus or minus icon in the center or inside the main object.

`-no-access`: It's regularly used when the icon has a restrict 
symbol in a corner.

Shapes:
`-square`, `-circle`.

## Exceptions

If you spot an icon that is not following any of the rules,
please open a new #issue on Github.