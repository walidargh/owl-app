# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#Users
User.create(user_name: "theboywholived", password: "hedwig")
User.create(user_name: "thedarklord", password: "nagini")
User.create(user_name: "padfoot", password: "sirius")
User.create(user_name: "redheadedchessmaster", password: "scabbers")


# Businesses
Business.create(user_id: 1, name: "Ollivanders", address: "Diagon Alley", hours: "8:00 AM - 8:00 PM" , price: 2 )
Business.create(user_id: 2, name: "Quality Quidditch Supplies", address: "Diagon Alley", hours: "9:00 AM - 6:00 PM" , price: 3 )
Business.create(user_id: 1, name: "Eeylops Owl Emporium", address: "Diagon Alley", hours: "8:00 PM - 4:00 AM" , price: 3 )
Business.create(user_id: 1, name: "Weasleys' Wizard Wheezes", address: "Diagon Alley", hours: "11:00 AM - 5:00 PM" , price: 2 )
Business.create(user_id: 1, name: "Flourish and Blotts", address: "Diagon Alley", hours: "11:00 AM - 7:00 PM" , price: 2 )
Business.create(user_id: 1, name: "Florean Fortescue’s Ice Cream Parlour", address: "Diagon Alley", hours: "8:00 AM - 8:00 PM" , price: 2 )
Business.create(user_id: 2, name: "Gringotts Wizarding Bank", address: "Diagon Alley", hours: "8:00 AM - 6:00 PM" , price: 3 )
Business.create(user_id: 1, name: "Madam Malkin's Robes for all Occassions", address: "Diagon Alley", hours: "8:00 AM - 8:00 PM" , price: 1 )
Business.create(user_id: 1, name: "Magical Menagerie", address: "Diagon Alley", hours: "10:00 AM - 7:00 PM" , price: 3 )
Business.create(user_id: 1, name: "Wiseacre’s Wizarding Equipment", address: "Diagon Alley", hours: "11:00 AM - 8:00 PM" , price: 3 )
Business.create(user_id: 1, name: "The Leaky Cauldron", address: "Diagon Alley", hours: "11:00 AM - 2:00 AM" , price: 2 )
#### 11 Diagon Alley

Business.create(user_id: 1, name: "Borgin and Burkes", address: "Knockturn Alley", hours: "1:00 PM - 11:00 PM" , price: 3 )
#### 1 Knockturn Alley

Business.create(user_id: 2, name: "Three Broomsticks", address: "Hogsmeade", hours: "8:00 AM - 2:00 AM" , price: 2 )
Business.create(user_id: 1, name: "The Hog's Head", address: "Hogsmeade", hours: "8:00 AM - 5:00 AM" , price: 1 )
Business.create(user_id: 2, name: "Honeydukes", address: "Hogsmeade", hours: "8:00 AM - 8:00 PM" , price: 2 )
#### 3 Hogs Head

Business.create(user_id: 2, name: "Wands by Gregorovitch", address: "Carkitt", hours: "8:00 AM - 8:00 PM" , price: 2 )
### 1 Carkitt Market

Business.create(user_id: 1, name: "Mr Mulpepper's Apothecary", address: "Diagon Alley", hours: "11:00 AM - 9:00PM", price: 2)
Business.create(user_id: 1, name: "Slugs and Jiggers Apothecary", address: "Diagon Alley", hours: "11:00 AM - 10:00PM", price: 3)
### More Diagon

#Tags
Tag.create(name: "Potions")
Tag.create(name: "Wands")
Tag.create(name: "Fashion")
Tag.create(name: "Sporting Goods")
Tag.create(name: "School Supplies")
Tag.create(name: "Food")
Tag.create(name: "Entertainment")
Tag.create(name: "Pets")

