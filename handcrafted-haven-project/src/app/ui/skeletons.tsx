export function ProductsSkeleton() {
    return (
        <div className="productGrid">
            < ProductSkeleton />
            < ProductSkeleton />
            < ProductSkeleton />
            < ProductSkeleton />
            < ProductSkeleton />
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