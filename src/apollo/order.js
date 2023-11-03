export const GET_ORDERS = `query GetOrders {
    orders{
      _id
      status
      merchant {
        _id
        name
        phone
        email
      }
      items{
        _id
        product{
          _id
          title
          price
        }
        quantity
      }
      user{
        _id
        name
        phone
        email
      }
    }
}`
