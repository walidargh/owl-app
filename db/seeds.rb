# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(user_name: "theboywholived", password: "hedwig")
User.create(user_name: "thedarklord", password: "nagini")


Business.create(user_id: 1, name: "Ollivanders", address: "Diagon Alley", hours: "8:00 AM - 8:00 PM" , price: 2 )
Business.create(user_id: 2, name: "Quality Quidditch Supplies ", address: "Diagon Alley", hours: "9:00 AM - 6:00 PM" , price: 3 )
Business.create(user_id: 1, name: "Eeylops Owl Emporium", address: "Diagon Alley", hours: "8:00 PM - 4:00 AM" , price: 3 )
Business.create(user_id: 1, name: "Weasleys' Wizard Wheezes", address: "Diagon Alley", hours: "11:00 AM - 5:00 PM" , price: 1 )
Business.create(user_id: 2, name: "Flourish and Blotts", address: "Diagon Alley", hours: "8:00 AM - 8:00 PM" , price: 2 )

Review.create(user_id: 1, content: "This place is awesome 10/10 would recommend", rating: 5, business_id: 1)
Review.create(user_id: 2, content: "This place is terrible 1/10 would recommend", rating: 1, business_id: 1)
Review.create(user_id: 2, content: "Got my first wand here!", rating: 5, business_id: 1)
Review.create(user_id: 1, content: "They were all out of elder wands", rating: 1, business_id: 1)