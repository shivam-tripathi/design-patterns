# Protoype Pattern
- It is used to creating duplicate object while keeping performance in mind.
- Creational pattern
- Requires implementing a prototype interface while tells to create clone of the current object
- It is used when creation of object is costly, for example from database operation. We cache the object, and return it's clone for subsequent calls, updating as and when required.
- Implementation:
![Diagram](https://www.tutorialspoint.com/design_pattern/images/prototype_pattern_uml_diagram.jpg)
- Implementation:
    1. Create an abstract class implementing Clonable interface.
    2. Create concrete classes extending the above class.
    3. Create a class to get concrete classes from database and store them in a Hashtable.
    4. PrototypeDemo uses ShapeCache class to get clones of shapes stored in a Hashtable.
    5. Verify the output.
