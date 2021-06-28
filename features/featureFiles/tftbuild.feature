Feature: Open TFT page and select a Hasagi build from the list

    Scenario: Check that once user selects TeamfightTactics page from DDL and presses Hasagi build on the page, page for the build is opened
    Given I am on Mobalytics League of Legends page
    When I press DDL located top left
    And I select a Teamfight Tactics from the list
    And I press Hasagi build on the page
    Then page for selected build is shown