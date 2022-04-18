# Park Ponder

John Muir, “The Father of the National Parks,” once exclaimed that going into a forest is to lose your mind and find your soul. But once we come back safely from our travels, how can we make sure that memories are documented? To ponder is to reflect. One method of reflection can be down in the form of a journal or diary.

Park Ponder is a website for lovers of nature to share reflections on their journeys through the US National Parks. This project interacts with the National Park Service Data API.

Visit <a href="https://park-ponder.herokuapp.com/">Park Ponder here!</a> Once a person creates an account, users can add journal reflections on the parks they have visited.

When approaching this project, I first created a Trello board to split up the steps into smaller, more manageable tasks.

![ParkPonderTrello](https://user-images.githubusercontent.com/22151954/163843531-0ae798bb-969e-430f-af9e-6818ac25858f.png)

## Set Up and Usage

1) Clone repository

```bash
$ git clone https://github.com/joshrmora/park-ponder.git
$ cd park-ponder
```

2) Install gems
```bash
$ bundle install
```

3) Create database and tables

```bash
$ rails db:create
$ rails db:migrate
```

4) Seed data from NPS Data API

```bash
$ rails db:seed
```

5) Start up server
```bash
$ rails s
```

6) Navigate to http://localhost:3000 in your browser

## Future Features

An additional feature I would add would be individual user profiles, which could function as a tracker <br>
for how many parks have been visited as well as highlighting favorite parks. Another feature that <br>
could be added is integrating the Google Maps API to aid in travel planning.

## Authors
<li><a href="https://www.linkedin.com/in/joshrmora/">Josh Mora</a></li>
