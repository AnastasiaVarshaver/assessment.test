Feature: DDL efficiency 

    Check for proper DDL efficiency
    Scenario: Check that once user is on Mobalytics page and selects a value, the page for selected value is shown
    Given I am on Mobalytics page
    And I have a DDL displayed top left
    When I click on drop-down list 
    And select Teamfight Tactics
    Then page for Teamfight Tactics is shown