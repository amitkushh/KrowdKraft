"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Article {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
}

function LatestArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("/api/latest-articles");
        if (!res.ok) {
          throw new Error(`Failed to fetch articles: ${res.status}`);
        }
        const data = await res.json();
        setArticles(data.posts);
      } catch (err: any) {
        setError("Unable to load latest articles right now.");
      }
    };

    fetchArticles();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Latest <span className="neon-text">Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Here's our latest blog post that you can read and share with the
            community — discover, learn, and grow together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {articles.length > 0 ? (
            articles.map((article, idx) => (
              <div key={idx} className="flex flex-col glass-card p-5">
                <div>
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    className="rounded-lg mb-4 w-full h-auto"
                    width={0}
                    height={0}
                    sizes="100vw"
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-9">
                    {new Date(article.pubDate).toDateString()}
                  </p>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl shadow glass-card hover:shadow-lg"
                  >
                    Read article
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No articles found.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default LatestArticles;
