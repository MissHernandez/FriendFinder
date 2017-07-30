# FriendFinder

### Objective

For this assignment, we were to use NodeJS and Express to build a "FriendFinder" application. This full-stack site takes in the results of the user's surveys and compares their answer with those from other users. The app then displays the name and picture of the user with the best match.

You can view the [demo version of this site](https://agile-eyrie-11207.herokuapp.com/) on Heroku.

### How FriendFinder works

1. The user answers 10 questions. Each answer is given on a scale of 1 to 5.

2. Routes included in this app:
  * A GET Route to `/survey` which displays the survey page.
  * A default USE route that leads to `home.html` which displays the home page. 
  * A GET route with the url `/api/friends` used to display a JSON of all possible friends.
  * A POST route `/api/friends` used to handle incoming survey results. This route is also used to handle the compatibility logic. 

3. Data is saved as an array of objects.

4. The user's most compatible friend is determined as follows:

   * Each user's results is converted into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * The difference between current user's scores against those from other users is compared, question by question. The differences are then used to calculate the `totalDifference`.
     * Example: 
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * The closest match will be the user with the least amount of difference.

5. Once the current user's most compatible friend is found, the result is displayed as a modal pop-up with the name and picture of the closest match.

