interface CardProps {
  title?: string;
  description?: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {title ? (
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          {title}
        </h2>
      ) : (
        <div className="h-7 w-2/3 animate-pulse rounded-md bg-slate-200" />
      )}

      {description ? (
        <p className="mt-3 text-sm leading-7 text-slate-600">
          {description}
        </p>
      ) : (
        <div className="mt-3 space-y-2">
          <div className="h-4 w-full animate-pulse rounded-md bg-slate-200" />
          <div className="h-4 w-11/12 animate-pulse rounded-md bg-slate-200" />
          <div className="h-4 w-4/5 animate-pulse rounded-md bg-slate-200" />
        </div>
      )}
    </div>
  );
};

export default Card;