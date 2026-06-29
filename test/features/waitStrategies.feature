Feature: Handling latency and session management
  As a tester
  I want the framework to handle slow page loads and menu actions
  So that the suite stays reliable without hard-coded waits

  Scenario: A slow user still reaches the products page
    Given I am on the login page
    When I log in with username "performance_glitch_user" and password "secret_sauce"
    Then the products page should be displayed

  Scenario: The app state can be reset from the burger menu
    Given I am logged in as "performance_glitch_user" with password "secret_sauce"
    And I add the first item to the cart
    When I reset the app state from the menu
    Then the cart badge should not be displayed

  Scenario: A user can log out from the burger menu
    Given I am logged in as "standard_user" with password "secret_sauce"
    When I log out from the menu
    Then the login button should be displayed