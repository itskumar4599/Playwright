Feature: Example UI test

  Scenario: Open Playwright site
    Given I open the Playwright homepage
    Then the title should contain "Playwright"