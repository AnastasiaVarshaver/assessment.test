Feature: Change region 

    Scenario: Check that once user presses region and select EU West from the pop-up, region is changed
    Given I am on Mobalytics League of Legends page
    When I press RU button located on the search field
    And select EU West region from the pop-up
    Then region is changed