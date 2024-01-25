
import React from 'react';

const List = ({ data }) => {
  return (
    <div>
      <h2>Collected Data</h2>
      <table>
        <thead>
          <tr>
            <th>No</th>            
            <th>Field Name</th>
            <th>Field Type</th>
            <th>Field Data Type</th>
            <th>AField Validation</th>
            <th>Field Data</th>
            <th>Is Mandatory?</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item.fieldName}</td>
              <td>{item.fieldType}</td>
              <td>{item.fieldDataType}</td>
              <td>{item.additionalField}</td>
              <td>{item.fieldType === 'TextBox' || item.fieldType === 'DatePicker' ? '-' : item.fieldData}</td>
              <td>{item.mandatory}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;