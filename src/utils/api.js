/* Api methods to call /functions */

const create = (data) => {
  return fetch('/.netlify/functions/food-create', {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const readAll = () => {
  return fetch('/.netlify/functions/food-read-all').then((response) => {
    return response.json()
  })
}

const update = (foodId, data) => {
  return fetch(`/.netlify/functions/food-update/${foodId}`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const deleteFood = (foodId) => {
  return fetch(`/.netlify/functions/food-delete/${foodId}`, {
    method: 'POST',
  }).then(response => {
    return response.json()
  })
}

const batchDeleteFood = (foodIds) => {
  return fetch(`/.netlify/functions/food-delete-batch`, {
    body: JSON.stringify({
      ids: foodIds
    }),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

export default {
  create: create,
  readAll: readAll,
  update: update,
  delete: deleteFood,
  batchDelete: batchDeleteFood
}
