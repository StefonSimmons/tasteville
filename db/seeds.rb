# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Food.@destroy_all
# Flavor. @destroy_all
# User.destroy_all

@user = User.create!({ 
  username: 'StarLord' , 
  email: 'Lord@rings.com',
  password: '123456'
})
p "#{User.count} users created"

@salty = Flavor.create!(
  {name: 'Salty'}
)
@sweet = Flavor.create!(
  {name: 'Sweet'}
)
@umami = Flavor.create!(
  {name: 'Umami'}
)
@bitter = Flavor.create!(
  {name: 'Bitter'}
)
@sour = Flavor.create!(
  {name: 'Sour'}
)
p "#{Flavor.count} flavor(s) created"

@pizza = Food.create!({
  name: 'pizza',
  user: @user,
  flavors: [@salty, @umami, @sweet]
})
p "#{Food.count} food(s) created"


  