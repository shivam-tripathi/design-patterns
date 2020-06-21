class Borg:
    __shared_state = {"1": "2"}
    def __init__(self):
        self.x = 1
        self.__dict__ = self.__shared_state
        pass

b = Borg()
b1 = Borg()
b.x = 4

print('Borg objects b:', b, ' b1: ', b1)
print('Object state b:', b.__dict__, ' b1: ', b1.__dict__)
print(b.x, b1.x)
b.y = 100
print(b.y, b1.y)
