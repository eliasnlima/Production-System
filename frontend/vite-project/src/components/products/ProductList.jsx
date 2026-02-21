export default function ProductList({ products, onEdit, onDelete }) {

    return (

        <div className="list">

            <h2>Products</h2>

            {products.map(product => (

                <div className="list-item" key={product.id}>

                    ID: {product.id} - {product.name} - ${product.price}
                    
                        <div className="actions">

                        <button
                            className="btn-edit"
                            onClick={() => onEdit(product)}
                        >
                            Edit
                        </button>

                        <button
                            className="btn-delete"
                            onClick={() => onDelete(product.id)}
                        >
                            Delete
                        </button>

                        </div>

                </div>

            ))}

        </div>

    )
}