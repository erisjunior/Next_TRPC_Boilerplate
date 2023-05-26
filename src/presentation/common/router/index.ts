export enum Routes {
  HOME = '/',
  ROTA_COM_PARAMETRO = '/rota-privada/:id',
  LOGIN = '/entrar',
  REGISTER = '/cadastro',
  NOT_FOUND = '/404'
}

export const generatePath = (
  route: Routes,
  path: { [key: string]: string }
) => {
  const param = Object.keys(path)[0]
  const generatedRoute = route.replace(`:${param}`, path[param])
  return generatedRoute
}
