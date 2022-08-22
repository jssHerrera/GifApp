import React, { Suspense } from "react";
import useLazyScreen from "../../hook/useLazyScreen";
import SkeletonLoading from "../../components/loader/SkeletonLoading";

const TrendingSearches = React.lazy(() =>
  import("../../components/categorias/TrendingSearches")
);

const Categorias = () => {
  const { lazy, elemenRef } = useLazyScreen();
  return (
    <div ref={elemenRef} className="flex justify-center">
      <Suspense fallback={<SkeletonLoading/>}>
        {lazy ? <TrendingSearches /> : null}
      </Suspense>
    </div>
  );
};

export default Categorias;
