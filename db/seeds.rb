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

#Weasley Images
Photo.create(user_id: 1, business_id: 4, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Exterior_of_Weasleys_Wizards_Wheezes_shop.JPG")

#Flourish and Blotts Images
Photo.create(user_id: 2, business_id: 5, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/FlourishBlotts.jpg")

#Florean Images
Photo.create(user_id: 1, business_id: 6, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/icecream.jpg")
Photo.create(user_id: 1, business_id: 6, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/florean-fortescues-ice-cream-parlor.jpg")

#Gringotts Images
Photo.create(user_id: 2, business_id: 7, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/HP-and-the-Escape-from-Gringotts-lower.jpg")
Photo.create(user_id: 2, business_id: 7, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/friendly+goblin.jpg")
Photo.create(user_id: 2, business_id: 7, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/gringotts-goblin.jpg")
Photo.create(user_id: 2, business_id: 7, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/harry-key.jpg")
Photo.create(user_id: 2, business_id: 7, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/dragon.jpg")

#Madam Malkins Images
Photo.create(user_id: 1, business_id: 8, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Madam-Malkins-Robes.jpg")

#Magical Menagerie Images
Photo.create(user_id: 1, business_id: 9, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Magical-Menagerie-2.jpg")

#Wiseacres Wizarding Equipment Images
Photo.create(user_id: 1, business_id: 10, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Wiseacres-Wizarding-Equipment.jpg")

#Leaky Cauldron Images
Photo.create(user_id: 1, business_id: 11, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Leaky-Cauldron-11-oi.jpg")

#Boring and Burkes Images
Photo.create(user_id: 1, business_id: 12, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Borgin1.jpg")

#Three Broomsticks Images
Photo.create(user_id: 2, business_id: 13, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/three-broom-sticks.jpg")

#HogsHead Images
Photo.create(user_id: 1, business_id: 14, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/hogshead.JPG")

#Honeydukes Images
Photo.create(user_id: 2, business_id: 15, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/honeydukescool.jpg")
Photo.create(user_id: 2, business_id: 15, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Honeydukes.jpg")

#Wands By Greg Images
Photo.create(user_id: 2, business_id: 16, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/wandsbygreg.jpg")

#Mr Mulpeppers Apothecary Images
Photo.create(user_id: 1, business_id: 17, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/mrmul_sign.jpg") 
Photo.create(user_id: 1, business_id: 17, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/mrmulpepers.jpg")

#Slugs and Jiggers Apothecary Images
Photo.create(user_id: 1, business_id: 18, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/slug_jig_sign.jpg")
Photo.create(user_id: 1, business_id: 18, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/Slug+and+Jiggers+037.JPG")
Photo.create(user_id: 1, business_id: 18, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/slug_jig_bottle.jpg")
Photo.create(user_id: 1, business_id: 18, url: "https://s3-us-west-1.amazonaws.com/owlhowler/howler/slugs_jig_stairs.jpg")







