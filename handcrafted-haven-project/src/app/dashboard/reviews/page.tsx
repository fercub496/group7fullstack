'use client';

// import { Product } from '@prisma/client';
import { Review } from '@prisma/client/edge';
import { useEffect, useState } from 'react';

export default function ReviewsPage() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [productId, setProductId] = useState('');
  const [message, setMessage] = useState('');
  const [products, setProducts] = useState<{ id: string; name: string }[]>([]);
  const [latestReviews, setLatestReviews] = useState<Array<Review>>([]);


  useEffect(() => {
    fetch('/api/select-product')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  // Fetch latest reviews
  useEffect(() => {
    fetch('/api/reviews/latest')
      .then(res => res.json())
      .then(setLatestReviews);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify({ rating, comment, productId }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Review submitted!');
        setRating(0);
        setComment('');
        setProductId('');
      } else {
        console.error('Server Error:', data);
        setMessage(data?.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Network Error:', error);
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      <div className="bar-top">REVIEWS & RATINGS</div>

      <form onSubmit={handleSubmit} className="reviewsForm">
        <label >
          Select Product:
        </label>
        <select
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          required
          className="searchboxRev"
        >
          <option value="">Select a product</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>

        <label>
          Rating:
        </label>
        <div className="rating-stars">
               {[1, 2, 3, 4, 5].map((star) => (
    <span
      key={star}
      className={`star ${rating >= star ? 'filled' : ''}`}
      onClick={() => setRating(star)}
          >
            ★
            </span>
             ))}
              </div>

        <label>Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your review"
          required
          rows={4}
          className="comment"
        />

        <button type="submit" className="reviewButton">
          Submit Review
        </button>

        {message && <p>{message}</p>}
      </form>

      <hr className="my-4" />

      <div className="latest-reviews">
        <h2 className="text-xl font-semibold mb-2">Latest Reviews</h2>
        {latestReviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          latestReviews.map((review) => (
            <div key={review.id} className="mb-3 border p-2 rounded">
              {products.map((product) => (<option key={product.id} value ={review.productId}>{product.name}</option>))}
              <p>⭐ {review.rating}</p>
              <p>{review.comment}</p>
              <small>{new Date(review.createdAt).toLocaleString()}</small>
            </div>
          ))
        )}
      </div>
    </>
  );
}