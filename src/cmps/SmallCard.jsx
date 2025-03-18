
export function SmallCard({ item }) {
    return (
        <section className="small-card">
            <div className="card-image">
                <img src={item.imgUrl} />
            </div>

            <div className="small-card-details">
                <h3>{item.title}</h3>
                <h4>{item.location}</h4>
                {item.text && <span style={{ fontFamily: 'noto-sans-medium' }}>{item.text}</span>}
            </div>
        </section>
    )
}