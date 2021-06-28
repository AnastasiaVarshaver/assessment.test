Feature: Drop-down efficiency 

    Check for drop-down efficiency
    Scenario: Check that once user expands dropdown list and selects a value, the value is shown in the ddl
    Given I am on SemanticUI page
    When I click Gender DDL
    And select Female in the list below
    Then value is selected and shown in the DDL