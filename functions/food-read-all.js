import faunadb from 'faunadb'

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
})

exports.handler = (event, context, callback) => {
  console.log("Function `food-read-all` invoked")
  return client.query(q.Paginate(q.Match(q.Ref("indexes/all_food"))))
  .then((response) => {
    const foodRefs = response.data
    console.log("Food refs", foodRefs)
    console.log(`${foodRefs.length} food found`)
    // create new query out of food refs. http://bit.ly/2LG3MLg
    const getAllFoodDataQuery = foodRefs.map((ref) => {
      return q.Get(ref)
    })
    // then query the refs
    return client.query(getAllFoodDataQuery).then((ret) => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(ret)
      })
    })
  }).catch((error) => {
    console.log("error", error)
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify(error)
    })
  })
}
