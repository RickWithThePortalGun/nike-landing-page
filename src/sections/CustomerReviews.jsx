import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";
const CustomerReviews = () => {
  return (
    <section>
      <div className="max-container">
        <h3 className="font-palanquin text-center text-4xl font-bold ">
          What Our <span className="text-gradient">Customers&nbsp;</span>
          Say 
        </h3>
        <p className="info-text m-auto mt-4 max-w-lg text-center">
          Hear Genuine Stories From Our Satisfied Customers.
        </p>
        <div className="mt-24 flex flex-1 max-lg:flex-col gap-14 justify-evenly">
          {reviews.map((review) => (
            <ReviewCard
              key={review.customerName}
              customerName={review.customerName}
              imgURL={review.imgURL}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
