Feature: To search cucumber in google

    @sw
    Scenario Outline: Delete account
        Given I open browser on chrome
        Then I input username "<username>" 
        Then I input password "<password>" 
        Then I click login button
        Then I click customer button
        Then I input autotest "<autotest>"
        Then I click search user button
        Then I click delete button
        Examples:
            | username|password|autotest|
            | hieutran |11111aA@1111|autotest_77|