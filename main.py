class Program:
    def __init__(self, x):
        self.x = x

    def dec_to_bin(self):
        result = ""
        x = self.x
        while x > 0:
            temp = x % 2
            result += str(temp)
            x = x // 2
        return result[::-1]

    def bin_to_dec(self):
        x = self.x
        number = x[::-1]
        suma = 0
        i = 0

        for char in number:
            temp = int(char) * (2**i)
            suma = suma + temp
            i = i + 1

        return suma

Test = Program('11110')
print(Test.bin_to_dec())
