
def fab(max):
    n, a, b = 0, 0, 1

    while n < max:
        print('init ------')
        yield b
        print('b : %d ' % b)
        a, b = b, a + b
        n = n + 1


for n in fab(5):
    print('n : %d' % n)
