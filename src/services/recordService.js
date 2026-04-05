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
    note: data.note || "",
  };

  records.push(record);
  return record;
};

const getRecords = () => {
  return records;
};

module.exports = { createRecord, getRecords };