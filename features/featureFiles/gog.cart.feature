Feature: Check adding items to the cart from the shopping list

Scenario: Add a game to the cart

Given I am on GOG shopping page
When I press on Hoziron Zero Dawn game logo
And I click 'Добавить в корзину' button
Then the game has been added to cart
And the number on the cart displays 1 as the number of added items