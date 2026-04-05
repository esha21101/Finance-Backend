let users = [];

const allowedRoles = ["ADMIN", "ANALYST", "VIEWER"];

const createUser = (data) => {
  if (!data.name || !data.role) {
    throw new Error("Name and role are required");
  }

  if (!allowedRoles.includes(data.role)) {
    throw new Error("Invalid role");
  }

  const user = {
    id: Date.now(),
    name: data.name,
    role: data.role,
    status: "ACTIVE",
  };

  users.push(user);
  return user;
};

const getUsers = () => {
  return users;
};

module.exports = { createUser, getUsers };