import DeliveryImg from "./../assets/Features/delivery.png"
import FreshImg from './../assets/Features/fresh.png'
import WideVarityImg from './../assets/Features/wide.png'
import FiberContentImg from './../assets/Features/fruit.png'

function FeatureCard({ title, description, Imgsrc }) {
    return (

        <div className='bg-white p-5 mt-10 rounded-2xl w-60 flex flex-col mx-20 md:w-80 md:mx-3'>
            <img src={Imgsrc} alt={title} className='h-20 md:h-35 mx-auto ' />
            <h3 className='text-center text-xl! md:text-2xl!'>{title}</h3>
            <p className='text-center'>{description}</p>
        </div>

    )
}

const FEATURE = [
    {
        title: "Freshness Guaranted",
        description: "We ensure that all our vegetables are fresh and of the highest quality.",
        Imgsrc: FreshImg,
    },

    {
        title: "Wide Variety",
        description: "Choose from a wide range of vegetables to suit your culinary needs",
        Imgsrc: WideVarityImg,
    },

    {
        title: 'High Fiber Content',
        description: "Vegetables are loaded with fiber, which helps in digestion, and keeps you feeling full longer.",
        Imgsrc: FiberContentImg,
    },

    {
        title: "Fast Delivery",
        description: "Get your vegetables delivared to your doorset in no time",
        Imgsrc: DeliveryImg,
    }
]

function FeatureSession() {
    return (
        <>
            <h2 className='text-center mt-10 px-5 text-2xl! md:text-4xl!'>Why you should choose us? We are provide the Freshest Vegetable</h2>

            <div className='md:flex justify-around cursor-pointer'>
                {FEATURE.map((feat, index) => {
                    const { title, description, Imgsrc } = feat;
                    return (
                        <FeatureCard
                            key={index}
                            title={title}
                            description={description}
                            Imgsrc={Imgsrc}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default FeatureSession

