Feature: Searching field efficiency 
@smoke
    Scenario: Check that once user is on Mobalytics page and searches hero named Diana, build page for the hero is opened 
    Given I am on Mobalytics League of Legends page
    And I have a search field displayed on the page
    When enter hero name 'Diana'
    Then page for the hero build is shown