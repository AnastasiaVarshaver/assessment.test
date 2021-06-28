Feature: Redirection to Mobalytics TOS page

Scenario: Check that once user hovers over and clicks on TOS link in page footer, he is redirected to Mobalytics TOS page
Given I am on Mobalytics League of Legends page
When I hover over 'Terms of Service' button in page footer
Then the button is highlighted
And I click 'Terms of Service' button
And I am redirected to Mobalytics Terms of Service page