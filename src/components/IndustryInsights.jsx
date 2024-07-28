import TechnologyIcon from '../assets/technology-icon.svg'
import HealthcareIcon from '../assets/healthcare-icon.svg'
import ECommerceIcon from '../assets/e-commerce-icon.svg'
import EducatoionIcon from '../assets/education-icon.svg'
import FinanceIcon from '../assets/finance-icon.svg'
import ManufacturingIcon from '../assets/manufacturing-icon.svg'
import RetailIcon from '../assets/retail-icon.svg'
import HospitalityIcon from '../assets/hospitality-icon.svg'
import RealStateIcon from '../assets/real-state-icon.svg'
import EntertainmentIcon from '../assets/entertainment-icon.svg'
import TransportationIcon from '../assets/transportation-icon.svg'
import NonProfitAndSocialServicesIcon from '../assets/non-profit-and-social-services-icon.svg'
import MediaAndPublishing from '../assets/media-and-publishing-icon.svg'
import AutomotiveIcon from '../assets/automotive-icon.svg'
import TravelAndTourism from '../assets/travel-and-tourism-icon.svg'
import FoodAndBeverage from '../assets/food-and-beverage-icon.svg'
import FashionAndAppare from '../assets/fasion-and-apparel-icon.svg'
import EnergyAndUtilities from '../assets/energy-and-utilities-icon.svg'
import ConstructionIcon from '../assets/construction-icon.svg'
import GovernmentSectorIcon from '../assets/govrnment-sector-icon.svg'
import PublicSectorIcon from '../assets/public-sector-icon.svg'

function IndustryInsights() {
    const data = [
      { title: "Technology", image: TechnologyIcon },
      { title: "Healthcare", image: HealthcareIcon },
      { title: "E-commerce", image: ECommerceIcon },
      { title: "Education", image: EducatoionIcon },
      { title: "Finance", image: FinanceIcon },
      { title: "Manufacturing", image: ManufacturingIcon },
      { title: "Retail", image: RetailIcon },
      { title: "Hospitality", image: HospitalityIcon },
      { title: "Real Estate", image: RealStateIcon },
      { title: "Entertainment", image: EntertainmentIcon },
      { title: "Transportation", image: TransportationIcon },
      {
        title: "Non-profit and Social Services",
        image: NonProfitAndSocialServicesIcon,
      },
      { title: "Media and Publishing", image: MediaAndPublishing },
      { title: "Automotive", image: AutomotiveIcon },
      { title: "Travel and Tourism", image: TravelAndTourism },
      { title: "Food and Beverage", image: FoodAndBeverage },
      { title: "Fashion and Apparel", image: FashionAndAppare },
      { title: "Energy and Utilities", image: EnergyAndUtilities },
      { title: "Construction", image: ConstructionIcon },
      { title: "Government Sector", image: GovernmentSectorIcon },
      { title: "Public Sector", image: PublicSectorIcon },
    ];

  return (
    <section className="py-[120px] text-center container mx-auto">
      <h1 className="font-bold text-[40px]">Industry Insights</h1>
      <div className="flex items-center flex-wrap justify-center gap-5 mt-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 py-[24px] px-[32px] bg-[#F5F5F5] rounded-[16px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[24px] h-[16px]"
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default IndustryInsights