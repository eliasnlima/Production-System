export default function ProductionCapacity({ capacity }) {

    return (

        <div className="list">

            <h2>Production Capacity</h2>

            {capacity.map(item => (

                <div className="list-item capacity-item" key={item.id}>

                    {item.product_name} - Can produce: {item.can_produce}

                </div>

            ))}

        </div>

    )
}