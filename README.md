# Deployed Application

https://roobscoobs.github.io/coverart-client

<img width="1280" alt="screen shot 2016-08-04 at 10 41 54 pm" src="https://cloud.githubusercontent.com/assets/16338632/17424723/bc5f28bc-5a94-11e6-8749-f82c37343e8a.png">

# Development Process

The aim was to use a modern framework and stick with it, through all phases of development.
Ember.js is a beast in many ways, and it took a lot of time and effort to understand
its processes and play nicely with the API. It's especially confusing when you define
controllers and models in one spot, and then have similar names and conventions in
the framework. Which one is doing the work here, and how exactly are they talking to
each other with the lack of ajax requests?

Despite the painstakingly slow development process, I knew I wanted to work with
Ember for a number of reasons. It would be a challenge that, once figured out, would
open the gate to impressive performance. Utilizing it meant I would also have exposure
to Handlebars, another library that I had minimal encounters with that I had planned
to work with on a deeper level. Also, Ember is built on the same principle as my
favorite back-end tool, Ruby on Rails. It's all about convention over configuration.  

Evidence of my newcomer's level came through in the Ember inspector, when I could not
find the user's token, which would have helped in times of back-end testing. Because
I was unaware of my API's functionality, I dove straight into building the skeleton
of the application. Because I had not seeded data, I focused on the create function,
and that was only difficult insofar as being blind to the troubles occurring in the
back-end. Slowly but surely, I found myself following the process of data down,
actions up, from the route all the way to component and back up. It was easy to get
lost at times, at which points naming was your best weapon.

The real headache came with updating the created instances of album. I probably
reworked the data binding on the route level a hundred times. Once sufficient bashing
was done on the front-end it only made sense to look at the back-end, and if I was
better at reading errors, I would have caught the issue much sooner. The code in Ember
was completely error free. Oh yeah, that's also another good point to mention here.
Ember refuses to return clear errors that point you in the right direction. It goes
without saying that the issue in this case was with the API. Once that was resolved
the remaining CRUD actions were fairly easy to implement.

Utilizing Ember was like a long, winded wrestling match, but very gratifying in the
end because you ultimately end up with a sleek functioning framework that actually
does most of the work for you. And the best part about it – the absence of so many
AJAX requests.

# Technologies Used

  - HTML
  - CSS/SASS
  - Handlebars
  - Ember.js

# User Stories

Authentication:
  - As a user I want to be able to register a new account in order to use the application.
  - As a user I want to be able to use the same credentials to login.
  - As a user I can change my password.
  - As a I want to be able to sign out.

Application:
  - As a user I want to create an album of my choosing with a title, artist and
    a description that other users can view.
  - As a user I want others to access my album to see its contents without destroying
    or editing any of the information.
  - As a user I should have control over updating and deleting what I have created.
  - As a user I want to filter through all the albums according to genre as a way
    to not only organize the entries visually but also to search for albums that
    are to my liking.
  - As a user I want to leave reviews on other's entries to deliver any critiques
    or show appreciation.

# Wireframes

![coverart-mockup-1](https://cloud.githubusercontent.com/assets/16338632/17425188/5cebb914-5a98-11e6-828d-7aec5a6f5c51.png)

![coverart-mockup-2](https://cloud.githubusercontent.com/assets/16338632/17425190/6521a49a-5a98-11e6-8377-0f93bd472854.png)

![coverart-mockup-3](https://cloud.githubusercontent.com/assets/16338632/17425197/73571c8e-5a98-11e6-9abb-988c470b87ad.png)

![coverart-mockup-4](https://cloud.githubusercontent.com/assets/16338632/17425201/7c4f8fa6-5a98-11e6-8edc-deac55a87163.png)


# Link to API Repo

https://github.com/RoobScoobs/coverart-api/
