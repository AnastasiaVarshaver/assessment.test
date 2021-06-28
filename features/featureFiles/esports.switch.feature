Feature: Switch efficiency

Scenario: Once user turns switch on the page on, he can see spoilers for the games
Given I am on Mobalytics Esports page
When I click switch in page header to switch it from Spoilers off to Spoilers on state
Then I can see match results on top of the page