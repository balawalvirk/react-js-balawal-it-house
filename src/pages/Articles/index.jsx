import ArticleCard from "../../components/ArticleCard";
import ContactUs from "../../components/ContactUs";


function Articles() {
  return (
    <>
      <div className="text-center container mx-auto">
        <h1 className="text-[40px] font-bold mt-16">Explore Our Articles</h1>
        <p className="text-[18px] mt-5">
          Welcome to our collection of articles, where we share
          easy-to-understand insights about digital topics. Whether you're a
          business owner, developer, or just curious about technology, our
          articles have something for you. From practical tips to inspiring
          stories, our goal is to make digital concepts simple and enjoyable to
          learn. Start exploring our articles today to stay informed and
          inspired!
        </p>
        <div
          className="flex justify-between gap-8 rounded-[16px] w-fit mx-auto mt-10"
          style={{ border: "1px solid #C5C5C5" }}
        >
          <input
            type="text"
            placeholder="Search a project..."
            className="bg-transparent border-none outline-none p-[1rem] text-[18px]"
          />
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
          {Array.from({ length: 11 }).map((project, ind) => (
            <ArticleCard key={ind} />
          ))}
        </div>
        <ContactUs />
      </div>
    </>
  );
}

export default Articles