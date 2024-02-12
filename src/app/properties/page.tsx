import EmptyStete from "@/components/EmptyStete";
import ClientOnly from "@/components/ClientOnly";

import getCurrentUser from "@/actions/getCurrentUser";
import PropertiesClient from "./PropertiesClient";
import getListings from "@/actions/getListings";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyStete title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyStete title="No properties found" subtitle="Looks like you have no properties." />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default PropertiesPage;
