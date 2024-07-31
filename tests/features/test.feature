Feature: Site search test

    Background:
        Given User navigates to the application
    Scenario: Search is working
        And User accepts cookies
        And User enter search term "<SearchingTerm>"
        When User click on search button
        Then Browser will show results
    Examples:
        | SearchingTerm |
        | lol  |
