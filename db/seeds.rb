# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(user_name: "theboywholived", password: "hedwig")
User.create(user_name: "thedarklord", password: "nagini")


Business.create(user_id: 1, name: "Ollivanders", address: "Diagon Alley", hours: "8:00 AM - 8:00 PM" , price: 2, rating: 5 )
Business.create(user_id: 2, name: "Quality Quidditch Supplies ", address: "Diagon Alley", hours: "9:00 AM - 6:00 PM" , price: 3, rating: 4 )
Business.create(user_id: 1, name: "Eeylops Owl Emporium", address: "Diagon Alley", hours: "8:00 PM - 4:00 AM" , price: 3, rating: 4)
Business.create(user_id: 1, name: "Weasleys' Wizard Wheezes", address: "Diagon Alley", hours: "11:00 AM - 5:00 PM" , price: 1, rating: 5)
Business.create(user_id: 2, name: "Flourish and Blotts", address: "Diagon Alley", hours: "8:00 AM - 8:00 PM" , price: 2, rating: 2)


