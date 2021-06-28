Feature: Radiobutton efficiency 
@smoke
    Check for proper radiobutton efficiency
    Scenario: Check that once user clicks radiobutton, the button is checked
    Given I am on NNg group page
    When I click radiobutton next to Two
    Then the button is checked