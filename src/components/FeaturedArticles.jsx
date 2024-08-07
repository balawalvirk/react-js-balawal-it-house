import ArticleCard from './ArticleCard';
function FeaturedArticles() {
  return (
    <section className="py-[10px] text-center">
      <h1 className="font-semibold text-[40px]">Featured Articles</h1>
      <div
        className="flex items-center gap-4 justify-start flex-nowrap overflow-auto px-[5rem] hide-scrollbar mt-14
      "
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <ArticleCard key={index} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedArticles