Feature: Currency change on the GOG page

Scenario: Once user changes RUB to USD, all price tags are displayed as USD
Given I am on GOG page
When I click USD on the page footer
Then all price tags are displayed as USD