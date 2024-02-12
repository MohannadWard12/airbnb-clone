import EmptyStete from "@/components/EmptyStete"
import ClientOnly from "@/components/ClientOnly"

import getCurrentUser from "@/actions/getCurrentUser"
import getReservations from "@/actions/getReservations"
import ReservationsClient from "./ReservationsClient"

const reservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyStete 
          title="Unauthorized"
          subtitle="Please login"
        />
      </ClientOnly>
    )
  };

  const reservations = await getReservations({ authorId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyStete 
          title="No reservations found"
          subtitle="Looks like you have no reservations on your properties"
        />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <ReservationsClient 
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  )
}

export default reservationsPage
