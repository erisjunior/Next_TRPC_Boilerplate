import { z } from 'zod'

export const phoneSchema = z
  .string()
  .min(10, 'Insira um telefone válido')
  .max(14, 'Insira um telefone válido')
