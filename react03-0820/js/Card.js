function Card(props) {
    const { title, price, desc, btnName } = props;

    return (
        <div className="card mb-4">
            <div className="card-header">
                <h4 className="my-0">{title}</h4>
            </div>
            <div className="card-body">
                <h1 className="card-title">
                    {
                        typeof price === 'number' ? <>${price}<small>/月</small></> : price
                    }
                </h1>
                <p>{desc}</p>
                <button type="button" className="btn btn-outline-primary">{btnName}</button>
            </div>
        </div>
    )
}