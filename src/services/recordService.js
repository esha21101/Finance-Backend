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
    amount: data.amount,
    type: data.type,
    category: data.category,
    date: new Date(),
    note: data.note || ""
  };

  records.push(record);
  return record;
};

const getRecords = () => records;

const updateRecord = (id, data) => {
  const record = records.find(r => r.id == id);
  if (!record) throw new Error("Record not found");

  record.amount = data.amount || record.amount;
  record.type = data.type || record.type;
  record.category = data.category || record.category;
  record.note = data.note || record.note;

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