#Taggings
Tagging.create(tag_id: 1, business_id: 17)
Tagging.create(tag_id: 1, business_id: 18)
Tagging.create(tag_id: 2, business_id: 1)
Tagging.create(tag_id: 2, business_id: 16)
Tagging.create(tag_id: 3, business_id: 8)
Tagging.create(tag_id: 4, business_id: 2)
Tagging.create(tag_id: 4, business_id: 10)
Tagging.create(tag_id: 5, business_id: 5)
Tagging.create(tag_id: 5, business_id: 8)
Tagging.create(tag_id: 5, business_id: 10)
Tagging.create(tag_id: 6, business_id: 6)
Tagging.create(tag_id: 6, business_id: 11)
Tagging.create(tag_id: 6, business_id: 13)
Tagging.create(tag_id: 6, business_id: 14)
Tagging.create(tag_id: 6, business_id: 15)
Tagging.create(tag_id: 7, business_id: 4)
Tagging.create(tag_id: 8, business_id: 3)
Tagging.create(tag_id: 8, business_id: 9)

# Ollivanders Reviews
Review.create(user_id: 1, body: "This place is awesome 10/10 would recommend", rating: 5, business_id: 1)
Review.create(user_id: 2, body: "This place is terrible 1/10 would recommend", rating: 1, business_id: 1)
Review.create(user_id: 1, body: "Got my first wand here!", rating: 5, business_id: 1)
Review.create(user_id: 2, body: "They were all out of elder wands", rating: 1, business_id: 1)
Review.create(user_id: 1, body: "Top quality wands that make sure that all my mischief is easily managed.", rating: 1, business_id: 1)
Review.create(user_id: 4, body: "Finally got one of these wands and they are amazing! It feels like the wand was made for me", rating: 5, business_id: 1)
# Quality Quidditch Reviews
Review.create(user_id: 1, body: "Got my first Nimbus 2000 from here and I loved it. Highly reccommended", rating: 5, business_id: 2)
Review.create(user_id: 2, body: "Kind of useless when you can fly around and apparate everywhere", rating: 2, business_id: 2)
Review.create(user_id: 1, body: "Tons of brooms available, just got a Firebolt from here!", rating: 5, business_id: 2)
Review.create(user_id: 2, body: "Again I can literally teleport anywhere in the world, what is the point of an overpriced broom.", rating: 2, business_id: 2)
Review.create(user_id: 2, body: "Okay I cracked and acquired a broom. I will admit that if you cannot fly unsupported this is a viable alternative...", rating: 4, business_id: 2)
Review.create(user_id: 4, body: "My mum got me a Cleansweep 11 from here! They always have the best brooms in stock!", rating: 5, business_id: 2)
# Eeylops Owl Emporium
Review.create(user_id: 1, body: "I got my first owl from here! You will be missed Hedwig", rating: 5, business_id: 3)
Review.create(user_id: 3, body: "They didn't have any snakes! Would not reccommend", rating: 1, business_id: 3)
Review.create(user_id: 1, body: "To the previous reviewer, this is an OWL Emporium, not a snake emporium.", rating: 5, business_id: 3)
Review.create(user_id: 2, body: "They also have very rude customers apparently!", rating: 2, business_id: 3)
Review.create(user_id: 4, body: "Beautiful owls, but kind of expensive! I think I'll just stick to my rat.", rating: 1, business_id: 3)
# Weasleys' Wizard Wheezes
Review.create(user_id: 1, body: "As one of the original investors I may be biased, but this has got to be the coolest shop in all of Diagon Alley! You have to check it out!", rating: 5, business_id: 4)
Review.create(user_id: 2, body: "Zonko's is waaaaaay better! All the moustache glasses here are designed for people with noses. Very exclusive and insensative!", rating: 2, business_id: 4)
Review.create(user_id: 3, body: "It makes me happy to know that there are still people in the wizarding world who continue to solemly swear that they are up to no good. Prongs would be proud.", rating: 5, business_id: 4)
Review.create(user_id: 1, body: "Skiving Snackboxes are a must have when Umbridge is your substitute professor", rating: 5, business_id: 4)
Review.create(user_id: 2, body: "Fever Fudge does not give you chocolate fever! Do not let the sales people convince you otherwise!", rating: 5, business_id: 4)
Review.create(user_id: 4, body: "The owners are jerks! No family discounts? Are you kidding me? Products are great though.", rating: 4, business_id: 4)
# Flourish and Blotts
Review.create(user_id: 1, body: "Cool Place, but they need to be more careful with the books that they distribute! I found some maniac's diary at this place!", rating: 4, business_id: 5)
Review.create(user_id: 2, body: "I left my diary here, if found please contact my associate Malfoy from the Minstry of Magic", rating: 5, business_id: 5)
Review.create(user_id: 1, body: "They have school textbooks. Thats about all that I can say about this place.", rating: 3, business_id: 5)
Review.create(user_id: 4, body: "I have to agree with other reviewers about their issues with diaries. They really need to get better inventory management over there!", rating: 4, business_id: 5)
#Florean Fortescue’s Ice Cream Parlour
Review.create(user_id: 1, body: "Everyone loves ice cream and they have the best!", rating: 5, business_id: 6)
Review.create(user_id: 2, body: "No complaints here! Would be cool if they got some more flavors like garlic. My sense of taste isn't as strong since I lost my nose.", rating: 5, business_id: 6)
Review.create(user_id: 3, body: "Be careful if you're here on the night of full moon! Beware Mooney!", rating: 5, business_id: 6)
Review.create(user_id: 4, body: "Best ice cream around! Love all their flavors!", rating: 5, business_id: 6)
# Gringotts Wizarding Bank
Review.create(user_id: 1, body: "A little intimidating to walk into but I just found out that my parents left me an enormous fortune! No more living under the cupboard for me!", rating: 5, business_id: 7)
Review.create(user_id: 2, body: "I entrusted them with a very valuable part of my soul, but they failed to protect it! I will be taking my business elswhere!", rating: 1, business_id: 7)
Review.create(user_id: 1, body: "Would not reccommend robbing this bank, there is a strong chance that you will be eaten by a dragon!", rating: 4, business_id: 7)
Review.create(user_id: 4, body: "My brother told me that there is a Ukrainian Ironbelly in here, hope I don't run into one of those!", rating: 4, business_id: 7)
# Madam Malkin's Robes for all Occassions
Review.create(user_id: 1, body: "Nice robes. Gryffindor colors look great on me and Madam Malkin always keeps her store stalked", rating: 5, business_id: 8)
Review.create(user_id: 2, body: "She kept shaking while pinning my robes and pricked me! I don't know why she was so scared", rating: 2, business_id: 8)
Review.create(user_id: 3, body: "She was nice enough to put in a custom pocket in my robes for my special map", rating: 5, business_id: 8)
Review.create(user_id: 4, body: "I've been growing pretty quickly so thank goodness Madam Malkin is flexible with her tailoring fee!", rating: 5, business_id: 8)
# Magical Menagerie
Review.create(user_id: 1, body: "Really cool animals, but the snakes would not stop talking to me!", rating: 4, business_id: 9)
Review.create(user_id: 2, body: "So many beautiful snakes. Finally I was able to have a conversation with someone who spoke my language", rating: 5, business_id: 9)
Review.create(user_id: 3, body: "There was a giant dog in there! Just kidding that was me.", rating: 4, business_id: 9)
Review.create(user_id: 4, body: "Cool place, I think my friend Hagrid would love it here!", rating: 5, business_id: 9)
# Wiseacre’s Wizarding Equipment
Review.create(user_id: 1, body: "Kind of expensive, but I guess if you are into potions and divination its pretty cool", rating: 4, business_id: 10)
Review.create(user_id: 2, body: "Tried to convince me to buy a globe of the moon, said it would match the back of my head...", rating: 1, business_id: 10)
Review.create(user_id: 3, body: "Wow this place is expensive, but the moon chart came in handy for my friend. He has some weird monthly rituals", rating: 5, business_id: 10)
Review.create(user_id: 4, body: "WIsh I would have gotten some moon charts from here. Maybe I would have seen that dog bite coming...", rating: 4, business_id: 10)
# The Leaky Cauldron
Review.create(user_id: 1, body: "A staple in diagon alley. Good food and interesting people!", rating: 5, business_id: 11)
Review.create(user_id: 2, body: "The bar maid kept pointing and staring at me! I think someone might have a crush on me!", rating: 4, business_id: 11)
Review.create(user_id: 3, body: "Pefect place to meet some interesting people. Right next to Knockturn Alley too, so mischief is never too far away", rating: 4, business_id: 11)
Review.create(user_id: 4, body: "Gotta love this place! Awesome food and a great place to stay when you are away from home", rating: 4, business_id: 11)
# Borgin and Burkes
Review.create(user_id: 1, body: "Some really shady people come through here! Also there is a vaguely familiar cabinet in there...", rating: 2, business_id: 12)
Review.create(user_id: 2, body: "The cabinet is mine! Keep your hands off! Love this place! They always have what I need and the owner never charges me for anything", rating: 5, business_id: 12)
Review.create(user_id: 3, body: "The owner chases me off every time I show up here, but thats probably because I leave paw prints everywhere", rating: 3, business_id: 12)
Review.create(user_id: 4, body: "The Malfoys are frequent customers here. That can't be a good sign...", rating: 1, business_id: 12)
# Three Broomsticks
Review.create(user_id: 1, body: "Madam Rosmerta is awesome! The three broomsticks is a great place to meet friends and relax on Hogsmeade trips", rating: 5, business_id: 13)
Review.create(user_id: 2, body: "Good stop to rest and reflect. The proprietor might be useful in the future, but will take some convincing...", rating: 4, business_id: 13)
Review.create(user_id: 3, body: "Friendly establishment and doesn't mind pets!", rating: 5, business_id: 13)
Review.create(user_id: 4, body: "Love this place! Best Butterbeer ever!", rating: 5, business_id: 13)
# The Hog's Head
Review.create(user_id: 1, body: "Quiet place to talk. The owner can be a bit of grouch but don't mind him.", rating: 4, business_id: 14)
Review.create(user_id: 2, body: "A place where I can be myself. The owner looks kind of like my arch-rival, but he doesn't seem quite as annoying", rating: 5, business_id: 14)
Review.create(user_id: 3, body: "A little grungy, but the owner is a friend and always makes sure I am taken care of", rating: 5, business_id: 14)
Review.create(user_id: 4, body: "Will never return! There are spiders everywhere!", rating: 3, business_id: 14)
# Honeydukes
Review.create(user_id: 1, body: "Who doesn't love candy! I got an awesome Victor Krum card with my last Chocolate Frog purchase.", rating: 5, business_id: 15)
Review.create(user_id: 2, body: "I took all of the Chocolate Frogs the entire store had and I wasn't on a single card! Never returning!", rating: 2, business_id: 15)
Review.create(user_id: 3, body: "How can anyone dislike candy! Gotta love those Bertie Bott's Beans!", rating: 5, business_id: 15)
Review.create(user_id: 4, body: "Had a bogey-flavored bean from here, but I still love this place! Can't wait to go back and get more Chocolate Frogs!", rating: 5, business_id: 15)
# Wands by Gregorovitch"
Review.create(user_id: 1, body: "Not quite as good as Ollivanders. Also I heard that some of his best stock was stolen a few years back", rating: 4, business_id: 16)
Review.create(user_id: 2, body: "They claimed to have Elder Wands here, and I was disappointed to find out that their stock had been looted! My quest will never end! Another day of unsuccessful shopping", rating: 2, business_id: 16)
Review.create(user_id: 3, body: "Greg is kind of a grouch! But his wants are pretty good for playing fetch.", rating: 3, business_id: 16)
Review.create(user_id: 4, body: "Not very friendly and extremely overpriced! I would rather just save up and go to Ollivanders", rating: 3, business_id: 16)
# Mr Mulpepper's Apothecary
Review.create(user_id: 1, body: "Cool place to go if you like potions! A lot of interesting things can be found here", rating: 4, business_id: 17)
Review.create(user_id: 2, body: "They were all out of bezoars!", rating: 2, business_id: 17)
Review.create(user_id: 3, body: "An old friend used to love this place", rating: 5, business_id: 17)
Review.create(user_id: 4, body: "Potions are not my thing, but they seem to be well stocked", rating: 3, business_id: 17)
# Slugs and Jiggers Apothecary
Review.create(user_id: 1, body: "Way to expensive!", rating: 3, business_id: 18)
Review.create(user_id: 2, body: "High quality ingredients and I don't pay a dime! Gotta love Diagon Alley shop owners", rating: 5, business_id: 18)
Review.create(user_id: 3, body: "Kind of a mess, but the owner doesn't mind dogs!", rating: 5, business_id: 18)
Review.create(user_id: 4, body: "They have potions stuff. Thats all I can really offer.", rating: 5, business_id: 18)


