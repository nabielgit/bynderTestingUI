# TEST SCENARIOS

## Feature: Login and Logout functionalites

### Scenario: Navigate to login page, successfully login and then logout of dashboard
    Given: User is on wave-trial login page
    When: User fills in 'Email/Username' and 'Password'
    And: User clicks 'Login' button
    And: User is redirected to dashboard page
    And: User clicks on 'Username' profile dropdown
    And: User clicks 'Logout' button
    Then: User is redirected to login page and displayed message "You have successfully logged out"

### Scenario: Navigate to login page, attempt to unsuccessfully login with incorrect credentials
    Given: User is on wave-trail login page
    When: User fills in 'Email/Username' and 'Password'
    And: User clicks 'Login' button
    Then: User is displayed error message "You have entered an incorrect username or password."

### Scenario: Navigate to login page, cancel attempt to reset password
    Given: User is on wave-trial login page
    When: User clicks 'Lost Password?'
    And: User is redirected to forgotPassword page
    And: User clicks 'Cancel' button
    Then: User is redirected to login page

# Setup
- Install Docker Desktop
- Create a Dockerfile in project directory

### Execute commands in terminal:

To build image, name it using -t byndertestingui and -f and . for Dockerfile 

`docker build -t byndertestingui -f Dockerfile .` 

To run, -it interactive terminals, --name for container name, byndertestingui is the image name in this case

`docker run -it --name byndertestingui byndertestingui ` 

- Testing on chrome is best practice. However, currently there is a bug with cypress/browsers docker images, this would be the command:

`docker run -it --name byndertestingui byndertestingui -b chrome `

### Go to Docker desktop application
- Select Images 
- Select byndertestingui 
- Hit run to create container
- Go to Containers
- Select container and hit run