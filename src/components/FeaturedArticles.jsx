import ArticleCard from './ArticleCard';
function FeaturedArticles() {
  return (
    <section className="py-[10px] text-center">
        <h1 className="font-semibold text-[40px]">Featured Articles</h1>
      <div className="flex flex-nowrap gap-5 mt-16 overflow-auto 
      hide-scrollbar
      "
      
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <ArticleCard key={index} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedArticles