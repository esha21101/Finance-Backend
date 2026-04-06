let records = [];

const createRecord = (data) => {
  if (!data.amount || !data.type || !data.category) {
    throw new Error("Missing required fields");
  }

  if (!["INCOME", "EXPENSE"].includes(data.type)) {
    throw new Error("Invalid type");
  }

  const record = {
    id: Date.now(),
    amount: Number(data.amount),
    type: data.type,
    category: data.category,
    date: new Date().toISOString(), 
    note: data.note || ""
  };

  records.push(record);
  return record;
};

const getRecords = () => records;

const updateRecord = (id, data) => {
  const record = records.find(r => r.id == id);
  if (!record) throw new Error("Record not found");

  if (data.amount !== undefined) record.amount = Number(data.amount);
  if (data.type) record.type = data.type;
  if (data.category) record.category = data.category;
  if (data.note !== undefined) record.note = data.note;

  return record;
};

const deleteRecord = (id) => {
  const index = records.findIndex(r => r.id == id);
  if (index === -1) throw new Error("Record not found");

  records.splice(index, 1);
  return true;
};

module.exports = {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
};