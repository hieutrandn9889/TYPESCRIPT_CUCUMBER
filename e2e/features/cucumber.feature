Feature: To search cucumber in google

    @CucumberScenario
    Scenario: Cucumber Google Search
        Given I am on google page
        When I type "Cucumber"
        Then I clear the search text
        Then I click on search button
    @TestGoogle
    Scenario Outline: Test google
        Given I open browser
        Then I input "<key>"
        Then I enter keyboard
        When I click button audio
        Examples:
            | key    |
            | monday |