function MyTable({data , isLoading}) {

    return (
        <div>
            {isLoading ? <div>Данные загружаются, подождите...</div> :
                <table className="table_blur">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && (
                            <tr><td>{data.id}</td>
                                <td>{data.title}</td>
                                <td>{data.completed ? 'true' : 'false'}</td>
                            </tr>
                        )}
                    </tbody>
                </table>}
        </div>
    )
}

export default MyTable;