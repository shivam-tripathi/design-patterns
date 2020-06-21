class Singleton:
    __instance = None
    def __init__(self):
        if not Singleton.__instance:
            print("__init__ method called")
        else:
            print("__instance already initialized", self.getInstance())

    @classmethod
    def getInstance(cls):
        if not cls.__instance:
            cls.__instance = Singleton()

        return cls.__instance

s = Singleton()
print('>>', s.getInstance())

s1 = Singleton()
print('>> ', s1.getInstance())
