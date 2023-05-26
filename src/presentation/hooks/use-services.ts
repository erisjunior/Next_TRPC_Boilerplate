import { trpcNext } from '~/application/config/trpc-next'

export const {
  signUp: { useMutation: useSignUpMutation }
} = trpcNext
