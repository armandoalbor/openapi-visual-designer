export interface Action<T extends string = string, P = any> {
  readonly type: T;
  readonly payload?: P;
}

export function createAction<T extends string, P = any>(
  type: T
): (p?: P) => Action<T, P> {
  return (payload?: P): Action<T, P> => ({
    type,
    payload,
  });
}
