Feature: Login and checkout form validation
  As a tester
  I want the application to reject invalid form submissions
  So that users always receive clear and correct error messages

  Scenario Outline: Missing login credentials are rejected
    Given I am on the login page
    When I log in with username "<username>" and password "<password>"
    Then I should see the error "<error>"

    Examples:
      | username      | password | error                |
      |               |          | Username is required |
      | standard_user |          | Password is required |

  Scenario: Checkout requires a postal code
    Given I am logged in as "standard_user" with password "secret_sauce"
    And I add the first item to the cart
    And I proceed to checkout
    When I continue without entering a postal code
    Then I should see the error "Postal Code is required"