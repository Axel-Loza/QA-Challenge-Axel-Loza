Feature: Test Login

Scenario: User log succesfully on web platform
    Given user enter in to the site
    When user click on Login
    And enter valid Email 
    And enter valid Password
    Then click Log in button 
    And the login to page is done succesfully

Scenario: Try to login with invalid credentials
    Given user enter in to the site 
    When user click on Login
    And enter invalid credentials
    Then the login is unsuccesfully, label of incorrect credentials is showed

Scenario: Try to login with no email
    Given user enter in to the site 
    When user click on Login
    And enter login with no email
    Then the login is unsuccesfully, label of no email is showed

Scenario: Try to login with no password
    Given user enter in to the site 
    When user click on Login
    And enter login with no password
    Then the login is unsuccesfully, label of no password is showed



