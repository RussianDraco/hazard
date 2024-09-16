# hazard

## Inspiration
You might think that not being able to have some items would just be a meaningless side thing, but to someone who actually is allergic, what they consume can be the matter of life and death. 

Many people take allergies lightly. Coincidentally the ones that do, don't have any. Having allergies means being mindful of every thing you eat and every thing you purchase. Despite being much easier in real life, just a mere turn of the item and the list is there, there are no means to do the same online. 

## What it does
A Chrome extension that is just a click away, Hazard does exactly what it has to. It displays the list of all potential allergens based on your personal information (that we collect through our website), and it states if a certain product is consumable. 

## How we built it

We decided to make a Chrome extension, using Google's dev support, in JavaScript. This chrome extension looks at Amazon products to see if they have any allergens. This took a lot of manipulation of Amazon's webpage HTML, in order to extract this information, which was all done in JavaScript and using Google's API for them.

After making the Chrome extension, we needed a way to store allergen information for different users, and also a home webpage for logging in. So we created a frontend using react and Figma for animations, hosting a general informational website, and using Auth0 to automate and simplify the account creation. We predominantly used react for this. The allergies of all the users are stored in user metadata using auth0, and a cookie was made storing all of the allergies, which is then picked up by the chrome extension, in order to search for the right allergens.

## Challenges we ran into
A significant challenge that we faced was manipulating Amazon's HTML for the chrome extension. Working with Amazon's web face proved to be difficult but this was a necessary challenge that we had to cope up with. 

## Accomplishments that we're proud of
- Getting the chrome extension to work from the Amazon web front. 
- Implementing Auth0 in Hazard for the first time
- Using react and tailwindcss to create a beautiful front-end

Most of our group mates contributed in different ways but we all gained valuable experience working together on Hazard. 

## What we learned
A few things that we can take away from this is
- Learning react and tailwindcss
- Epically working with JavaScript
- Figma vector design and animations
- Creating a Chrome extension (in general)

## What's next for Hazard
Due to our flexible implementation, Hazard is easily able to diversity into different e-commerce stores like Walmart, Target etc, and it is also able to move away from food like fabrics and medication. 
