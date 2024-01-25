
import React, { useState, useEffect } from 'react';

const FieldRow = ({ initialFieldType, onConfirm }) => {
  const [fieldType, setFieldType] = useState(initialFieldType);
  const [fieldName, setFieldName] = useState('');
  const [fieldDataType, setFieldDataType] = useState('');
  const [dateRange, setDateRange] = useState({ from: '', to: '' });
  const [maxLength, setMaxLength] = useState('');
  const [mandatory, setMandatory] = useState('no');
  const [fieldData, setFieldData] = useState('');

  useEffect(() => {
    setFieldDataType('');
    setMaxLength('');
    setFieldData('');
  }, [fieldType]);

  const handleConfirm = () => {
    const fieldDataArr = fieldData.trim().split(' ');
    let additionalField = 'Nil';

    if (fieldType === 'TextBox') {
        additionalField = `Max ${maxLength} digits`;
    } else if (fieldType === 'DatePicker') {
        additionalField = `Between ${dateRange.from} to ${dateRange.to}`;
    }
    onConfirm({ fieldType, fieldName, fieldDataType,additionalField, mandatory, fieldData ,maxLength,dateRange,fieldDataArr});
    
  };

  return (
    <>
    <div>
      <select value={fieldType} onChange={e => setFieldType(e.target.value)}>
        <option value="TextBox">Text Box</option>
        <option value="Dropdown">Dropdown</option>
        <option value="DatePicker">Date Picker</option>
      </select>
      {fieldType === 'TextBox' && (
        <>
            <input placeholder="Mobile" value={fieldName} onChange={e => setFieldName(e.target.value)} />
            <select value={fieldDataType} onChange={e => setFieldDataType(e.target.value)}>
                <option value="">Select Data Type</option>
                <option value="String">String</option>
                <option value="Number">Number</option>
            </select>
            <input placeholder="Max Length" type="number" value={maxLength} onChange={e => setMaxLength(e.target.value)} />
        </>
      )}
      {fieldType === 'Dropdown' && (
        <>
            <input placeholder="Mobile" value={fieldName} onChange={e => setFieldName(e.target.value)} />
            <select value={fieldDataType} onChange={e => setFieldDataType(e.target.value)}>
                <option value="">Select Data Type</option>
                <option value="String">String</option>
                <option value="Number">Number</option>
            </select>  
            <input placeholder="Field Data" value={fieldData} onChange={e => setFieldData(e.target.value)} />      
        </>
      )}
      {fieldType === 'DatePicker' && (
        <>
            <input placeholder="DOB" value={fieldName} onChange={e => setFieldName(e.target.value)} />
            <select value={fieldDataType} onChange={e => setFieldDataType(e.target.value)}>
                <option value="">Select Data Type</option>
                <option value="Date">Date</option>
            </select>
            <input type="date" placeholder="From" value={dateRange.from} onChange={e => setDateRange({ ...dateRange, from: e.target.value })} />
            <input type="date" placeholder="To" value={dateRange.to} onChange={e => setDateRange({ ...dateRange, to: e.target.value })} />
        </>
      )}
      <select value={mandatory} onChange={e => setMandatory(e.target.value)}>
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
    </>
  );
};

export default FieldRow;
