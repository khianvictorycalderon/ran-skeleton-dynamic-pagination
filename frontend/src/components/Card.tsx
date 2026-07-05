interface CardProps {
    title: string;
    description: string;
}

const Card = ({
    title,
    description
}: CardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;