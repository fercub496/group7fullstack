'use client';

import { useState } from 'react';

export default function ReviewsPage() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [productId, setProductId] = useState('');
  const [message, setMessage] = useState('');
  const [submittedComment, setSubmittedComment] = useState('');

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
        setSubmittedComment(comment);
        setRating(0);
        setComment('');
        setProductId('');

        setTimeout(() => {
          setMessage('');
          setSubmittedComment('');
        }, 5000);
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
        <label>
          Select Product:
          <input
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            placeholder="Enter product ID"
            required
          />
        </label>

        <label>
          Rating:
          <div className="ratingForm">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                className={`cursor-pointer text-2xl ${
                  rating >= star ? 'text-yellow-400' : 'text-gray-400'
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </label>

        <label>
          Comment:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review"
            required
            rows={4}
            className="w-full p-2 border rounded"
          />
        </label>

        <button type="submit" className="bg-black text-white py-2 rounded">
          Submit Review
        </button>

        {message && <p className="bounce-once">{message}</p>}

        {submittedComment && (
          <div className="bounce-once">
            <strong>Your Comment:</strong>
            <p>{submittedComment}</p>
          </div>
        )}
      </form>
    </>
  );
}