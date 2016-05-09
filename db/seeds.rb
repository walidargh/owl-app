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

Business.create(user_id: 2, name: "Wands by Gregorovitch", address: "Carkitt Market", hours: "8:00 AM - 8:00 PM" , price: 2 )
### 1 Carkitt Market

#Tags
Tag.create(name: "Potions")
Tag.create(name: "Wands")
Tag.create(name: "Fashion")
Tag.create(name: "Sporting Goods")
Tag.create(name: "School Supplies")
Tag.create(name: "Restaurants")
Tag.create(name: "Entertainment")

# Ollivanders Reviews
Review.create(user_id: 1, body: "This place is awesome 10/10 would recommend", rating: 5, business_id: 1)
Review.create(user_id: 2, body: "This place is terrible 1/10 would recommend", rating: 1, business_id: 1)
Review.create(user_id: 1, body: "Got my first wand here!", rating: 5, business_id: 1)
Review.create(user_id: 2, body: "They were all out of elder wands", rating: 1, business_id: 1)

# Ollivanders Images
Photo.create(user_id: 1, business_id: 1, url: "http://res.cloudinary.com/howler/image/upload/v1462574055/wandboxes_webq2z.png")
Photo.create(user_id: 1, business_id: 1, url: "http://res.cloudinary.com/howler/image/upload/v1462229150/Ollivanders_bjc4xk.jpg")
Photo.create(user_id: 1, business_id: 1, url: "http://res.cloudinary.com/howler/image/upload/v1462384550/props-wand-boxes-in-ollivanders-shops-with-cast-and-crew-member-names-details_pytp3n.jpg")
Photo.create(user_id: 1, business_id: 1, url: "http://res.cloudinary.com/howler/image/upload/v1462384550/Wands_display_at_Ollivander_s_Shop_lfsizm.jpg")
Photo.create(user_id: 1, business_id: 1, url: "http://res.cloudinary.com/howler/image/upload/v1462384552/propwand_ko1hqv.jpg")

# Quality Quidditch Images
Photo.create(user_id: 1, business_id: 2, url: "http://res.cloudinary.com/howler/image/upload/v1462412058/Quality-Quidditch-Supplies-19_nyxxag.jpg")
Photo.create(user_id: 1, business_id: 2, url: "http://res.cloudinary.com/howler/image/upload/v1462412058/Quidditch4_j5trjl.jpg")
Photo.create(user_id: 1, business_id: 2, url: "http://res.cloudinary.com/howler/image/upload/v1462412057/Nimbushandle_eamztd.jpg")
Photo.create(user_id: 1, business_id: 2, url: "http://res.cloudinary.com/howler/image/upload/v1462412058/Quidditch4_j5trjl.jpg")
Photo.create(user_id: 1, business_id: 2, url: "http://res.cloudinary.com/howler/image/upload/v1462412058/shop-quidditch_700_zpsdb4e80dc_xcbm2e.jpg")

#Eeylops Images
Photo.create(user_id: 2, business_id: 3, url: "http://res.cloudinary.com/howler/image/upload/v1462229150/Eeylops_sx9xpg.jpg")

#Weasley Images
Photo.create(user_id: 1, business_id: 4, url: "http://res.cloudinary.com/howler/image/upload/v1462467905/Exterior_of_Weasleys_Wizards_Wheezes_shop_im7bgy.jpg")

#Flourish and Blotts Images
Photo.create(user_id: 2, business_id: 5, url: "http://res.cloudinary.com/howler/image/upload/v1462229150/FlourishBlotts_ztk7qi.jpg")

#Florean Images
Photo.create(user_id: 1, business_id: 6, url: "http://res.cloudinary.com/howler/image/upload/v1462570897/icecream_t0jcbz.jpg")
Photo.create(user_id: 1, business_id: 6, url: "http://res.cloudinary.com/howler/image/upload/v1462383031/florean-fortescues-ice-cream-parlor_vjjz6q.jpg")

#Gringotts Images
Photo.create(user_id: 2, business_id: 7, url: "http://res.cloudinary.com/howler/image/upload/v1462565388/HP-and-the-Escape-from-Gringotts-lower_m5ltvf.jpg")
Photo.create(user_id: 2, business_id: 7, url: "http://res.cloudinary.com/howler/image/upload/v1462565096/friendly_goblin_vsgodq.jpg")
Photo.create(user_id: 2, business_id: 7, url: "http://res.cloudinary.com/howler/image/upload/v1462565096/gringotts-goblin_drt8oc.jpg")
Photo.create(user_id: 2, business_id: 7, url: "http://res.cloudinary.com/howler/image/upload/v1462565096/harry-key_lil6cv.jpg")
Photo.create(user_id: 2, business_id: 7, url: "http://res.cloudinary.com/howler/image/upload/v1462565670/dragon_kmqs87.jpg")

#Madam Malkins Images
Photo.create(user_id: 1, business_id: 8, url: "http://res.cloudinary.com/howler/image/upload/v1462383031/Madam-Malkins-Robes_gx5yoj.jpg")

#Magical Menagerie Images
Photo.create(user_id: 1, business_id: 9, url: "http://res.cloudinary.com/howler/image/upload/v1462572480/Magical-Menagerie-2_asnu2v.jpg")

#Wiseacres Wizarding Equipment Images
Photo.create(user_id: 1, business_id: 10, url: "http://res.cloudinary.com/howler/image/upload/v1462572134/Wiseacres-Wizarding-Equipment_oixote.jpg")

#Leaky Cauldron Images
Photo.create(user_id: 1, business_id: 11, url: "http://res.cloudinary.com/howler/image/upload/v1462571883/Leaky-Cauldron-11-oi_dnw4l6.jpg")

#Boring and Burkes Images
Photo.create(user_id: 1, business_id: 12, url: "http://res.cloudinary.com/howler/image/upload/v1462572624/Borgin1_trpq2d.jpg")

#Three Broomsticks Images
Photo.create(user_id: 2, business_id: 13, url: "http://res.cloudinary.com/howler/image/upload/v1462383031/three-broom-sticks_oth7z7.jpg")

#HogsHead Images
Photo.create(user_id: 1, business_id: 14, url: "http://res.cloudinary.com/howler/image/upload/v1462383030/hogshead_za7ttq.jpg")

#Honeydukes Images
Photo.create(user_id: 2, business_id: 15, url: "http://res.cloudinary.com/howler/image/upload/v1462565973/honeydukescool_lkg4fp.jpg")
Photo.create(user_id: 2, business_id: 15, url: "http://res.cloudinary.com/howler/image/upload/v1462383031/Honeydukes_uhzxmb.jpg")

#Wands By Greg Images
Photo.create(user_id: 2, business_id: 16, url: "http://res.cloudinary.com/howler/image/upload/v1462573723/wandsbygreg_udah8t.jpg")






