export function ProductsSkeleton() {
    return (
        <div>
            <div className="productGrid">
                < ProductSkeleton />
                < ProductSkeleton />
                < ProductSkeleton />
                < ProductSkeleton />
                < ProductSkeleton />
                < ProductSkeleton />
            </div>
        </div>
    )
};

export function ProductSkeleton() {
    return (
        <div className="productCard">
            <img/>
            <h3></h3>
            <p>Category:</p>
            <p>Price: $</p>
        </div>
    )
};

export function SellersSkeleton() {
    return (
        <div>
            <div className="productGrid">
                < SellerSkeleton />
                < SellerSkeleton />
                < SellerSkeleton />
                < SellerSkeleton />
                < SellerSkeleton />
                < SellerSkeleton />
            </div>
        </div>
    )
};

export function SellerSkeleton() {
    return (
        <div className="productCard">
              <img/>
              <h2>Name</h2>
        </div>
    )
};