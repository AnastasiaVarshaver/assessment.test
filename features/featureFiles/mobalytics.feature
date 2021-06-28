Feature: Open Mobalytics page efficiency 

    Scenario: Check that once user opens Mobalytics page, he sees 'Win more in League of Legends'
    Given I am on Mobalytics page
    When the page is opened
    Then I can see title 'Win more in League of Legends'