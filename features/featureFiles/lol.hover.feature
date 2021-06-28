Feature: Hover efficiency 

    Check for proper hover efficiency
    Scenario: Check that once user is on Mobalytics page and hover over a DDL button, the button is highlighted 
    Given I am on Mobalytics page
    And I have a DDL button displayed top left
    When I hover over DDL button 
    Then the button is highlighted