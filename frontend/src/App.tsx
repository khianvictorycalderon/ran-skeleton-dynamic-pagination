import { useEffect, useRef, useState } from "react";
import Card from "./components/Card";

interface CardData {
  title?: string;
  description?: string;
}

const API_URL = import.meta.env.VITE_API_URL;

export default function App() {
  const [cards, setCards] = useState<CardData[]>([]);
  const loaderRef = useRef<HTMLDivElement>(null);
  const loading = useRef(false);

  // Initial load
  useEffect(() => {
    loadInitial();
  }, []);

  const loadInitial = async () => {
    loading.current = true;

    // Show 10 skeletons
    setCards(Array.from({ length: 10 }, () => ({})));

    try {
      const res = await fetch(`${API_URL}/api/data/initial`);
      const data: CardData[] = await res.json();

      setCards(data);
    } catch (err) {
      console.error(err);
    } finally {
      loading.current = false;
    }
  };

  const loadMore = async () => {
    if (loading.current) return;

    loading.current = true;

    // Append one skeleton card
    setCards((prev) => [...prev, {}]);

    try {
      const res = await fetch(`${API_URL}/api/data/new`);
      const data: CardData = await res.json();

      // Replace the last skeleton with the fetched card
      setCards((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = data;
        return copy;
      });
    } catch (err) {
      console.error(err);

      // Remove the skeleton if the request failed
      setCards((prev) => prev.slice(0, -1));
    } finally {
      loading.current = false;
    }
  };

  // Infinite scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      {
        threshold: 0.5,
      }
    );

    const current = loaderRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }

      observer.disconnect();
    };
  }, []);

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col gap-4 p-6">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
        />
      ))}

      {/* Infinite scroll sentinel */}
      <div ref={loaderRef} className="h-4" />
    </div>
  );
}