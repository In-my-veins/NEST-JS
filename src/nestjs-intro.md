# NestJS Lesson 1: The Big Picture

NestJS is a backend framework for building APIs with TypeScript.

You can think of it like this:

- React is for building the frontend.
- NestJS is for building the backend.
- TypeScript gives both of them strong typing.

## What A Backend Does

A backend can:

- receive requests from users
- read or save data
- check login details
- return responses to the frontend

Example:

```txt
Frontend sends:
GET /users

Backend returns:
[
  { "id": 1, "name": "Aime" },
  { "id": 2, "name": "Sarah" }
]
```

## The 3 Main NestJS Parts

NestJS uses three important building blocks:

## 1. Controller

A controller receives HTTP requests.

Example:

```ts
@Controller("users")
export class UsersController {
  @Get()
  findAll() {
    return ["Aime", "Sarah"];
  }
}
```

This means:

```txt
GET /users
```

will return:

```ts
["Aime", "Sarah"]
```

## 2. Service

A service contains the business logic.

Example:

```ts
export class UsersService {
  findAll() {
    return ["Aime", "Sarah"];
  }
}
```

The controller should receive the request.
The service should do the real work.

## 3. Module

A module groups related controllers and services together.

Example:

```ts
@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
```

## Simple Flow

```txt
Request -> Controller -> Service -> Response
```

Example:

```txt
GET /users
```

Flow:

```txt
UsersController receives the request.
UsersService gets the users.
UsersController returns the response.
```

## Decorators

NestJS uses decorators.

Decorators start with `@`.

Examples:

```ts
@Controller()
@Get()
@Post()
@Module()
@Injectable()
```

They add special behavior to classes and methods.

## What We Will Learn Next

1. Create a real NestJS project.
2. Understand `main.ts`.
3. Understand `app.module.ts`.
4. Create our first controller.
5. Create our first service.
6. Build a small users API.

## Mini Exercise

Answer these in your own words:

1. What does a controller do?
2. What does a service do?
3. What does a module do?
4. What is the simple NestJS request flow?
