Feature: Searching field efficiency

Scenario: When user searches for a game, all matching results are shown below
Given I am on GOG page
When I press searching icon
And I type 'Bioshock'
Then all matching results for Bioshock are shown