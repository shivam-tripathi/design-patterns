# Adapter Pattern
- An Adapter Pattern says that just "converts the interface of a class into another interface that a client wants".
- The Adapter Pattern is also known as Wrapper.
- It is a **structural pattern**
- Advantage of Adapter Pattern
    - It allows two or more previously incompatible objects to interact.
    - It allows reusability of existing functionality.
- It is used when an object needs to utilize an existing class with an incompatible interface or when we want to create a reusable class that cooperates with classes which don't have compatible interfaces. 
- UML:
    - _Target Interface_: This is the desired interface class which will be used by the clients.
    - _Adapter class_: This class is a wrapper class which implements the desired target interface and modifies the specific request available from the Adaptee class.
    - _Adaptee class_: This is the class which is used by the Adapter class to reuse the existing functionality and modify them for desired use.
    - _Client_: This class will interact with the Adapter class.
- 

