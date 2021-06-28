Feature: DDL efficiency 

    Scenario: Check that once user is on Mobalytics page opens DDL for build classes and chooses Dawnbringer, page with chosen buildd is opened
    Given I am on Mobalytics Teamfight Tactics page
    When I open DDL with build classes
    And select Dawnbringer class
    Then builds containing Dawnbringers are shown