export default function ProductionList({ production, onEdit, onDelete }) {

    return (

        <div className="list">

            <h2>Productions</h2>

            {production.map(item => (

                <div key={item.id} className="list-item">

                    <span>
                        Product ID: {item.product_id}
                        {" | "}
                        Material ID: {item.raw_material_id}
                        {" | "}
                        Quantity: {item.quantity}
                    </span>

                    <div className="actions">

                        <button
                            className="btn-edit"
                            onClick={() => onEdit(item)}
                        >
                            Edit
                        </button>

                        <button
                            className="btn-delete"
                            onClick={() => onDelete(item.id)}
                        >
                            Delete
                        </button>

                    </div>

                </div>

            ))}

        </div>

    )
}