import { FC, FormEvent, useRef } from "react";
import { useSession } from "next-auth/react";
import { Review } from "types";
import { getRandomId } from "utils";

interface ReviewsProps {
  reviews: Review[];
  className: string;
  onSubmit: (newReview: Review) => Promise<void>;
}

const Reviews: FC<ReviewsProps> = ({ reviews, className, onSubmit }) => {
  const { data: session } = useSession();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (session && textareaRef.current) {
      await onSubmit({
        id: getRandomId(),
        author: session.user?.name!,
        email: session.user?.email!,
        content: textareaRef.current.value,
      });

      alert("Your review is successfully submitted and will be displayed within 1 hour.");
      
      textareaRef.current.value = "";
    } else {
      alert("You have to be signed in to add reviews.");
    }
  };

  return (
    <div className={className}>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <div>
              <h5>{review.author}</h5>
              <p>{review.email}</p>
            </div>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <textarea
          ref={textareaRef}
          name="content"
          id="content"
          maxLength={512}
          placeholder="Write your review"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Reviews;
