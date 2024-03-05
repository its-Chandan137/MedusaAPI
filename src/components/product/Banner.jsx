import { promotionalInfo } from "../../assets/data/data"
import { BodyOne, Title } from "../common/CustomComponents"

export const Banner = () => {
   return (
     <>
       <section className="flex flex-col lg:flex-row items-center justify-between pt-20 max-h-fit">
            {promotionalInfo.map((info) =>(
                <>
                    <div className="box relative w-full" key={info.id}>
                        <div className="w-full h-[50vh]">
                            <img src={info.image} alt={info.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-0 left-0 p-3 md:p-8 lg:w-2/3">
                            <span className="bg-white px-6 py-2 text-sm">{info.title}</span>
                            <Title level={3} className="my-5">{info.title}</Title>
                            <BodyOne>{info.description}</BodyOne>
                            <button className="secondary-btn">Shop Now</button>
                        </div>
                    </div>
                </>
            ))}
        </section> 
     </>
   )
 }
 