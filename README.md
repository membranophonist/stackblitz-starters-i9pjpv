# Health Insurance Marketplace

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/membranophonist/stackblitz-starters-i9pjpv)

## Technical decisions

Being a simple prototype and knowing that government services have to be accessible to as wide an audience as possible, I chose to write plain HTML, CSS, and JavaScript. This keeps the build process simple (because there isn't one) and ensures high performance on the client side. With code destined for production or a more complicated prototype, a framework and something like Sass can be worth the downsides.

## Wireframe design deviations

Giving the description and favorite fruit values more visual weight than their respective keys and stacking them rather than laying them out in a row seem like changes that makes scanning the list of household members easier.

## Questions for design team

- What are the median and maximum numbers of household members that the UI should accommodate?
- Any indication of what device form factor will be used most frequently when managing a household?
- Should people be able to freely enter a description value or will they pick from a prescribed list?
- Should people be able to edit a household member after adding them?
- Should people be able to remove a household member? Multiple at once?