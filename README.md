# TEST SCENARIOS

## Feature: Login and Logout functionalites

### Scenario: Navigate to login page, successfully login and then logout of dashboard
    Given: User is on wave-trial login page
    When: User fills in 'Email/Username' and 'Password'
    And: User clicks 'Login' button
    And: User is redirect to dashboard page
    And: User clicks on 'Username' profile dropdown
    And: User clicks 'Logout' button
    Then: User is redirected to login page and the message "You have successfully logged out" is displayed

### Scenario: Navigate to login page, attempt to Unsuccessfully login with incorrect credentials
    Given: User is on wave-trail login page
    When: User fills in 'Email/Username' and 'Password'
    And: User clicks 'Login' button
    Then: User is displayed error message "You have entered an incorrect username or password."

### Scenario: Navigate to login page, cancel attmept to reset password
    Given: User is on wave-trial login page
    When: User clicks 'Lost Password?'
    And: User is redirected to forgotPassword page
    And: User clicks 'Cancel' button
    Then: User is redirected to login page


