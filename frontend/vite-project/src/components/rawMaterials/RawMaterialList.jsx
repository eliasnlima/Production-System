export default function RawMaterialList({ materials, onEdit, onDelete }) {

    return (

        <div className="list">

            <h2>Raw Materials</h2>

            {materials.map(material => (

                <div className="list-item" key={material.id}>

                    ID: {material.id} - {material.name} — Stock: {material.stock_quantity}

                    <div className="actions">

                        <button
                            className="btn-edit"
                            onClick={() => onEdit(material)}
                        >
                            Edit
                        </button>

                        <button
                            className="btn-delete"
                            onClick={() => onDelete(material.id)}
                        >
                            Delete
                        </button>

                    </div>

                </div>

            ))}

        </div>
    )
}