# hyf-class10

This application displays a list of bilingual sentences (currently English -> Dutch) that match criteria as specified through an API end point.

## Installation

Install the repo (replace <project folder> with the name of the folder where you keep of your HYF work. In this folder a class10-hw9 subfolder will be created by the git clone command below):

```
cd <project folder>
git clone https://github.com/remarcmij/class10-hw9.git
```

Open File Explorer (Windows) or equivalent on Mac or Linux and go to the `class10-hw9` folder.

Double-click the `index.html` file to open it in the browser.

## API end points

The following API end points may be of interest:

- `http://class10.taalmap.nl/en?subject=<subject>`

    where subject is one of following:

    - questions
    - answers
    - signs
    - date-time
    - numbers
    - personal-details
    - bank
    - post
    - telephone
    - telephone-alphabet
    - internet
    - photo-video
    - weather
    - safety

- `http://class10.taalmap.nl/en?q=<term>`

    where `<term>` is any search term. This performs a full-text search on any field, e.g.:

    `http://class10.taalmap.nl/en?q=regen`

Other end points can constructed by mapping the `posts` end point examples given in the documentation of `json-server` to match the `/en` end point we are using here.

See https://github.com/typicode/json-server
