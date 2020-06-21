# Singleton Design pattern
- Creational design pattern.
- Provides
    - a mechanism to have one and only one object of a given type
    - a global point of access
    - Controlling concurrent access to resources that are shared
- Use cases: Logging, database operations, printer spoolers
- Implementation
    - Override dunder method `__new__`
    - Initializing an private instance
- All modules are singletons by default
    - Checks if a module has been imported
        - If imported, returns the module for the import
        - If not imported, imports and instantiates it
    - When a module is imported, it is initialized. If the same module is imported again, it is not initialized again (Singleton).
- Monostate singleton pattern
    - GoF's singleton patterns states there should be one and only one object of class.
    - Alex Martelli states developers should be bothered about state and behavior rather than identity - multiple instance sharing same state (monostate).
    - Implementation
        - Set `__dict__` to static variable