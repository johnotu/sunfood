# Sun Food App

We all love tasty food and eat well. But sometimes we lack the imagination or words to describe what we want for dinner.
We present you a mega application using the latest technologies that can solve all the above problems.

In our great app we use only modern API such as Netlify Functions to call the db and receive data, Fauna cloud DB, Clarify (to detect food image), Formspree (for collecting delivery address), Pilon (because it's interesting to try). And many, many others.

Our goal is to get acquainted with the above mentioned API, to determine the possibilities of their further application in our future projects, to find git  for ourselves API's strengths and weaknesses

### App is deployed on Netlify [here](https://sunfood-test.netlify.com/)

### Team
* [Itsik Dangoor](https://github.com/ItsikDangoor)
* [Olha Babochkina](https://github.com/oshka)
* [Alberto Escala](https://github.com/albertoescala)
* [John Otu](https://github.com/johnotu)

### To run locally
* Clone the repo `git clone git@github.com:johnotu/sunfood.git`
* Install dependencies `npm install`
* Save FAUNADB_SECRET environment variable (Windows: `set FAUNADB_SECRET=secret` Linux: `export FAUNADB_SECRET=secret`)
* Start all the servers by running `npm start`