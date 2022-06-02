Feature: Test task creation

Scenario: Create single task and validate it was created succesfully
    Given user login to the site
    When user click on create new task
    And type the name for the task
    And select the day as today
    And click on Add Task button
    Then  the task is created on today site
    And the task is created on inbox site

Scenario Outline: Create multiple tasks and validate that they have been created successfully
    Given user login to the site
    When user click on create new task
    And type the name "<Name>""<Number>" for the task 
    And select the day as today
    And click on Add Task button
    Then the task "<Name>""<Number>" is created on today site
    And the task "<Name>""<Number>" is created on inbox site

  Examples:
    | Name     | Number |
    |multiTask |   +1   |
    |multiTask |   +2   |  
    |multiTask |   +3   |
    |multiTask |   +4   | 
    |multiTask |   +5   |

Scenario Outline: Create multiple tasks in single session and validate that they have been created successfully
    Given user login to the site
    When user create <Number> tasks
    Then all the <Number> tasks are created on today site
    And all the <Number> tasks are created on inbox site

    Examples:
    | Number |
    |5|