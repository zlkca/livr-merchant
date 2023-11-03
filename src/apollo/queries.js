export const orders = `query Orders{
    restaurantOrders{
      _id
      orderId
      restaurant{
        _id
        name
        image
        address
        location{coordinates}
      }
      deliveryAddress{
        location{coordinates}
        deliveryAddress
        details
        label
      }
      items{
        _id
        title
        description
        image
        quantity
        variation{
          _id
          title
          price
          discounted
        }
        addons{
          _id
          options{
            _id
            title
            description
            price
          }
          description
          title
          quantityMinimum
          quantityMaximum
        }
        specialInstructions
        isActive
        createdAt
        updatedAt
      }
      user{
        _id
        name
        phone
        email
      }
      paymentMethod
      paidAmount
      orderAmount
      orderStatus
      tipping
      taxationAmount
      status
      paymentStatus
      reason
      isActive
      createdAt
      orderDate
      deliveryCharges
      isPickedUp
      preparationTime
      acceptedAt
      isRinged
      rider{
        _id
        name
        username
        available
      }
    }
}`

export const configuration = `query Configuration{
  configuration{
    _id
    currency
    currencySymbol
  }
}`

export const restaurantInfo = `query Restaurant($id:String){
  merchant(id:$id){
  _id
  name
}}
`

// orderId
// orderPrefix
// image
// address
// location{coordinates}
// deliveryTime
// username
// isAvailable
// notificationToken
// enableNotification
// openingTimes{
//   day
//   times{
//     startTime
//     endTime
//   }
// }