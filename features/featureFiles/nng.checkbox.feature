Feature: Checkbox efficiency 

    Check for proper checkbox efficiency
    Scenario: Check that once user selects checkbox, it is checked
    Given I am on NNg group page
    When I click checkbox next to Yes, please use e-mail to send me information about other offerings
    Then checkbox is selected