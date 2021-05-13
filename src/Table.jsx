import React from 'react';
import './Table.css'
const Table = ({countries}) => {
    return (
        <div className='table'>
            {
                //we can also destruct network call rest data below like this & this
                // is very cool stuff
                countries.map(({country, cases,}) => (
                    <tr>
                        <td>{country}</td>
                        <td>
                            <strong>
                                {cases}
                            </strong>
                        </td>
                    </tr>
                ))
            }
        </div>
    );
};

export default Table;