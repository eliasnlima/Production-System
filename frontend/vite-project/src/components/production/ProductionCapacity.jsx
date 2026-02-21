export default function ProductionCapacity({ capacity, totalProductionValue}) {

    return (

        <div className="list">

            <h2>Production Capacity</h2>

            {capacity.map(item => (

                <div className="list-item capacity-item" key={item.id}>

                    <span>
                            {item.product_name}
                        </span>

                        <span>
                            Can produce: {item.can_produce}
                        </span>

                        <span>
                            Unit price: ${item.unit_price}
                        </span>

                        <span className="capacity-total">
                            Total value: ${item.total_value}
                        </span>

                </div>

            ))}

           {capacity.length > 0 && (

                <div className="capacity-summary">

                    Total production value: $
                    {totalProductionValue}

                </div>

            )}


        </div>

    )
}