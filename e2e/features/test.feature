Feature: To test protractor

    @testProtractor
    Scenario: Cucumber Google Search
        Given I open website and check title
        Then I get title of page
        Then I go to google page
        Then I refresh page