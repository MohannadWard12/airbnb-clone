import getCurrentUser from "@/actions/getCurrentUser";
import getListingById from "@/actions/getListingById"
import ClientOnly from "@/components/ClientOnly";
import EmptyStete from "@/components/EmptyStete";
import ListingClient from "./ListingClient";
import getReservations from "@/actions/getReservations";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyStete />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <ListingClient 
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  )
}

export default ListingPage
