import ArticleImage from "../assets/article-image.png";
function ArticleCard() {
  return (
    <div className="bg-[#F5F5F5] p-[8px] rounded-[24px] ml-10 text-left">
      <img
        src={ArticleImage}
        className="rounded-[16px] article-card-image w-full"
        height={240}
        alt=""
      />
      <p className="text-[14px] opacity-75 text-left mt-3">July 8, 2023</p>
      <p className="font-bold text-[24px] py-3">
        Creating Memorable User Experiences: Design Principles for Success
      </p>
      <p className="text-[20px] opacity-75 font-[400] pb-3">
        {
          "Dive into the fundamentals of user experience (UX) design and discover key principles for creating engaging and intuitive digital experiences that delight users and drive results."
        }
      </p>
    </div>
  );
}

export default ArticleCard;
