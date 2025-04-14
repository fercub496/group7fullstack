export function ProductsSkeleton() {
    return (
        <div>
            <div className="bar-top">

            </div>
            <div className="productGrid">
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