1. nest new retro-football

2. Nestjs modules

Each application has at least one module - the root module. That is the starting point of the application.
Modules are an effective way to organize components by a closely related set of capabilities (ex. per feature).
It is good practise to have a folder per module, containing the module's components.
Modules are singletons, therefor a module can be imported by multiple other modules.

Defining a module

A module is defined by annotating a class with the @Module decorator.
The decorator provides metadata that Nest uses to organize the application structure.

@Module Decorator Properties

The properties that we can provide to the Module decorator:

Providers: Array of providers to be available within the module via dependency injection.

Controllers: Array of controllers to be instantiated within the module.

Exports: Array of providers to export to other modules.

Imports: List of modules required by this module. Any exported provider by these modules will now be available in our module via dependency injection.

3. Create Teams module

nest g module teams

4. NestJs controllers

Responsible for handling incoming requests and returning responses to the client.
Bount to a specifik path ('/teams').
Contain handlers, which handles endpoints and request methods.

Controllers are defined by decorating a class with the @Controller decorator.
The decorator accepts a string, which is the path to be handled by the controller.

Defining a handler

Handlers are simply methods withing the controller class, decorated with decorators such as @Get, @Post, @Delete etc

```
@Controller('/teams')
export class TeamsController {
  @Get()
  getAllTasks() {
    return ...
  }
}
```

5. Creating a teams controller

nest g controller teams --no-spec

6. NestJS providers

Can be injected into constructors if decorated as an @Injectable, via dependency injection.

Can be a plain value, a class, sync/async factory etc.

Providers must be provided to a module for them to be usable.

Can be exported from a module, and then be available to other modules that import it.

7. Services

Defined as providers. Not all providers are services 

The main source of business logic. For example, a service will be called from a controller to validate date, create an item in the db and return a response.

8. Create a Teams service

nest g service teams --no-spec

9. defining a teams model

If we want to be able to create a team we node define the shape of the team

10. NestJS Pipes

Pipes operate on the arguments to be processed by the route handler, just before the handler is called.

Pipes can perform data transformation or data validation.

Pipes can return data, either original or modified, which will be passed on to the route handler.

npm i class-validator class-transformer
  
11. Postgres on Docker

docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres

12. PGADMIN

13. Setting up a DB connection
npm i typeorm @nestjs/typeorm pg
















































