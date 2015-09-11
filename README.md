#Hashbrown

![vanilla.js](http://vanilla-js.com/assets/button.png)

***Speak, friend, and enter***

Hashbrown is a Chrome extension which automagically salts your passwords and peppers your steaks (patent soon to be pending). 

##How It Works

Hashbrown looks for password fields, blindfolds itself then [salts and hashes your password](http://security.stackexchange.com/questions/51959/why-are-salted-hashes-more-secure) using a the domain name of the site.

Say your password is `hashbrown`. That's pretty insecure.

![Abstruse Goose Comic](http://abstrusegoose.com/strips/Gand0phtCrack.png)

*The Elvish word for 'friend' is the 19,031st word in the Elvish dictionary.  At one word per second, YOU do the math. Taken from the [Abstruse Goose](http://abstrusegoose.com/296).*

But you're lazy like most people and want to use this everywhere for you Gmail, Facebook, online banking and even that shady forum. You don't need a security researcher to tell you that's probably a bad idea, But Hashbrown allows you to do that quite a bit more securely.

It adds a string of characters to the your password based on the domain of the site you're trying to sign into. `hashbrown` on `http://mail.google.com` becomes `hashbrown|mail.google.com`.  This process is known in security circles as salting.

That's better because you're now using a unique password for each site. `hashbrown|facebook.com` is completely different from `hashbrown|stackedit.io`. The site should further salt and hash the password again, before storing it its supersecure database.

This has the added (unintentional but great!) effect of rendering conventional keyloggers useless because they'll record `hashbrown` but not your spanking new salted password.

##More Cool Stuff

For an even more secure experience, Mellon will soon allow you to do the following:

* Choose a custom salt to add to your password. Sure you'll have one more thing to remember but... security!
* Select a custom hashing algorithm (for tinfoil hat owners)
* Order a salted hashbrown from the comfort of your home (stretch goal)

##Known Issues

(these may be unfixable)

###Messes with browser password autofill

Browser will unwittingly save your hashed password and fill it in for you the next time, so hashbrown will helpfully rehash it for you and you won't be able to login.

**Current fix:** Turn off browser saving of passwords. If you use mellon, you'll have significantly fewer passwords to remember anyway.

##I'm a security researcher/enthuasist/genius/etc and this isn't secure at all

Compared to using `hashbrown`, salting and hashing client side is objectively more secure. Yes it's true that if an attacker knows you use Mellon, this approach is much less useful. However, few security measures are much help against a sustained, targeted attack.

##Thanks For All The Fish

Using [min.js](https://github.com/remy/min.js/) and the [CryptoJS](https://code.google.com/p/crypto-js/)