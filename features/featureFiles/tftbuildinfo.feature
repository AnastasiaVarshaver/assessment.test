Feature: Expanded build info visibility  

    Scenario: Check that once user is on Mobalytics page presses arrow icon on the build, expanded info for the build is shown
    Given I am on Mobalytics Teamfight Tactics page
    And I see build 'Dawnbringer Karma' in the list
    When I press arrow icon on Dawnbringers build
    Then General info for the build is shown