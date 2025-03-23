
export function Hobbies() {

    const hobbiesList = [
        {
            title: 'Horse Riding',
            imgUrl: 'https://res.cloudinary.com/dvykycdey/image/upload/v1742219715/horse_gzqjgh.jpg'
        },
        {
            title: 'Ski',
            imgUrl: 'https://res.cloudinary.com/dvykycdey/image/upload/v1742219714/ski_bi8wdp.jpg'
        },
        {
            title: 'Yoga',
            imgUrl: 'https://res.cloudinary.com/dvykycdey/image/upload/v1742219712/yoga_bprhlr.jpg'
        },
        {
            title: 'Baking',
            imgUrl: 'https://res.cloudinary.com/dvykycdey/image/upload/v1742219714/backing_ilvjax.jpg'
        },
        {
            title: 'Drawing',
            imgUrl: 'https://res.cloudinary.com/dvykycdey/image/upload/v1742219711/drawing_h1tcjq.jpg'
        },
        {
            title: 'Beach & Books',
            imgUrl: 'https://res.cloudinary.com/dvykycdey/image/upload/v1742219715/beach_ezm8di.jpg'
        },
    ]


    return (
        <section id="hobbies" className="hobbies">
            <h2 className="section-name title">My Hobbies</h2>
            <ul className="hobbies-list">
                {hobbiesList.map((item, i) =>
                    <li key={i}>
                        <div className="hobby-image-container">
                            <img loading="lazy" src={item.imgUrl} />
                        </div>

                        <p className="hobby-name">{item.title}</p>
                    </li>
                )}
            </ul>
        </section>
    )
}