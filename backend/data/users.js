import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Kosi Ezenwa',
    email: 'kosi@email.com',
    password: bcrypt.hashSync('password123', 10),
    isAdmin: false,
  },
  {
    name: 'Ufoma Tobi',
    email: 'tobi@email.com',
    password: bcrypt.hashSync('password123', 10),
    isAdmin: true,
  },
  {
    name: 'Naanpan Gumwesh',
    email: 'nanpaan@email.com',
    password: bcrypt.hashSync('password123', 10),
    isAdmin: true,
  },
  {
    name: 'John Elueme',
    email: 'john@email.com',
    password: bcrypt.hashSync('password123', 10),
    isAdmin: true,
  },
]

export default users
