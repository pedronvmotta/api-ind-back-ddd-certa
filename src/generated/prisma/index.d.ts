
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Leitor
 * 
 */
export type Leitor = $Result.DefaultSelection<Prisma.$LeitorPayload>
/**
 * Model Autor
 * 
 */
export type Autor = $Result.DefaultSelection<Prisma.$AutorPayload>
/**
 * Model Livro
 * 
 */
export type Livro = $Result.DefaultSelection<Prisma.$LivroPayload>
/**
 * Model Emprestimo
 * 
 */
export type Emprestimo = $Result.DefaultSelection<Prisma.$EmprestimoPayload>
/**
 * Model ItemEmprestimo
 * 
 */
export type ItemEmprestimo = $Result.DefaultSelection<Prisma.$ItemEmprestimoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  LEITOR: 'LEITOR',
  AUTOR: 'AUTOR',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leitor`: Exposes CRUD operations for the **Leitor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leitors
    * const leitors = await prisma.leitor.findMany()
    * ```
    */
  get leitor(): Prisma.LeitorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.autor`: Exposes CRUD operations for the **Autor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Autors
    * const autors = await prisma.autor.findMany()
    * ```
    */
  get autor(): Prisma.AutorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.livro`: Exposes CRUD operations for the **Livro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Livros
    * const livros = await prisma.livro.findMany()
    * ```
    */
  get livro(): Prisma.LivroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emprestimo`: Exposes CRUD operations for the **Emprestimo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emprestimos
    * const emprestimos = await prisma.emprestimo.findMany()
    * ```
    */
  get emprestimo(): Prisma.EmprestimoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemEmprestimo`: Exposes CRUD operations for the **ItemEmprestimo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemEmprestimos
    * const itemEmprestimos = await prisma.itemEmprestimo.findMany()
    * ```
    */
  get itemEmprestimo(): Prisma.ItemEmprestimoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Leitor: 'Leitor',
    Autor: 'Autor',
    Livro: 'Livro',
    Emprestimo: 'Emprestimo',
    ItemEmprestimo: 'ItemEmprestimo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "leitor" | "autor" | "livro" | "emprestimo" | "itemEmprestimo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Leitor: {
        payload: Prisma.$LeitorPayload<ExtArgs>
        fields: Prisma.LeitorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeitorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeitorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeitorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeitorPayload>
          }
          findFirst: {
            args: Prisma.LeitorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeitorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeitorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeitorPayload>
          }
          findMany: {
            args: Prisma.LeitorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeitorPayload>[]
          }
          create: {
            args: Prisma.LeitorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeitorPayload>
          }
          createMany: {
            args: Prisma.LeitorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeitorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeitorPayload>[]
          }
          delete: {
            args: Prisma.LeitorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeitorPayload>
          }
          update: {
            args: Prisma.LeitorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeitorPayload>
          }
          deleteMany: {
            args: Prisma.LeitorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeitorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeitorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeitorPayload>[]
          }
          upsert: {
            args: Prisma.LeitorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeitorPayload>
          }
          aggregate: {
            args: Prisma.LeitorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeitor>
          }
          groupBy: {
            args: Prisma.LeitorGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeitorGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeitorCountArgs<ExtArgs>
            result: $Utils.Optional<LeitorCountAggregateOutputType> | number
          }
        }
      }
      Autor: {
        payload: Prisma.$AutorPayload<ExtArgs>
        fields: Prisma.AutorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          findFirst: {
            args: Prisma.AutorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          findMany: {
            args: Prisma.AutorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>[]
          }
          create: {
            args: Prisma.AutorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          createMany: {
            args: Prisma.AutorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>[]
          }
          delete: {
            args: Prisma.AutorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          update: {
            args: Prisma.AutorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          deleteMany: {
            args: Prisma.AutorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>[]
          }
          upsert: {
            args: Prisma.AutorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          aggregate: {
            args: Prisma.AutorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutor>
          }
          groupBy: {
            args: Prisma.AutorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutorCountArgs<ExtArgs>
            result: $Utils.Optional<AutorCountAggregateOutputType> | number
          }
        }
      }
      Livro: {
        payload: Prisma.$LivroPayload<ExtArgs>
        fields: Prisma.LivroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LivroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LivroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          findFirst: {
            args: Prisma.LivroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LivroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          findMany: {
            args: Prisma.LivroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>[]
          }
          create: {
            args: Prisma.LivroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          createMany: {
            args: Prisma.LivroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LivroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>[]
          }
          delete: {
            args: Prisma.LivroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          update: {
            args: Prisma.LivroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          deleteMany: {
            args: Prisma.LivroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LivroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LivroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>[]
          }
          upsert: {
            args: Prisma.LivroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          aggregate: {
            args: Prisma.LivroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLivro>
          }
          groupBy: {
            args: Prisma.LivroGroupByArgs<ExtArgs>
            result: $Utils.Optional<LivroGroupByOutputType>[]
          }
          count: {
            args: Prisma.LivroCountArgs<ExtArgs>
            result: $Utils.Optional<LivroCountAggregateOutputType> | number
          }
        }
      }
      Emprestimo: {
        payload: Prisma.$EmprestimoPayload<ExtArgs>
        fields: Prisma.EmprestimoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmprestimoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmprestimoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          findFirst: {
            args: Prisma.EmprestimoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmprestimoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          findMany: {
            args: Prisma.EmprestimoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>[]
          }
          create: {
            args: Prisma.EmprestimoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          createMany: {
            args: Prisma.EmprestimoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmprestimoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>[]
          }
          delete: {
            args: Prisma.EmprestimoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          update: {
            args: Prisma.EmprestimoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          deleteMany: {
            args: Prisma.EmprestimoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmprestimoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmprestimoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>[]
          }
          upsert: {
            args: Prisma.EmprestimoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          aggregate: {
            args: Prisma.EmprestimoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmprestimo>
          }
          groupBy: {
            args: Prisma.EmprestimoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmprestimoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmprestimoCountArgs<ExtArgs>
            result: $Utils.Optional<EmprestimoCountAggregateOutputType> | number
          }
        }
      }
      ItemEmprestimo: {
        payload: Prisma.$ItemEmprestimoPayload<ExtArgs>
        fields: Prisma.ItemEmprestimoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemEmprestimoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemEmprestimoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemEmprestimoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemEmprestimoPayload>
          }
          findFirst: {
            args: Prisma.ItemEmprestimoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemEmprestimoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemEmprestimoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemEmprestimoPayload>
          }
          findMany: {
            args: Prisma.ItemEmprestimoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemEmprestimoPayload>[]
          }
          create: {
            args: Prisma.ItemEmprestimoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemEmprestimoPayload>
          }
          createMany: {
            args: Prisma.ItemEmprestimoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemEmprestimoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemEmprestimoPayload>[]
          }
          delete: {
            args: Prisma.ItemEmprestimoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemEmprestimoPayload>
          }
          update: {
            args: Prisma.ItemEmprestimoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemEmprestimoPayload>
          }
          deleteMany: {
            args: Prisma.ItemEmprestimoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemEmprestimoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemEmprestimoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemEmprestimoPayload>[]
          }
          upsert: {
            args: Prisma.ItemEmprestimoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemEmprestimoPayload>
          }
          aggregate: {
            args: Prisma.ItemEmprestimoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemEmprestimo>
          }
          groupBy: {
            args: Prisma.ItemEmprestimoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemEmprestimoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemEmprestimoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemEmprestimoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    leitor?: LeitorOmit
    autor?: AutorOmit
    livro?: LivroOmit
    emprestimo?: EmprestimoOmit
    itemEmprestimo?: ItemEmprestimoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LeitorCountOutputType
   */

  export type LeitorCountOutputType = {
    emprestimos: number
  }

  export type LeitorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimos?: boolean | LeitorCountOutputTypeCountEmprestimosArgs
  }

  // Custom InputTypes
  /**
   * LeitorCountOutputType without action
   */
  export type LeitorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeitorCountOutputType
     */
    select?: LeitorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeitorCountOutputType without action
   */
  export type LeitorCountOutputTypeCountEmprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmprestimoWhereInput
  }


  /**
   * Count Type AutorCountOutputType
   */

  export type AutorCountOutputType = {
    livros: number
  }

  export type AutorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livros?: boolean | AutorCountOutputTypeCountLivrosArgs
  }

  // Custom InputTypes
  /**
   * AutorCountOutputType without action
   */
  export type AutorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutorCountOutputType
     */
    select?: AutorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AutorCountOutputType without action
   */
  export type AutorCountOutputTypeCountLivrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivroWhereInput
  }


  /**
   * Count Type LivroCountOutputType
   */

  export type LivroCountOutputType = {
    itens_emprestimo: number
  }

  export type LivroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens_emprestimo?: boolean | LivroCountOutputTypeCountItens_emprestimoArgs
  }

  // Custom InputTypes
  /**
   * LivroCountOutputType without action
   */
  export type LivroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivroCountOutputType
     */
    select?: LivroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LivroCountOutputType without action
   */
  export type LivroCountOutputTypeCountItens_emprestimoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemEmprestimoWhereInput
  }


  /**
   * Count Type EmprestimoCountOutputType
   */

  export type EmprestimoCountOutputType = {
    itens_emprestimo: number
  }

  export type EmprestimoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens_emprestimo?: boolean | EmprestimoCountOutputTypeCountItens_emprestimoArgs
  }

  // Custom InputTypes
  /**
   * EmprestimoCountOutputType without action
   */
  export type EmprestimoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmprestimoCountOutputType
     */
    select?: EmprestimoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmprestimoCountOutputType without action
   */
  export type EmprestimoCountOutputTypeCountItens_emprestimoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemEmprestimoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    created_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    role: $Enums.Role
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    leitor?: boolean | User$leitorArgs<ExtArgs>
    autor?: boolean | User$autorArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leitor?: boolean | User$leitorArgs<ExtArgs>
    autor?: boolean | User$autorArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      leitor: Prisma.$LeitorPayload<ExtArgs> | null
      autor: Prisma.$AutorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: $Enums.Role
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leitor<T extends User$leitorArgs<ExtArgs> = {}>(args?: Subset<T, User$leitorArgs<ExtArgs>>): Prisma__LeitorClient<$Result.GetResult<Prisma.$LeitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    autor<T extends User$autorArgs<ExtArgs> = {}>(args?: Subset<T, User$autorArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly created_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.leitor
   */
  export type User$leitorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leitor
     */
    select?: LeitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leitor
     */
    omit?: LeitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeitorInclude<ExtArgs> | null
    where?: LeitorWhereInput
  }

  /**
   * User.autor
   */
  export type User$autorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    where?: AutorWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Leitor
   */

  export type AggregateLeitor = {
    _count: LeitorCountAggregateOutputType | null
    _avg: LeitorAvgAggregateOutputType | null
    _sum: LeitorSumAggregateOutputType | null
    _min: LeitorMinAggregateOutputType | null
    _max: LeitorMaxAggregateOutputType | null
  }

  export type LeitorAvgAggregateOutputType = {
    id: number | null
    id_user: number | null
  }

  export type LeitorSumAggregateOutputType = {
    id: number | null
    id_user: number | null
  }

  export type LeitorMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cpf: string | null
    data_de_nascimento: Date | null
    endereco: string | null
    observacao: string | null
    id_user: number | null
  }

  export type LeitorMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cpf: string | null
    data_de_nascimento: Date | null
    endereco: string | null
    observacao: string | null
    id_user: number | null
  }

  export type LeitorCountAggregateOutputType = {
    id: number
    nome: number
    cpf: number
    data_de_nascimento: number
    endereco: number
    observacao: number
    id_user: number
    _all: number
  }


  export type LeitorAvgAggregateInputType = {
    id?: true
    id_user?: true
  }

  export type LeitorSumAggregateInputType = {
    id?: true
    id_user?: true
  }

  export type LeitorMinAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    data_de_nascimento?: true
    endereco?: true
    observacao?: true
    id_user?: true
  }

  export type LeitorMaxAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    data_de_nascimento?: true
    endereco?: true
    observacao?: true
    id_user?: true
  }

  export type LeitorCountAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    data_de_nascimento?: true
    endereco?: true
    observacao?: true
    id_user?: true
    _all?: true
  }

  export type LeitorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leitor to aggregate.
     */
    where?: LeitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leitors to fetch.
     */
    orderBy?: LeitorOrderByWithRelationInput | LeitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leitors
    **/
    _count?: true | LeitorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeitorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeitorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeitorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeitorMaxAggregateInputType
  }

  export type GetLeitorAggregateType<T extends LeitorAggregateArgs> = {
        [P in keyof T & keyof AggregateLeitor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeitor[P]>
      : GetScalarType<T[P], AggregateLeitor[P]>
  }




  export type LeitorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeitorWhereInput
    orderBy?: LeitorOrderByWithAggregationInput | LeitorOrderByWithAggregationInput[]
    by: LeitorScalarFieldEnum[] | LeitorScalarFieldEnum
    having?: LeitorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeitorCountAggregateInputType | true
    _avg?: LeitorAvgAggregateInputType
    _sum?: LeitorSumAggregateInputType
    _min?: LeitorMinAggregateInputType
    _max?: LeitorMaxAggregateInputType
  }

  export type LeitorGroupByOutputType = {
    id: number
    nome: string
    cpf: string
    data_de_nascimento: Date
    endereco: string
    observacao: string | null
    id_user: number
    _count: LeitorCountAggregateOutputType | null
    _avg: LeitorAvgAggregateOutputType | null
    _sum: LeitorSumAggregateOutputType | null
    _min: LeitorMinAggregateOutputType | null
    _max: LeitorMaxAggregateOutputType | null
  }

  type GetLeitorGroupByPayload<T extends LeitorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeitorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeitorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeitorGroupByOutputType[P]>
            : GetScalarType<T[P], LeitorGroupByOutputType[P]>
        }
      >
    >


  export type LeitorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    data_de_nascimento?: boolean
    endereco?: boolean
    observacao?: boolean
    id_user?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    emprestimos?: boolean | Leitor$emprestimosArgs<ExtArgs>
    _count?: boolean | LeitorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leitor"]>

  export type LeitorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    data_de_nascimento?: boolean
    endereco?: boolean
    observacao?: boolean
    id_user?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leitor"]>

  export type LeitorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    data_de_nascimento?: boolean
    endereco?: boolean
    observacao?: boolean
    id_user?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leitor"]>

  export type LeitorSelectScalar = {
    id?: boolean
    nome?: boolean
    cpf?: boolean
    data_de_nascimento?: boolean
    endereco?: boolean
    observacao?: boolean
    id_user?: boolean
  }

  export type LeitorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cpf" | "data_de_nascimento" | "endereco" | "observacao" | "id_user", ExtArgs["result"]["leitor"]>
  export type LeitorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    emprestimos?: boolean | Leitor$emprestimosArgs<ExtArgs>
    _count?: boolean | LeitorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeitorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LeitorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LeitorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Leitor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      emprestimos: Prisma.$EmprestimoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      cpf: string
      data_de_nascimento: Date
      endereco: string
      observacao: string | null
      id_user: number
    }, ExtArgs["result"]["leitor"]>
    composites: {}
  }

  type LeitorGetPayload<S extends boolean | null | undefined | LeitorDefaultArgs> = $Result.GetResult<Prisma.$LeitorPayload, S>

  type LeitorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeitorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeitorCountAggregateInputType | true
    }

  export interface LeitorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Leitor'], meta: { name: 'Leitor' } }
    /**
     * Find zero or one Leitor that matches the filter.
     * @param {LeitorFindUniqueArgs} args - Arguments to find a Leitor
     * @example
     * // Get one Leitor
     * const leitor = await prisma.leitor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeitorFindUniqueArgs>(args: SelectSubset<T, LeitorFindUniqueArgs<ExtArgs>>): Prisma__LeitorClient<$Result.GetResult<Prisma.$LeitorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leitor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeitorFindUniqueOrThrowArgs} args - Arguments to find a Leitor
     * @example
     * // Get one Leitor
     * const leitor = await prisma.leitor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeitorFindUniqueOrThrowArgs>(args: SelectSubset<T, LeitorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeitorClient<$Result.GetResult<Prisma.$LeitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leitor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeitorFindFirstArgs} args - Arguments to find a Leitor
     * @example
     * // Get one Leitor
     * const leitor = await prisma.leitor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeitorFindFirstArgs>(args?: SelectSubset<T, LeitorFindFirstArgs<ExtArgs>>): Prisma__LeitorClient<$Result.GetResult<Prisma.$LeitorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leitor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeitorFindFirstOrThrowArgs} args - Arguments to find a Leitor
     * @example
     * // Get one Leitor
     * const leitor = await prisma.leitor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeitorFindFirstOrThrowArgs>(args?: SelectSubset<T, LeitorFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeitorClient<$Result.GetResult<Prisma.$LeitorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeitorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leitors
     * const leitors = await prisma.leitor.findMany()
     * 
     * // Get first 10 Leitors
     * const leitors = await prisma.leitor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leitorWithIdOnly = await prisma.leitor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeitorFindManyArgs>(args?: SelectSubset<T, LeitorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leitor.
     * @param {LeitorCreateArgs} args - Arguments to create a Leitor.
     * @example
     * // Create one Leitor
     * const Leitor = await prisma.leitor.create({
     *   data: {
     *     // ... data to create a Leitor
     *   }
     * })
     * 
     */
    create<T extends LeitorCreateArgs>(args: SelectSubset<T, LeitorCreateArgs<ExtArgs>>): Prisma__LeitorClient<$Result.GetResult<Prisma.$LeitorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leitors.
     * @param {LeitorCreateManyArgs} args - Arguments to create many Leitors.
     * @example
     * // Create many Leitors
     * const leitor = await prisma.leitor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeitorCreateManyArgs>(args?: SelectSubset<T, LeitorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leitors and returns the data saved in the database.
     * @param {LeitorCreateManyAndReturnArgs} args - Arguments to create many Leitors.
     * @example
     * // Create many Leitors
     * const leitor = await prisma.leitor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leitors and only return the `id`
     * const leitorWithIdOnly = await prisma.leitor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeitorCreateManyAndReturnArgs>(args?: SelectSubset<T, LeitorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeitorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leitor.
     * @param {LeitorDeleteArgs} args - Arguments to delete one Leitor.
     * @example
     * // Delete one Leitor
     * const Leitor = await prisma.leitor.delete({
     *   where: {
     *     // ... filter to delete one Leitor
     *   }
     * })
     * 
     */
    delete<T extends LeitorDeleteArgs>(args: SelectSubset<T, LeitorDeleteArgs<ExtArgs>>): Prisma__LeitorClient<$Result.GetResult<Prisma.$LeitorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leitor.
     * @param {LeitorUpdateArgs} args - Arguments to update one Leitor.
     * @example
     * // Update one Leitor
     * const leitor = await prisma.leitor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeitorUpdateArgs>(args: SelectSubset<T, LeitorUpdateArgs<ExtArgs>>): Prisma__LeitorClient<$Result.GetResult<Prisma.$LeitorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leitors.
     * @param {LeitorDeleteManyArgs} args - Arguments to filter Leitors to delete.
     * @example
     * // Delete a few Leitors
     * const { count } = await prisma.leitor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeitorDeleteManyArgs>(args?: SelectSubset<T, LeitorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeitorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leitors
     * const leitor = await prisma.leitor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeitorUpdateManyArgs>(args: SelectSubset<T, LeitorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leitors and returns the data updated in the database.
     * @param {LeitorUpdateManyAndReturnArgs} args - Arguments to update many Leitors.
     * @example
     * // Update many Leitors
     * const leitor = await prisma.leitor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leitors and only return the `id`
     * const leitorWithIdOnly = await prisma.leitor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeitorUpdateManyAndReturnArgs>(args: SelectSubset<T, LeitorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeitorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leitor.
     * @param {LeitorUpsertArgs} args - Arguments to update or create a Leitor.
     * @example
     * // Update or create a Leitor
     * const leitor = await prisma.leitor.upsert({
     *   create: {
     *     // ... data to create a Leitor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leitor we want to update
     *   }
     * })
     */
    upsert<T extends LeitorUpsertArgs>(args: SelectSubset<T, LeitorUpsertArgs<ExtArgs>>): Prisma__LeitorClient<$Result.GetResult<Prisma.$LeitorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeitorCountArgs} args - Arguments to filter Leitors to count.
     * @example
     * // Count the number of Leitors
     * const count = await prisma.leitor.count({
     *   where: {
     *     // ... the filter for the Leitors we want to count
     *   }
     * })
    **/
    count<T extends LeitorCountArgs>(
      args?: Subset<T, LeitorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeitorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeitorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeitorAggregateArgs>(args: Subset<T, LeitorAggregateArgs>): Prisma.PrismaPromise<GetLeitorAggregateType<T>>

    /**
     * Group by Leitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeitorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeitorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeitorGroupByArgs['orderBy'] }
        : { orderBy?: LeitorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeitorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeitorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Leitor model
   */
  readonly fields: LeitorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Leitor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeitorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    emprestimos<T extends Leitor$emprestimosArgs<ExtArgs> = {}>(args?: Subset<T, Leitor$emprestimosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Leitor model
   */
  interface LeitorFieldRefs {
    readonly id: FieldRef<"Leitor", 'Int'>
    readonly nome: FieldRef<"Leitor", 'String'>
    readonly cpf: FieldRef<"Leitor", 'String'>
    readonly data_de_nascimento: FieldRef<"Leitor", 'DateTime'>
    readonly endereco: FieldRef<"Leitor", 'String'>
    readonly observacao: FieldRef<"Leitor", 'String'>
    readonly id_user: FieldRef<"Leitor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Leitor findUnique
   */
  export type LeitorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leitor
     */
    select?: LeitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leitor
     */
    omit?: LeitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeitorInclude<ExtArgs> | null
    /**
     * Filter, which Leitor to fetch.
     */
    where: LeitorWhereUniqueInput
  }

  /**
   * Leitor findUniqueOrThrow
   */
  export type LeitorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leitor
     */
    select?: LeitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leitor
     */
    omit?: LeitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeitorInclude<ExtArgs> | null
    /**
     * Filter, which Leitor to fetch.
     */
    where: LeitorWhereUniqueInput
  }

  /**
   * Leitor findFirst
   */
  export type LeitorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leitor
     */
    select?: LeitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leitor
     */
    omit?: LeitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeitorInclude<ExtArgs> | null
    /**
     * Filter, which Leitor to fetch.
     */
    where?: LeitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leitors to fetch.
     */
    orderBy?: LeitorOrderByWithRelationInput | LeitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leitors.
     */
    cursor?: LeitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leitors.
     */
    distinct?: LeitorScalarFieldEnum | LeitorScalarFieldEnum[]
  }

  /**
   * Leitor findFirstOrThrow
   */
  export type LeitorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leitor
     */
    select?: LeitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leitor
     */
    omit?: LeitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeitorInclude<ExtArgs> | null
    /**
     * Filter, which Leitor to fetch.
     */
    where?: LeitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leitors to fetch.
     */
    orderBy?: LeitorOrderByWithRelationInput | LeitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leitors.
     */
    cursor?: LeitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leitors.
     */
    distinct?: LeitorScalarFieldEnum | LeitorScalarFieldEnum[]
  }

  /**
   * Leitor findMany
   */
  export type LeitorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leitor
     */
    select?: LeitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leitor
     */
    omit?: LeitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeitorInclude<ExtArgs> | null
    /**
     * Filter, which Leitors to fetch.
     */
    where?: LeitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leitors to fetch.
     */
    orderBy?: LeitorOrderByWithRelationInput | LeitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leitors.
     */
    cursor?: LeitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leitors.
     */
    distinct?: LeitorScalarFieldEnum | LeitorScalarFieldEnum[]
  }

  /**
   * Leitor create
   */
  export type LeitorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leitor
     */
    select?: LeitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leitor
     */
    omit?: LeitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeitorInclude<ExtArgs> | null
    /**
     * The data needed to create a Leitor.
     */
    data: XOR<LeitorCreateInput, LeitorUncheckedCreateInput>
  }

  /**
   * Leitor createMany
   */
  export type LeitorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leitors.
     */
    data: LeitorCreateManyInput | LeitorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leitor createManyAndReturn
   */
  export type LeitorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leitor
     */
    select?: LeitorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leitor
     */
    omit?: LeitorOmit<ExtArgs> | null
    /**
     * The data used to create many Leitors.
     */
    data: LeitorCreateManyInput | LeitorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeitorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leitor update
   */
  export type LeitorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leitor
     */
    select?: LeitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leitor
     */
    omit?: LeitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeitorInclude<ExtArgs> | null
    /**
     * The data needed to update a Leitor.
     */
    data: XOR<LeitorUpdateInput, LeitorUncheckedUpdateInput>
    /**
     * Choose, which Leitor to update.
     */
    where: LeitorWhereUniqueInput
  }

  /**
   * Leitor updateMany
   */
  export type LeitorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leitors.
     */
    data: XOR<LeitorUpdateManyMutationInput, LeitorUncheckedUpdateManyInput>
    /**
     * Filter which Leitors to update
     */
    where?: LeitorWhereInput
    /**
     * Limit how many Leitors to update.
     */
    limit?: number
  }

  /**
   * Leitor updateManyAndReturn
   */
  export type LeitorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leitor
     */
    select?: LeitorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leitor
     */
    omit?: LeitorOmit<ExtArgs> | null
    /**
     * The data used to update Leitors.
     */
    data: XOR<LeitorUpdateManyMutationInput, LeitorUncheckedUpdateManyInput>
    /**
     * Filter which Leitors to update
     */
    where?: LeitorWhereInput
    /**
     * Limit how many Leitors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeitorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leitor upsert
   */
  export type LeitorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leitor
     */
    select?: LeitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leitor
     */
    omit?: LeitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeitorInclude<ExtArgs> | null
    /**
     * The filter to search for the Leitor to update in case it exists.
     */
    where: LeitorWhereUniqueInput
    /**
     * In case the Leitor found by the `where` argument doesn't exist, create a new Leitor with this data.
     */
    create: XOR<LeitorCreateInput, LeitorUncheckedCreateInput>
    /**
     * In case the Leitor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeitorUpdateInput, LeitorUncheckedUpdateInput>
  }

  /**
   * Leitor delete
   */
  export type LeitorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leitor
     */
    select?: LeitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leitor
     */
    omit?: LeitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeitorInclude<ExtArgs> | null
    /**
     * Filter which Leitor to delete.
     */
    where: LeitorWhereUniqueInput
  }

  /**
   * Leitor deleteMany
   */
  export type LeitorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leitors to delete
     */
    where?: LeitorWhereInput
    /**
     * Limit how many Leitors to delete.
     */
    limit?: number
  }

  /**
   * Leitor.emprestimos
   */
  export type Leitor$emprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    where?: EmprestimoWhereInput
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    cursor?: EmprestimoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * Leitor without action
   */
  export type LeitorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leitor
     */
    select?: LeitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leitor
     */
    omit?: LeitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeitorInclude<ExtArgs> | null
  }


  /**
   * Model Autor
   */

  export type AggregateAutor = {
    _count: AutorCountAggregateOutputType | null
    _avg: AutorAvgAggregateOutputType | null
    _sum: AutorSumAggregateOutputType | null
    _min: AutorMinAggregateOutputType | null
    _max: AutorMaxAggregateOutputType | null
  }

  export type AutorAvgAggregateOutputType = {
    id: number | null
    id_user: number | null
  }

  export type AutorSumAggregateOutputType = {
    id: number | null
    id_user: number | null
  }

  export type AutorMinAggregateOutputType = {
    id: number | null
    nome_autor: string | null
    origem: string | null
    biografia: string | null
    data_de_nascimento: Date | null
    nome_artistico: string | null
    id_user: number | null
  }

  export type AutorMaxAggregateOutputType = {
    id: number | null
    nome_autor: string | null
    origem: string | null
    biografia: string | null
    data_de_nascimento: Date | null
    nome_artistico: string | null
    id_user: number | null
  }

  export type AutorCountAggregateOutputType = {
    id: number
    nome_autor: number
    origem: number
    biografia: number
    data_de_nascimento: number
    nome_artistico: number
    id_user: number
    _all: number
  }


  export type AutorAvgAggregateInputType = {
    id?: true
    id_user?: true
  }

  export type AutorSumAggregateInputType = {
    id?: true
    id_user?: true
  }

  export type AutorMinAggregateInputType = {
    id?: true
    nome_autor?: true
    origem?: true
    biografia?: true
    data_de_nascimento?: true
    nome_artistico?: true
    id_user?: true
  }

  export type AutorMaxAggregateInputType = {
    id?: true
    nome_autor?: true
    origem?: true
    biografia?: true
    data_de_nascimento?: true
    nome_artistico?: true
    id_user?: true
  }

  export type AutorCountAggregateInputType = {
    id?: true
    nome_autor?: true
    origem?: true
    biografia?: true
    data_de_nascimento?: true
    nome_artistico?: true
    id_user?: true
    _all?: true
  }

  export type AutorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Autor to aggregate.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Autors
    **/
    _count?: true | AutorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AutorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AutorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutorMaxAggregateInputType
  }

  export type GetAutorAggregateType<T extends AutorAggregateArgs> = {
        [P in keyof T & keyof AggregateAutor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutor[P]>
      : GetScalarType<T[P], AggregateAutor[P]>
  }




  export type AutorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutorWhereInput
    orderBy?: AutorOrderByWithAggregationInput | AutorOrderByWithAggregationInput[]
    by: AutorScalarFieldEnum[] | AutorScalarFieldEnum
    having?: AutorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutorCountAggregateInputType | true
    _avg?: AutorAvgAggregateInputType
    _sum?: AutorSumAggregateInputType
    _min?: AutorMinAggregateInputType
    _max?: AutorMaxAggregateInputType
  }

  export type AutorGroupByOutputType = {
    id: number
    nome_autor: string
    origem: string
    biografia: string
    data_de_nascimento: Date
    nome_artistico: string
    id_user: number
    _count: AutorCountAggregateOutputType | null
    _avg: AutorAvgAggregateOutputType | null
    _sum: AutorSumAggregateOutputType | null
    _min: AutorMinAggregateOutputType | null
    _max: AutorMaxAggregateOutputType | null
  }

  type GetAutorGroupByPayload<T extends AutorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutorGroupByOutputType[P]>
            : GetScalarType<T[P], AutorGroupByOutputType[P]>
        }
      >
    >


  export type AutorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_autor?: boolean
    origem?: boolean
    biografia?: boolean
    data_de_nascimento?: boolean
    nome_artistico?: boolean
    id_user?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    livros?: boolean | Autor$livrosArgs<ExtArgs>
    _count?: boolean | AutorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["autor"]>

  export type AutorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_autor?: boolean
    origem?: boolean
    biografia?: boolean
    data_de_nascimento?: boolean
    nome_artistico?: boolean
    id_user?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["autor"]>

  export type AutorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_autor?: boolean
    origem?: boolean
    biografia?: boolean
    data_de_nascimento?: boolean
    nome_artistico?: boolean
    id_user?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["autor"]>

  export type AutorSelectScalar = {
    id?: boolean
    nome_autor?: boolean
    origem?: boolean
    biografia?: boolean
    data_de_nascimento?: boolean
    nome_artistico?: boolean
    id_user?: boolean
  }

  export type AutorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome_autor" | "origem" | "biografia" | "data_de_nascimento" | "nome_artistico" | "id_user", ExtArgs["result"]["autor"]>
  export type AutorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    livros?: boolean | Autor$livrosArgs<ExtArgs>
    _count?: boolean | AutorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AutorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AutorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AutorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Autor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      livros: Prisma.$LivroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome_autor: string
      origem: string
      biografia: string
      data_de_nascimento: Date
      nome_artistico: string
      id_user: number
    }, ExtArgs["result"]["autor"]>
    composites: {}
  }

  type AutorGetPayload<S extends boolean | null | undefined | AutorDefaultArgs> = $Result.GetResult<Prisma.$AutorPayload, S>

  type AutorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutorCountAggregateInputType | true
    }

  export interface AutorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Autor'], meta: { name: 'Autor' } }
    /**
     * Find zero or one Autor that matches the filter.
     * @param {AutorFindUniqueArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutorFindUniqueArgs>(args: SelectSubset<T, AutorFindUniqueArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Autor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutorFindUniqueOrThrowArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutorFindUniqueOrThrowArgs>(args: SelectSubset<T, AutorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorFindFirstArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutorFindFirstArgs>(args?: SelectSubset<T, AutorFindFirstArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorFindFirstOrThrowArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutorFindFirstOrThrowArgs>(args?: SelectSubset<T, AutorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Autors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Autors
     * const autors = await prisma.autor.findMany()
     * 
     * // Get first 10 Autors
     * const autors = await prisma.autor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const autorWithIdOnly = await prisma.autor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutorFindManyArgs>(args?: SelectSubset<T, AutorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Autor.
     * @param {AutorCreateArgs} args - Arguments to create a Autor.
     * @example
     * // Create one Autor
     * const Autor = await prisma.autor.create({
     *   data: {
     *     // ... data to create a Autor
     *   }
     * })
     * 
     */
    create<T extends AutorCreateArgs>(args: SelectSubset<T, AutorCreateArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Autors.
     * @param {AutorCreateManyArgs} args - Arguments to create many Autors.
     * @example
     * // Create many Autors
     * const autor = await prisma.autor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutorCreateManyArgs>(args?: SelectSubset<T, AutorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Autors and returns the data saved in the database.
     * @param {AutorCreateManyAndReturnArgs} args - Arguments to create many Autors.
     * @example
     * // Create many Autors
     * const autor = await prisma.autor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Autors and only return the `id`
     * const autorWithIdOnly = await prisma.autor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutorCreateManyAndReturnArgs>(args?: SelectSubset<T, AutorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Autor.
     * @param {AutorDeleteArgs} args - Arguments to delete one Autor.
     * @example
     * // Delete one Autor
     * const Autor = await prisma.autor.delete({
     *   where: {
     *     // ... filter to delete one Autor
     *   }
     * })
     * 
     */
    delete<T extends AutorDeleteArgs>(args: SelectSubset<T, AutorDeleteArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Autor.
     * @param {AutorUpdateArgs} args - Arguments to update one Autor.
     * @example
     * // Update one Autor
     * const autor = await prisma.autor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutorUpdateArgs>(args: SelectSubset<T, AutorUpdateArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Autors.
     * @param {AutorDeleteManyArgs} args - Arguments to filter Autors to delete.
     * @example
     * // Delete a few Autors
     * const { count } = await prisma.autor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutorDeleteManyArgs>(args?: SelectSubset<T, AutorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Autors
     * const autor = await prisma.autor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutorUpdateManyArgs>(args: SelectSubset<T, AutorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autors and returns the data updated in the database.
     * @param {AutorUpdateManyAndReturnArgs} args - Arguments to update many Autors.
     * @example
     * // Update many Autors
     * const autor = await prisma.autor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Autors and only return the `id`
     * const autorWithIdOnly = await prisma.autor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AutorUpdateManyAndReturnArgs>(args: SelectSubset<T, AutorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Autor.
     * @param {AutorUpsertArgs} args - Arguments to update or create a Autor.
     * @example
     * // Update or create a Autor
     * const autor = await prisma.autor.upsert({
     *   create: {
     *     // ... data to create a Autor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Autor we want to update
     *   }
     * })
     */
    upsert<T extends AutorUpsertArgs>(args: SelectSubset<T, AutorUpsertArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorCountArgs} args - Arguments to filter Autors to count.
     * @example
     * // Count the number of Autors
     * const count = await prisma.autor.count({
     *   where: {
     *     // ... the filter for the Autors we want to count
     *   }
     * })
    **/
    count<T extends AutorCountArgs>(
      args?: Subset<T, AutorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Autor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AutorAggregateArgs>(args: Subset<T, AutorAggregateArgs>): Prisma.PrismaPromise<GetAutorAggregateType<T>>

    /**
     * Group by Autor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AutorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutorGroupByArgs['orderBy'] }
        : { orderBy?: AutorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AutorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Autor model
   */
  readonly fields: AutorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Autor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    livros<T extends Autor$livrosArgs<ExtArgs> = {}>(args?: Subset<T, Autor$livrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Autor model
   */
  interface AutorFieldRefs {
    readonly id: FieldRef<"Autor", 'Int'>
    readonly nome_autor: FieldRef<"Autor", 'String'>
    readonly origem: FieldRef<"Autor", 'String'>
    readonly biografia: FieldRef<"Autor", 'String'>
    readonly data_de_nascimento: FieldRef<"Autor", 'DateTime'>
    readonly nome_artistico: FieldRef<"Autor", 'String'>
    readonly id_user: FieldRef<"Autor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Autor findUnique
   */
  export type AutorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor findUniqueOrThrow
   */
  export type AutorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor findFirst
   */
  export type AutorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Autors.
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * Autor findFirstOrThrow
   */
  export type AutorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Autors.
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * Autor findMany
   */
  export type AutorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autors to fetch.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Autors.
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * Autor create
   */
  export type AutorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * The data needed to create a Autor.
     */
    data: XOR<AutorCreateInput, AutorUncheckedCreateInput>
  }

  /**
   * Autor createMany
   */
  export type AutorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Autors.
     */
    data: AutorCreateManyInput | AutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Autor createManyAndReturn
   */
  export type AutorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * The data used to create many Autors.
     */
    data: AutorCreateManyInput | AutorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Autor update
   */
  export type AutorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * The data needed to update a Autor.
     */
    data: XOR<AutorUpdateInput, AutorUncheckedUpdateInput>
    /**
     * Choose, which Autor to update.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor updateMany
   */
  export type AutorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Autors.
     */
    data: XOR<AutorUpdateManyMutationInput, AutorUncheckedUpdateManyInput>
    /**
     * Filter which Autors to update
     */
    where?: AutorWhereInput
    /**
     * Limit how many Autors to update.
     */
    limit?: number
  }

  /**
   * Autor updateManyAndReturn
   */
  export type AutorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * The data used to update Autors.
     */
    data: XOR<AutorUpdateManyMutationInput, AutorUncheckedUpdateManyInput>
    /**
     * Filter which Autors to update
     */
    where?: AutorWhereInput
    /**
     * Limit how many Autors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Autor upsert
   */
  export type AutorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * The filter to search for the Autor to update in case it exists.
     */
    where: AutorWhereUniqueInput
    /**
     * In case the Autor found by the `where` argument doesn't exist, create a new Autor with this data.
     */
    create: XOR<AutorCreateInput, AutorUncheckedCreateInput>
    /**
     * In case the Autor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutorUpdateInput, AutorUncheckedUpdateInput>
  }

  /**
   * Autor delete
   */
  export type AutorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter which Autor to delete.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor deleteMany
   */
  export type AutorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Autors to delete
     */
    where?: AutorWhereInput
    /**
     * Limit how many Autors to delete.
     */
    limit?: number
  }

  /**
   * Autor.livros
   */
  export type Autor$livrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    where?: LivroWhereInput
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    cursor?: LivroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Autor without action
   */
  export type AutorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
  }


  /**
   * Model Livro
   */

  export type AggregateLivro = {
    _count: LivroCountAggregateOutputType | null
    _avg: LivroAvgAggregateOutputType | null
    _sum: LivroSumAggregateOutputType | null
    _min: LivroMinAggregateOutputType | null
    _max: LivroMaxAggregateOutputType | null
  }

  export type LivroAvgAggregateOutputType = {
    id: number | null
    versao: number | null
    ano: number | null
    qtde_total: number | null
    qtde_disponivel: number | null
    id_autor: number | null
  }

  export type LivroSumAggregateOutputType = {
    id: number | null
    versao: number | null
    ano: number | null
    qtde_total: number | null
    qtde_disponivel: number | null
    id_autor: number | null
  }

  export type LivroMinAggregateOutputType = {
    id: number | null
    nome_livro: string | null
    editora: string | null
    versao: number | null
    ano: number | null
    genero: string | null
    idioma: string | null
    qtde_total: number | null
    qtde_disponivel: number | null
    id_autor: number | null
  }

  export type LivroMaxAggregateOutputType = {
    id: number | null
    nome_livro: string | null
    editora: string | null
    versao: number | null
    ano: number | null
    genero: string | null
    idioma: string | null
    qtde_total: number | null
    qtde_disponivel: number | null
    id_autor: number | null
  }

  export type LivroCountAggregateOutputType = {
    id: number
    nome_livro: number
    editora: number
    versao: number
    ano: number
    genero: number
    idioma: number
    qtde_total: number
    qtde_disponivel: number
    id_autor: number
    _all: number
  }


  export type LivroAvgAggregateInputType = {
    id?: true
    versao?: true
    ano?: true
    qtde_total?: true
    qtde_disponivel?: true
    id_autor?: true
  }

  export type LivroSumAggregateInputType = {
    id?: true
    versao?: true
    ano?: true
    qtde_total?: true
    qtde_disponivel?: true
    id_autor?: true
  }

  export type LivroMinAggregateInputType = {
    id?: true
    nome_livro?: true
    editora?: true
    versao?: true
    ano?: true
    genero?: true
    idioma?: true
    qtde_total?: true
    qtde_disponivel?: true
    id_autor?: true
  }

  export type LivroMaxAggregateInputType = {
    id?: true
    nome_livro?: true
    editora?: true
    versao?: true
    ano?: true
    genero?: true
    idioma?: true
    qtde_total?: true
    qtde_disponivel?: true
    id_autor?: true
  }

  export type LivroCountAggregateInputType = {
    id?: true
    nome_livro?: true
    editora?: true
    versao?: true
    ano?: true
    genero?: true
    idioma?: true
    qtde_total?: true
    qtde_disponivel?: true
    id_autor?: true
    _all?: true
  }

  export type LivroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livro to aggregate.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Livros
    **/
    _count?: true | LivroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LivroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LivroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LivroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LivroMaxAggregateInputType
  }

  export type GetLivroAggregateType<T extends LivroAggregateArgs> = {
        [P in keyof T & keyof AggregateLivro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLivro[P]>
      : GetScalarType<T[P], AggregateLivro[P]>
  }




  export type LivroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivroWhereInput
    orderBy?: LivroOrderByWithAggregationInput | LivroOrderByWithAggregationInput[]
    by: LivroScalarFieldEnum[] | LivroScalarFieldEnum
    having?: LivroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LivroCountAggregateInputType | true
    _avg?: LivroAvgAggregateInputType
    _sum?: LivroSumAggregateInputType
    _min?: LivroMinAggregateInputType
    _max?: LivroMaxAggregateInputType
  }

  export type LivroGroupByOutputType = {
    id: number
    nome_livro: string
    editora: string
    versao: number
    ano: number
    genero: string
    idioma: string
    qtde_total: number
    qtde_disponivel: number
    id_autor: number
    _count: LivroCountAggregateOutputType | null
    _avg: LivroAvgAggregateOutputType | null
    _sum: LivroSumAggregateOutputType | null
    _min: LivroMinAggregateOutputType | null
    _max: LivroMaxAggregateOutputType | null
  }

  type GetLivroGroupByPayload<T extends LivroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LivroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LivroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LivroGroupByOutputType[P]>
            : GetScalarType<T[P], LivroGroupByOutputType[P]>
        }
      >
    >


  export type LivroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_livro?: boolean
    editora?: boolean
    versao?: boolean
    ano?: boolean
    genero?: boolean
    idioma?: boolean
    qtde_total?: boolean
    qtde_disponivel?: boolean
    id_autor?: boolean
    autor?: boolean | AutorDefaultArgs<ExtArgs>
    itens_emprestimo?: boolean | Livro$itens_emprestimoArgs<ExtArgs>
    _count?: boolean | LivroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livro"]>

  export type LivroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_livro?: boolean
    editora?: boolean
    versao?: boolean
    ano?: boolean
    genero?: boolean
    idioma?: boolean
    qtde_total?: boolean
    qtde_disponivel?: boolean
    id_autor?: boolean
    autor?: boolean | AutorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livro"]>

  export type LivroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_livro?: boolean
    editora?: boolean
    versao?: boolean
    ano?: boolean
    genero?: boolean
    idioma?: boolean
    qtde_total?: boolean
    qtde_disponivel?: boolean
    id_autor?: boolean
    autor?: boolean | AutorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livro"]>

  export type LivroSelectScalar = {
    id?: boolean
    nome_livro?: boolean
    editora?: boolean
    versao?: boolean
    ano?: boolean
    genero?: boolean
    idioma?: boolean
    qtde_total?: boolean
    qtde_disponivel?: boolean
    id_autor?: boolean
  }

  export type LivroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome_livro" | "editora" | "versao" | "ano" | "genero" | "idioma" | "qtde_total" | "qtde_disponivel" | "id_autor", ExtArgs["result"]["livro"]>
  export type LivroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | AutorDefaultArgs<ExtArgs>
    itens_emprestimo?: boolean | Livro$itens_emprestimoArgs<ExtArgs>
    _count?: boolean | LivroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LivroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | AutorDefaultArgs<ExtArgs>
  }
  export type LivroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | AutorDefaultArgs<ExtArgs>
  }

  export type $LivroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Livro"
    objects: {
      autor: Prisma.$AutorPayload<ExtArgs>
      itens_emprestimo: Prisma.$ItemEmprestimoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome_livro: string
      editora: string
      versao: number
      ano: number
      genero: string
      idioma: string
      qtde_total: number
      qtde_disponivel: number
      id_autor: number
    }, ExtArgs["result"]["livro"]>
    composites: {}
  }

  type LivroGetPayload<S extends boolean | null | undefined | LivroDefaultArgs> = $Result.GetResult<Prisma.$LivroPayload, S>

  type LivroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LivroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LivroCountAggregateInputType | true
    }

  export interface LivroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Livro'], meta: { name: 'Livro' } }
    /**
     * Find zero or one Livro that matches the filter.
     * @param {LivroFindUniqueArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LivroFindUniqueArgs>(args: SelectSubset<T, LivroFindUniqueArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Livro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LivroFindUniqueOrThrowArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LivroFindUniqueOrThrowArgs>(args: SelectSubset<T, LivroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindFirstArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LivroFindFirstArgs>(args?: SelectSubset<T, LivroFindFirstArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindFirstOrThrowArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LivroFindFirstOrThrowArgs>(args?: SelectSubset<T, LivroFindFirstOrThrowArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Livros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Livros
     * const livros = await prisma.livro.findMany()
     * 
     * // Get first 10 Livros
     * const livros = await prisma.livro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const livroWithIdOnly = await prisma.livro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LivroFindManyArgs>(args?: SelectSubset<T, LivroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Livro.
     * @param {LivroCreateArgs} args - Arguments to create a Livro.
     * @example
     * // Create one Livro
     * const Livro = await prisma.livro.create({
     *   data: {
     *     // ... data to create a Livro
     *   }
     * })
     * 
     */
    create<T extends LivroCreateArgs>(args: SelectSubset<T, LivroCreateArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Livros.
     * @param {LivroCreateManyArgs} args - Arguments to create many Livros.
     * @example
     * // Create many Livros
     * const livro = await prisma.livro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LivroCreateManyArgs>(args?: SelectSubset<T, LivroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Livros and returns the data saved in the database.
     * @param {LivroCreateManyAndReturnArgs} args - Arguments to create many Livros.
     * @example
     * // Create many Livros
     * const livro = await prisma.livro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Livros and only return the `id`
     * const livroWithIdOnly = await prisma.livro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LivroCreateManyAndReturnArgs>(args?: SelectSubset<T, LivroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Livro.
     * @param {LivroDeleteArgs} args - Arguments to delete one Livro.
     * @example
     * // Delete one Livro
     * const Livro = await prisma.livro.delete({
     *   where: {
     *     // ... filter to delete one Livro
     *   }
     * })
     * 
     */
    delete<T extends LivroDeleteArgs>(args: SelectSubset<T, LivroDeleteArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Livro.
     * @param {LivroUpdateArgs} args - Arguments to update one Livro.
     * @example
     * // Update one Livro
     * const livro = await prisma.livro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LivroUpdateArgs>(args: SelectSubset<T, LivroUpdateArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Livros.
     * @param {LivroDeleteManyArgs} args - Arguments to filter Livros to delete.
     * @example
     * // Delete a few Livros
     * const { count } = await prisma.livro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LivroDeleteManyArgs>(args?: SelectSubset<T, LivroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Livros
     * const livro = await prisma.livro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LivroUpdateManyArgs>(args: SelectSubset<T, LivroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livros and returns the data updated in the database.
     * @param {LivroUpdateManyAndReturnArgs} args - Arguments to update many Livros.
     * @example
     * // Update many Livros
     * const livro = await prisma.livro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Livros and only return the `id`
     * const livroWithIdOnly = await prisma.livro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LivroUpdateManyAndReturnArgs>(args: SelectSubset<T, LivroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Livro.
     * @param {LivroUpsertArgs} args - Arguments to update or create a Livro.
     * @example
     * // Update or create a Livro
     * const livro = await prisma.livro.upsert({
     *   create: {
     *     // ... data to create a Livro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Livro we want to update
     *   }
     * })
     */
    upsert<T extends LivroUpsertArgs>(args: SelectSubset<T, LivroUpsertArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroCountArgs} args - Arguments to filter Livros to count.
     * @example
     * // Count the number of Livros
     * const count = await prisma.livro.count({
     *   where: {
     *     // ... the filter for the Livros we want to count
     *   }
     * })
    **/
    count<T extends LivroCountArgs>(
      args?: Subset<T, LivroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LivroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Livro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LivroAggregateArgs>(args: Subset<T, LivroAggregateArgs>): Prisma.PrismaPromise<GetLivroAggregateType<T>>

    /**
     * Group by Livro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LivroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LivroGroupByArgs['orderBy'] }
        : { orderBy?: LivroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LivroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLivroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Livro model
   */
  readonly fields: LivroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Livro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LivroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    autor<T extends AutorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AutorDefaultArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens_emprestimo<T extends Livro$itens_emprestimoArgs<ExtArgs> = {}>(args?: Subset<T, Livro$itens_emprestimoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemEmprestimoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Livro model
   */
  interface LivroFieldRefs {
    readonly id: FieldRef<"Livro", 'Int'>
    readonly nome_livro: FieldRef<"Livro", 'String'>
    readonly editora: FieldRef<"Livro", 'String'>
    readonly versao: FieldRef<"Livro", 'Int'>
    readonly ano: FieldRef<"Livro", 'Int'>
    readonly genero: FieldRef<"Livro", 'String'>
    readonly idioma: FieldRef<"Livro", 'String'>
    readonly qtde_total: FieldRef<"Livro", 'Int'>
    readonly qtde_disponivel: FieldRef<"Livro", 'Int'>
    readonly id_autor: FieldRef<"Livro", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Livro findUnique
   */
  export type LivroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro findUniqueOrThrow
   */
  export type LivroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro findFirst
   */
  export type LivroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro findFirstOrThrow
   */
  export type LivroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro findMany
   */
  export type LivroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livros to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro create
   */
  export type LivroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * The data needed to create a Livro.
     */
    data: XOR<LivroCreateInput, LivroUncheckedCreateInput>
  }

  /**
   * Livro createMany
   */
  export type LivroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Livros.
     */
    data: LivroCreateManyInput | LivroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Livro createManyAndReturn
   */
  export type LivroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * The data used to create many Livros.
     */
    data: LivroCreateManyInput | LivroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Livro update
   */
  export type LivroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * The data needed to update a Livro.
     */
    data: XOR<LivroUpdateInput, LivroUncheckedUpdateInput>
    /**
     * Choose, which Livro to update.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro updateMany
   */
  export type LivroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Livros.
     */
    data: XOR<LivroUpdateManyMutationInput, LivroUncheckedUpdateManyInput>
    /**
     * Filter which Livros to update
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to update.
     */
    limit?: number
  }

  /**
   * Livro updateManyAndReturn
   */
  export type LivroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * The data used to update Livros.
     */
    data: XOR<LivroUpdateManyMutationInput, LivroUncheckedUpdateManyInput>
    /**
     * Filter which Livros to update
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Livro upsert
   */
  export type LivroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * The filter to search for the Livro to update in case it exists.
     */
    where: LivroWhereUniqueInput
    /**
     * In case the Livro found by the `where` argument doesn't exist, create a new Livro with this data.
     */
    create: XOR<LivroCreateInput, LivroUncheckedCreateInput>
    /**
     * In case the Livro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LivroUpdateInput, LivroUncheckedUpdateInput>
  }

  /**
   * Livro delete
   */
  export type LivroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter which Livro to delete.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro deleteMany
   */
  export type LivroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livros to delete
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to delete.
     */
    limit?: number
  }

  /**
   * Livro.itens_emprestimo
   */
  export type Livro$itens_emprestimoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEmprestimo
     */
    select?: ItemEmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEmprestimo
     */
    omit?: ItemEmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEmprestimoInclude<ExtArgs> | null
    where?: ItemEmprestimoWhereInput
    orderBy?: ItemEmprestimoOrderByWithRelationInput | ItemEmprestimoOrderByWithRelationInput[]
    cursor?: ItemEmprestimoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemEmprestimoScalarFieldEnum | ItemEmprestimoScalarFieldEnum[]
  }

  /**
   * Livro without action
   */
  export type LivroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
  }


  /**
   * Model Emprestimo
   */

  export type AggregateEmprestimo = {
    _count: EmprestimoCountAggregateOutputType | null
    _avg: EmprestimoAvgAggregateOutputType | null
    _sum: EmprestimoSumAggregateOutputType | null
    _min: EmprestimoMinAggregateOutputType | null
    _max: EmprestimoMaxAggregateOutputType | null
  }

  export type EmprestimoAvgAggregateOutputType = {
    id: number | null
    id_leitor: number | null
  }

  export type EmprestimoSumAggregateOutputType = {
    id: number | null
    id_leitor: number | null
  }

  export type EmprestimoMinAggregateOutputType = {
    id: number | null
    data_emprestimo: Date | null
    prazo_de_devolucao: Date | null
    observacoes: string | null
    id_leitor: number | null
  }

  export type EmprestimoMaxAggregateOutputType = {
    id: number | null
    data_emprestimo: Date | null
    prazo_de_devolucao: Date | null
    observacoes: string | null
    id_leitor: number | null
  }

  export type EmprestimoCountAggregateOutputType = {
    id: number
    data_emprestimo: number
    prazo_de_devolucao: number
    observacoes: number
    id_leitor: number
    _all: number
  }


  export type EmprestimoAvgAggregateInputType = {
    id?: true
    id_leitor?: true
  }

  export type EmprestimoSumAggregateInputType = {
    id?: true
    id_leitor?: true
  }

  export type EmprestimoMinAggregateInputType = {
    id?: true
    data_emprestimo?: true
    prazo_de_devolucao?: true
    observacoes?: true
    id_leitor?: true
  }

  export type EmprestimoMaxAggregateInputType = {
    id?: true
    data_emprestimo?: true
    prazo_de_devolucao?: true
    observacoes?: true
    id_leitor?: true
  }

  export type EmprestimoCountAggregateInputType = {
    id?: true
    data_emprestimo?: true
    prazo_de_devolucao?: true
    observacoes?: true
    id_leitor?: true
    _all?: true
  }

  export type EmprestimoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emprestimo to aggregate.
     */
    where?: EmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestimos to fetch.
     */
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emprestimos
    **/
    _count?: true | EmprestimoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmprestimoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmprestimoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmprestimoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmprestimoMaxAggregateInputType
  }

  export type GetEmprestimoAggregateType<T extends EmprestimoAggregateArgs> = {
        [P in keyof T & keyof AggregateEmprestimo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmprestimo[P]>
      : GetScalarType<T[P], AggregateEmprestimo[P]>
  }




  export type EmprestimoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmprestimoWhereInput
    orderBy?: EmprestimoOrderByWithAggregationInput | EmprestimoOrderByWithAggregationInput[]
    by: EmprestimoScalarFieldEnum[] | EmprestimoScalarFieldEnum
    having?: EmprestimoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmprestimoCountAggregateInputType | true
    _avg?: EmprestimoAvgAggregateInputType
    _sum?: EmprestimoSumAggregateInputType
    _min?: EmprestimoMinAggregateInputType
    _max?: EmprestimoMaxAggregateInputType
  }

  export type EmprestimoGroupByOutputType = {
    id: number
    data_emprestimo: Date
    prazo_de_devolucao: Date
    observacoes: string | null
    id_leitor: number
    _count: EmprestimoCountAggregateOutputType | null
    _avg: EmprestimoAvgAggregateOutputType | null
    _sum: EmprestimoSumAggregateOutputType | null
    _min: EmprestimoMinAggregateOutputType | null
    _max: EmprestimoMaxAggregateOutputType | null
  }

  type GetEmprestimoGroupByPayload<T extends EmprestimoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmprestimoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmprestimoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmprestimoGroupByOutputType[P]>
            : GetScalarType<T[P], EmprestimoGroupByOutputType[P]>
        }
      >
    >


  export type EmprestimoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_emprestimo?: boolean
    prazo_de_devolucao?: boolean
    observacoes?: boolean
    id_leitor?: boolean
    leitor?: boolean | LeitorDefaultArgs<ExtArgs>
    itens_emprestimo?: boolean | Emprestimo$itens_emprestimoArgs<ExtArgs>
    _count?: boolean | EmprestimoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprestimo"]>

  export type EmprestimoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_emprestimo?: boolean
    prazo_de_devolucao?: boolean
    observacoes?: boolean
    id_leitor?: boolean
    leitor?: boolean | LeitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprestimo"]>

  export type EmprestimoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_emprestimo?: boolean
    prazo_de_devolucao?: boolean
    observacoes?: boolean
    id_leitor?: boolean
    leitor?: boolean | LeitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprestimo"]>

  export type EmprestimoSelectScalar = {
    id?: boolean
    data_emprestimo?: boolean
    prazo_de_devolucao?: boolean
    observacoes?: boolean
    id_leitor?: boolean
  }

  export type EmprestimoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data_emprestimo" | "prazo_de_devolucao" | "observacoes" | "id_leitor", ExtArgs["result"]["emprestimo"]>
  export type EmprestimoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leitor?: boolean | LeitorDefaultArgs<ExtArgs>
    itens_emprestimo?: boolean | Emprestimo$itens_emprestimoArgs<ExtArgs>
    _count?: boolean | EmprestimoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmprestimoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leitor?: boolean | LeitorDefaultArgs<ExtArgs>
  }
  export type EmprestimoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leitor?: boolean | LeitorDefaultArgs<ExtArgs>
  }

  export type $EmprestimoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Emprestimo"
    objects: {
      leitor: Prisma.$LeitorPayload<ExtArgs>
      itens_emprestimo: Prisma.$ItemEmprestimoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data_emprestimo: Date
      prazo_de_devolucao: Date
      observacoes: string | null
      id_leitor: number
    }, ExtArgs["result"]["emprestimo"]>
    composites: {}
  }

  type EmprestimoGetPayload<S extends boolean | null | undefined | EmprestimoDefaultArgs> = $Result.GetResult<Prisma.$EmprestimoPayload, S>

  type EmprestimoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmprestimoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmprestimoCountAggregateInputType | true
    }

  export interface EmprestimoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Emprestimo'], meta: { name: 'Emprestimo' } }
    /**
     * Find zero or one Emprestimo that matches the filter.
     * @param {EmprestimoFindUniqueArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmprestimoFindUniqueArgs>(args: SelectSubset<T, EmprestimoFindUniqueArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Emprestimo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmprestimoFindUniqueOrThrowArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmprestimoFindUniqueOrThrowArgs>(args: SelectSubset<T, EmprestimoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emprestimo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoFindFirstArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmprestimoFindFirstArgs>(args?: SelectSubset<T, EmprestimoFindFirstArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emprestimo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoFindFirstOrThrowArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmprestimoFindFirstOrThrowArgs>(args?: SelectSubset<T, EmprestimoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emprestimos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emprestimos
     * const emprestimos = await prisma.emprestimo.findMany()
     * 
     * // Get first 10 Emprestimos
     * const emprestimos = await prisma.emprestimo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emprestimoWithIdOnly = await prisma.emprestimo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmprestimoFindManyArgs>(args?: SelectSubset<T, EmprestimoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Emprestimo.
     * @param {EmprestimoCreateArgs} args - Arguments to create a Emprestimo.
     * @example
     * // Create one Emprestimo
     * const Emprestimo = await prisma.emprestimo.create({
     *   data: {
     *     // ... data to create a Emprestimo
     *   }
     * })
     * 
     */
    create<T extends EmprestimoCreateArgs>(args: SelectSubset<T, EmprestimoCreateArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emprestimos.
     * @param {EmprestimoCreateManyArgs} args - Arguments to create many Emprestimos.
     * @example
     * // Create many Emprestimos
     * const emprestimo = await prisma.emprestimo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmprestimoCreateManyArgs>(args?: SelectSubset<T, EmprestimoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Emprestimos and returns the data saved in the database.
     * @param {EmprestimoCreateManyAndReturnArgs} args - Arguments to create many Emprestimos.
     * @example
     * // Create many Emprestimos
     * const emprestimo = await prisma.emprestimo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Emprestimos and only return the `id`
     * const emprestimoWithIdOnly = await prisma.emprestimo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmprestimoCreateManyAndReturnArgs>(args?: SelectSubset<T, EmprestimoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Emprestimo.
     * @param {EmprestimoDeleteArgs} args - Arguments to delete one Emprestimo.
     * @example
     * // Delete one Emprestimo
     * const Emprestimo = await prisma.emprestimo.delete({
     *   where: {
     *     // ... filter to delete one Emprestimo
     *   }
     * })
     * 
     */
    delete<T extends EmprestimoDeleteArgs>(args: SelectSubset<T, EmprestimoDeleteArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Emprestimo.
     * @param {EmprestimoUpdateArgs} args - Arguments to update one Emprestimo.
     * @example
     * // Update one Emprestimo
     * const emprestimo = await prisma.emprestimo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmprestimoUpdateArgs>(args: SelectSubset<T, EmprestimoUpdateArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emprestimos.
     * @param {EmprestimoDeleteManyArgs} args - Arguments to filter Emprestimos to delete.
     * @example
     * // Delete a few Emprestimos
     * const { count } = await prisma.emprestimo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmprestimoDeleteManyArgs>(args?: SelectSubset<T, EmprestimoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emprestimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emprestimos
     * const emprestimo = await prisma.emprestimo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmprestimoUpdateManyArgs>(args: SelectSubset<T, EmprestimoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emprestimos and returns the data updated in the database.
     * @param {EmprestimoUpdateManyAndReturnArgs} args - Arguments to update many Emprestimos.
     * @example
     * // Update many Emprestimos
     * const emprestimo = await prisma.emprestimo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Emprestimos and only return the `id`
     * const emprestimoWithIdOnly = await prisma.emprestimo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmprestimoUpdateManyAndReturnArgs>(args: SelectSubset<T, EmprestimoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Emprestimo.
     * @param {EmprestimoUpsertArgs} args - Arguments to update or create a Emprestimo.
     * @example
     * // Update or create a Emprestimo
     * const emprestimo = await prisma.emprestimo.upsert({
     *   create: {
     *     // ... data to create a Emprestimo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emprestimo we want to update
     *   }
     * })
     */
    upsert<T extends EmprestimoUpsertArgs>(args: SelectSubset<T, EmprestimoUpsertArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emprestimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoCountArgs} args - Arguments to filter Emprestimos to count.
     * @example
     * // Count the number of Emprestimos
     * const count = await prisma.emprestimo.count({
     *   where: {
     *     // ... the filter for the Emprestimos we want to count
     *   }
     * })
    **/
    count<T extends EmprestimoCountArgs>(
      args?: Subset<T, EmprestimoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmprestimoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emprestimo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmprestimoAggregateArgs>(args: Subset<T, EmprestimoAggregateArgs>): Prisma.PrismaPromise<GetEmprestimoAggregateType<T>>

    /**
     * Group by Emprestimo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmprestimoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmprestimoGroupByArgs['orderBy'] }
        : { orderBy?: EmprestimoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmprestimoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmprestimoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Emprestimo model
   */
  readonly fields: EmprestimoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Emprestimo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmprestimoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leitor<T extends LeitorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeitorDefaultArgs<ExtArgs>>): Prisma__LeitorClient<$Result.GetResult<Prisma.$LeitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens_emprestimo<T extends Emprestimo$itens_emprestimoArgs<ExtArgs> = {}>(args?: Subset<T, Emprestimo$itens_emprestimoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemEmprestimoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Emprestimo model
   */
  interface EmprestimoFieldRefs {
    readonly id: FieldRef<"Emprestimo", 'Int'>
    readonly data_emprestimo: FieldRef<"Emprestimo", 'DateTime'>
    readonly prazo_de_devolucao: FieldRef<"Emprestimo", 'DateTime'>
    readonly observacoes: FieldRef<"Emprestimo", 'String'>
    readonly id_leitor: FieldRef<"Emprestimo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Emprestimo findUnique
   */
  export type EmprestimoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimo to fetch.
     */
    where: EmprestimoWhereUniqueInput
  }

  /**
   * Emprestimo findUniqueOrThrow
   */
  export type EmprestimoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimo to fetch.
     */
    where: EmprestimoWhereUniqueInput
  }

  /**
   * Emprestimo findFirst
   */
  export type EmprestimoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimo to fetch.
     */
    where?: EmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestimos to fetch.
     */
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emprestimos.
     */
    cursor?: EmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emprestimos.
     */
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * Emprestimo findFirstOrThrow
   */
  export type EmprestimoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimo to fetch.
     */
    where?: EmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestimos to fetch.
     */
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emprestimos.
     */
    cursor?: EmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emprestimos.
     */
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * Emprestimo findMany
   */
  export type EmprestimoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimos to fetch.
     */
    where?: EmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestimos to fetch.
     */
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emprestimos.
     */
    cursor?: EmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emprestimos.
     */
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * Emprestimo create
   */
  export type EmprestimoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * The data needed to create a Emprestimo.
     */
    data: XOR<EmprestimoCreateInput, EmprestimoUncheckedCreateInput>
  }

  /**
   * Emprestimo createMany
   */
  export type EmprestimoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emprestimos.
     */
    data: EmprestimoCreateManyInput | EmprestimoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Emprestimo createManyAndReturn
   */
  export type EmprestimoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * The data used to create many Emprestimos.
     */
    data: EmprestimoCreateManyInput | EmprestimoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Emprestimo update
   */
  export type EmprestimoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * The data needed to update a Emprestimo.
     */
    data: XOR<EmprestimoUpdateInput, EmprestimoUncheckedUpdateInput>
    /**
     * Choose, which Emprestimo to update.
     */
    where: EmprestimoWhereUniqueInput
  }

  /**
   * Emprestimo updateMany
   */
  export type EmprestimoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emprestimos.
     */
    data: XOR<EmprestimoUpdateManyMutationInput, EmprestimoUncheckedUpdateManyInput>
    /**
     * Filter which Emprestimos to update
     */
    where?: EmprestimoWhereInput
    /**
     * Limit how many Emprestimos to update.
     */
    limit?: number
  }

  /**
   * Emprestimo updateManyAndReturn
   */
  export type EmprestimoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * The data used to update Emprestimos.
     */
    data: XOR<EmprestimoUpdateManyMutationInput, EmprestimoUncheckedUpdateManyInput>
    /**
     * Filter which Emprestimos to update
     */
    where?: EmprestimoWhereInput
    /**
     * Limit how many Emprestimos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Emprestimo upsert
   */
  export type EmprestimoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * The filter to search for the Emprestimo to update in case it exists.
     */
    where: EmprestimoWhereUniqueInput
    /**
     * In case the Emprestimo found by the `where` argument doesn't exist, create a new Emprestimo with this data.
     */
    create: XOR<EmprestimoCreateInput, EmprestimoUncheckedCreateInput>
    /**
     * In case the Emprestimo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmprestimoUpdateInput, EmprestimoUncheckedUpdateInput>
  }

  /**
   * Emprestimo delete
   */
  export type EmprestimoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter which Emprestimo to delete.
     */
    where: EmprestimoWhereUniqueInput
  }

  /**
   * Emprestimo deleteMany
   */
  export type EmprestimoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emprestimos to delete
     */
    where?: EmprestimoWhereInput
    /**
     * Limit how many Emprestimos to delete.
     */
    limit?: number
  }

  /**
   * Emprestimo.itens_emprestimo
   */
  export type Emprestimo$itens_emprestimoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEmprestimo
     */
    select?: ItemEmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEmprestimo
     */
    omit?: ItemEmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEmprestimoInclude<ExtArgs> | null
    where?: ItemEmprestimoWhereInput
    orderBy?: ItemEmprestimoOrderByWithRelationInput | ItemEmprestimoOrderByWithRelationInput[]
    cursor?: ItemEmprestimoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemEmprestimoScalarFieldEnum | ItemEmprestimoScalarFieldEnum[]
  }

  /**
   * Emprestimo without action
   */
  export type EmprestimoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
  }


  /**
   * Model ItemEmprestimo
   */

  export type AggregateItemEmprestimo = {
    _count: ItemEmprestimoCountAggregateOutputType | null
    _avg: ItemEmprestimoAvgAggregateOutputType | null
    _sum: ItemEmprestimoSumAggregateOutputType | null
    _min: ItemEmprestimoMinAggregateOutputType | null
    _max: ItemEmprestimoMaxAggregateOutputType | null
  }

  export type ItemEmprestimoAvgAggregateOutputType = {
    id: number | null
    valor_multa: number | null
    id_emprestimo: number | null
    id_livro: number | null
  }

  export type ItemEmprestimoSumAggregateOutputType = {
    id: number | null
    valor_multa: number | null
    id_emprestimo: number | null
    id_livro: number | null
  }

  export type ItemEmprestimoMinAggregateOutputType = {
    id: number | null
    data_de_devolucao: Date | null
    valor_multa: number | null
    status: string | null
    id_emprestimo: number | null
    id_livro: number | null
  }

  export type ItemEmprestimoMaxAggregateOutputType = {
    id: number | null
    data_de_devolucao: Date | null
    valor_multa: number | null
    status: string | null
    id_emprestimo: number | null
    id_livro: number | null
  }

  export type ItemEmprestimoCountAggregateOutputType = {
    id: number
    data_de_devolucao: number
    valor_multa: number
    status: number
    id_emprestimo: number
    id_livro: number
    _all: number
  }


  export type ItemEmprestimoAvgAggregateInputType = {
    id?: true
    valor_multa?: true
    id_emprestimo?: true
    id_livro?: true
  }

  export type ItemEmprestimoSumAggregateInputType = {
    id?: true
    valor_multa?: true
    id_emprestimo?: true
    id_livro?: true
  }

  export type ItemEmprestimoMinAggregateInputType = {
    id?: true
    data_de_devolucao?: true
    valor_multa?: true
    status?: true
    id_emprestimo?: true
    id_livro?: true
  }

  export type ItemEmprestimoMaxAggregateInputType = {
    id?: true
    data_de_devolucao?: true
    valor_multa?: true
    status?: true
    id_emprestimo?: true
    id_livro?: true
  }

  export type ItemEmprestimoCountAggregateInputType = {
    id?: true
    data_de_devolucao?: true
    valor_multa?: true
    status?: true
    id_emprestimo?: true
    id_livro?: true
    _all?: true
  }

  export type ItemEmprestimoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemEmprestimo to aggregate.
     */
    where?: ItemEmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemEmprestimos to fetch.
     */
    orderBy?: ItemEmprestimoOrderByWithRelationInput | ItemEmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemEmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemEmprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemEmprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemEmprestimos
    **/
    _count?: true | ItemEmprestimoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemEmprestimoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemEmprestimoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemEmprestimoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemEmprestimoMaxAggregateInputType
  }

  export type GetItemEmprestimoAggregateType<T extends ItemEmprestimoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemEmprestimo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemEmprestimo[P]>
      : GetScalarType<T[P], AggregateItemEmprestimo[P]>
  }




  export type ItemEmprestimoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemEmprestimoWhereInput
    orderBy?: ItemEmprestimoOrderByWithAggregationInput | ItemEmprestimoOrderByWithAggregationInput[]
    by: ItemEmprestimoScalarFieldEnum[] | ItemEmprestimoScalarFieldEnum
    having?: ItemEmprestimoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemEmprestimoCountAggregateInputType | true
    _avg?: ItemEmprestimoAvgAggregateInputType
    _sum?: ItemEmprestimoSumAggregateInputType
    _min?: ItemEmprestimoMinAggregateInputType
    _max?: ItemEmprestimoMaxAggregateInputType
  }

  export type ItemEmprestimoGroupByOutputType = {
    id: number
    data_de_devolucao: Date
    valor_multa: number
    status: string
    id_emprestimo: number
    id_livro: number
    _count: ItemEmprestimoCountAggregateOutputType | null
    _avg: ItemEmprestimoAvgAggregateOutputType | null
    _sum: ItemEmprestimoSumAggregateOutputType | null
    _min: ItemEmprestimoMinAggregateOutputType | null
    _max: ItemEmprestimoMaxAggregateOutputType | null
  }

  type GetItemEmprestimoGroupByPayload<T extends ItemEmprestimoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemEmprestimoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemEmprestimoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemEmprestimoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemEmprestimoGroupByOutputType[P]>
        }
      >
    >


  export type ItemEmprestimoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_de_devolucao?: boolean
    valor_multa?: boolean
    status?: boolean
    id_emprestimo?: boolean
    id_livro?: boolean
    emprestimo?: boolean | EmprestimoDefaultArgs<ExtArgs>
    livro?: boolean | LivroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemEmprestimo"]>

  export type ItemEmprestimoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_de_devolucao?: boolean
    valor_multa?: boolean
    status?: boolean
    id_emprestimo?: boolean
    id_livro?: boolean
    emprestimo?: boolean | EmprestimoDefaultArgs<ExtArgs>
    livro?: boolean | LivroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemEmprestimo"]>

  export type ItemEmprestimoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_de_devolucao?: boolean
    valor_multa?: boolean
    status?: boolean
    id_emprestimo?: boolean
    id_livro?: boolean
    emprestimo?: boolean | EmprestimoDefaultArgs<ExtArgs>
    livro?: boolean | LivroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemEmprestimo"]>

  export type ItemEmprestimoSelectScalar = {
    id?: boolean
    data_de_devolucao?: boolean
    valor_multa?: boolean
    status?: boolean
    id_emprestimo?: boolean
    id_livro?: boolean
  }

  export type ItemEmprestimoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data_de_devolucao" | "valor_multa" | "status" | "id_emprestimo" | "id_livro", ExtArgs["result"]["itemEmprestimo"]>
  export type ItemEmprestimoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimo?: boolean | EmprestimoDefaultArgs<ExtArgs>
    livro?: boolean | LivroDefaultArgs<ExtArgs>
  }
  export type ItemEmprestimoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimo?: boolean | EmprestimoDefaultArgs<ExtArgs>
    livro?: boolean | LivroDefaultArgs<ExtArgs>
  }
  export type ItemEmprestimoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimo?: boolean | EmprestimoDefaultArgs<ExtArgs>
    livro?: boolean | LivroDefaultArgs<ExtArgs>
  }

  export type $ItemEmprestimoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemEmprestimo"
    objects: {
      emprestimo: Prisma.$EmprestimoPayload<ExtArgs>
      livro: Prisma.$LivroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data_de_devolucao: Date
      valor_multa: number
      status: string
      id_emprestimo: number
      id_livro: number
    }, ExtArgs["result"]["itemEmprestimo"]>
    composites: {}
  }

  type ItemEmprestimoGetPayload<S extends boolean | null | undefined | ItemEmprestimoDefaultArgs> = $Result.GetResult<Prisma.$ItemEmprestimoPayload, S>

  type ItemEmprestimoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemEmprestimoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemEmprestimoCountAggregateInputType | true
    }

  export interface ItemEmprestimoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemEmprestimo'], meta: { name: 'ItemEmprestimo' } }
    /**
     * Find zero or one ItemEmprestimo that matches the filter.
     * @param {ItemEmprestimoFindUniqueArgs} args - Arguments to find a ItemEmprestimo
     * @example
     * // Get one ItemEmprestimo
     * const itemEmprestimo = await prisma.itemEmprestimo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemEmprestimoFindUniqueArgs>(args: SelectSubset<T, ItemEmprestimoFindUniqueArgs<ExtArgs>>): Prisma__ItemEmprestimoClient<$Result.GetResult<Prisma.$ItemEmprestimoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemEmprestimo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemEmprestimoFindUniqueOrThrowArgs} args - Arguments to find a ItemEmprestimo
     * @example
     * // Get one ItemEmprestimo
     * const itemEmprestimo = await prisma.itemEmprestimo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemEmprestimoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemEmprestimoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemEmprestimoClient<$Result.GetResult<Prisma.$ItemEmprestimoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemEmprestimo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemEmprestimoFindFirstArgs} args - Arguments to find a ItemEmprestimo
     * @example
     * // Get one ItemEmprestimo
     * const itemEmprestimo = await prisma.itemEmprestimo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemEmprestimoFindFirstArgs>(args?: SelectSubset<T, ItemEmprestimoFindFirstArgs<ExtArgs>>): Prisma__ItemEmprestimoClient<$Result.GetResult<Prisma.$ItemEmprestimoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemEmprestimo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemEmprestimoFindFirstOrThrowArgs} args - Arguments to find a ItemEmprestimo
     * @example
     * // Get one ItemEmprestimo
     * const itemEmprestimo = await prisma.itemEmprestimo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemEmprestimoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemEmprestimoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemEmprestimoClient<$Result.GetResult<Prisma.$ItemEmprestimoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemEmprestimos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemEmprestimoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemEmprestimos
     * const itemEmprestimos = await prisma.itemEmprestimo.findMany()
     * 
     * // Get first 10 ItemEmprestimos
     * const itemEmprestimos = await prisma.itemEmprestimo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemEmprestimoWithIdOnly = await prisma.itemEmprestimo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemEmprestimoFindManyArgs>(args?: SelectSubset<T, ItemEmprestimoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemEmprestimoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemEmprestimo.
     * @param {ItemEmprestimoCreateArgs} args - Arguments to create a ItemEmprestimo.
     * @example
     * // Create one ItemEmprestimo
     * const ItemEmprestimo = await prisma.itemEmprestimo.create({
     *   data: {
     *     // ... data to create a ItemEmprestimo
     *   }
     * })
     * 
     */
    create<T extends ItemEmprestimoCreateArgs>(args: SelectSubset<T, ItemEmprestimoCreateArgs<ExtArgs>>): Prisma__ItemEmprestimoClient<$Result.GetResult<Prisma.$ItemEmprestimoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemEmprestimos.
     * @param {ItemEmprestimoCreateManyArgs} args - Arguments to create many ItemEmprestimos.
     * @example
     * // Create many ItemEmprestimos
     * const itemEmprestimo = await prisma.itemEmprestimo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemEmprestimoCreateManyArgs>(args?: SelectSubset<T, ItemEmprestimoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemEmprestimos and returns the data saved in the database.
     * @param {ItemEmprestimoCreateManyAndReturnArgs} args - Arguments to create many ItemEmprestimos.
     * @example
     * // Create many ItemEmprestimos
     * const itemEmprestimo = await prisma.itemEmprestimo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemEmprestimos and only return the `id`
     * const itemEmprestimoWithIdOnly = await prisma.itemEmprestimo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemEmprestimoCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemEmprestimoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemEmprestimoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemEmprestimo.
     * @param {ItemEmprestimoDeleteArgs} args - Arguments to delete one ItemEmprestimo.
     * @example
     * // Delete one ItemEmprestimo
     * const ItemEmprestimo = await prisma.itemEmprestimo.delete({
     *   where: {
     *     // ... filter to delete one ItemEmprestimo
     *   }
     * })
     * 
     */
    delete<T extends ItemEmprestimoDeleteArgs>(args: SelectSubset<T, ItemEmprestimoDeleteArgs<ExtArgs>>): Prisma__ItemEmprestimoClient<$Result.GetResult<Prisma.$ItemEmprestimoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemEmprestimo.
     * @param {ItemEmprestimoUpdateArgs} args - Arguments to update one ItemEmprestimo.
     * @example
     * // Update one ItemEmprestimo
     * const itemEmprestimo = await prisma.itemEmprestimo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemEmprestimoUpdateArgs>(args: SelectSubset<T, ItemEmprestimoUpdateArgs<ExtArgs>>): Prisma__ItemEmprestimoClient<$Result.GetResult<Prisma.$ItemEmprestimoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemEmprestimos.
     * @param {ItemEmprestimoDeleteManyArgs} args - Arguments to filter ItemEmprestimos to delete.
     * @example
     * // Delete a few ItemEmprestimos
     * const { count } = await prisma.itemEmprestimo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemEmprestimoDeleteManyArgs>(args?: SelectSubset<T, ItemEmprestimoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemEmprestimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemEmprestimoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemEmprestimos
     * const itemEmprestimo = await prisma.itemEmprestimo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemEmprestimoUpdateManyArgs>(args: SelectSubset<T, ItemEmprestimoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemEmprestimos and returns the data updated in the database.
     * @param {ItemEmprestimoUpdateManyAndReturnArgs} args - Arguments to update many ItemEmprestimos.
     * @example
     * // Update many ItemEmprestimos
     * const itemEmprestimo = await prisma.itemEmprestimo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemEmprestimos and only return the `id`
     * const itemEmprestimoWithIdOnly = await prisma.itemEmprestimo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemEmprestimoUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemEmprestimoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemEmprestimoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemEmprestimo.
     * @param {ItemEmprestimoUpsertArgs} args - Arguments to update or create a ItemEmprestimo.
     * @example
     * // Update or create a ItemEmprestimo
     * const itemEmprestimo = await prisma.itemEmprestimo.upsert({
     *   create: {
     *     // ... data to create a ItemEmprestimo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemEmprestimo we want to update
     *   }
     * })
     */
    upsert<T extends ItemEmprestimoUpsertArgs>(args: SelectSubset<T, ItemEmprestimoUpsertArgs<ExtArgs>>): Prisma__ItemEmprestimoClient<$Result.GetResult<Prisma.$ItemEmprestimoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemEmprestimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemEmprestimoCountArgs} args - Arguments to filter ItemEmprestimos to count.
     * @example
     * // Count the number of ItemEmprestimos
     * const count = await prisma.itemEmprestimo.count({
     *   where: {
     *     // ... the filter for the ItemEmprestimos we want to count
     *   }
     * })
    **/
    count<T extends ItemEmprestimoCountArgs>(
      args?: Subset<T, ItemEmprestimoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemEmprestimoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemEmprestimo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemEmprestimoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemEmprestimoAggregateArgs>(args: Subset<T, ItemEmprestimoAggregateArgs>): Prisma.PrismaPromise<GetItemEmprestimoAggregateType<T>>

    /**
     * Group by ItemEmprestimo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemEmprestimoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemEmprestimoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemEmprestimoGroupByArgs['orderBy'] }
        : { orderBy?: ItemEmprestimoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemEmprestimoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemEmprestimoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemEmprestimo model
   */
  readonly fields: ItemEmprestimoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemEmprestimo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemEmprestimoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emprestimo<T extends EmprestimoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmprestimoDefaultArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    livro<T extends LivroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LivroDefaultArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemEmprestimo model
   */
  interface ItemEmprestimoFieldRefs {
    readonly id: FieldRef<"ItemEmprestimo", 'Int'>
    readonly data_de_devolucao: FieldRef<"ItemEmprestimo", 'DateTime'>
    readonly valor_multa: FieldRef<"ItemEmprestimo", 'Int'>
    readonly status: FieldRef<"ItemEmprestimo", 'String'>
    readonly id_emprestimo: FieldRef<"ItemEmprestimo", 'Int'>
    readonly id_livro: FieldRef<"ItemEmprestimo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ItemEmprestimo findUnique
   */
  export type ItemEmprestimoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEmprestimo
     */
    select?: ItemEmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEmprestimo
     */
    omit?: ItemEmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which ItemEmprestimo to fetch.
     */
    where: ItemEmprestimoWhereUniqueInput
  }

  /**
   * ItemEmprestimo findUniqueOrThrow
   */
  export type ItemEmprestimoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEmprestimo
     */
    select?: ItemEmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEmprestimo
     */
    omit?: ItemEmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which ItemEmprestimo to fetch.
     */
    where: ItemEmprestimoWhereUniqueInput
  }

  /**
   * ItemEmprestimo findFirst
   */
  export type ItemEmprestimoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEmprestimo
     */
    select?: ItemEmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEmprestimo
     */
    omit?: ItemEmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which ItemEmprestimo to fetch.
     */
    where?: ItemEmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemEmprestimos to fetch.
     */
    orderBy?: ItemEmprestimoOrderByWithRelationInput | ItemEmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemEmprestimos.
     */
    cursor?: ItemEmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemEmprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemEmprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemEmprestimos.
     */
    distinct?: ItemEmprestimoScalarFieldEnum | ItemEmprestimoScalarFieldEnum[]
  }

  /**
   * ItemEmprestimo findFirstOrThrow
   */
  export type ItemEmprestimoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEmprestimo
     */
    select?: ItemEmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEmprestimo
     */
    omit?: ItemEmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which ItemEmprestimo to fetch.
     */
    where?: ItemEmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemEmprestimos to fetch.
     */
    orderBy?: ItemEmprestimoOrderByWithRelationInput | ItemEmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemEmprestimos.
     */
    cursor?: ItemEmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemEmprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemEmprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemEmprestimos.
     */
    distinct?: ItemEmprestimoScalarFieldEnum | ItemEmprestimoScalarFieldEnum[]
  }

  /**
   * ItemEmprestimo findMany
   */
  export type ItemEmprestimoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEmprestimo
     */
    select?: ItemEmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEmprestimo
     */
    omit?: ItemEmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which ItemEmprestimos to fetch.
     */
    where?: ItemEmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemEmprestimos to fetch.
     */
    orderBy?: ItemEmprestimoOrderByWithRelationInput | ItemEmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemEmprestimos.
     */
    cursor?: ItemEmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemEmprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemEmprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemEmprestimos.
     */
    distinct?: ItemEmprestimoScalarFieldEnum | ItemEmprestimoScalarFieldEnum[]
  }

  /**
   * ItemEmprestimo create
   */
  export type ItemEmprestimoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEmprestimo
     */
    select?: ItemEmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEmprestimo
     */
    omit?: ItemEmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEmprestimoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemEmprestimo.
     */
    data: XOR<ItemEmprestimoCreateInput, ItemEmprestimoUncheckedCreateInput>
  }

  /**
   * ItemEmprestimo createMany
   */
  export type ItemEmprestimoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemEmprestimos.
     */
    data: ItemEmprestimoCreateManyInput | ItemEmprestimoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemEmprestimo createManyAndReturn
   */
  export type ItemEmprestimoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEmprestimo
     */
    select?: ItemEmprestimoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEmprestimo
     */
    omit?: ItemEmprestimoOmit<ExtArgs> | null
    /**
     * The data used to create many ItemEmprestimos.
     */
    data: ItemEmprestimoCreateManyInput | ItemEmprestimoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEmprestimoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemEmprestimo update
   */
  export type ItemEmprestimoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEmprestimo
     */
    select?: ItemEmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEmprestimo
     */
    omit?: ItemEmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEmprestimoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemEmprestimo.
     */
    data: XOR<ItemEmprestimoUpdateInput, ItemEmprestimoUncheckedUpdateInput>
    /**
     * Choose, which ItemEmprestimo to update.
     */
    where: ItemEmprestimoWhereUniqueInput
  }

  /**
   * ItemEmprestimo updateMany
   */
  export type ItemEmprestimoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemEmprestimos.
     */
    data: XOR<ItemEmprestimoUpdateManyMutationInput, ItemEmprestimoUncheckedUpdateManyInput>
    /**
     * Filter which ItemEmprestimos to update
     */
    where?: ItemEmprestimoWhereInput
    /**
     * Limit how many ItemEmprestimos to update.
     */
    limit?: number
  }

  /**
   * ItemEmprestimo updateManyAndReturn
   */
  export type ItemEmprestimoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEmprestimo
     */
    select?: ItemEmprestimoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEmprestimo
     */
    omit?: ItemEmprestimoOmit<ExtArgs> | null
    /**
     * The data used to update ItemEmprestimos.
     */
    data: XOR<ItemEmprestimoUpdateManyMutationInput, ItemEmprestimoUncheckedUpdateManyInput>
    /**
     * Filter which ItemEmprestimos to update
     */
    where?: ItemEmprestimoWhereInput
    /**
     * Limit how many ItemEmprestimos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEmprestimoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemEmprestimo upsert
   */
  export type ItemEmprestimoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEmprestimo
     */
    select?: ItemEmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEmprestimo
     */
    omit?: ItemEmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEmprestimoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemEmprestimo to update in case it exists.
     */
    where: ItemEmprestimoWhereUniqueInput
    /**
     * In case the ItemEmprestimo found by the `where` argument doesn't exist, create a new ItemEmprestimo with this data.
     */
    create: XOR<ItemEmprestimoCreateInput, ItemEmprestimoUncheckedCreateInput>
    /**
     * In case the ItemEmprestimo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemEmprestimoUpdateInput, ItemEmprestimoUncheckedUpdateInput>
  }

  /**
   * ItemEmprestimo delete
   */
  export type ItemEmprestimoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEmprestimo
     */
    select?: ItemEmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEmprestimo
     */
    omit?: ItemEmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEmprestimoInclude<ExtArgs> | null
    /**
     * Filter which ItemEmprestimo to delete.
     */
    where: ItemEmprestimoWhereUniqueInput
  }

  /**
   * ItemEmprestimo deleteMany
   */
  export type ItemEmprestimoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemEmprestimos to delete
     */
    where?: ItemEmprestimoWhereInput
    /**
     * Limit how many ItemEmprestimos to delete.
     */
    limit?: number
  }

  /**
   * ItemEmprestimo without action
   */
  export type ItemEmprestimoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEmprestimo
     */
    select?: ItemEmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEmprestimo
     */
    omit?: ItemEmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEmprestimoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LeitorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cpf: 'cpf',
    data_de_nascimento: 'data_de_nascimento',
    endereco: 'endereco',
    observacao: 'observacao',
    id_user: 'id_user'
  };

  export type LeitorScalarFieldEnum = (typeof LeitorScalarFieldEnum)[keyof typeof LeitorScalarFieldEnum]


  export const AutorScalarFieldEnum: {
    id: 'id',
    nome_autor: 'nome_autor',
    origem: 'origem',
    biografia: 'biografia',
    data_de_nascimento: 'data_de_nascimento',
    nome_artistico: 'nome_artistico',
    id_user: 'id_user'
  };

  export type AutorScalarFieldEnum = (typeof AutorScalarFieldEnum)[keyof typeof AutorScalarFieldEnum]


  export const LivroScalarFieldEnum: {
    id: 'id',
    nome_livro: 'nome_livro',
    editora: 'editora',
    versao: 'versao',
    ano: 'ano',
    genero: 'genero',
    idioma: 'idioma',
    qtde_total: 'qtde_total',
    qtde_disponivel: 'qtde_disponivel',
    id_autor: 'id_autor'
  };

  export type LivroScalarFieldEnum = (typeof LivroScalarFieldEnum)[keyof typeof LivroScalarFieldEnum]


  export const EmprestimoScalarFieldEnum: {
    id: 'id',
    data_emprestimo: 'data_emprestimo',
    prazo_de_devolucao: 'prazo_de_devolucao',
    observacoes: 'observacoes',
    id_leitor: 'id_leitor'
  };

  export type EmprestimoScalarFieldEnum = (typeof EmprestimoScalarFieldEnum)[keyof typeof EmprestimoScalarFieldEnum]


  export const ItemEmprestimoScalarFieldEnum: {
    id: 'id',
    data_de_devolucao: 'data_de_devolucao',
    valor_multa: 'valor_multa',
    status: 'status',
    id_emprestimo: 'id_emprestimo',
    id_livro: 'id_livro'
  };

  export type ItemEmprestimoScalarFieldEnum = (typeof ItemEmprestimoScalarFieldEnum)[keyof typeof ItemEmprestimoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    leitor?: XOR<LeitorNullableScalarRelationFilter, LeitorWhereInput> | null
    autor?: XOR<AutorNullableScalarRelationFilter, AutorWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    leitor?: LeitorOrderByWithRelationInput
    autor?: AutorOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    leitor?: XOR<LeitorNullableScalarRelationFilter, LeitorWhereInput> | null
    autor?: XOR<AutorNullableScalarRelationFilter, AutorWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type LeitorWhereInput = {
    AND?: LeitorWhereInput | LeitorWhereInput[]
    OR?: LeitorWhereInput[]
    NOT?: LeitorWhereInput | LeitorWhereInput[]
    id?: IntFilter<"Leitor"> | number
    nome?: StringFilter<"Leitor"> | string
    cpf?: StringFilter<"Leitor"> | string
    data_de_nascimento?: DateTimeFilter<"Leitor"> | Date | string
    endereco?: StringFilter<"Leitor"> | string
    observacao?: StringNullableFilter<"Leitor"> | string | null
    id_user?: IntFilter<"Leitor"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    emprestimos?: EmprestimoListRelationFilter
  }

  export type LeitorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    data_de_nascimento?: SortOrder
    endereco?: SortOrder
    observacao?: SortOrderInput | SortOrder
    id_user?: SortOrder
    user?: UserOrderByWithRelationInput
    emprestimos?: EmprestimoOrderByRelationAggregateInput
  }

  export type LeitorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf?: string
    id_user?: number
    AND?: LeitorWhereInput | LeitorWhereInput[]
    OR?: LeitorWhereInput[]
    NOT?: LeitorWhereInput | LeitorWhereInput[]
    nome?: StringFilter<"Leitor"> | string
    data_de_nascimento?: DateTimeFilter<"Leitor"> | Date | string
    endereco?: StringFilter<"Leitor"> | string
    observacao?: StringNullableFilter<"Leitor"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    emprestimos?: EmprestimoListRelationFilter
  }, "id" | "cpf" | "id_user">

  export type LeitorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    data_de_nascimento?: SortOrder
    endereco?: SortOrder
    observacao?: SortOrderInput | SortOrder
    id_user?: SortOrder
    _count?: LeitorCountOrderByAggregateInput
    _avg?: LeitorAvgOrderByAggregateInput
    _max?: LeitorMaxOrderByAggregateInput
    _min?: LeitorMinOrderByAggregateInput
    _sum?: LeitorSumOrderByAggregateInput
  }

  export type LeitorScalarWhereWithAggregatesInput = {
    AND?: LeitorScalarWhereWithAggregatesInput | LeitorScalarWhereWithAggregatesInput[]
    OR?: LeitorScalarWhereWithAggregatesInput[]
    NOT?: LeitorScalarWhereWithAggregatesInput | LeitorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Leitor"> | number
    nome?: StringWithAggregatesFilter<"Leitor"> | string
    cpf?: StringWithAggregatesFilter<"Leitor"> | string
    data_de_nascimento?: DateTimeWithAggregatesFilter<"Leitor"> | Date | string
    endereco?: StringWithAggregatesFilter<"Leitor"> | string
    observacao?: StringNullableWithAggregatesFilter<"Leitor"> | string | null
    id_user?: IntWithAggregatesFilter<"Leitor"> | number
  }

  export type AutorWhereInput = {
    AND?: AutorWhereInput | AutorWhereInput[]
    OR?: AutorWhereInput[]
    NOT?: AutorWhereInput | AutorWhereInput[]
    id?: IntFilter<"Autor"> | number
    nome_autor?: StringFilter<"Autor"> | string
    origem?: StringFilter<"Autor"> | string
    biografia?: StringFilter<"Autor"> | string
    data_de_nascimento?: DateTimeFilter<"Autor"> | Date | string
    nome_artistico?: StringFilter<"Autor"> | string
    id_user?: IntFilter<"Autor"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    livros?: LivroListRelationFilter
  }

  export type AutorOrderByWithRelationInput = {
    id?: SortOrder
    nome_autor?: SortOrder
    origem?: SortOrder
    biografia?: SortOrder
    data_de_nascimento?: SortOrder
    nome_artistico?: SortOrder
    id_user?: SortOrder
    user?: UserOrderByWithRelationInput
    livros?: LivroOrderByRelationAggregateInput
  }

  export type AutorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_user?: number
    AND?: AutorWhereInput | AutorWhereInput[]
    OR?: AutorWhereInput[]
    NOT?: AutorWhereInput | AutorWhereInput[]
    nome_autor?: StringFilter<"Autor"> | string
    origem?: StringFilter<"Autor"> | string
    biografia?: StringFilter<"Autor"> | string
    data_de_nascimento?: DateTimeFilter<"Autor"> | Date | string
    nome_artistico?: StringFilter<"Autor"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    livros?: LivroListRelationFilter
  }, "id" | "id_user">

  export type AutorOrderByWithAggregationInput = {
    id?: SortOrder
    nome_autor?: SortOrder
    origem?: SortOrder
    biografia?: SortOrder
    data_de_nascimento?: SortOrder
    nome_artistico?: SortOrder
    id_user?: SortOrder
    _count?: AutorCountOrderByAggregateInput
    _avg?: AutorAvgOrderByAggregateInput
    _max?: AutorMaxOrderByAggregateInput
    _min?: AutorMinOrderByAggregateInput
    _sum?: AutorSumOrderByAggregateInput
  }

  export type AutorScalarWhereWithAggregatesInput = {
    AND?: AutorScalarWhereWithAggregatesInput | AutorScalarWhereWithAggregatesInput[]
    OR?: AutorScalarWhereWithAggregatesInput[]
    NOT?: AutorScalarWhereWithAggregatesInput | AutorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Autor"> | number
    nome_autor?: StringWithAggregatesFilter<"Autor"> | string
    origem?: StringWithAggregatesFilter<"Autor"> | string
    biografia?: StringWithAggregatesFilter<"Autor"> | string
    data_de_nascimento?: DateTimeWithAggregatesFilter<"Autor"> | Date | string
    nome_artistico?: StringWithAggregatesFilter<"Autor"> | string
    id_user?: IntWithAggregatesFilter<"Autor"> | number
  }

  export type LivroWhereInput = {
    AND?: LivroWhereInput | LivroWhereInput[]
    OR?: LivroWhereInput[]
    NOT?: LivroWhereInput | LivroWhereInput[]
    id?: IntFilter<"Livro"> | number
    nome_livro?: StringFilter<"Livro"> | string
    editora?: StringFilter<"Livro"> | string
    versao?: IntFilter<"Livro"> | number
    ano?: IntFilter<"Livro"> | number
    genero?: StringFilter<"Livro"> | string
    idioma?: StringFilter<"Livro"> | string
    qtde_total?: IntFilter<"Livro"> | number
    qtde_disponivel?: IntFilter<"Livro"> | number
    id_autor?: IntFilter<"Livro"> | number
    autor?: XOR<AutorScalarRelationFilter, AutorWhereInput>
    itens_emprestimo?: ItemEmprestimoListRelationFilter
  }

  export type LivroOrderByWithRelationInput = {
    id?: SortOrder
    nome_livro?: SortOrder
    editora?: SortOrder
    versao?: SortOrder
    ano?: SortOrder
    genero?: SortOrder
    idioma?: SortOrder
    qtde_total?: SortOrder
    qtde_disponivel?: SortOrder
    id_autor?: SortOrder
    autor?: AutorOrderByWithRelationInput
    itens_emprestimo?: ItemEmprestimoOrderByRelationAggregateInput
  }

  export type LivroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LivroWhereInput | LivroWhereInput[]
    OR?: LivroWhereInput[]
    NOT?: LivroWhereInput | LivroWhereInput[]
    nome_livro?: StringFilter<"Livro"> | string
    editora?: StringFilter<"Livro"> | string
    versao?: IntFilter<"Livro"> | number
    ano?: IntFilter<"Livro"> | number
    genero?: StringFilter<"Livro"> | string
    idioma?: StringFilter<"Livro"> | string
    qtde_total?: IntFilter<"Livro"> | number
    qtde_disponivel?: IntFilter<"Livro"> | number
    id_autor?: IntFilter<"Livro"> | number
    autor?: XOR<AutorScalarRelationFilter, AutorWhereInput>
    itens_emprestimo?: ItemEmprestimoListRelationFilter
  }, "id">

  export type LivroOrderByWithAggregationInput = {
    id?: SortOrder
    nome_livro?: SortOrder
    editora?: SortOrder
    versao?: SortOrder
    ano?: SortOrder
    genero?: SortOrder
    idioma?: SortOrder
    qtde_total?: SortOrder
    qtde_disponivel?: SortOrder
    id_autor?: SortOrder
    _count?: LivroCountOrderByAggregateInput
    _avg?: LivroAvgOrderByAggregateInput
    _max?: LivroMaxOrderByAggregateInput
    _min?: LivroMinOrderByAggregateInput
    _sum?: LivroSumOrderByAggregateInput
  }

  export type LivroScalarWhereWithAggregatesInput = {
    AND?: LivroScalarWhereWithAggregatesInput | LivroScalarWhereWithAggregatesInput[]
    OR?: LivroScalarWhereWithAggregatesInput[]
    NOT?: LivroScalarWhereWithAggregatesInput | LivroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Livro"> | number
    nome_livro?: StringWithAggregatesFilter<"Livro"> | string
    editora?: StringWithAggregatesFilter<"Livro"> | string
    versao?: IntWithAggregatesFilter<"Livro"> | number
    ano?: IntWithAggregatesFilter<"Livro"> | number
    genero?: StringWithAggregatesFilter<"Livro"> | string
    idioma?: StringWithAggregatesFilter<"Livro"> | string
    qtde_total?: IntWithAggregatesFilter<"Livro"> | number
    qtde_disponivel?: IntWithAggregatesFilter<"Livro"> | number
    id_autor?: IntWithAggregatesFilter<"Livro"> | number
  }

  export type EmprestimoWhereInput = {
    AND?: EmprestimoWhereInput | EmprestimoWhereInput[]
    OR?: EmprestimoWhereInput[]
    NOT?: EmprestimoWhereInput | EmprestimoWhereInput[]
    id?: IntFilter<"Emprestimo"> | number
    data_emprestimo?: DateTimeFilter<"Emprestimo"> | Date | string
    prazo_de_devolucao?: DateTimeFilter<"Emprestimo"> | Date | string
    observacoes?: StringNullableFilter<"Emprestimo"> | string | null
    id_leitor?: IntFilter<"Emprestimo"> | number
    leitor?: XOR<LeitorScalarRelationFilter, LeitorWhereInput>
    itens_emprestimo?: ItemEmprestimoListRelationFilter
  }

  export type EmprestimoOrderByWithRelationInput = {
    id?: SortOrder
    data_emprestimo?: SortOrder
    prazo_de_devolucao?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    id_leitor?: SortOrder
    leitor?: LeitorOrderByWithRelationInput
    itens_emprestimo?: ItemEmprestimoOrderByRelationAggregateInput
  }

  export type EmprestimoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmprestimoWhereInput | EmprestimoWhereInput[]
    OR?: EmprestimoWhereInput[]
    NOT?: EmprestimoWhereInput | EmprestimoWhereInput[]
    data_emprestimo?: DateTimeFilter<"Emprestimo"> | Date | string
    prazo_de_devolucao?: DateTimeFilter<"Emprestimo"> | Date | string
    observacoes?: StringNullableFilter<"Emprestimo"> | string | null
    id_leitor?: IntFilter<"Emprestimo"> | number
    leitor?: XOR<LeitorScalarRelationFilter, LeitorWhereInput>
    itens_emprestimo?: ItemEmprestimoListRelationFilter
  }, "id">

  export type EmprestimoOrderByWithAggregationInput = {
    id?: SortOrder
    data_emprestimo?: SortOrder
    prazo_de_devolucao?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    id_leitor?: SortOrder
    _count?: EmprestimoCountOrderByAggregateInput
    _avg?: EmprestimoAvgOrderByAggregateInput
    _max?: EmprestimoMaxOrderByAggregateInput
    _min?: EmprestimoMinOrderByAggregateInput
    _sum?: EmprestimoSumOrderByAggregateInput
  }

  export type EmprestimoScalarWhereWithAggregatesInput = {
    AND?: EmprestimoScalarWhereWithAggregatesInput | EmprestimoScalarWhereWithAggregatesInput[]
    OR?: EmprestimoScalarWhereWithAggregatesInput[]
    NOT?: EmprestimoScalarWhereWithAggregatesInput | EmprestimoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Emprestimo"> | number
    data_emprestimo?: DateTimeWithAggregatesFilter<"Emprestimo"> | Date | string
    prazo_de_devolucao?: DateTimeWithAggregatesFilter<"Emprestimo"> | Date | string
    observacoes?: StringNullableWithAggregatesFilter<"Emprestimo"> | string | null
    id_leitor?: IntWithAggregatesFilter<"Emprestimo"> | number
  }

  export type ItemEmprestimoWhereInput = {
    AND?: ItemEmprestimoWhereInput | ItemEmprestimoWhereInput[]
    OR?: ItemEmprestimoWhereInput[]
    NOT?: ItemEmprestimoWhereInput | ItemEmprestimoWhereInput[]
    id?: IntFilter<"ItemEmprestimo"> | number
    data_de_devolucao?: DateTimeFilter<"ItemEmprestimo"> | Date | string
    valor_multa?: IntFilter<"ItemEmprestimo"> | number
    status?: StringFilter<"ItemEmprestimo"> | string
    id_emprestimo?: IntFilter<"ItemEmprestimo"> | number
    id_livro?: IntFilter<"ItemEmprestimo"> | number
    emprestimo?: XOR<EmprestimoScalarRelationFilter, EmprestimoWhereInput>
    livro?: XOR<LivroScalarRelationFilter, LivroWhereInput>
  }

  export type ItemEmprestimoOrderByWithRelationInput = {
    id?: SortOrder
    data_de_devolucao?: SortOrder
    valor_multa?: SortOrder
    status?: SortOrder
    id_emprestimo?: SortOrder
    id_livro?: SortOrder
    emprestimo?: EmprestimoOrderByWithRelationInput
    livro?: LivroOrderByWithRelationInput
  }

  export type ItemEmprestimoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemEmprestimoWhereInput | ItemEmprestimoWhereInput[]
    OR?: ItemEmprestimoWhereInput[]
    NOT?: ItemEmprestimoWhereInput | ItemEmprestimoWhereInput[]
    data_de_devolucao?: DateTimeFilter<"ItemEmprestimo"> | Date | string
    valor_multa?: IntFilter<"ItemEmprestimo"> | number
    status?: StringFilter<"ItemEmprestimo"> | string
    id_emprestimo?: IntFilter<"ItemEmprestimo"> | number
    id_livro?: IntFilter<"ItemEmprestimo"> | number
    emprestimo?: XOR<EmprestimoScalarRelationFilter, EmprestimoWhereInput>
    livro?: XOR<LivroScalarRelationFilter, LivroWhereInput>
  }, "id">

  export type ItemEmprestimoOrderByWithAggregationInput = {
    id?: SortOrder
    data_de_devolucao?: SortOrder
    valor_multa?: SortOrder
    status?: SortOrder
    id_emprestimo?: SortOrder
    id_livro?: SortOrder
    _count?: ItemEmprestimoCountOrderByAggregateInput
    _avg?: ItemEmprestimoAvgOrderByAggregateInput
    _max?: ItemEmprestimoMaxOrderByAggregateInput
    _min?: ItemEmprestimoMinOrderByAggregateInput
    _sum?: ItemEmprestimoSumOrderByAggregateInput
  }

  export type ItemEmprestimoScalarWhereWithAggregatesInput = {
    AND?: ItemEmprestimoScalarWhereWithAggregatesInput | ItemEmprestimoScalarWhereWithAggregatesInput[]
    OR?: ItemEmprestimoScalarWhereWithAggregatesInput[]
    NOT?: ItemEmprestimoScalarWhereWithAggregatesInput | ItemEmprestimoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemEmprestimo"> | number
    data_de_devolucao?: DateTimeWithAggregatesFilter<"ItemEmprestimo"> | Date | string
    valor_multa?: IntWithAggregatesFilter<"ItemEmprestimo"> | number
    status?: StringWithAggregatesFilter<"ItemEmprestimo"> | string
    id_emprestimo?: IntWithAggregatesFilter<"ItemEmprestimo"> | number
    id_livro?: IntWithAggregatesFilter<"ItemEmprestimo"> | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    leitor?: LeitorCreateNestedOneWithoutUserInput
    autor?: AutorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    leitor?: LeitorUncheckedCreateNestedOneWithoutUserInput
    autor?: AutorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leitor?: LeitorUpdateOneWithoutUserNestedInput
    autor?: AutorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leitor?: LeitorUncheckedUpdateOneWithoutUserNestedInput
    autor?: AutorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeitorCreateInput = {
    nome: string
    cpf: string
    data_de_nascimento: Date | string
    endereco: string
    observacao?: string | null
    user: UserCreateNestedOneWithoutLeitorInput
    emprestimos?: EmprestimoCreateNestedManyWithoutLeitorInput
  }

  export type LeitorUncheckedCreateInput = {
    id?: number
    nome: string
    cpf: string
    data_de_nascimento: Date | string
    endereco: string
    observacao?: string | null
    id_user: number
    emprestimos?: EmprestimoUncheckedCreateNestedManyWithoutLeitorInput
  }

  export type LeitorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_de_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutLeitorNestedInput
    emprestimos?: EmprestimoUpdateManyWithoutLeitorNestedInput
  }

  export type LeitorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_de_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    id_user?: IntFieldUpdateOperationsInput | number
    emprestimos?: EmprestimoUncheckedUpdateManyWithoutLeitorNestedInput
  }

  export type LeitorCreateManyInput = {
    id?: number
    nome: string
    cpf: string
    data_de_nascimento: Date | string
    endereco: string
    observacao?: string | null
    id_user: number
  }

  export type LeitorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_de_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeitorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_de_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type AutorCreateInput = {
    nome_autor: string
    origem: string
    biografia: string
    data_de_nascimento: Date | string
    nome_artistico: string
    user: UserCreateNestedOneWithoutAutorInput
    livros?: LivroCreateNestedManyWithoutAutorInput
  }

  export type AutorUncheckedCreateInput = {
    id?: number
    nome_autor: string
    origem: string
    biografia: string
    data_de_nascimento: Date | string
    nome_artistico: string
    id_user: number
    livros?: LivroUncheckedCreateNestedManyWithoutAutorInput
  }

  export type AutorUpdateInput = {
    nome_autor?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    biografia?: StringFieldUpdateOperationsInput | string
    data_de_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAutorNestedInput
    livros?: LivroUpdateManyWithoutAutorNestedInput
  }

  export type AutorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_autor?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    biografia?: StringFieldUpdateOperationsInput | string
    data_de_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    id_user?: IntFieldUpdateOperationsInput | number
    livros?: LivroUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type AutorCreateManyInput = {
    id?: number
    nome_autor: string
    origem: string
    biografia: string
    data_de_nascimento: Date | string
    nome_artistico: string
    id_user: number
  }

  export type AutorUpdateManyMutationInput = {
    nome_autor?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    biografia?: StringFieldUpdateOperationsInput | string
    data_de_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
  }

  export type AutorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_autor?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    biografia?: StringFieldUpdateOperationsInput | string
    data_de_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type LivroCreateInput = {
    nome_livro: string
    editora: string
    versao: number
    ano: number
    genero: string
    idioma: string
    qtde_total: number
    qtde_disponivel: number
    autor: AutorCreateNestedOneWithoutLivrosInput
    itens_emprestimo?: ItemEmprestimoCreateNestedManyWithoutLivroInput
  }

  export type LivroUncheckedCreateInput = {
    id?: number
    nome_livro: string
    editora: string
    versao: number
    ano: number
    genero: string
    idioma: string
    qtde_total: number
    qtde_disponivel: number
    id_autor: number
    itens_emprestimo?: ItemEmprestimoUncheckedCreateNestedManyWithoutLivroInput
  }

  export type LivroUpdateInput = {
    nome_livro?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    versao?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
    idioma?: StringFieldUpdateOperationsInput | string
    qtde_total?: IntFieldUpdateOperationsInput | number
    qtde_disponivel?: IntFieldUpdateOperationsInput | number
    autor?: AutorUpdateOneRequiredWithoutLivrosNestedInput
    itens_emprestimo?: ItemEmprestimoUpdateManyWithoutLivroNestedInput
  }

  export type LivroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_livro?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    versao?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
    idioma?: StringFieldUpdateOperationsInput | string
    qtde_total?: IntFieldUpdateOperationsInput | number
    qtde_disponivel?: IntFieldUpdateOperationsInput | number
    id_autor?: IntFieldUpdateOperationsInput | number
    itens_emprestimo?: ItemEmprestimoUncheckedUpdateManyWithoutLivroNestedInput
  }

  export type LivroCreateManyInput = {
    id?: number
    nome_livro: string
    editora: string
    versao: number
    ano: number
    genero: string
    idioma: string
    qtde_total: number
    qtde_disponivel: number
    id_autor: number
  }

  export type LivroUpdateManyMutationInput = {
    nome_livro?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    versao?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
    idioma?: StringFieldUpdateOperationsInput | string
    qtde_total?: IntFieldUpdateOperationsInput | number
    qtde_disponivel?: IntFieldUpdateOperationsInput | number
  }

  export type LivroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_livro?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    versao?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
    idioma?: StringFieldUpdateOperationsInput | string
    qtde_total?: IntFieldUpdateOperationsInput | number
    qtde_disponivel?: IntFieldUpdateOperationsInput | number
    id_autor?: IntFieldUpdateOperationsInput | number
  }

  export type EmprestimoCreateInput = {
    data_emprestimo: Date | string
    prazo_de_devolucao: Date | string
    observacoes?: string | null
    leitor: LeitorCreateNestedOneWithoutEmprestimosInput
    itens_emprestimo?: ItemEmprestimoCreateNestedManyWithoutEmprestimoInput
  }

  export type EmprestimoUncheckedCreateInput = {
    id?: number
    data_emprestimo: Date | string
    prazo_de_devolucao: Date | string
    observacoes?: string | null
    id_leitor: number
    itens_emprestimo?: ItemEmprestimoUncheckedCreateNestedManyWithoutEmprestimoInput
  }

  export type EmprestimoUpdateInput = {
    data_emprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    prazo_de_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    leitor?: LeitorUpdateOneRequiredWithoutEmprestimosNestedInput
    itens_emprestimo?: ItemEmprestimoUpdateManyWithoutEmprestimoNestedInput
  }

  export type EmprestimoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_emprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    prazo_de_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    id_leitor?: IntFieldUpdateOperationsInput | number
    itens_emprestimo?: ItemEmprestimoUncheckedUpdateManyWithoutEmprestimoNestedInput
  }

  export type EmprestimoCreateManyInput = {
    id?: number
    data_emprestimo: Date | string
    prazo_de_devolucao: Date | string
    observacoes?: string | null
    id_leitor: number
  }

  export type EmprestimoUpdateManyMutationInput = {
    data_emprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    prazo_de_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmprestimoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_emprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    prazo_de_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    id_leitor?: IntFieldUpdateOperationsInput | number
  }

  export type ItemEmprestimoCreateInput = {
    data_de_devolucao: Date | string
    valor_multa: number
    status: string
    emprestimo: EmprestimoCreateNestedOneWithoutItens_emprestimoInput
    livro: LivroCreateNestedOneWithoutItens_emprestimoInput
  }

  export type ItemEmprestimoUncheckedCreateInput = {
    id?: number
    data_de_devolucao: Date | string
    valor_multa: number
    status: string
    id_emprestimo: number
    id_livro: number
  }

  export type ItemEmprestimoUpdateInput = {
    data_de_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_multa?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    emprestimo?: EmprestimoUpdateOneRequiredWithoutItens_emprestimoNestedInput
    livro?: LivroUpdateOneRequiredWithoutItens_emprestimoNestedInput
  }

  export type ItemEmprestimoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_de_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_multa?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    id_emprestimo?: IntFieldUpdateOperationsInput | number
    id_livro?: IntFieldUpdateOperationsInput | number
  }

  export type ItemEmprestimoCreateManyInput = {
    id?: number
    data_de_devolucao: Date | string
    valor_multa: number
    status: string
    id_emprestimo: number
    id_livro: number
  }

  export type ItemEmprestimoUpdateManyMutationInput = {
    data_de_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_multa?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ItemEmprestimoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_de_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_multa?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    id_emprestimo?: IntFieldUpdateOperationsInput | number
    id_livro?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LeitorNullableScalarRelationFilter = {
    is?: LeitorWhereInput | null
    isNot?: LeitorWhereInput | null
  }

  export type AutorNullableScalarRelationFilter = {
    is?: AutorWhereInput | null
    isNot?: AutorWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EmprestimoListRelationFilter = {
    every?: EmprestimoWhereInput
    some?: EmprestimoWhereInput
    none?: EmprestimoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmprestimoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeitorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    data_de_nascimento?: SortOrder
    endereco?: SortOrder
    observacao?: SortOrder
    id_user?: SortOrder
  }

  export type LeitorAvgOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
  }

  export type LeitorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    data_de_nascimento?: SortOrder
    endereco?: SortOrder
    observacao?: SortOrder
    id_user?: SortOrder
  }

  export type LeitorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    data_de_nascimento?: SortOrder
    endereco?: SortOrder
    observacao?: SortOrder
    id_user?: SortOrder
  }

  export type LeitorSumOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type LivroListRelationFilter = {
    every?: LivroWhereInput
    some?: LivroWhereInput
    none?: LivroWhereInput
  }

  export type LivroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AutorCountOrderByAggregateInput = {
    id?: SortOrder
    nome_autor?: SortOrder
    origem?: SortOrder
    biografia?: SortOrder
    data_de_nascimento?: SortOrder
    nome_artistico?: SortOrder
    id_user?: SortOrder
  }

  export type AutorAvgOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
  }

  export type AutorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_autor?: SortOrder
    origem?: SortOrder
    biografia?: SortOrder
    data_de_nascimento?: SortOrder
    nome_artistico?: SortOrder
    id_user?: SortOrder
  }

  export type AutorMinOrderByAggregateInput = {
    id?: SortOrder
    nome_autor?: SortOrder
    origem?: SortOrder
    biografia?: SortOrder
    data_de_nascimento?: SortOrder
    nome_artistico?: SortOrder
    id_user?: SortOrder
  }

  export type AutorSumOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
  }

  export type AutorScalarRelationFilter = {
    is?: AutorWhereInput
    isNot?: AutorWhereInput
  }

  export type ItemEmprestimoListRelationFilter = {
    every?: ItemEmprestimoWhereInput
    some?: ItemEmprestimoWhereInput
    none?: ItemEmprestimoWhereInput
  }

  export type ItemEmprestimoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LivroCountOrderByAggregateInput = {
    id?: SortOrder
    nome_livro?: SortOrder
    editora?: SortOrder
    versao?: SortOrder
    ano?: SortOrder
    genero?: SortOrder
    idioma?: SortOrder
    qtde_total?: SortOrder
    qtde_disponivel?: SortOrder
    id_autor?: SortOrder
  }

  export type LivroAvgOrderByAggregateInput = {
    id?: SortOrder
    versao?: SortOrder
    ano?: SortOrder
    qtde_total?: SortOrder
    qtde_disponivel?: SortOrder
    id_autor?: SortOrder
  }

  export type LivroMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_livro?: SortOrder
    editora?: SortOrder
    versao?: SortOrder
    ano?: SortOrder
    genero?: SortOrder
    idioma?: SortOrder
    qtde_total?: SortOrder
    qtde_disponivel?: SortOrder
    id_autor?: SortOrder
  }

  export type LivroMinOrderByAggregateInput = {
    id?: SortOrder
    nome_livro?: SortOrder
    editora?: SortOrder
    versao?: SortOrder
    ano?: SortOrder
    genero?: SortOrder
    idioma?: SortOrder
    qtde_total?: SortOrder
    qtde_disponivel?: SortOrder
    id_autor?: SortOrder
  }

  export type LivroSumOrderByAggregateInput = {
    id?: SortOrder
    versao?: SortOrder
    ano?: SortOrder
    qtde_total?: SortOrder
    qtde_disponivel?: SortOrder
    id_autor?: SortOrder
  }

  export type LeitorScalarRelationFilter = {
    is?: LeitorWhereInput
    isNot?: LeitorWhereInput
  }

  export type EmprestimoCountOrderByAggregateInput = {
    id?: SortOrder
    data_emprestimo?: SortOrder
    prazo_de_devolucao?: SortOrder
    observacoes?: SortOrder
    id_leitor?: SortOrder
  }

  export type EmprestimoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_leitor?: SortOrder
  }

  export type EmprestimoMaxOrderByAggregateInput = {
    id?: SortOrder
    data_emprestimo?: SortOrder
    prazo_de_devolucao?: SortOrder
    observacoes?: SortOrder
    id_leitor?: SortOrder
  }

  export type EmprestimoMinOrderByAggregateInput = {
    id?: SortOrder
    data_emprestimo?: SortOrder
    prazo_de_devolucao?: SortOrder
    observacoes?: SortOrder
    id_leitor?: SortOrder
  }

  export type EmprestimoSumOrderByAggregateInput = {
    id?: SortOrder
    id_leitor?: SortOrder
  }

  export type EmprestimoScalarRelationFilter = {
    is?: EmprestimoWhereInput
    isNot?: EmprestimoWhereInput
  }

  export type LivroScalarRelationFilter = {
    is?: LivroWhereInput
    isNot?: LivroWhereInput
  }

  export type ItemEmprestimoCountOrderByAggregateInput = {
    id?: SortOrder
    data_de_devolucao?: SortOrder
    valor_multa?: SortOrder
    status?: SortOrder
    id_emprestimo?: SortOrder
    id_livro?: SortOrder
  }

  export type ItemEmprestimoAvgOrderByAggregateInput = {
    id?: SortOrder
    valor_multa?: SortOrder
    id_emprestimo?: SortOrder
    id_livro?: SortOrder
  }

  export type ItemEmprestimoMaxOrderByAggregateInput = {
    id?: SortOrder
    data_de_devolucao?: SortOrder
    valor_multa?: SortOrder
    status?: SortOrder
    id_emprestimo?: SortOrder
    id_livro?: SortOrder
  }

  export type ItemEmprestimoMinOrderByAggregateInput = {
    id?: SortOrder
    data_de_devolucao?: SortOrder
    valor_multa?: SortOrder
    status?: SortOrder
    id_emprestimo?: SortOrder
    id_livro?: SortOrder
  }

  export type ItemEmprestimoSumOrderByAggregateInput = {
    id?: SortOrder
    valor_multa?: SortOrder
    id_emprestimo?: SortOrder
    id_livro?: SortOrder
  }

  export type LeitorCreateNestedOneWithoutUserInput = {
    create?: XOR<LeitorCreateWithoutUserInput, LeitorUncheckedCreateWithoutUserInput>
    connectOrCreate?: LeitorCreateOrConnectWithoutUserInput
    connect?: LeitorWhereUniqueInput
  }

  export type AutorCreateNestedOneWithoutUserInput = {
    create?: XOR<AutorCreateWithoutUserInput, AutorUncheckedCreateWithoutUserInput>
    connectOrCreate?: AutorCreateOrConnectWithoutUserInput
    connect?: AutorWhereUniqueInput
  }

  export type LeitorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<LeitorCreateWithoutUserInput, LeitorUncheckedCreateWithoutUserInput>
    connectOrCreate?: LeitorCreateOrConnectWithoutUserInput
    connect?: LeitorWhereUniqueInput
  }

  export type AutorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AutorCreateWithoutUserInput, AutorUncheckedCreateWithoutUserInput>
    connectOrCreate?: AutorCreateOrConnectWithoutUserInput
    connect?: AutorWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LeitorUpdateOneWithoutUserNestedInput = {
    create?: XOR<LeitorCreateWithoutUserInput, LeitorUncheckedCreateWithoutUserInput>
    connectOrCreate?: LeitorCreateOrConnectWithoutUserInput
    upsert?: LeitorUpsertWithoutUserInput
    disconnect?: LeitorWhereInput | boolean
    delete?: LeitorWhereInput | boolean
    connect?: LeitorWhereUniqueInput
    update?: XOR<XOR<LeitorUpdateToOneWithWhereWithoutUserInput, LeitorUpdateWithoutUserInput>, LeitorUncheckedUpdateWithoutUserInput>
  }

  export type AutorUpdateOneWithoutUserNestedInput = {
    create?: XOR<AutorCreateWithoutUserInput, AutorUncheckedCreateWithoutUserInput>
    connectOrCreate?: AutorCreateOrConnectWithoutUserInput
    upsert?: AutorUpsertWithoutUserInput
    disconnect?: AutorWhereInput | boolean
    delete?: AutorWhereInput | boolean
    connect?: AutorWhereUniqueInput
    update?: XOR<XOR<AutorUpdateToOneWithWhereWithoutUserInput, AutorUpdateWithoutUserInput>, AutorUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LeitorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<LeitorCreateWithoutUserInput, LeitorUncheckedCreateWithoutUserInput>
    connectOrCreate?: LeitorCreateOrConnectWithoutUserInput
    upsert?: LeitorUpsertWithoutUserInput
    disconnect?: LeitorWhereInput | boolean
    delete?: LeitorWhereInput | boolean
    connect?: LeitorWhereUniqueInput
    update?: XOR<XOR<LeitorUpdateToOneWithWhereWithoutUserInput, LeitorUpdateWithoutUserInput>, LeitorUncheckedUpdateWithoutUserInput>
  }

  export type AutorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AutorCreateWithoutUserInput, AutorUncheckedCreateWithoutUserInput>
    connectOrCreate?: AutorCreateOrConnectWithoutUserInput
    upsert?: AutorUpsertWithoutUserInput
    disconnect?: AutorWhereInput | boolean
    delete?: AutorWhereInput | boolean
    connect?: AutorWhereUniqueInput
    update?: XOR<XOR<AutorUpdateToOneWithWhereWithoutUserInput, AutorUpdateWithoutUserInput>, AutorUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutLeitorInput = {
    create?: XOR<UserCreateWithoutLeitorInput, UserUncheckedCreateWithoutLeitorInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeitorInput
    connect?: UserWhereUniqueInput
  }

  export type EmprestimoCreateNestedManyWithoutLeitorInput = {
    create?: XOR<EmprestimoCreateWithoutLeitorInput, EmprestimoUncheckedCreateWithoutLeitorInput> | EmprestimoCreateWithoutLeitorInput[] | EmprestimoUncheckedCreateWithoutLeitorInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutLeitorInput | EmprestimoCreateOrConnectWithoutLeitorInput[]
    createMany?: EmprestimoCreateManyLeitorInputEnvelope
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
  }

  export type EmprestimoUncheckedCreateNestedManyWithoutLeitorInput = {
    create?: XOR<EmprestimoCreateWithoutLeitorInput, EmprestimoUncheckedCreateWithoutLeitorInput> | EmprestimoCreateWithoutLeitorInput[] | EmprestimoUncheckedCreateWithoutLeitorInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutLeitorInput | EmprestimoCreateOrConnectWithoutLeitorInput[]
    createMany?: EmprestimoCreateManyLeitorInputEnvelope
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutLeitorNestedInput = {
    create?: XOR<UserCreateWithoutLeitorInput, UserUncheckedCreateWithoutLeitorInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeitorInput
    upsert?: UserUpsertWithoutLeitorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeitorInput, UserUpdateWithoutLeitorInput>, UserUncheckedUpdateWithoutLeitorInput>
  }

  export type EmprestimoUpdateManyWithoutLeitorNestedInput = {
    create?: XOR<EmprestimoCreateWithoutLeitorInput, EmprestimoUncheckedCreateWithoutLeitorInput> | EmprestimoCreateWithoutLeitorInput[] | EmprestimoUncheckedCreateWithoutLeitorInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutLeitorInput | EmprestimoCreateOrConnectWithoutLeitorInput[]
    upsert?: EmprestimoUpsertWithWhereUniqueWithoutLeitorInput | EmprestimoUpsertWithWhereUniqueWithoutLeitorInput[]
    createMany?: EmprestimoCreateManyLeitorInputEnvelope
    set?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    disconnect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    delete?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    update?: EmprestimoUpdateWithWhereUniqueWithoutLeitorInput | EmprestimoUpdateWithWhereUniqueWithoutLeitorInput[]
    updateMany?: EmprestimoUpdateManyWithWhereWithoutLeitorInput | EmprestimoUpdateManyWithWhereWithoutLeitorInput[]
    deleteMany?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
  }

  export type EmprestimoUncheckedUpdateManyWithoutLeitorNestedInput = {
    create?: XOR<EmprestimoCreateWithoutLeitorInput, EmprestimoUncheckedCreateWithoutLeitorInput> | EmprestimoCreateWithoutLeitorInput[] | EmprestimoUncheckedCreateWithoutLeitorInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutLeitorInput | EmprestimoCreateOrConnectWithoutLeitorInput[]
    upsert?: EmprestimoUpsertWithWhereUniqueWithoutLeitorInput | EmprestimoUpsertWithWhereUniqueWithoutLeitorInput[]
    createMany?: EmprestimoCreateManyLeitorInputEnvelope
    set?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    disconnect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    delete?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    update?: EmprestimoUpdateWithWhereUniqueWithoutLeitorInput | EmprestimoUpdateWithWhereUniqueWithoutLeitorInput[]
    updateMany?: EmprestimoUpdateManyWithWhereWithoutLeitorInput | EmprestimoUpdateManyWithWhereWithoutLeitorInput[]
    deleteMany?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAutorInput = {
    create?: XOR<UserCreateWithoutAutorInput, UserUncheckedCreateWithoutAutorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAutorInput
    connect?: UserWhereUniqueInput
  }

  export type LivroCreateNestedManyWithoutAutorInput = {
    create?: XOR<LivroCreateWithoutAutorInput, LivroUncheckedCreateWithoutAutorInput> | LivroCreateWithoutAutorInput[] | LivroUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutAutorInput | LivroCreateOrConnectWithoutAutorInput[]
    createMany?: LivroCreateManyAutorInputEnvelope
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
  }

  export type LivroUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<LivroCreateWithoutAutorInput, LivroUncheckedCreateWithoutAutorInput> | LivroCreateWithoutAutorInput[] | LivroUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutAutorInput | LivroCreateOrConnectWithoutAutorInput[]
    createMany?: LivroCreateManyAutorInputEnvelope
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAutorNestedInput = {
    create?: XOR<UserCreateWithoutAutorInput, UserUncheckedCreateWithoutAutorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAutorInput
    upsert?: UserUpsertWithoutAutorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAutorInput, UserUpdateWithoutAutorInput>, UserUncheckedUpdateWithoutAutorInput>
  }

  export type LivroUpdateManyWithoutAutorNestedInput = {
    create?: XOR<LivroCreateWithoutAutorInput, LivroUncheckedCreateWithoutAutorInput> | LivroCreateWithoutAutorInput[] | LivroUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutAutorInput | LivroCreateOrConnectWithoutAutorInput[]
    upsert?: LivroUpsertWithWhereUniqueWithoutAutorInput | LivroUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: LivroCreateManyAutorInputEnvelope
    set?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    disconnect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    delete?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    update?: LivroUpdateWithWhereUniqueWithoutAutorInput | LivroUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: LivroUpdateManyWithWhereWithoutAutorInput | LivroUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: LivroScalarWhereInput | LivroScalarWhereInput[]
  }

  export type LivroUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<LivroCreateWithoutAutorInput, LivroUncheckedCreateWithoutAutorInput> | LivroCreateWithoutAutorInput[] | LivroUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutAutorInput | LivroCreateOrConnectWithoutAutorInput[]
    upsert?: LivroUpsertWithWhereUniqueWithoutAutorInput | LivroUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: LivroCreateManyAutorInputEnvelope
    set?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    disconnect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    delete?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    update?: LivroUpdateWithWhereUniqueWithoutAutorInput | LivroUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: LivroUpdateManyWithWhereWithoutAutorInput | LivroUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: LivroScalarWhereInput | LivroScalarWhereInput[]
  }

  export type AutorCreateNestedOneWithoutLivrosInput = {
    create?: XOR<AutorCreateWithoutLivrosInput, AutorUncheckedCreateWithoutLivrosInput>
    connectOrCreate?: AutorCreateOrConnectWithoutLivrosInput
    connect?: AutorWhereUniqueInput
  }

  export type ItemEmprestimoCreateNestedManyWithoutLivroInput = {
    create?: XOR<ItemEmprestimoCreateWithoutLivroInput, ItemEmprestimoUncheckedCreateWithoutLivroInput> | ItemEmprestimoCreateWithoutLivroInput[] | ItemEmprestimoUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: ItemEmprestimoCreateOrConnectWithoutLivroInput | ItemEmprestimoCreateOrConnectWithoutLivroInput[]
    createMany?: ItemEmprestimoCreateManyLivroInputEnvelope
    connect?: ItemEmprestimoWhereUniqueInput | ItemEmprestimoWhereUniqueInput[]
  }

  export type ItemEmprestimoUncheckedCreateNestedManyWithoutLivroInput = {
    create?: XOR<ItemEmprestimoCreateWithoutLivroInput, ItemEmprestimoUncheckedCreateWithoutLivroInput> | ItemEmprestimoCreateWithoutLivroInput[] | ItemEmprestimoUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: ItemEmprestimoCreateOrConnectWithoutLivroInput | ItemEmprestimoCreateOrConnectWithoutLivroInput[]
    createMany?: ItemEmprestimoCreateManyLivroInputEnvelope
    connect?: ItemEmprestimoWhereUniqueInput | ItemEmprestimoWhereUniqueInput[]
  }

  export type AutorUpdateOneRequiredWithoutLivrosNestedInput = {
    create?: XOR<AutorCreateWithoutLivrosInput, AutorUncheckedCreateWithoutLivrosInput>
    connectOrCreate?: AutorCreateOrConnectWithoutLivrosInput
    upsert?: AutorUpsertWithoutLivrosInput
    connect?: AutorWhereUniqueInput
    update?: XOR<XOR<AutorUpdateToOneWithWhereWithoutLivrosInput, AutorUpdateWithoutLivrosInput>, AutorUncheckedUpdateWithoutLivrosInput>
  }

  export type ItemEmprestimoUpdateManyWithoutLivroNestedInput = {
    create?: XOR<ItemEmprestimoCreateWithoutLivroInput, ItemEmprestimoUncheckedCreateWithoutLivroInput> | ItemEmprestimoCreateWithoutLivroInput[] | ItemEmprestimoUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: ItemEmprestimoCreateOrConnectWithoutLivroInput | ItemEmprestimoCreateOrConnectWithoutLivroInput[]
    upsert?: ItemEmprestimoUpsertWithWhereUniqueWithoutLivroInput | ItemEmprestimoUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: ItemEmprestimoCreateManyLivroInputEnvelope
    set?: ItemEmprestimoWhereUniqueInput | ItemEmprestimoWhereUniqueInput[]
    disconnect?: ItemEmprestimoWhereUniqueInput | ItemEmprestimoWhereUniqueInput[]
    delete?: ItemEmprestimoWhereUniqueInput | ItemEmprestimoWhereUniqueInput[]
    connect?: ItemEmprestimoWhereUniqueInput | ItemEmprestimoWhereUniqueInput[]
    update?: ItemEmprestimoUpdateWithWhereUniqueWithoutLivroInput | ItemEmprestimoUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: ItemEmprestimoUpdateManyWithWhereWithoutLivroInput | ItemEmprestimoUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: ItemEmprestimoScalarWhereInput | ItemEmprestimoScalarWhereInput[]
  }

  export type ItemEmprestimoUncheckedUpdateManyWithoutLivroNestedInput = {
    create?: XOR<ItemEmprestimoCreateWithoutLivroInput, ItemEmprestimoUncheckedCreateWithoutLivroInput> | ItemEmprestimoCreateWithoutLivroInput[] | ItemEmprestimoUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: ItemEmprestimoCreateOrConnectWithoutLivroInput | ItemEmprestimoCreateOrConnectWithoutLivroInput[]
    upsert?: ItemEmprestimoUpsertWithWhereUniqueWithoutLivroInput | ItemEmprestimoUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: ItemEmprestimoCreateManyLivroInputEnvelope
    set?: ItemEmprestimoWhereUniqueInput | ItemEmprestimoWhereUniqueInput[]
    disconnect?: ItemEmprestimoWhereUniqueInput | ItemEmprestimoWhereUniqueInput[]
    delete?: ItemEmprestimoWhereUniqueInput | ItemEmprestimoWhereUniqueInput[]
    connect?: ItemEmprestimoWhereUniqueInput | ItemEmprestimoWhereUniqueInput[]
    update?: ItemEmprestimoUpdateWithWhereUniqueWithoutLivroInput | ItemEmprestimoUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: ItemEmprestimoUpdateManyWithWhereWithoutLivroInput | ItemEmprestimoUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: ItemEmprestimoScalarWhereInput | ItemEmprestimoScalarWhereInput[]
  }

  export type LeitorCreateNestedOneWithoutEmprestimosInput = {
    create?: XOR<LeitorCreateWithoutEmprestimosInput, LeitorUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: LeitorCreateOrConnectWithoutEmprestimosInput
    connect?: LeitorWhereUniqueInput
  }

  export type ItemEmprestimoCreateNestedManyWithoutEmprestimoInput = {
    create?: XOR<ItemEmprestimoCreateWithoutEmprestimoInput, ItemEmprestimoUncheckedCreateWithoutEmprestimoInput> | ItemEmprestimoCreateWithoutEmprestimoInput[] | ItemEmprestimoUncheckedCreateWithoutEmprestimoInput[]
    connectOrCreate?: ItemEmprestimoCreateOrConnectWithoutEmprestimoInput | ItemEmprestimoCreateOrConnectWithoutEmprestimoInput[]
    createMany?: ItemEmprestimoCreateManyEmprestimoInputEnvelope
    connect?: ItemEmprestimoWhereUniqueInput | ItemEmprestimoWhereUniqueInput[]
  }

  export type ItemEmprestimoUncheckedCreateNestedManyWithoutEmprestimoInput = {
    create?: XOR<ItemEmprestimoCreateWithoutEmprestimoInput, ItemEmprestimoUncheckedCreateWithoutEmprestimoInput> | ItemEmprestimoCreateWithoutEmprestimoInput[] | ItemEmprestimoUncheckedCreateWithoutEmprestimoInput[]
    connectOrCreate?: ItemEmprestimoCreateOrConnectWithoutEmprestimoInput | ItemEmprestimoCreateOrConnectWithoutEmprestimoInput[]
    createMany?: ItemEmprestimoCreateManyEmprestimoInputEnvelope
    connect?: ItemEmprestimoWhereUniqueInput | ItemEmprestimoWhereUniqueInput[]
  }

  export type LeitorUpdateOneRequiredWithoutEmprestimosNestedInput = {
    create?: XOR<LeitorCreateWithoutEmprestimosInput, LeitorUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: LeitorCreateOrConnectWithoutEmprestimosInput
    upsert?: LeitorUpsertWithoutEmprestimosInput
    connect?: LeitorWhereUniqueInput
    update?: XOR<XOR<LeitorUpdateToOneWithWhereWithoutEmprestimosInput, LeitorUpdateWithoutEmprestimosInput>, LeitorUncheckedUpdateWithoutEmprestimosInput>
  }

  export type ItemEmprestimoUpdateManyWithoutEmprestimoNestedInput = {
    create?: XOR<ItemEmprestimoCreateWithoutEmprestimoInput, ItemEmprestimoUncheckedCreateWithoutEmprestimoInput> | ItemEmprestimoCreateWithoutEmprestimoInput[] | ItemEmprestimoUncheckedCreateWithoutEmprestimoInput[]
    connectOrCreate?: ItemEmprestimoCreateOrConnectWithoutEmprestimoInput | ItemEmprestimoCreateOrConnectWithoutEmprestimoInput[]
    upsert?: ItemEmprestimoUpsertWithWhereUniqueWithoutEmprestimoInput | ItemEmprestimoUpsertWithWhereUniqueWithoutEmprestimoInput[]
    createMany?: ItemEmprestimoCreateManyEmprestimoInputEnvelope
    set?: ItemEmprestimoWhereUniqueInput | ItemEmprestimoWhereUniqueInput[]
    disconnect?: ItemEmprestimoWhereUniqueInput | ItemEmprestimoWhereUniqueInput[]
    delete?: ItemEmprestimoWhereUniqueInput | ItemEmprestimoWhereUniqueInput[]
    connect?: ItemEmprestimoWhereUniqueInput | ItemEmprestimoWhereUniqueInput[]
    update?: ItemEmprestimoUpdateWithWhereUniqueWithoutEmprestimoInput | ItemEmprestimoUpdateWithWhereUniqueWithoutEmprestimoInput[]
    updateMany?: ItemEmprestimoUpdateManyWithWhereWithoutEmprestimoInput | ItemEmprestimoUpdateManyWithWhereWithoutEmprestimoInput[]
    deleteMany?: ItemEmprestimoScalarWhereInput | ItemEmprestimoScalarWhereInput[]
  }

  export type ItemEmprestimoUncheckedUpdateManyWithoutEmprestimoNestedInput = {
    create?: XOR<ItemEmprestimoCreateWithoutEmprestimoInput, ItemEmprestimoUncheckedCreateWithoutEmprestimoInput> | ItemEmprestimoCreateWithoutEmprestimoInput[] | ItemEmprestimoUncheckedCreateWithoutEmprestimoInput[]
    connectOrCreate?: ItemEmprestimoCreateOrConnectWithoutEmprestimoInput | ItemEmprestimoCreateOrConnectWithoutEmprestimoInput[]
    upsert?: ItemEmprestimoUpsertWithWhereUniqueWithoutEmprestimoInput | ItemEmprestimoUpsertWithWhereUniqueWithoutEmprestimoInput[]
    createMany?: ItemEmprestimoCreateManyEmprestimoInputEnvelope
    set?: ItemEmprestimoWhereUniqueInput | ItemEmprestimoWhereUniqueInput[]
    disconnect?: ItemEmprestimoWhereUniqueInput | ItemEmprestimoWhereUniqueInput[]
    delete?: ItemEmprestimoWhereUniqueInput | ItemEmprestimoWhereUniqueInput[]
    connect?: ItemEmprestimoWhereUniqueInput | ItemEmprestimoWhereUniqueInput[]
    update?: ItemEmprestimoUpdateWithWhereUniqueWithoutEmprestimoInput | ItemEmprestimoUpdateWithWhereUniqueWithoutEmprestimoInput[]
    updateMany?: ItemEmprestimoUpdateManyWithWhereWithoutEmprestimoInput | ItemEmprestimoUpdateManyWithWhereWithoutEmprestimoInput[]
    deleteMany?: ItemEmprestimoScalarWhereInput | ItemEmprestimoScalarWhereInput[]
  }

  export type EmprestimoCreateNestedOneWithoutItens_emprestimoInput = {
    create?: XOR<EmprestimoCreateWithoutItens_emprestimoInput, EmprestimoUncheckedCreateWithoutItens_emprestimoInput>
    connectOrCreate?: EmprestimoCreateOrConnectWithoutItens_emprestimoInput
    connect?: EmprestimoWhereUniqueInput
  }

  export type LivroCreateNestedOneWithoutItens_emprestimoInput = {
    create?: XOR<LivroCreateWithoutItens_emprestimoInput, LivroUncheckedCreateWithoutItens_emprestimoInput>
    connectOrCreate?: LivroCreateOrConnectWithoutItens_emprestimoInput
    connect?: LivroWhereUniqueInput
  }

  export type EmprestimoUpdateOneRequiredWithoutItens_emprestimoNestedInput = {
    create?: XOR<EmprestimoCreateWithoutItens_emprestimoInput, EmprestimoUncheckedCreateWithoutItens_emprestimoInput>
    connectOrCreate?: EmprestimoCreateOrConnectWithoutItens_emprestimoInput
    upsert?: EmprestimoUpsertWithoutItens_emprestimoInput
    connect?: EmprestimoWhereUniqueInput
    update?: XOR<XOR<EmprestimoUpdateToOneWithWhereWithoutItens_emprestimoInput, EmprestimoUpdateWithoutItens_emprestimoInput>, EmprestimoUncheckedUpdateWithoutItens_emprestimoInput>
  }

  export type LivroUpdateOneRequiredWithoutItens_emprestimoNestedInput = {
    create?: XOR<LivroCreateWithoutItens_emprestimoInput, LivroUncheckedCreateWithoutItens_emprestimoInput>
    connectOrCreate?: LivroCreateOrConnectWithoutItens_emprestimoInput
    upsert?: LivroUpsertWithoutItens_emprestimoInput
    connect?: LivroWhereUniqueInput
    update?: XOR<XOR<LivroUpdateToOneWithWhereWithoutItens_emprestimoInput, LivroUpdateWithoutItens_emprestimoInput>, LivroUncheckedUpdateWithoutItens_emprestimoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type LeitorCreateWithoutUserInput = {
    nome: string
    cpf: string
    data_de_nascimento: Date | string
    endereco: string
    observacao?: string | null
    emprestimos?: EmprestimoCreateNestedManyWithoutLeitorInput
  }

  export type LeitorUncheckedCreateWithoutUserInput = {
    id?: number
    nome: string
    cpf: string
    data_de_nascimento: Date | string
    endereco: string
    observacao?: string | null
    emprestimos?: EmprestimoUncheckedCreateNestedManyWithoutLeitorInput
  }

  export type LeitorCreateOrConnectWithoutUserInput = {
    where: LeitorWhereUniqueInput
    create: XOR<LeitorCreateWithoutUserInput, LeitorUncheckedCreateWithoutUserInput>
  }

  export type AutorCreateWithoutUserInput = {
    nome_autor: string
    origem: string
    biografia: string
    data_de_nascimento: Date | string
    nome_artistico: string
    livros?: LivroCreateNestedManyWithoutAutorInput
  }

  export type AutorUncheckedCreateWithoutUserInput = {
    id?: number
    nome_autor: string
    origem: string
    biografia: string
    data_de_nascimento: Date | string
    nome_artistico: string
    livros?: LivroUncheckedCreateNestedManyWithoutAutorInput
  }

  export type AutorCreateOrConnectWithoutUserInput = {
    where: AutorWhereUniqueInput
    create: XOR<AutorCreateWithoutUserInput, AutorUncheckedCreateWithoutUserInput>
  }

  export type LeitorUpsertWithoutUserInput = {
    update: XOR<LeitorUpdateWithoutUserInput, LeitorUncheckedUpdateWithoutUserInput>
    create: XOR<LeitorCreateWithoutUserInput, LeitorUncheckedCreateWithoutUserInput>
    where?: LeitorWhereInput
  }

  export type LeitorUpdateToOneWithWhereWithoutUserInput = {
    where?: LeitorWhereInput
    data: XOR<LeitorUpdateWithoutUserInput, LeitorUncheckedUpdateWithoutUserInput>
  }

  export type LeitorUpdateWithoutUserInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_de_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    emprestimos?: EmprestimoUpdateManyWithoutLeitorNestedInput
  }

  export type LeitorUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_de_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    emprestimos?: EmprestimoUncheckedUpdateManyWithoutLeitorNestedInput
  }

  export type AutorUpsertWithoutUserInput = {
    update: XOR<AutorUpdateWithoutUserInput, AutorUncheckedUpdateWithoutUserInput>
    create: XOR<AutorCreateWithoutUserInput, AutorUncheckedCreateWithoutUserInput>
    where?: AutorWhereInput
  }

  export type AutorUpdateToOneWithWhereWithoutUserInput = {
    where?: AutorWhereInput
    data: XOR<AutorUpdateWithoutUserInput, AutorUncheckedUpdateWithoutUserInput>
  }

  export type AutorUpdateWithoutUserInput = {
    nome_autor?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    biografia?: StringFieldUpdateOperationsInput | string
    data_de_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    livros?: LivroUpdateManyWithoutAutorNestedInput
  }

  export type AutorUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_autor?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    biografia?: StringFieldUpdateOperationsInput | string
    data_de_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    livros?: LivroUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type UserCreateWithoutLeitorInput = {
    email: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    autor?: AutorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLeitorInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    autor?: AutorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLeitorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeitorInput, UserUncheckedCreateWithoutLeitorInput>
  }

  export type EmprestimoCreateWithoutLeitorInput = {
    data_emprestimo: Date | string
    prazo_de_devolucao: Date | string
    observacoes?: string | null
    itens_emprestimo?: ItemEmprestimoCreateNestedManyWithoutEmprestimoInput
  }

  export type EmprestimoUncheckedCreateWithoutLeitorInput = {
    id?: number
    data_emprestimo: Date | string
    prazo_de_devolucao: Date | string
    observacoes?: string | null
    itens_emprestimo?: ItemEmprestimoUncheckedCreateNestedManyWithoutEmprestimoInput
  }

  export type EmprestimoCreateOrConnectWithoutLeitorInput = {
    where: EmprestimoWhereUniqueInput
    create: XOR<EmprestimoCreateWithoutLeitorInput, EmprestimoUncheckedCreateWithoutLeitorInput>
  }

  export type EmprestimoCreateManyLeitorInputEnvelope = {
    data: EmprestimoCreateManyLeitorInput | EmprestimoCreateManyLeitorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLeitorInput = {
    update: XOR<UserUpdateWithoutLeitorInput, UserUncheckedUpdateWithoutLeitorInput>
    create: XOR<UserCreateWithoutLeitorInput, UserUncheckedCreateWithoutLeitorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeitorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeitorInput, UserUncheckedUpdateWithoutLeitorInput>
  }

  export type UserUpdateWithoutLeitorInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: AutorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLeitorInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: AutorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type EmprestimoUpsertWithWhereUniqueWithoutLeitorInput = {
    where: EmprestimoWhereUniqueInput
    update: XOR<EmprestimoUpdateWithoutLeitorInput, EmprestimoUncheckedUpdateWithoutLeitorInput>
    create: XOR<EmprestimoCreateWithoutLeitorInput, EmprestimoUncheckedCreateWithoutLeitorInput>
  }

  export type EmprestimoUpdateWithWhereUniqueWithoutLeitorInput = {
    where: EmprestimoWhereUniqueInput
    data: XOR<EmprestimoUpdateWithoutLeitorInput, EmprestimoUncheckedUpdateWithoutLeitorInput>
  }

  export type EmprestimoUpdateManyWithWhereWithoutLeitorInput = {
    where: EmprestimoScalarWhereInput
    data: XOR<EmprestimoUpdateManyMutationInput, EmprestimoUncheckedUpdateManyWithoutLeitorInput>
  }

  export type EmprestimoScalarWhereInput = {
    AND?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
    OR?: EmprestimoScalarWhereInput[]
    NOT?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
    id?: IntFilter<"Emprestimo"> | number
    data_emprestimo?: DateTimeFilter<"Emprestimo"> | Date | string
    prazo_de_devolucao?: DateTimeFilter<"Emprestimo"> | Date | string
    observacoes?: StringNullableFilter<"Emprestimo"> | string | null
    id_leitor?: IntFilter<"Emprestimo"> | number
  }

  export type UserCreateWithoutAutorInput = {
    email: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    leitor?: LeitorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAutorInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    leitor?: LeitorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAutorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAutorInput, UserUncheckedCreateWithoutAutorInput>
  }

  export type LivroCreateWithoutAutorInput = {
    nome_livro: string
    editora: string
    versao: number
    ano: number
    genero: string
    idioma: string
    qtde_total: number
    qtde_disponivel: number
    itens_emprestimo?: ItemEmprestimoCreateNestedManyWithoutLivroInput
  }

  export type LivroUncheckedCreateWithoutAutorInput = {
    id?: number
    nome_livro: string
    editora: string
    versao: number
    ano: number
    genero: string
    idioma: string
    qtde_total: number
    qtde_disponivel: number
    itens_emprestimo?: ItemEmprestimoUncheckedCreateNestedManyWithoutLivroInput
  }

  export type LivroCreateOrConnectWithoutAutorInput = {
    where: LivroWhereUniqueInput
    create: XOR<LivroCreateWithoutAutorInput, LivroUncheckedCreateWithoutAutorInput>
  }

  export type LivroCreateManyAutorInputEnvelope = {
    data: LivroCreateManyAutorInput | LivroCreateManyAutorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAutorInput = {
    update: XOR<UserUpdateWithoutAutorInput, UserUncheckedUpdateWithoutAutorInput>
    create: XOR<UserCreateWithoutAutorInput, UserUncheckedCreateWithoutAutorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAutorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAutorInput, UserUncheckedUpdateWithoutAutorInput>
  }

  export type UserUpdateWithoutAutorInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leitor?: LeitorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leitor?: LeitorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type LivroUpsertWithWhereUniqueWithoutAutorInput = {
    where: LivroWhereUniqueInput
    update: XOR<LivroUpdateWithoutAutorInput, LivroUncheckedUpdateWithoutAutorInput>
    create: XOR<LivroCreateWithoutAutorInput, LivroUncheckedCreateWithoutAutorInput>
  }

  export type LivroUpdateWithWhereUniqueWithoutAutorInput = {
    where: LivroWhereUniqueInput
    data: XOR<LivroUpdateWithoutAutorInput, LivroUncheckedUpdateWithoutAutorInput>
  }

  export type LivroUpdateManyWithWhereWithoutAutorInput = {
    where: LivroScalarWhereInput
    data: XOR<LivroUpdateManyMutationInput, LivroUncheckedUpdateManyWithoutAutorInput>
  }

  export type LivroScalarWhereInput = {
    AND?: LivroScalarWhereInput | LivroScalarWhereInput[]
    OR?: LivroScalarWhereInput[]
    NOT?: LivroScalarWhereInput | LivroScalarWhereInput[]
    id?: IntFilter<"Livro"> | number
    nome_livro?: StringFilter<"Livro"> | string
    editora?: StringFilter<"Livro"> | string
    versao?: IntFilter<"Livro"> | number
    ano?: IntFilter<"Livro"> | number
    genero?: StringFilter<"Livro"> | string
    idioma?: StringFilter<"Livro"> | string
    qtde_total?: IntFilter<"Livro"> | number
    qtde_disponivel?: IntFilter<"Livro"> | number
    id_autor?: IntFilter<"Livro"> | number
  }

  export type AutorCreateWithoutLivrosInput = {
    nome_autor: string
    origem: string
    biografia: string
    data_de_nascimento: Date | string
    nome_artistico: string
    user: UserCreateNestedOneWithoutAutorInput
  }

  export type AutorUncheckedCreateWithoutLivrosInput = {
    id?: number
    nome_autor: string
    origem: string
    biografia: string
    data_de_nascimento: Date | string
    nome_artistico: string
    id_user: number
  }

  export type AutorCreateOrConnectWithoutLivrosInput = {
    where: AutorWhereUniqueInput
    create: XOR<AutorCreateWithoutLivrosInput, AutorUncheckedCreateWithoutLivrosInput>
  }

  export type ItemEmprestimoCreateWithoutLivroInput = {
    data_de_devolucao: Date | string
    valor_multa: number
    status: string
    emprestimo: EmprestimoCreateNestedOneWithoutItens_emprestimoInput
  }

  export type ItemEmprestimoUncheckedCreateWithoutLivroInput = {
    id?: number
    data_de_devolucao: Date | string
    valor_multa: number
    status: string
    id_emprestimo: number
  }

  export type ItemEmprestimoCreateOrConnectWithoutLivroInput = {
    where: ItemEmprestimoWhereUniqueInput
    create: XOR<ItemEmprestimoCreateWithoutLivroInput, ItemEmprestimoUncheckedCreateWithoutLivroInput>
  }

  export type ItemEmprestimoCreateManyLivroInputEnvelope = {
    data: ItemEmprestimoCreateManyLivroInput | ItemEmprestimoCreateManyLivroInput[]
    skipDuplicates?: boolean
  }

  export type AutorUpsertWithoutLivrosInput = {
    update: XOR<AutorUpdateWithoutLivrosInput, AutorUncheckedUpdateWithoutLivrosInput>
    create: XOR<AutorCreateWithoutLivrosInput, AutorUncheckedCreateWithoutLivrosInput>
    where?: AutorWhereInput
  }

  export type AutorUpdateToOneWithWhereWithoutLivrosInput = {
    where?: AutorWhereInput
    data: XOR<AutorUpdateWithoutLivrosInput, AutorUncheckedUpdateWithoutLivrosInput>
  }

  export type AutorUpdateWithoutLivrosInput = {
    nome_autor?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    biografia?: StringFieldUpdateOperationsInput | string
    data_de_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAutorNestedInput
  }

  export type AutorUncheckedUpdateWithoutLivrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_autor?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    biografia?: StringFieldUpdateOperationsInput | string
    data_de_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nome_artistico?: StringFieldUpdateOperationsInput | string
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type ItemEmprestimoUpsertWithWhereUniqueWithoutLivroInput = {
    where: ItemEmprestimoWhereUniqueInput
    update: XOR<ItemEmprestimoUpdateWithoutLivroInput, ItemEmprestimoUncheckedUpdateWithoutLivroInput>
    create: XOR<ItemEmprestimoCreateWithoutLivroInput, ItemEmprestimoUncheckedCreateWithoutLivroInput>
  }

  export type ItemEmprestimoUpdateWithWhereUniqueWithoutLivroInput = {
    where: ItemEmprestimoWhereUniqueInput
    data: XOR<ItemEmprestimoUpdateWithoutLivroInput, ItemEmprestimoUncheckedUpdateWithoutLivroInput>
  }

  export type ItemEmprestimoUpdateManyWithWhereWithoutLivroInput = {
    where: ItemEmprestimoScalarWhereInput
    data: XOR<ItemEmprestimoUpdateManyMutationInput, ItemEmprestimoUncheckedUpdateManyWithoutLivroInput>
  }

  export type ItemEmprestimoScalarWhereInput = {
    AND?: ItemEmprestimoScalarWhereInput | ItemEmprestimoScalarWhereInput[]
    OR?: ItemEmprestimoScalarWhereInput[]
    NOT?: ItemEmprestimoScalarWhereInput | ItemEmprestimoScalarWhereInput[]
    id?: IntFilter<"ItemEmprestimo"> | number
    data_de_devolucao?: DateTimeFilter<"ItemEmprestimo"> | Date | string
    valor_multa?: IntFilter<"ItemEmprestimo"> | number
    status?: StringFilter<"ItemEmprestimo"> | string
    id_emprestimo?: IntFilter<"ItemEmprestimo"> | number
    id_livro?: IntFilter<"ItemEmprestimo"> | number
  }

  export type LeitorCreateWithoutEmprestimosInput = {
    nome: string
    cpf: string
    data_de_nascimento: Date | string
    endereco: string
    observacao?: string | null
    user: UserCreateNestedOneWithoutLeitorInput
  }

  export type LeitorUncheckedCreateWithoutEmprestimosInput = {
    id?: number
    nome: string
    cpf: string
    data_de_nascimento: Date | string
    endereco: string
    observacao?: string | null
    id_user: number
  }

  export type LeitorCreateOrConnectWithoutEmprestimosInput = {
    where: LeitorWhereUniqueInput
    create: XOR<LeitorCreateWithoutEmprestimosInput, LeitorUncheckedCreateWithoutEmprestimosInput>
  }

  export type ItemEmprestimoCreateWithoutEmprestimoInput = {
    data_de_devolucao: Date | string
    valor_multa: number
    status: string
    livro: LivroCreateNestedOneWithoutItens_emprestimoInput
  }

  export type ItemEmprestimoUncheckedCreateWithoutEmprestimoInput = {
    id?: number
    data_de_devolucao: Date | string
    valor_multa: number
    status: string
    id_livro: number
  }

  export type ItemEmprestimoCreateOrConnectWithoutEmprestimoInput = {
    where: ItemEmprestimoWhereUniqueInput
    create: XOR<ItemEmprestimoCreateWithoutEmprestimoInput, ItemEmprestimoUncheckedCreateWithoutEmprestimoInput>
  }

  export type ItemEmprestimoCreateManyEmprestimoInputEnvelope = {
    data: ItemEmprestimoCreateManyEmprestimoInput | ItemEmprestimoCreateManyEmprestimoInput[]
    skipDuplicates?: boolean
  }

  export type LeitorUpsertWithoutEmprestimosInput = {
    update: XOR<LeitorUpdateWithoutEmprestimosInput, LeitorUncheckedUpdateWithoutEmprestimosInput>
    create: XOR<LeitorCreateWithoutEmprestimosInput, LeitorUncheckedCreateWithoutEmprestimosInput>
    where?: LeitorWhereInput
  }

  export type LeitorUpdateToOneWithWhereWithoutEmprestimosInput = {
    where?: LeitorWhereInput
    data: XOR<LeitorUpdateWithoutEmprestimosInput, LeitorUncheckedUpdateWithoutEmprestimosInput>
  }

  export type LeitorUpdateWithoutEmprestimosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_de_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutLeitorNestedInput
  }

  export type LeitorUncheckedUpdateWithoutEmprestimosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_de_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type ItemEmprestimoUpsertWithWhereUniqueWithoutEmprestimoInput = {
    where: ItemEmprestimoWhereUniqueInput
    update: XOR<ItemEmprestimoUpdateWithoutEmprestimoInput, ItemEmprestimoUncheckedUpdateWithoutEmprestimoInput>
    create: XOR<ItemEmprestimoCreateWithoutEmprestimoInput, ItemEmprestimoUncheckedCreateWithoutEmprestimoInput>
  }

  export type ItemEmprestimoUpdateWithWhereUniqueWithoutEmprestimoInput = {
    where: ItemEmprestimoWhereUniqueInput
    data: XOR<ItemEmprestimoUpdateWithoutEmprestimoInput, ItemEmprestimoUncheckedUpdateWithoutEmprestimoInput>
  }

  export type ItemEmprestimoUpdateManyWithWhereWithoutEmprestimoInput = {
    where: ItemEmprestimoScalarWhereInput
    data: XOR<ItemEmprestimoUpdateManyMutationInput, ItemEmprestimoUncheckedUpdateManyWithoutEmprestimoInput>
  }

  export type EmprestimoCreateWithoutItens_emprestimoInput = {
    data_emprestimo: Date | string
    prazo_de_devolucao: Date | string
    observacoes?: string | null
    leitor: LeitorCreateNestedOneWithoutEmprestimosInput
  }

  export type EmprestimoUncheckedCreateWithoutItens_emprestimoInput = {
    id?: number
    data_emprestimo: Date | string
    prazo_de_devolucao: Date | string
    observacoes?: string | null
    id_leitor: number
  }

  export type EmprestimoCreateOrConnectWithoutItens_emprestimoInput = {
    where: EmprestimoWhereUniqueInput
    create: XOR<EmprestimoCreateWithoutItens_emprestimoInput, EmprestimoUncheckedCreateWithoutItens_emprestimoInput>
  }

  export type LivroCreateWithoutItens_emprestimoInput = {
    nome_livro: string
    editora: string
    versao: number
    ano: number
    genero: string
    idioma: string
    qtde_total: number
    qtde_disponivel: number
    autor: AutorCreateNestedOneWithoutLivrosInput
  }

  export type LivroUncheckedCreateWithoutItens_emprestimoInput = {
    id?: number
    nome_livro: string
    editora: string
    versao: number
    ano: number
    genero: string
    idioma: string
    qtde_total: number
    qtde_disponivel: number
    id_autor: number
  }

  export type LivroCreateOrConnectWithoutItens_emprestimoInput = {
    where: LivroWhereUniqueInput
    create: XOR<LivroCreateWithoutItens_emprestimoInput, LivroUncheckedCreateWithoutItens_emprestimoInput>
  }

  export type EmprestimoUpsertWithoutItens_emprestimoInput = {
    update: XOR<EmprestimoUpdateWithoutItens_emprestimoInput, EmprestimoUncheckedUpdateWithoutItens_emprestimoInput>
    create: XOR<EmprestimoCreateWithoutItens_emprestimoInput, EmprestimoUncheckedCreateWithoutItens_emprestimoInput>
    where?: EmprestimoWhereInput
  }

  export type EmprestimoUpdateToOneWithWhereWithoutItens_emprestimoInput = {
    where?: EmprestimoWhereInput
    data: XOR<EmprestimoUpdateWithoutItens_emprestimoInput, EmprestimoUncheckedUpdateWithoutItens_emprestimoInput>
  }

  export type EmprestimoUpdateWithoutItens_emprestimoInput = {
    data_emprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    prazo_de_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    leitor?: LeitorUpdateOneRequiredWithoutEmprestimosNestedInput
  }

  export type EmprestimoUncheckedUpdateWithoutItens_emprestimoInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_emprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    prazo_de_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    id_leitor?: IntFieldUpdateOperationsInput | number
  }

  export type LivroUpsertWithoutItens_emprestimoInput = {
    update: XOR<LivroUpdateWithoutItens_emprestimoInput, LivroUncheckedUpdateWithoutItens_emprestimoInput>
    create: XOR<LivroCreateWithoutItens_emprestimoInput, LivroUncheckedCreateWithoutItens_emprestimoInput>
    where?: LivroWhereInput
  }

  export type LivroUpdateToOneWithWhereWithoutItens_emprestimoInput = {
    where?: LivroWhereInput
    data: XOR<LivroUpdateWithoutItens_emprestimoInput, LivroUncheckedUpdateWithoutItens_emprestimoInput>
  }

  export type LivroUpdateWithoutItens_emprestimoInput = {
    nome_livro?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    versao?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
    idioma?: StringFieldUpdateOperationsInput | string
    qtde_total?: IntFieldUpdateOperationsInput | number
    qtde_disponivel?: IntFieldUpdateOperationsInput | number
    autor?: AutorUpdateOneRequiredWithoutLivrosNestedInput
  }

  export type LivroUncheckedUpdateWithoutItens_emprestimoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_livro?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    versao?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
    idioma?: StringFieldUpdateOperationsInput | string
    qtde_total?: IntFieldUpdateOperationsInput | number
    qtde_disponivel?: IntFieldUpdateOperationsInput | number
    id_autor?: IntFieldUpdateOperationsInput | number
  }

  export type EmprestimoCreateManyLeitorInput = {
    id?: number
    data_emprestimo: Date | string
    prazo_de_devolucao: Date | string
    observacoes?: string | null
  }

  export type EmprestimoUpdateWithoutLeitorInput = {
    data_emprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    prazo_de_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    itens_emprestimo?: ItemEmprestimoUpdateManyWithoutEmprestimoNestedInput
  }

  export type EmprestimoUncheckedUpdateWithoutLeitorInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_emprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    prazo_de_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    itens_emprestimo?: ItemEmprestimoUncheckedUpdateManyWithoutEmprestimoNestedInput
  }

  export type EmprestimoUncheckedUpdateManyWithoutLeitorInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_emprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    prazo_de_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LivroCreateManyAutorInput = {
    id?: number
    nome_livro: string
    editora: string
    versao: number
    ano: number
    genero: string
    idioma: string
    qtde_total: number
    qtde_disponivel: number
  }

  export type LivroUpdateWithoutAutorInput = {
    nome_livro?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    versao?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
    idioma?: StringFieldUpdateOperationsInput | string
    qtde_total?: IntFieldUpdateOperationsInput | number
    qtde_disponivel?: IntFieldUpdateOperationsInput | number
    itens_emprestimo?: ItemEmprestimoUpdateManyWithoutLivroNestedInput
  }

  export type LivroUncheckedUpdateWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_livro?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    versao?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
    idioma?: StringFieldUpdateOperationsInput | string
    qtde_total?: IntFieldUpdateOperationsInput | number
    qtde_disponivel?: IntFieldUpdateOperationsInput | number
    itens_emprestimo?: ItemEmprestimoUncheckedUpdateManyWithoutLivroNestedInput
  }

  export type LivroUncheckedUpdateManyWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_livro?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    versao?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
    idioma?: StringFieldUpdateOperationsInput | string
    qtde_total?: IntFieldUpdateOperationsInput | number
    qtde_disponivel?: IntFieldUpdateOperationsInput | number
  }

  export type ItemEmprestimoCreateManyLivroInput = {
    id?: number
    data_de_devolucao: Date | string
    valor_multa: number
    status: string
    id_emprestimo: number
  }

  export type ItemEmprestimoUpdateWithoutLivroInput = {
    data_de_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_multa?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    emprestimo?: EmprestimoUpdateOneRequiredWithoutItens_emprestimoNestedInput
  }

  export type ItemEmprestimoUncheckedUpdateWithoutLivroInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_de_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_multa?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    id_emprestimo?: IntFieldUpdateOperationsInput | number
  }

  export type ItemEmprestimoUncheckedUpdateManyWithoutLivroInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_de_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_multa?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    id_emprestimo?: IntFieldUpdateOperationsInput | number
  }

  export type ItemEmprestimoCreateManyEmprestimoInput = {
    id?: number
    data_de_devolucao: Date | string
    valor_multa: number
    status: string
    id_livro: number
  }

  export type ItemEmprestimoUpdateWithoutEmprestimoInput = {
    data_de_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_multa?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    livro?: LivroUpdateOneRequiredWithoutItens_emprestimoNestedInput
  }

  export type ItemEmprestimoUncheckedUpdateWithoutEmprestimoInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_de_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_multa?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    id_livro?: IntFieldUpdateOperationsInput | number
  }

  export type ItemEmprestimoUncheckedUpdateManyWithoutEmprestimoInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_de_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_multa?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    id_livro?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}