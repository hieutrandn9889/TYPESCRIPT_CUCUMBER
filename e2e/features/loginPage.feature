Feature: To search cucumber in google

    @loginWithReadUser
    Scenario Outline: Verify login mydti readuser/readuser
    Then I input company "<company>" 
    Then I input username to login "<username>" 
    Then I input password to login "<password>"
    Then I click log in button
    Examples:
      | company | username | password |
      | dti     | readuser | readuser |
