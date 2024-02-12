import EmptyStete from "@/components/EmptyStete"
import ClientOnly from "@/components/ClientOnly"

import getCurrentUser from "@/actions/getCurrentUser";
import getFavotiteListings from "@/actions/getFavotiteListings";
import FavoritesClient from "./FavoritesClient";

const FavoritesPage = async () => {
  const listings = await getFavotiteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyStete 
          title="No favorites found"
          subtitle="Looks like you have no favorite listings."
        />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <FavoritesClient 
        listings={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  )
}

export default FavoritesPage