# Ollivanders Images
Photo.create(user_id: 1, business_id: 1, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/wandboxes.png")
Photo.create(user_id: 1, business_id: 1, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Ollivanders.jpg")
Photo.create(user_id: 1, business_id: 1, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/props-wand-boxes-in-ollivanders-shops-with-cast-and-crew-member-names-details.jpg")
Photo.create(user_id: 1, business_id: 1, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Wands_display_at_Ollivander%27s_Shop.JPG")
Photo.create(user_id: 1, business_id: 1, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/propwand.jpg")

# Quality Quidditch Images
Photo.create(user_id: 1, business_id: 2, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Quality-Quidditch-Supplies-19.jpg")
Photo.create(user_id: 1, business_id: 2, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Nimbushandle.jpg")
# Photo.create(user_id: 1, business_id: 2, url: "http://res.cloudinary.com/howler/image/upload/v1462412057/Nimbushandle_eamztd.jpg")
Photo.create(user_id: 1, business_id: 2, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Quidditch4.jpg")
Photo.create(user_id: 1, business_id: 2, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/shop-quidditch_700_zpsdb4e80dc.jpg")

#Eeylops Images
Photo.create(user_id: 2, business_id: 3, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Eeylops.jpg")
Photo.create(user_id: 2, business_id: 3, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Eeylops+(1).jpg")
Photo.create(user_id: 2, business_id: 3, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/owls.jpg")
Photo.create(user_id: 2, business_id: 3, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/eeylops_poster.jpg")

#Weasley Images
Photo.create(user_id: 1, business_id: 4, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Exterior_of_Weasleys_Wizards_Wheezes_shop.JPG")
Photo.create(user_id: 1, business_id: 4, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Weasleys-Wizard-Wheezes_stuff.jpg")
Photo.create(user_id: 1, business_id: 4, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/22_Weasleys-Wizard-Wheezes.jpg")
Photo.create(user_id: 1, business_id: 4, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Weasleys.JPG")

#Flourish and Blotts Images
Photo.create(user_id: 2, business_id: 5, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/FlourishBlotts.jpg")
Photo.create(user_id: 2, business_id: 5, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/flourish_outside.jpg")
Photo.create(user_id: 2, business_id: 5, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/books.png")
Photo.create(user_id: 2, business_id: 5, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Flourish_and_Blotts_sign.jpg")

#Florean Images
Photo.create(user_id: 1, business_id: 6, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/icecream.jpg")
Photo.create(user_id: 1, business_id: 6, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/florean-fortescues-ice-cream-parlor.jpg")
Photo.create(user_id: 1, business_id: 6, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/florean-fortescues-ice-cream-parlor-menu.jpg")
Photo.create(user_id: 1, business_id: 6, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/icecream_glass.jpg")

#Gringotts Images
Photo.create(user_id: 2, business_id: 7, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/HP-and-the-Escape-from-Gringotts-lower.jpg")
Photo.create(user_id: 2, business_id: 7, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/friendly+goblin.jpg")
Photo.create(user_id: 2, business_id: 7, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/gringotts-goblin.jpg")
Photo.create(user_id: 2, business_id: 7, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/harry-key.jpg")
Photo.create(user_id: 2, business_id: 7, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/dragon.jpg")

#Madam Malkins Images
Photo.create(user_id: 1, business_id: 8, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Madam-Malkins-Robes.jpg")
Photo.create(user_id: 1, business_id: 8, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/robes.jpg")
Photo.create(user_id: 1, business_id: 8, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/dresses.jpg")
Photo.create(user_id: 1, business_id: 8, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/madam_malkins_more.jpg")

#Magical Menagerie Images
Photo.create(user_id: 1, business_id: 9, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Magical-Menagerie-2.jpg")
Photo.create(user_id: 1, business_id: 9, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Menagerie3front.jpg")
Photo.create(user_id: 1, business_id: 9, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/bigsnake.jpg")
Photo.create(user_id: 1, business_id: 9, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/catmagicmen.jpg")
Photo.create(user_id: 1, business_id: 9, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/magicmendis.jpg")

#Wiseacres Wizarding Equipment Images
Photo.create(user_id: 1, business_id: 10, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Wiseacres-Wizarding-Equipment.jpg")
Photo.create(user_id: 1, business_id: 10, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/wiseacres_store_front.jpg")
Photo.create(user_id: 1, business_id: 10, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/telescopes.jpgs")
Photo.create(user_id: 1, business_id: 10, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/wiseacres_disco.jpg")

#Leaky Cauldron Images
Photo.create(user_id: 1, business_id: 11, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Leaky-Cauldron-11-oi.jpg")
Photo.create(user_id: 1, business_id: 11, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Diagon-Alley-Food-3.jpg")
Photo.create(user_id: 1, business_id: 11, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/caulron-inside-0615.jpg")
Photo.create(user_id: 1, business_id: 11, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/leaky_cauldron_food.jpg")
Photo.create(user_id: 1, business_id: 11, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/leaky_logo.jpg")

#Borgin and Burkes Images
Photo.create(user_id: 1, business_id: 12, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Borgin1.jpg")
Photo.create(user_id: 1, business_id: 12, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/borgin_big_display.jpg")
Photo.create(user_id: 1, business_id: 12, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/creepy+borgin.jpg")
Photo.create(user_id: 1, business_id: 12, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/borgin_busy.jpg")
Photo.create(user_id: 1, business_id: 12, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/borgin_outside.jpeg")

#Three Broomsticks Images
Photo.create(user_id: 2, business_id: 13, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/three-broom-sticks.jpg")
Photo.create(user_id: 2, business_id: 13, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/ThreeBroomstickslogo.jpg")
Photo.create(user_id: 2, business_id: 13, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/three_busy.jpeg")
Photo.create(user_id: 2, business_id: 13, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/corn_three.jpg")
Photo.create(user_id: 2, business_id: 13, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/ribs.jpg")

#HogsHead Images
Photo.create(user_id: 1, business_id: 14, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/hogshead.JPG")
Photo.create(user_id: 1, business_id: 14, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/hog_alburforth.jpg")
Photo.create(user_id: 1, business_id: 14, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/hog_butter.jpg")
Photo.create(user_id: 1, business_id: 14, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/hog_outside.jpeg")

#Honeydukes Images
Photo.create(user_id: 2, business_id: 15, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/honeydukescool.jpg")
Photo.create(user_id: 2, business_id: 15, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Honeydukes.jpg")
Photo.create(user_id: 2, business_id: 15, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/honey_dukes_people.jpg")
Photo.create(user_id: 2, business_id: 15, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Sugarplums-1-1.jpg")

#Wands By Greg Images
Photo.create(user_id: 2, business_id: 16, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/wandsbygreg.jpg")
Photo.create(user_id: 2, business_id: 16, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/gregdisplaywabds.jpg")
Photo.create(user_id: 2, business_id: 16, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/WandsByGregorovitchStoreFront.jpg")
Photo.create(user_id: 2, business_id: 16, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/dark+wands.jpg")

#Mr Mulpeppers Apothecary Images
Photo.create(user_id: 1, business_id: 17, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/mrmul_sign.jpg") 
Photo.create(user_id: 1, business_id: 17, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/mrmulpepers.jpg")
Photo.create(user_id: 1, business_id: 17, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/mrmul.jpg")
Photo.create(user_id: 1, business_id: 17, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/mrmulApothecary_counter.jpg")
Photo.create(user_id: 1, business_id: 17, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/mrmul_display.jpg")

#Slugs and Jiggers Apothecary Images
Photo.create(user_id: 1, business_id: 18, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/slug_jig_sign.jpg")
Photo.create(user_id: 1, business_id: 18, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Slug+and+Jiggers+037.JPG")
Photo.create(user_id: 1, business_id: 18, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/slug_jig_bottle.jpg")
Photo.create(user_id: 1, business_id: 18, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/slugs_jig_stairs.jpg")







