import { MOCK_STORAGE_KEY } from 'configs'
import { Customer } from '../models/customer.model'
import { toStringDate } from 'utils'

function getStored(): Customer[] {
  const mockData = localStorage.getItem(MOCK_STORAGE_KEY)
  return mockData ? JSON.parse(mockData) : []
}

function save(data: Customer[]) {
  localStorage.setItem(MOCK_STORAGE_KEY, JSON.stringify(data))
}

function buildKey(
  customer: Pick<Customer, 'firstName' | 'lastName' | 'dateOfBirth'>
): string {
  const dateOfBirth = toStringDate(customer.dateOfBirth)
  return `${customer.firstName.trim().toLowerCase()}|${customer.lastName.trim().toLowerCase()}|${dateOfBirth}`
}

function findCustomerIndex(customers: Customer[], key: string): number {
  return customers.findIndex((customer) => buildKey(customer) === key)
}

export const CustomerService = {
  getAll: async (): Promise<Customer[]> => getStored(),

  getByKey: async (
    firstName: string,
    lastName: string,
    dateOfBirth: Date
  ): Promise<Customer | undefined> => {
    const key = buildKey({ firstName, lastName, dateOfBirth })
    return getStored().find((customer) => buildKey(customer) === key)
  },

  create: async (data: Customer): Promise<Customer | null> => {
    const customers = getStored()
    const key = buildKey(data)
    const exists = customers.some((customer) => buildKey(customer) === key)
    if (exists) return null

    customers.push(data)
    save(customers)
    return data
  },

  update: async (
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    data: Partial<Customer>
  ): Promise<Customer | null> => {
    const customers = getStored()
    const key = buildKey({ firstName, lastName, dateOfBirth })
    const index = findCustomerIndex(customers, key)
    if (index === -1) return null

    customers[index] = { ...customers[index], ...data }
    save(customers)
    return customers[index]
  },

  delete: async (
    firstName: string,
    lastName: string,
    dateOfBirth: Date
  ): Promise<boolean> => {
    const customers = getStored()
    const key = buildKey({ firstName, lastName, dateOfBirth })
    const filtered = customers.filter((customer) => buildKey(customer) !== key)
    save(filtered)
    return filtered.length < customers.length
  },
}
