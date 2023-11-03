import { useState, useContext } from 'react'
import { Restaurant } from '../context'

export default function useOrders() {
  const [active, setActive] = useState(0)

  const { loading, error, data, refetch, networkStatus } = useContext(
    Restaurant.Context
  )
  const activeOrders =
    data && data.orders ?
    data.orders.filter(order => order.status === 'PENDING'):[]

  const processingOrders =
    data && data.orders ?
    data.orders.filter(order =>
      ['ACCEPTED', 'ASSIGNED', 'PICKED'].includes(order.status)
    ):[]

  const deliveredOrders =
    data && data.orders ?
    data.orders.filter(order => order.status === 'DELIVERED') : []

  return {
    loading,
    error,
    data,
    refetch,
    networkStatus,
    activeOrders,
    processingOrders,
    deliveredOrders,
    active,
    setActive
  }
}
