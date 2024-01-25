// DynamicFields.js
import React, { useState} from 'react';
import FieldRow from './FieldRow'; // Import the FieldRow component
import List from './List';
import Form from './Form';

const Fields = () => {

  const [fields, setFields] = useState([]);
  const [showFieldOptions, setShowFieldOptions] = useState(false);
  const [collectedData, setCollectedData] = useState([]);
  const [dataConfirmed, setDataConfirmed] = useState(false);
  const [finalObject, setFinalObject] = useState({});

  const addField = (fieldType) => {
    setShowFieldOptions(false);
    setFields([...fields, { type: fieldType, id: Date.now() }]);
  };


  const renderFieldOptions = () => (
    <div>
      <select onChange={e => addField(e.target.value)}>
        <option value="">Select Field Type</option>
        <option value="TextBox">Text Box</option>
        <option value="Dropdown">Dropdown</option>
        <option value="DatePicker">Date Picker</option>
      </select>

    </div>
  );

  const handleFieldConfirm = (fieldData) => {
    setCollectedData([...collectedData, fieldData]);
  };

  const handleReset = () => {
    setCollectedData([]);
    setFields([]);
    setShowFieldOptions(false);
    setDataConfirmed(false);
  };

  const handleDataConfirmation = () => {
    setDataConfirmed(true);
    const combinedObject = collectedData.reduce((result, item, index) => {
        result[`data_${index + 1}`] = item; // You can customize the key as needed
        return result;
      }, {});
      setFinalObject(combinedObject);
      setFields([]);
      setShowFieldOptions(false);

  };

  return (
    <>
        <div>
        {!dataConfirmed && <button onClick={() => setShowFieldOptions(true)}>Add Field</button>}
        {showFieldOptions && renderFieldOptions()}
        {fields.map(field => (
            <FieldRow key={field.id} initialFieldType={field.type} onConfirm={handleFieldConfirm} />
        ))}
        </div>
        {!dataConfirmed && 
        <>
            <List data={collectedData} />
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDataConfirmation} disabled={collectedData.length === 0}>
            Confirm Data
            </button>
        </>}
        
        {dataConfirmed && <Form collectedData={collectedData} />}
    </>
  );
};

export default Fields;
