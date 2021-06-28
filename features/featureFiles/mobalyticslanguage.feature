Feature: Change language of the page

    Scenario: Check that once user clicks Language icon top right and select Russian, page language is changed
    Given I am on Mobalytics page
    When I click language icon top right
    And select 'Русский' language
    And save changes in the pop-up
    Then page language is changed to Russian