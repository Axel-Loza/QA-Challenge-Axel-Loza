Feature: Test Login

Scenario: User log succesfully on web platform
    Given user enter in to the site
    And have valid login credentials
    When user need to login click on Login
    And enter valid Email 
    And enter valid Password
    Then click Log in button 
    And the login to page is done succesfully

Scenario: Try to login with invalid credentials
    Given user enter in to the site 
    And don`t have valid credentials
    When user click on Login
    And enter invalid credentials
    Then the login is unsuccesfully, label of incorrect credentials is showed

