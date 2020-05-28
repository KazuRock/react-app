import React, { useState, useEffect } from 'react';

const Booklist = props => {
    const [bookData, setBookData] = useState(null);

    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response));
    }, [props])

    return (
        <div>
            <div>
                <ul>
                    {
                        bookData === null
                            ? <p>now loading...</p>
                            : bookData.data.items.map(x =>
                                <li>
                                    {x.volumeInfo.imageLinks === undefined
                                        ? ""
                                        : <p><img src={x.volumeInfo.imageLinks.thumbnail} /></p>}
                                    <p>{x.volumeInfo.title}</p>
                                    <p>{x.volumeInfo.authors}</p>
                                    <hr />
                                </li>
                            )
                    }
                </ul>
            </div>
        </div>
    );
}

export default Booklist;