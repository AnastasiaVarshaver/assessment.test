Feature: Clear all selected filters

Scenario: After selecting a sertain filter and clicking Clear button, all filters are cleared

Given I am on TFT Team Comps page
When I select an 'S' filter in builds list header
And press Clear all button
Then all selected filters are cleared